/**
 * socket服务类
 */
class NetSocket {

    //当前socket服务对象
    private currSocket:Laya.Socket;

    constructor() {
        this.currSocket=new Laya.Socket();
    }

    /**
     * 判断服务是否连接
     */
    public isConnected():boolean
    {
        return this.currSocket.connected;
    }

    /**
     * 连接socket服务(服务地址)
     */
    public connect(addr:string):void
    {
        this.currSocket.connectByUrl(addr);

        this.currSocket.on(Laya.Event.OPEN, this, this.onSocketOpen);
	    this.currSocket.on(Laya.Event.CLOSE, this, this.onSocketClose);
		this.currSocket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
		this.currSocket.on(Laya.Event.ERROR, this, this.onConnectError);
    }

    //连接打开
    private onSocketOpen():void
    {
        console.log("OnSocketOpen");
        frame.onConnectSuccess(this);
    }

    //连接关闭
    private onSocketClose(): void 
    {
		console.log("Socket closed");
	}

    //收到消息
	private onMessageReveived(message: any): void 
    {
        let pack = new NetPackage();
        pack.svr = this;
        pack.msg = message;

        frame.pushPackage(pack);

		this.currSocket.input.clear();  //清除缓存数据
	}

    //连接发生错误
	private onConnectError(e: Event): void 
    {
		console.log("error"+e);
        frame.onConnectFailed(this);
	}

    /**
     * 发送消息
     * @param data 
     */
    public Send(data:any):void
    {
        if(this.isConnected())  //如果已经建立连接
        {
            this.currSocket.send(data);
        }
    }

    /**
     * 断开连接
     */
    public Close():void
    {
        this.currSocket.close();
    }
}

/**
 * 大厅服务
 */
var gLobbySvr:NetSocket;

/**
 * 游戏服务
 */
var gGameSvr:NetSocket;