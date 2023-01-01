import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const errorMessages = {
    name: {
        min: 'Must be 2 characters or more',
        max: 'Must be 15 characters or less',
        required: 'Required',
    }, 
    email: {
        email: 'Invalid email address',
        required: 'Required',
    }
}

const signUpSchema = Yup.object({
    firstName: Yup.string()
      .min(2, errorMessages.name.min)
      .max(15, errorMessages.name.max)
      .required(errorMessages.name.required),
    lastName: Yup.string()
      .min(2, errorMessages.name.min)
      .max(15, errorMessages.name.max)
      .required( errorMessages.name.required),
    email: Yup.string().email(errorMessages.email.email).required(errorMessages.email.required),
})

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <small role='alert'>{formik.errors.firstName}</small>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <small role='alert'>{formik.errors.lastName}</small>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <small role='alert'>{formik.errors.email}</small>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;