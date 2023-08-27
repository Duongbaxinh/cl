import { Box, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ItemSlide from './micro/ItemSlide';

import { GrPrevious, GrNext } from 'react-icons/gr'
import { ContextState } from '../context/configContext';
import CarAvatar from './Avatar/CarAvatar';
ModalSlide.propTypes = {

};

function ModalSlide(props) {
    const { posts, user } = ContextState()
    let numberClick = Math.round(posts?.length / 3)
    let translate = (posts?.length - 1) * 3 + 4 * 145
    const [click, setClick] = useState(0)
    const [transititon, setTransiton] = useState(0)
    const handlePreviod = () => {
        if (click > 0) {
            setClick((pre) => pre - 1)
            setTransiton((pre) => pre + translate)
        }
    }
    const handleNext = () => {
        if (click < numberClick - 1) {
            setClick((pre) => pre + 1)
            setTransiton((pre) => pre - translate)
        }
    }
    return (
        <>
            <Box width='100%' height='100%'
                overflow='hidden'
                position='relative'
            >
                <Box
                    width='100vw'
                    display='flex'
                    justifyContent='flex-start'
                    alignItems='center'
                    gap='8px'
                    transform={`translateX(${transititon}px)`}
                    transition=' 1s ease'
                    scrollSnapType='x mandatory'
                    scrollSnapStop='always'
                >
                    <CarAvatar item={user} />
                    {posts.map((post, i) =>
                        <ItemSlide key={i} item={post} />)}
                </Box>
                <Box
                    width='inherit'
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%,-50%)'
                >
                    <IconButton borderRadius='50%'
                        position='absolute'
                        left='20px'
                        top={0}
                        display={click > 0 ? 'flex' : 'none'} icon={<GrPrevious />
                        }
                        onClick={handlePreviod} />
                    <IconButton
                        position='absolute'
                        right='20px'
                        top={0}
                        display={click < numberClick - 1 ? 'flex' : 'none'} borderRadius='50%' icon={<GrNext />}
                        onClick={handleNext} />
                </Box>
            </Box>
        </>

    );
}

export default ModalSlide;