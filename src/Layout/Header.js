import { BellIcon, SearchIcon, SettingsIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, FormControl, IconButton, Input, InputGroup, InputLeftElement, useTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { FaFacebookF, FaGamepad } from 'react-icons/fa';
import { HiOutlineViewList } from 'react-icons/hi';
import { PiVideoFill } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import { SiCoinmarketcap } from 'react-icons/si';
import ItemMenu from '../Components/micro/ItemMenu';
import { ModalSearch } from '../Components/miscellaneous/ModelSearch.jsx';
import { UrlPage } from '../constant/UrlPage';
import { ContextState } from '../context/configContext';
import { BiBell } from 'react-icons/bi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import instanceUserApi from '../api/instantUserApi';
import { setAuthorization } from '../api/configDefaultAxios';
import { Link } from 'react-router-dom';

Header.propTypes = {

};
const menuData = {
    home: {
        id: '1',
        url: UrlPage.home,
        name: 'Home page',
        icon: <AiFillHome color='blue' size='30px' />
    },
    video: {
        id: '2',
        url: UrlPage.video,
        name: 'video',
        icon: <PiVideoFill color='blue' size='30px' />
    },
    marketing: {
        id: '3',
        url: UrlPage.marketing,
        name: 'marketing',
        icon: <MdOutlineLocalGroceryStore color='blue' size='30px' />
    },
    game: {
        id: '4',
        url: UrlPage.game,
        name: 'game',
        icon: <FaGamepad color='blue' size='30px' />
    }
}
const iconData = {
    setting: {
        icon: <FiSettings size='20px' color='blue' />,
        name: 'setting'
    },
    messenge: {
        icon: <AiFillMessage size='20px' color='blue' />,
        name: 'messenge'
    },
    annoucement: {
        icon: <BiBell size='20px' color='blue' />,
        name: 'messenge'
    },
    account: {
        icon: <VscAccount size='20px' color='blue' />,
        name: 'account'
    },

}
function Header(props) {
    const theme = useTheme()
    const { setShowMenu, showMenu, user } = ContextState()
    const [searchResult, setSearchResult] = useState()
    const [clickSearch, setClickSearch] = useState(false)
    const handleSearch = async (value) => {
        const currentTimeout = new Date().getTime()
        const timeout = 1000
        setTimeout(async () => {
            const timeNow = new Date().getTime()
            const timeDiffrent = timeNow - currentTimeout
            if (timeDiffrent > timeout) {
                setAuthorization(user.accessToken)
                const data = await instanceUserApi.querySearch(value)
                setSearchResult(data)
            }
        }, timeout)

    }
    return (
        <Box width='100%'
            padding=' 0 16px'
            display='flex'
            gap='16px'
            justifyContent='space-between'
            alignItems='center'
            bg='white'
            height="56px"
            position='fixed'
            zIndex='99'
            boxShadow={`0 1px 10px 1px ${theme.colors.lightGrey}`}
        >
            {/* LOGO - SEARCH */}
            <Box width={`${clickSearch ? '315px' : '25%'}`}
                position='relative'
                height='inherit'
                display="flex"
                justifyContent='center'
                padding='8px 0'
                gap='10px'>
                <ModalSearch opent={clickSearch}
                    onClose={() => setClickSearch(false)}
                    searchResult={searchResult} >
                    <IconButton as={Link} to='/homepage'
                        width='40PX'
                        height='40px'
                        borderRadius='50%'
                        bg='blue'
                        display={clickSearch ? 'none' : 'flex'}
                        icon={<FaFacebookF size='20px' color={theme.colors.white} />}
                        _hover={{
                            bg: 'blue'
                        }}
                    />
                    <FormControl
                        display={{ base: `${clickSearch ? 'flex' : 'none'}`, md: 'flex' }}
                        width='100%'

                        bg={theme.colors.lightGrey}
                        borderRadius='50px'
                    >
                        <InputGroup   >
                            {!clickSearch && <InputLeftElement >
                                <SearchIcon />
                            </InputLeftElement>}
                            <Input
                                display={{ base: `${clickSearch ? 'flex' : 'none'}`, md: 'flex' }}
                                variant='filled'
                                placeholder='Tìm kiếm trên facebook'
                                width='100%'
                                ml='20px'
                                style={{ outline: 'none', border: '0', borderRadius: '50px' }}
                                onClick={() => setClickSearch(true)}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                </ModalSearch>
                <IconButton
                    borderRadius="50%"
                    ml='20px'
                    onClick={() => setClickSearch(true)}
                    zIndex='9999'
                    display={
                        { base: `${!clickSearch ? 'flex' : 'none'}`, md: 'none' }
                    } icon={<SearchIcon />} />
            </Box>
            {/* MENU */}
            <Box display='flex' flexGrow='1'
                justifyContent='flex-start'
                alignItems='center'
                paddingRight='100px'
                height='100%'>
                <Box display={{ base: 'none', md: 'flex' }}
                    justifyContent='flex-start'
                    gap='8px'
                    padding='6px'
                    alignItems='center'
                    height='100%'
                    width='100%'
                >
                    {Object.keys(menuData).map((item) =>
                        <ItemMenu key={item} item={menuData[item]} />)}
                </Box>
                <IconButton
                    borderRadius="50%"
                    display={{ base: 'flex', md: 'none' }}
                    zIndex='2'
                    onClick={() => setShowMenu(!showMenu)}
                    icon={<HiOutlineViewList color='blue' size='30px' />} />
            </Box>
            {/* ICON */}
            <Box
                w='204px'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                gap='8px'
                height='inherit'
            >
                {Object.keys(iconData).map((item, i) =>
                    <IconButton borderRadius='50%'
                        width='40px' height='40px'
                        key={i} icon={iconData[item].icon} />)}
            </Box>
        </Box >
    );
}

export default Header;