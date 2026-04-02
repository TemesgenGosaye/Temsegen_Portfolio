import { Metadata } from "next";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Temesgen Gosaye",
  description:
    "Get in touch with Temesgen Gosaye - Full Stack Developer. Whether you have a project idea, want to collaborate, or just want to say hi, I'd love to hear from you!",
  keywords: [
    "contact temesgen gosaye",
    "temesgen gosaye contact",
    "full stack developer contact",
    "web developer contact",
    "project collaboration",
    "hire developer",
  ],
  openGraph: {
    title: "Contact Temesgen Gosaye",
    description: "Get in touch with Temesgen Gosaye - Full Stack Developer for project collaborations and opportunities.",
    type: "website",
  },
};

export default function ContactPage() {
  return <Contact />;
}
