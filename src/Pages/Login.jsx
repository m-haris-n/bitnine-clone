import {
   TextInput,
   PasswordInput,
   Checkbox,
   Anchor,
   Paper,
   Title,
   Text,
   Container,
   Group,
   Button,
   useMantineTheme,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import MyFooter from "./common/MyFooter";
import { useForm } from "@mantine/form";
import { login } from "../api/auth";
import { tokenAtom } from "../atoms/userAtom";
import { useAtom } from "jotai";

export default function Login() {
   const theme = useMantineTheme();
   const nav = useNavigate();

   const [token, setToken] = useAtom(tokenAtom);

   const form = useForm({
      initialValues: {
         email: "",
         password: "",
      },
   });

   const handleLogin = (data) => {
      login(data).then((res) => {
         setToken(res.data.token);
         nav("/profile");
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
               Log in to your account
            </Title>
            <Text
               color="dimmed"
               size="sm"
               align="center"
               mt={5}
            >
               Do not have an account yet?{" "}
               <Anchor
                  size="sm"
                  component={Link}
                  to={"/register"}
               >
                  Create account
               </Anchor>
            </Text>

            <Paper
               component={"form"}
               withBorder
               shadow="md"
               p={30}
               mt={30}
               radius="md"
               onSubmit={form.onSubmit((vals) => {
                  handleLogin(vals);
               })}
            >
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
               <Group
                  position="apart"
                  mt="lg"
               >
                  <Checkbox label="Remember me" />
                  <Anchor
                     component="button"
                     size="sm"
                  >
                     Forgot password?
                  </Anchor>
               </Group>
               <Button
                  type={"submit"}
                  fullWidth
                  mt="xl"
                  className={"text-to-yellow-transition"}
                  color={"brand.5"}
                  sx={{ ":hover": { background: theme.colors.brand[5] } }}
               >
                  Sign in
               </Button>
            </Paper>
         </Container>
         <MyFooter />
      </div>
   );
}
