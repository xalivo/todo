import {create} from "zustand/react";
import type {ITodoListItem} from "../common/interfaces.ts";

interface ITodoStore {
    todoItems: ITodoListItem[];
    setTodoItems: (items: ITodoListItem[]) => void;
    addTodoItem: (item: ITodoListItem) => void;
}

const useTodoStore = create<ITodoStore>((set, get) => ({
    todoItems: [],
    setTodoItems: (items: ITodoListItem[]) => {
        set({todoItems: items});
        localStorage.setItem("todoList", JSON.stringify(items));
    },
    addTodoItem: (item: ITodoListItem) => {
        const newItems = [...get().todoItems, item];
        set({todoItems: newItems});
        localStorage.setItem("todoList", JSON.stringify(newItems));
    },
}));

export default useTodoStore;