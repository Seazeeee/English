import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Heading, chakra, Container, useColorModeValue } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matts Blog</title>
        <meta name="Blog on wether childhood maltreatment affects life statisfaction down the road" />
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
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
            <Box>
                <Heading as="h3" variant="section-title" align="center">
                  Childhood Maltreatment: The affects on the Brain
                </Heading>
                <Container maxW="750px" maxH="150px">
                  <Paragraph>
                    Many people know that survivors of childhood abuse
                    often face challenges within their daily lives.
                    We see this portrayed on different media such as
                    instagram, twitter, maybe just an article you read for
                    class the other day. Either way we know they have had it rough.
                    How rough though, many people often don&apos;t know the extent of 
                    what survivors have to go through. People who have faced childhood maltreatment often lack self satisfaction and life goals, these traits are often accompanied by certain illnesses that magnify them. This allows us to inspect the details of a survivor&apos;s life and find a way to help these people revitalize their life goals/satisfaction. Daniel Weindl a doctor that works at the University of Vienna discusses that, psychological consequences of childhood maltreatment can include PTSD, affective disorders, anxiety disorders, substance abuse, and personality disorders. (Weindle, 195). These are multiple of the mental health issues that survivors face on a day to day basis. Mental health is a gateway for adults who have faced childhood maltreatment  to sink into a lower place than already present leading them to a lower life satisfaction. A way to combat these illnesses would be to include these individuals into large social networks with supportive people. Dr. Schneider, a Professor and Chair of the Department of Family and Community Medicine at UT Southwestern Medical Center, mentions how large supportive social groups are shown to help adults and adolescents with anxiety and depression decrease the probability of symptoms showing up when involved in said groups (pg. 1506). We can see a decrease of mental health instability across the board when people are supportive and are aware of the issues. Individuals who have these mental health issues struggle with their daily life and thus negatively influence their relationship with their life goals. This leads these individuals to be unmotivated when in pursuit of life goals/satisfaction. Weindl also states 
                    <Box
                      borderRadius="lg"
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
                </Container>
            </Box>
          </main>
      </Layout>
    </div>
  );
}
