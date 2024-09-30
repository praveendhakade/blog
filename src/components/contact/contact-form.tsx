"use client";

import { handleSubmit } from "@/lib/actions";
import { INotification } from "@/types/post";
import { useFormState } from "react-dom";
import Notification from "./notification";
import { useEffect, useRef, useState } from "react";
const initialFormState: INotification = {
  title: "Sending message...",
  message: "Your message is on its way.",
  status: "pending",
};
export const ContactForm = () => {
  const [formState, formAction] = useFormState<INotification, FormData>(
    handleSubmit,
    initialFormState
  );
  const [showNotification, setShowNotification] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formState.status === "success" || formState.status === "error") {
      formRef.current?.reset();
      timer = setTimeout(() => {
        setShowNotification(false);
        formState.message = initialFormState.message;
        formState.title = initialFormState.title;
        formState.status = initialFormState.status;
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [formState]);
  console.log(process.env.NODE_ENV);
  return (
    <section className="contact">
      <h1>How can I help you?</h1>
      <form className="form" action={formAction} ref={formRef}>
        <div className="controls">
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="control">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className="control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} />
        </div>
        <div className="actions">
          <button type="submit" onClick={() => setShowNotification(true)}>
            {" "}
            Send Message
          </button>
        </div>
      </form>
      {showNotification && (
        <Notification
          status={formState.status}
          title={formState.title}
          message={formState.message}
        />
      )}
    </section>
  );
};
