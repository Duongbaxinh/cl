import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

IntroduYourSelf.propTypes = {

};

function IntroduYourSelf({ chidren }) {
    return (
        <Box w='100%'
            padding='15px'
            display='flex'
            flexDir='column'
            gap='20px'>
            <Text fontWeight='500'
                fontSize='large'>
                Giới thiệu
            </Text>
            {chidren}
        </Box>
    );
}

export default IntroduYourSelf;