import {useState, useMemo} from 'react';
import {Box, Select, Stack} from '@chakra-ui/react';
import SideBar from "./SideBar";
import {Item as ItemType} from '../types/item';
import Item from "./Item";
import {filterItems} from "../utils";

function Items({items}: { items: ItemType[] }) {
    const [filterValue, setFilterValue] = useState('');
    const filteredItems = useMemo(() => filterItems(items, filterValue), [filterValue]);

    return (
        <Box minH="100vh" bg='gray.100'>
            <SideBar/>
            <Box mr={96} p="4">
                <Select placeholder='Colour filter' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
                        bg='white'>
                    <option value='Black'>Black</option>
                    <option value='Stone'>Stone</option>
                    <option value='Red'>Red</option>
                </Select>

                <Stack spacing={4} mt={8}>
                    {filteredItems.map((item: ItemType) => <Item key={String(item.id)} item={item}/>)}
                </Stack>

            </Box>
        </Box>
    );
}

export default Items;