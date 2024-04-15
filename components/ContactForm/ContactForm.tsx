'use client';

import { Button, Container, TextInput, Textarea, Title } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import classes from './ContactForm.module.css';

export function ContactForm() {
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
    mt: 'md',
  };

  const { loaded, executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const token = await executeRecaptcha('form_submit');
      const form = document.getElementById('enquiry-form') as HTMLFormElement;
      const formData = new FormData(form);

      formData.append('token', token);
      // Generate ReCaptcha token

      // Attach generated token to your API requests and validate it on the server
      fetch('http://localhost:7071/api/SendMail', {
        method: 'POST',
        body: formData,
      });
    },
    [executeRecaptcha, name, email, subject, message],

  );

  return (
    <>

        <Container size="sm" h="100%" p="xl">
          <Title c="darkBlue" ta="center">{loaded}</Title>
          <form onSubmit={handleSubmit} id="enquiry-form">
            <TextInput
              labelProps={{ 'data-floating': nameFocused || name.length > 0 || undefined }}
              {...sharedInputProps}
              label="Name"
              name="name"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextInput
              labelProps={{ 'data-floating': emailFocused || email.length > 0 || undefined }}
              {...sharedInputProps}
              label="Email"
              name="email"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <TextInput
              labelProps={{ 'data-floating': subjectFocused || subject.length > 0 || undefined }}
              {...sharedInputProps}
              label="Subject"
              name="subject"
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
              value={subject}
              onChange={(event) => setSubject(event.currentTarget.value)}
            />
            <Textarea
              labelProps={{ 'data-floating': messageFocused || message.length > 0 || undefined }}
              {...sharedInputProps}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              value={message}
              label="Message"
              name="message"
              onChange={(event) => setMessage(event.currentTarget.value)}
            />
            <Button type="submit">Send</Button>
          </form>
        </Container>
    </>
  );
}
