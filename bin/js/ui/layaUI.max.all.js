var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var home;
    (function (home) {
        var ManuePanelUI = (function (_super) {
            __extends(ManuePanelUI, _super);
            function ManuePanelUI() {
                return _super.call(this) || this;
            }
            ManuePanelUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.home.ManuePanelUI.uiView);
            };
            ManuePanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Tab", "props": { "y": 1186, "x": 0, "width": 750, "space": 151, "selectedIndex": 0, "name": "item0,item1,item2,item3", "height": 148 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 750, "var": "bgMask", "height": 148, "bgColor": "#ffffff" } }, { "type": "Button", "props": { "y": 24, "x": 46, "var": "btn_game", "stateNum": 2, "skin": "res/home/btn_home_game.png", "scaleY": 1.5, "scaleX": 1.5 } }, { "type": "Button", "props": { "y": 23, "x": 226, "var": "btn_social", "stateNum": 2, "skin": "res/home/btn_home_social.png", "scaleY": 1.5, "scaleX": 1.5 } }, { "type": "Button", "props": { "y": 20, "x": 418, "var": "btn_rank", "stateNum": 2, "skin": "res/home/btn_home_rank.png", "scaleY": 1.5, "scaleX": 1.5 } }, { "type": "Button", "props": { "y": 23, "x": 603, "var": "btn_my", "stateNum": 2, "skin": "res/home/btn_home_social.png", "scaleY": 1.5, "scaleX": 1.5 } }] }] };
            return ManuePanelUI;
        }(View));
        home.ManuePanelUI = ManuePanelUI;
    })(home = ui.home || (ui.home = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map