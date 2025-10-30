import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/App/store/stores';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UsersState } from '../types/UsersTypes';

const initialState: UsersState = {
    users: [
        {
            id: '1',
            name: 'Alex',
            secondName: 'Hersh',
            nickname: 'devAlex',
            AcceptedTasksId: ['3', '8'],
            PostedTasksId: ['1', '6'],
        },
        {
            id: '2',
            name: 'Lena',
            secondName: 'Ivanova',
            nickname: 'lenArt',
            AcceptedTasksId: ['2', '7'],
            PostedTasksId: ['4', '9'],
        },
        {
            id: '3',
            name: 'Dmitry',
            secondName: 'Petrov',
            nickname: 'dimPet',
            AcceptedTasksId: ['1', '5'],
            PostedTasksId: ['2', '10'],
        },
        {
            id: '4',
            name: 'Olga',
            secondName: 'Sokolova',
            nickname: 'okDesign',
            AcceptedTasksId: ['6'],
            PostedTasksId: ['3', '5'],
        },
        {
            id: '5',
            name: 'Nikita',
            secondName: 'Smirnov',
            nickname: 'nikCode',
            AcceptedTasksId: ['4', '9', '10'],
            PostedTasksId: ['7', '8'],
        },
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        
    },
});

export const selectUsers = (state: RootState) => state.users.users;
export default usersSlice.reducer;
