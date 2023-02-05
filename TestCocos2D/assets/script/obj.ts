import { _decorator, Component, Node, Input, EventMouse, input, EventTouch, TiledMap, TiledObjectGroup, TiledTile, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('obj')
export class obj extends Component {
    @property(Node)
    arrowSign: Node = null;
    @property(Node)
    player: Node = null;




    onLoad(){      
        this.node.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }
    start() {
        
    }

   
    onMouseDown(event: EventMouse){
        let arrowPos = this.arrowSign.getPosition();
        this.player.setPosition(arrowPos);
        console.log(arrowPos);
        console.log(this.player.getPosition());
        
        
    }
    update(deltaTime: number) {
       
    }
}

