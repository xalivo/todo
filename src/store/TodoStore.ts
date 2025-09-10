import {create} from "zustand/react";
import type {ITodoListItem} from "../common/interfaces.ts";

interface ITodoStore {
    todoItems: ITodoListItem[];
    setTodoItems: (items: ITodoListItem[]) => void;
    addTodoItem: (item: ITodoListItem) => void;
}

const useTodoStore = create<ITodoStore>((set) => ({
    todoItems: [],
    setTodoItems: (items: ITodoListItem[]) => set({todoItems: items}),
    addTodoItem: (item: ITodoListItem) => set((state) => ({todoItems: [...state.todoItems, item]})),
}));

export default useTodoStore;