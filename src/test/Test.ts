class Test {
    constructor(parameters) {
        
    }

    /**
     * 登录回调处理
     * @param svr 
     * @param type 
     * @param msg 
     */
    public static login(svr:NetSocket, type:string, msg:any):void
    {
        console.log("LoginRult",msg);
    }

}