import { Box, IconButton, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';

function FriendModalHeader({ children }) {
    const theme = useTheme()
    return (
        <Box
            display='flex'
            bg={theme.colors.white}
            gap='15px'
            flexDir='column'>
            <Box display='flex'
                justifyContent='flex-start'
                gap='10px'
                alignItems='center'>
                <IconButton borderRadius='50%' icon={<GrFormPreviousLink />} />
                <Box>
                    <Text fontSize='sm'
                        color='gray'
                        fontWeight='light'>bạn bè</Text>
                    <Text fontSize='xl'
                        fontWeight='bold'>Tất cả bạn bè</Text>
                </Box>
            </Box>
            {children}
        </Box>
    );
}

export default FriendModalHeader;