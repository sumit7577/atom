import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from "../components";
import { Block, Icon, Input } from 'galio-framework';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FONTFAMILY, COLORS } from '../utils/constant';

export default function Wallet(props) {
    return (
        <SafeAreaView>
            <Block style={styles.container}>
            
                <Block style={styles.header}>
                    <AntDesign name="arrowleft" size={22} color="black" style={{ marginLeft: 4, position: "absolute", left: 10 }} onPress={() => {
                        navigation.pop();
                    }} />
                    <Text style={styles.text}> Yulu Money</Text>
                </Block>

                <Block style={styles.body}>
                    <Block row alignItems="center" style={{ backgroundColor: COLORS.THEME, height: 55, borderRadius: 4 }}>
                        <Icon name="attach-money" family='materialIcons' size={25} />
                        <Text style={styles.text}>Balance</Text>
                        <Text style={styles.text2}>$50.00</Text>
                    </Block>

                    <Block style={{ flex: 1, marginTop: 8 }} row space='between'>
                        <Button small color="white" border>
                            <Text style={styles.text}>
                                +50
                            </Text>
                        </Button>

                        <Button small color="white" border>
                            <Text style={styles.text}>
                                +100
                            </Text>
                        </Button>
                        <Button small color="white" border>
                            <Text style={styles.text}>
                                +200
                            </Text>
                        </Button>
                    </Block>

                    <Block style={{ backgroundColor: COLORS.WHITE, borderRadius: 4, padding: 5, flex: 0.75 }}>
                        <Block row middle space='between' style={{ borderBottomWidth: 1, borderColor: COLORS.MUTED }}>
                            <Text style={{ fontFamily: FONTFAMILY.REGULAR, fontSize: 10 }}>Top-up</Text>
                            <Input placeholder='$0' style={{
                                borderWidth: 0, color: COLORS.THEME,
                                width: 90,
                                height: 25,
                                borderColor: COLORS.THEME,
                                borderBottomWidth: 1.5, borderRadius: 0
                            }} placeholderTextColor={COLORS.THEME} />
                        </Block>
                        <Block row space='between' style={{ marginTop: 8 }}>
                            <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 10 }}>Total amount</Text>
                            <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 10 }}>$0.00</Text>
                        </Block>
                    </Block>

                    <Block style={{ flex: 1, marginTop: 25, padding: 4 }}>
                        <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 10 }}>Have a coupon code?</Text>
                        <Block row middle style={{ backgroundColor: COLORS.WHITE, borderRadius: 4, marginTop: 8, maxHeight: 60 }} space="between">
                            <Input placeholder="Enter Coupon Code" style={{
                                borderWidth: 0,
                            }}
                                placeholderTextColor={COLORS.MUTED}
                            />
                            <Button color="muted" round style={{ width: 100, height: 45 }}>
                                <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 12, color: COLORS.WHITE }}>
                                    Apply
                                </Text>
                            </Button>
                        </Block>

                    </Block>

                    <Block style={{ flex: 2 }}>


                    </Block>

                </Block>

                <Block style={styles.footer}>
                    <Button color="muted" round>
                        <Text style={{ fontFamily: FONTFAMILY.BOLD, fontSize: 12, color: COLORS.WHITE }}>
                            PAY NOW
                        </Text>
                    </Button>
                </Block>

            </Block>
        </SafeAreaView>
    )
}
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        height: 55,
        borderRadius: 4,
    },
    body: {
        justifyContent: "space-between",
        maxWidth: "100%",
        height: height / 1.5,
        padding: 8,
        margin: 4,
    },
    footer: {
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontFamily: FONTFAMILY.BOLD,
        fontSize: 12,
    },
    text2: {
        fontFamily: FONTFAMILY.BOLD,
        position: "absolute",
        right: 10,
    }
})