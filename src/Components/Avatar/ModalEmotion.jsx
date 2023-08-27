import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, useTheme } from '@chakra-ui/react';
import { ContextState } from '../../context/configContext';
import { getName } from '../../util/getName';
import { PiVideoFill } from 'react-icons/pi'
import { BsFillFileImageFill } from 'react-icons/bs';
import { RiEmotionHappyLine } from 'react-icons/ri';
import ItemScroll from '../micro/ItemScroll';
ModalEmotion.propTypes = {

};


function ModalEmotion({ user, children }) {
    const theme = useTheme()
    return (
        <Box
            w='100%'
            m='20px auto'
            borderRadius='lg'
            p='16px'
            bg={theme.colors.white}
        >
            <Box width='100%' display='flex'
                gap='20px'
                justifyContent='flex-start'
                mb='20px'
                alignItems='center'>
                <Avatar size='sm' src={user?.avatar} />
                <Button flexGrow='1' display='flex'
                    justifyContent='flex-start'
                    padding=' 0 8px'  >
                    {user && getName(user.username)} bạn đang nghĩ gì thế!
                </Button>
            </Box>
            <Divider />
            <Box
                mt='8px'
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
            >
                {children}
            </Box>
        </Box >
    );
}

export default ModalEmotion;