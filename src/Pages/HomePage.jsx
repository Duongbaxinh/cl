import React from 'react';
import PropTypes from 'prop-types';
import { ContextState } from '../context/configContext';
import { Box, Container } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import Header from '../Layout/Header';
import Sidbar from '../Components/miscellaneous/Sidebar';
import MainModal from '../Components/MainModal';
import TableLet from '../Components/TableLet';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <>
            <Container
                maxW="100%"
                height='100vh'
                padding={{ xs: '0', sm: '60px' }}>
                <Sidbar />
                <MainModal />
                <TableLet />
            </Container>
        </>

    );
}

export default HomePage;