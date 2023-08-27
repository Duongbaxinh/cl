import { Box, useTheme } from '@chakra-ui/react';
import React from 'react';
import { PiVideoFill } from 'react-icons/pi'
import { BsFillFileImageFill } from 'react-icons/bs';
import { RiEmotionHappyLine } from 'react-icons/ri';
import ModalSlide from './ModalSlide';
import ModalEmotion from './Avatar/ModalEmotion';
import { ContextState } from '../context/configContext';
import PostModal from './PostModal';
import ItemScroll from './micro/ItemScroll';

MainModal.propTypes = {

};

const listEmotion = {
    video: {
        name: 'Video trực tiếp',
        icon: <PiVideoFill color='red' size='20px' />
    },
    image: {
        name: 'Ảnh/Video',
        icon: <BsFillFileImageFill color='green' size='20px' />
    },
    emotion: {
        name: 'Cảm xúc/Hoạt động',
        icon: <RiEmotionHappyLine color='orange' size='30px' />
    }
}
function MainModal(props) {
    const { user } = ContextState()
    const theme = useTheme()
    return (
        <>
            <Box
                pt='80px'
                width={{ base: '100%', md: "610px" }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDir='column'

                margin={{ base: '0', sm: '0 30px', lg: '0 auto' }}
            >
                <Box width='100%'>
                    <ModalSlide />
                </Box>
                {user && <ModalEmotion user={user}>
                    {Object.keys(listEmotion).map((item, i) =>
                        <ItemScroll key={i} item={listEmotion[item]} />
                    )}</ModalEmotion>}
                {user && <PostModal />}
            </Box>


        </>

    );
}

export default MainModal;