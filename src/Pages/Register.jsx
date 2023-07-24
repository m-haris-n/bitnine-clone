import {
   TextInput,
   PasswordInput,
   Anchor,
   Paper,
   Title,
   Text,
   Container,
   Button,
   useMantineTheme,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import MyFooter from "./common/MyFooter";
import { useForm } from "@mantine/form";
import { register } from "../api/auth";

export default function Register() {
   const theme = useMantineTheme();
   const nav = useNavigate();

   const form = useForm({
      initialValues: {
         name: "",
         email: "",
         password: "",
      },
      validate: {
         name: (value) =>
            value.length < 2 ? "Name must have at least 2 letters" : null,
         email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
         password: (value) =>
            value.length < 6
               ? "Password must have at least 6 characters"
               : null,
      },
   });

   const handleRegister = (data) => {
      register(data)
         .then((res) => {
            console.log(res.data);
            nav("/login");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div
         className={
            "h-screen w-screen flex flex-col justify-between items-center"
         }
      >
         <Container
            size={420}
            my={40}
         >
            <Title
               align="center"
               sx={(theme) => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 900,
               })}
            >
               Create a new account
            </Title>
            <Text
               color="dimmed"
               size="sm"
               align="center"
               mt={5}
            >
               Already have an account?{" "}
               <Anchor
                  size="sm"
                  component={Link}
                  to={"/login"}
               >
                  Log in.
               </Anchor>
            </Text>

            <Paper
               component={"form"}
               onSubmit={form.onSubmit((vals) => {
                  console.log(vals);
                  handleRegister(vals);
               })}
               withBorder
               shadow="md"
               p={30}
               mt={30}
               radius="md"
            >
               <TextInput
                  label="Name"
                  placeholder="Your Name"
                  required
                  {...form.getInputProps("name")}
               />
               <TextInput
                  label="Email"
                  placeholder="you@example.com"
                  required
                  {...form.getInputProps("email")}
               />
               <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  required
                  mt="md"
                  {...form.getInputProps("password")}
               />

               <Button
                  fullWidth
                  type={"submit"}
                  mt="xl"
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
               >
                  Register
               </Button>
            </Paper>
         </Container>
         <MyFooter />
      </div>
   );
}
