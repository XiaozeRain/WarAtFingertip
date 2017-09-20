
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.home {
    export class ManuePanelUI extends View {
		public bgMask:Laya.Label;
		public btn_game:Laya.Button;
		public btn_social:Laya.Button;
		public btn_rank:Laya.Button;
		public btn_my:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Tab","props":{"y":1186,"x":0,"width":750,"space":151,"selectedIndex":0,"name":"item0,item1,item2,item3","height":148},"child":[{"type":"Label","props":{"y":0,"x":0,"width":750,"var":"bgMask","height":148,"bgColor":"#ffffff"}},{"type":"Button","props":{"y":24,"x":46,"var":"btn_game","stateNum":2,"skin":"res/home/btn_home_game.png","scaleY":1.5,"scaleX":1.5}},{"type":"Button","props":{"y":23,"x":226,"var":"btn_social","stateNum":2,"skin":"res/home/btn_home_social.png","scaleY":1.5,"scaleX":1.5}},{"type":"Button","props":{"y":20,"x":418,"var":"btn_rank","stateNum":2,"skin":"res/home/btn_home_rank.png","scaleY":1.5,"scaleX":1.5}},{"type":"Button","props":{"y":23,"x":603,"var":"btn_my","stateNum":2,"skin":"res/home/btn_home_social.png","scaleY":1.5,"scaleX":1.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.ManuePanelUI.uiView);
        }
    }
}
