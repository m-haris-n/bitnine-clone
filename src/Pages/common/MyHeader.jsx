import {
   Anchor,
   Button,
   Image,
   Header,
   useMantineTheme,
   Burger,
   Drawer,
} from "@mantine/core";
import bLogo from "../../assets/b_logo.png";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
export default function MyHeader() {
   const theme = useMantineTheme();
   // const [opened, setOpened] = useState(false);

   const [opened, { toggle, close }] = useDisclosure(false);
   return (
      <Header
         fixed
         height={90}
      >
         <div
            className={"h-full flex flex-row items-center justify-between px-6"}
         >
            <Image
               px={15}
               src={bLogo}
               height={60}
               width={"auto"}
            />
            <div
               className={
                  "text-base hidden lg:flex flex-row items-center gap-6 px-4"
               }
            >
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  PRODUCTS
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  USE CASES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  SERVICES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  RESOURCES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  BLOG
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  COMPANY
               </Anchor>
               <Anchor
                  className={"text-[#202020] text-to-yellow-transition"}
                  component={Link}
                  to={"/login"}
               >
                  LOG IN
               </Anchor>
               <Button
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
                  component={Link}
                  to={"/register"}
               >
                  SIGN UP
               </Button>
            </div>
            <Burger
               className={"block lg:hidden"}
               opened={opened}
               onClick={toggle}
            />
         </div>
         <Drawer
            className={"lg:hidden"}
            opened={opened}
            onClose={close}
            position={"top"}
         >
            <div className={"flex flex-col gap-3"}>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  PRODUCTS
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  USE CASES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  SERVICES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  RESOURCES
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  BLOG
               </Anchor>
               <Anchor className={"text-[#202020] text-to-yellow-transition"}>
                  COMPANY
               </Anchor>
               <Anchor
                  className={"text-[#202020] text-to-yellow-transition"}
                  component={Link}
                  to={"/login"}
               >
                  LOG IN
               </Anchor>
               <Button
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
                  component={Link}
                  to={"/login"}
               >
                  SIGN UP
               </Button>
            </div>
         </Drawer>
      </Header>
   );
}
