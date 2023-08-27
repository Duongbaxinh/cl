import { Avatar, Box, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

ItemSlide.propTypes = {

};

function ItemSlide({ item, handleFunction }) {
    const theme = useTheme()
    return (
        <Box
            minWidth='145px' height='254px'
            position='relative'
            display='flex'
            flexDir='column'
            justifyContent='space-between'
            padding='16px'
            borderRadius='2xl'
            backgroundImage={item.image}
            backgroundSize='cover'
            scrollSnapAlign='center'
            onClick={handleFunction}
            _hover={{
                _after: {
                    content: "''",
                    position: "absolute",
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    opacity: '0.2',
                    bg: theme.colors.lightGrey,
                    cursor: 'pointer'
                }
            }}
        >
            <Avatar size='sm'
                borderWidth='5px'
                borderColor='blue'
                src={item.poster.avatar} />
            <Text {...theme.fonts.title2} color={theme.colors.white}>{item.poster.name}</Text>
        </Box>
    );
}

export default ItemSlide;