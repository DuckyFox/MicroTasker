import type { UserData } from '@/Entities/UsersSlice/types/UsersTypes';

export interface TaskData {
    id: string;
    title: string;
    description: string;
    price: string;
    author: UserData;
    createdDate: string;
}

export interface TasksState {
    tasks: TaskData[];
}