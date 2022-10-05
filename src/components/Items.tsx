import React, {useState, useMemo} from 'react';
import {Box, Divider, Select, Stack, Text} from '@chakra-ui/react';
import {Item as ItemType} from '../types/item';
import Item from "./Item";
import {filterItems} from "../utils";

function Items({items}: { items: ItemType[] }) {
    const [filterValue, setFilterValue] = useState('');
    const [cartItems, setCartItems] = useState(items.map((item: ItemType) => ({...item, qty: 0})));
    const filteredItems = useMemo(() => filterItems(cartItems, filterValue), [cartItems, filterValue]);

    const handleIncreaseItemQty = (id: number) => {
        const updatedCart = cartItems.map(cartItem => {
            if (cartItem.id === id) {
                return {...cartItem, qty: cartItem.qty + 1}
            }

            return cartItem;
        })

        setCartItems(updatedCart);
    };
    const handleDecreaseItemQty = (id: number) => {
        const updatedCart = cartItems.map(cartItem => {
            if (cartItem.id === id) {
                return {...cartItem, qty: cartItem.qty - 1}
            }

            return cartItem;
        })

        setCartItems(updatedCart);
    };

    return (
        <Box minH="100vh" bg='gray.100'>
            <Box mr={96} p="4">
                <Select placeholder='Colour filter' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
                        bg='white'>
                    <option value='Black'>Black</option>
                    <option value='Stone'>Stone</option>
                    <option value='Red'>Red</option>
                </Select>

                <Stack spacing={4} mt={8}>
                    {filteredItems.map((item) => (
                        <Item
                            key={String(item.id)}
                            item={item}
                            handleIncreaseItemQty={handleIncreaseItemQty}
                            handleDecreaseItemQty={handleDecreaseItemQty}
                        />
                    ))}
                </Stack>

                <Stack align='flex-end' mt={5}>
                    <Box minWidth='170px'>
                        <Divider borderColor='black'/>
                        <Text textAlign='center' fontWeight='medium' fontSize='4xl'>£{0}</Text>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Items;