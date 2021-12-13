import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { StyledFormBG, StyledFormBtn, StyledInput } from './StyledForm'

import { subscribe } from '../../utils/functions'

export default function Form() {
    const [success, setSuccess] = useState('')
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
    
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email("Invalid email format").required("Email é obrigatório"),
           
        }),
        onSubmit: ({ name, email, }) => {
            const subResponse =  subscribe(name,email)
            setSuccess(subResponse)
            console.log(subResponse)
        }   
    })


    return (
        
        <StyledFormBG onSubmit={handleSubmit}>
            <StyledInput
            style={{borderBottom:`${touched.name && errors.name ? '2px solid red' : '1px solid white'}`}}
             onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" type="text" placeholder="Nome"/>
         
            <StyledInput
            style={{borderBottom:`${touched.email && errors.email ? '2px solid red' : '1px solid white' }`}} onBlur={handleBlur} onChange={handleChange} values={values.email} name="email" type="text" placeholder="Email"/>
            <StyledFormBtn type="submit" >Inscreva-se</StyledFormBtn>

            {(success==='') ? null : <p style={{color:'green', fontSize:'20',textAlign:'center'}}>return</p>}
        </StyledFormBG>
        
    )
}
