import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosInstance from '../../api/configDefaultAxios';
import instanceUserApi from '../../api/instantUserApi';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().max(12).min(6).required(),
    confirmPassword: yup.string().when('password', (password, filed) =>
        password ? filed.required().oneOf([yup.ref('password')]) : filed
    )
})


function SignUp(props) {
    const toast = useToast()
    const [hidden, setHidden] = useState(true)
    const [loading, setLoading] = useState(false)
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (userData) => {
        try {
            delete userData.confirmPassword
            const data = await instanceUserApi.register(userData)
            if (!data?.error) {
                console.log('data user register', data)
                toast({
                    title: "Sign up successfull",
                    status: 'success',
                    duration: '2000',
                    position: "top-left"
                })
            } else {
                toast({
                    title: "account has existed",
                    status: 'warning',
                    duration: '2000',
                    position: "top-left"
                })
            }
        } catch (error) {
            if (error instanceof Error) {
                const { data } = error.response
                toast({
                    title: "Error Occur",
                    description: data.message,
                    status: 'error',
                    duration: '2000',
                    position: "top-left"
                })
            } else {
                console.log(error)
            }
        }

    }
    return (
        <Box display='flex'
            flexDir='column'
            gap='15px'>
            <FormControl>
                <FormLabel>username</FormLabel>
                <Input {...register('username')} placeholder='enter email or sdt' />
            </FormControl>
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.username?.message}</span>
            <FormControl>
                <FormLabel>password</FormLabel>
                <InputGroup>
                    <InputRightElement>
                        {hidden ? <ViewIcon /> : <ViewOffIcon />}
                    </InputRightElement>
                    <Input {...register('password')} type={hidden ? 'password' : 'text'}
                        placeholder='enter your password' />
                </InputGroup>
            </FormControl>
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.password?.message}</span>
            <FormControl>
                <FormLabel>confirm password</FormLabel>
                <InputGroup>
                    <InputRightElement>
                        {hidden ? <ViewIcon /> : <ViewOffIcon />}
                    </InputRightElement>
                    <Input {...register('confirmPassword')} type={hidden ? 'password' : 'text'}
                        placeholder='confirm  your password' />
                </InputGroup>
            </FormControl>
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.confirmPassword?.message}</span>
            <Button isLoading={loading}
                onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Box>
    );
}

export default SignUp;