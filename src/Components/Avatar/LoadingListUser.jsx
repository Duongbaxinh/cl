import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Skeleton, Stack } from '@chakra-ui/react';

LoadingListUser.propTypes = {

};

function LoadingListUser(props) {
    return (
        <HStack gap='5px'>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
            <Skeleton height='30px'></Skeleton>
        </HStack>
    );
}

export default LoadingListUser;