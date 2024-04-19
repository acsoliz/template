import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoalsContext } from '../context/GoalsContext';
import { GoalsStackParams } from '../navigator/GoalsNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<GoalsStackParams, 'GoalsScreen'> { }

export const GoalsScreen = ({ navigation }: Props) => {

  const [isRefreshing, setIsRefreshing] = useState(false);
  const { goals, loadGoals } = useContext(GoalsContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('GoalScreen', {})}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  console.log('goals:::', goals)

  const loadGoalsFromBackend = async () => {
    setIsRefreshing(true);
    await loadGoals();
    setIsRefreshing(false);
  };
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={goals}
        keyExtractor={(p) => p._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('GoalScreen', {
              id: item._id,
              name: item.title,
            })
            }
          >
            <Text style={styles.goalName}>{item.title}</Text>
          </TouchableOpacity>
        )}

        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator} />
        )}

        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadGoalsFromBackend}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});
