// GoalCard.tsx
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { getCardIcon, CardTitle } from '../../../helpers';
import { styles } from './style';

interface GoalCardProps {
    item: any;
    onPress: () => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ item, onPress }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.touchable}>
        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <View style={styles.leftDiv}>
                    <Title>{item.title}</Title>
                    <Paragraph style={styles.centerItem}>{item.description}</Paragraph>
                    <Text style={styles.foodText}>Hoy</Text>
                </View>
                <View style={styles.rightDiv}>
                    {getCardIcon(item.title as CardTitle)}
                </View>
            </Card.Content>
        </Card>
    </TouchableOpacity>
);