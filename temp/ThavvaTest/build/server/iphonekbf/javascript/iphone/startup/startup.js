//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "ThavvaTest",
    appName: "KonySampleAF",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.1.2",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "ThavvaTest",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://partnersfcu-dev.konycloud.com/ThavvaTest/MWServlet",
    secureurl: "https://partnersfcu-dev.konycloud.com/ThavvaTest/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeUserWidgets();
    frmTestGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 730130
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmTest.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;