import React, { useEffect, createContext, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import authApi from '../api/authApi';
import { Activity, ActivitiesResponse } from '../interfaces/appInterfaces';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';


type ActivitiesContextProps = {
  activities: Activity[];
  loadActivities: () => Promise<void>;
}

export const ActivitiesContext = createContext({} as ActivitiesContextProps);


export const ActivitiesProvider = ({ children }: any) => {
  const { status } = useContext(AuthContext);


  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (status === 'authenticated') {
      loadActivities();
    }
  }, [status]);


  const loadActivities = async () => {
    const resp = await authApi.get<ActivitiesResponse>('api/activities');
    setActivities([...activities, ...resp?.data?.activities]);
  };

  // const addActivity = async (activity: Activity): Promise<Activity> => {
  //   const resp = await authApi.post<Activity>('/activity', {
  //     name: activity.name,
  //     description: activity.description,
  //     id_category: activity.id_category,
  //     frequency: activity.frequency,

  //   });
  //   setActivities([...activities, resp.data]);

  //   return resp.data;
  // };

  // const updateGoal = async (categoryId: string, goalName: string, goalId: string) => {
  //   const resp = await authApi.put<Activity>(`/goals/${goalId}`, {
  //     nombre: goalName,
  //     categoria: categoryId,
  //   });
  //   setGoals(goals.map(goal => {
  //     return (goal._id === goalId)
  //       ? resp.data
  //       : goal;
  //   }));

  // };

  // const deleteGoal = async (id: string) => {

  // };

  // const loadGoalById = async (id: string) => {

  //   const resp = await authApi.get<Activity>(`/api/goals/${id}`);
  //   return resp.data;

  // };

  // const uploadImage = async (data: ImagePickerResponse, id: string) => {

  //   const fileToUpload = {
  //     uri: data.assets[0].uri,
  //     type: data.assets[0].type,
  //     name: data.assets[0].fileName,
  //   };

  //   const formData = new FormData();
  //   formData.append('archivo', fileToUpload);

  //   try {

  //     const resp = await authApi.put(`/uploads/goals/${id}`, formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     console.log(JSON.stringify(resp.data, null, 2));

  //   } catch (error) {
  //     console.log(JSON.stringify(error.response, null, 2));
  //   }

  // };


  return (
    <ActivitiesContext.Provider value={{
      activities,
      loadActivities,
      // addActivity,
      // updateActivity,
      // deleteActivity,
      // loadActivityById,
      // uploadImage,
    }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
