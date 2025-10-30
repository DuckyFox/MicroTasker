import { TaskData } from '@/Entities/TasksSlice/types/TasksTypes';

export interface UserData {
    id: string;
    name?: string;
    secondName?: string;
    nickname: string;
    AcceptedTasks: TaskData[];
    PostedTasks: TaskData[];
}

export interface UsersState {
    tasks: UserData[];
}