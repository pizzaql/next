import React, {useRef} from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import NextImage from 'next/image';
import {
	Center,
	Box,
	useColorMode,
	Stack,
	Avatar,
	AvatarBadge,
	Tooltip,
	Heading,
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
	AlertDialogOverlay,
	chakra,
	UnorderedList,
	ListItem,
	Flex,
	Menu,
	MenuList,
	MenuItem
} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {useForm} from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import {IoMdAdd, IoMdCart, IoMdTrash, IoMdRemove} from 'react-icons/io';
import {HiOutlineTranslate} from 'react-icons/hi';

import info from '../lib/info';
import menu from '../lib/menu';
import {_cart} from '../lib/recoil-atoms';
import {merge} from '../utils/merge';
import {getDeliveryHours} from '../utils/get-delivery-hours';

type FormState = {
	name: string;
	email: string;
	phone: string;
	company?: string;
	address: string;
	postal: string;
	city: string;
	floor?: string;
	time: string;
	notes?: string;
	payment: 'cash' | 'stripe';
	tip?: string;
};

const ProductImage = chakra(NextImage, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Index: NextPage<unknown> = () => {
	const router = useRouter();

	const [cart, setCart] = useRecoilState(_cart);
	const {register, handleSubmit, watch} = useForm<FormState>();
	const {colorMode} = useColorMode();
	const toast = useToast();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const btnRef = useRef();
	const {isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose} = useDisclosure();
	const {isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose} = useDisclosure();
	const cancelRef = useRef();
	const {t, lang} = useTranslation('home');

	const items = cart.items.map(x => x.quantity).reduce((a, b) => a + b, 0);
	const deliveryHours = getDeliveryHours(new Date());

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

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
					backgroundColor={colorMode === 'dark' ? '#1A202C' : '#fff'}
					position="relative"
				>
					{info.isDevelopment && (
						<Tag
							textTransform="uppercase"
							colorScheme="yellow"
							variant="solid"
							mb="1rem"
						>
							{t('development')}
						</Tag>
					)}
					<Stack
						position="absolute"
						top="1rem"
						right="1rem"
					>
						<Menu
							isLazy
							isOpen={isMenuOpen}
							onOpen={onMenuOpen}
							onClose={onMenuClose}
						>
							<IconButton
								aria-label="Change language"
								icon={<HiOutlineTranslate/>}
								onClick={onMenuOpen}
							/>
							<MenuList>
								<MenuItem
									onClick={async () => {
										await router.push('/', '/', {locale: 'en'});
									}}
								>
									English
								</MenuItem>
								<MenuItem
									onClick={async () => {
										await router.push('/', '/', {locale: 'pl'});
									}}
								>
									Polski
								</MenuItem>
							</MenuList>
						</Menu>
					</Stack>
					<Stack spacing={5}>
						<Stack alignItems="center" spacing={3}>
							<Avatar name={info.name} src="images/pizza.jpg" size="2xl" draggable={false}>
								<Tooltip hasArrow label={deliveryHours && deliveryHours.length > 0 ? t('open') : t('closed')} aria-label={t('tooltip')} placement="right">
									<AvatarBadge boxSize="2.8rem" bg={deliveryHours && deliveryHours.length > 0 ? 'green.500' : 'red.500'}/>
								</Tooltip>
							</Avatar>
							<Heading>{info.name ?? t('restaurantName')}</Heading>
							<Text color="gray.500">{info.description[lang as 'en' | 'pl'] ?? t('restaurantDescription')}</Text>
						</Stack>
						<SimpleGrid minChildWidth="15rem" spacing={3} justifyContent="center" alignItems="center" pt="1rem">
							{menu(lang as 'en' | 'pl').map(item => (
								<Box key={item.name} borderWidth="1px" borderRadius="lg" padding="1rem">
									<Stack spacing={3}>
										<ProductImage
											src={`/${item.image}`}
											alt={`${t('photoOf')} ${item.name}`}
											draggable={false}
											loading="lazy"
											decoding="async"
											width="100%"
											height={150}
											objectFit="cover"
											borderRadius="md"
										/>
										<Flex width="100%" justifyContent="space-between">
											<Heading size="md">{item.name}</Heading>
											<Text color="gray.500">ø 30</Text>
										</Flex>
										<Text as="i" color="gray.600" fontSize=".8rem">
											{item.ingredients.join(', ').length >= 30 ? (
												<Tooltip
													hasArrow
													closeOnMouseDown
													padding={3}
													aria-label={t('ingredients')}
													label={
														<>
															<Heading size="sm" mb={1}>{t('ingredients')}</Heading>
															<UnorderedList>
																{item.ingredients.map(element => <ListItem key={element}>{element}</ListItem>)}
															</UnorderedList>
														</>
													}
												>
													<Text>
														{`${item.ingredients.join(', ').slice(0, 27)}...`}
													</Text>
												</Tooltip>
											) : item.ingredients.join(', ')}
										</Text>
										<ButtonGroup isAttached>
											{item.variants.map(element => (
												<Button
													key={element.type}
													leftIcon={<IoMdAdd/>}
													colorScheme="blue"
													width="100%"
													isDisabled={!deliveryHours || deliveryHours.length === 0}
													onClick={() => {
														setCart(previous => ({
															items: merge(previous.items, {name: item.name, type: element.type, price: element.price, quantity: 1}),
															total: previous.total + element.price
														}));
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
						<Divider/>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Stack spacing={5}>
								<Heading size="md">{t('contact')}</Heading>
								<SimpleGrid minChildWidth="18rem" spacing={5}>
									<FormControl isRequired id="name">
										<FormLabel>{t('name')}</FormLabel>
										<Input
											ref={register({required: true})}
											isRequired
											name="name"
											type="text"
											placeholder="John"
										/>
									</FormControl>
									<FormControl isRequired id="email">
										<FormLabel>{t('email')}</FormLabel>
										<Input
											ref={register({required: true})}
											isRequired
											name="email"
											type="email"
											placeholder="johndoe@example.com"
										/>
									</FormControl>
									<FormControl isRequired id="phone">
										<FormLabel>{t('phone')}</FormLabel>
										<InputGroup>
											<InputLeftAddon
												// eslint-disable-next-line react/no-children-prop
												children={info.callingCode}
											/>
											<Input
												ref={register({required: true})}
												isRequired
												name="phone"
												type="phone"
												placeholder="111 222 333"
											/>
										</InputGroup>
									</FormControl>
									<FormControl id="company">
										<FormLabel>{t('company')}</FormLabel>
										<Input
											ref={register}
											name="company"
											type="text"
											placeholder="Doe Inc."
										/>
									</FormControl>
								</SimpleGrid>
								<Heading size="md">{t('delivery')}</Heading>
								<SimpleGrid minChildWidth="18rem" spacing={5}>
									<FormControl isRequired id="address">
										<FormLabel>{t('address')}</FormLabel>
										<Input
											ref={register({required: true})}
											isRequired
											name="address"
											type="text"
											placeholder="13a Twain Ave"
										/>
									</FormControl>
									<FormControl isRequired id="postal">
										<FormLabel>{t('postal')}</FormLabel>
										<Input
											ref={register({required: true})}
											isRequired
											name="postal"
											type="text"
											placeholder="12-345"
										/>
									</FormControl>
									<FormControl isRequired id="city">
										<FormLabel>{t('city')}</FormLabel>
										<Input
											ref={register({required: true})}
											isRequired
											name="city"
											type="text"
											placeholder="Hot Rocks"
										/>
									</FormControl>
									<FormControl id="floor">
										<FormLabel>{t('floor')}</FormLabel>
										<Input
											ref={register}
											name="floor"
											type="text"
											placeholder="2nd"
										/>
									</FormControl>
								</SimpleGrid>
								<Heading size="md">{t('time')}</Heading>
								<SimpleGrid minChildWidth="18rem" spacing={5}>
									<FormControl isRequired id="time">
										<FormLabel>{t('deliveryTime')}</FormLabel>
										<Select ref={register({required: true})} isRequired name="time" placeholder="Select...">
											{deliveryHours && deliveryHours.length > 0 && <option value="asap">{t('asap')}</option>}
											{deliveryHours?.map(date => (
												<option key={date} value={date}>{date}</option>
											))}
										</Select>
									</FormControl>
									<FormControl id="notes">
										<FormLabel>{t('notes')}</FormLabel>
										<Textarea
											ref={register}
											name="notes"
											resize="vertical"
											placeholder={t('deliveryPlaceholder')}
										/>
									</FormControl>
								</SimpleGrid>
								<Heading size="md">{t('payment')}</Heading>
								<SimpleGrid minChildWidth="18rem" spacing={5}>
									<FormControl isRequired id="payment">
										<FormLabel>{t('paymentMethod')}</FormLabel>
										<Select
											ref={register({required: true})}
											isRequired
											name="payment"
											placeholder={t('select')}
										>
											<option value="cash">{t('cash')}</option>
											<option value="stripe">Stripe</option>
										</Select>
									</FormControl>
									<FormControl id="tip">
										<FormLabel>{t('tip')}</FormLabel>
										<Select ref={register} name="tip" defaultValue="none">
											<option value="none">{t('tipNone')}</option>
											<option value={`${Math.round((((cart.total / 100) * 5) + Number.EPSILON) * 100) / 100} ${info.currency}`}>5% ({Math.round(((cart.total / 100) * 5 + Number.EPSILON) * 100) / 100} {info.currency})</option>
											<option value={`${Math.round((((cart.total / 100) * 10) + Number.EPSILON) * 100) / 100} ${info.currency}`}>10% ({Math.round((((cart.total / 100) * 10) + Number.EPSILON) * 100) / 100} {info.currency})</option>
											<option value={`${Math.round((((cart.total / 100) * 15) + Number.EPSILON) * 100) / 100} ${info.currency}`}>15% ({Math.round((((cart.total / 100) * 15) + Number.EPSILON) * 100) / 100} {info.currency})</option>
										</Select>
									</FormControl>
								</SimpleGrid>
								<Divider/>
								<Stack spacing={10} minWidth="18rem" pt="1rem">
									<Checkbox isRequired>{t('iAgree')} <Link color="teal.500" href="#">{t('terms')}</Link> {t('and')} <Link color="teal.500" href="#">{t('privacy')}</Link>.</Checkbox>
									<Button
										type="submit"
										colorScheme="blue"
										isDisabled={!deliveryHours || deliveryHours.length === 0}
									>
										{watch('payment') === 'stripe' ? t('placeAndPay') : t('pay')}
									</Button>
								</Stack>
							</Stack>
						</form>
						<Stack alignItems="center" spacing={3} pt="2rem">
							<Text as="b" color="gray.600">{t('powered')}</Text>
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
				aria-label={t('openCart')}
				size="lg"
				icon={
					<Stack direction="row" spacing={2}>
						<IoMdCart/>
						<Text>{t('cart')}</Text>
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
				isOpen={isOpen}
				placement="right"
				// @ts-expect-error
				finalFocusRef={btnRef}
				scrollBehavior="inside"
				onClose={onClose}
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton/>
						<DrawerHeader>{t('cart')}</DrawerHeader>

						<DrawerBody>
							{cart.items.length > 0 ? (
								<Stack spacing={3}>
									{cart.items.map(item => (
										<Stack key={`${item.name}-${item.type}`} direction="row" alignItems="center" justifyContent="space-between">
											<Text as="b">{item.quantity}x {item.name}</Text>
											<Text as="i">{item.type}</Text>
											<Divider width="1rem"/>
											<ButtonGroup isAttached>
												<IconButton
													size="md"
													aria-label={t('remove')}
													icon={<IoMdRemove/>}
													onClick={() => {
														if (item.quantity === 1) {
															setCart(previous => ({
																items: previous.items.filter(element => (element.name !== item.name) || (element.type !== item.type)),
																total: previous.total - item.price
															}));
														} else {
															setCart(previous => ({
																items: [
																	...previous.items.filter(element => (element.name !== item.name) || (element.type !== item.type)),
																	{
																		name: item.name,
																		type: item.type,
																		price: item.price,
																		quantity: item.quantity - 1
																	}
																],
																total: previous.total - item.price
															}));
														}
													}}
												/>
												<IconButton
													size="md"
													aria-label={t('add')}
													icon={<IoMdAdd/>}
													onClick={() => {
														setCart(previous => ({
															items: [
																...previous.items.filter(element => (element.name !== item.name) || (element.type !== item.type)),
																{
																	name: item.name,
																	type: item.type,
																	price: item.price,
																	quantity: item.quantity + 1
																}
															],
															total: previous.total + item.price
														}));
													}}
												/>
											</ButtonGroup>
										</Stack>
									))}
									<Divider/>
									<Stat textAlign="right">
										<StatLabel>{t('grandTotal')}</StatLabel>
										<StatNumber>{cart.total} {info.currency}</StatNumber>
										<StatHelpText>{t('includesFreeDelivery')}</StatHelpText>
									</Stat>
								</Stack>
							) : (
								<Stack textAlign="center" marginTop="5rem">
									<Heading size="md">{t('emptyCart')}</Heading>
									<Text>{t('emptyCartMessage')}</Text>
								</Stack>
							)}
						</DrawerBody>

						<DrawerFooter paddingBottom="1rem">
							<Button variant="outline" mr={3} onClick={onClose}>
								{t('close')}
							</Button>
							<Button
								colorScheme="red"
								leftIcon={<IoMdTrash/>}
								disabled={cart.items.length === 0}
								onClick={onAlertOpen}
							>
								{t('purge')}
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
											{t('purgeCart')}
										</AlertDialogHeader>

										<AlertDialogBody>
											{t('purgeCartMessage')}
										</AlertDialogBody>

										<AlertDialogFooter>
											<Button
												// @ts-expect-error
												ref={cancelRef}
												onClick={onAlertClose}
											>
												{t('cancel')}
											</Button>
											<Button
												colorScheme="red"
												ml={3}
												onClick={() => {
													setCart({items: [], total: 0});
													onAlertClose();

													toast({
														title: t('cartPurged'),
														status: 'success',
														duration: 3000,
														isClosable: true
													});
												}}
											>
												{t('confirm')}
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
