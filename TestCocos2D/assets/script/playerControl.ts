import { _decorator, Component, Node, input,BoxCollider2D, Input, EventKeyboard, Vec3, KeyCode, bezier,Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('playerControl')
export class playerControl extends Component {
    @property(Animation)
    run: Animation|null = null;
    
    

   
    private curPos: Vec3 = new Vec3();
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;
    private newPos: Vec3 = new Vec3();
    




    onLoad(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    start() {

    }

    
    onKeyDown(event: EventKeyboard){
        this.curPos = this.node.getPosition();
        // console.log(this.curPos);
        this.run.play('runanim');
        switch(event.keyCode){
            case KeyCode.KEY_D:
                this.curPos.x += 10;
                this.newPos = new Vec3(this.curPos.x,this.curPos.y,this.curPos.z);
                this.node.setScale(1,1);
                this.node.setPosition(this.newPos);
                break;
            case KeyCode.KEY_S:
                this.curPos.y -= 10;
                this.newPos = new Vec3(this.curPos.x,this.curPos.y,this.curPos.z);
                this.node.setPosition(this.newPos);
                break;
            case KeyCode.KEY_A:
                this.curPos.x -= 10;
                this.newPos = new Vec3(this.curPos.x,this.curPos.y,this.curPos.z);
                this.node.setScale(-1,1);
                this.node.setPosition(this.newPos);

            
                break;
            case KeyCode.KEY_W:
                this.curPos.y += 10;
                this.newPos = new Vec3(this.curPos.x,this.curPos.y,this.curPos.z);
                this.node.setPosition(this.newPos);

            
                break;
        }
    }
    update(deltaTime: number) {
        // this.node.setPosition(this.newPos);
    }
    

}