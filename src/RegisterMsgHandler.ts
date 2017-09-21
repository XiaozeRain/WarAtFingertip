/**
 * Frame框架外部提取方法（外部方法我用大写开头）
 */
function RegisterMsgHandler():void
{
    //======================Login=======================//
    frame.insertMsgHandler("LoginRult",gLobbySvr,null,Test.login);
}