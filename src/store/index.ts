// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { activitiesReducer, categoriesReducer } from '../reducers';

const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        categories: categoriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
