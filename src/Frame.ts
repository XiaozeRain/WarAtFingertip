/**
 * 流程框架类
 */
class Frame {

    /**
     * 对应的处理方法
     */
    public msgFun:Function;  

    /**
     * 服务堆
     */
    public msgHeap:Array<NetPackage> = [];

    /**
     * 处理回调数组
     */
    private tblHandler = new Array();

    constructor() {
        //1构建socket服务
        gLobbySvr=new NetSocket();
        gGameSvr=new NetSocket();
        // gLobbySvr.connect(Cfg.LobbySvrAddr);

        //2构建所有面板
        manuePanel=new ManuePanel();

    }

    /**
     * 初始化框架，成功返回true
     */
    public init():boolean
    {
        //注册回调监听
        RegisterMsgHandler();
        Laya.stage.addChild(manuePanel);    //放置菜单栏
        return true;
    }

    /**
     * 运行主框架(执行对回调的监听)
     */
    public run():void
    {
        if(this.msgHeap.length > 0)
        {
            let pack = this.msgHeap.shift();
            this.processMsg(pack);
        }
    }

    /**
     * 注册回调监听
     * @param type 回调类型标签 
     * @param svr 服务
     * @param obj 对此回调的响应类
     * @param fun 接收回调后的处理方法
     */
    public insertMsgHandler(type:string, svr:NetSocket, obj:any, fun:any):void
    {
        var hdler = {};
        hdler['obj']  = obj;
        hdler['svr']  = svr;
        hdler['type'] = type;
        hdler['fun']  = fun;

        this.tblHandler.push(hdler);
    }

    //执行回调处理
    private processMsg(pack:NetPackage):void
    {
        let svr = pack.svr;
        let msg = eval("("+pack.msg+")");
        
        let type = msg['type'];

        for(let idx in this.tblHandler)
        {
            let hdler = this.tblHandler[idx];
            if(hdler['svr'] == svr && hdler['type']== type) 
            {
                if(hdler['obj']==null)
                {
                    hdler['fun'](svr, type, msg);
                }
                else
                {
                    hdler['obj'].msgFun = hdler['fun'];
                    hdler['obj'].msgFun(svr, type, msg);
                }
            }
        }
    }

    /**
     * 存储socket服务
     * @param pack
     */
    public pushPackage(pack:NetPackage):void
    {
        this.msgHeap.push(pack);
    }

    /**
     * socket连接成功
     * @param svr 
     */
    public onConnectSuccess(svr:NetSocket):void
    {
        console.log("onConnectSuccess");
        var login_data = '{"type":"Login","sid":"111", "isapp":1, "acc":"xyz", "pwd":"123123"}';
        gLobbySvr.Send(login_data);
        // if(svr == gGameSvr)  gRoom.OnGameSvrConnectOK();
        // else if(svr == gLobbySvr) gLoginView.OnLobbySvrConnectOK();
    }

    /**
     * 
     * @param svr socket连接失败
     */
    public onConnectFailed(svr:NetSocket):void
    {
        console.log("onConnectFailed");
        // if(svr == gGameSvr) gRoom.OnGameSvrConnectFailed();
        // else if(svr == gLobbySvr) gLoginView.OnLobbySvrConnectFailed();
    }

}

var frame:Frame;