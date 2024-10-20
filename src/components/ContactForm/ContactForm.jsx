import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

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

const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    const handleSubmit = (values, actions) => {
        onAdd({ ...values, id: nanoid(10) });
        actions.resetForm();
    };

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
                        id={nameFieldId}>
                        
                    </Field>
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
            <button className={css.formButton} type='submit'>Add contact</button>
            </Form>
        </Formik>
  )
}

export default ContactForm