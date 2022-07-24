import { useState } from 'react'
import {
  HStack,
  VStack,
  IconButton,
  useTheme,
  Text,
  Heading,
} from "native-base";
import { SignOut } from "phosphor-react-native";

import Logo from "../assets/logo_secondary.svg";

import { Filter } from "../components/Filter";

export function Home() {
  const { colors } = useTheme();

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
            5
          </Text>
        </HStack>

        <HStack space={3}>
          <Filter 
          type="open" 
          title="processing" 
          pr={2}/>

          <Filter type="closed" title="finished" />
        </HStack>
      </VStack>
    </VStack>
  );
}
