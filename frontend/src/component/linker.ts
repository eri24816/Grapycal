import { Action } from "objectsync-client"
import { Component } from "./component"

type Callback<ARGS extends any[] = any[], OUT = any> = (...args: ARGS) => OUT;

export class Linker extends Component{

    static staticLinkedCallbacks: {action: Action<any>, callback: Callback}[] = []
    static staticLinkedCallbacks2: {element: Node, eventName: string, callback: Callback}[] = []
    static link(action: Action<any>, callback: Callback): void{
        callback = callback.bind(this);
        this.staticLinkedCallbacks.push({action: action, callback: callback});
        action.add(callback);
    }


    linkedCallbacks: {action: Action<any>, callback: Callback}[] = []
    linkedCallbacks2: {element: Node, eventName: string, callback: Callback}[] = []
    /**
     * Use this method to link a callback to an action. 
     * The callback will be automatically bound to this object.
     * The callback will be automatically removed when the object is destroyed.
     * @param action 
     * @param callback 
     */
    public link(action: Action<any>, callback: Callback): void{ //TODO: offer remove when parent changed mode
        callback = callback.bind(this.object);
        this.linkedCallbacks.push({action: action, callback: callback});
        action.add(callback);
    }
    
    public unlink(action: Action<any,any>): void{
        for(let i=0;i<this.linkedCallbacks.length;i++){
            if (this.linkedCallbacks[i].action == action){
                action.remove(this.linkedCallbacks[i].callback);
                this.linkedCallbacks.splice(i,1);
                return;
            }
        }
    }


    public link2(element: Node,eventName: string , callback: Callback): void{ //TODO: offer remove when parent changed mode
        callback = callback.bind(this.object);
        this.linkedCallbacks2.push({element: element, eventName: eventName, callback: callback});
        element.addEventListener(eventName,callback);
    }
    
    public unlink2(element: Node, eventName: string): void{
        for(let i=0;i<this.linkedCallbacks2.length;i++){
            if (this.linkedCallbacks2[i].element == element && this.linkedCallbacks2[i].eventName == eventName){
                element.removeEventListener(eventName,this.linkedCallbacks2[i].callback);
                this.linkedCallbacks2.splice(i,1);
                return;
            }
        }
    }
    onDestroy(): void {
        for(let {action,callback} of this.linkedCallbacks){
            action.remove(callback);
        }
        for(let {element,eventName,callback} of this.linkedCallbacks2){
            element.removeEventListener(eventName,callback);
        }
    }
}