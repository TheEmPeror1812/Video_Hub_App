import { Container, Input, VStack,Heading, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                    <Heading textAlign={"center"}>
                        VIDEO HUB
                    </Heading>

                    <Avatar alignSelf={"center"} boxSize={"32"}></Avatar>

                    <Input placeholder='Name' type={"text"} required focusBorderColor={"purple.500"}>
                    </Input>
    
                    <Input placeholder='Email' type={"email"} required focusBorderColor={"purple.500"}>
                    </Input>
    
                    <Input placeholder='Password' type={"password"} required focusBorderColor={"purple.500"}>
                    </Input>
    
                    <Button colorScheme={"purple"} type={"submit"}>Sign-up</Button>
    
                    <Text textAlign={"right"}>
                        Already Signed Up? {" "}
                        <Button variant={"link"} colorScheme={"purple"}>
                        <Link to={"/login"}>Login Now</Link>
                    </Button>
                    </Text>
                </VStack>
            </form>
    
        </Container>
      )
}

export default Signup