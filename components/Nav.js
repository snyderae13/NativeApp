import React from 'react'
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'



function Nav() {
    const [selected, setSelected] = React.useState(1);
    return <NativeBaseProvider>
        <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
            <Center flex={1}></Center>
            <HStack bg="indigo.900" alignItems='center' safeAreaBottom shadow={6}>
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "bank" : "bank-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Resources

                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(1)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? "cart" : "cart-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Products
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(2)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "account" : "account-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Membership
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(3)}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? "engine" : "engine-outline"} />} color="white" size="sm" />
                        <Text color="white" fontSize="12">
                            Foundation
                        </Text>
                    </Center>
                </Pressable>

            </HStack>

        </Box>
    </NativeBaseProvider>
}

export default Nav;