import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
ModalCreatePost.propTypes = {

};

function ModalCreatePost({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <span onClick={onOpen}>{children}</span>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textTransform='capitalize'> Tạo tin của bạn </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel htmlFor='video'>
                                Thêm video của bạn   <AddIcon />
                            </FormLabel>
                            <Input display='none' id='video' type='file' style={{
                                outline: "none",
                                border: "0"
                            }} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalCreatePost;