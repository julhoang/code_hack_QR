import { Inter } from "next/font/google";
import { Center, Avatar, VStack, Heading, Text, Divider, HStack } from "@chakra-ui/react";
import Header from "@/components/Head";
import { GetServerSideProps } from "next";
import { PatientRecord } from "@/utils/types";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/getInfo");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: { data: PatientRecord }) {
  return (
    <>
      <Header title="My Emergency Data" />

      <Center marginTop={10}>
        <VStack
          spacing={5}
          width="90%"
        >
          <Avatar
            size="2xl"
            name="Kate Wilson"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <Heading color={"#1448e8"}>Kate Wilson</Heading>

          <Divider />
          <Heading
            size={"md"}
            color={"#1448e8"}
          >
            My Notes
          </Heading>
          <Text>{data.notes}</Text>

          <Divider />
          <Heading
            size={"md"}
            color={"#1448e8"}
          >
            Emergency Contact
          </Heading>
          <HStack>
            <Text as={"b"}>Max Wilson</Text>
            <Text
              as="a"
              href="tel:123-456-7890"
            >
              (123) 456-7890
            </Text>
          </HStack>
          <HStack>
            <Text as={"b"}>Anna Taylor</Text>
            <Text
              as="a"
              href="tel:778-899-1100"
            >
              (778) 899-1100
            </Text>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
