"use client"
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';
import { useCallback, useEffect, useState } from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';




const  RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit : SubmitHandler<FieldValues> =  (data) => {
        setIsLoading(true);
        axios.post('/api/register', data).then((response) => {
            registerModal.onClose();
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }


  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading 
        title='Welcome to Airbnb' 
        subtitle='Create an account!'

        />
        <Input
            id = "email"
            label = "Email Address"
            type = "email"
            disabled = {isLoading}
            register = {register}
            errors = {errors}
            required
         />
    </div>
  )
  return (
    <Modal 
    disabled={isLoading}
    isOpen={registerModal.isOpen} 
    onClose={registerModal.onClose} 
    title='Register' 
    actionLabel='Continue' 
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    />
  ) 
}

export default RegisterModal