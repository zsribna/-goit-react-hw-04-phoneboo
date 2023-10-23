
import React from 'react';
import { Formik,   ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StylefForm , Label, StyleField, ButtonSubmit} from './ContactForm.styled';

const initialValues = {
      name: '',
      number: '',
}

    const SignupSchema = Yup.object().shape({
      name: Yup.string('Введіть сторку')
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
      number: Yup.string('Введіть число')
        .min(2, 'Too Short!')
        .required('Required'),
 
    });
    const formNameId = nanoid();
    const formNumberId = nanoid();
  
export const ContactForm = ({ onSubmitForm }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      onSubmitForm(values);
      actions.resetForm();
    }}
    validationSchema={SignupSchema}
  >
    <StylefForm>
      <Label htmlFor={formNameId}> Name</Label>
      <StyleField id={formNameId} name="name" placeholder="Jack" />
      <ErrorMessage name="name" />
      <Label htmlFor={formNumberId}>Number</Label>
      <StyleField id={formNumberId} name="number" placeholder="431-21-22" />
      <ErrorMessage name="number" />
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </StylefForm>
  </Formik>
);


