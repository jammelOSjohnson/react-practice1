import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Water Bill",
                complete: false
            },
        ]
    }

    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id, 
            text,
            complete: false
        });

        this.emit("change");
    }
 
    getAll(){
        return this.todos;
    }

    handleActions(action){
        console.log("todo store received an action", action);
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export  default todoStore;