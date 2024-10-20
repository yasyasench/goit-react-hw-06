import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';


const initialValues = {
    name: "",
    number: ""
};

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const ContactForm = () => {

    const nameFieldId = useId();
    const numberFieldId = useId();

    const dispatch = useDispatch();
    
    function handleSubmit(contact, actions) {
    dispatch(addContact(contact));
    actions.resetForm();
  }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}
        >
            <Form className={css.form}>
                <div className={css.inputWrap}>
                    <label className={css.formLabel}></label>
                    <Field
                        className={css.formField}
                        type='text' 
                        name="name"
                        id={nameFieldId}>
                    </Field>
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.inputWrap}>
                    <label className={css.formLabel}></label>
                    <Field
                        className={css.formField}
                        type="text"
                        name="number"
                        id={numberFieldId}>
                        
                    </Field>
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
            <button className={css.formButton} type='submit'>Add contact</button>
            </Form>
        </Formik>
  )
}

export default ContactForm