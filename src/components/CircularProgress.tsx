import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Text, View } from 'react-native';
import { constants } from '../constants/constants';
import { Circle } from 'react-native-svg';


interface CircularProgressProps {
    fill: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ fill }) => {
    return (
        <View>
            <AnimatedCircularProgress
                onAnimationComplete={() => console.log('onAnimationComplete')}
                size={125}
                style={{ margin: 10 }} // Añade esto
                width={10}

                backgroundWidth={5} // Añade esto

                fill={fill} // Aquí debes poner el porcentaje de progreso de las metas
                tintColor="#2ECC71"
                // tintColorSecondary="#ff0000"
                rotation={(-130)}
                arcSweepAngle={(260)}
                // backgroundColor="#90EE90">
                backgroundColor="#16A085">
                {
                    (fill) => (
                        <View>
                            {/* <Icon name={'book'} size={52} color={'blue'} /> */}
                            <FontAwesome5 name={'running'} size={52} color={'blue'} />
                            {/* <Text>
                                {fill}
                            </Text> */}
                        </View>
                    )
                }
            </AnimatedCircularProgress>
            <View >
                <Text>Sin puntuacion</Text>
            </View>
        </View >

    );
}

<AnimatedCircularProgress
    size={120}
    width={15}
    fill={100}
    tintColor="#00e0ff"
    backgroundColor="#3d5875"
    padding={10}
    renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
/>

export default CircularProgress;