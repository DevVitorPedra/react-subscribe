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
            cidade: '',
            telefone: '',

        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email("Invalid email format").required("Email é obrigatório"),
            city: Yup.string().required('Cidade é obrigatório'),
            phone: Yup.number()
        }),
        onSubmit: ({ name, email, city, phone }) => {
            const subResponse = subscribe(name, email, city, phone)
            setSuccess(subResponse)
            console.log(subResponse)
        }
    })


    return (

        <StyledFormBG onSubmit={handleSubmit}>
            <StyledInput
                style={{ borderBottom: `${touched.name && errors.name ? '2px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" type="text" placeholder="Nome" />
            <StyledInput
                style={{ borderBottom: `${touched.email && errors.email ? '2px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.email} name="email" type="text" placeholder="Email" />
            <StyledInput
                style={{ borderBottom: `${touched.phone && errors.phone ? '2px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.name} name="phone" type="text" placeholder="Telefone" />
            <StyledInput
                style={{ borderBottom: `${touched.city && errors.city ? '2px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.name} name="city" type="text" placeholder="Cidade" />
            <StyledFormBtn type="submit" >Inscreva-se</StyledFormBtn>

            {(success === '') ? null : <p style={{ color: 'green', fontSize: '20', textAlign: 'center' }}>{success.message}</p>}
        </StyledFormBG>

    )
}
