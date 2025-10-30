import type { UserData } from '@/Entities/UsersSlice/types/UsersTypes';

export type taskType = 'category1' | 'category2' | 'category3' | 'category4'

export interface TaskData {
    id: string;
    title: string;
    description: string;
    price: string;
    authorId: string;
    createdDate: string;
    taskType: taskType;
    tags: string[];
}

export interface TasksState {
    tasks: TaskData[];
}