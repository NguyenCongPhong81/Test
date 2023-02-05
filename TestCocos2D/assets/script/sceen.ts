import { _decorator, Component, Node, input, Input, Button, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('sceen')
export class sceen extends Component {
    @property(Button)
    btnStart: Button = null;
    onLoad(){
        this.btnStart.node.on(Button.EventType.CLICK, this.onbtnStart, this);
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
    onbtnStart(button: Button ){
        director.loadScene('main');
    }
}

