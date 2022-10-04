import {
    Flex,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import {Item as ItemType} from "../types/item";

function Item({item}: { item: ItemType }) {
    const {name, price, img} = item;
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
                flex={1}
                flexDirection="column"
                align='flex-end'
                p={1}
                pt={2}
            >
                <Text fontSize='2xl'>
                    {name}
                </Text>

                <Text>£{price}</Text>
            </Stack>
        </Stack>
    );
}

export default Item;