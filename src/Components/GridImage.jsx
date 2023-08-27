import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
GridImage.propTypes = {

};

function GridImage({ children }) {
    return (
        <Box
            display='grid'
            gridTemplateColumns='repeat(auto-fit,minmax(200px,1fr))'
            gridAutoRows='200px'
            gridAutoFlow='dense'
            gridGap='3px'
        >
            {children}
        </Box>
    );
}

export default GridImage;