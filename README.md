<!---
 license: Licensed to the Apache Software Foundation (ASF) under one
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
-->
**Update: 13 July 2015**

**There is an official version available at https://github.com/freshdesk/mobihelp-phonegap . This is an unofficial version and will no longer be followed up**
# Freshdesk Mobihelp -cordova wrapper plugin
The plugin makes use of official Freshdesk's Mobihelp SDK v1.3.0 for android. It implements Javascript methodes to invoke the inbuilt SDK features. The plugin includes a copy of Mobihelp SDK and Android support library appcompat_v7.

Plugin documentation: [doc/index.html](doc/index.html)

**This plugin currently supports android only. iOS part is being worked upon**

##INSTALLATION
You have to create a freshdesh developer account, obtain an application key and secret to get it working. The integration guide is a good place to start. Note that you have to create a new app for Android in the controll panel to get the plugin work. 
####[Integration Guide](http://developer.freshdesk.com/mobihelp/android/integration_guide)
Once you have the application key and secret, replace with them, the placeholders in the following command.
**`NB: Please install the plugin only after the required platforms are added`**
```
 cordova plugin add https://github.com/acashjos/mobihelp-cordova.git \
--variable MOBI_URL='https://xxxxxxxx.freshdesk.com' \
--variable MOB_AND_KEY='replace-with-long-android-app-key' \
--variable MOB_AND_SECRET='replace-with-long-android-app-secret
```
[More technical details](http://developer.freshdesk.com/mobihelp/)
