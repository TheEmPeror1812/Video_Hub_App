import React from 'react'
import { Box, Heading, Image,Container, Stack,Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.png"



function Home() {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
                <Heading 
                textTransform={"uppercase"}
                py="2" w={"fit-content"} 
                borderBottom={"2px solid"} 
                margin={"auto"}>
                    Services
                </Heading>

                <Stack
                h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column","row"]}
                >
                <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>

                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque ducimus et totam, quam sapiente quaerat, sequi autem animi commodi tempora consequatur voluptatum, quos minus odit accusantium veniam delectus explicabo reiciendis! Explicabo beatae laudantium sed corrupti esse distinctio odit itaque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sapiente recusandae doloribus ut iusto eligendi accusamus ducimus, beatae repellat vitae maiores. Beatae nobis dicta delectus dolor fugit accusamus sint. Exercitationem suscipit aut, recusandae ipsam esse fugiat deleniti dolor repellat enim quos fugit mollitia dicta dignissimos fuga ullam architecto itaque? Aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid eius expedita molestias quibusdam. Tenetur sapiente expedita adipisci eveniet eius quis ipsum deserunt numquam sequi, sit fugiat officia culpa, atque facilis? Quae accusamus sit quia natus dolore quo rem, eaque cum numquam veniam reiciendis adipisci, repellat deserunt delectus quod exercitationem.
                </Text>


                </Stack>
            </Container>
        </Box>
    )
}

const headingOptions = {
    pos:"absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform:"uppercase",
    p: "4",
    size: "4xl"
}

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}>

            <Box w={"full"} h={"100vh"}>
                <Image src={img1} />
                <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                    Watch The Future
                </Heading>
            </Box>

            <Box w={"full"} h={"100vh"}>
                <Image src={img2} />
                <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
                    Future is Gaming
                </Heading>
            </Box>

            <Box w={"full"} h={"100vh"}>
                <Image src={img3} />
                <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                    Gaming in Console
                </Heading>
            </Box>

            <Box w={"full"} h={"100vh"}>
                <Image src={img4} />
                <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                    NightLife is Cool
                </Heading>
            </Box>
        </Carousel>
    )
}



export default Home