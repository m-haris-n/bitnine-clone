import { Image, Transition } from "@mantine/core";

export default function HoverCard({
   cardId,
   hoverToggle,
   setHoverToggle,
   image,
   children,
}) {
   return (
      <div
         className={
            "group relative w-1/3 h-56 border-[1px] border-gray-300 border-solid rounded-[10px] \
                         hover:border-blue-600 hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-blue-300 \
                          transition-all duration-500 bg-white shadow-md"
         }
         onMouseOver={() => setHoverToggle(hoverToggle)}
         onMouseLeave={() => setHoverToggle(0)}
      >
         <div
            onMouseOver={() => setHoverToggle(hoverToggle)}
            className={
               "w-full h-full px-16 flex justify-center items-center group-hover:opacity-0 transition-all duration-[500ms] absolute"
            }
         >
            <Image
               // height={'100'}
               src={image}
            />
         </div>
         <Transition
            mounted={hoverToggle == cardId}
            transition={"scale"}
            duration={600}
         >
            {(styles) => (
               <div
                  style={styles}
                  className={" absolute text-sm w-full h-full"}
               >
                  {children}
               </div>
            )}
         </Transition>
      </div>
   );
}
