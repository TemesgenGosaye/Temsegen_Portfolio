import { Metadata } from "next";
import Payment from "@/components/payment/Payment";

export const metadata: Metadata = {
  title: "Payment | Temesgen Gosaye",
  description:
    "Secure payment options for Temesgen Gosaye - Full Stack Developer. Pay for website development, mobile apps, and backend API services via Commercial Bank of Ethiopia (CBE).",
  keywords: [
    "payment temesgen gosaye",
    "hire temesgen gosaye",
    "web development payment",
    "mobile app payment",
    "backend api payment",
    "cbe banking",
    "ethiopian developer payment",
  ],
  openGraph: {
    title: "Hire Temesgen Gosaye - Payment",
    description: "Secure payment options for web development, mobile app, and backend API development services.",
    type: "website",
  },
};

export default function PaymentPage() {
  return <Payment />;
}
