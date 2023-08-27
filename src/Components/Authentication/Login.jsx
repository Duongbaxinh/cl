import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box, Button, FormControl, FormLabel, Input,
    InputGroup, InputRightElement, Text, useTheme, useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import instanceUserApi from '../../api/instantUserApi';
import { useNavigate } from 'react-router-dom';
const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().min(5).max(12).required()
}).required()

function Login(props) {
    const navigate = useNavigate()
    const toast = useToast()
    const [hidden, setHidden] = useState(true)
    const [loading, setLoading] = useState(false)
    const theme = useTheme()
    const { handleSubmit, register, formState: { errors } } = useForm(
        { resolver: yupResolver(schema) }
    )
    const onSubmit = async (userData) => {
        setLoading(true)
        try {
            const data = await instanceUserApi.login(userData)
            console.log('datauser', data)
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate('/homepage')
            setLoading(false)
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
            setLoading(false)
        }
    }
    return (
        <Box display='flex'
            flexDir='column'
            gap='15px'>
            <FormControl>
                <FormLabel >username</FormLabel>
                <Input {...register('username')}
                    placeholder='Enter user name'
                />
                <span style={{ color: 'red', fontSize: '12px' }} >
                    {errors.username?.message}</span>
            </FormControl>
            <FormControl>
                <FormLabel >password</FormLabel>
                <InputGroup>
                    <InputRightElement onClick={() => setHidden(!hidden)}>
                        {hidden ? <ViewIcon /> : <ViewOffIcon />}
                    </InputRightElement>
                    <Input {...register('password')}
                        type={hidden ? 'password' : 'text'}
                        placeholder='Enter your password' />
                </InputGroup>
                <span style={{ color: 'red', fontSize: '12px' }}>
                    {errors.password?.message}</span>
            </FormControl>
            <Button onClick={handleSubmit(onSubmit)}
                isLoading={loading}
            >Submit</Button>
        </Box>
    );
}

export default Login;