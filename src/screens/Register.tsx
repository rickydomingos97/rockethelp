import { VStack } from 'native-base';

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="New Request"/>
      <Input 
      placeholder="Patrimony's Name"
      mt={4}
      />

      <Input 
        placeholder="Problem description"
        flex={1}
        textAlignVertical="top"
        multiline
        mt={5}
      />

      <Button 
      title="Register"
      mt={5}
      />
    </VStack>
  );
}