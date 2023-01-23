import React from 'react'
import { Box, Heading, HStack, Stack, VStack, Button, Input, Text } from '@chakra-ui/react'
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai"



function Footer() {
    return (
        <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={"stretch"} width={"full"} paddingX={"4"}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"}
                        paddingY={"2"}
                    >

                        <Input
                            placeholder='Enter Email Here...'
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                            focusBorderColor={"none"}
                        >
                        </Input>
                        <Button
                            p={"0"}
                            colorScheme={"purple"}
                            variant={"ghost"}
                            borderRadius={"0 20px 20 0px"}
                        >
                            <AiOutlineSend size={"30"} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    width={"full"}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading textTransform={"uppercase"} textAlign="center">
                        VIDEO HUB
                    </Heading>
                    <Text>
                        All Right Reserved
                    </Text>
                </VStack>

                <VStack width={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"}>
                        Social Media
                    </Heading>
                    <HStack margin={"4"}>
                        <Button variant={"link"} colorScheme={"purple"}>
                            <a href='https://youtube.com'>
                                <AiFillYoutube size={"50"} />
                            </a>
                        </Button>
                        <Button variant={"link"} colorScheme={"purple"}>
                            <a href='https://instagram.com'>
                                <AiFillInstagram size={"50"} />
                            </a>
                        </Button>
                        <Button variant={"link"} colorScheme={"purple"}>
                            <a href='https://github.com'>
                                <AiFillGithub size={"50"} />
                            </a>
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer