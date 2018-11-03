import React from 'react';
import * as Yup from 'yup';
import styled, { css } from 'styled-components';
import { Formik } from 'formik';
import { Container, Section } from '../shared/style';
import { FormattedMessage } from 'react-intl';


const SectionWrapper = styled(Section)`
  background: -webkit-radial-gradient(-0% 150%, circle, rgba(14, 6, 20, 1), transparent 100%),
    -webkit-radial-gradient(100% -30%, circle, rgba(0, 68, 141, 1), transparent 34%),
    -webkit-radial-gradient(20% 130%, circle, rgba(29, 16, 124, 1), transparent 100%),
    -webkit-linear-gradient(0deg, rgba(30, 6, 51, 1), rgba(27, 12, 140, 1));

  background: -moz-radial-gradient(-0% 150%, circle, rgba(14, 6, 20, 1), transparent 100%),
    -moz-radial-gradient(100% -30%, circle, rgba(0, 68, 141, 1), transparent 34%),
    -moz-radial-gradient(20% 130%, circle, rgba(29, 16, 124, 1), transparent 100%),
    -moz-linear-gradient(0deg, rgba(30, 6, 51, 1), rgba(27, 12, 140, 1));

  background: radial-gradient(-0% 150%, circle, rgba(14, 6, 20, 1), transparent 100%),
    radial-gradient(100% -30%, circle, rgba(0, 68, 141, 1), transparent 34%),
    radial-gradient(20% 130%, circle, rgba(29, 16, 124, 1), transparent 100%),
    linear-gradient(0deg, rgba(30, 6, 51, 1), rgba(27, 12, 140, 1));

  background: -o-radial-gradient(-0% 150%, circle, rgba(14, 6, 20, 1), transparent 100%),
    -o-radial-gradient(100% -30%, circle, rgba(0, 68, 141, 1), transparent 34%),
    -o-radial-gradient(20% 130%, circle, rgba(29, 16, 124, 1), transparent 100%),
    -o-linear-gradient(0deg, rgba(30, 6, 51, 1), rgba(27, 12, 140, 1));
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
`;

const Input = styled.input`
  width: 100%;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  &:focus {
    box-shadow: 0 0 5px #6b99d5;
    border: 1px solid #6b99d5;
  }
`;

const Textarea = styled.textarea.attrs({
  rows: '8',
  columns: '30',
  spellCheck: 'false',
})`
  width: 100%;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  resize: vertical;
  &:focus {
    box-shadow: 0 0 5px #6b99d5;
    border: 1px solid #6b99d5;
  }
`;

const Label = styled.label`
  color: #fff;
  margin: 0 auto 0.5rem 0;
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: ${props => props.theme.white};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.disabled ? props.theme.grey : props.theme.primary)};
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : props.theme.primaryActive)};
  }
`;

const Msg = styled.span`
  ${props =>
    props.danger &&
    css`
      color: ${props.theme.danger};
      font-size: 14px;
      display: flex;
      justify-content: center;
      margin-right: auto;
      margin-bottom: 0.825rem;
      margin-top: -10px;
    `};

  ${props =>
    props.success &&
    css`
      color: ${props.theme.success};
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      text-align: center;
    `};
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 980px) {
    margin: 0 2rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 45px;
  color: #fff;
  margin: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & > div {
    flex: 1;
    padding-right: 4rem;
  }

  & > form {
    flex: 1;
    padding-left: 4rem;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media screen and (max-width: 1200px) {
    & > div {
      padding-right: 3rem;
    }

    & > form {
      padding-left: 3rem;
    }
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;

    & > div {
      padding-right: 0;
    }

    & > form {
      padding-left: 0;
      border-left: none;
    }
  }
`;

const LeftText = styled.div`
  padding: 0.5rem;

  & > * {
    color: #fff;
  }

  & > span {
    line-height: 1.75;
  }

  @media screen and (max-width: 980px) {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

const ContactSection = () => (
  <SectionWrapper>
    <Container>
      <Outer>
        <MainTitle><FormattedMessage id='Contact.MainTitle' defaultMessage="Let's work"/></MainTitle>

        <Content>
          <LeftText>
            <h1><FormattedMessage id='Contact.ContentTitle' defaultMessage='Want to start a new project?'/></h1>
            <span>
            <FormattedMessage id='Contact.ContentText' defaultMessage='If you want to make your idea into reality, fill the next form, and we will contact you as soon as possible. We look forward to our cooperation!'/>
            </span>
          </LeftText>

          <ContactForm />
        </Content>
      </Outer>
    </Container>
  </SectionWrapper>
);

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .min(7, 'Min 7 digits')
    .max(12, 'Max 12 digits')
    .required('Phone is required'),
  message: Yup.string()
    .min(5, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Message is required'),
});

function sendFormData(values, { setSubmitting, setErrors }) {
  fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then(res => res.json())
    .then(data => {
      const serverErrors = {};

      data.details.forEach(d => {
        serverErrors[d.context.label] = d.message;
      });

      setErrors(serverErrors);
      setSubmitting(false);
    })
    .catch(err => console.log(err));
}

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', phone: '', message: '' }}
    validationSchema={contactSchema}
    onSubmit={(values, actions) => {
      sendFormData(values, actions);
    }}
    render={({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <Msg danger>{errors.name}</Msg>}

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="example@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <Msg danger>{errors.email}</Msg>}

        <Label htmlFor="phone">Phone</Label>
        <Input
          type="text"
          name="phone"
          placeholder="064-1234-567"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && <Msg danger>{errors.phone}</Msg>}

        <Label htmlFor="message">Message</Label>
        <Textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && touched.message && <Msg danger>{errors.message}</Msg>}

        <Button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
          Submit
        </Button>

        {isSubmitting && <Msg success>Thank you for contacting us!</Msg>}
      </Form>
    )}
  />
);
export default ContactSection;
