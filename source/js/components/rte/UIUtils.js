/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

CUI.rte.UIUtils = function() {

    return {

        addStyleSheet: function(cssToAdd, doc) {
            doc = doc || document;
            var com = CUI.rte.Common;
            if (!CUI.rte.Utils.isArray(cssToAdd)) {
                cssToAdd = [ cssToAdd ];
            }
            var headEl = doc.getElementsByTagName("head")[0];
            var styleSheet = doc.createElement("style");
            styleSheet.type = 'text/css';
            headEl.appendChild(styleSheet);
            var cssText = "";
            var cssCnt = cssToAdd.length;
            for (var c = 0; c < cssCnt; c++) {
                var css = cssToAdd[c];
                cssText += css[".name"] + " {\n";
                for (var key in css) {
                    if (css.hasOwnProperty(key) && (key !== ".name")) {
                        cssText += "    " + key + ": " + css[key] + ";\n";
                    }
                }
                cssText += "}\n\n";
            }
            styleSheet.innerHTML = cssText;
            return styleSheet;
        },

        removeStyleSheet: function(styleSheet) {
            styleSheet.parentNode.removeChild(styleSheet);
        },

        getContainer: function($editable) {
            return $editable.parent();
        },

        getToolbar: function($editable) {
            return CUI.rte.UIUtils.getContainer($editable).find("nav.rte-toolbar");
        }

    }

}();