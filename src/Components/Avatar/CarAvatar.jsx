import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, IconButton, Image, Text, useTheme } from '@chakra-ui/react';
import { GrAdd } from 'react-icons/gr';
import ModalCreatePost from '../miscellaneous/ModalCreatePost';

CarAvatar.propTypes = {

};

function CarAvatar({ item }) {
    const theme = useTheme()
    return (
        <Box
            minWidth='145px' height='254px'
            position='relative'
            display='flex'
            flexDir='column'
            justifyContent='space-between'
            borderRadius='2xl'
            background={theme.colors.white}

        >
            <Box width='100%' height='80%' bg='gray'
                borderRadius='16px 16px 0 0  '
                backgroundImage={item?.avatar}
                backgroundSize='cover'
            ></Box>
            <ModalCreatePost>
                <IconButton
                    position='absolute'
                    left='50%'
                    bottom='40px'
                    transform='translateX(-50%)'
                    bg='blue'
                    borderWidth='5px'
                    borderColor={theme.colors.white}
                    borderRadius='50%'
                    icon={<GrAdd />} />
            </ModalCreatePost>

            <Text {...theme.fonts.title2} textAlign='center'
                pb='15px'
                color={theme.colors.lighGrey}>Tạo Tin</Text>
        </Box>
    );
}

export default CarAvatar;