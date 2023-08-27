import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, HStack, IconButton, Image, Text, VStack, useTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown, AiOutlineMessage } from 'react-icons/ai'
import IntroduceUser from './IntroduceUser';

const introdution = [
    { id: 1, title: 'Bài Viết', url: '' },
    { id: 2, title: 'Giới Thiệu', url: '' },
    { id: 3, title: 'Bạn Bè', url: '' },
    { id: 4, title: 'Ảnh', url: '' },
    { id: 5, title: 'Video', url: '' },
    { id: 6, title: 'Check In', url: '' }
]
function MainFriend(props) {
    const theme = useTheme()
    const [action, setAction] = useState(1)
    const handleAction = (id) => { setAction(id) }
    return (
        <Box w='calc(100% - 360px)'
            height="100%"
            bg={theme.colors.white}
            ml='360px'        >
            <Box width='100%'>
                <Image src='https://res.cloudinary.com/dwu92ycra/image/upload/v1680581985/POP_txq6en.webp' w='100%' minHeight='250px' />
                <Box
                    w='100%'
                    height={{ base: 'auto', lg: '125px' }}
                    padding='0 30px'
                    display='flex'
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap='30px'
                    justifyContent='space-between'
                    alignItems='center' >
                    <Box w='100%'
                        display='flex'
                        justifyContent='flex-start'
                        alignItems='flex-end'>
                        <Avatar size='2xl' border='3px solid white' mt='-150px' />
                        <Box>
                            <Text fontSize='30px' fontWeight='500'>Ba Xinh</Text>
                            <Text fontSize='sm' fontWeight='light'>
                                {`506 ban be     ${10} ban chung`}
                            </Text>
                        </Box>
                    </Box>
                    <Box height='100%'
                        display='flex'
                        gap='15px'
                        justifyContent='center'
                        alignItems='center'>
                        <Button>Banj Be</Button>
                        <Button leftIcon={<AiOutlineMessage />} bg='blue'
                            variant='solid'>Nhan Tin</Button>
                        <IconButton icon={<AiFillCaretDown />} />

                    </Box>
                </Box>
                {/* MENU */}
                <HStack padding='0 30px'>
                    {introdution.map((item) =>
                        <Box as={Link} to='#'
                            p=' 10px 15px'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            color='blue'
                            position='relative'
                            onClick={() => handleAction(item.id)}
                            _after={item.id === action && {
                                position: 'absolute',
                                content: '" "',
                                zIndex: "99",
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '3px',
                                backgroundColor: "blue"
                            }}
                            _hover={item.id !== action && {
                                background: theme.colors.lightGrey,
                                borderRadius: '15px'
                            }}>
                            {item.title}
                        </Box>)}
                    <Button bg='transparent'
                        _hover={{ bg: "gray.200" }}
                        leftIcon={<AiFillCaretDown />}>Xem Thêm</Button>
                </HStack>
            </Box >
            <IntroduceUser />
        </Box >
    );
}

export default MainFriend;