import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, FormControl, Input, InputGroup, InputLeftElement, Skeleton, Text, useTheme } from '@chakra-ui/react';
import FriendModalHeader from '../micro/FriendModalHeader';
import { SearchIcon } from '@chakra-ui/icons';
import ItemUser from '../micro/ItemUser';
import { ContextState } from '../../context/configContext';
import LoadingListUser from '../Avatar/LoadingListUser';
import { getSameFriend } from '../../util/getSameFriend';



function ModalFriend(props) {
    const { user } = ContextState()
    const [searchFriend, setSearchFriend] = useState('')
    const theme = useTheme()
    if (user) {
        getSameFriend(user.friends)
        console.log('user', user)
    }
    const handleSearchFriend = (e) => {
        const timeout = 1000
        let timePrevious = new Date().getTime()
        setTimeout(() => {
            let nowTime = new Date().getTime()
            let difTime = nowTime - timePrevious
            if (difTime > timeout) {
                setSearchFriend(e.target.value)
            }
        }, timeout)
    }

    return (
        <Box w='360px'
            position='fixed'
            padding=' 18px'
            bg={theme.colors.white}
            height='90vh'>
            {/* HEADER */}
            <FriendModalHeader />
            {/* BODY LIST FRIEND */}
            <Box w='100%'
                height='90vh'
                overflow='auto'>
                <FormControl m=" 20px 0">
                    <InputGroup>
                        <InputLeftElement>
                            <SearchIcon />
                        </InputLeftElement>
                        <Input height='40px' borderRadius='2xl'
                            onChange={handleSearchFriend}
                            bg={theme.colors.lightGrey}
                            focusBorderColor='gray'
                            style={{ outline: "none", border: 0 }}
                            placeholder='Tìm kiếm bạn bè' />
                    </InputGroup>
                </FormControl>
                <Divider />
                <Text m='12px 0'>{`${536} người bạn`}</Text>
                <Box display='flex'
                    flexDir='column'
                >
                    {!user?.friends ? <LoadingListUser /> :
                        user?.friends.filter((fr) => fr.username.includes(searchFriend)).map((friend) =>
                            <ItemUser key={friend.id}
                                description={friend.same + " " + "bạn chung"}
                                user={friend} sizeAvatar={'md'}>
                            </ItemUser>)
                    }
                </Box>


            </Box>
        </Box>
    );
}

export default ModalFriend;