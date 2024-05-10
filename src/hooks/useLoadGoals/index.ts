import { useContext, useState } from 'react';
import { GoalsContext } from '../../context/GoalsContext';

export const useLoadGoals = () => {
    const { loadGoals } = useContext(GoalsContext);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const loadGoalsFromBackend = async () => {
        setIsRefreshing(true);
        await loadGoals();
        setIsRefreshing(false);
    };

    return { loadGoalsFromBackend, isRefreshing };
};