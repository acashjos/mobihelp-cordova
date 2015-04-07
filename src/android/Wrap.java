/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package in.oxylab.mobihelp;

import java.util.TimeZone;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.util.Log;
import android.provider.Settings;
import com.freshdesk.mobihelp.*;
import java.util.Iterator;
import com.freshdesk.mobihelp.UnreadUpdatesCallback;
import com.freshdesk.mobihelp.MobihelpCallbackStatus;

public class Wrap extends CordovaPlugin {
    public static final String TAG = "Device";
    private  MobihelpConfig conf;
    private static CordovaInterface root;   
    private  CallbackContext  unreadUpdatesCallback=null;
   /*"{
      'AppStoreReviewUrl': null,
      'FeedbackType': null,
      'LaunchCountForReviewPrompt': null,
      'PrefetchSolutions': null,
      'AutoReply': null,"+
      'EnhancedPrivacyModeEnabled': null
    }"*/
    
    /**
     * Constructor.
     */
    public Wrap() {
    }


    /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArry of arguments for the plugin.
     * @param callbackContext   The callback id used when calling back into JavaScript.
     * @return                  True if the action was valid, false if not.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try{
        if (action.equals("support")) { Mobihelp.showSupport(root.getActivity());
            return true;
        }
        else  if (action.equals("feedback")) { Mobihelp.showFeedback(root.getActivity());
            return true;
        }

        else  if (action.equals("converse")) { Mobihelp.showConversations(root.getActivity());
            return true;
        }
        else if(action.equals("ratingPrompt")){Mobihelp.showAppRateDialog(root.getActivity());
          return true; }

        else if(action.equals("init")){
          Mobihelp.init(root.getActivity(),conf);
          return true; }

        else if(action.equals("setConf")){
          return setConf(args.getJSONObject(0));
                 }

        else if(action.equals("getConf")){
          return  getConf(args.getString(0),callbackContext); 
          }
        else  if (action.equals("customData")) { 
            if(args.length()!=3 )            return false;
          Mobihelp.addCustomData(args.getString(0),args.getString(1));//,args.getBoolean(2));  
          return true;
        }

        else  if (action.equals("breadCrumb")) { Mobihelp.leaveBreadCrumb(args.getString(0));
            return true;
        }
        else  if (action.equals("setName")) {  Mobihelp.setUserFullName (root.getActivity(), args.getString(0));
          return true;
        }
        else  if (action.equals("setEmail")) {  Mobihelp.setUserEmail (root.getActivity(), args.getString(0));
          return true;
        }

        else  if (action.equals("clear")) { 
          switch(args.getString(0))
          { //case "CustomData": Mobihelp.clearCustomData(root.getActivity());  break;
            //case "BreadCrumbs": Mobihelp.clearBreadCrumbs(root.getActivity());  break;
            case "UserData": Mobihelp.clearUserData(root.getActivity());  break;
            default: return false;
          }
        }
        else  if (action.equals("getUnreadCount")) {  unreadUpdatesCallback=callbackContext;
          Mobihelp.getUnreadCountAsync (root.getActivity(),countUpdateCallback);
          return true;
        }
       
        else
        return false;
    }
    catch(JSONException e)
    {return false;}
    return false;
  }
@Override
public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
int url_resId=  cordova.getActivity().getResources().getIdentifier("mobi_url", "string", cordova.getActivity().getPackageName());
int key_resId=  cordova.getActivity().getResources().getIdentifier("mobi_key", "string", cordova.getActivity().getPackageName());
int sec_resId=  cordova.getActivity().getResources().getIdentifier("mobi_secret", "string", cordova.getActivity().getPackageName());
int launchcount_resId=  cordova.getActivity().getResources().getIdentifier("mobi_launch_count", "string", cordova.getActivity().getPackageName());
String url = cordova.getActivity().getString(url_resId);
String key = cordova.getActivity().getString(key_resId);
String secret = cordova.getActivity().getString(sec_resId);
    conf= new MobihelpConfig(url, key,secret);
    
    Mobihelp.init(cordova.getActivity(),conf);
root=cordova;

}


private boolean setConf(JSONObject args)
{
    Iterator<String> iter = args.keys();
    while (iter.hasNext()) {
        String key = iter.next();
        try {
            Object value = args.get(key);
            switch(key)
            {
              case "AppStoreReviewUrl":conf.setAppStoreReviewUrl((String) value); break;
              case "FeedbackType":conf.setFeedbackType(FeedbackType.valueOf((String) value)); break;
              case "LaunchCountForReviewPrompt":
                    try{conf.setLaunchCountForReviewPrompt((int)value); }
                    catch(Exception e){}break;
              case "PrefetchSolutions":conf.setPrefetchSolutions((boolean) value); break;
              case "AutoReply":conf.setAutoReplyEnabled((boolean) value); break;
              //case "EnhancedPrivacyModeEnabled":conf.setEnhancedPrivacyModeEnabled((boolean) value); break;
              default: return false;
            }
            
        } catch (Exception e) {
          return false;
        }
    }
    return true;
}


private boolean getConf(String args,CallbackContext callbackContext)
{
  
            switch(args)
            {
              case "AppStoreReviewUrl":callbackContext.success(conf.getAppStoreReviewUrl()); break;
              case "FeedbackType":callbackContext.success(conf.getFeedbackType().toString()); break;
              case "LaunchCountForReviewPrompt":callbackContext.success(conf.getLaunchCountForReviewPrompt()); break;
              case "PrefetchSolutions":callbackContext.success(conf.getPrefetchSolutions()?1:0); break;
              case "AutoReply":callbackContext.success(conf.isAutoReplyEnabled()?1:0); break;
              //case "EnhancedPrivacyModeEnabled":callbackContext.success(conf.isEnhancedPrivacyModeEnabled()?1:0); break;
              default: return false;
            }
            return true;
} 
 UnreadUpdatesCallback countUpdateCallback = new UnreadUpdatesCallback() {
@Override
public void onResult(MobihelpCallbackStatus statusCode, Integer count) {
if(statusCode==MobihelpCallbackStatus.STATUS_SUCCESS )
{if(unreadUpdatesCallback!=null)unreadUpdatesCallback.success(count);}
}
};
       

}