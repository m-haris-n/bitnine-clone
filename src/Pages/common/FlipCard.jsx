import { Box, useMantineTheme } from "@mantine/core";

export default function FlipCard({ frontText, children }) {
   const theme = useMantineTheme();

   const flipBoxSx = {
      backgroundColor: "white",
      width: "100%",
      height: 88,
      perspective: 1000,
      ":hover .inner-box": {
         transform: "rotateY(180deg)",
      },
   };
   const innerBoxSx = {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 0.8s",
      transformStyle: "preserve-3d",
   };
   const frontSx = {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      background: "white",

      border: "2px solid " + theme.colors.blue[5],
      borderRadius: 10,
   };
   const backSx = {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
      background: theme.colors.blue[5],
      borderRadius: 10,
   };
   return (
      <Box sx={flipBoxSx}>
         <Box
            sx={innerBoxSx}
            className={"inner-box"}
         >
            <Box
               sx={frontSx}
               className={"flex items-center justify-center text-blue-500"}
            >
               {frontText}
            </Box>
            <Box
               sx={backSx}
               className={
                  "flex items-center justify-center text-white text-left"
               }
            >
               {children}
            </Box>
         </Box>
      </Box>
   );
}
