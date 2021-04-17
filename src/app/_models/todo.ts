export interface ITodo {
    id?: string;
    title?: string;
    category?: string;
    subCategory?: string;
    status?: TodoStatus;
    doneBefore?: string;
    createdBy?: string;
    createdDate?: string;
    updatedDate?: string;
}

export enum TodoStatus {
    NotStarted = 1,
    InProgress = 2,
    Completed = 3,
    Cancelled = 4
}