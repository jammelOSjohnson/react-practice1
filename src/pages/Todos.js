import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll(),
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('here')
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll(),
            })
        })
    }

    componentDidUpdate(){
        console.log("component updated")
    }

    render() {
        const { todos } = this.state;
        //console.log(todos)
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })

        return (
            <>
                <h1 style={{color: "red"}}>Todos</h1>
                <ul>{TodoComponents}</ul>
            </>
        )
    }
}