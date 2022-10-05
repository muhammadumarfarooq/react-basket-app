import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import {CartItem} from "../types/item";
import {BsPlus} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";

interface ItemProps {
    item: CartItem;
    handleIncreaseItemQty: (id: number) => void;
    handleDecreaseItemQty: (id: number) => void;
}

function Item({item, handleIncreaseItemQty, handleDecreaseItemQty}: ItemProps) {
    const {name, price, img, qty, id} = item;

    return (
        <Stack
            borderWidth="1px"
            borderRadius="lg"
            w='full'
            height='170px'
            direction='row'
            bg='white'
            boxShadow='2xl'
            padding={4}
        >
            <Flex w='136px' bg="#f1f1f1">
                <Image
                    objectFit="contain"
                    boxSize="100%"
                    src={img}
                />
            </Flex>
            <Stack
                flexDirection="column"
                align='flex-end'
                p={1}
                pt={2}
                maxW='300px'
            >
                <Text fontSize='xl' textAlign='right'>
                    {name}
                </Text>

                <Text textAlign='right'>£{price}</Text>
            </Stack>

            <Stack
                flexDirection="column"
                align='flex-end'
                justify='space-between'
                p={1}
                pt={2}
                flex={1}
            >
                <Box>
                    <ButtonGroup size='sm' isAttached variant='outline'>
                        <IconButton disabled={qty === 0} aria-label='increase item quantity' icon={<BiMinus/>}
                                    onClick={() => handleDecreaseItemQty(id)}/>
                        <Button>{qty}</Button>
                        <IconButton aria-label='decrease item quantity' icon={<BsPlus/>}
                                    onClick={() => handleIncreaseItemQty(id)}/>
                    </ButtonGroup>
                </Box>
            </Stack>
        </Stack>
    );
}

export default Item;