import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import IntroduYourSelf from './micro/IntroduYourSelf';
import TemplateList from './micro/TemplateList';
import ModalEmotion from './Avatar/ModalEmotion';
import { PiVideoFill } from 'react-icons/pi';
import { BsFillFileImageFill } from 'react-icons/bs';
import ItemScroll from './micro/ItemScroll';

IntroduceUser.propTypes = {

};
const listEmotion = {
    image: {
        name: 'Ảnh/Video',
        icon: <BsFillFileImageFill color='green' size='20px' />
    },
    ganthe: {
        name: 'Gắn thẻ người khác',
        icon: <PiVideoFill color='red' size='20px' />
    },
}
function IntroduceUser(props) {
    return (
        <Box width='100%'
            padding=' 30px 50px'
            display='flex'
            justifyContent={'flex-start'}>
            <Box
                width='50%'
                display='flex'
                flexDir='column'
                gap='15px'
            >
                <IntroduYourSelf />
                <Box height='60px'>Image</Box>
                <TemplateList />
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDir='column'
                gap='15px'
            >
                <ModalEmotion>
                    {Object.keys(listEmotion).map((item, i) =>
                        <ItemScroll key={i} item={listEmotion[item]} />
                    )}
                </ModalEmotion>
                <Box height='60px'>Image</Box>
                <TemplateList />
            </Box>

        </Box>
    );
}

export default IntroduceUser;