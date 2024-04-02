'use client';

import { Container, TextInput, Textarea, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './ContactUs.module.css';

export default function ContactUsPage() {
  const [value, setValue] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const sharedInputProps = {
    withAsterisk: true,
    classNames: {
      root: classes.root,
      input: classes.input,
      label: classes.label,
    },
    mb: '2rem',
  };

  return (
    <>
        <Container size="sm">
          <Title ta="center">Enquiry Form</Title>
          <form>
            <TextInput
              labelProps={{ 'data-floating': nameFocused || value.length > 0 || undefined }}
              {...sharedInputProps}
              label="Name"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <TextInput
              labelProps={{ 'data-floating': emailFocused || value.length > 0 || undefined }}
              {...sharedInputProps}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              label="Email"
            />
          </form>
        </Container>
    </>
  );
}
