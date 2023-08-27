import { Avatar, Box, IconButton, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

ItemScroll.propTypes = {

};

function ItemScroll({ item, flex }) {
    const theme = useTheme()
    return (
        <Box display='flex'
            height='44px'
            padding='0 8px'
            justifyContent={!flex ? 'flex-start' : flex}
            alignItems='center'
            gap='10px'
            width='100%'
            borderRadius='lg'
            _hover={{ bg: theme.colors.lightGrey }} cursor='pointer' >

            {item.icon ? item.icon : <Avatar size='xs' src={item.avatar} />}
            <Text{...theme.fonts.title2}>{item.name}</Text>
        </Box>
    );
}

export default ItemScroll;