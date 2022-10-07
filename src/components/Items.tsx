import React, {useState, useMemo} from 'react';
import {Box, Divider, Select, Stack, Text} from '@chakra-ui/react';
import {Item as ItemType} from '../types/item';
import Item from "./Item";
import {filterItems, getCartTotal} from "../utils";

function Items({items}: { items: ItemType[] }) {
    const [filterValue, setFilterValue] = useState('');
    const [cartItems, setCartItems] = useState(items.map((item: ItemType) => ({...item, qty: 0})));
    const filteredItems = useMemo(() => filterItems(cartItems, filterValue), [cartItems, filterValue]);
    const cartTotal = useMemo(() => getCartTotal(cartItems), [cartItems]);
    const colors = useMemo(() => (items.map(item => item.colour)
        .filter((value, index, self) => self.indexOf(value) === index)), []);

    const handleUpdateItemQuantity = (id: number, newQuantity: number) => {
        const updatedCart = cartItems.map(cartItem => {
            if (cartItem.id === id) {
                return {...cartItem, qty: newQuantity}
            }

            return cartItem;
        })

        setCartItems(updatedCart);
    };

    return (
        <Box minH="100vh" bg='gray.100'>
            <Box p="4" maxW='768px' mx='auto'>
                <Select placeholder='Colour filter' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}
                        bg='white'>
                    {colors.map((color) => <option key={color} value={color}>{color}</option>)}
                </Select>

                <Stack spacing={4} mt={8} data-testid="products-list">
                    {filteredItems.map((item) => (
                        <Item
                            key={String(item.id)}
                            item={item}
                            handleUpdateItemQuantity={handleUpdateItemQuantity}
                        />
                    ))}
                </Stack>

                <Stack align='flex-end' mt={5}>
                    <Box minWidth='170px'>
                        <Divider borderColor='black'/>
                        <Text textAlign='center' fontWeight='medium' fontSize='4xl'>£{cartTotal}</Text>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Items;