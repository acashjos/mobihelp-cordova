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
* @class Mobihelp
* @author Akash Kurian Jose
* @version 1.0
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
*                           {'AppStoreReviewUrl': (string),     //Android only
*                            'FeedbackType': (string),          // "ANONYMOUS" , "NAME_AND_EMAIL_REQUIRED", "NAME_REQUIRED" 
*                            'LaunchCountForReviewPrompt': null,
*                            'PrefetchSolutions': null,
*                            'AutoReply': null,"+
*                            'EnhancedPrivacyModeEnabled': null
*                            }
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.SetConf= function (conf,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setConf',[conf]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.GetConf= function (key,success,fail)// success=>function(ret){ alert( ret);}
                    { if(typeof success =="undefined") throw("Error: @ GetConf(key (string),success (callback function),fail (callback function));\nsuccess callback must be defined and handle one parameter to receive config value \nTry something like\n function(val){ console.log(val);}");
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'getConf',[key]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.Init= function (success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'init',[]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.AddCustomData= function (key,val,sensitive,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                    sensitive=sensitive||false;
                     cordova.exec(success,fail, 'Wrap', 'customData',[key,val,sensitive]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.LeaveBreadCrumb= function (text,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'breadCrumb',[text]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.SetName= function (val,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setName',[val]);}

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.SetEmail= function (val,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'setEmail',[val]);}                    

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.Clear= function (key,success,fail)
                    { success=success||function(){};
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', 'clear',[key]);}                    

/**
* Opens mobihelp Feedback screen
*
* @method Feedback
* @param {Function} success - Function to callback if Feedback screen is opened successfully 
* @param {Function} fail - Function to callback if Feedback screen opening failed
*/
Mobihelp.GetUnreadCount= function (key,success,fail)
                    { if(typeof success =="undefined") throw("Error @ GetUnreadCount(key (string),success (callback function),fail (callback function));\nsuccess callback must be defined and handle one parameter to receive count \nTry something like\n function(val){ console.log(val);}");
                    
                    fail=fail||function(){};
                     cordova.exec(success,fail, 'Wrap', ' getUnreadCount',[]);}

if (typeof module !== 'undefined') {
// Export admob
module.exports = Mobihelp;
}
window.mobihelp=Mobihelp;