import {
	Box,
	Button,
	Container,
	Heading,
	Input,
	useColorModeValue,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const toast = useToast();
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);

		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}

		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container maxW={"container.sm"} py={12}>
			<VStack spacing={8}>
				<Heading
					as={"h1"}
					fontSize={"28"}
					textAlign={"center"}
					mb={8}
					bgGradient="linear(to-r, green.400, green.600)"
					bgClip="text"
				>
					Create New Product
				</Heading>

				<Box
					w={"full"}
					bg={useColorModeValue("white", "gray.900")}
					p={8}
					rounded={"xl"}
					borderWidth="1px"
					borderColor={useColorModeValue("green.200", "green.800")}
					boxShadow={useColorModeValue(
						"0 10px 30px rgba(16, 185, 129, 0.15)",
						"0 10px 30px rgba(16, 185, 129, 0.10)"
					)}
				>
					<VStack spacing={4}>
						<Input
							placeholder="Product Name"
							name="name"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									name: e.target.value,
								})
							}
							focusBorderColor="green.400"
						/>

						<Input
							placeholder="Price"
							name="price"
							type="number"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									price: e.target.value,
								})
							}
							focusBorderColor="green.400"
						/>

						<Input
							placeholder="Image URL"
							name="image"
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									image: e.target.value,
								})
							}
							focusBorderColor="green.400"
						/>

						<Button
							colorScheme="green"
							onClick={handleAddProduct}
							w="full"
						>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;