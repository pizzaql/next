import React, {useRef} from 'react';
import {NextPage} from 'next';
import {
	Center,
	Box,
	Stack,
	Avatar,
	AvatarBadge,
	Tooltip,
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	SimpleGrid,
	ButtonGroup,
	Button,
	useToast,
	FormControl,
	FormLabel,
	InputGroup,
	InputLeftAddon,
	Input,
	Select,
	Textarea,
	Checkbox,
	Link,
	Text,
	Image,
	IconButton,
	useDisclosure,
	Tag,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Divider,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay
} from '@chakra-ui/core';
import {useRecoilState} from 'recoil';
import {IoMdAdd, IoMdCart, IoMdTrash, IoMdRemove} from 'react-icons/io';
import truncate from 'cli-truncate';

import info from '../lib/info';
import menu from '../lib/menu';
import {_cart} from '../lib/recoil-atoms';
import {merge} from '../utils/merge';

const Index: NextPage<unknown> = () => {
	const [cart, setCart] = useRecoilState(_cart);
	const toast = useToast();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const btnRef = useRef();
	const {isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose} = useDisclosure();
	const cancelRef = React.useRef();

	const items = cart.items.map(x => x.quantity).reduce((a, b) => a + b, 0);

	return (
		<>
			<Center width="100%" height="100%">
				<Box
					borderWidth="1px"
					borderRadius="lg"
					padding="1rem"
					margin=".5rem"
					marginBottom="4rem"
					width="4xl"
					boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
					backgroundColor="#fff"
				>
					<Stack spacing={5}>
						<Stack alignItems="center" spacing={3}>
							<Avatar name="Smart Pizza" src="images/pizza.jpg" size="2xl">
								<Tooltip hasArrow label="We are now open!" aria-label="A tooltip" placement="right">
									<AvatarBadge boxSize="2.8rem" bg="green.500"/>
								</Tooltip>
							</Avatar>
							<Heading>{info.name ?? 'Restaurant Name'}</Heading>
							<Text color="gray.500">{info.description ?? 'Restaurant description.'}</Text>
						</Stack>
						<Accordion defaultIndex={0}>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Menu
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<SimpleGrid minChildWidth="15rem" spacing={3} justifyContent="center" alignItems="center">
										{menu.map(item => (
											<Box key={item.name} borderWidth="1px" borderRadius="lg" padding="1rem">
												<Stack spacing={3}>
													<Image src={item.image} alt={`Photo of ${item.name}`} draggable={false} loading="lazy" decoding="async" width="100%" height="10rem" objectFit="cover" borderRadius="md"/>
													<Heading size="md">{item.name}</Heading>
													<Text as="i" color="gray.600" fontSize=".8rem">{truncate(item.ingredients.join(', '), 30)}</Text>
													<ButtonGroup isAttached>
														{item.variants.map(element => (
															<Button
																key={element.type}
																leftIcon={<IoMdAdd/>}
																colorScheme="blue"
																width="100%"
																onClick={() => {
																	setCart({
																		items: merge(cart.items, {name: item.name, type: element.type, price: element.price, quantity: 1}),
																		total: cart.total + element.price
																	});

																	toast({
																		title: 'Cart updated',
																		description: `Total: ${cart.total + element.price} ${info.currency}`,
																		status: 'success',
																		duration: 3000,
																		isClosable: true
																	});
																}}
															>
																<Stack spacing={0}>
																	<Text>{element.type}</Text>
																	<Text opacity=".8" fontSize=".75rem">{element.price} {info.currency ?? 'USD'}</Text>
																</Stack>
															</Button>
														))}
													</ButtonGroup>
												</Stack>
											</Box>
										))}
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Contact
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<SimpleGrid minChildWidth="18rem" spacing={5}>
										<FormControl isRequired id="name">
											<FormLabel>Name</FormLabel>
											<Input
												isRequired
												type="text"
												placeholder="John"
											/>
										</FormControl>
										<FormControl isRequired id="email">
											<FormLabel>E-mail</FormLabel>
											<Input
												isRequired
												type="email"
												placeholder="johndoe@example.com"
											/>
										</FormControl>
										<FormControl isRequired id="phone">
											<FormLabel>Phone number</FormLabel>
											<InputGroup>
												<InputLeftAddon
													// eslint-disable-next-line react/no-children-prop
													children={info.callingCode}
												/>
												<Input
													isRequired
													type="phone"
													placeholder="111 222 333"
												/>
											</InputGroup>
										</FormControl>
										<FormControl id="company">
											<FormLabel>Company name</FormLabel>
											<Input
												type="text"
												placeholder="Doe Inc."
											/>
										</FormControl>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Delivery
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<SimpleGrid minChildWidth="18rem" spacing={5}>
										<FormControl isRequired id="address">
											<FormLabel>Address</FormLabel>
											<Input
												isRequired
												type="text"
												placeholder="13a Twain Ave"
											/>
										</FormControl>
										<FormControl isRequired id="postal">
											<FormLabel>Postal code</FormLabel>
											<Input
												isRequired
												type="text"
												placeholder="12-345"
											/>
										</FormControl>
										<FormControl isRequired id="city">
											<FormLabel>City</FormLabel>
											<Input
												isRequired
												type="text"
												placeholder="Hot Rocks"
											/>
										</FormControl>
										<FormControl id="floor">
											<FormLabel>Floor</FormLabel>
											<Input
												type="text"
												placeholder="2nd"
											/>
										</FormControl>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Time
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<SimpleGrid minChildWidth="18rem" spacing={5}>
										<FormControl isRequired id="time">
											<FormLabel>Delivery time</FormLabel>
											<Select isRequired placeholder="Select...">
												<option value="asap">As soon as possible</option>
												<option value="option1">5:00</option>
												<option value="option2">5:30</option>
												<option value="option3">6:00</option>
											</Select>
										</FormControl>
										<FormControl id="notes">
											<FormLabel>Notes</FormLabel>
											<Textarea resize="vertical" placeholder="Please don't use a bell - baby is sleeping."/>
										</FormControl>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Payment
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<SimpleGrid minChildWidth="18rem" spacing={5}>
										<FormControl isRequired id="payment">
											<FormLabel>Payment method</FormLabel>
											<Select isRequired placeholder="Select...">
												<option value="cash">Cash</option>
												<option value="stripe">Stripe</option>
											</Select>
										</FormControl>
										<FormControl id="tip">
											<FormLabel>Tip</FormLabel>
											<Select isRequired>
												<option value="cash">None</option>
												<option value="stripe">5% (1 PLN)</option>
												<option value="stripe">10% (3 PLN)</option>
												<option value="stripe">15% (5 PLN)</option>
											</Select>
										</FormControl>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Summary
									</Box>
									<AccordionIcon/>
								</AccordionButton>
								<AccordionPanel>
									<Stack spacing={5} minWidth="18rem">
										<Checkbox>I agree with <Link color="teal.500" href="#">terms of service</Link> and <Link color="teal.500" href="#">privacy policy</Link>.</Checkbox>
										<Button type="submit" colorScheme="blue">Place an order</Button>
									</Stack>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
						<Stack alignItems="center" spacing={3}>
							<Text as="b" color="gray.600">Powered by</Text>
							<Stack direction="row" spacing={5}>
								<Link isExternal href="https://github.com/pizzaql">
									<Image src="images/pizzaql.svg" alt="PizzaQL" draggable={false} loading="lazy" decoding="async" width="6rem"/>
								</Link>
								<Link isExternal href="https://www.digitalocean.com/">
									<Image src="images/do.svg" alt="Digital Ocean" draggable={false} loading="lazy" decoding="async" width="8rem"/>
								</Link>
							</Stack>
						</Stack>
					</Stack>
				</Box>
			</Center>
			<IconButton
				isRound
				colorScheme="blue"
				aria-label="Open Cart"
				size="lg"
				icon={
					<Stack direction="row" spacing={3}>
						<IoMdCart/>
						<Text>Cart</Text>
						{cart.items.length > 0 && (
							<Tag
								borderRadius="full"
								colorScheme="red"
								variant="solid"
								position="absolute"
								top={items >= 10 ? -3 : -1}
								right={-1}
							>
								{items >= 10 ? '10+' : items}
							</Tag>
						)}
					</Stack>
				}
				position="fixed"
				bottom={5}
				right={5}
				width="7rem"
				boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
				onClick={onOpen}
			/>
			<Drawer
				isFullHeight
				isOpen={isOpen}
				placement="right"
				// @ts-expect-error
				finalFocusRef={btnRef}
				onClose={onClose}
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton/>
						<DrawerHeader>Cart</DrawerHeader>

						<DrawerBody>
							{cart.items.length > 0 ? (
								<Stack spacing={3}>
									{cart.items.map(item => (
										<Stack key={item.name} direction="row" alignItems="center" justifyContent="space-between">
											<Text as="b">{item.quantity}x {item.name}</Text>
											<Text as="i">{item.type}</Text>
											<Divider width="1rem"/>
											<ButtonGroup isAttached>
												<IconButton
													size="md"
													aria-label="Remove one"
													icon={<IoMdRemove/>}
													onClick={() => {
														if (item.quantity === 1) {
															setCart({
																items: cart.items.filter(element => (element.name !== item.name) || (element.type !== item.type)),
																total: cart.total - item.price
															});
														} else {
															setCart({
																items: [
																	{name: item.name, type: item.type, price: item.price, quantity: item.quantity - 1},
																	...cart.items.filter(element => (element.name !== item.name) && (element.type !== item.type))
																],
																total: cart.total - item.price
															});
														}
													}}
												/>
												<IconButton
													size="md"
													aria-label="Add one"
													icon={<IoMdAdd/>}
													onClick={() => {
														setCart({
															items: [
																{name: item.name, type: item.type, price: item.price, quantity: item.quantity + 1},
																...cart.items.filter(element => (element.name !== item.name) && (element.type !== item.type))
															],
															total: cart.total + item.price
														});
													}}
												/>
											</ButtonGroup>
										</Stack>
									))}
									<Divider/>
									<Stat textAlign="right">
										<StatLabel>Grand total</StatLabel>
										<StatNumber>{cart.total} {info.currency}</StatNumber>
										<StatHelpText>Includes free delivery</StatHelpText>
									</Stat>
								</Stack>
							) : (
								<Stack textAlign="center" marginTop="5rem">
									<Heading size="md">Cart is empty</Heading>
									<Text>Go ahead and add something tasty!</Text>
								</Stack>
							)}
						</DrawerBody>

						<DrawerFooter>
							<Button variant="outline" mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								leftIcon={<IoMdTrash/>}
								disabled={!cart.items.length}
								onClick={onAlertOpen}
							>
								Purge
							</Button>
							<AlertDialog
								isOpen={isAlertOpen}
								// @ts-expect-error
								leastDestructiveRef={cancelRef}
								onClose={onAlertClose}
							>
								<AlertDialogOverlay>
									<AlertDialogContent>
										<AlertDialogHeader fontSize="lg" fontWeight="bold">
											Purge cart
										</AlertDialogHeader>

										<AlertDialogBody>
											This action cannot be undone.
										</AlertDialogBody>

										<AlertDialogFooter>
											<Button
												// @ts-expect-error
												ref={cancelRef}
												onClick={onAlertClose}
											>
												Cancel
											</Button>
											<Button
												colorScheme="red"
												ml={3}
												onClick={() => {
													setCart({items: [], total: 0});
													onAlertClose();

													toast({
														title: 'Cart purged',
														status: 'success',
														duration: 3000,
														isClosable: true
													});
												}}
											>
												Confirm
											</Button>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialogOverlay>
							</AlertDialog>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Index;
