import { ContactForm } from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ding Blog",
  description: "Send us a message.",
};
export default function Contact() {
  return <ContactForm />;
}
