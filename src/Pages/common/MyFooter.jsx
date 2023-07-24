import { Container, Footer, Text, Anchor } from "@mantine/core";
import { VscGithubInverted } from "react-icons/vsc";
import {
   BsYoutube,
   BsStackOverflow,
   BsTwitter,
   BsFacebook,
} from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillMediumSquare } from "react-icons/ai";

export default function MyFooter() {
   return (
      <Footer
         fixed={false}
         w={"100%"}
      >
         <div
            className={
               "px-2 py-4 bg-gray-200 lg:hidden border-t border-slate-400 border-solid border-0"
            }
         >
            <Text className={"text-light"}>
               © 2023 by Bitnine Global Inc. All Rights Reserved.
            </Text>
         </div>
         <Container
            size={"lg"}
            className={"hidden lg:flex flex-col items-start justify-between"}
         >
            <table className={"w-full text-left text-light py-10"}>
               <tr>
                  <th>PRODUCTS</th>
                  <th className={"text-to-blue-transition"}>USE CASES</th>
                  <th className={"text-to-blue-transition"}>SERVICES</th>
                  <th>RESOURCES</th>
                  <th className={"text-to-blue-transition"}>BLOG</th>
                  <th>COMPANY</th>
               </tr>
               <tr>
                  <td className={"text-to-blue-transition"}>
                     Relational Database
                  </td>
                  <td></td>
                  <td></td>
                  <td className={"text-to-blue-transition"}>Documentation</td>
                  <td></td>
                  <td className={"text-to-blue-transition"}>About Us</td>
               </tr>
               <tr>
                  <td className={"text-to-blue-transition"}>Graph Database</td>
                  <td></td>
                  <td></td>
                  <td className={"text-to-blue-transition"}>Learn</td>
                  <td></td>
                  <td className={"text-to-blue-transition"}>Contact</td>
               </tr>
               <tr>
                  <td className={"text-to-blue-transition"}>
                     Graph-based Solution
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
            </table>
            <div
               className={
                  "w-full flex flex-row justify-between items-center py-8"
               }
            >
               <Text className={"text-light"}>
                  © 2023 by Bitnine Global Inc. All Rights Reserved.
               </Text>
               <div
                  className={"flex flex-row justify-between items-center gap-6"}
               >
                  <div className={"flex flex-row text-gray-600"}>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-gray-700"
                           }
                        ></div>

                        <VscGithubInverted className=" text-yellow-500 group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-yellow-500"
                           }
                        ></div>

                        <BsStackOverflow className=" group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-red-500"
                           }
                        ></div>

                        <BsYoutube className=" group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-blue-400"
                           }
                        ></div>

                        <BsTwitter className=" group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-blue-600"
                           }
                        ></div>

                        <BiLogoLinkedin className=" group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-blue-900"
                           }
                        ></div>

                        <BsFacebook className=" group-hover:text-white transition-all absolute" />
                     </div>
                     <div
                        className={
                           "w-8 h-8 group flex flex-col items-center justify-center"
                        }
                     >
                        <div
                           className={
                              " w-8 h-0 group-hover:h-8 transition-all bg-green-600"
                           }
                        ></div>

                        <AiFillMediumSquare className=" group-hover:text-white transition-all absolute" />
                     </div>
                  </div>
                  <Anchor className={"text-light text-to-blue-transition"}>
                     Apache AGE
                  </Anchor>
                  <Anchor className={"text-light text-to-blue-transition"}>
                     CONTACT
                  </Anchor>
               </div>
            </div>
         </Container>
      </Footer>
   );
}
