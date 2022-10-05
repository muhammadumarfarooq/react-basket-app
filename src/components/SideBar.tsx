import React from 'react';
import {Box, Divider, Flex, Stack, Text} from "@chakra-ui/react";

const SideBar = ({total}: { total: number }) => {
    return (
        <Stack
            bg='white'
            borderRight="1px"
            borderRightColor='gray.200'
            w={96}
            pos="fixed"
            right={0}
            h="full"
        >
            <Flex flex={1}>

            </Flex>
            <Box>
                <Divider/>
                <Text textAlign='center' fontWeight='medium' fontSize='4xl'>£{total}</Text>
            </Box>
        </Stack>
    );
};

export default SideBar;