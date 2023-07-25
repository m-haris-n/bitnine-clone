import {
   AppShell,
   Button,
   Container,
   Image,
   Text,
   Title,
   useMantineTheme,
   Transition,
} from "@mantine/core";
import MyHeader from "./common/MyHeader";
import MyFooter from "./common/MyFooter";

import agensSQL from "../assets/agenssql.png";
import enterPack from "../assets/enterprise-pack.png";
import features from "../assets/features.png";
import pswdprofile from "../assets/pswdprofile.png";
import dataredaction from "../assets/datareduction.png";
import audit from "../assets/auditing.png";
import agensmanager from "../assets/agensmanager.png";

import { useState } from "react";
import FlipCard from "./common/FlipCard";

export default function Home() {
   const [hoverToggle, setHoverToggle] = useState(0);
   const theme = useMantineTheme();

   return (
      <AppShell
         header={<MyHeader />}
         footer={<MyFooter />}
         fixed={false}
         styles={{
            main: {
               padding: 0,
               textAlign: "center",
            },
         }}
      >
         <Container
            size={"lg"}
            className={"  mt-24"}
         >
            <section
               className={"flex flex-col items-center justify-between py-16"}
            >
               <Image
                  src={agensSQL}
                  width={301}
               />
               <Title
                  order={3}
                  mt={"2.5rem"}
                  mb={"1rem"}
                  className={"heading-color"}
               >
                  An integration of Bitnine’s DB technology and PG expertise
               </Title>
               <div className={"flex flex-col gap-6 text-color"}>
                  <Text align={"center"}>
                     AgensSQL is an all-new relational DBMS based on PostgreSQL,
                     with years of expertise <br /> and knowledge accumulated
                     through database research and development.
                  </Text>
                  <Text align={"center"}>
                     The enterprise package, along with AgensSQL engine, is an
                     all-in-one solution that ensures <br /> the efficiency and
                     scalability of data management.
                  </Text>
                  <Text align={"center"}>
                     Get AgensSQL now for stable operation and management
                     services at a reduced <br /> maintenance cost.
                  </Text>
               </div>
            </section>
            <div
               className={
                  "flex flex-row items-center justify-center gap-4 md:gap-12 mb-28"
               }
            >
               <Button
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
               >
                  CONTACT
               </Button>
               <Button
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
               >
                  BROCHURE
               </Button>
               <Button
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
               >
                  BLOG
               </Button>
            </div>
         </Container>
         <section
            className={"flex items-center justify-center py-32  bg-[#f3f6fb]"}
         >
            <Image
               src={enterPack}
               maw={900}
            />
         </section>
         <Container
            size={"lg"}
            className={"  mt-24"}
         >
            <section
               className={
                  "flex flex-col items-center justify-center my-16 gap-y-10"
               }
            >
               <Title order={1}>Key features</Title>
               <Text
                  align={"center"}
                  className={"text-color"}
               >
                  Manage your data with Agens Enterprise Package <br />
                  Essential enterprise features such as high availability and
                  sharding are provided
               </Text>
               <Image src={features} />
            </section>
         </Container>
         <section className={"bg-[#f3f6fb] py-24"}>
            <Container
               size={"lg"}
               className={
                  "flex flex-col items-center justify-center  gap-y-10 "
               }
            >
               <Title order={1}>AgensSQL DB Engine</Title>
               <Title
                  order={3}
                  underline={true}
                  className={"heading-color"}
               >
                  Enhanced Data Security
               </Title>
               <Text className={"text-color"}>
                  AgensSQL is a PostgreSQL-based DBMS <br />
                  that guarantees optimal security and stability.
               </Text>
               <div
                  className={
                     "w-full flex flex-col lg:flex-row justify-between items-center gap-6"
                  }
               >
                  <div
                     className={
                        "group relative py-8 px-14 border-[1px] border-gray-300 border-solid rounded-[10px] hover:border-blue-600 hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-blue-300 transition-all duration-500 bg-white shadow-md"
                     }
                     onMouseOver={() => setHoverToggle(1)}
                     onMouseLeave={() => setHoverToggle(0)}
                  >
                     <Image
                        className={
                           "group-hover:opacity-0 transition-all duration-[500ms]"
                        }
                        height={160}
                        src={pswdprofile}
                     />
                     <Transition
                        mounted={hoverToggle == 1}
                        transition={"scale"}
                        duration={600}
                     >
                        {(styles) => (
                           <ul
                              style={styles}
                              className={
                                 " absolute text-sm p-0 top-[20%] transform transition-transform scale-0 group-hover:scale-100"
                              }
                           >
                              <li>
                                 user password policy reinforces login security
                              </li>
                              <li>
                                 excessive failed login attempts lock an account
                              </li>
                              <li>define rules for password complexity</li>
                           </ul>
                        )}
                     </Transition>
                  </div>
                  <div
                     className={
                        "group relative py-8 px-14 border-[1px] border-gray-300 border-solid rounded-[10px] hover:border-blue-600 hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-blue-300 transition-all duration-500 bg-white shadow-md"
                     }
                     onMouseOver={() => setHoverToggle(2)}
                     onMouseLeave={() => setHoverToggle(0)}
                  >
                     <Image
                        className={
                           "group-hover:opacity-0 transition-all duration-[500ms]"
                        }
                        height={160}
                        src={dataredaction}
                     />
                     <Transition
                        mounted={hoverToggle == 2}
                        transition={"scale"}
                        duration={600}
                     >
                        {(styles) => (
                           <ul
                              style={styles}
                              className={
                                 " absolute text-sm p-0 top-[20%] transform transition-transform scale-0 group-hover:scale-100"
                              }
                           >
                              <li>
                                 enhanced data security of user <br /> personal
                                 information
                              </li>
                              <li>
                                 resolve privacy issues in <br /> preparation
                                 for security audits
                              </li>
                              <li>
                                 encryption or masking with <br />{" "}
                                 unidentifiable special characters
                              </li>
                           </ul>
                        )}
                     </Transition>
                  </div>
                  <div
                     className={
                        "group relative py-8 px-14 border-[1px] border-gray-300 border-solid rounded-[10px] hover:border-blue-600 hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-blue-300 transition-all duration-500 bg-white shadow-md"
                     }
                     onMouseOver={() => setHoverToggle(3)}
                     onMouseLeave={() => setHoverToggle(0)}
                  >
                     <Image
                        className={
                           "group-hover:opacity-0 transition-all duration-[500ms]"
                        }
                        height={160}
                        src={audit}
                     />
                     <Transition
                        mounted={hoverToggle == 3}
                        transition={"scale"}
                        duration={600}
                     >
                        {(styles) => (
                           <ul
                              style={styles}
                              className={
                                 " absolute text-sm p-0 top-[20%] transform transition-transform scale-0 group-hover:scale-100"
                              }
                           >
                              <li>
                                 monitors database activities and <br />{" "}
                                 collects data
                              </li>
                              <li>
                                 traces object accessed or DDL & <br /> DML
                                 statements executed by a <br /> user
                              </li>
                              <li>records all actions in logs</li>
                           </ul>
                        )}
                     </Transition>
                  </div>
               </div>
            </Container>
         </section>
         <Container
            size={"lg"}
            className={"  mt-24"}
         >
            <section
               className={
                  "flex flex-col items-center justify-center my-32 gap-y-10"
               }
            >
               <Title order={1}>Agens Enterprise Package</Title>

               <Text align={"center"}>
                  Agens Enterprise Package comes with a high availability
                  management server that <br />
                  supports backup and data monitoring dashboard that helps
                  enterprise customers manage their data efficiently.
               </Text>
               <div
                  className={
                     "w-full flex flex-col lg:flex-row justify-between items-start gap-3"
                  }
               >
                  <div
                     className={
                        "w-full lg:w-1/2 flex flex-col items-center gap-3"
                     }
                  >
                     <Title order={3}>Agens HA Manager</Title>
                     <Title
                        order={3}
                        align={"center"}
                     >
                        <Text
                           display={"inline"}
                           color={"blue"}
                        >
                           {" "}
                           HA Clustering
                        </Text>{" "}
                        <Text
                           display={"inline"}
                           fw={400}
                        >
                           – Failover/Failback, Load-balancing
                        </Text>
                     </Title>
                     <Image src={agensmanager} />
                  </div>
                  <div
                     className={
                        "w-full lg:w-1/2 flex flex-col items-center gap-3"
                     }
                  >
                     <Title order={3}>Agens Enterprise Manager</Title>
                     <FlipCard frontText={"Backup/Restore"}>
                        <ul>
                           <li>
                              provides a convenient interface for backup &
                              restore
                           </li>
                           <li>
                              provides backup & restore features for DB and
                              table objects
                           </li>
                        </ul>
                     </FlipCard>
                     <FlipCard frontText={"DB Monitoring Dashboard"}>
                        <ul>
                           <li>
                              monitors real-time session & transaction lock
                           </li>
                           <li>provides status for server CPU & memory</li>
                        </ul>
                     </FlipCard>
                     <FlipCard frontText={"Schedule Management"}>
                        <ul>
                           <li>
                              provides module for script, SQL job, and
                              scheduling management
                           </li>
                           <li>provides UX dedicated to scheduling</li>
                        </ul>
                     </FlipCard>
                     <FlipCard frontText={"Database Audit"}>
                        <ul>
                           <li>enables auditing via user interface</li>
                           <li>view audit results via user interface</li>
                        </ul>
                     </FlipCard>
                     <FlipCard frontText={"SQL Monitoring"}>
                        <ul>
                           <li>
                              collects query statistics required for performance
                              analysis
                           </li>
                           <li>extracts monitoring results in query</li>
                        </ul>
                     </FlipCard>
                     <FlipCard frontText={"Performance Management"}>
                        <ul>
                           <li>
                              monitors and collects operation status &
                              statistical data
                           </li>
                           <li>
                              provides status reports required for improving
                              performance
                           </li>
                        </ul>
                     </FlipCard>
                  </div>
               </div>
            </section>
         </Container>
      </AppShell>
   );
}
