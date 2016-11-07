# Janus-Echo
##About 
A WebRTC Echo-Test mobile-app for android and browser. Sends video and audio to a server and receives it. 

##Installation
1. Checkout this repository
2. Install cordova ```sudo npm install -g cordova``` (npm should be installed)
3. Change Janus-Server under www/echotest.js to your Janus instance 
	```var server = "ws://www.le-space.de:8188/janus";```
4. Run and test cordova app in browser ```cordova run browser```
5. Run and test cordova app in browser 
	- Connect your mobile with a cable 
	- ```cordova run android```



##Todo:


##Done:
2016-11-07 - push, tag and deliver version 0.1
2016-11-07 - copy echo example into cordova-app
		   - add crosswalk cordova plugin 
			  cordova plugin add cordova-plugin-crosswalk-webview
		   - add permissions
2016-11-06 - make android app with cordova 
2016-11-06 - Install & Try Echo Example on local webserver through example files on github 
2016-11-06 - installed Janus Server via docker on integration server 
		   - https://github.com/meetecho/janus-gateway/issues/671
		   - https://github.com/krull/docker-janus
		   - http://www.le-space.de:8088/janus/info
2016-11-06 - installed docker-compose on integration server https://docs.docker.com/compose/install/


##Failed: 
	- Migrate example to Meteor (with module janus-gateway-js api not clear!)
		- install janus.js on meteor via npm
			https://forums.meteor.com/t/meteor-1-4-javascript-libraries/27156/11
		- install  janus-gateway-js npm in meteor
			https://www.npmjs.com/package/janus-gateway-js
			https://github.com/cargomedia/janus-gateway-js
			https://www.npmjs.com/package/rtc-janus or 
		- how-to add a npm plugin to meteor
			https://guide.meteor.com/using-npm-packages.html meteor npm install --save moment
		- Echo-Test Example https://janus.conf.meetecho.com/docs/JS.html
