"use client";

import { createContext, useEffect, useState } from "react";
import { TodoContextType, TodoProviderProps } from "./todo-context-type.d";
import { Todo } from "@/models/todo";
import { get, save } from "@/services/todo-service";

// tipando e inicializando o contexto
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {}
});

// criando o componente que retornará o Provider
export default function TodoProvider(props: TodoProviderProps) {
    const [todos, setTodos] = useState<Todo[]>(get);

    // todas as vezes que o todos for alterado, a callback será executada e os todos serão salvos
    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: Todo = {
            id: todos.length + 1,
            title: title,
            done: false
        };
        // utilizando o spread operator para abrir a lista
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        // utilizando o indexOf para identificar o index do todo a ser removido
        const index = todos.indexOf(todo);
        // filtrando os todos para que o todo com index escolhido seja removido
        setTodos(todos.filter((_, i: number) => i !== index));
    }
    
    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            removeTodo,
            toggle
        }}>
            {/* o children é o conteúdo ou componente que estiver encapsulado no TodoProvider */}
            {props.children}
        </TodoContext.Provider>
    );
}