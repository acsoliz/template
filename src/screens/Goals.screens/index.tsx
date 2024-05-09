import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { format, subDays, addDays } from 'date-fns';
import es from 'date-fns/locale/es';
import { FAB } from 'react-native-paper';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoalsContext } from '../../context/GoalsContext';
import { GoalsStackParams } from '../../navigator/GoalsNavigator';
import { Card, Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { constants } from '../../constants/constants';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import CircularProgress from '../../components/CircularProgress';
import { Animated } from 'react-native';
import { styles } from './style';

interface Props extends StackScreenProps<GoalsStackParams, 'GoalsScreen'> { }

export const GoalsScreen = ({ navigation }: Props) => {

  const [isRefreshing, setIsRefreshing] = useState(false);
  const { goals, loadGoals } = useContext(GoalsContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date: Date) => {
    const today = new Date();
    if (format(today, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) {
      return 'Hoy';
    } else if (format(subDays(today, 1), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) {
      return 'Ayer';
    } else {
      return format(date, 'eee., d MMMM', { locale: es });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerLeftButton}
          onPress={() => setCurrentDate(prevDate => subDays(prevDate, 1))}
        >
          <Ionicons name="chevron-back" size={15} color="black" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Goals</Text>
          <Text style={styles.headerSubtitleText}>{formatDate(currentDate)}</Text>
        </View>
      ),
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: constants.colors.primary, //  iOS
        borderBottomColor: constants.colors.primary, // Android
        borderBottomWidth: 1, //  Android
        backgroundColor: constants.colors.primary,
      },
      headerRight: () => {

        const today = new Date();
        const isToday = format(today, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');
        const isYesterday = format(subDays(today, 1), 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd');

        if (isToday) {
          // Render another icon when currentDate is today
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.headerRigtButton}
              onPress={() => {
                // TODO: Add your own logic here
              }}
            >
              <MaterialIcons name="edit" size={18} color="black" />
            </TouchableOpacity>
          );
        } else {
          // Render the "chevron-back" icon when currentDate is not today
          return (
            <View
              style={styles.headerRigtButton}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setCurrentDate(today)}
                style={{
                  marginRight: 20,
                  // marginLeft: 10,
                }}
              >
                <Ionicons name="today-outline" size={15} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  if (isYesterday) {
                    setCurrentDate(today);
                  } else {
                    setCurrentDate(prevDate => addDays(prevDate, 1));
                  }
                }}
              >
                <Ionicons name="chevron-forward" size={15} color="black" />
              </TouchableOpacity>
            </View>

          );
        }
      },
    });
  }, [currentDate]);

  const loadGoalsFromBackend = async () => {
    setIsRefreshing(true);
    await loadGoals();
    setIsRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={goals}
          keyExtractor={(p) => p._id}
          ListHeaderComponent={(
            <View>
              <View style={styles.centralIconsContainer}>
                <View style={styles.circularProgressContainer}>
                  {/* <CircularProgress fill={20} /> */}
                  <CircularProgress fill={20} />
                </View>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Actividades</Text>
              </View>
            </View>
          )}

          renderItem={({ item }) => {
            const renderRightAction = (progress, dragX) => {
              const trans = dragX.interpolate({
                inputRange: [0, 50, 100, 101],
                outputRange: [-20, 0, 0, 1],
              });
              return (
                <RectButton
                  style={styles.rightAction}
                  onPress={() => {
                    // Aquí puedes manejar la lógica para marcar el objetivo como completado
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
              <Swipeable
                renderRightActions={renderRightAction}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('GoalScreen', {
                    id: item._id,
                    name: item.title,
                  })}
                  style={styles.touchable}
                >
                  <Card style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                      <View style={styles.leftDiv}>
                        <Title>{item.title}</Title>
                        <Paragraph style={styles.centerItem}>{item.description}</Paragraph>
                        <Text style={styles.foodText}>Hoy</Text>

                      </View>
                      <View style={styles.rightDiv}>
                        {item.title === 'Alimentacion' && <MaterialCommunityIcons name="food-apple" size={42} color="#2ECC71" />}
                        {item.title === 'Ejercicio' && <MaterialIcons name="fitness-center" size={42} color="blue" />}
                        {item.title === 'Sueño' && <MaterialCommunityIcons name="sleep" size={42} color="black" />}
                        {item.title === 'Hidratación' && <Ionicons name="water-outline" size={42} color="black" />}
                      </View>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              </Swipeable>
            );
          }}
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

