import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HStack,
  VStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from "native-base";
import { SignOut, ChatTeardropText } from "phosphor-react-native";

import Logo from "../assets/logo_secondary.svg";

import { Filter } from "../components/Filter";
import { Button } from "../components/Button";
import { Order, OrderProps } from "../components/Order";

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '876',
      patrimony: '123456',
      when: '10/08/2022 at 14:00',
      status: 'open'
    }
  ])

  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleNewOrder() {
    navigation.navigate('new')
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId })
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={5}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">
            My requests
            </Heading>
          <Text color="gray.200">
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter 
          type="open" 
          title="processing" 
          onPress={() => setStatusSelected('open')}
          isActive={statusSelected === 'open'}
          />

          <Filter 
          type="closed" 
          title="finished" 
          onPress={() => setStatusSelected('closed')}
          isActive={statusSelected === 'closed'}
          />

        </HStack>

        <FlatList 
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Order data={item} onPress={() => handleOpenDetails(item.id)}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={()=> (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40}/>
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                You don't have any {'\n'}
                requests {statusSelected === 'open' ? 'in process' : 'finished'}
              </Text>
            </Center>
          )}
        />
        <Button title="New Request" onPress={handleNewOrder}/>
      </VStack>
    </VStack>
  );
}
