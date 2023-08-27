import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, FormControl, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import ItemUser from './ItemUser';

FriendBody.propTypes = {

};

function FriendBody(props) {
    return (
        <Box w='100%'
            height='90vh'
            overflow='auto'>
            <FormControl m=" 20px 0">
                <InputGroup>
                    <InputLeftElement>
                        <SearchIcon />
                    </InputLeftElement>
                    <Input height='40px' borderRadius='2xl'
                        bg={theme.colors.lightGrey}
                        focusBorderColor='gray'
                        style={{ outline: "none", border: 0 }}
                        placeholder='Tìm kiếm bạn bè' />
                </InputGroup>
            </FormControl>
            <Divider />
            <Text m='12px 0'>{`${536} người bạn`}</Text>
            <ItemUser user={{ username: 'baxinh' }} sizeAvatar={'lg'}>
                <Box display='flex'
                    mt='10px'
                    gap='10px'
                    justifyContent='flex-start'
                    alignItems='center'>
                    <Button bg='blue' >Them Ban Be</Button>
                    <Button>Xoa</Button>
                </Box>
            </ItemUser>

        </Box>
    );
}

export default FriendBody;