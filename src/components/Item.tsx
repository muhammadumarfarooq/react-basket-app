import {
    Flex,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

function Item() {
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
            <Flex w='136px' bg="blue.200">
                <Image
                    objectFit="cover"
                    boxSize="100%"
                    src={
                        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
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
                    Lindsey James
                </Text>

                <Text>£0.00</Text>
            </Stack>
        </Stack>
    );
}

export default Item;