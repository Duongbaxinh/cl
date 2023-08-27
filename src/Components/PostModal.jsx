import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemUser from './micro/ItemUser';
import { Box, IconButton, useTheme, Text, Image, Divider, AvatarGroup, Avatar, FormControl, Input } from '@chakra-ui/react';
import { BsFillTicketFill, BsThreeDots } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { BiCommentDetail, BiSolidShareAlt, BiLike, BiSend } from 'react-icons/bi';
import { ContextState } from '../context/configContext';
import GridImage from './GridImage';
import ItemScroll from './micro/ItemScroll';

PostModal.propTypes = {

};
const listCommen = [
    {
        name: 'Thich',
        icon: <BiLike />
    },
    {
        name: 'Bình luận',
        icon: <BiCommentDetail />
    },
    {
        name: 'Chia sẻ',
        icon: <BiSolidShareAlt />
    },
]
function PostModal(props) {
    const user = {
        avatar: "",
        username: 'naruto',
        createAt: '4 giờ'
    }
    const theme = useTheme()
    const { posts } = ContextState()
    const comment = posts[1]?.comment
    const [vComment, setVComment] = useState()
    const [comments, setComments] = useState([...comment])
    const handleComment = () => {
        const newComment = {
            user: {
                name: user.name,
                avatar: user.avatar
            },
            content: vComment
        }
        setComments([...comment, newComment])
    }
    return (
        <Box w='500px' padding='12px 16px'
            borderRadius='2xl'
            bg={theme.colors.white}>
            <Box w='100%'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <ItemUser user={user} />
                <Box display='flex' gap='8px'>
                    <IconButton borderRadius='50%' icon={<BsThreeDots size='20px' />} />
                    <IconButton borderRadius='50%' icon={<MdOutlineCancel size='20px' />} />
                </Box>
            </Box>
            {/* BODY */}
            <Box maxHeight='600px' mb="10px">
                <Text overflow='hidden'
                    textOverflow='ellipsis'
                    text
                > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus rerum id ullam dolorum mollitia, ipsa, quidem iure
                    laborum rem aut numquam non eius.</Text>
                <GridImage>
                    {posts.slice(0, Math.min(4, posts.length)).map((item, i) =>
                        <Box key={i} position='relative'>
                            <Image width='100%' height='100%'
                                objectFit='cover'
                                src={item.image}
                            />
                            {i > 2 && <Box
                                position='absolute'
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                top='0'
                                left='0'
                                w='100%' height='100%'
                                opacity='0.4'
                                bg={theme.colors.black}>
                                <Text fontSize='50px' color={theme.colors.white}>  +{posts.length - 3}</Text>
                            </Box>}
                        </Box>
                    )}
                </GridImage>
            </Box >
            {/* Footer */}
            < Divider />
            <Box w="100%" h="40px"
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <AvatarGroup size='md' max={2}>
                    <Avatar w='20px' h='20px' src='' />
                    <Avatar w='20px' h='20px' src='' />
                </AvatarGroup>
                <Box display='flex' gap='10px' >
                    <Box display='flex' gap='5px' alignItems='center'>
                        <BiCommentDetail />
                        <Text>{posts[0]?.comment.length}</Text>
                    </Box>
                    <Box display='flex' gap='5px' alignItems='center'>
                        <BiSolidShareAlt />
                        <Text>{posts[0]?.share.length}</Text>
                    </Box>

                </Box>
            </Box>
            <Divider />
            <Box
                w='100%'
                h="40px"
                display='flex'
                justifyContent='sapce-between'
                alignItems='center'
            >
                {listCommen.map((item, i) =>
                    <ItemScroll key={i} item={item} flex={'center'} />)}
            </Box>
            {/* Form Input Comment */}
            <Box w='100%'
                display='flex'
                flexDir='column'
                mt='20px'
                gap='10px'>
                <FormControl display='flex'
                    justifyContent='space-between'
                    alignItems='center' gap='5px'
                    h="35px"
                >
                    <Avatar size='sm' src={user.avatar} />
                    <Input
                        variant='filled'
                        borderRadius='xl'
                        placeholder='Viết bình luận'
                        style={{ outline: 'none', border: '0' }}
                        onChange={(e) => setVComment(e.target.value)}
                    />
                    <BiSend size='35px'
                        onClick={handleComment} />
                </FormControl>
                <Divider />
                {/* Comment */}
                <Box display='flex'
                    flexDir='column-reverse'
                    mt='15px'
                    gap='15px'
                >
                    {/* ITEM COMMENT */}
                    {comments.map((cm, i) =>
                        <Box key={i} display='flex' gap='5px'>
                            <Avatar size='sm' src={cm.user?.avatar} />
                            <Box
                                bg='gray.100'
                                p='8px' borderRadius='10px'>
                                <Text {...theme.fonts.title2}>{cm.user?.name}</Text>
                                <Text>{cm.content}</Text>
                            </Box>
                        </Box>)}
                </Box>

            </Box>
        </Box >
    );
}

export default PostModal;