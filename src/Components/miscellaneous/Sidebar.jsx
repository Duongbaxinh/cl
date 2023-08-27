import React from 'react';

import { Box, Divider, Text, useTheme, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom'
import { AiFillSave } from 'react-icons/ai';
import { BsFillCaretDownFill, BsFillPostcardFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { PiVideoFill } from 'react-icons/pi';
import { RiMemoriesLine } from 'react-icons/ri';
import { SiCoinmarketcap } from 'react-icons/si';
import { ContextState } from '../../context/configContext';
import ItemScroll from '../micro/ItemScroll';
import { UrlPage } from '../../constant/UrlPage';


Sidbar.propTypes = {

};
const listItem = {
    friend: {
        icon: <FaUserFriends size='20px' color='blue' />,
        name: 'Bạn bè',
        url: UrlPage.friend
    },
    memory: {
        icon: <RiMemoriesLine size='20px' color='blue' />,
        name: 'Kỷ niệm',
        url: UrlPage.memory
    },
    saved: {
        icon: <AiFillSave size='20px' color='blue' />,
        name: 'Đã lưu',
        url: UrlPage.save
    },
    group: {
        icon: <HiUserGroup size='20px' color='blue' />,
        name: 'Nhóm',
        url: UrlPage.group
    },
    video: {
        icon: <PiVideoFill size='20px' color='blue' />,
        name: 'Video',
        url: UrlPage.video
    },
    market: {
        icon: <SiCoinmarketcap size='20px' color='blue' />,
        name: 'Marketing',
        url: UrlPage.marketing
    },
    feed: {
        icon: <BsFillPostcardFill size='20px' color='blue' />,
        name: 'Bảng feed',
        url: UrlPage.feed
    },
}
const listGroup = {
    game: {
        name: "Roza  revote 2",
        avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1686107139/Layer_1_xifpzh.png'
    },
    game2: {
        name: "Ball  revote 2",
        avatar: 'https://res.cloudinary.com/dwu92ycra/image/upload/v1686107139/Layer_1_xifpzh.png'
    }
}
function Sidbar({ handleFuction }) {
    const theme = useTheme()
    const { user, showMenu } = ContextState()
    return (
        <Box
            display={{ sm: `${showMenu ? 'block' : 'none'}`, lg: 'block' }}
            width={{ sm: `${showMenu ? '100vw' : '250px'}`, lg: '250px' }}
            height='95vh'
            padding='16px 8px'
            overflow='auto'
            position='fixed'
            zIndex='2'
            bg={theme.colors.white}
            left='0'
            top='55px'
        >
            <Box mb='10px'>
                <ItemScroll item={{ name: user?.username, icon: '' }} />
                {Object.keys(listItem).map((item, i) =>
                    <ChakraLink as={ReactLink} to={listItem[item].url}>
                        <ItemScroll key={i} item={listItem[item]} />
                    </ChakraLink>

                )}
                <ItemScroll item={{ name: 'xem thêm', icon: <BsFillCaretDownFill size='20px' /> }} />
            </Box>
            <Divider />
            <Box mt='10px' mb='20px' >
                <Box display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    _hover={{
                        "& > span": {
                            visibility: 'visible'
                        }
                    }}
                >
                    <Text {...theme.fonts.title1}>Lối tắt của bạn</Text>
                    <span visibility='hidden' color='blue'>Điểu Chỉnh</span>
                </Box>
                {Object.keys(listGroup).map((item, i) =>

                    <ItemScroll key={i} item={listGroup[item]} />

                )}
            </Box>
        </Box >
    );
}

export default Sidbar;