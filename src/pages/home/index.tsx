import React, { useState, useEffect } from "react";
import { SectionList, View } from "react-native";
import { Button, Text } from "ncore-mobile";
import { CompositeScreenProps } from "@react-navigation/native";
import menudata from "../../data/menu.json";
import stylesheet from "./stylesheet";
import Toast from "react-native-simple-toast"
const Home = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {
    const sections = [
        { title: "Yiyecekler", data: menudata.foods },
        { title: "İçecekler", data: menudata.drinks },
    ];

    const [toplam, setToplam] = useState(0);
    const [siparisler, setSiparisler] = useState<{ id: number, name: string, description: string, price: number, quantity: number }[]>([]);

    useEffect(() => {
        const total = siparisler.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setToplam(total);
    }, [siparisler]);

    const AddList = (item: { id: number, name: string, description: string, price: number }) => {
        setSiparisler((prevItems) => {
            const varmi = prevItems.find((i) => i.id === item.id);
            Toast.show(`${item.name} Başarı ile eklendi`, Toast.SHORT);
            if (varmi) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const RemoveList = (item: { id: number, name: string, description: string, price: number }) => {
        setSiparisler((prevItems) => {
            const varmi = prevItems.find((i) => i.id === item.id);
            Toast.show(`${item.name} Başarı ile kaldırıldı`, Toast.SHORT);
            if (varmi && varmi.quantity > 1) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                return prevItems.filter((i) => i.id !== item.id);
            }
        });
    };

    return (
        <View style={stylesheet.container}>
            <View style={stylesheet.header}>
                <Text variant="header5" color="info">Menu</Text>
            </View>
            <View style={stylesheet.content}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={stylesheet.item}>
                            <View style={stylesheet.itemContent}>
                                <Text variant="body" color="gray0">{item.name}</Text>
                                <Text variant="caption" color="gray20">{item.description}</Text>
                            </View>
                            <View style={stylesheet.itemRightContent}>
                                <Text variant="body" color="gray0">{item.price} TL</Text>
                                <Button
                                    title="-"
                                    color="info"
                                    size="small"
                                    onPress={() => RemoveList(item)}
                                />
                                <Button
                                    title="+"
                                    color="info"
                                    size="small"
                                    onPress={() => AddList(item)}
                                />
                            </View>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={stylesheet.listHeader}>
                            <Text>{title}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={stylesheet.footer}>
                <Text>{toplam.toFixed(2)} TL</Text>
                <Button
                    color="info"
                    title="Siparişleri Gör"
                    onPress={() => {
                        navigation.navigate("Siparis", { siparisler });
                    }}
                />
            </View>
        </View>
    );
};

export default Home;
