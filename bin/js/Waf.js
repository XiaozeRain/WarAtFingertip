// 程序入口
var Waf = (function () {
    function Waf() {
        //初始化大小和模式
        Laya.init(750, 1334, Laya.WebGL);
        //垂直居中对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //水平居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置适配模式
        Laya.stage.scaleMode = "exactfit";
        //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
        Laya.stage.screenMode = "vertical";
        //设置舞台背景色
        Laya.stage.bgColor = "#e9e9e9";
        this._gameRes = new Array();
        Laya.loader.load("data/gameRes.json", Laya.Handler.create(this, this.readNeedsRes));
    }
    //读取所要加载的素材内容json配置
    Waf.prototype.readNeedsRes = function () {
        var arr = Laya.loader.getRes("data/gameRes.json");
        Trace.log(this._gameRes, 1);
        //列出要加载的素材并存放到数组
        for (var i = 0; i < arr.length; i++) {
            this.NeedLoadRes(arr[i].name, arr[i].url);
        }
        //执行加载素材
        this.DoLoadRes();
    };
    //需要加载的游戏素材存放如数组
    Waf.prototype.NeedLoadRes = function (name, url) {
        this._gameRes[name] = { url: url, loaded: false };
    };
    //遍历加载所需素材
    Waf.prototype.DoLoadRes = function () {
        for (var name_1 in this._gameRes) {
            Laya.loader.load([{ url: this._gameRes[name_1].url, type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoaded, [name_1]));
        }
    };
    //加载完成回调
    Waf.prototype.onLoaded = function (name) {
        console.log(name + " 加载完成");
        this._gameRes[name].loaded = true;
        for (var name_2 in this._gameRes) {
            if (!this._gameRes[name_2].loaded)
                return;
        }
        this.bootGame();
    };
    //开始游戏
    Waf.prototype.bootGame = function () {
        Trace.log("游戏开始", 1);
    };
    return Waf;
}());
new Waf();
//# sourceMappingURL=Waf.js.map