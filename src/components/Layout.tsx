import {useState} from 'react';
import {Box, Select, useColorModeValue} from '@chakra-ui/react';
import SideBar from "./SideBar";

function Layout() {
    const [value, setValue] = useState('');

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SideBar/>
            <Box mr={96} p="4">
                <Select placeholder='Colour filter' value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value='Black'>Black</option>
                    <option value='Stone'>Stone</option>
                    <option value='Red'>Red</option>
                </Select>


            </Box>
        </Box>
    );
}

export default Layout;