/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
* Acts as an interface between Native (android) Mobihelp SDK and Cordova/Phonegap JS code
*
*
* @class Mobihelp
* @author Akash Kurian Jose
* @version 0.5.1
* 
*/
var Mobihelp={};

/**
* Opens mobihelp support screen
*
* @method Support
* @param {Function} success - Function to callback if support screen is opened successfully 
* @param {Function} fail - Function to callback if support screen opening failed
*/
Mobihelp.Support= function (success,fail)
                    {success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'support',[]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.Feedback= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'feedback',[]);}

/**
* Opens mobihelp Conversations screen
*
* @method Conversations
* @param {Function} success - Function to callback if Conversations screen is opened successfully 
* @param {Function} fail - Function to callback if Conversations screen opening failed
*/
Mobihelp.Conversations= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'converse',[]);}

/**
* Opens mobihelp RatingPrompt dialogue
*
* @method ShowRatingPrompt
* @param {Function} success - Function to callback if RatingPrompt dialogue is opened successfully 
* @param {Function} fail - Function to callback if RatingPrompt dialogue opening failed
*/
Mobihelp.ShowRatingPrompt= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'ratingPrompt',[]);}

/**
* Sets mobihelp configurations
*
* @method SetConf
* @param {Object} conf - JSON conf object
     
*           {'AppStoreReviewUrl': (string),         //Android only
*           'FeedbackType': (string),              // "ANONYMOUS" , "NAME_AND_EMAIL_REQUIRED", "NAME_REQUIRED" (Same as FEEDBACK_TYPE_NAME_REQUIRED_AND_EMAIL_OPTIONAL in iOS)
*           'LaunchCountForReviewPrompt': (number),// Number of launches before rate prompt is shown
*           'PrefetchSolutions': (boolean),        // pre-load solutions
*           'AutoReply': (boolean),                // Show an auto reply when a ticket is submited
*           'EnhancedPrivacyModeEnabled': (boolean)// Enhanced Privacy Mode (1.3.1)
*           }
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.SetConf= function (conf,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setConf',[conf]);}

/**
* Gets configuration value for respective key passed
*
* @method GetConf
* @param {String} key - Get config value corresponding to "key". This could be "AppStoreReviewUrl","FeedbackType","LaunchCountForReviewPrompt","PrefetchSolutions","AutoReply" or "EnhancedPrivacyModeEnabled" (1.3.1)
* @param {Function} success - Function to callback if a configuration value is obtained successfully (*required)
* @param {Function} fail - Function to callback if method fails
* @throws {Exception} 
*<pre>
*GetConf(key (string),success (callback function),fail (callback function));
*success callback must be defined and handle one parameter to receive config value 
*</pre>*/
Mobihelp.GetConf= function (key,success,fail)// success=>function(ret){ alert( ret);}
                    { if(typeof success =="undefined") throw("Error: @ GetConf(key (string),success (callback function),fail (callback function));\nsuccess callback must be defined and handle one parameter to receive config value \nTry something like\n function(val){ console.log(val);}");
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'getConf',[key]);}

/**
* Initializes Mobihelp sdk with configuration specified using {{#crossLink "Mobihelp/SetConf:method"}}{{/crossLink}}
*
* @method Init
* @param {Function} success - Function to callback if Mobihelp initialization is successfully 
* @param {Function} fail - Function to callback if Mobihelp initialization failed
*/
Mobihelp.Init= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'init',[]);}

/**
* Adds custom key-value pairs which are attached to tickets
*
* @method AddCustomData
* @param {String} key  - for the key value pair
* @param {String} val  - for the key value pair
* @param {Boolean} sensitive  - is this value sensitive. This has effect only if enhanced-privacy-mode is enabled (1.3.1)
* @param {Function} success - Function to callback if AddCustomData completed successfully 
* @param {Function} fail - Function to callback if AddCustomData failed
*/
Mobihelp.AddCustomData= function (key,val,sensitive,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                    sensitive=sensitive||false;
                     cordova.exec(success,fail, 'Wrap', 'customData',[key,val,sensitive]);}

/**
* Attaches the given text as a breadcrumb to the conversations/tickets.
*
* @method LeaveBreadCrumb
* @param {String} text - Text to be left as breadcrumb
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.LeaveBreadCrumb= function (text,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'breadCrumb',[text]);}

/**
*Set the full name of the user to be reported on the Freshdesk Portal.
*
* @method SetName
* @param {String} val - Full Name value
* @param {Function} success - Function to callback ifSetName is successfully 
* @param {Function} fail - Function to callback if SetName failed
*/
Mobihelp.SetName= function (val,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setName',[val]);}

/**
* Set the email of the user to be reported on the Freshdesk Portal
*
* @method SetEmail
* @param {String} val - Email value
* @param {Function} success - Function to callback if SetEmail is successfully 
* @param {Function} fail - Function to callback if SetEmail failed
*/
Mobihelp.SetEmail= function (val,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setEmail',[val]);}                    

/**
* Clears saved data corresponding to specified key (1.3.1)
*
* @method Clear
* @param {String} key - property to clear. this could be "CustomData" "BreadCrumbs" or "UserData" 
* @param {Function} success - Function to callback if Clear is successfully 
* @param {Function} fail - Function to callback if Clear failed
*/
Mobihelp.Clear= function (key,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'clear',[key]);} /**
/**
* Clears saved user data (name , email)
* @method ClearUserData
* @param {Function} success - Function to callback if ClearUserData is successfully 
* @param {Function} fail - Function to callback if ClearUserData failed
*/
Mobihelp.ClearUserData= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'clear',[UserData]);}                    

/**
* Retrieve the number of unread items across all the conversations for the user synchronously i.e.
*
* @method GetUnreadCount
* @param {Function} success - Function to callback if Feedback screen is opened successfully (required)
* @param {Function} fail - Function to callback if Feedback screen opening failed
* @throws {Exception} 
*<pre>
*GetUnreadCount(key (string),success (callback function),fail (callback function));
*success callback must be defined and handle one parameter to receive count 
*</pre>
*/
Mobihelp.GetUnreadCount= function (success,fail)
                    { if(typeof success =="undefined") throw("Error @ GetUnreadCount(key (string),success (callback function),fail (callback function));\nsuccess callback must be defined and handle one parameter to receive count \nTry something like\n function(val){ console.log(val);}");
                    
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'getUnreadCount',[]);}

if (typeof module !== 'undefined') {
// Export admob
module.exports = Mobihelp;
}
window.mobihelp=Mobihelp;