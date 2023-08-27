import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import ModalFriend from '../Components/miscellaneous/ModalFriend';
import MainFriend from '../Components/MainFriend';


function FriendPage(props) {
    return (
        <Box pt='55px' >
            <ModalFriend />
            <MainFriend />
        </Box>
    );
}

export default FriendPage;