'use client';

import { Button, Container, TextInput, Textarea, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './ContactUs.module.css';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

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
        <Container size="sm" h="100%" p="xl">
          <Title c="darkBlue" ta="center">Enquiry Form</Title>
          <form>
            <TextInput
              labelProps={{ 'data-floating': nameFocused || name.length > 0 || undefined }}
              {...sharedInputProps}
              label="Name"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextInput
              labelProps={{ 'data-floating': emailFocused || email.length > 0 || undefined }}
              {...sharedInputProps}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              label="Email"
            />
            <TextInput
              labelProps={{ 'data-floating': subjectFocused || subject.length > 0 || undefined }}
              {...sharedInputProps}
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
              value={subject}
              onChange={(event) => setSubject(event.currentTarget.value)}
              label="Subject"
            />
            <Textarea
              labelProps={{ 'data-floating': messageFocused || message.length > 0 || undefined }}
              {...sharedInputProps}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
              label="Message"
            />
            <Button type="submit">Send</Button>
          </form>
        </Container>
    </>
  );
}
