// import {
//     Box,
//     Button,
//     ButtonGroup,
//     Flex,
//     HStack,
//     IconButton,
//     Input,
//     SkeletonText,
//     Text,
//   } from "@chakra-ui/react";
//   import { FaLocationArrow, FaTimes } from "react-icons/fa";
//   import {
//     useJsApiLoader,
//     GoogleMap,
//     Marker,
//     Autocomplete,
//     DirectionsRenderer,
//   } from "@react-google-maps/api";
//   import { useRef, useState } from "react";

//   function App() {
//     // I have moved the useJsApiLoader Hook to the top level of the Location component
//     const { isLoaded } = useJsApiLoader({
//       googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//       libraries: ["places"],
//     });
    
//   return (
//     <Flex
//       position="relative"
//       flexDirection="column"
//       alignItems="center"
//       h="100vh"
//       w="100vw"
//     >
//       <Box position="absolute" left={0} top={0} h="100%" w="100%">
//         {/* Google Map Box */}
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
//           onLoad={(map) => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </Box>
//       <Box
//         p={4}
//         borderRadius="lg"
//         m={4}
//         bgColor="white"
//         shadow="base"
//         minW="container.md"
//         zIndex="1"
//       >
//         <HStack spacing={2} justifyContent="space-between">
//           <Box flexGrow={1}>
//             <Autocomplete>
//               <Input type="text" placeholder="Origin" ref={originRef} />
//             </Autocomplete>
//           </Box>
//           <ButtonGroup>
//             <Button colorScheme="pink" type="submit" onClick={Addlocation}>
//               Addlocation
//             </Button>
//             <IconButton
//               aria-label="center back"
//               icon={<FaTimes />}
//               onClick={clearRoute}
//             />
//           </ButtonGroup>
//         </HStack>
     
//       </Box>
//     </Flex>
//   );
// }

// export default App;



