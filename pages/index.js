import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Heading, chakra, Container, useColorModeValue, Link, Flex, Text } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matts Blog</title>
        <meta name="Blog on wether childhood maltreatment affects life satisfaction down the road" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Matthew Thompson
              </Heading>
              <p>Inquiry & Craft of Argument || 4-19-22</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src="/Matt.JPG"
                  alt="Profile image"
                  borderRadius="full"
                  width="100%"
                  height="100%" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" variant="section-title" align="center">
              Childhood Maltreatment: The affects on the Brain
            </Heading>
            <Container maxW="800px" maxH="150px">
              <Paragraph variant="paragraph-section">
                Many people know that survivors of childhood abuse
                often face challenges within their daily lives.
                We see this portrayed on different media such as
                instagram, twitter, maybe just an article you read for
                class the other day. Either way we know they have had it rough.
                How rough though, many people often don&apos;t know the extent of
                what survivors have to go through.</Paragraph>
              <Paragraph variant="paragraph-section">
                People who have faced childhood maltreatment often lack self satisfaction and life goals, these traits are often accompanied by certain illnesses that magnify them. This allows us to inspect the details of a survivor&apos;s life and find a way to help these people revitalize their life goals/satisfaction. Daniel Weindl a doctor that works at the University of Vienna discusses that, psychological consequences of childhood maltreatment can include PTSD, affective disorders, anxiety disorders, substance abuse, and personality disorders.(Weindle, 195) You can read more about them {" "}
                <Link color='teal.500' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1494926/">
                  Here</Link>.
                These are multiple of the mental health issues that survivors face on a day to day basis. Mental health is a gateway for adults who have faced childhood maltreatment  to sink into a lower place than already present leading them to a lower life satisfaction.
              </Paragraph>
              <Heading as="h4" variant="section-title" align="center" mt={8} mb={-2}>
                A way to fight back.
              </Heading>
              <Paragraph variant="paragraph-section">
                A way to combat these illnesses would be to include these individuals into large social networks with supportive people.Dr.Schneider, a Professor and Chair of the Department of Family and Community Medicine at UT Southwestern Medical Center, mentions how large supportive social groups are shown to help adults and adolescents with anxiety and depression decrease the probability of symptoms showing up when involved in said groups (pg.1506). We can see a decrease of mental health instability across the board when people are supportive and are aware of the issues. Individuals who have these mental health issues struggle with their daily life and thus negatively influence their relationship with their life goals.This leads these individuals to be unmotivated when in pursuit of life goals/satisfaction. Weindl also states
                <Box
                  borderRadius="lg"
                  mt={6}
                  mb={6}
                  p={3}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  They experience an inability to successfully strive for personal goals, which hinders the development of motivational concepts (MC), such as self-efficacy, self- esteem, and locus of control (LOC) (Simmen-Janevska, Brandstatter, & Maercker, 2012). Especially in late childhood and adolescence, interpersonal childhood trauma negatively affect MC (Kim & Cicchetti, 2003; Turner, Finkelhor, & Ormrod, 2010).(Weindl, pg. 195).
                </Box>
                This proves to us that when adolescents are poorly treated during their childhood they often lose the development of concepts, including motivation and goals. Many of these adults who were treated poorly as children are often affected because the pursuit of their goals is not something they fully perceive. Mental health is a main contributor to the lack of satisfaction/goals within survivors of childhood maltreatment but, there are ways to combat these mental diagnoses and revitalize these individuals.
              </Paragraph>
              <Heading as="h3" variant="section-title" align="center" mt={8} mb={-2}>
                How we can help.
              </Heading>
              <Paragraph variant="paragraph-section">
                A way for all of use to actively participate in the recovery
                of these already surviving individuals is to be more aware.
                Often, these flaws that they are fighting are overlooked.
                Nobody wants to be overlooked. It just our nature. We want to be seen
                and comforted. Acting like nothing is wrong or that people will heal is
                never going to be the whole answer. That is the easy way out.
                Help somebody in need and it could lead to a recovery that was previous
                unseen. Organizations are also helping the cause! {""}  
                <Link color='teal.500' href="https://www.childwelfare.gov/organizations/?CWIGFunctionsaction=rols:main.dspList&rolType=Custom&RS_ID=67">
                   The Childhood Welfare </Link>
                website has a list of places where adult survivors can visit if they are in need.
                They also have list of ways to prevent childhood maltreatment and ways to spot it.
                These government websites help us to be better people. By simply reading these pages
                you helping better then cause by educating yourself on the situation.
                </Paragraph>
              <Paragraph variant="paragraph-section">
                All this research has been done for us to be able to recognize and understand survivors of childhood maltreatment. 
                Its for us as a people to come together and help the ones who were hurt. It is a bigger movement than just survivors of 
                childhood maltreatment. It is about us all being the same. We are all human and we should be willing to help one another without
                any sort of incentive or satisfaction for us. These people are survivors of things we can only imagine and struggle in their adult lives
                to have any sort of goals or satisfaction.
                <Box
                  borderRadius="lg"
                  mt={6}
                  mb={6}
                  p={3}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                  >
                    <Text as='cite'>
                      Image provided by {''}
                      <Link color="teal.500" href="https://preventchildabuse.org/what-we-do/public-policy/">
                        Prevent Childhood abuse
                      </Link>
                    </Text>
                  <ProfileImage
                    src="/Exposure.jpg"
                    alt="Exposure Image"
                    width='350x'
                    height='350px' /> 
                  </Box>
                Above we see all the areas affected by childhood abuse. Everyone has an area where they can donate their efforts and time.
                This is just the start of trying to make a better world for all of us. 
              </Paragraph>
              <Heading as="h3" variant="section-title" align="center" mt={8} mb={-5}>
                Sources
              </Heading>
              <Paragraph>
                If you would like to read more abut Dr.Schneider you can find his paper {' '}
                <Link color="teal.500" href="https://pubmed.ncbi.nlm.nih.gov/29294679/">
                  Here
                </Link>
                .
                Weindls paper can also be found {' '}
                <Link color="teal.500" href="https://pubmed.ncbi.nlm.nih.gov/29128740/">
                  Here
                </Link>
                .
                Special thanks to Takuya Matsuyama for his source code.His website is {" "}
                <Link color='teal.500' href="https://www.craftz.dog/">
                  Here
                </Link>
                .
                <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            position="static"
            mt={6}
            mb={12}
          >
          <Footer />
          </Flex>
              </Paragraph>
            </Container>
          </Box>
        </main>
      </Layout>
    </div>
  );
}
