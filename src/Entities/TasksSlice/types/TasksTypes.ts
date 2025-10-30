import type { UserData } from '@/Entities/UsersSlice/types/UsersTypes';

export interface TaskData {
    id: string;
    title: string;
    description: string;
    price: string;
    authorId: string;
    createdDate: string;
}

export interface TasksState {
    tasks: TaskData[];
}