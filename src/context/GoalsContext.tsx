import React, { useEffect, createContext, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import authApi from '../api/authApi';
import { Goal, GoalsResponse } from '../interfaces/appInterfaces';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';


type GoalsContextProps = {
  goals: Goal[];
  loadGoals: () => Promise<void>;
  addGoal: (categoryId: string, goalName: string) => Promise<Goal>;
  updateGoal: (categoryId: string, goalName: string, goalId: string) => Promise<void>;
  deleteGoal: (id: string) => Promise<void>;
  loadGoalById: (id: string) => Promise<Goal>;
  uploadImage: (data: any, id: string) => Promise<void>;
}

export const GoalsContext = createContext({} as GoalsContextProps);


export const GoalsProvider = ({ children }: any) => {
  const { status } = useContext(AuthContext);


  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    if (status === 'authenticated') {
      loadGoals();
    }
  }, [status]);


  const loadGoals = async () => {
    const resp = await authApi.get<GoalsResponse>('api/goals');
    setGoals([...goals, ...resp?.data?.goals]);
  };

  const addGoal = async (goal: Goal): Promise<Goal> => {
    const resp = await authApi.post<Goal>('/goals', {
      title: goal.title,
      description: goal.description,
      difficulty: goal.difficulty,
      type: goal.type,
      status: 'New',

    });
    setGoals([...goals, resp.data]);

    return resp.data;
  };

  const updateGoal = async (categoryId: string, goalName: string, goalId: string) => {
    const resp = await authApi.put<Goal>(`/goals/${goalId}`, {
      nombre: goalName,
      categoria: categoryId,
    });
    setGoals(goals.map(goal => {
      return (goal._id === goalId)
        ? resp.data
        : goal;
    }));

  };

  const deleteGoal = async (id: string) => {

  };

  const loadGoalById = async (id: string) => {

    const resp = await authApi.get<Goal>(`/api/goals/${id}`);
    return resp.data;

  };

  const uploadImage = async (data: ImagePickerResponse, id: string) => {

    const fileToUpload = {
      uri: data.assets[0].uri,
      type: data.assets[0].type,
      name: data.assets[0].fileName,
    };

    const formData = new FormData();
    formData.append('archivo', fileToUpload);

    try {

      const resp = await authApi.put(`/uploads/goals/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(JSON.stringify(resp.data, null, 2));

    } catch (error) {
      console.log(JSON.stringify(error.response, null, 2));
    }

  };


  return (
    <GoalsContext.Provider value={{
      goals,
      loadGoals,
      addGoal,
      updateGoal,
      deleteGoal,
      loadGoalById,
      uploadImage,
    }}>
      {children}
    </GoalsContext.Provider>
  );
};
