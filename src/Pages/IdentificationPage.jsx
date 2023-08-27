import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Text, theme, useTheme } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import SignUp from '../Components/Authentication/SignUp'
IdentificationPage.propTypes = {

};

function IdentificationPage(props) {
    const theme = useTheme()
    return (
        <Container maxW='lg' bg={theme.colors.white}
            borderRadius='2xl' centerContent pt='15px'>
            <Text>MERN-CHAT</Text>
            <Box p='15px' w='100%'
            >
                <Tabs variant='soft-rounded' colorScheme='green' >
                    <TabList w='100% '>
                        <Tab>Login</Tab>
                        <Tab>Sing Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container >
    );
}

export default IdentificationPage;