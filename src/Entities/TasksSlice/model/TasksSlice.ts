import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/App/store/stores';
import type { TasksState } from '../types/TasksTypes';

const initialState: TasksState = {
    tasks: [
        { 'title':'Central Optimization Manager','description':'Investor','price':'119.73','author':'Tamara Gislason-Stokes','createdDate':'1949-10-14T08:32:58.284Z','id':'1' },
        { 'title':'Chief Marketing Strategist','description':'District','price':'703.36','author':'Kristopher Bode I','createdDate':'1998-11-09T03:01:43.161Z','id':'2' },
        { 'title':'Corporate Markets Officer','description':'Legacy','price':'70.84','author':'Toni Cummerata','createdDate':'2003-06-08T20:17:37.318Z','id':'3' },
        { 'title':'International Directives Liaison','description':'Legacy','price':'881.36','author':'Ida Hegmann','createdDate':'1960-03-26T20:02:27.488Z','id':'4' },
        { 'title':'Investor Implementation Consultant','description':'National','price':'829.34','author':'Misty Flatley','createdDate':'1977-08-31T03:02:11.011Z','id':'5' },
        { 'title':'Senior Group Facilitator','description':'Internal','price':'729.94','author':'Milton Fritsch','createdDate':'1946-12-19T23:07:14.983Z','id':'6' },
        { 'title':'Senior Assurance Associate','description':'Central','price':'135.86','author':'Claude Jakubowski','createdDate':'1983-08-27T11:48:50.362Z','id':'7' },
        { 'title':'Regional Applications Manager','description':'International','price':'900.18','author':'Boyd Heller','createdDate':'1946-02-01T09:08:11.033Z','id':'8' },
        { 'title':'Investor Infrastructure Engineer','description':'Regional','price':'234.30','author':'Regina Doyle','createdDate':'1956-02-07T08:42:45.365Z','id':'9' },
        { 'title':'Regional Group Specialist','description':'Dynamic','price':'713.85','author':'Julian Goodwin','createdDate':'1964-02-25T17:37:54.168Z','id':'10' },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{

    },
});
