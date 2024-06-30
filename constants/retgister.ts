import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required')
        .max(255, 'Email cannot be longer than 255 characters'),
        
    confirmEmail: yup
        .string()
        .email('Must be a valid email')
        .required('Confirm Email is required')
        .max(255, 'Confirm Email cannot be longer than 255 characters')
        .oneOf([yup.ref('email')], 'Emails must match'),
});