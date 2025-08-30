"use client";
import { Button } from "@/_common/button";
import { Header } from "@/_common/header";
import { TextField } from "@mui/material";
import { useCallback, useState } from "react";

const validateEmail = (email: string) => {
  return email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<Error | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<Error | null>(null);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState<Error | null>(null);

  const onSubmit = useCallback(() => {
    const trimmedEmail = email.trim();
    let hasError = false;
    if (name.trim().length === 0) {
      setNameError(new Error("Name is required"));
      hasError = true;  
    }
    if (trimmedEmail.length === 0) {
      setEmailError(new Error("Email is required"));
      hasError = true;  
    }
    if (trimmedEmail && !validateEmail(trimmedEmail)) {
      setEmailError(new Error("Email is invalid"));
      hasError = true;  
    }
    if (message.trim().length === 0) {
      setMessageError(new Error("Message is required"));
      hasError = true;  
    }
    if (hasError) {
      return;
    }

    console.log({ name, email, message });
  }, [name, email, message]);

  return <div className="flex flex-col items-center text-center py-[52px] gap-8">
    <Header className="text-text-primary">Contact Us</Header>
    <TextField 
      label="Name"
      value={name} 
      onChange={(event) => {
        setName(event.target.value);
        if (event.target.value.trim().length > 0) {
          setNameError(null);
        }
      }}
      error={!!nameError}
      helperText={nameError ? nameError.message : ""}
      className="max-w-[500px] w-full" 
    />
    <TextField 
      label="Email" 
      value={email} 
      error={!!emailError}
      helperText={emailError ? emailError.message : ""}
      onChange={(event) => {
        setEmail(event.target.value);
        if (event.target.value.trim().length > 0) {
          setEmailError(null);
        }
      }} 
      className="max-w-[500px] w-full" 
    />
    <TextField 
      label="Message" 
      multiline 
      rows={4} 
      error={!!messageError}
      helperText={messageError ? messageError.message : ""}
      className="max-w-[500px] w-full" 
      value={message}
      onChange={(event) => {
        setMessage(event.target.value)
        if (event.target.value.trim().length > 0) {
          setMessageError(null);
        }
      }} 
    />
    <Button onClick={onSubmit} className="rounded-full">Submit</Button>
  </div>;
};

export default Contact;