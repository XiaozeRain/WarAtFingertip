/**
 * 日志输出工具类(开发时使用)
 */
var Trace = (function () {
    function Trace() {
    }
    /**
     * 输出日志（日志信息,谁输出的）
     */
    Trace.log = function (msg, who) {
        if (Trace.show)
            console.log(msg);
    };
    //想要显示的日志
    Trace.showLog = function (who) {
    };
    //想要隐藏的日志
    Trace.hideLog = function (who) {
    };
    /**
     * 是否显示日志
     */
    Trace.show = true;
    return Trace;
}());
//# sourceMappingURL=Trace.js.map