/**
 * 日志输出工具类(开发时使用)
 */
class Trace {

    /**
     * 是否显示日志
     */
    public static show:boolean=true;    
    
    /**
     * 输出日志（日志信息,谁输出的）
     */
    public static log(msg:any,who:number):void
    {
        if(Trace.show)
            console.log(msg);
    }

    //想要显示的日志
    private static showLog(who:number):void
    {

    }

    //想要隐藏的日志
    private static hideLog(who:number):void
    {

    }

}