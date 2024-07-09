// reducers/activitiesReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '../../interfaces/appInterfaces';

interface ActivitiesState {
    activities: Activity[];
}

const initialState: ActivitiesState = {
    activities: [],
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        setActivities: (state, action: PayloadAction<Activity[]>) => {
            state.activities = action.payload;
        },
    },
});

export const { setActivities } = activitiesSlice.actions;

export const activitiesReducer = activitiesSlice.reducer;