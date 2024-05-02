"use client";

import { useContext } from "react";
import { TodoContextType } from "@/contexts/todo-context-type.d";
import TodoListItem from "./todo-list-item";
import { TodoContext } from "@/contexts/todo-context";

export default function TodoList() {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                            />
                        )
                    )
                }
            </tbody>
        </table>
    );
}