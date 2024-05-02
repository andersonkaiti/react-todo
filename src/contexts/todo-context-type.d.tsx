import { Todo } from "@/models/todo";

export interface TodoContextType {
    todos: Todo[];
    addTodo(title: string): void;
    removeTodo(todo: Todo): void;
    toggle(todo: Todo): void;
}

export interface TodoProviderProps {
    children: React.ReactNode;
}