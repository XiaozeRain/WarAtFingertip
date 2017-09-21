
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.home {
    export class BagPanelUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1234},"child":[{"type":"Label","props":{"y":345,"x":139,"width":438,"text":"label","height":275,"bgColor":"#160808"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.BagPanelUI.uiView);
        }
    }
}

module ui.home {
    export class GamePanelUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1234},"child":[{"type":"Label","props":{"y":345,"x":139,"width":438,"text":"label","height":275,"bgColor":"#4a3131"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.GamePanelUI.uiView);
        }
    }
}

module ui.home {
    export class ManuePanelUI extends View {
		public tab_bar:Laya.Tab;
		public bgMask:Laya.Label;
		public btn_game:Laya.Button;
		public btn_social:Laya.Button;
		public btn_rank:Laya.Button;
		public btn_my:Laya.Button;
		public list_manue:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Tab","props":{"y":1234,"x":0,"width":750,"var":"tab_bar","selectedIndex":0,"height":100},"child":[{"type":"Label","props":{"y":0,"x":0,"width":750,"var":"bgMask","height":100,"bgColor":"#ffffff"}},{"type":"Button","props":{"y":21,"x":50,"stateNum":2,"skin":"res/home/btn_home_game.png","name":"item0"}},{"type":"Button","props":{"y":20,"x":240,"stateNum":2,"skin":"res/home/btn_home_social.png","name":"item1"}},{"type":"Button","props":{"y":18,"x":440,"stateNum":2,"skin":"res/home/btn_home_rank.png","name":"item2"}},{"type":"Button","props":{"y":20,"x":635,"stateNum":2,"skin":"res/home/btn_home_social.png","name":"item3"}}]},{"type":"Button","props":{"y":1234,"x":0,"width":185,"var":"btn_game","height":100}},{"type":"Button","props":{"y":1234,"x":187,"width":185,"var":"btn_social","height":100}},{"type":"Button","props":{"y":1234,"x":382,"width":185,"var":"btn_rank","height":100}},{"type":"Button","props":{"y":1234,"x":567,"width":185,"var":"btn_my","height":100}},{"type":"Panel","props":{"y":0,"x":0,"width":750,"var":"list_manue","height":1234,"hScrollBarSkin":"res/shell/hscroll.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.ManuePanelUI.uiView);
        }
    }
}

module ui.home {
    export class ShoopPanelUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1234},"child":[{"type":"Label","props":{"y":345,"x":139,"width":438,"text":"label","height":275,"bgColor":"#f18888"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.ShoopPanelUI.uiView);
        }
    }
}

module ui.home {
    export class SocialPanelUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1234},"child":[{"type":"Label","props":{"y":345,"x":139,"width":438,"text":"label","height":275,"bgColor":"#afa6a6"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.home.SocialPanelUI.uiView);
        }
    }
}
