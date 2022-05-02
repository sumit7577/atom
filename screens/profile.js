import { Dimensions, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Block, Input } from 'galio-framework'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FONTFAMILY, COLORS } from '../utils/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchToggle from "react-native-switch-toggle";
import { useState } from 'react';

export default function Profile() {
    const [on, setOn] = useState(() => {
        return false;
    })
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.WHITE, height: "100%" }}>
            <Block style={styles.container}>
                <Block style={styles.header} row space='between' middle>
                    <MaterialIcons name="cancel" size={48} color={COLORS.WHITE} style={{ borderRadius: 50, elevation: 15 }} />
                    <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 15 }}>Profile</Text>
                    <Text style={{ color: COLORS.THEME, fontFamily: FONTFAMILY.BOLD, fontSize: 15 }}>Safe</Text>
                </Block>
                <Block style={styles.body}>
                    <Input style={styles.input} placeholder="Abhishek" placeholderTextColor={COLORS.BLACK} />
                    <Input style={styles.input} placeholder="abhi43818@gmail.com" placeholderTextColor={COLORS.BLACK} />
                    <Input style={styles.input} placeholder="+91 7892766354" placeholderTextColor={COLORS.BLACK} />

                    <Block row space='between' middle style={{ margin: 10, marginTop: "15%", borderBottomWidth: 1, paddingBottom: 25, borderColor: COLORS.MUTED }}>
                        <Text style={styles.text}>
                            Language
                        </Text>
                        <MaterialIcons name="chevron-right" size={22} color={COLORS.MUTED} />
                    </Block>

                    <Block row space='between' middle style={styles.boxes}>
                        <Text style={styles.text}>
                            Legal Documents
                        </Text>
                        <MaterialIcons name="chevron-right" size={22} color={COLORS.MUTED} />
                    </Block>

                    <Block row space='between' middle style={styles.boxes}>
                        <Text style={styles.text}>
                            News and discounts via email
                        </Text>
                        <SwitchToggle
                            switchOn={on}
                            onPress={() => setOn(() => {
                                if (on) {
                                    return false;
                                }
                                else {
                                    return true
                                }
                            })}
                            circleColorOff='#E2DFD2'
                            circleColorOn='#00D9D5'
                            backgroundColorOn='#6D6D6D'
                            backgroundColorOff='#C4C4C4'
                            containerStyle={{
                                width: 50,
                                height: 30,
                                borderRadius: 25,
                                padding: 5,
                            }}
                            circleStyle={{
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                            }}
                        />
                    </Block>


                </Block>
                <Block style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={{ color: COLORS.ACTIVE, fontFamily: FONTFAMILY.BOLD, fontSize: 14 }}>Log Out</Text>
                    </TouchableOpacity>

                </Block>
            </Block>
        </SafeAreaView>
    )
}
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        margin: 15
    },
    header: {
    },
    body: {
        marginTop: "10%",
    },
    footer: {
        position: "absolute",
        top: height / 1.19,
        margin: 10
    },
    input: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.MUTED,
        fontWeight: "800",
    },
    text: {
        fontFamily: FONTFAMILY.BOLD,
        fontSize: 13,
    },
    navigator: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    boxes: {
        margin: 10,
        marginTop: "5%",
        borderBottomWidth: 1,
        paddingBottom: 25,
        borderColor: COLORS.MUTED
    }
})