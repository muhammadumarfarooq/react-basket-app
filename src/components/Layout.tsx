import useSWR from 'swr'
import {Alert, AlertIcon, AlertTitle, Spinner, Stack} from '@chakra-ui/react';
import Items from "./Items";

const fetcher = (url: string) => fetch(url).then(res => res.json())

function Layout() {
    const {data, error} = useSWR('https://my-json-server.typicode.com/benirvingplt/products/products', fetcher);

    if (error) return (
        <Stack align='center' justify='center' py={16} px={4}>
            <Alert status='error'>
                <AlertIcon/>
                <AlertTitle>Something went wrong, try reloading the page</AlertTitle>
            </Alert>
        </Stack>
    );

    if (!data) return (
        <Stack align='center' justify='center' pt={16} px={4} data-testid="loading-products">
            <Spinner color='red.500'/>
        </Stack>
    );

    return (
        <Items items={data}/>
    );
}

export default Layout;