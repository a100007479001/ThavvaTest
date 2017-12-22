function addWidgetsfrmTest() {
    frmTest.setDefaultUnit(kony.flex.DP);
    var lblSample = new kony.ui.Label({
        "centerX": "50%",
        "height": "100%",
        "id": "lblSample",
        "isVisible": true,
        "left": "65dp",
        "skin": "slLabel",
        "text": "Sample App to build with Kony App factory",
        "top": "53dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmTest.add(lblSample);
};

function frmTestGlobals() {
    frmTest = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTest,
        "enabledForIdleTimeout": false,
        "id": "frmTest",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0j5efa9328f0043"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};