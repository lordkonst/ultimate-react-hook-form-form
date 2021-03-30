import React from 'react';
import { useData } from './DataContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import MainContainer from './components/MainContainer';
import { FormControlLabel, Typography, Checkbox } from '@material-ui/core';
import Form from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import parsePhoneNumberFromString from 'libphonenumber-js';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must have the correct format')
    .required('You must enter your email'),
});

const Step2 = () => {
  const { data, setValues } = useData();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      phone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const normalizePhoneNumber = phone => {
    const phoneNumber = parsePhoneNumberFromString(phone);
    if (!phoneNumber) return phone;

    return phoneNumber.formatInternational();
  };

  const history = useHistory();
  const onSubmit = data => {
    history.push('/Step3');
    setValues(data);
  };

  const hasPhone = watch('hasPhone');

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="email"
          ref={register}
          required
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              color="primary"
              name="hasPhone"
              defaultChecked={data.hasPhone}
              inputRef={register}
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            name="phoneNumber"
            id="phoneNumber"
            ref={register}
            type="tel"
            label="Phone Number"
            onChange={event => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <pre>{JSON.stringify(hasPhone, null, 4)}</pre>
    </MainContainer>
  );
};

export default Step2;
