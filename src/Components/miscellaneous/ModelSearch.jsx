import {
    Box,
    IconButton,
    useTheme
} from '@chakra-ui/react'

import { BiArrowBack } from 'react-icons/bi'
import ItemUser from '../micro/ItemUser'
import { ContextState } from '../../context/configContext'

export function ModalSearch({ children, opent, onClose, searchResult }) {
    const { user } = ContextState()
    const theme = useTheme()
    return (
        <><Box width={opent ? '320px' : '25%'}
            padding='8px'
            display='flex'
            flexDir="column"
            position='fixed'
            top="0"
            left="0"
            borderRadius='xl'
            maxHeight='80vh'
            zIndex='9999'
            boxShadow={opent ? `2px 2px 4px 1px ${theme.colors.lightGrey}` : ''}
            bg={opent ? theme.colors.white : ''}
        >
            <Box display='flex'
                width='100%'
                gap='15px'
                justifyContent='flex-start'
                alignItems='inherit'>
                <IconButton
                    onClick={onClose}
                    display={opent ? 'flex' : 'none'}
                    backgroundColor='transparent'
                    borderRadius='50%'
                    icon={<BiArrowBack size='30px'
                    />} />
                {children}
            </Box>
            {opent && <Box marginTop='20px'
                maxHeight='100%'
                minHeight='50vh'
                display='flex'
                flexDir='column'
                gap="10px"
                overflow='auto'
            >
                {searchResult && searchResult.map((user, i) =>
                    <ItemUser key={i} user={user} sizeAvatar={'sm'} />)}
            </Box>
            }

        </Box >
        </>

    )
}