export interface ITodoListItem {
    id: number;
    title: string;
    description?: string;
    link?: string;
    isDone: boolean;
    createdAt: Date;
}