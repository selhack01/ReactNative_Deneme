import React from "react";
import { View, FlatList } from "react-native";
import { Button, Text } from "ncore-mobile";
import stylesheet from "./stylesheet";

const Siparis = ({ route, navigation }: any) => {
    // route.params üzerinden gelen siparişler verisini alıyoruz
    const { siparisler } = route.params;

    // Toplam fiyatı hesaplamak için
    const totalPrice = siparisler.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    const renderItem = ({ item }: { item: any }) => (
        <View style={stylesheet.item}>
            <View style={stylesheet.itemContent}>
                <Text variant="body" color="gray0">{item.name}</Text>
                <Text variant="caption" color="gray20">{item.description}</Text>
            </View>
            <View style={stylesheet.itemRightContent}>
                <Text variant="body" color="gray0">{item.quantity} x {item.price} TL</Text>
            </View>
        </View>
    );

    return (
        <View style={stylesheet.container}>
            <View style={stylesheet.header}>
                <Text variant="header5" color="info">Sipariş Listesi</Text>
                <Button
                    size="small"
                    title="Geri Dön"
                    color="info"
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                />
            </View>
            <View style={stylesheet.content}>
                {siparisler.length === 0 ? (
                    <Text color="gray20">Henüz sipariş eklemediniz.</Text>
                ) : (
                    <FlatList
                        data={siparisler}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                )}
            </View>
            <View style={stylesheet.footer}>
                <Text>{totalPrice} TL</Text>
                <Button
                    color="info"
                    title="Siparişi Onayla"
                    onPress={() => {
                    }}
                />
            </View>
        </View>
    );
};

export default Siparis;
