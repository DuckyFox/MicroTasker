import { TaskData } from '@/Entities/TasksSlice/types/TasksTypes';

export interface UserData {
    id: string;
    name?: string;
    secondName?: string;
    nickname: string;
    AcceptedTasksId: string[];
    PostedTasksId: string[];
}

export interface UsersState {
    Users: UserData[];
}