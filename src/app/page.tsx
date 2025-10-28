'use client';
import { Header } from "@/_common/header";
import { Button } from "@/_common/button";
import { Hero } from "@/_common/hero";
import { TextField } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SectionBox } from "@/_common/sectionBox";

const appendDots = (dots: React.ReactNode) => <div>
  <ul className="absolute bottom-4 flex flex-row gap-2 justify-center w-full m-0 p-0 list-none">{dots}</ul>
</div>

const customPaging = () => (
  <div className="w-5 h-5 rounded-full opacity-50 hover:opacity-100"></div>
);

const validateEmail = (email: string) => {
  return email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState<Error | null>(null);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState<Error | null>(null);
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState<Error | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<Error | null>(null);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState<Error | null>(null);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const [isErrorSubmitting, setIsErrorSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    const trimmedEmail = email.trim();
    let hasError = false;
    if (firstName.trim().length === 0) {
      setFirstNameError(new Error("First Name is required"));
      hasError = true;  
    }
    if (lastName.trim().length === 0) {
      setLastNameError(new Error("Last Name is required"));
      hasError = true;  
    }
    if (company.trim().length === 0) {
      setCompanyError(new Error("Company is required"));
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
      setMessageError(new Error("This field is required"));
      hasError = true;  
    }
    if (hasError) {
      return;
    }

    try { 
      setIsLoading(true);
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email,
          message
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }
      setIsContactFormSubmitted(true);
      setIsErrorSubmitting(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setIsErrorSubmitting(true);
      setIsLoading(false);
    }

  }, [firstName, lastName, company, email, message]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="flex flex-col items-center justify-center w-full">
    <Slider 
      slidesToShow={1} 
      slidesToScroll={1} 
      infinite={true} 
      arrows={false} 
      dots={true} 
      appendDots={appendDots}
      customPaging={customPaging}
      className="w-full h-[calc(100vh-88px)]"
    >
      <Hero className="bg-[url(/images/hero1.jpg)]">
        <Header className="text-black text-6xl">Ellevar</Header>
        <div className="flex flex-col text-black text-lg sm:gap-3 gap-8">
          <b>From the Latin “elevare” meaning “to elevate”</b> 
          <b>Our goal is to help bring our clients to the next level</b>
        </div>
      </Hero>
      <Hero className="bg-[url(/images/hero2.jpg)]">
        <Header className="text-black">What We do</Header>
        <div className="flex flex-col text-black text-lg sm:gap-3 gap-8 max-w-[500px]">
          <b className="text-black">
            We partner with organizations to understand their needs, identify opportunities, and work seamlessly{" "}
            from an idea to completion
          </b>
          <b>
            We'll roll up our sleeves and do what it takes to get the job done
          </b>
        </div>
      </Hero>
    </Slider>
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8 max-w-[1400px] px-[52px] md:px-[100px] pt-[52px]">
      <SectionBox 
        title="Revenue Growth" 
        description="Design and execute strategy, systems, and recommending team structures to achieve and support your goals and ambitions" 
        className="bg-[url(/images/RevenueGrowth.jpg)]" 
      />
      <SectionBox 
        title="Major Campaigns"
        description="Increase the capacity of your team by leading fund development, lead generation and engagement campaigns"
        className="bg-[url(/images/Campaigns.jpg)]" 
      />
      <SectionBox
        title="Brand Management/ Redevelopment" 
        description="Lead brand redevelopment and/or support brand management initiatives" 
        className="bg-[url(/images/Brand.jpg)]" 
      />
      <SectionBox
        title="CRM & Systems Transformation"
        description="Lead complex data transformations to ensure business processes are optimized, provide insights to inform strategies and drive seamless user experiences"
        className="bg-[url(/images/CRM.jpg)]"
      />
    </div>
    <div className="py-[52px] px-[52px] sm:px-[100px] flex flex-col items-center gap-8 text-center max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-4 items-center">
        <Header className="text-text-primary">What People are Saying</Header>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-text-primary">
          “Mona took fundraising to the next level for us. She secured the first six-figure gift in the history of the{" "}
          organization and has raised more money in the last several years than the last 20.”
        </p>
        <p className="text-text-primary">- Finance Senior Executive</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-text-primary">
          “Their strength is really listening and understanding what is needed to move projects and teams forward.”
        </p>
        <p className="text-text-primary">- VP, Program</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-text-primary">
          “Mona is strategic, thoughtful, and has a vision of what is needed to execute on plans. She has worked alongside{" "}
          the Board at a challenging time while launching the campaign. Her dedication to the organization showed every day.” 
        </p>
        <p className="text-text-primary">- CEO</p>
      </div>
    </div>
    <div className="py-[52px] px-[52px] sm:px-[100px] flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto">
      <Image src="/images/headshot.jpg" alt="Logo" width={150} height={150} className="rounded-full sm:w-[300]" />
      <div className="flex flex-col gap-4 items-center">
        <Header className="text-text-primary">Principal Consultant</Header>
        <Header className="text-text-primary font-normal !text-4xl">Mona Lee-Tam</Header>
      </div>
      <p className="text-text-primary">
        <b>Mona Lee-Tam</b> is a strategic growth catalyst with over 25 years of experience helping organizations—from national{" "}
        nonprofitsto global retail brands—unlock revenue, elevate brands, and align vision with action. She blends a proven{" "}
        track record in revenue generation, marketing, and brand transformation with the agility of a systems thinker who sees{" "}
        the big picture while setting a path for execution.
      </p>
      <p className="text-text-primary">
        Her career includes negotiating over $5M in media value at leading North American airports; driving exponential revenue{" "}
        growth, delivering transformative brand refreshes that strengthen market presence and stakeholder engagement. Mona's{" "}
        approach combines strategic foresight with hands-on leadership, empowering teams, streamlining systems, and creating{" "}
        measurable, lasting impact.
      </p>
      <p className="text-text-primary">
        Through <b>Ellevar</b>, she helps mission-driven organizations and forward-thinking businesses achieve ambitious growth,{" "}
        strengthen relationships, and navigate change with clarity and purpose.
      </p>
    </div>
    <div className="flex flex-col items-center text-center py-[52px] gap-8 px-[52px] max-w-[800px] w-full">
      {!isContactFormSubmitted ? <div className="flex flex-col gap-8 w-full items-center">
        <Header className="text-text-primary">Contact Us</Header>
        <TextField
          label="First Name"
          value={firstName} 
          onChange={(event) => {
            setFirstName(event.target.value);
            if (event.target.value.trim().length > 0) {
              setFirstNameError(null);
            }
          }}
          error={!!firstNameError}
          helperText={firstNameError ? firstNameError.message : ""}
          className="max-w-[500px] w-full" 
        />
        <TextField
          label="Last Name"
          value={lastName} 
          onChange={(event) => {
            setLastName(event.target.value);
            if (event.target.value.trim().length > 0) {
              setLastNameError(null);
            }
          }}
          error={!!lastNameError}
          helperText={lastNameError ? lastNameError.message : ""}
          className="max-w-[500px] w-full" 
        />
        <TextField
          label="Company"
          value={company} 
          onChange={(event) => {
            setCompany(event.target.value);
            if (event.target.value.trim().length > 0) {
              setCompanyError(null);
            }
          }}
          error={!!companyError}
          helperText={companyError ? companyError.message : ""}
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
          label="Describe how you would like us to help"
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
        {isLoading ? <span className="loader" /> : <Button onClick={onSubmit} className="rounded-full w-full max-w-[500px] bg-action text-primary">Submit</Button>}
        {isErrorSubmitting && <p className="text-red-500">There was an error submitting the form. Please try again later.</p>}
      </div> : <div className="pb-[100px]">
        <Header className="text-text-primary">Thank you for reaching out!</Header>
        <p className="text-text-primary">We will get back to you shortly</p>
      </div>
      }
    </div>
  </div>
};

export default Home;