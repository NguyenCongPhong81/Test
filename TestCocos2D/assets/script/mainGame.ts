import { _decorator, Component, Node,BoxCollider2D, ITriggerEvent, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mainGame')
export class mainGame extends Component {
    @property(Node)
    playerCollider: Node = null;


    start() {
        let colliderPlayer = this.node.getComponent(BoxCollider2D);
        colliderPlayer.on('onTriggerStay', this.onTriggerStay, this);

    }

    update(deltaTime: number) {
        
    }
    onTriggerStay(event: ITriggerEvent){
        director.loadScene('question1');
    }
}

