cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-iosrtc.Plugin",
        "file": "plugins/cordova-plugin-iosrtc/dist/cordova-plugin-iosrtc.js",
        "pluginId": "cordova-plugin-iosrtc",
        "clobbers": [
            "cordova.plugins.iosrtc"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-crosswalk-webview": "2.1.0",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-iosrtc": "3.1.0"
};
// BOTTOM OF METADATA
});