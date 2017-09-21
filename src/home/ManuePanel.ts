/**
 * 主菜单栏(下边条界面菜单)
 */
class ManuePanel extends ui.home.ManuePanelUI{

    private static sildTime:number=300; //滑动时间
    private manueArr:Array<any>;        //存储面板的数组
    private gamePanel:GamePanel;        //对战面板
    private socialPanel:SocialPanel;    //社交面板
    private bagPanel:BagPanel;          //背包面板
    private shoopPanel:ShoopPanel;      //商店面板
    private preX:number;                //按下时坐标
    private currIndex:number=0;         //当前菜单下标

    constructor() {
        super();
        this.initUi();
        this.initEvent();
        // Laya.timer.loop(100,this,this.aaa);
    }

    private aaa():void
    {
        console.log(this.list_manue.hScrollBar.value);
    }

    private initUi():void
    {
        this.tab_bar.selectedIndex=0;
        this.gamePanel=new GamePanel();
        this.socialPanel=new SocialPanel();
        this.bagPanel=new BagPanel();
        this.shoopPanel=new ShoopPanel();
        this.manueArr=[this.gamePanel,this.socialPanel,this.bagPanel,this.shoopPanel];
        // this.list_manue.hScrollBar.visible=false;
        this.list_manue.hScrollBar.elasticBackTime=200; //设置橡皮筋回弹时间。单位为毫秒。
        this.list_manue.hScrollBar.elasticDistance=50;  //设置橡皮筋极限距离。
        
        for(let i=0;i<this.manueArr.length;i++)
        {
            let panel:Laya.Sprite=this.manueArr[i];
            panel.x=Laya.stage.width*i;
            this.list_manue.addChild(panel); 
            panel.on(Laya.Event.MOUSE_DOWN,this,this.fingerDown);
        }

    }

    private initEvent():void
    {
        this.btn_game.on(Laya.Event.CLICK,this,this.openPanel,[0]);
        this.btn_social.on(Laya.Event.CLICK,this,this.openPanel,[1]);
        this.btn_rank.on(Laya.Event.CLICK,this,this.openPanel,[2]);
        this.btn_my.on(Laya.Event.CLICK,this,this.openPanel,[3]);
    }

    /**
     * 手指按下
     */
    private fingerDown(e:Laya.Event=null):void
    {
        this.preX=e.stageX;
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.fingerUp);
    }

     /**
     * 手指抬起
     */
    private fingerUp(e:Laya.Event=null):void
    {
        if(e.stageX-this.preX<-50)           //向右
        {
            this.currIndex++;
            if(this.currIndex>3) this.currIndex=3;
        }
        if(e.stageX-this.preX>50)          //向左
        {
            this.currIndex--;
            if(this.currIndex<0) this.currIndex=0;
        }
        Laya.stage.off(Laya.Event.MOUSE_UP,this,this.fingerUp);
        this.openPanel(this.currIndex);
    }

    //滑动到对应面板
    private openPanel(pIndex:number=0,e:Laya.Event=null):void
    {
        this.currIndex=pIndex;
        this.tab_bar.selectedIndex=pIndex;
        Laya.Tween.to(this.list_manue.hScrollBar,{value:Laya.stage.width*pIndex},ManuePanel.sildTime,Laya.Ease.backOut,Laya.Handler.create(this,this.onComplete));
    }

    private onComplete():void
    {
        this.list_manue.scrollTo(Laya.stage.width*this.currIndex);
        Laya.timer.clearAll(this.list_manue.hScrollBar);
    }
}

/**
 * 菜单栏
 */
var manuePanel:ManuePanel;