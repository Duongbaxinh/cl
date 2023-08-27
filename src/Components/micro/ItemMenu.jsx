import { Link as ChakraLink, useTheme, Box, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';


ItemMenu.propTypes = {

};

function ItemMenu({ item, hanlefunciton }) {
    const [isActive, setIsActive] = useState(false)
    const theme = useTheme()
    return (
        <Tooltip title='tootike' placement='bottom' hasArrow
            height='100%'
            width='15%'
        >
            <ChakraLink as={ReactRouterLink} to={item.url}
                width='100%' height='100%'
                onClick={() => setIsActive(true)}>
                <Box display='flex'
                    gap='8px'
                    justifyContent='center'
                    alignItems='center'
                    width='inherit'
                    height='inherit'
                    position='relative'
                    _hover={
                        {
                            borderRadius: '2xl',
                            bg: `${theme.colors.lightGrey}`
                        }
                    }
                    _active={
                        isActive ? {
                            bg: 'transparent',
                            _after: {
                                content: '""',
                                position: "absolute",
                                width: '100%',
                                height: "2px",
                                bg: 'blue',
                                bottom: '0',
                                left: '0',
                            }
                        } :
                            {}
                    }
                >
                    {item.icon}
                </Box>
            </ChakraLink>
        </Tooltip >


    );
}

export default ItemMenu;