import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4} pt={4}>
			<Flex
  				h={{ base: "auto", sm: 16 }}
  				alignItems={"center"}
  				justifyContent={"space-between"}
  				flexDir={{
    				base: "column",
    				sm: "row",
  				}}
  				gap={{ base: 3, sm: 0 }}
  				py={{ base: 3, sm: 0 }}
  				borderBottomWidth="1px"
  				borderColor="green.400"
			>
				<Text
					fontSize={{ base: "22px", sm: "28px", md: "30px" }}
					fontWeight={"bold"}
					textAlign={"center"}
					bgGradient={"linear(to-r, green.400, green.600)"}
					bgClip={"text"}
				>
					<Link to={"/"}>ProductStore 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;
