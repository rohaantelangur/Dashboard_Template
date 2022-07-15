import React from "react";
import {
  Box,
  Image,
  HStack,
  Button,
  Spacer,
  Center,
  Heading,
  VStack,
  Input,
  Link,
} from "@chakra-ui/react";

import { Data } from "./Data";
import Jobs from "./Jobs";

export const Dashboard = () => {
  console.log(Data);
  return (
    <>
      <Box>
        <HStack p={"10px 15px"}>
          <Image
            src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
            alt="oo"
            boxSize="30px"
          />
          <Spacer />
          <Button colorScheme="gray" variant="ghost" fontSize={"sm"}>
            Sign In
          </Button>
          <Button colorScheme="gray" variant="outline" fontSize={"sm"}>
            Sign Up
          </Button>
          <Button
            fontSize={"sm"}
            bgGradient="linear(to-l, #805ad5, #3182ce)"
            color={"#fff"}
          >
            Post a job 🚀
          </Button>
        </HStack>
      </Box>
      <hr />
      <Box>
        <Center>
          <VStack>
            <Box>
              <Heading mt={"7rem"} fontSize={"4rem"}>
                Find The Right
              </Heading>
            </Box>
            <HStack>
              <Heading
                bgGradient="linear(to-l, #805ad5, #3182ce)"
                bgClip="text"
                fontSize={"4rem"}
              >
                Four-Day
              </Heading>
              <Heading fontSize={"4rem"}> Week Job</Heading>
            </HStack>
            <br />
            <HStack>
              <Input
                variant="outline"
                placeholder="type job title or keyword"
                h="50px"
                w="400px"
                boxShadow="xl"
              />
              <Button h="50px" borderRadius={"10px"}>
                <Image
                  boxSize="15px"
                  src="https://cdn-icons-png.flaticon.com/128/1159/1159641.png"
                />
              </Button>
            </HStack>

            <HStack>
              <Button colorScheme="purple" w="150px">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enable-background="new 0 0 48 48"
                  focusable="false"
                  class="chakra-icon css-8nmnjd"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#7CB342"
                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                  ></path>
                  <path
                    fill="#0277BD"
                    d="M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"
                  ></path>
                </svg>
                &nbsp; Remote
              </Button>
              <Button colorScheme="purple" w="150px">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                  class="chakra-icon css-1oa8od6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                &nbsp; Tech
              </Button>
              <Button colorScheme="purple" w="150px">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                  class="chakra-icon css-l2jbtz"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                &nbsp; Marketing
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>

      {/* stack part */}
      <Box backgroundColor={"#EDF2F7"} mt="50px"><br />
          <Heading  m={'0px 0px 30px 25%'} color={"#3182ce"} fontSize={"2rem"}>
            Recent Jobs
          </Heading>
        <VStack>

          {Data.map((item) => {
            return (
            <Jobs {...item}/>
            );
          })}
          <br />
        </VStack>
      </Box>

      {/* footer part */}
      <Box m="40px" ml="150px">
        <HStack spacing={"5rem"}>
          <Link>Contact US</Link>
          <Link>Legal</Link>
        </HStack>
      </Box>
    </>
  );
};
