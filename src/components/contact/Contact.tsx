"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faPaperPlane,
  faUser,
  faAt,
  faMessage,
  faCheckCircle,
  faExclamationCircle,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub as faGithubBrand,
  faLinkedin as faLinkedinBrand,
  faTwitter as faTwitterBrand,
  faInstagram as faInstagramBrand
} from "@fortawesome/free-brands-svg-icons";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [telegramStatus, setTelegramStatus] = useState<"idle" | "success" | "error" | "skipped">("idle");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required ✨";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required 📧";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required 🎯";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required 💬";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Submit to Formspree
      const formspreeResponse = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (!formspreeResponse.ok) {
        throw new Error('Formspree submission failed');
      }

      // Send to Telegram Bot
      const telegramMessage = `
📩 New Contact Form Submission!

👤 Name: ${formData.name}
📧 Email: ${formData.email}
🎯 Subject: ${formData.subject}
💬 Message: ${formData.message}
      `;

      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (botToken && chatId && chatId !== 'YOUR_CHAT_ID') {
        try {
          const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: telegramMessage,
              parse_mode: 'HTML',
            }),
          });

          if (telegramResponse.ok) {
            setTelegramStatus("success");
          } else {
            setTelegramStatus("error");
          }
        } catch (error) {
          setTelegramStatus("error");
        }
      } else {
        setTelegramStatus("skipped");
      }

      // Success
      setSubmitStatus("success");
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Close modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
        setSubmitStatus("idle");
        setTelegramStatus("idle");
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      setShowErrorModal(true);
      setTimeout(() => {
        setShowErrorModal(false);
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "temesgen@example.com",
      href: "mailto:temesgen@example.com",
      color: "text-purple-400"
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+251 9XX XXX XXX",
      href: "tel:+2519XXXXXXX",
      color: "text-blue-400"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
      color: "text-pink-400"
    }
  ];

  const socialLinks = [
    {
      icon: faGithubBrand,
      href: "https://github.com/TemesgenOfficial",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: faLinkedinBrand,
      href: "https://linkedin.com/in/temesgen-gosaye",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: faTwitterBrand,
      href: "https://twitter.com/temesgen",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    {
      icon: faInstagramBrand,
      href: "https://instagram.com/temesgen",
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  const inputFields = [
    {
      name: "name" as keyof FormData,
      label: "Name",
      placeholder: "Your awesome name ✨",
      icon: faUser,
      type: "text"
    },
    {
      name: "email" as keyof FormData,
      label: "Email",
      placeholder: "your.email@example.com 📧",
      icon: faAt,
      type: "email"
    },
    {
      name: "subject" as keyof FormData,
      label: "Subject",
      placeholder: "What's on your mind? 🎯",
      icon: faMessage,
      type: "text"
    }
  ];

  return (
    <>
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Let's Connect! 🚀
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you! Drop me a message and let's create something amazing together. ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
                </span>
                Send me a message
              </h2>

              {/* Success/Error Messages */}
              {/* Removed inline error messages - now using popups */}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Input Fields */}
                {inputFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label 
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FontAwesomeIcon 
                          icon={field.icon} 
                          className={`${isFocused === field.name ? 'text-purple-500' : 'text-gray-400'} transition-colors duration-200`}
                        />
                      </div>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused(field.name)}
                        onBlur={() => setIsFocused(null)}
                        placeholder={field.placeholder}
                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border ${errors[field.name] ? 'border-red-300 dark:border-red-600' : 'border-gray-200 dark:border-gray-600'} bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${isFocused === field.name ? 'scale-[1.02] shadow-lg' : ''}`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors[field.name] && (
                      <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Message Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused(null)}
                    placeholder="Tell me about your project, ideas, or just say hello! 💬"
                    rows={6}
                    className={`w-full px-4 py-4 rounded-2xl border ${errors.message ? 'border-red-300 dark:border-red-600' : 'border-gray-200 dark:border-gray-600'} bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none ${isFocused === "message" ? 'scale-[1.02] shadow-lg' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span>Send Message 🚀</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch 📍
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-200 group ${info.color}`}
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <FontAwesomeIcon icon={info.icon} className={info.color} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-800 dark:text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Find Me Online 🌐
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 p-3 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Message */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-6 border border-purple-200 dark:border-purple-700">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Let's Create Something Amazing!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Whether it's a web app, mobile app, or just a chat about tech - I'm always excited to connect with fellow developers and creative minds! 💫
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Get in Touch 📍
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-200 group ${info.color}`}
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <FontAwesomeIcon icon={info.icon} className={info.color} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-800 dark:text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Find Me Online 🌐
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 p-3 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Message */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-6 border border-purple-200 dark:border-purple-700">
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Let's Create Something Amazing!
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Whether it's a web app, mobile app, or just a chat about tech - I'm always excited to connect with fellow developers and creative minds! 💫
              </p>
            </div>
          </div>
        </div>

      <style jsx>{`
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>

      {/* Success Modal Popup */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md w-full transform animate-scale-in border border-white/20">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="text-gray-500 dark:text-gray-400">×</span>
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white text-3xl" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Message Sent Successfully! 🎉
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>

            {/* Telegram Status */}
            <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              {telegramStatus === "success" && (
                <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
                  <span className="text-sm">✅ Telegram notification sent</span>
                </div>
              )}
              {telegramStatus === "error" && (
                <div className="flex items-center justify-center space-x-2 text-yellow-600 dark:text-yellow-400">
                  <FontAwesomeIcon icon={faExclamationCircle} className="text-sm" />
                  <span className="text-sm">⚠️ Telegram failed, but email received</span>
                </div>
              )}
              {telegramStatus === "skipped" && (
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                  <span className="text-sm">📧 Email sent successfully</span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Awesome!
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Error Modal Popup */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowErrorModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md w-full transform animate-scale-in border border-white/20">
            {/* Close Button */}
            <button
              onClick={() => setShowErrorModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-gray-500 dark:text-gray-400">×</span>
            </button>

            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-white text-3xl" />
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Oops! Something Went Wrong 😅
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We couldn't send your message. Please check your connection and try again.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-center mt-6">
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowErrorModal(false);
                    // Focus on first error field
                    const firstErrorField = document.querySelector('.border-red-500') as HTMLElement;
                    firstErrorField?.focus();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
