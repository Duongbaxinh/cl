import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Text, useTheme } from '@chakra-ui/react';
import { getSameFriend } from '../../util/getSameFriend';
import { ContextState } from '../../context/configContext';

ItemUser.propTypes = {

};

function ItemUser({ user, sizeAvatar, time, description, handleFunction, children }) {
    const theme = useTheme()
    return (
        <Box display='flex'
            width='100%'
            padding='5px'
            borderRadius='10px'
            justifyContent='flex-start'
            alignItems='center'
            gap="10px"
            onClick={handleFunction}
            _hover={{
                backgroundColor: theme.colors.lightGrey
            }}>
            <Avatar
                size={sizeAvatar}
                src={user.avatar}
            />
            <Box>
                <Text {...theme.fonts.title1} >{user.username}</Text>
                <Text {...theme.fonts.body1}
                    color='grey'>

                    {description}</Text>
                {children}
            </Box>
        </Box>
    );
}

export default ItemUser;