import {
   Box,
   Button,
   Container,
   Loader,
   PasswordInput,
   Text,
   TextInput,
   Title,
   useMantineTheme,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { tokenAtom, userAtom } from "../atoms/userAtom";
import { editUserProfile, getUserProfile } from "../api/userProfile";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

export default function Profile() {
   const theme = useMantineTheme();
   const nav = useNavigate();
   const [disabled, setDisabled] = useState(true);
   const [user, setUser] = useAtom(userAtom);
   const [token, setToken] = useAtom(tokenAtom);
   const [invalidate, setInvalidate] = useState(false);
   const [loading, setLoading] = useState(0);

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
            value.length < 6 && value != 0
               ? "Password must have at least 6 characters"
               : null,
      },
   });

   const handleUpdate = (vals) => {
      setLoading(1);

      let data = structuredClone(vals);
      if (data.password.length == 0) {
         delete data.password;
      }
      // console.log("data:", data);
      editUserProfile(data)
         .then((res) => {
            // console.log("success");
            // console.log(res);
            form.setValues({ password: "" });
            setLoading(0);
            setDisabled(true);
         })
         .catch((err) => {
            // console.log("failed");
            // console.log(err);
            setLoading(2);
         });
      setInvalidate(true);
   };

   const handleLogout = () => {
      setUser({});
      setToken("");
      localStorage.clear();
      nav("/login");
   };

   useEffect(() => {
      setLoading(0);
      getUserProfile()
         .then((res) => {
            // console.log(res.data);
            setUser(res.data);
            setInvalidate(false);
         })
         .catch((err) => {
            // console.log(err);
            setLoading(2);
         });
   }, [setUser, invalidate]);

   useEffect(() => {
      // console.log("user:", user);
      form.setValues({ name: user.name });
      form.setValues({ email: user.email });
   }, [user]);

   const fieldSx = {
      label: { fontSize: 20 },
      input: {
         fontSize: 16,
         border: disabled && "none",
         "&[data-disabled]": {
            color: "black",
            opacity: 1,
         },
      },
   };

   return (
      <div className={"flex flex-col justify-start items-start"}>
         <Box
            bg={"brand.5"}
            className={"w-screen pt-20 pb-7 "}
         >
            <Container
               size={"lg"}
               className={"flex flex-row justify-between align-baseline"}
            >
               <Title
                  order={1}
                  color={"white"}
               >
                  Profile
               </Title>
               <Button
                  color={"brand.5"}
                  variant={"white"}
                  onClick={handleLogout}
               >
                  {loading == 3 ? (
                     <Loader
                        color={"white"}
                        size={"sm"}
                     />
                  ) : (
                     "Log out"
                  )}
               </Button>
            </Container>
         </Box>
         <Container
            size={"lg"}
            className={"w-full flex flex-col items-start justify-start mt-10"}
         >
            <form
               className={"w-full flex flex-col gap-3"}
               onSubmit={form.onSubmit((vals) => {
                  handleUpdate(vals);
               })}
            >
               <TextInput
                  styles={fieldSx}
                  label="Name"
                  placeholder="Your Name"
                  disabled={disabled}
                  autoComplete={"off"}
                  {...form.getInputProps("name")}
               />
               <TextInput
                  styles={fieldSx}
                  label="Email"
                  placeholder="you@example.com"
                  disabled={disabled}
                  autoComplete={"off"}
                  {...form.getInputProps("email")}
               />
               {!disabled && (
                  <PasswordInput
                     styles={fieldSx}
                     label="Password"
                     placeholder="Your password"
                     disabled={disabled}
                     autoComplete={"off"}
                     mt="md"
                     {...form.getInputProps("password")}
                  />
               )}
               {!disabled ? (
                  <Button.Group>
                     <Button
                        onClick={() => setDisabled(true)}
                        variant={"outline"}
                        color={"brand.5"}
                     >
                        Cancel
                     </Button>
                     <Button
                        type={"submit"}
                        className={"text-to-yellow-transition"}
                        color={"brand.5"}
                        sx={{ ":hover": { background: theme.colors.brand[5] } }}
                        // onClick={handleUpdate}
                     >
                        {loading == 1 ? (
                           <Loader
                              size={"sm"}
                              color={"white"}
                           />
                        ) : (
                           "Save"
                        )}
                     </Button>
                  </Button.Group>
               ) : (
                  <div>
                     <Button
                        onClick={() => setDisabled(false)}
                        className={"text-to-yellow-transition"}
                        color={"brand.5"}
                        sx={{ ":hover": { background: theme.colors.brand[5] } }}
                     >
                        Edit
                     </Button>
                  </div>
               )}
               {loading == 2 && <Text color={"red"}>Something went wrong</Text>}
            </form>
         </Container>
      </div>
   );
}
