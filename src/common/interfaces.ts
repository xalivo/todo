import type {TodoItemColors} from "./enums.ts";

export interface ITodoListItem {
    id: number;
    title: string;
    description?: string;
    color?: TodoItemColors;
    link?: string;
    isDone: boolean;
    dateDueTo: Date;
    createdAt: Date;
}