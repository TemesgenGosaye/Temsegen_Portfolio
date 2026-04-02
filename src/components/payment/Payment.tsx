"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCreditCard,
  faUniversity,
  faUser,
  faCopy,
  faCheckCircle,
  faExclamationCircle,
  faMobileAlt,
  faGlobe,
  faShieldAlt,
  faHandshake,
  faRocket,
  faClock,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { 
  faCcVisa,
  faCcMastercard
} from "@fortawesome/free-brands-svg-icons";

const Payment = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const paymentInfo = {
    bank: "Commercial Bank of Ethiopia (CBE)",
    currency: "ETB (Ethiopian Birr)",
    accountName: "Tenesgen Gosaye Reta",
    accountNumber: "1000522436759"
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handlePaymentRedirect = (method: string, url?: string) => {
    setSelectedPaymentMethod(method);
    
    // Show success message
    setShowSuccess(true);
    
    // Actually redirect to real banking service
    if (url) {
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 1500);
    }
    
    // Reset state after delay
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedPaymentMethod(null);
    }, 3000);
  };

  const paymentMethods = [
    {
      id: "mobile",
      name: "CBE Mobile Banking",
      description: "Pay using CBE mobile app",
      icon: faMobileAlt,
      color: "from-blue-500 to-blue-600",
      action: () => handlePaymentRedirect("mobile", "https://www.combanketh.et/ways-of-banking/mobile-banking")
    },
    {
      id: "internet",
      name: "CBE Internet Banking",
      description: "Pay via online banking portal",
      icon: faGlobe,
      color: "from-green-500 to-green-600",
      action: () => handlePaymentRedirect("internet", "https://cbeib.cbe.com.et/")
    },
    {
      id: "cbe-birr",
      name: "CBE Birr Wallet",
      description: "Pay using CBE Birr mobile wallet",
      icon: faMobileAlt,
      color: "from-purple-500 to-purple-600",
      action: () => handlePaymentRedirect("cbe-birr", "https://combanketh.et/cbe-birr/")
    },
    {
      id: "telebirr",
      name: "Telebirr",
      description: "Pay using Telebirr mobile wallet",
      icon: faMobileAlt,
      color: "from-orange-500 to-orange-600",
      action: () => handlePaymentRedirect("telebirr", "https://telebirr.ethiotelecom.et/")
    }
  ];

  const services = [
    {
      icon: faRocket,
      title: "Website Development",
      description: "Modern, responsive websites with cutting-edge tech"
    },
    {
      icon: faMobileAlt,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and user experiences"
    },
    {
      icon: faCreditCard,
      title: "Backend API Development",
      description: "Scalable APIs and server-side solutions"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-green-900/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Hire Me! 💼
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thank you for choosing me to work on your project – I appreciate your trust and partnership! 
            Securely pay for your website, mobile app, or backend API development project.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-8 right-8 z-50 animate-fade-in">
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl p-4 flex items-center space-x-3 shadow-lg">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 dark:text-green-400 text-xl" />
              <div>
                <p className="text-green-800 dark:text-green-200 font-semibold">Redirecting to payment...</p>
                <p className="text-green-600 dark:text-green-300 text-sm">You'll be redirected to {selectedPaymentMethod === 'telebirr' ? 'Telebirr' : selectedPaymentMethod === 'cbe-birr' ? 'CBE Birr' : selectedPaymentMethod === 'mobile' ? 'CBE Mobile Banking' : selectedPaymentMethod === 'internet' ? 'CBE Internet Banking' : 'payment service'}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Payment Information */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Banking Details Card */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUniversity} className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Banking Details
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Commercial Bank of Ethiopia (CBE)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Bank Name */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUniversity} className="text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Bank</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{paymentInfo.bank}</p>
                    </div>
                  </div>
                </div>

                {/* Account Name */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUser} className="text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Account Name</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{paymentInfo.accountName}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(paymentInfo.accountName, "name")}
                    className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors duration-200"
                  >
                    {copiedField === "name" ? (
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    ) : (
                      <FontAwesomeIcon icon={faCopy} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    )}
                  </button>
                </div>

                {/* Account Number */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCreditCard} className="text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Account Number</p>
                      <p className="font-mono font-semibold text-gray-800 dark:text-white">{paymentInfo.accountNumber}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(paymentInfo.accountNumber, "number")}
                    className="p-2 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors duration-200"
                  >
                    {copiedField === "number" ? (
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                    ) : (
                      <FontAwesomeIcon icon={faCopy} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    )}
                  </button>
                </div>

                {/* Currency */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">ETB</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Currency</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{paymentInfo.currency}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Choose Payment Method 💳
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={method.action}
                    disabled={selectedPaymentMethod !== null}
                    className={`p-6 rounded-2xl border-2 border-dashed ${selectedPaymentMethod === method.id ? 'border-green-500 bg-green-50 dark:bg-green-900/30' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'} bg-white dark:bg-slate-700/50 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                      <FontAwesomeIcon icon={method.icon} className="text-white text-xl" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{method.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
                    {selectedPaymentMethod === method.id && (
                      <div className="mt-3 flex items-center justify-center text-green-600 dark:text-green-400">
                        <FontAwesomeIcon icon={faCheckCircle} className="animate-pulse" />
                        <span className="ml-2 text-xs">Redirecting...</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Services Offered */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Services Offered 🚀
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                    <div className={`w-10 h-10 bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FontAwesomeIcon icon={service.icon} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{service.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-3xl p-6 border border-blue-200 dark:border-blue-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Secure & Trusted
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your payment is secure with CBE - Ethiopia's most trusted banking institution. 
                  All transactions are protected and encrypted.
                </p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                Need Help? 🤝
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+2519XXXXXXX"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 text-gray-600 dark:text-gray-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                  <span>+251 9XX XXX XXX</span>
                </a>
                <a
                  href="mailto:temesgen@example.com"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 text-gray-600 dark:text-gray-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
                  <span>temesgen@example.com</span>
                </a>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-6 border border-purple-200 dark:border-purple-700">
              <div className="text-center">
                <div className="text-4xl mb-3">🙏</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Thank You!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I'm excited to work on your project! Your trust means everything to me, 
                  and I'll deliver exceptional results that exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Payment;
