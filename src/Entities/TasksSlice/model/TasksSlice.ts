import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/App/store/stores';
import type { TasksState } from '../types/TasksTypes';

const initialState: TasksState = {
    tasks: [
        {
            id: '1',
            title: 'Create responsive landing page',
            description: 'Design and code a responsive marketing landing page using Next.js + Tailwind.',
            price: '120',
            authorId: '1',
            createdDate: '2025-10-25T09:30:00Z',
        },
        {
            id: '2',
            title: 'Fix animation lag in Vue 3 project',
            description: 'Optimize transition performance and FPS drops in Vue 3 app using composables.',
            price: '70',
            authorId: '3',
            createdDate: '2025-10-25T10:15:00Z',
        },
        {
            id: '3',
            title: 'Create hero section with parallax',
            description: 'Implement parallax effect for hero section using React and Framer Motion.',
            price: '90',
            authorId: '4',
            createdDate: '2025-10-26T08:40:00Z',
        },
        {
            id: '4',
            title: 'Design mobile app icon set',
            description: 'Create 10 minimalistic app icons for finance startup.',
            price: '110',
            authorId: '2',
            createdDate: '2025-10-26T14:00:00Z',
        },
        {
            id: '5',
            title: 'Build backend mock API',
            description: 'Create a mock REST API using Express.js or JSON Server for testing frontend.',
            price: '50',
            authorId: '4',
            createdDate: '2025-10-27T12:25:00Z',
        },
        {
            id: '6',
            title: 'Implement JWT authentication',
            description: 'Add login and registration with JWT, refresh tokens, and protected routes.',
            price: '150',
            authorId: '1',
            createdDate: '2025-10-27T18:45:00Z',
        },
        {
            id: '7',
            title: 'Redesign company logo',
            description: 'Create a new vector logo in Adobe Illustrator for rebranding project.',
            price: '80',
            authorId: '5',
            createdDate: '2025-10-28T07:20:00Z',
        },
        {
            id: '8',
            title: 'Integrate Stripe payments',
            description: 'Add payment checkout using Stripe SDK and webhooks.',
            price: '130',
            authorId: '5',
            createdDate: '2025-10-28T15:00:00Z',
        },
        {
            id: '9',
            title: 'Refactor UI components to TypeScript',
            description: 'Convert all React components to TypeScript with proper typings.',
            price: '95',
            authorId: '2',
            createdDate: '2025-10-29T09:10:00Z',
        },
        {
            id: '10',
            title: 'Add dark mode toggle',
            description: 'Implement system-aware dark mode toggle using TailwindCSS and localStorage.',
            price: '60',
            authorId: '3',
            createdDate: '2025-10-29T21:40:00Z',
        },
    ],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{

    },
});
