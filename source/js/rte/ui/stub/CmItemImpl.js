/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
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

/**
 * @class CUI.rte.ui.stub.CmItemImpl
 * @private
 */
CUI.rte.ui.stub.CmItemImpl = new Class({

    toString: "CmItemImpl",

    extend: CUI.rte.ui.CmItem,

    /**
     * @cfg {Object} text Descriptive text for the context menu item
     */
    text: null,

    /**
     * The selection context (contains selection definition + node list represented by the
     * selection).
     * @type Object
     * @private
     */
    selectionContext: null,

    /**
     * The edit context to be used
     * @type CUI.rte.EditContext
     * @private
     */
    editContext: null,


    construct: function(config) {
        // TODO ...
        CUI.rte.Utils.apply(this, config);
    },

    build: function(items, editorKernel, editContext, selectionContext) {
        this.editorKernel = editorKernel;
        this.selectionContext = selectionContext;
        this.editContext = editContext;
        // TODO ...
    }

});