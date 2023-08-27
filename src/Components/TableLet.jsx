import React from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@chakra-ui/react';

TableLet.propTypes = {

};

function TableLet(props) {
    const theme = useTheme()
    return (
        <Box
            display={{ base: 'none', md: 'flex' }}
            position='fixed' right='0' top='60px'
            height='95vh'
            bg={theme.colors.white}
            pt='16px 8px' width='250px'>
            TABLET
        </Box>
    );
}

export default TableLet;