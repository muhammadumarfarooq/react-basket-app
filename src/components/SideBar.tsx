import React from 'react';
import {
    Box,
    Flex,
} from '@chakra-ui/react';

const SideBar = () => {
    return (
        <Box
            bg='white'
            borderRight="1px"
            borderRightColor='gray.200'
            w={96}
            pos="fixed"
            right={0}
            h="full"
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                Cart items
            </Flex>
        </Box>
    );
};

export default SideBar;