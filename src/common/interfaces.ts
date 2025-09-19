
export interface ITodoListItem {
    id: number;
    title: string;
    description?: string;
    color?: string;
    link?: string;
    isDone: boolean;
    dateDueTo: Date;
    createdAt: Date;
}