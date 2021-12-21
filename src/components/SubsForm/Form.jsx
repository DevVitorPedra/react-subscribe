import React, { useState, useReducer } from 'react'
import { useFormik } from 'formik'
import {Button,Alert } from 'reactstrap'
import * as Yup from 'yup'
import { StyledFormBG, StyledInput } from './StyledForm'
import { MdOutlineMailOutline } from 'react-icons/md'
import { subscribe } from '../../utils/functions'


 const iconReducer = (icon,action) => {
        switch (action) {
            case 'loading':
                   return icon=<MdOutlineMailOutline className="spinning"/>
        
            default: 
            return false
                
        }
 }
export default function Form() {
    const [success, setSuccess] = useState()
    const [icon, dispatch] = useReducer(iconReducer,false)
    const [btnDisabled, setDisabled] = useState(false)
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            cidade: ''
           

        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email("Invalid email format").required("Email é obrigatório"),
            city: Yup.string().required('Cidade é obrigatório'),
        
        }),
        onSubmit: async ({ name, email, city }) => {
            dispatch('loading')
            setDisabled(true)
            const submitResponse = await subscribe(name, email, city)
            setSuccess(submitResponse)
            console.log(submitResponse)
            if(submitResponse==="Email já cadastrado!"){
                dispatch('unsuccessful')
            }
            if(submitResponse==='Cadastro feito com sucesso'){
                dispatch('successful')
            }
            setTimeout(()=>{
                setSuccess(null)
                setDisabled(false)
            },3000)
            
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
                style={{ borderBottom: `${touched.city && errors.city ? '2px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.name} name="city" type="text" placeholder="Cidade" />
            <Button fade={true} disabled={btnDisabled} color="primary" type="submit">{(!icon)? 'Inscreva-se' : icon }</Button>

            {(!success) ? null : (success==='Email já cadastrado!')?<Alert color="danger">{success}</Alert>:<Alert color="primary">{success}</Alert>}
        </StyledFormBG>

    )
}
