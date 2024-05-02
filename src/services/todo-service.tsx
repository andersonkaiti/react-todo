import { Todo } from "@/models/todo";

const TODO_STORE = "todos";

export const get = (): Todo[] => {
    if(typeof localStorage === "undefined") return [];

    const data = localStorage.getItem(TODO_STORE) || "";
    try {
        const result = JSON.parse(data) as Todo[];
        return result;
    } catch {
        return [];
    }
}

export const save = (data: Todo[]) => {
    if(typeof localStorage === "undefined") return;

    if(data?.length >= 1)
        localStorage.setItem(TODO_STORE, JSON.stringify(data));
}