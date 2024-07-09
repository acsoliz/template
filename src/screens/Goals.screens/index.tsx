import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import { FlatList, RefreshControl, Text, View, Animated } from 'react-native';
import { GoalsContext } from '../../context/GoalsContext';
import { GoalsStackParams } from '../../navigator/GoalsNavigator';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircularProgress } from '../../components/'
import { styles } from './style';
import { useLoadGoals, useNavigationOptions } from '../../hooks/';
import { navigateToGoalScreen } from '../../navigation/navigationService';
import { GoalCard } from '../../components/goals/GoalCard';


interface Props extends StackScreenProps<GoalsStackParams, 'GoalsScreen'> { }

export const GoalsScreen = ({ navigation }: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { loadGoalsFromBackend, isRefreshing } = useLoadGoals();
  const { goals } = useContext(GoalsContext);

  useNavigationOptions(navigation, currentDate, setCurrentDate);
  const renderRightAction = (dragX: Animated.AnimatedInterpolation<number>) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        style={styles.rightAction}
        onPress={() => {
          // Aquí manejar la lógica para marcar el objetivo como completado
          console.log('El objetivo ha sido marcado como completado');
        }}
      >
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Completado
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={goals}
          keyExtractor={(p) => p.id}
          ListHeaderComponent={(
            <View>
              <View style={styles.centralIconsContainer}>
                <View style={styles.circularProgressContainer}>
                  <CircularProgress fill={20} />
                </View>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Actividad</Text>
              </View>
            </View>
          )}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={(dragX) => renderRightAction(dragX)}>
              <GoalCard item={item} onPress={() => navigateToGoalScreen(navigation, item)} />
            </Swipeable>
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={loadGoalsFromBackend}
            />
          }
        />
        <FAB
          style={styles.fab}
          icon="plus"
          size='small'
          onPress={() => navigation.navigate('GoalScreen', {})}
        />
      </View>
    </SafeAreaView>
  );
};