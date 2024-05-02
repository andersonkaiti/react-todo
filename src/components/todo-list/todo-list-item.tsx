"use client";

import { TodoContext } from "@/contexts/todo-context";
import { TodoContextType } from "@/contexts/todo-context-type.d";
import { Todo } from "@/models/todo";
import Image from "next/image";
import { useContext } from "react";

interface TodoListItemProps {
    todo: Todo;
}

export default function TodoListItem(props: TodoListItemProps) {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    const handleChange = () => {
        toggle(props.todo);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input
                        type="checkbox"
                        className="uk-checkbox"
                        checked={props.todo.done}
                        onChange={handleChange}
                    />
                </label>
            </td>
            <td className="uk-width-expand">
                {props.todo.title}
            </td>
            <td className="uk-width-auto">
                <button
                    style={{ cursor: "pointer" }}
                    className="uk-icon-button uk-button-danger"
                    onClick={() => onRemove(props.todo)}
                >
                    <Image
                        width="20"
                        height="20"
                        src="/trash.svg"
                        alt="Trash"
                    />
                </button>
            </td>
        </tr>
    );
}