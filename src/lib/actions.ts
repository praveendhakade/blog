"use server";

import { INotification } from "@/types/post";

export const handleSubmit = async (prev: INotification, formData: FormData) => {
  const reqBody = {
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  };
  let data;
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    data = await res.json();
    if (res.status === 422) {
      return {
        title: "Error!",
        status: "error",
        message: data.message,
      } as INotification;
    }
    return {
      title: "Success!",
      status: "success",
      message: "Message sent successfully.",
    } as INotification;
  } catch (err) {
    return {
      title: "Error!",
      status: "error",
      message: err,
    } as INotification;
  }
};
