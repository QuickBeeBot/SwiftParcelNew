
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// export const languages = [
//   { code: 'en', name: 'English', dir: 'ltr' },
//   { code: 'es', name: 'Español', dir: 'ltr' },
//   { code: 'fr', name: 'Français', dir: 'ltr' },
//   { code: 'de', name: 'Deutsch', dir: 'ltr' },
//   { code: 'zh', name: '中文 (Simplified)', dir: 'ltr' },
//   { code: 'ja', name: '日本語', dir: 'ltr' },
//   { code: 'th', name: 'Thai', dir: 'ltr' },
//   { code: 'ar', name: 'العربية', dir: 'rtl' },
//   { code: 'pt', name: 'Português', dir: 'ltr' },
// ];
export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },

  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'ja', name: '日本語', dir: 'ltr' },
  { code: 'pt', name: 'Português', dir: 'ltr' },
  { code: 'th', name: 'Thai', dir: 'ltr' },
  { code: 'zh', name: '中文 (Simplified)', dir: 'ltr' },
];


const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      quote: 'Get Quote',
      track: 'Track',
      about: 'About',
      contact: 'Contact',
      dashboard: 'Dashboard',
      login: 'Log In',
      signup: 'Sign Up',
      signout: 'Sign Out'
    },
    logins: {
      loginTitle: 'Log into Account',
      noAccount: 'Have No Account?',
      signupNow: 'Signup',
      emailLabel: 'Email Address',
      emailPlaceholder: 'mail@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter Password',
      signupTitle: 'Create New Account',
      haveAccount: 'Already have an Account?',
      loginNow: 'Login',
      signupButton: 'Signup',
      loginButton: 'Login',
      loggingIn: 'LoggingIn...'
    },


  "documents": {
    "pageTitle": "My Documents",
    "metaDescription": "Download your invoices, contracts, and shipping documents.",
    "title": "My Documents",
    "subtitle": "Access and download all your shipping-related documents in one place.",
    "download": "Download",
    "empty": {
      "title": "No documents yet",
      "description": "You haven’t generated any invoices or contracts. They’ll appear here once available."
    },
    "types": {
      "invoice": "Shipping invoice",
      "contract": "Service agreement",
      "receipt": "Payment receipt",
      "waybill": "Cargo waybill"
    },
    "success": {
      "downloadedTitle": "Download started",
      "downloadedDesc": "{{name}} is downloading..."
    },
    "errors": {
      "title": "Documents Error",
      "fetchFailed": "Failed to load your documents. Please try again later.",
      "downloadFailed": "Failed to download the document.",
      "noDownloadUrl": "This document is not available for download."
    }
  },

  "billing": {
    "pageTitle": "Billing & Invoices",
    "metaDescription": "Manage your SwiftParcel subscription, view invoices, and download receipts.",
    "title": "Billing & Invoices",
    "subtitle": "Track your payments, manage your plan, and access all financial documents.",
    "viewAllDocuments": "View All Documents",
    "subscription": {
      "title": "Current Plan",
      "description": "Your active subscription details",
      "basicPlan": "Basic Plan",
      "none": "You don’t have an active subscription."
    },
    "status": {
      "active": "Active",
      "pastDue": "Past Due",
      "canceled": "Canceled",
      "inactive": "Inactive"
    },
    "invoices": {
      "title": "Recent Invoices",
      "viewAll": "View all",
      "empty": {
        "title": "No invoices yet",
        "description": "Your invoices will appear here once you make a payment."
      }
    },
    "invoice": {
      "defaultDesc": "Shipping invoice"
    },
    "errors": {
      "title": "Billing Error",
      "fetchFailed": "Failed to load billing information. Please try again later."
    }
  },

  "login": {
    "loginTitlePage": "Log In",
    "signupTitlePage": "Sign Up",
    "metaDescription": "Access your SwiftParcel account securely.",
    "loginTitle": "Welcome back",
    "signupTitle": "Create your account",
    "emailLabel": "Email address",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "Password",
    "passwordPlaceholder": "••••••••",
    "loginButton": "Log in",
    "signupButton": "Sign up",
    "loginWithGoogle": "Continue with Google",
    "signupWithGoogle": "Sign up with Google",
    "orContinueWith": "or continue with email",
    "loginNow": "Log in now",
    "signupNow": "Sign up now",
    "haveAccount": "Already have an account?",
    "noAccount": "Don’t have an account?",
    "rememberMe": "Remember me",
    "forgotPassword": {
      "link": "Forgot password?",
      "title": "Reset your password",
      "description": "Enter your email and we’ll send you a link to reset your password.",
      "sendButton": "Send reset link",
      "sending": "Sending...",
      "successTitle": "Check your inbox",
      "successDesc": "We’ve sent a password reset link to {{email}}.",
      "errorTitle": "Unable to send reset link",
      "errorDesc": "Please check your email and try again.",
      "backToLogin": "Back to login"
    },
    "errors": {
      "title": "Authentication failed",
      "generic": "An unexpected error occurred.",
      "emailInUse": "This email is already registered.",
      "invalidEmail": "Please enter a valid email.",
      "invalidCredentials": "Incorrect email or password.",
      "weakPassword": "Password must be at least 6 characters.",
      "tooManyRequests": "Too many attempts. Please wait.",
      "emailRequired": "Email is required.",
      "googleFailed": "Google sign-in failed",
      "tryAgain": "Please try again."
    },
    "success": {
      "loginTitle": "Logged in",
      "loginDesc": "Redirecting to your dashboard...",
      "signupTitle": "Account created!",
      "signupDesc": "Please verify your email before logging in.",
      "googleLogin": "Signed in with Google"
    },
    "loggingIn": "Logging in...",
    "signingUp": "Creating account...",
    "footer": "Secure. Reliable. Fast."
  },
    home: {
      heroTitle: 'Seamless Shipping Starts Here!',
      heroSubtitle: 'Fast, reliable, and secure shipping solutions for businesses worldwide. Get your cargo delivered on time, every time.',
      getQuote: 'Get a Free Quote',
      viewDemo: 'View Demo',
      whyChoose: 'Why Choose SwiftParcel?',
      whyChooseSub: 'We provide comprehensive shipping solutions tailored to your business needs',
      securePkg: 'Secure Packaging',
      securePkgDesc: 'Professional packaging solutions for all cargo types',
      fastDelivery: 'Fast Delivery',
      fastDeliveryDesc: 'Express shipping options to meet your deadlines',
      insured: 'Insured Shipments',
      insuredDesc: 'Complete insurance coverage for peace of mind',
      support: '24/7 Support',
      supportDesc: 'Round-the-clock customer service and tracking'
    },
    track: {
      title: 'Track Your Shipment',
      subtitle: 'Enter your tracking ID to get real-time updates on your shipment',
      placeholder: 'Enter Tracking ID (e.g., SP1234567890)',
      button: 'Track',
      tracking: 'Tracking...',
      details: 'Shipment Details',
      status: 'Status',
      customer: 'Customer',
      contact: 'Contact',
      destination: 'Destination',
      address: 'Shipping Address',
      packageInfo: 'Package Information',
      created: 'Created',
      updated: 'Last Updated'
    },
    about: {
      title: 'About SwiftParcel',
      teamTitle: 'Our Team',
      subtitle: 'Your trusted partner in global logistics and shipping solutions since 2010',
      storyTitle: 'Our Story',
      storyText1: 'SwiftParcel was founded with a simple yet powerful vision: to make international shipping accessible, reliable, and stress-free for businesses of all sizes.',
      storyText2: 'Over the years, we have handled millions of shipments, helped thousands of businesses expand internationally, and built a reputation for excellence.',
      storyDesc1: 'SwiftParcel was founded with a simple yet powerful vision: to make international shipping accessible, reliable, and stress-free for businesses of all sizes.',
      storyDesc2: 'Over the years, we have handled millions of shipments, helped thousands of businesses expand internationally, and built a reputation for excellence.',
      mission: 'Our Mission',
      missionDesc: 'To provide seamless, reliable, and efficient shipping solutions.',
      team: 'Our Team',
      teamDesc: 'A dedicated team of logistics professionals with decades of experience.',
      commitment: 'Our Commitment',
      commitmentDesc: 'We are committed to excellence, transparency, and building long-term relationships.',
      reach: 'Global Reach',
      reachDesc: 'With partnerships across 150+ countries, we ensure your cargo reaches safely.',
      missionTitle: 'Mission',
      visionTitle: 'Vision',
      valuesTitle: 'Values',
      awardTitle: 'Awards',
      stats: {
        countries: 'Countries Served',
        shipments: 'Shipments Delivered',
        clients: 'Happy Clients',
        ontime: 'On-Time Delivery'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Our global team is ready to assist you. Reach out to one of our regional offices or use our dedicated support channels.',
      howToReach: 'How to Reach Us',
      regionalOffices: 'Regional Offices',
      regionalContact: 'Regional Contact',
      general: 'General Inquiries',
      generalDesc: 'For general questions about our services, partnerships, and company information.',
      supportTitle: 'Customer Support',
      supportDesc: '24/7 assistance with tracking, account issues, and shipment problems.',
      sales: 'Sales & Quotes',
      salesDesc: 'Get custom quotes for high-volume shipping and business partnerships.',
      shipping: 'Shipping Operations',
      shippingDesc: 'Technical questions regarding customs, restricted items, and packaging guidelines.',
      formTitle: 'Send a Message',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message'
    },
    footers: {
        services: 'Services',
        company: 'Company',
        legal: 'Legal',
        airFreight: 'Air Freight',
        seaFreight: 'Sea Freight',
        roadFreight: 'Road Freight',
        warehousing: 'Warehousing',
        aboutUs: 'About Us',
        contact: 'Contact',
        trackShipment: 'Track Shipment',
        getQuote: 'Get Quote',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms Of Service',
        cookiePolicy: 'Cookie & Policy',
        tagline: 'Socials'
    },





    "footer": {
    "logoAlt": "SwiftParcel logo",
    "description": "Seamless shipping solutions for your business needs globally.",
    "supportButton": "Global Support Availability",
    "quickLinks": "Quick Links",
    "contact": "Contact",
    "legal": "Legal",
    "terms": "Terms of Service",
    "privacy": "Privacy Policy",
    "cookies": "Cookies & Privacy",
    "allRightsReserved": "All rights reserved.",
    "soc2": "SOC 2 Type II Compliant",
    "iso27001": "ISO 27001"
  },
  
  "services": {
    "pageTitle": "Our Services",
    "metaDescription": "Explore SwiftParcel's comprehensive shipping services including air freight, ocean freight, ground transportation, and warehousing solutions.",
    "heroTitle": "Our Shipping Services",
    "heroSubtitle": "Comprehensive logistics solutions designed to meet your business needs",
    "keyFeatures": "Key Features:",
    "learnMore": "Learn More",
    "airFreight": {
      "title": "Air Freight",
      "description": "Fast and efficient air cargo services for time-sensitive shipments. We partner with leading airlines to ensure your goods reach their destination quickly and safely.",
      "features": {
        "express": "Express delivery options",
        "worldwide": "Worldwide coverage",
        "tracking": "Real-time tracking",
        "temperature": "Temperature-controlled options"
      }
    },
    "oceanFreight": {
      "title": "Ocean Freight",
      "description": "Cost-effective ocean shipping solutions for large volume cargo. Ideal for businesses looking to transport goods internationally at competitive rates.",
      "features": {
        "fcl": "Full container loads (FCL)",
        "lcl": "Less than container loads (LCL)",
        "doorToDoor": "Door-to-door service",
        "customs": "Customs clearance assistance"
      }
    },
    "groundTransport": {
      "title": "Ground Transportation",
      "description": "Reliable domestic and cross-border ground shipping services. Perfect for regional deliveries and overland transportation needs.",
      "features": {
        "sameDay": "Same-day delivery options",
        "regional": "Regional distribution",
        "fleet": "Dedicated fleet",
        "scheduling": "Flexible scheduling"
      }
    },
    "warehousing": {
      "title": "Warehousing & Logistics",
      "description": "Complete warehousing solutions with inventory management. Store your products in our secure facilities with 24/7 monitoring.",
      "features": {
        "climate": "Climate-controlled storage",
        "inventory": "Inventory management",
        "pickPack": "Pick and pack services",
        "distribution": "Distribution support"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 Feature Coming Soon",
    "featureComingSoon": "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
  },

  "quote": {
    "pageTitle": "Get a Quote",
    "metaDescription": "Request a shipping quote from SwiftParcel. Fill out our simple form and get a competitive quote for your cargo shipping needs.",
    "heroTitle": "Get a Free Quote",
    "heroSubtitle": "Fill out the form below and we'll get back to you with a competitive quote",
    "form": {
      "nameLabel": "Name",
      "namePlaceholder": "John Doe",
      "companyLabel": "Company",
      "companyPlaceholder": "Company Name (Optional)",
      "emailLabel": "Email",
      "emailPlaceholder": "john@example.com",
      "countryLabel": "Country",
      "countryPlaceholder": "United States",
      "contactLabel": "Contact Number",
      "contactPlaceholder": "+1 (555) 123-4567",
      "addressLabel": "Shipping Address",
      "addressPlaceholder": "Enter full shipping address",
      "packageInfoLabel": "Package Information",
      "packageInfoPlaceholder": "Describe your package (dimensions, weight, contents, special handling requirements)"
    },
    "submitting": "Submitting...",
    "submitButton": "Submit Quote Request",
    "success": {
      "title": "Quote Submitted Successfully! ✅",
      "description": "Your tracking ID is: {{trackingId}}. We'll contact you shortly with a detailed quote."
    },
    "error": {
      "title": "Submission Failed",
      "generic": "Something went wrong. Please try again."
    }
  },


  "terms": {
    "pageTitle": "Terms of Service",
    "title": "Terms of Service",
    "intro": "Welcome to SwiftParcel. By using our website and services, you agree to comply with and be bound by the following terms and conditions.",
    "section1": {
      "title": "1. Domain Usage",
      "content": "All official communications and services are conducted exclusively through the {{domain}} domain. SwiftParcel does not operate under .express or other TLDs. We are not responsible for communications originating from unauthorized domains."
    },
    "section2": {
      "title": "2. Service Agreements",
      "content": "Shipment requests, quotes, and tracking services are subject to international maritime and aviation laws. Specific service level agreements (SLAs) will be provided upon contract formation."
    },
    "section3": {
      "title": "3. User Accounts",
      "content": "You are responsible for maintaining the confidentiality of your account credentials. Any activity occurring under your account is your responsibility."
    }
  },
  "privacy": {
    "pageTitle": "Privacy Policy",
    "title": "Privacy Policy",
    "intro": "At SwiftParcel, we prioritize the protection of your personal and business data. This policy outlines how we collect, use, and safeguard your information.",
    "dataCollection": {
      "title": "Data Collection",
      "content": "We collect information necessary to facilitate global shipping logistics, including sender/recipient addresses, package contents, and contact details. All data is processed securely."
    },
    "internationalTransfers": {
      "title": "International Transfers",
      "content": "As a global logistics provider operating via {{domain}}, your data may be transferred across borders to facilitate shipment delivery. We ensure appropriate safeguards are in place for all international transfers."
    }
  },
  "cookies": {
    "pageTitle": "Cookie Policy",
    "title": "Cookie Policy",
    "intro": "This policy explains how SwiftParcel uses cookies and similar technologies to recognize you when you visit our website at {{domain}}.",
    "whatAreCookies": {
      "title": "What are cookies?",
      "content": "Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
    },
    "controllingCookies": {
      "title": "Controlling Cookies",
      "content": "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager found in the website footer."
    }
  },








  "dashboard": {
    "accessDenied": "You must be signed in to access the dashboard.",
    "signOutFailed": "Failed to sign out. Please try again.",
    "active": "Active",
    "welcomeBack": "Welcome back"
  },
  "dash_nav": {
    "overview": "Overview",
    "shipments": "Shipments",
    "newShipment": "New Shipment",
    "track": "Track",
    "orders": "Orders",
    "messages": "Messages",
    "activity": "Activity",
    "report": "Report",
    "support": "Support",
    "account": "Account",
    "billing": "Billing",
    "documents": "Documents",
    "settings": "Settings",
    "homePage": "Home Page",
    "createShipment": "Create Shipment",
    "signout": "Sign Out",
    "myAccount": "My Account"
  },
  "common": {
    "user": "User",
    "logoAlt": "SwiftParcel logo",
    "toggleNavigation": "Toggle navigation"
  },

  "dashboardOverview": {
    "loading": "Loading your logistics dashboard...",
    "errors": {
      "fetchFailed": "Failed to load dashboard data. Please try again."
    },
    "empty": {
      "title": "Your Global Logistics Hub",
      "subtitle": "Manage shipments, track deliveries, and scale your business — all in one place."
    },
    "actions": {
      "newShipmentDesc": "Create and schedule a new delivery",
      "trackDesc": "Monitor real-time delivery status",
      "billingDesc": "View invoices and payment history",
      "documentsDesc": "Access shipping labels & customs forms"
    },
    "stats": {
      "total": "Total Shipments",
      "pending": "Pending",
      "inTransit": "In Transit",
      "delivered": "Delivered",
      "canceled": "Canceled",
      "successRate": "Success Rate"
    },
    "createFirstShipment": "Create Your First Shipment",
    "recentShipments": "Recent Shipments",
    "shipmentsPlaceholder": "Shipment list component will render here.",
    "liveTracking": "Live Tracking",
    "trackingComingSoon": "Real-time GPS updates coming soon.",
    "packageInsights": "Package Insights",
    "insightsDescription": "Weight, dimensions, and customs data.",
    "globalNetwork": "Global Delivery Network",
    "mapDescription": "Live route visualization powered by SwiftParcel Intelligence™"
  },
  "common": {
    "viewAll": "View All"
  },

  "shipments": {
    "title": "Shipments",
    "subtitle": "Manage and track all your deliveries in one place",
    "loading": "Loading shipments...",
    "errors": {
      "fetchFailed": "Failed to load shipments. Please try again."
    },
    "stats": {
      "total": "Total Shipments",
      "pending": "Pending",
      "inTransit": "In Transit",
      "delivered": "Delivered",
      "canceled": "Canceled"
    },
    "search": {
      "placeholder": "Search by tracking ID, destination..."
    },
    "filter": {
      "status": "Status",
      "allStatuses": "All Statuses"
    },
    "status": {
      "pending": "Pending",
      "inTransit": "In Transit",
      "delivered": "Delivered",
      "canceled": "Canceled"
    },
    "actions": {
      "exportCSV": "Export CSV",
      "printLabels": "Print Labels",
      "track": "Track",
      "details": "Details"
    },
    "table": {
      "id": "Shipment ID",
      "tracking": "Tracking",
      "route": "Route",
      "service": "Service",
      "weight": "Weight",
      "date": "Date",
      "estDelivery": "Est. Delivery",
      "actions": "Actions"
    },
    "csv": {
      "id": "ID",
      "tracking": "Tracking",
      "from": "From",
      "to": "To",
      "service": "Service",
      "weight": "Weight (kg)",
      "date": "Date",
      "estDelivery": "Est. Delivery",
      "status": "Status"
    },
    "print": {
      "title": "SwiftParcel Labels",
      "tracking": "Tracking",
      "to": "To"
    },
    "noData": "No shipments found. Try adjusting your filters."
  },

  "newShipment": {
    "title": "Submit Shipment Request",
    "subtitle": "We’ll review your details and send a confirmed quote within 2 business hours.",
    "sections": {
      "pickupMethod": "1. Collection Method",
      "addresses": "2. Addresses",
      "packageInfo": "3. Package Information",
      "transportSchedule": "4. Transport & Schedule"
    },
    "pickup": {
      "dropoffTitle": "Drop-off at Hub",
      "dropoffDesc": "Bring your package to one of our local hubs",
      "pickupTitle": "Schedule Pickup",
      "pickupDesc": "We’ll collect from your location"
    },
    "addresses": {
      "sender": "Sender (Pickup)",
      "recipient": "Recipient (Delivery)",
      "businessLocation": "Business Location"
    },
    "placeholders": {
      "fullName": "Full Name",
      "phone": "Phone",
      "email": "Email",
      "streetAddress": "Street Address",
      "city": "City",
      "zip": "ZIP/Postal",
      "packageDescription": "Describe the contents (e.g., electronics, clothing, machinery)",
      "declaredValue": "Declared Value (for insurance)",
      "customsContents": "List all items, quantities, and values...",
      "specialInstructions": "Special instructions or requirements...",
      "additionalNotes": "Additional notes"
    },
    "labels": {
      "preferredPickupDate": "Preferred Pickup Date",
      "preferredDeliveryDate": "Preferred Delivery Date",
      "shipmentType": "Shipment Type",
      "contactPreference": "Contact Preference"
    },
    "package": {
      "categoryLabel": "Category",
      "categories": {
        "general": "General Goods",
        "fragile": "Fragile",
        "perishable": "Perishable",
        "hazardous": "Hazardous (requires approval)",
        "documents": "Documents"
      },
      "hazardousWarning": "Hazardous materials require special handling and documentation. Our team will contact you.",
      "customsClearance": "This shipment requires customs clearance"
    },
    "transport": {
      "air": "Air Transport",
      "ground": "Ground Transport"
    },
    "shipmentTypes": {
      "standard": "Standard",
      "express": "Express (24–72h)",
      "urgent": "Urgent (Same/Next Day)"
    },
    "contactPreferences": {
      "email": "Email",
      "sms": "SMS",
      "phone": "Phone Call"
    },
    "errors": {
      "senderName": "Sender name is required",
      "senderPhone": "Sender phone is required",
      "senderEmail": "Valid sender email is required",
      "senderAddress": "Sender address is required",
      "senderCity": "Sender city is required",
      "recipientName": "Recipient name is required",
      "recipientPhone": "Recipient phone is required",
      "recipientEmail": "Valid recipient email is required",
      "recipientAddress": "Recipient address is required",
      "recipientCity": "Recipient city is required",
      "packageDescription": "Package description is required",
      "weight": "Weight must be at least 0.1 kg",
      "length": "Length must be at least 1 cm",
      "width": "Width must be at least 1 cm",
      "height": "Height must be at least 1 cm",
      "customsContents": "Customs contents declaration is required",
      "submitFailed": "Failed to submit request. Please try again."
    },
    "success": {
      "message": "Request submitted successfully! Your shipment ID is: {{id}}"
    },
    "submitting": "Submitting Request...",
    "submitButton": "Submit Shipment Request",
    "help": {
      "reviewTime": "After submission, our logistics team will review your request and send a confirmed quote within 2 business hours.",
      "urgentHelp": "📞 Need urgent help? Call us at +1 (800) SWIFT-123"
    }
  }

  },

ar: {
  "nav": {
    "home": "الرئيسية",
    "services": "الخدمات",
    "quote": "احصل على عرض سعر",
    "track": "تتبع الشحنة",
    "about": "من نحن",
    "contact": "اتصل بنا",
    "dashboard": "لوحة التحكم",
    "login": "تسجيل الدخول",
    "signup": "إنشاء حساب",
    "signout": "تسجيل الخروج"
  },
  "logins": {
    "loginTitle": "تسجيل الدخول إلى الحساب",
    "noAccount": "ليس لديك حساب؟",
    "signupNow": "إنشاء حساب",
    "emailLabel": "عنوان البريد الإلكتروني",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "كلمة المرور",
    "passwordPlaceholder": "أدخل كلمة المرور",
    "signupTitle": "إنشاء حساب جديد",
    "haveAccount": "هل لديك حساب بالفعل؟",
    "loginNow": "تسجيل الدخول",
    "signupButton": "إنشاء حساب",
    "loginButton": "تسجيل الدخول",
    "loggingIn": "جارٍ تسجيل الدخول..."
  },
  "documents": {
    "pageTitle": "مستنداتي",
    "metaDescription": "قم بتنزيل فواتيرك وعقودك ووثائق الشحن.",
    "title": "مستنداتي",
    "subtitle": "وصِّل ونزِّل جميع مستندات الشحن الخاصة بك في مكان واحد.",
    "download": "تنزيل",
    "empty": {
      "title": "لا توجد مستندات بعد",
      "description": "لم تُنشئ أي فواتير أو عقود بعد. ستظهر هنا بمجرد توفرها."
    },
    "types": {
      "invoice": "فاتورة شحن",
      "contract": "اتفاقية خدمة",
      "receipt": "إيصال دفع",
      "waybill": "وثيقة شحن البضائع"
    },
    "success": {
      "downloadedTitle": "بدأ التنزيل",
      "downloadedDesc": "جارٍ تنزيل {{name}}..."
    },
    "errors": {
      "title": "خطأ في المستندات",
      "fetchFailed": "فشل تحميل مستنداتك. يرجى المحاولة لاحقًا.",
      "downloadFailed": "فشل تنزيل المستند.",
      "noDownloadUrl": "هذا المستند غير متاح للتنزيل."
    }
  },
  "billing": {
    "pageTitle": "الفوترة والفواتير",
    "metaDescription": "إدارة اشتراكك في SwiftParcel، عرض الفواتير، وتنزيل الإيصالات.",
    "title": "الفوترة والفواتير",
    "subtitle": "تتبّع مدفوعاتك، أدِر خطتك، ووصِّل إلى جميع المستندات المالية.",
    "viewAllDocuments": "عرض جميع المستندات",
    "subscription": {
      "title": "الخطة الحالية",
      "description": "تفاصيل اشتراكك النشط",
      "basicPlan": "الخطة الأساسية",
      "none": "ليس لديك اشتراك نشط."
    },
    "status": {
      "active": "نشط",
      "pastDue": "متأخر",
      "canceled": "ملغى",
      "inactive": "غير نشط"
    },
    "invoices": {
      "title": "الفواتير الأخيرة",
      "viewAll": "عرض الكل",
      "empty": {
        "title": "لا توجد فواتير بعد",
        "description": "ستظهر فواتيرك هنا بعد إتمام أول عملية دفع."
      }
    },
    "invoice": {
      "defaultDesc": "فاتورة شحن"
    },
    "errors": {
      "title": "خطأ في الفوترة",
      "fetchFailed": "فشل تحميل معلومات الفوترة. يرجى المحاولة لاحقًا."
    }
  },
  "login": {
    "loginTitlePage": "تسجيل الدخول",
    "signupTitlePage": "إنشاء حساب",
    "metaDescription": "وصول آمن إلى حساب SwiftParcel الخاص بك.",
    "loginTitle": "مرحبًا بك مجددًا",
    "signupTitle": "أنشئ حسابك",
    "emailLabel": "عنوان البريد الإلكتروني",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "كلمة المرور",
    "passwordPlaceholder": "••••••••",
    "loginButton": "تسجيل الدخول",
    "signupButton": "إنشاء حساب",
    "loginWithGoogle": "الاستمرار باستخدام Google",
    "signupWithGoogle": "التسجيل باستخدام Google",
    "orContinueWith": "أو الاستمرار عبر البريد الإلكتروني",
    "loginNow": "سجّل الدخول الآن",
    "signupNow": "أنشئ حسابًا الآن",
    "haveAccount": "هل لديك حساب بالفعل؟",
    "noAccount": "ليس لديك حساب؟",
    "rememberMe": "تذكرني",
    "forgotPassword": {
      "link": "نسيت كلمة المرور؟",
      "title": "أعد تعيين كلمة المرور",
      "description": "أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.",
      "sendButton": "إرسال رابط إعادة التعيين",
      "sending": "جارٍ الإرسال...",
      "successTitle": "تحقق من بريدك الوارد",
      "successDesc": "لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى {{email}}.",
      "errorTitle": "تعذّر إرسال رابط إعادة التعيين",
      "errorDesc": "يرجى التحقق من بريدك الإلكتروني والمحاولة مرة أخرى.",
      "backToLogin": "العودة إلى تسجيل الدخول"
    },
    "errors": {
      "title": "فشل المصادقة",
      "generic": "حدث خطأ غير متوقع.",
      "emailInUse": "هذا البريد الإلكتروني مسجل مسبقًا.",
      "invalidEmail": "يرجى إدخال بريد إلكتروني صالح.",
      "invalidCredentials": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
      "weakPassword": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
      "tooManyRequests": "محاولات كثيرة جدًّا. يرجى الانتظار.",
      "emailRequired": "البريد الإلكتروني مطلوب.",
      "googleFailed": "فشل تسجيل الدخول عبر Google",
      "tryAgain": "يرجى المحاولة مرة أخرى."
    },
    "success": {
      "loginTitle": "تم تسجيل الدخول",
      "loginDesc": "جارٍ إعادة التوجيه إلى لوحة تحكمك...",
      "signupTitle": "تم إنشاء الحساب!",
      "signupDesc": "يرجى التحقق من بريدك الإلكتروني قبل تسجيل الدخول.",
      "googleLogin": "تم تسجيل الدخول عبر Google"
    },
    "loggingIn": "جارٍ تسجيل الدخول...",
    "signingUp": "جارٍ إنشاء الحساب...",
    "footer": "آمن. موثوق. سريع."
  },
  "home": {
    "heroTitle": "تبدأ الشحنات السلسة من هنا!",
    "heroSubtitle": "حلول شحن سريعة وموثوقة وآمنة للشركات حول العالم. احصل على تسليم شحنتك في الوقت المحدد، في كل مرة.",
    "getQuote": "احصل على عرض سعر مجاني",
    "viewDemo": "عرض توضيحي",
    "whyChoose": "لماذا تختار SwiftParcel؟",
    "whyChooseSub": "نقدم حلول شحن شاملة مصممة خصيصًا لاحتياجات عملك",
    "securePkg": "تعبئة آمنة",
    "securePkgDesc": "حلول تعبئة احترافية لجميع أنواع البضائع",
    "fastDelivery": "توصيل سريع",
    "fastDeliveryDesc": "خيارات شحن سريع لتلبية مواعيدك النهائية",
    "insured": "شحنات مؤمنة",
    "insuredDesc": "تغطية تأمينية كاملة لراحة البال",
    "support": "دعم على مدار الساعة",
    "supportDesc": "خدمة عملاء وتتبع متاحان طوال اليوم"
  },
  "track": {
    "title": "تتبع شحنتك",
    "subtitle": "أدخل رقم التتبع لتحصل على تحديثات فورية عن شحنتك",
    "placeholder": "أدخل رقم التتبع (مثل: SP1234567890)",
    "button": "تتبع",
    "tracking": "جارٍ التتبع...",
    "details": "تفاصيل الشحنة",
    "status": "الحالة",
    "customer": "العميل",
    "contact": "جهة الاتصال",
    "destination": "الوجهة",
    "address": "عنوان الشحن",
    "packageInfo": "معلومات الطرد",
    "created": "تاريخ الإنشاء",
    "updated": "آخر تحديث"
  },
  "about": {
    "title": "عن SwiftParcel",
    "teamTitle": "فريقنا",
    "subtitle": "شريكك الموثوق في حلول الشحن والخدمات اللوجستية العالمية منذ عام 2010",
    "storyTitle": "قصتنا",
    "storyText1": "تأسست SwiftParcel برؤية بسيطة ولكن قوية: جعل الشحن الدولي في متناول الجميع، وموثوقًا وخاليًا من التوتر للشركات من جميع الأحجام.",
    "storyText2": "على مر السنين، تعاملنا مع ملايين الشحنات، وساعدنا آلاف الشركات على التوسع دوليًا، وبنينا سمعة تميزنا.",
    "storyDesc1": "تأسست SwiftParcel برؤية بسيطة ولكن قوية: جعل الشحن الدولي في متناول الجميع، وموثوقًا وخاليًا من التوتر للشركات من جميع الأحجام.",
    "storyDesc2": "على مر السنين، تعاملنا مع ملايين الشحنات، وساعدنا آلاف الشركات على التوسع دوليًا، وبنينا سمعة تميزنا.",
    "mission": "مهمتنا",
    "missionDesc": "تقديم حلول شحن سلسة وموثوقة وفعالة.",
    "team": "فريقنا",
    "teamDesc": "فريق مخصص من محترفي الخدمات اللوجستية يتمتعون بعقود من الخبرة.",
    "commitment": "التزامنا",
    "commitmentDesc": "نحن ملتزمون بالتميز والشفافية وبناء علاقات طويلة الأمد.",
    "reach": "الوصول العالمي",
    "reachDesc": "بفضل شراكاتنا في أكثر من 150 دولة، نضمن وصول شحنتك بأمان.",
    "missionTitle": "المهمة",
    "visionTitle": "الرؤية",
    "valuesTitle": "القيم",
    "awardTitle": "الجوائز",
    "stats": {
      "countries": "الدول التي نخدمها",
      "shipments": "الشحنات المسلمة",
      "clients": "العملاء الراضون",
      "ontime": "نسبة التسليم في الوقت المحدد"
    }
  },
  "contact": {
    "title": "تواصل معنا",
    "subtitle": "فريقنا العالمي مستعد لمساعدتك. تواصل مع أحد مكاتبنا الإقليمية أو استخدم قنوات الدعم المخصصة لدينا.",
    "howToReach": "كيفية التواصل معنا",
    "regionalOffices": "المكاتب الإقليمية",
    "regionalContact": "جهات الاتصال الإقليمية",
    "general": "الاستفسارات العامة",
    "generalDesc": "للاستفسارات العامة حول خدماتنا والشراكات ومعلومات الشركة.",
    "supportTitle": "دعم العملاء",
    "supportDesc": "مساعدة على مدار الساعة طوال أيام الأسبوع في التتبع ومشكلات الحساب والشحن.",
    "sales": "المبيعات والعروض السعرية",
    "salesDesc": "احصل على عروض أسعار مخصصة للشحن بكميات كبيرة والشراكات التجارية.",
    "shipping": "عمليات الشحن",
    "shippingDesc": "أسئلة فنية حول الجمارك والبضائع المقيّدة وإرشادات التعبئة.",
    "formTitle": "أرسل رسالة",
    "formName": "الاسم",
    "formEmail": "البريد الإلكتروني",
    "formSubject": "الموضوع",
    "formMessage": "الرسالة"
  },
  "footer": {
    "logoAlt": "شعار SwiftParcel",
    "description": "حلول شحن سلسة لتلبية احتياجات عملك عالميًا.",
    "supportButton": "توافر الدعم العالمي",
    "quickLinks": "روابط سريعة",
    "contact": "اتصل بنا",
    "legal": "القانوني",
    "terms": "شروط الخدمة",
    "privacy": "سياسة الخصوصية",
    "cookies": "ملفات تعريف الارتباط والخصوصية",
    "allRightsReserved": "جميع الحقوق محفوظة.",
    "soc2": "متوافق مع SOC 2 النوع الثاني",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "خدماتنا",
    "metaDescription": "استكشف خدمات الشحن الشاملة من SwiftParcel، بما في ذلك الشحن الجوي، والشحن البحري، والنقل البري، وحلول التخزين.",
    "heroTitle": "خدمات الشحن لدينا",
    "heroSubtitle": "حلول لوجستية شاملة مصممة لتلبية احتياجات عملك",
    "keyFeatures": "الميزات الرئيسية:",
    "learnMore": "اعرف المزيد",
    "airFreight": {
      "title": "الشحن الجوي",
      "description": "خدمات شحن جوي سريعة وفعالة للشحنات العاجلة. نتعاون مع كبرى شركات الطيران لضمان وصول بضائعك إلى وجهتها بسرعة وأمان.",
      "features": {
        "express": "خيارات توصيل سريع",
        "worldwide": "تغطية عالمية",
        "tracking": "تتبع لحظي",
        "temperature": "خيارات التحكم في درجة الحرارة"
      }
    },
    "oceanFreight": {
      "title": "الشحن البحري",
      "description": "حلول شحن بحري فعالة من حيث التكلفة للبضائع ذات الحجم الكبير. مثالية للشركات التي ترغب في نقل البضائع دوليًا بأسعار تنافسية.",
      "features": {
        "fcl": "حمولات حاوية كاملة (FCL)",
        "lcl": "حمولات أقل من حاوية كاملة (LCL)",
        "doorToDoor": "خدمة من الباب إلى الباب",
        "customs": "مساعدة في التخليص الجمركي"
      }
    },
    "groundTransport": {
      "title": "النقل البري",
      "description": "خدمات شحن بري محلية وعبر الحدود موثوقة. مثالية للتوصيلات الإقليمية واحتياجات النقل البري.",
      "features": {
        "sameDay": "خيارات توصيل في نفس اليوم",
        "regional": "توزيع إقليمي",
        "fleet": "أسطول مخصص",
        "scheduling": "جدولة مرنة"
      }
    },
    "warehousing": {
      "title": "التخزين والخدمات اللوجستية",
      "description": "حلول تخزين كاملة مع إدارة المخزون. احفظ منتجاتك في منشآتنا الآمنة مع مراقبة على مدار الساعة طوال أيام الأسبوع.",
      "features": {
        "climate": "تخزين بتحكم مناخي",
        "inventory": "إدارة المخزون",
        "pickPack": "خدمات الانتقاء والتغليف",
        "distribution": "دعم التوزيع"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 الميزة قادمة قريبًا",
    "featureComingSoon": "لم يتم تنفيذ هذه الميزة بعد — لكن لا تقلق! يمكنك طلبها في طلبك التالي! 🚀"
  },
  "quote": {
    "pageTitle": "احصل على عرض سعر",
    "metaDescription": "اطلب عرض سعر شحن من SwiftParcel. املأ النموذج البسيط واحصل على عرض سعر تنافسي لاحتياجات شحن بضائعك.",
    "heroTitle": "احصل على عرض سعر مجاني",
    "heroSubtitle": "املأ النموذج أدناه وسنعاود الاتصال بك بعرض سعر تنافسي",
    "form": {
      "nameLabel": "الاسم",
      "namePlaceholder": "جون دو",
      "companyLabel": "الشركة",
      "companyPlaceholder": "اسم الشركة (اختياري)",
      "emailLabel": "البريد الإلكتروني",
      "emailPlaceholder": "john@example.com",
      "countryLabel": "البلد",
      "countryPlaceholder": "الولايات المتحدة",
      "contactLabel": "رقم الاتصال",
      "contactPlaceholder": "+1 (555) 123-4567",
      "addressLabel": "عنوان الشحن",
      "addressPlaceholder": "أدخل عنوان الشحن الكامل",
      "packageInfoLabel": "معلومات الطرد",
      "packageInfoPlaceholder": "صف طردك (الأبعاد، الوزن، المحتويات، متطلبات التعامل الخاصة)"
    },
    "submitting": "جارٍ الإرسال...",
    "submitButton": "إرسال طلب عرض السعر",
    "success": {
      "title": "تم إرسال طلبك بنجاح! ✅",
      "description": "معرف التتبع الخاص بك هو: {{trackingId}}. سنقوم بالتواصل معك قريبًا بعرض سعر مفصل."
    },
    "error": {
      "title": "فشل الإرسال",
      "generic": "حدث خطأ ما. يرجى المحاولة مرة أخرى."
    }
  },
  "terms": {
    "pageTitle": "شروط الخدمة",
    "title": "شروط الخدمة",
    "intro": "مرحبًا بك في SwiftParcel. باستخدام موقعنا وخدماتنا، فإنك توافق على الامتثال للشروط والأحكام التالية والالتزام بها.",
    "section1": {
      "title": "1. استخدام النطاق",
      "content": "تُجرى جميع الاتصالات والخدمات الرسمية حصريًا عبر نطاق {{domain}}. لا تعمل SwiftParcel تحت نطاقات مثل .express أو غيرها من النطاقات العليا. ولا نتحمل المسؤولية عن أي اتصالات تصدر من نطاقات غير مصرح بها."
    },
    "section2": {
      "title": "2. اتفاقيات الخدمة",
      "content": "تخضع طلبات الشحن وعروض الأسعار وخدمات التتبع للقوانين البحرية والجوية الدولية. سيتم تزويدك باتفاقيات مستوى الخدمة (SLAs) المحددة عند إبرام العقد."
    },
    "section3": {
      "title": "3. حسابات المستخدمين",
      "content": "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك. أي نشاط يتم من خلال حسابك يقع على عاتقك."
    }
  },
  "privacy": {
    "pageTitle": "سياسة الخصوصية",
    "title": "سياسة الخصوصية",
    "intro": "في SwiftParcel، نعطي أولوية لحماية بياناتك الشخصية وبيانات عملك. توضح هذه السياسة كيفية جمعنا واستخدامنا وتأمين معلوماتك.",
    "dataCollection": {
      "title": "جمع البيانات",
      "content": "نقوم بجمع المعلومات الضرورية لتسهيل عمليات الشحن العالمية، بما في ذلك عناوين المرسل والمستلم ومحتويات الطرد وتفاصيل الاتصال. تتم معالجة جميع البيانات بشكل آمن."
    },
    "internationalTransfers": {
      "title": "التحويلات الدولية",
      "content": "بصفتنا مزوّد خدمات لوجستية عالمي يعمل عبر {{domain}}، قد تُنقل بياناتك عبر الحدود لتسهيل تسليم الشحنات. ونحن نضمن وجود ضمانات مناسبة لجميع عمليات النقل الدولي."
    }
  },
  "cookies": {
    "pageTitle": "سياسة ملفات تعريف الارتباط",
    "title": "سياسة ملفات تعريف الارتباط",
    "intro": "توضّح هذه السياسة كيفية استخدام SwiftParcel لملفات تعريف الارتباط والتقنيات المشابهة للتعرف عليك عند زيارة موقعنا على {{domain}}.",
    "whatAreCookies": {
      "title": "ما هي ملفات تعريف الارتباط؟",
      "content": "ملفات تعريف الارتباط هي ملفات بيانات صغيرة تُوضع على جهاز الكمبيوتر أو الجهاز المحمول عند زيارتك لموقع ويب. وتستخدمها مواقع الويب على نطاق واسع لجعل مواقعها تعمل، أو تعمل بكفاءة أكبر، وكذلك لتوفير معلومات إعداد التقارير."
    },
    "controllingCookies": {
      "title": "التحكم في ملفات تعريف الارتباط",
      "content": "لديك الحق في تحديد ما إذا كنت ستقبل ملفات تعريف الارتباط أو ترفضها. يمكنك ممارسة حقوقك المتعلقة بملفات تعريف الارتباط من خلال تعيين تفضيلاتك في مدير موافقة ملفات تعريف الارتباط الموجود في تذييل الموقع."
    }
  },

  "dashboard": {
    "accessDenied": "يجب أن تكون مسجّل الدخول للوصول إلى لوحة التحكم.",
    "signOutFailed": "فشل تسجيل الخروج. يرجى المحاولة مرة أخرى.",
    "active": "نشط",
    "welcomeBack": "مرحبًا بك مجددًا"
  },
  "dash_nav": {
    "overview": "نظرة عامة",
    "shipments": "الشحنات",
    "newShipment": "شحنة جديدة",
    "track": "تتبع",
    "orders": "الطلبات",
    "messages": "الرسائل",
    "activity": "النشاط",
    "report": "التقارير",
    "support": "الدعم",
    "account": "الحساب",
    "billing": "الفوترة",
    "documents": "المستندات",
    "settings": "الإعدادات",
    "homePage": "الصفحة الرئيسية",
    "createShipment": "إنشاء شحنة",
    "signout": "تسجيل الخروج",
    "myAccount": "حسابي"
  },
  "common": {
    "user": "مستخدم",
    "logoAlt": "شعار SwiftParcel",
    "toggleNavigation": "تبديل التنقل",
    "viewAll": "عرض الكل"
  },
  "dashboardOverview": {
    "loading": "جارٍ تحميل لوحة تحكم الشحن الخاصة بك...",
    "errors": {
      "fetchFailed": "فشل تحميل بيانات لوحة التحكم. يرجى المحاولة مرة أخرى."
    },
    "empty": {
      "title": "مركزك العالمي للخدمات اللوجستية",
      "subtitle": "أدر شحناتك، وتتبّع عمليات التسليم، ووسّع نطاق عملك — كل ذلك في مكان واحد."
    },
    "actions": {
      "newShipmentDesc": "أنشئ وجدولة عملية تسليم جديدة",
      "trackDesc": "راقب حالة التسليم في الوقت الفعلي",
      "billingDesc": "اعرض الفواتير وسجل المدفوعات",
      "documentsDesc": "وصِّل إلى ملصقات الشحن واستمارات الجمارك"
    },
    "stats": {
      "total": "إجمالي الشحنات",
      "pending": "قيد الانتظار",
      "inTransit": "قيد النقل",
      "delivered": "تم التسليم",
      "canceled": "ملغاة",
      "successRate": "معدل النجاح"
    },
    "createFirstShipment": "أنشئ أول شحنة لك",
    "recentShipments": "الشحنات الأخيرة",
    "shipmentsPlaceholder": "سيتم عرض مكوّن قائمة الشحنات هنا.",
    "liveTracking": "التتبع المباشر",
    "trackingComingSoon": "تحديثات GPS في الوقت الفعلي قادمة قريبًا.",
    "packageInsights": "تحليلات الطرد",
    "insightsDescription": "الوزن، الأبعاد، وبيانات الجمارك.",
    "globalNetwork": "شبكة التوصيل العالمية",
    "mapDescription": "تصور المسارات المباشرة مدعوم بتقنية SwiftParcel Intelligence™"
  },
  "shipments": {
    "title": "الشحنات",
    "subtitle": "أدر وتابع جميع عمليات التسليم الخاصة بك في مكان واحد",
    "loading": "جارٍ تحميل الشحنات...",
    "errors": {
      "fetchFailed": "فشل تحميل الشحنات. يرجى المحاولة مرة أخرى."
    },
    "stats": {
      "total": "إجمالي الشحنات",
      "pending": "قيد الانتظار",
      "inTransit": "قيد النقل",
      "delivered": "تم التسليم",
      "canceled": "ملغاة"
    },
    "search": {
      "placeholder": "ابحث حسب رقم التتبع أو الوجهة..."
    },
    "filter": {
      "status": "الحالة",
      "allStatuses": "جميع الحالات"
    },
    "status": {
      "pending": "قيد الانتظار",
      "inTransit": "قيد النقل",
      "delivered": "تم التسليم",
      "canceled": "ملغاة"
    },
    "actions": {
      "exportCSV": "تصدير CSV",
      "printLabels": "طباعة الملصقات",
      "track": "تتبع",
      "details": "التفاصيل"
    },
    "table": {
      "id": "معرف الشحنة",
      "tracking": "التتبع",
      "route": "المسار",
      "service": "الخدمة",
      "weight": "الوزن",
      "date": "التاريخ",
      "estDelivery": "التاريخ المقدّر للتسليم",
      "actions": "إجراءات"
    },
    "csv": {
      "id": "المعرف",
      "tracking": "التتبع",
      "from": "من",
      "to": "إلى",
      "service": "الخدمة",
      "weight": "الوزن (كغ)",
      "date": "التاريخ",
      "estDelivery": "التاريخ المقدّر للتسليم",
      "status": "الحالة"
    },
    "print": {
      "title": "ملصقات SwiftParcel",
      "tracking": "التتبع",
      "to": "إلى"
    },
    "noData": "لم يتم العثور على شحنات. جرّب تعديل الفلاتر الخاصة بك."
  },
  "newShipment": {
    "title": "إرسال طلب شحنة",
    "subtitle": "سنراجع تفاصيلك ونرسل عرض سعر مؤكّد خلال ساعتين عمل.",
    "sections": {
      "pickupMethod": "1. طريقة الاستلام",
      "addresses": "2. العناوين",
      "packageInfo": "3. معلومات الطرد",
      "transportSchedule": "4. النقل والجدولة"
    },
    "pickup": {
      "dropoffTitle": "التسليم في المركز",
      "dropoffDesc": "أحضر طردك إلى أحد مراكزنا المحلية",
      "pickupTitle": "جدولة الاستلام",
      "pickupDesc": "سنقوم بالاستلام من موقعك"
    },
    "addresses": {
      "sender": "المرسِل (الاستلام)",
      "recipient": "المستلم (التسليم)",
      "businessLocation": "موقع العمل"
    },
    "placeholders": {
      "fullName": "الاسم الكامل",
      "phone": "الهاتف",
      "email": "البريد الإلكتروني",
      "streetAddress": "عنوان الشارع",
      "city": "المدينة",
      "zip": "الرمز البريدي",
      "packageDescription": "صف المحتويات (مثل: إلكترونيات، ملابس، آلات)",
      "declaredValue": "القيمة المصرّح بها (للتأمين)",
      "customsContents": "اذكر جميع العناصر، الكميات، والقيم...",
      "specialInstructions": "تعليمات أو متطلبات خاصة...",
      "additionalNotes": "ملاحظات إضافية"
    },
    "labels": {
      "preferredPickupDate": "تاريخ الاستلام المفضّل",
      "preferredDeliveryDate": "تاريخ التسليم المفضّل",
      "shipmentType": "نوع الشحنة",
      "contactPreference": "تفضيل التواصل"
    },
    "package": {
      "categoryLabel": "الفئة",
      "categories": {
        "general": "بضائع عامة",
        "fragile": "قابل للكسر",
        "perishable": "قابل للتلف",
        "hazardous": "خطر (يتطلب موافقة)",
        "documents": "مستندات"
      },
      "hazardousWarning": "تتطلب المواد الخطرة معالجة خاصة ووثائق رسمية. سيتواصل معك فريقنا.",
      "customsClearance": "هذه الشحنة تتطلب تخليصًا جمركيًا"
    },
    "transport": {
      "air": "النقل الجوي",
      "ground": "النقل البري"
    },
    "shipmentTypes": {
      "standard": "قياسي",
      "express": "(express (24–72 ساعة",
      "urgent": "عاجل (في نفس اليوم/اليوم التالي)"
    },
    "contactPreferences": {
      "email": "البريد الإلكتروني",
      "sms": "الرسائل النصية",
      "phone": "مكالمة هاتفية"
    },
    "errors": {
      "senderName": "اسم المرسِل مطلوب",
      "senderPhone": "هاتف المرسِل مطلوب",
      "senderEmail": "يجب إدخال بريد إلكتروني صحيح للمرسِل",
      "senderAddress": "عنوان المرسِل مطلوب",
      "senderCity": "مدينة المرسِل مطلوبة",
      "recipientName": "اسم المستلم مطلوب",
      "recipientPhone": "هاتف المستلم مطلوب",
      "recipientEmail": "يجب إدخال بريد إلكتروني صحيح للمستلم",
      "recipientAddress": "عنوان المستلم مطلوب",
      "recipientCity": "مدينة المستلم مطلوبة",
      "packageDescription": "وصف الطرد مطلوب",
      "weight": "يجب أن يكون الوزن 0.1 كغ على الأقل",
      "length": "يجب أن يكون الطول 1 سم على الأقل",
      "width": "يجب أن يكون العرض 1 سم على الأقل",
      "height": "يجب أن يكون الارتفاع 1 سم على الأقل",
      "customsContents": "تصريح محتويات الجمارك مطلوب",
      "submitFailed": "فشل إرسال الطلب. يرجى المحاولة مرة أخرى."
    },
    "success": {
      "message": "تم إرسال الطلب بنجاح! معرف شحنتك هو: {{id}}"
    },
    "submitting": "جارٍ إرسال الطلب...",
    "submitButton": "إرسال طلب الشحنة",
    "help": {
      "reviewTime": "بعد الإرسال، سيقوم فريق الخدمات اللوجستية لدينا بمراجعة طلبك وإرسال عرض سعر مؤكّد خلال ساعتين عمل.",
      "urgentHelp": "📞 هل تحتاج مساعدة عاجلة؟ اتصل بنا على +1 (800) SWIFT-123"
    }
  }

},

de: {
  "nav": {
    "home": "Startseite",
    "services": "Leistungen",
    "quote": "Angebot anfordern",
    "track": "Sendung verfolgen",
    "about": "Über uns",
    "contact": "Kontakt",
    "dashboard": "Dashboard",
    "login": "Anmelden",
    "signup": "Registrieren",
    "signout": "Abmelden"
  },
  "logins": {
    "loginTitle": "In Konto anmelden",
    "noAccount": "Noch kein Konto?",
    "signupNow": "Registrieren",
    "emailLabel": "E-Mail-Adresse",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "Passwort",
    "passwordPlaceholder": "Passwort eingeben",
    "signupTitle": "Neues Konto erstellen",
    "haveAccount": "Bereits ein Konto?",
    "loginNow": "Anmelden",
    "signupButton": "Registrieren",
    "loginButton": "Anmelden",
    "loggingIn": "Anmeldung läuft..."
  },
  "documents": {
    "pageTitle": "Meine Dokumente",
    "metaDescription": "Laden Sie Ihre Rechnungen, Verträge und Versanddokumente herunter.",
    "title": "Meine Dokumente",
    "subtitle": "Greifen Sie auf alle Ihre versandbezogenen Dokumente an einem Ort zu und laden Sie sie herunter.",
    "download": "Herunterladen",
    "empty": {
      "title": "Noch keine Dokumente vorhanden",
      "description": "Sie haben noch keine Rechnungen oder Verträge erstellt. Diese erscheinen hier, sobald sie verfügbar sind."
    },
    "types": {
      "invoice": "Versandrechnung",
      "contract": "Dienstleistungsvertrag",
      "receipt": "Zahlungsbeleg",
      "waybill": "Frachtbrief"
    },
    "success": {
      "downloadedTitle": "Download gestartet",
      "downloadedDesc": "{{name}} wird heruntergeladen..."
    },
    "errors": {
      "title": "Dokumentenfehler",
      "fetchFailed": "Ihre Dokumente konnten nicht geladen werden. Bitte versuchen Sie es später erneut.",
      "downloadFailed": "Das Dokument konnte nicht heruntergeladen werden.",
      "noDownloadUrl": "Dieses Dokument ist nicht zum Download verfügbar."
    }
  },
  "billing": {
    "pageTitle": "Abrechnung & Rechnungen",
    "metaDescription": "Verwalten Sie Ihr SwiftParcel-Abonnement, sehen Sie Rechnungen ein und laden Sie Belege herunter.",
    "title": "Abrechnung & Rechnungen",
    "subtitle": "Verfolgen Sie Ihre Zahlungen, verwalten Sie Ihren Tarif und greifen Sie auf alle Finanzdokumente zu.",
    "viewAllDocuments": "Alle Dokumente anzeigen",
    "subscription": {
      "title": "Aktueller Tarif",
      "description": "Details zu Ihrem aktiven Abonnement",
      "basicPlan": "Basis-Tarif",
      "none": "Sie haben derzeit kein aktives Abonnement."
    },
    "status": {
      "active": "Aktiv",
      "pastDue": "Überfällig",
      "canceled": "Gekündigt",
      "inactive": "Inaktiv"
    },
    "invoices": {
      "title": "Letzte Rechnungen",
      "viewAll": "Alle anzeigen",
      "empty": {
        "title": "Noch keine Rechnungen vorhanden",
        "description": "Ihre Rechnungen erscheinen hier, sobald Sie eine Zahlung getätigt haben."
      }
    },
    "invoice": {
      "defaultDesc": "Versandrechnung"
    },
    "errors": {
      "title": "Abrechnungsfehler",
      "fetchFailed": "Die Abrechnungsinformationen konnten nicht geladen werden. Bitte versuchen Sie es später erneut."
    }
  },
  "login": {
    "loginTitlePage": "Anmelden",
    "signupTitlePage": "Registrieren",
    "metaDescription": "Sicher auf Ihr SwiftParcel-Konto zugreifen.",
    "loginTitle": "Willkommen zurück",
    "signupTitle": "Erstellen Sie Ihr Konto",
    "emailLabel": "E-Mail-Adresse",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "Passwort",
    "passwordPlaceholder": "••••••••",
    "loginButton": "Anmelden",
    "signupButton": "Registrieren",
    "loginWithGoogle": "Weiter mit Google",
    "signupWithGoogle": "Mit Google registrieren",
    "orContinueWith": "oder per E-Mail fortfahren",
    "loginNow": "Jetzt anmelden",
    "signupNow": "Jetzt registrieren",
    "haveAccount": "Bereits ein Konto?",
    "noAccount": "Noch kein Konto?",
    "rememberMe": "Angemeldet bleiben",
    "forgotPassword": {
      "link": "Passwort vergessen?",
      "title": "Passwort zurücksetzen",
      "description": "Geben Sie Ihre E-Mail-Adresse ein, und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.",
      "sendButton": "Link senden",
      "sending": "Wird gesendet...",
      "successTitle": "Prüfen Sie Ihr Postfach",
      "successDesc": "Wir haben einen Link zum Zurücksetzen des Passworts an {{email}} gesendet.",
      "errorTitle": "Link konnte nicht gesendet werden",
      "errorDesc": "Bitte überprüfen Sie Ihre E-Mail-Adresse und versuchen Sie es erneut.",
      "backToLogin": "Zurück zur Anmeldung"
    },
    "errors": {
      "title": "Authentifizierung fehlgeschlagen",
      "generic": "Ein unerwarteter Fehler ist aufgetreten.",
      "emailInUse": "Diese E-Mail-Adresse ist bereits registriert.",
      "invalidEmail": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      "invalidCredentials": "Falsche E-Mail-Adresse oder falsches Passwort.",
      "weakPassword": "Das Passwort muss mindestens 6 Zeichen lang sein.",
      "tooManyRequests": "Zu viele Versuche. Bitte warten Sie.",
      "emailRequired": "E-Mail-Adresse ist erforderlich.",
      "googleFailed": "Google-Anmeldung fehlgeschlagen",
      "tryAgain": "Bitte versuchen Sie es erneut."
    },
    "success": {
      "loginTitle": "Erfolgreich angemeldet",
      "loginDesc": "Weiterleitung zu Ihrem Dashboard...",
      "signupTitle": "Konto erstellt!",
      "signupDesc": "Bitte bestätigen Sie Ihre E-Mail-Adresse, bevor Sie sich anmelden.",
      "googleLogin": "Mit Google angemeldet"
    },
    "loggingIn": "Anmeldung läuft...",
    "signingUp": "Konto wird erstellt...",
    "footer": "Sicher. Zuverlässig. Schnell."
  },
  "home": {
    "heroTitle": "Nahtloser Versand beginnt hier!",
    "heroSubtitle": "Schnelle, zuverlässige und sichere Versandlösungen für Unternehmen weltweit. Ihre Sendung kommt pünktlich an – jedes Mal.",
    "getQuote": "Kostenloses Angebot erhalten",
    "viewDemo": "Demo ansehen",
    "whyChoose": "Warum SwiftParcel?",
    "whyChooseSub": "Wir bieten umfassende Versandlösungen, maßgeschneidert für Ihre geschäftlichen Anforderungen",
    "securePkg": "Sichere Verpackung",
    "securePkgDesc": "Professionelle Verpackungslösungen für alle Frachtarten",
    "fastDelivery": "Schnelle Zustellung",
    "fastDeliveryDesc": "Expressversandoptionen, um Ihre Fristen einzuhalten",
    "insured": "Versicherte Sendungen",
    "insuredDesc": "Vollständiger Versicherungsschutz für Ihre Sicherheit",
    "support": "24/7-Support",
    "supportDesc": "Rund-um-die-Uhr-Kundenservice und Sendungsverfolgung"
  },
  "track": {
    "title": "Ihre Sendung verfolgen",
    "subtitle": "Geben Sie Ihre Tracking-ID ein, um Echtzeit-Updates zu Ihrer Sendung zu erhalten",
    "placeholder": "Tracking-ID eingeben (z. B. SP1234567890)",
    "button": "Verfolgen",
    "tracking": "Wird verfolgt...",
    "details": "Sendungsdetails",
    "status": "Status",
    "customer": "Kunde",
    "contact": "Kontakt",
    "destination": "Zielort",
    "address": "Lieferadresse",
    "packageInfo": "Paketinformationen",
    "created": "Erstellt am",
    "updated": "Zuletzt aktualisiert"
  },
  "about": {
    "title": "Über SwiftParcel",
    "teamTitle": "Unser Team",
    "subtitle": "Ihr vertrauensvoller Partner für globale Logistik- und Versandlösungen seit 2010",
    "storyTitle": "Unsere Geschichte",
    "storyText1": "SwiftParcel wurde mit einer einfachen, aber kraftvollen Vision gegründet: Internationaler Versand soll für Unternehmen jeder Größe zugänglich, zuverlässig und stressfrei sein.",
    "storyText2": "Im Laufe der Jahre haben wir Millionen von Sendungen abgewickelt, Tausenden von Unternehmen beim internationalen Wachstum geholfen und uns einen exzellenten Ruf erarbeitet.",
    "storyDesc1": "SwiftParcel wurde mit einer einfachen, aber kraftvollen Vision gegründet: Internationaler Versand soll für Unternehmen jeder Größe zugänglich, zuverlässig und stressfrei sein.",
    "storyDesc2": "Im Laufe der Jahre haben wir Millionen von Sendungen abgewickelt, Tausenden von Unternehmen beim internationalen Wachstum geholfen und uns einen exzellenten Ruf erarbeitet.",
    "mission": "Unsere Mission",
    "missionDesc": "Nahtlose, zuverlässige und effiziente Versandlösungen bereitzustellen.",
    "team": "Unser Team",
    "teamDesc": "Ein engagiertes Team aus Logistikexperten mit jahrzehntelanger Erfahrung.",
    "commitment": "Unser Engagement",
    "commitmentDesc": "Wir setzen uns für Exzellenz, Transparenz und langfristige Partnerschaften ein.",
    "reach": "Globale Reichweite",
    "reachDesc": "Dank Partnerschaften in über 150 Ländern stellen wir sicher, dass Ihre Fracht sicher ankommt.",
    "missionTitle": "Mission",
    "visionTitle": "Vision",
    "valuesTitle": "Werte",
    "awardTitle": "Auszeichnungen",
    "stats": {
      "countries": "Bediente Länder",
      "shipments": "Ausgelieferte Sendungen",
      "clients": "Zufriedene Kunden",
      "ontime": "Pünktliche Lieferungen"
    }
  },
  "contact": {
    "title": "Kontaktieren Sie uns",
    "subtitle": "Unser globales Team steht bereit, Ihnen zu helfen. Wenden Sie sich an eines unserer regionalen Büros oder nutzen Sie unsere dedizierten Supportkanäle.",
    "howToReach": "So erreichen Sie uns",
    "regionalOffices": "Regionale Niederlassungen",
    "regionalContact": "Regionale Kontakte",
    "general": "Allgemeine Anfragen",
    "generalDesc": "Für allgemeine Fragen zu unseren Dienstleistungen, Partnerschaften und Unternehmensinformationen.",
    "supportTitle": "Kundensupport",
    "supportDesc": "24/7-Hilfe bei Sendungsverfolgung, Account-Problemen und Versandfragen.",
    "sales": "Vertrieb & Angebote",
    "salesDesc": "Erhalten Sie individuelle Angebote für Großversender und Geschäftspartnerschaften.",
    "shipping": "Versandabwicklung",
    "shippingDesc": "Technische Fragen zu Zoll, eingeschränkten Gütern und Verpackungsrichtlinien.",
    "formTitle": "Nachricht senden",
    "formName": "Name",
    "formEmail": "E-Mail",
    "formSubject": "Betreff",
    "formMessage": "Nachricht"
  },
  
  "footer": {
    "logoAlt": "SwiftParcel-Logo",
    "description": "Nahtlose Versandlösungen für Ihre geschäftlichen Anforderungen weltweit.",
    "supportButton": "Weltweite Support-Verfügbarkeit",
    "quickLinks": "Schnellinks",
    "contact": "Kontakt",
    "legal": "Rechtliches",
    "terms": "Nutzungsbedingungen",
    "privacy": "Datenschutzrichtlinie",
    "cookies": "Cookies & Datenschutz",
    "allRightsReserved": "Alle Rechte vorbehalten.",
    "soc2": "SOC 2 Type II-konform",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "Unsere Leistungen",
    "metaDescription": "Entdecken Sie die umfassenden Versanddienstleistungen von SwiftParcel, darunter Luftfracht, Seefracht, Straßentransport und Lagerlösungen.",
    "heroTitle": "Unsere Versanddienstleistungen",
    "heroSubtitle": "Umfassende Logistiklösungen, maßgeschneidert für Ihre geschäftlichen Anforderungen",
    "keyFeatures": "Hauptmerkmale:",
    "learnMore": "Mehr erfahren",
    "airFreight": {
      "title": "Luftfracht",
      "description": "Schnelle und effiziente Luftfrachtdienstleistungen für zeitkritische Sendungen. Wir arbeiten mit führenden Fluggesellschaften zusammen, um sicherzustellen, dass Ihre Ware schnell und sicher am Ziel ankommt.",
      "features": {
        "express": "Expressversandoptionen",
        "worldwide": "Weltweite Abdeckung",
        "tracking": "Echtzeit-Tracking",
        "temperature": "Temperaturgeführte Optionen"
      }
    },
    "oceanFreight": {
      "title": "Seefracht",
      "description": "Kosteneffiziente Seetransportlösungen für große Frachtmengen. Ideal für Unternehmen, die Waren international zu wettbewerbsfähigen Preisen transportieren möchten.",
      "features": {
        "fcl": "Vollladungen (FCL)",
        "lcl": "Teilladungen (LCL)",
        "doorToDoor": "Door-to-Door-Service",
        "customs": "Unterstützung bei der Zollabfertigung"
      }
    },
    "groundTransport": {
      "title": "Straßentransport",
      "description": "Zuverlässige nationale und grenzüberschreitende Straßentransportdienstleistungen. Perfekt für regionale Lieferungen und überlandgehende Transportanforderungen.",
      "features": {
        "sameDay": "Same-Day-Lieferoptionen",
        "regional": "Regionale Verteilung",
        "fleet": "Eigenes Fuhrpark",
        "scheduling": "Flexible Terminplanung"
      }
    },
    "warehousing": {
      "title": "Lagerhaltung & Logistik",
      "description": "Komplette Lagerlösungen mit Inventarverwaltung. Lagern Sie Ihre Produkte in unseren sicheren Einrichtungen mit 24/7-Überwachung.",
      "features": {
        "climate": "Klimatisierte Lagerung",
        "inventory": "Bestandsverwaltung",
        "pickPack": "Kommissionier- und Verpackungsservice",
        "distribution": "Distributionsunterstützung"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 Funktion demnächst verfügbar",
    "featureComingSoon": "Diese Funktion ist noch nicht implementiert – aber keine Sorge! Sie können sie in Ihrer nächsten Anfrage anfordern! 🚀"
  },
  "quote": {
    "pageTitle": "Angebot anfordern",
    "metaDescription": "Fordern Sie ein Versandangebot von SwiftParcel an. Füllen Sie unser einfaches Formular aus und erhalten Sie ein wettbewerbsfähiges Angebot für Ihre Frachtversandanforderungen.",
    "heroTitle": "Kostenloses Angebot erhalten",
    "heroSubtitle": "Füllen Sie das untenstehende Formular aus, und wir melden uns mit einem wettbewerbsfähigen Angebot bei Ihnen.",
    "form": {
      "nameLabel": "Name",
      "namePlaceholder": "Max Mustermann",
      "companyLabel": "Unternehmen",
      "companyPlaceholder": "Unternehmensname (optional)",
      "emailLabel": "E-Mail",
      "emailPlaceholder": "max@example.com",
      "countryLabel": "Land",
      "countryPlaceholder": "Deutschland",
      "contactLabel": "Kontakttelefon",
      "contactPlaceholder": "+49 (123) 4567890",
      "addressLabel": "Lieferadresse",
      "addressPlaceholder": "Vollständige Lieferadresse eingeben",
      "packageInfoLabel": "Paketinformationen",
      "packageInfoPlaceholder": "Beschreiben Sie Ihr Paket (Abmessungen, Gewicht, Inhalt, besondere Handhabungsanforderungen)"
    },
    "submitting": "Wird gesendet …",
    "submitButton": "Angebotsanfrage senden",
    "success": {
      "title": "Angebot erfolgreich gesendet! ✅",
      "description": "Ihre Tracking-ID lautet: {{trackingId}}. Wir werden uns kurzfristig mit einem detaillierten Angebot bei Ihnen melden."
    },
    "error": {
      "title": "Übermittlung fehlgeschlagen",
      "generic": "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
    }
  },
  "terms": {
    "pageTitle": "Nutzungsbedingungen",
    "title": "Nutzungsbedingungen",
    "intro": "Willkommen bei SwiftParcel. Durch die Nutzung unserer Website und Dienstleistungen erklären Sie sich damit einverstanden, die folgenden Allgemeinen Geschäftsbedingungen einzuhalten und sich an sie zu binden.",
    "section1": {
      "title": "1. Domain-Nutzung",
      "content": "Alle offiziellen Kommunikationen und Dienstleistungen erfolgen ausschließlich über die Domain {{domain}}. SwiftParcel betreibt keine Dienste unter .express oder anderen Top-Level-Domains (TLDs). Wir übernehmen keine Verantwortung für Kommunikationen, die von nicht autorisierten Domains stammen."
    },
    "section2": {
      "title": "2. Dienstleistungsvereinbarungen",
      "content": "Versandanfragen, Angebote und Tracking-Dienste unterliegen internationalen See- und Luftfahrtgesetzen. Spezifische Service-Level-Agreements (SLAs) werden bei Vertragsschluss bereitgestellt."
    },
    "section3": {
      "title": "3. Benutzerkonten",
      "content": "Sie sind für die Vertraulichkeit Ihrer Zugangsdaten verantwortlich. Jegliche Aktivität, die über Ihr Konto erfolgt, liegt in Ihrer Verantwortung."
    }
  },
  "privacy": {
    "pageTitle": "Datenschutzrichtlinie",
    "title": "Datenschutzrichtlinie",
    "intro": "Bei SwiftParcel haben wir den Schutz Ihrer persönlichen und geschäftlichen Daten höchste Priorität. Diese Richtlinie erläutert, wie wir Ihre Informationen erfassen, verwenden und schützen.",
    "dataCollection": {
      "title": "Datenerfassung",
      "content": "Wir erfassen Informationen, die zur Abwicklung globaler Logistikprozesse erforderlich sind, einschließlich Absender-/Empfängeradressen, Paketinhalten und Kontaktdaten. Alle Daten werden sicher verarbeitet."
    },
    "internationalTransfers": {
      "title": "Internationale Datenübermittlungen",
      "content": "Als globaler Logistikdienstleister, der über {{domain}} operiert, können Ihre Daten grenzüberschreitend übermittelt werden, um die Zustellung von Sendungen zu ermöglichen. Wir stellen sicher, dass für alle internationalen Übermittlungen angemessene Schutzmaßnahmen getroffen werden."
    }
  },
  "cookies": {
    "pageTitle": "Cookie-Richtlinie",
    "title": "Cookie-Richtlinie",
    "intro": "Diese Richtlinie erklärt, wie SwiftParcel Cookies und ähnliche Technologien verwendet, um Sie zu erkennen, wenn Sie unsere Website unter {{domain}} besuchen.",
    "whatAreCookies": {
      "title": "Was sind Cookies?",
      "content": "Cookies sind kleine Datendateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden von Website-Betreibern häufig eingesetzt, damit ihre Websites funktionieren oder effizienter arbeiten sowie um Berichtsinformationen bereitzustellen."
    },
    "controllingCookies": {
      "title": "Cookie-Einstellungen",
      "content": "Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen möchten. Sie können Ihre Cookie-Einstellungen über den Cookie-Consent-Manager im Footer der Website vornehmen."
    }
  },

  "dashboard": {
    "accessDenied": "Sie müssen angemeldet sein, um auf das Dashboard zuzugreifen.",
    "signOutFailed": "Abmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.",
    "active": "Aktiv",
    "welcomeBack": "Willkommen zurück"
  },
  "dash_nav": {
    "overview": "Übersicht",
    "shipments": "Sendungen",
    "newShipment": "Neue Sendung",
    "track": "Verfolgen",
    "orders": "Bestellungen",
    "messages": "Nachrichten",
    "activity": "Aktivität",
    "report": "Bericht",
    "support": "Support",
    "account": "Konto",
    "billing": "Abrechnung",
    "documents": "Dokumente",
    "settings": "Einstellungen",
    "homePage": "Startseite",
    "createShipment": "Sendung erstellen",
    "signout": "Abmelden",
    "myAccount": "Mein Konto"
  },
  "common": {
    "user": "Benutzer",
    "logoAlt": "SwiftParcel-Logo",
    "toggleNavigation": "Navigation umschalten",
    "viewAll": "Alle anzeigen"
  },
  "dashboardOverview": {
    "loading": "Ihr Logistik-Dashboard wird geladen …",
    "errors": {
      "fetchFailed": "Dashboard-Daten konnten nicht geladen werden. Bitte versuchen Sie es erneut."
    },
    "empty": {
      "title": "Ihr globaler Logistik-Hub",
      "subtitle": "Verwalten Sie Sendungen, verfolgen Sie Lieferungen und skalieren Sie Ihr Unternehmen – alles an einem Ort."
    },
    "actions": {
      "newShipmentDesc": "Eine neue Lieferung erstellen und planen",
      "trackDesc": "Echtzeit-Lieferstatus überwachen",
      "billingDesc": "Rechnungen und Zahlungsverlauf anzeigen",
      "documentsDesc": "Versandetiketten und Zolldokumente abrufen"
    },
    "stats": {
      "total": "Gesamte Sendungen",
      "pending": "Ausstehend",
      "inTransit": "Unterwegs",
      "delivered": "Geliefert",
      "canceled": "Storniert",
      "successRate": "Erfolgsquote"
    },
    "createFirstShipment": "Erstellen Sie Ihre erste Sendung",
    "recentShipments": "Letzte Sendungen",
    "shipmentsPlaceholder": "Die Sendungslistenkomponente wird hier angezeigt.",
    "liveTracking": "Live-Verfolgung",
    "trackingComingSoon": "Echtzeit-GPS-Updates bald verfügbar.",
    "packageInsights": "Paket-Insights",
    "insightsDescription": "Gewicht, Abmessungen und Zolldaten.",
    "globalNetwork": "Globales Liefernetzwerk",
    "mapDescription": "Live-Routenvisualisierung powered by SwiftParcel Intelligence™"
  },
  "shipments": {
    "title": "Sendungen",
    "subtitle": "Verwalten und verfolgen Sie alle Ihre Lieferungen an einem Ort",
    "loading": "Sendungen werden geladen …",
    "errors": {
      "fetchFailed": "Sendungen konnten nicht geladen werden. Bitte versuchen Sie es erneut."
    },
    "stats": {
      "total": "Gesamte Sendungen",
      "pending": "Ausstehend",
      "inTransit": "Unterwegs",
      "delivered": "Geliefert",
      "canceled": "Storniert"
    },
    "search": {
      "placeholder": "Suche nach Tracking-ID, Zielort …"
    },
    "filter": {
      "status": "Status",
      "allStatuses": "Alle Status"
    },
    "status": {
      "pending": "Ausstehend",
      "inTransit": "Unterwegs",
      "delivered": "Geliefert",
      "canceled": "Storniert"
    },
    "actions": {
      "exportCSV": "Als CSV exportieren",
      "printLabels": "Etiketten drucken",
      "track": "Verfolgen",
      "details": "Details"
    },
    "table": {
      "id": "Sendungs-ID",
      "tracking": "Tracking",
      "route": "Route",
      "service": "Service",
      "weight": "Gewicht",
      "date": "Datum",
      "estDelivery": "Vorauss. Zustellung",
      "actions": "Aktionen"
    },
    "csv": {
      "id": "ID",
      "tracking": "Tracking",
      "from": "Von",
      "to": "Nach",
      "service": "Service",
      "weight": "Gewicht (kg)",
      "date": "Datum",
      "estDelivery": "Vorauss. Zustellung",
      "status": "Status"
    },
    "print": {
      "title": "SwiftParcel-Etiketten",
      "tracking": "Tracking",
      "to": "An"
    },
    "noData": "Keine Sendungen gefunden. Passen Sie Ihre Filter an."
  },
  "newShipment": {
    "title": "Sendungsanfrage absenden",
    "subtitle": "Wir prüfen Ihre Angaben und senden Ihnen innerhalb von 2 Werkstunden ein bestätigtes Angebot.",
    "sections": {
      "pickupMethod": "1. Abholmethode",
      "addresses": "2. Adressen",
      "packageInfo": "3. Paketinformationen",
      "transportSchedule": "4. Transport & Zeitplan"
    },
    "pickup": {
      "dropoffTitle": "Abgabe im Hub",
      "dropoffDesc": "Bringen Sie Ihr Paket zu einem unserer lokalen Hubs",
      "pickupTitle": "Abholung planen",
      "pickupDesc": "Wir holen es von Ihrem Standort ab"
    },
    "addresses": {
      "sender": "Absender (Abholung)",
      "recipient": "Empfänger (Lieferung)",
      "businessLocation": "Geschäftsstandort"
    },
    "placeholders": {
      "fullName": "Vollständiger Name",
      "phone": "Telefon",
      "email": "E-Mail",
      "streetAddress": "Straße und Hausnummer",
      "city": "Stadt",
      "zip": "PLZ",
      "packageDescription": "Beschreiben Sie den Inhalt (z. B. Elektronik, Kleidung, Maschinen)",
      "declaredValue": "Erklärter Wert (für Versicherung)",
      "customsContents": "Liste aller Artikel, Mengen und Werte …",
      "specialInstructions": "Besondere Anweisungen oder Anforderungen …",
      "additionalNotes": "Zusätzliche Hinweise"
    },
    "labels": {
      "preferredPickupDate": "Bevorzugtes Abholdatum",
      "preferredDeliveryDate": "Bevorzugtes Lieferdatum",
      "shipmentType": "Sendungsart",
      "contactPreference": "Kontaktpräferenz"
    },
    "package": {
      "categoryLabel": "Kategorie",
      "categories": {
        "general": "Allgemeine Güter",
        "fragile": "Zerbrechlich",
        "perishable": "Verderblich",
        "hazardous": "Gefährlich (Genehmigung erforderlich)",
        "documents": "Dokumente"
      },
      "hazardousWarning": "Gefahrgut erfordert besondere Handhabung und Dokumentation. Unser Team wird Sie kontaktieren.",
      "customsClearance": "Diese Sendung erfordert eine Zollabfertigung"
    },
    "transport": {
      "air": "Lufttransport",
      "ground": "Straßentransport"
    },
    "shipmentTypes": {
      "standard": "Standard",
      "express": "Express (24–72 Std.)",
      "urgent": "Dringend (am selben/nexten Tag)"
    },
    "contactPreferences": {
      "email": "E-Mail",
      "sms": "SMS",
      "phone": "Telefonanruf"
    },
    "errors": {
      "senderName": "Absendername ist erforderlich",
      "senderPhone": "Absendertelefon ist erforderlich",
      "senderEmail": "Eine gültige Absender-E-Mail ist erforderlich",
      "senderAddress": "Absenderadresse ist erforderlich",
      "senderCity": "Absenderstadt ist erforderlich",
      "recipientName": "Empfängername ist erforderlich",
      "recipientPhone": "Empfängertelefon ist erforderlich",
      "recipientEmail": "Eine gültige Empfänger-E-Mail ist erforderlich",
      "recipientAddress": "Empfängeradresse ist erforderlich",
      "recipientCity": "Empfängerstadt ist erforderlich",
      "packageDescription": "Paketbeschreibung ist erforderlich",
      "weight": "Gewicht muss mindestens 0,1 kg betragen",
      "length": "Länge muss mindestens 1 cm betragen",
      "width": "Breite muss mindestens 1 cm betragen",
      "height": "Höhe muss mindestens 1 cm betragen",
      "customsContents": "Zollinhaltserklärung ist erforderlich",
      "submitFailed": "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
    },
    "success": {
      "message": "Anfrage erfolgreich gesendet! Ihre Sendungs-ID lautet: {{id}}"
    },
    "submitting": "Anfrage wird gesendet …",
    "submitButton": "Sendungsanfrage absenden",
    "help": {
      "reviewTime": "Nach der Übermittlung prüft unser Logistikteam Ihre Anfrage und sendet Ihnen innerhalb von 2 Werkstunden ein bestätigtes Angebot.",
      "urgentHelp": "📞 Dringende Hilfe benötigt? Rufen Sie uns an unter +1 (800) SWIFT-123"
    }
  }
},
es: {
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "quote": "Obtener presupuesto",
    "track": "Rastrear envío",
    "about": "Acerca de",
    "contact": "Contacto",
    "dashboard": "Panel",
    "login": "Iniciar sesión",
    "signup": "Registrarse",
    "signout": "Cerrar sesión"
  },
  "logins": {
    "loginTitle": "Iniciar sesión en tu cuenta",
    "noAccount": "¿No tienes una cuenta?",
    "signupNow": "Regístrate",
    "emailLabel": "Dirección de correo electrónico",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "Contraseña",
    "passwordPlaceholder": "Ingresa tu contraseña",
    "signupTitle": "Crear una nueva cuenta",
    "haveAccount": "¿Ya tienes una cuenta?",
    "loginNow": "Iniciar sesión",
    "signupButton": "Registrarse",
    "loginButton": "Iniciar sesión",
    "loggingIn": "Iniciando sesión..."
  },
  "documents": {
    "pageTitle": "Mis documentos",
    "metaDescription": "Descarga tus facturas, contratos y documentos de envío.",
    "title": "Mis documentos",
    "subtitle": "Accede y descarga todos tus documentos relacionados con envíos en un solo lugar.",
    "download": "Descargar",
    "empty": {
      "title": "Aún no hay documentos",
      "description": "No has generado ninguna factura ni contrato todavía. Aparecerán aquí cuando estén disponibles."
    },
    "types": {
      "invoice": "Factura de envío",
      "contract": "Contrato de servicio",
      "receipt": "Recibo de pago",
      "waybill": "Guía de carga"
    },
    "success": {
      "downloadedTitle": "Descarga iniciada",
      "downloadedDesc": "{{name}} se está descargando..."
    },
    "errors": {
      "title": "Error con los documentos",
      "fetchFailed": "No se pudieron cargar tus documentos. Por favor, inténtalo más tarde.",
      "downloadFailed": "No se pudo descargar el documento.",
      "noDownloadUrl": "Este documento no está disponible para su descarga."
    }
  },
  "billing": {
    "pageTitle": "Facturación y facturas",
    "metaDescription": "Gestiona tu suscripción a SwiftParcel, consulta facturas y descarga recibos.",
    "title": "Facturación y facturas",
    "subtitle": "Haz un seguimiento de tus pagos, gestiona tu plan y accede a todos tus documentos financieros.",
    "viewAllDocuments": "Ver todos los documentos",
    "subscription": {
      "title": "Plan actual",
      "description": "Detalles de tu suscripción activa",
      "basicPlan": "Plan básico",
      "none": "No tienes una suscripción activa."
    },
    "status": {
      "active": "Activo",
      "pastDue": "Vencido",
      "canceled": "Cancelado",
      "inactive": "Inactivo"
    },
    "invoices": {
      "title": "Facturas recientes",
      "viewAll": "Ver todas",
      "empty": {
        "title": "Aún no hay facturas",
        "description": "Tus facturas aparecerán aquí después de realizar un pago."
      }
    },
    "invoice": {
      "defaultDesc": "Factura de envío"
    },
    "errors": {
      "title": "Error de facturación",
      "fetchFailed": "No se pudo cargar la información de facturación. Por favor, inténtalo más tarde."
    }
  },
  "login": {
    "loginTitlePage": "Iniciar sesión",
    "signupTitlePage": "Registrarse",
    "metaDescription": "Accede de forma segura a tu cuenta de SwiftParcel.",
    "loginTitle": "Bienvenido de nuevo",
    "signupTitle": "Crea tu cuenta",
    "emailLabel": "Correo electrónico",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "Contraseña",
    "passwordPlaceholder": "••••••••",
    "loginButton": "Iniciar sesión",
    "signupButton": "Registrarse",
    "loginWithGoogle": "Continuar con Google",
    "signupWithGoogle": "Registrarse con Google",
    "orContinueWith": "o continúa con correo electrónico",
    "loginNow": "Iniciar sesión ahora",
    "signupNow": "Registrarse ahora",
    "haveAccount": "¿Ya tienes una cuenta?",
    "noAccount": "¿No tienes una cuenta?",
    "rememberMe": "Recordarme",
    "forgotPassword": {
      "link": "¿Olvidaste tu contraseña?",
      "title": "Restablece tu contraseña",
      "description": "Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",
      "sendButton": "Enviar enlace",
      "sending": "Enviando...",
      "successTitle": "Revisa tu bandeja de entrada",
      "successDesc": "Hemos enviado un enlace de restablecimiento a {{email}}.",
      "errorTitle": "No se pudo enviar el enlace",
      "errorDesc": "Por favor, verifica tu correo electrónico e inténtalo de nuevo.",
      "backToLogin": "Volver al inicio de sesión"
    },
    "errors": {
      "title": "Autenticación fallida",
      "generic": "Ocurrió un error inesperado.",
      "emailInUse": "Este correo electrónico ya está registrado.",
      "invalidEmail": "Por favor, introduce un correo electrónico válido.",
      "invalidCredentials": "Correo electrónico o contraseña incorrectos.",
      "weakPassword": "La contraseña debe tener al menos 6 caracteres.",
      "tooManyRequests": "Demasiados intentos. Por favor, espera.",
      "emailRequired": "El correo electrónico es obligatorio.",
      "googleFailed": "Error al iniciar sesión con Google",
      "tryAgain": "Por favor, inténtalo de nuevo."
    },
    "success": {
      "loginTitle": "Sesión iniciada",
      "loginDesc": "Redirigiendo a tu panel...",
      "signupTitle": "¡Cuenta creada!",
      "signupDesc": "Por favor, verifica tu correo electrónico antes de iniciar sesión.",
      "googleLogin": "Sesión iniciada con Google"
    },
    "loggingIn": "Iniciando sesión...",
    "signingUp": "Creando cuenta...",
    "footer": "Seguro. Confiable. Rápido."
  },
  "home": {
    "heroTitle": "¡El envío sin complicaciones comienza aquí!",
    "heroSubtitle": "Soluciones de envío rápidas, confiables y seguras para empresas en todo el mundo. Recibe tus envíos a tiempo, siempre.",
    "getQuote": "Obtener presupuesto gratuito",
    "viewDemo": "Ver demostración",
    "whyChoose": "¿Por qué elegir SwiftParcel?",
    "whyChooseSub": "Ofrecemos soluciones integrales de envío adaptadas a las necesidades de tu negocio",
    "securePkg": "Empaque seguro",
    "securePkgDesc": "Soluciones profesionales de empaque para todo tipo de carga",
    "fastDelivery": "Entrega rápida",
    "fastDeliveryDesc": "Opciones de envío exprés para cumplir con tus plazos",
    "insured": "Envíos asegurados",
    "insuredDesc": "Cobertura de seguro completa para mayor tranquilidad",
    "support": "Soporte 24/7",
    "supportDesc": "Servicio al cliente y rastreo disponibles las 24 horas"
  },
  "track": {
    "title": "Rastrea tu envío",
    "subtitle": "Ingresa tu número de seguimiento para obtener actualizaciones en tiempo real",
    "placeholder": "Ingresa el ID de seguimiento (ej. SP1234567890)",
    "button": "Rastrear",
    "tracking": "Rastreando...",
    "details": "Detalles del envío",
    "status": "Estado",
    "customer": "Cliente",
    "contact": "Contacto",
    "destination": "Destino",
    "address": "Dirección de envío",
    "packageInfo": "Información del paquete",
    "created": "Creado",
    "updated": "Última actualización"
  },
  "about": {
    "title": "Acerca de SwiftParcel",
    "teamTitle": "Nuestro equipo",
    "subtitle": "Tu socio de confianza en logística global y soluciones de envío desde 2010",
    "storyTitle": "Nuestra historia",
    "storyText1": "SwiftParcel nació con una visión sencilla pero poderosa: hacer que el envío internacional sea accesible, confiable y sin estrés para empresas de todos los tamaños.",
    "storyText2": "A lo largo de los años, hemos gestionado millones de envíos, ayudado a miles de empresas a expandirse internacionalmente y construido una reputación de excelencia.",
    "storyDesc1": "SwiftParcel nació con una visión sencilla pero poderosa: hacer que el envío internacional sea accesible, confiable y sin estrés para empresas de todos los tamaños.",
    "storyDesc2": "A lo largo de los años, hemos gestionado millones de envíos, ayudado a miles de empresas a expandirse internacionalmente y construido una reputación de excelencia.",
    "mission": "Nuestra misión",
    "missionDesc": "Brindar soluciones de envío fluidas, confiables y eficientes.",
    "team": "Nuestro equipo",
    "teamDesc": "Un equipo dedicado de profesionales en logística con décadas de experiencia.",
    "commitment": "Nuestro compromiso",
    "commitmentDesc": "Estamos comprometidos con la excelencia, la transparencia y la construcción de relaciones a largo plazo.",
    "reach": "Alcance global",
    "reachDesc": "Con socios en más de 150 países, garantizamos que tu carga llegue de forma segura.",
    "missionTitle": "Misión",
    "visionTitle": "Visión",
    "valuesTitle": "Valores",
    "awardTitle": "Premios",
    "stats": {
      "countries": "Países atendidos",
      "shipments": "Envíos entregados",
      "clients": "Clientes satisfechos",
      "ontime": "Entregas puntuales"
    }
  },
  "contact": {
    "title": "Contáctanos",
    "subtitle": "Nuestro equipo global está listo para ayudarte. Escríbenos a una de nuestras oficinas regionales o usa nuestros canales de soporte especializados.",
    "howToReach": "Cómo contactarnos",
    "regionalOffices": "Oficinas regionales",
    "regionalContact": "Contactos regionales",
    "general": "Consultas generales",
    "generalDesc": "Para preguntas generales sobre nuestros servicios, alianzas e información corporativa.",
    "supportTitle": "Soporte al cliente",
    "supportDesc": "Asistencia 24/7 con rastreo, problemas de cuenta y envíos.",
    "sales": "Ventas y presupuestos",
    "salesDesc": "Obtén cotizaciones personalizadas para envíos voluminosos y alianzas comerciales.",
    "shipping": "Operaciones de envío",
    "shippingDesc": "Preguntas técnicas sobre aduanas, artículos restringidos y normas de empaque.",
    "formTitle": "Envía un mensaje",
    "formName": "Nombre",
    "formEmail": "Correo electrónico",
    "formSubject": "Asunto",
    "formMessage": "Mensaje"
  },
  
  "footer": {
    "logoAlt": "Logotipo de SwiftParcel",
    "description": "Soluciones de envío sin complicaciones para las necesidades de tu negocio en todo el mundo.",
    "supportButton": "Disponibilidad de soporte global",
    "quickLinks": "Enlaces rápidos",
    "contact": "Contacto",
    "legal": "Legal",
    "terms": "Términos de servicio",
    "privacy": "Política de privacidad",
    "cookies": "Cookies y privacidad",
    "allRightsReserved": "Todos los derechos reservados.",
    "soc2": "Cumple con SOC 2 Tipo II",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "Nuestros servicios",
    "metaDescription": "Explora los servicios integrales de envío de SwiftParcel, incluyendo carga aérea, carga marítima, transporte terrestre y soluciones de almacenamiento.",
    "heroTitle": "Nuestros servicios de envío",
    "heroSubtitle": "Soluciones logísticas integrales diseñadas para satisfacer las necesidades de tu negocio",
    "keyFeatures": "Características principales:",
    "learnMore": "Más información",
    "airFreight": {
      "title": "Carga aérea",
      "description": "Servicios de carga aérea rápidos y eficientes para envíos urgentes. Trabajamos con las principales aerolíneas para garantizar que tus mercancías lleguen a su destino de forma rápida y segura.",
      "features": {
        "express": "Opciones de entrega exprés",
        "worldwide": "Cobertura mundial",
        "tracking": "Seguimiento en tiempo real",
        "temperature": "Opciones con control de temperatura"
      }
    },
    "oceanFreight": {
      "title": "Carga marítima",
      "description": "Soluciones de envío marítimo rentables para cargas de gran volumen. Ideal para empresas que desean transportar mercancías internacionalmente a tarifas competitivas.",
      "features": {
        "fcl": "Cargas completas de contenedor (FCL)",
        "lcl": "Cargas menores a un contenedor (LCL)",
        "doorToDoor": "Servicio puerta a puerta",
        "customs": "Asistencia en despacho aduanero"
      }
    },
    "groundTransport": {
      "title": "Transporte terrestre",
      "description": "Servicios confiables de transporte terrestre nacional e internacional. Perfecto para entregas regionales y necesidades de transporte por carretera.",
      "features": {
        "sameDay": "Opciones de entrega el mismo día",
        "regional": "Distribución regional",
        "fleet": "Flota dedicada",
        "scheduling": "Programación flexible"
      }
    },
    "warehousing": {
      "title": "Almacenamiento y logística",
      "description": "Soluciones integrales de almacenamiento con gestión de inventario. Almacena tus productos en nuestras instalaciones seguras con monitoreo las 24 horas.",
      "features": {
        "climate": "Almacenamiento con control climático",
        "inventory": "Gestión de inventario",
        "pickPack": "Servicios de preparación y empaque",
        "distribution": "Apoyo en distribución"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 Función próximamente",
    "featureComingSoon": "¡Esta función aún no está implementada, pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
  },
  "quote": {
    "pageTitle": "Obtener un presupuesto",
    "metaDescription": "Solicita un presupuesto de envío de SwiftParcel. Completa nuestro sencillo formulario y recibe una cotización competitiva para tus necesidades de envío de carga.",
    "heroTitle": "Obtén un presupuesto gratuito",
    "heroSubtitle": "Completa el siguiente formulario y nos pondremos en contacto contigo con una cotización competitiva",
    "form": {
      "nameLabel": "Nombre",
      "namePlaceholder": "Juan Pérez",
      "companyLabel": "Empresa",
      "companyPlaceholder": "Nombre de la empresa (opcional)",
      "emailLabel": "Correo electrónico",
      "emailPlaceholder": "juan@example.com",
      "countryLabel": "País",
      "countryPlaceholder": "España",
      "contactLabel": "Número de contacto",
      "contactPlaceholder": "+34 600 123 456",
      "addressLabel": "Dirección de envío",
      "addressPlaceholder": "Ingresa la dirección de envío completa",
      "packageInfoLabel": "Información del paquete",
      "packageInfoPlaceholder": "Describe tu paquete (dimensiones, peso, contenido, requisitos especiales de manipulación)"
    },
    "submitting": "Enviando...",
    "submitButton": "Enviar solicitud de presupuesto",
    "success": {
      "title": "¡Presupuesto enviado con éxito! ✅",
      "description": "Tu ID de seguimiento es: {{trackingId}}. Nos comunicaremos contigo pronto con un presupuesto detallado."
    },
    "error": {
      "title": "Error al enviar",
      "generic": "Algo salió mal. Por favor, inténtalo de nuevo."
    }
  },
  "terms": {
    "pageTitle": "Términos de servicio",
    "title": "Términos de servicio",
    "intro": "Bienvenido a SwiftParcel. Al utilizar nuestro sitio web y nuestros servicios, aceptas cumplir y estar sujeto a los siguientes términos y condiciones.",
    "section1": {
      "title": "1. Uso del dominio",
      "content": "Todas las comunicaciones y servicios oficiales se realizan exclusivamente a través del dominio {{domain}}. SwiftParcel no opera bajo dominios .express ni otras extensiones. No somos responsables de comunicaciones originadas desde dominios no autorizados."
    },
    "section2": {
      "title": "2. Acuerdos de servicio",
      "content": "Las solicitudes de envío, presupuestos y servicios de seguimiento están sujetos a las leyes internacionales marítimas y aéreas. Los acuerdos de nivel de servicio (SLA) específicos se proporcionarán al formalizar el contrato."
    },
    "section3": {
      "title": "3. Cuentas de usuario",
      "content": "Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta. Toda actividad realizada bajo tu cuenta es de tu responsabilidad."
    }
  },
  "privacy": {
    "pageTitle": "Política de privacidad",
    "title": "Política de privacidad",
    "intro": "En SwiftParcel, priorizamos la protección de tus datos personales y empresariales. Esta política describe cómo recopilamos, utilizamos y salvaguardamos tu información.",
    "dataCollection": {
      "title": "Recopilación de datos",
      "content": "Recopilamos la información necesaria para facilitar la logística global de envíos, incluidas direcciones del remitente y destinatario, contenido de paquetes y datos de contacto. Todos los datos se procesan de forma segura."
    },
    "internationalTransfers": {
      "title": "Transferencias internacionales",
      "content": "Como proveedor global de logística que opera mediante {{domain}}, es posible que tus datos se transfieran a otros países para facilitar la entrega de envíos. Garantizamos que se aplican las salvaguardias adecuadas en todas las transferencias internacionales."
    }
  },
  "cookies": {
    "pageTitle": "Política de cookies",
    "title": "Política de cookies",
    "intro": "Esta política explica cómo SwiftParcel utiliza cookies y tecnologías similares para reconocerte cuando visitas nuestro sitio web en {{domain}}.",
    "whatAreCookies": {
      "title": "¿Qué son las cookies?",
      "content": "Las cookies son pequeños archivos de datos que se almacenan en tu ordenador o dispositivo móvil cuando visitas un sitio web. Son ampliamente utilizadas por los propietarios de sitios web para que sus páginas funcionen, lo hagan de forma más eficiente o para proporcionar información estadística."
    },
    "controllingCookies": {
      "title": "Gestión de cookies",
      "content": "Tienes derecho a decidir si aceptas o rechazas las cookies. Puedes ejercer este derecho configurando tus preferencias en el Gestor de Consentimiento de Cookies ubicado en el pie de página del sitio web."
    }
  },

  "dashboard": {
    "accessDenied": "Debes iniciar sesión para acceder al panel de control.",
    "signOutFailed": "Error al cerrar sesión. Por favor, inténtalo de nuevo.",
    "active": "Activo",
    "welcomeBack": "Bienvenido de nuevo"
  },
  "dash_nav": {
    "overview": "Resumen",
    "shipments": "Envíos",
    "newShipment": "Nuevo envío",
    "track": "Rastrear",
    "orders": "Pedidos",
    "messages": "Mensajes",
    "activity": "Actividad",
    "report": "Informe",
    "support": "Soporte",
    "account": "Cuenta",
    "billing": "Facturación",
    "documents": "Documentos",
    "settings": "Configuración",
    "homePage": "Página de inicio",
    "createShipment": "Crear envío",
    "signout": "Cerrar sesión",
    "myAccount": "Mi cuenta"
  },
  "common": {
    "user": "Usuario",
    "logoAlt": "Logotipo de SwiftParcel",
    "toggleNavigation": "Alternar navegación",
    "viewAll": "Ver todo"
  },
  "dashboardOverview": {
    "loading": "Cargando tu panel de logística...",
    "errors": {
      "fetchFailed": "No se pudieron cargar los datos del panel. Por favor, inténtalo de nuevo."
    },
    "empty": {
      "title": "Tu centro global de logística",
      "subtitle": "Gestiona envíos, rastrea entregas y escala tu negocio — todo en un solo lugar."
    },
    "actions": {
      "newShipmentDesc": "Crear y programar una nueva entrega",
      "trackDesc": "Monitorear el estado de entrega en tiempo real",
      "billingDesc": "Ver facturas e historial de pagos",
      "documentsDesc": "Acceder a etiquetas de envío y formularios aduaneros"
    },
    "stats": {
      "total": "Envíos totales",
      "pending": "Pendientes",
      "inTransit": "En tránsito",
      "delivered": "Entregados",
      "canceled": "Cancelados",
      "successRate": "Tasa de éxito"
    },
    "createFirstShipment": "Crea tu primer envío",
    "recentShipments": "Envíos recientes",
    "shipmentsPlaceholder": "El componente de lista de envíos se mostrará aquí.",
    "liveTracking": "Seguimiento en vivo",
    "trackingComingSoon": "Actualizaciones GPS en tiempo real próximamente.",
    "packageInsights": "Información del paquete",
    "insightsDescription": "Peso, dimensiones y datos aduaneros.",
    "globalNetwork": "Red global de entrega",
    "mapDescription": "Visualización de rutas en vivo impulsada por SwiftParcel Intelligence™"
  },
  "shipments": {
    "title": "Envíos",
    "subtitle": "Gestiona y rastrea todos tus envíos en un solo lugar",
    "loading": "Cargando envíos...",
    "errors": {
      "fetchFailed": "No se pudieron cargar los envíos. Por favor, inténtalo de nuevo."
    },
    "stats": {
      "total": "Envíos totales",
      "pending": "Pendientes",
      "inTransit": "En tránsito",
      "delivered": "Entregados",
      "canceled": "Cancelados"
    },
    "search": {
      "placeholder": "Buscar por ID de seguimiento, destino..."
    },
    "filter": {
      "status": "Estado",
      "allStatuses": "Todos los estados"
    },
    "status": {
      "pending": "Pendiente",
      "inTransit": "En tránsito",
      "delivered": "Entregado",
      "canceled": "Cancelado"
    },
    "actions": {
      "exportCSV": "Exportar CSV",
      "printLabels": "Imprimir etiquetas",
      "track": "Rastrear",
      "details": "Detalles"
    },
    "table": {
      "id": "ID del envío",
      "tracking": "Seguimiento",
      "route": "Ruta",
      "service": "Servicio",
      "weight": "Peso",
      "date": "Fecha",
      "estDelivery": "Entrega estimada",
      "actions": "Acciones"
    },
    "csv": {
      "id": "ID",
      "tracking": "Seguimiento",
      "from": "De",
      "to": "A",
      "service": "Servicio",
      "weight": "Peso (kg)",
      "date": "Fecha",
      "estDelivery": "Entrega estimada",
      "status": "Estado"
    },
    "print": {
      "title": "Etiquetas SwiftParcel",
      "tracking": "Seguimiento",
      "to": "A"
    },
    "noData": "No se encontraron envíos. Intenta ajustar tus filtros."
  },
  "newShipment": {
    "title": "Enviar solicitud de envío",
    "subtitle": "Revisaremos tus datos y te enviaremos una cotización confirmada en 2 horas hábiles.",
    "sections": {
      "pickupMethod": "1. Método de recolección",
      "addresses": "2. Direcciones",
      "packageInfo": "3. Información del paquete",
      "transportSchedule": "4. Transporte y programación"
    },
    "pickup": {
      "dropoffTitle": "Entrega en centro",
      "dropoffDesc": "Lleva tu paquete a uno de nuestros centros locales",
      "pickupTitle": "Programar recolección",
      "pickupDesc": "Recogeremos desde tu ubicación"
    },
    "addresses": {
      "sender": "Remitente (recolección)",
      "recipient": "Destinatario (entrega)",
      "businessLocation": "Ubicación comercial"
    },
    "placeholders": {
      "fullName": "Nombre completo",
      "phone": "Teléfono",
      "email": "Correo electrónico",
      "streetAddress": "Dirección",
      "city": "Ciudad",
      "zip": "Código postal",
      "packageDescription": "Describe el contenido (p. ej., electrónicos, ropa, maquinaria)",
      "declaredValue": "Valor declarado (para seguro)",
      "customsContents": "Lista todos los artículos, cantidades y valores...",
      "specialInstructions": "Instrucciones o requisitos especiales...",
      "additionalNotes": "Notas adicionales"
    },
    "labels": {
      "preferredPickupDate": "Fecha preferida de recolección",
      "preferredDeliveryDate": "Fecha preferida de entrega",
      "shipmentType": "Tipo de envío",
      "contactPreference": "Preferencia de contacto"
    },
    "package": {
      "categoryLabel": "Categoría",
      "categories": {
        "general": "Mercancías generales",
        "fragile": "Fragil",
        "perishable": "Perecedero",
        "hazardous": "Peligroso (requiere aprobación)",
        "documents": "Documentos"
      },
      "hazardousWarning": "Los materiales peligrosos requieren manipulación y documentación especial. Nuestro equipo se pondrá en contacto contigo.",
      "customsClearance": "Este envío requiere despacho aduanero"
    },
    "transport": {
      "air": "Transporte aéreo",
      "ground": "Transporte terrestre"
    },
    "shipmentTypes": {
      "standard": "Estándar",
      "express": "Exprés (24–72 h)",
      "urgent": "Urgente (mismo día/día siguiente)"
    },
    "contactPreferences": {
      "email": "Correo electrónico",
      "sms": "SMS",
      "phone": "Llamada telefónica"
    },
    "errors": {
      "senderName": "El nombre del remitente es obligatorio",
      "senderPhone": "El teléfono del remitente es obligatorio",
      "senderEmail": "Se requiere un correo electrónico válido del remitente",
      "senderAddress": "La dirección del remitente es obligatoria",
      "senderCity": "La ciudad del remitente es obligatoria",
      "recipientName": "El nombre del destinatario es obligatorio",
      "recipientPhone": "El teléfono del destinatario es obligatorio",
      "recipientEmail": "Se requiere un correo electrónico válido del destinatario",
      "recipientAddress": "La dirección del destinatario es obligatoria",
      "recipientCity": "La ciudad del destinatario es obligatoria",
      "packageDescription": "La descripción del paquete es obligatoria",
      "weight": "El peso debe ser al menos 0,1 kg",
      "length": "La longitud debe ser al menos 1 cm",
      "width": "El ancho debe ser al menos 1 cm",
      "height": "La altura debe ser al menos 1 cm",
      "customsContents": "La declaración de contenido aduanero es obligatoria",
      "submitFailed": "Error al enviar la solicitud. Por favor, inténtalo de nuevo."
    },
    "success": {
      "message": "¡Solicitud enviada con éxito! Tu ID de envío es: {{id}}"
    },
    "submitting": "Enviando solicitud...",
    "submitButton": "Enviar solicitud de envío",
    "help": {
      "reviewTime": "Después del envío, nuestro equipo de logística revisará tu solicitud y te enviará una cotización confirmada en 2 horas hábiles.",
      "urgentHelp": "📞 ¿Necesitas ayuda urgente? Llámanos al +1 (800) SWIFT-123"
    }
  }
},
fr: {
  "nav": {
    "home": "Accueil",
    "services": "Services",
    "quote": "Obtenir un devis",
    "track": "Suivre un envoi",
    "about": "À propos",
    "contact": "Contact",
    "dashboard": "Tableau de bord",
    "login": "Se connecter",
    "signup": "S’inscrire",
    "signout": "Se déconnecter"
  },
  "logins": {
    "loginTitle": "Connectez-vous à votre compte",
    "noAccount": "Vous n’avez pas de compte ?",
    "signupNow": "Inscrivez-vous",
    "emailLabel": "Adresse e-mail",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "Mot de passe",
    "passwordPlaceholder": "Saisissez votre mot de passe",
    "signupTitle": "Créer un nouveau compte",
    "haveAccount": "Vous avez déjà un compte ?",
    "loginNow": "Se connecter",
    "signupButton": "S’inscrire",
    "loginButton": "Se connecter",
    "loggingIn": "Connexion en cours…"
  },
  "documents": {
    "pageTitle": "Mes documents",
    "metaDescription": "Téléchargez vos factures, contrats et documents d’expédition.",
    "title": "Mes documents",
    "subtitle": "Accédez et téléchargez tous vos documents liés à l’expédition en un seul endroit.",
    "download": "Télécharger",
    "empty": {
      "title": "Aucun document pour le moment",
      "description": "Vous n’avez pas encore généré de factures ni de contrats. Ils apparaîtront ici dès qu’ils seront disponibles."
    },
    "types": {
      "invoice": "Facture d’expédition",
      "contract": "Contrat de service",
      "receipt": "Reçu de paiement",
      "waybill": "Lettre de transport"
    },
    "success": {
      "downloadedTitle": "Téléchargement lancé",
      "downloadedDesc": "{{name}} est en cours de téléchargement…"
    },
    "errors": {
      "title": "Erreur concernant les documents",
      "fetchFailed": "Impossible de charger vos documents. Veuillez réessayer plus tard.",
      "downloadFailed": "Échec du téléchargement du document.",
      "noDownloadUrl": "Ce document n’est pas disponible au téléchargement."
    }
  },
  "billing": {
    "pageTitle": "Facturation et factures",
    "metaDescription": "Gérez votre abonnement SwiftParcel, consultez vos factures et téléchargez vos reçus.",
    "title": "Facturation et factures",
    "subtitle": "Suivez vos paiements, gérez votre formule et accédez à tous vos documents financiers.",
    "viewAllDocuments": "Voir tous les documents",
    "subscription": {
      "title": "Formule actuelle",
      "description": "Détails de votre abonnement actif",
      "basicPlan": "Formule de base",
      "none": "Vous n’avez aucun abonnement actif."
    },
    "status": {
      "active": "Actif",
      "pastDue": "En retard",
      "canceled": "Annulé",
      "inactive": "Inactif"
    },
    "invoices": {
      "title": "Factures récentes",
      "viewAll": "Voir tout",
      "empty": {
        "title": "Aucune facture pour le moment",
        "description": "Vos factures apparaîtront ici après votre premier paiement."
      }
    },
    "invoice": {
      "defaultDesc": "Facture d’expédition"
    },
    "errors": {
      "title": "Erreur de facturation",
      "fetchFailed": "Impossible de charger les informations de facturation. Veuillez réessayer plus tard."
    }
  },
  "login": {
    "loginTitlePage": "Connexion",
    "signupTitlePage": "Inscription",
    "metaDescription": "Accédez en toute sécurité à votre compte SwiftParcel.",
    "loginTitle": "Content de vous revoir",
    "signupTitle": "Créez votre compte",
    "emailLabel": "Adresse e-mail",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "Mot de passe",
    "passwordPlaceholder": "••••••••",
    "loginButton": "Se connecter",
    "signupButton": "S’inscrire",
    "loginWithGoogle": "Continuer avec Google",
    "signupWithGoogle": "S’inscrire avec Google",
    "orContinueWith": "ou continuez avec votre e-mail",
    "loginNow": "Se connecter maintenant",
    "signupNow": "S’inscrire maintenant",
    "haveAccount": "Vous avez déjà un compte ?",
    "noAccount": "Vous n’avez pas de compte ?",
    "rememberMe": "Se souvenir de moi",
    "forgotPassword": {
      "link": "Mot de passe oublié ?",
      "title": "Réinitialisez votre mot de passe",
      "description": "Saisissez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
      "sendButton": "Envoyer le lien",
      "sending": "Envoi en cours…",
      "successTitle": "Vérifiez votre boîte de réception",
      "successDesc": "Nous avons envoyé un lien de réinitialisation à {{email}}.",
      "errorTitle": "Impossible d’envoyer le lien",
      "errorDesc": "Veuillez vérifier votre adresse e-mail et réessayer.",
      "backToLogin": "Retour à la connexion"
    },
    "errors": {
      "title": "Échec de l’authentification",
      "generic": "Une erreur inattendue s’est produite.",
      "emailInUse": "Cette adresse e-mail est déjà utilisée.",
      "invalidEmail": "Veuillez saisir une adresse e-mail valide.",
      "invalidCredentials": "E-mail ou mot de passe incorrect.",
      "weakPassword": "Le mot de passe doit comporter au moins 6 caractères.",
      "tooManyRequests": "Trop de tentatives. Veuillez patienter.",
      "emailRequired": "L’adresse e-mail est obligatoire.",
      "googleFailed": "Échec de la connexion via Google",
      "tryAgain": "Veuillez réessayer."
    },
    "success": {
      "loginTitle": "Connecté",
      "loginDesc": "Redirection vers votre tableau de bord…",
      "signupTitle": "Compte créé !",
      "signupDesc": "Veuillez vérifier votre e-mail avant de vous connecter.",
      "googleLogin": "Connecté avec Google"
    },
    "loggingIn": "Connexion en cours…",
    "signingUp": "Création du compte en cours…",
    "footer": "Sécurisé. Fiable. Rapide."
  },
  "home": {
    "heroTitle": "L’expédition fluide commence ici !",
    "heroSubtitle": "Des solutions d’expédition rapides, fiables et sécurisées pour les entreprises du monde entier. Vos colis sont livrés à temps, à chaque fois.",
    "getQuote": "Obtenir un devis gratuit",
    "viewDemo": "Voir la démo",
    "whyChoose": "Pourquoi choisir SwiftParcel ?",
    "whyChooseSub": "Nous proposons des solutions d’expédition complètes, adaptées aux besoins de votre entreprise",
    "securePkg": "Emballage sécurisé",
    "securePkgDesc": "Solutions professionnelles d’emballage pour tous les types de marchandises",
    "fastDelivery": "Livraison rapide",
    "fastDeliveryDesc": "Options d’expédition express pour respecter vos délais",
    "insured": "Envois assurés",
    "insuredDesc": "Couverture d’assurance complète pour plus de tranquillité",
    "support": "Assistance 24/7",
    "supportDesc": "Service client et suivi disponibles 24h/24 et 7j/7"
  },
  "track": {
    "title": "Suivez votre envoi",
    "subtitle": "Saisissez votre numéro de suivi pour obtenir des mises à jour en temps réel",
    "placeholder": "Saisissez l’identifiant de suivi (ex. : SP1234567890)",
    "button": "Suivre",
    "tracking": "Suivi en cours…",
    "details": "Détails de l’envoi",
    "status": "Statut",
    "customer": "Client",
    "contact": "Contact",
    "destination": "Destination",
    "address": "Adresse de livraison",
    "packageInfo": "Informations sur le colis",
    "created": "Créé le",
    "updated": "Dernière mise à jour"
  },
  "about": {
    "title": "À propos de SwiftParcel",
    "teamTitle": "Notre équipe",
    "subtitle": "Votre partenaire de confiance en logistique mondiale et solutions d’expédition depuis 2010",
    "storyTitle": "Notre histoire",
    "storyText1": "SwiftParcel a été fondé avec une vision simple mais puissante : rendre l’expédition internationale accessible, fiable et sans stress pour les entreprises de toutes tailles.",
    "storyText2": "Au fil des ans, nous avons traité des millions d’envois, aidé des milliers d’entreprises à se développer à l’international et acquis une solide réputation d’excellence.",
    "storyDesc1": "SwiftParcel a été fondé avec une vision simple mais puissante : rendre l’expédition internationale accessible, fiable et sans stress pour les entreprises de toutes tailles.",
    "storyDesc2": "Au fil des ans, nous avons traité des millions d’envois, aidé des milliers d’entreprises à se développer à l’international et acquis une solide réputation d’excellence.",
    "mission": "Notre mission",
    "missionDesc": "Fournir des solutions d’expédition fluides, fiables et efficaces.",
    "team": "Notre équipe",
    "teamDesc": "Une équipe dévouée de professionnels de la logistique ayant des décennies d’expérience.",
    "commitment": "Notre engagement",
    "commitmentDesc": "Nous nous engageons en faveur de l’excellence, de la transparence et de relations durables.",
    "reach": "Présence mondiale",
    "reachDesc": "Grâce à nos partenariats dans plus de 150 pays, nous garantissons que vos marchandises arrivent à bon port.",
    "missionTitle": "Mission",
    "visionTitle": "Vision",
    "valuesTitle": "Valeurs",
    "awardTitle": "Récompenses",
    "stats": {
      "countries": "Pays desservis",
      "shipments": "Envois livrés",
      "clients": "Clients satisfaits",
      "ontime": "Livraisons à temps"
    }
  },
  "contact": {
    "title": "Contactez-nous",
    "subtitle": "Notre équipe mondiale est prête à vous aider. Contactez l’un de nos bureaux régionaux ou utilisez nos canaux dédiés.",
    "howToReach": "Comment nous contacter",
    "regionalOffices": "Bureaux régionaux",
    "regionalContact": "Contacts régionaux",
    "general": "Demandes générales",
    "generalDesc": "Pour toute question générale sur nos services, partenariats ou informations sur l’entreprise.",
    "supportTitle": "Support client",
    "supportDesc": "Assistance 24h/24 et 7j/7 pour le suivi, les problèmes de compte et les envois.",
    "sales": "Ventes et devis",
    "salesDesc": "Obtenez des devis personnalisés pour les envois en grand volume et les partenariats commerciaux.",
    "shipping": "Opérations d’expédition",
    "shippingDesc": "Questions techniques sur les douanes, les articles restreints et les consignes d’emballage.",
    "formTitle": "Envoyez un message",
    "formName": "Nom",
    "formEmail": "E-mail",
    "formSubject": "Objet",
    "formMessage": "Message"
  },
  
  "footer": {
    "logoAlt": "Logo SwiftParcel",
    "description": "Des solutions d’expédition fluides pour répondre aux besoins de votre entreprise à l’échelle mondiale.",
    "supportButton": "Disponibilité du support mondial",
    "quickLinks": "Liens rapides",
    "contact": "Contact",
    "legal": "Mentions légales",
    "terms": "Conditions d’utilisation",
    "privacy": "Politique de confidentialité",
    "cookies": "Cookies et confidentialité",
    "allRightsReserved": "Tous droits réservés.",
    "soc2": "Conforme SOC 2 Type II",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "Nos services",
    "metaDescription": "Découvrez les services complets d’expédition de SwiftParcel, incluant le fret aérien, le fret maritime, le transport routier et les solutions d’entreposage.",
    "heroTitle": "Nos services d’expédition",
    "heroSubtitle": "Des solutions logistiques complètes conçues pour répondre aux besoins de votre entreprise",
    "keyFeatures": "Principales fonctionnalités :",
    "learnMore": "En savoir plus",
    "airFreight": {
      "title": "Fret aérien",
      "description": "Des services de fret aérien rapides et efficaces pour les envois urgents. Nous collaborons avec les principales compagnies aériennes afin que vos marchandises atteignent leur destination rapidement et en toute sécurité.",
      "features": {
        "express": "Options d’expédition express",
        "worldwide": "Couverture mondiale",
        "tracking": "Suivi en temps réel",
        "temperature": "Options à température contrôlée"
      }
    },
    "oceanFreight": {
      "title": "Fret maritime",
      "description": "Des solutions de transport maritime économiques pour les cargaisons volumineuses. Idéal pour les entreprises souhaitant expédier des marchandises à l’international à des tarifs compétitifs.",
      "features": {
        "fcl": "Chargements complets (FCL)",
        "lcl": "Chargements partiels (LCL)",
        "doorToDoor": "Service porte-à-porte",
        "customs": "Assistance au dédouanement"
      }
    },
    "groundTransport": {
      "title": "Transport routier",
      "description": "Des services fiables de transport terrestre national et transfrontalier. Parfait pour les livraisons régionales et les besoins de transport terrestre.",
      "features": {
        "sameDay": "Options de livraison le jour même",
        "regional": "Distribution régionale",
        "fleet": "Flotte dédiée",
        "scheduling": "Planification flexible"
      }
    },
    "warehousing": {
      "title": "Entreposage et logistique",
      "description": "Des solutions complètes d’entreposage avec gestion des stocks. Stockez vos produits dans nos installations sécurisées avec surveillance 24h/24.",
      "features": {
        "climate": "Stockage à température contrôlée",
        "inventory": "Gestion des stocks",
        "pickPack": "Services de préparation et d’emballage",
        "distribution": "Soutien à la distribution"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 Fonctionnalité à venir",
    "featureComingSoon": "Cette fonctionnalité n’est pas encore implémentée – mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀"
  },
  "quote": {
    "pageTitle": "Obtenir un devis",
    "metaDescription": "Demandez un devis d’expédition auprès de SwiftParcel. Remplissez notre formulaire simple et recevez une offre compétitive pour vos besoins d’expédition de fret.",
    "heroTitle": "Obtenez un devis gratuit",
    "heroSubtitle": "Remplissez le formulaire ci-dessous et nous vous recontacterons avec une offre compétitive",
    "form": {
      "nameLabel": "Nom",
      "namePlaceholder": "Jean Dupont",
      "companyLabel": "Entreprise",
      "companyPlaceholder": "Nom de l’entreprise (facultatif)",
      "emailLabel": "E-mail",
      "emailPlaceholder": "jean@example.com",
      "countryLabel": "Pays",
      "countryPlaceholder": "France",
      "contactLabel": "Numéro de téléphone",
      "contactPlaceholder": "+33 6 12 34 56 78",
      "addressLabel": "Adresse d’expédition",
      "addressPlaceholder": "Saisissez l’adresse complète d’expédition",
      "packageInfoLabel": "Informations sur le colis",
      "packageInfoPlaceholder": "Décrivez votre colis (dimensions, poids, contenu, exigences spéciales de manutention)"
    },
    "submitting": "Envoi en cours…",
    "submitButton": "Envoyer la demande de devis",
    "success": {
      "title": "Devis envoyé avec succès ! ✅",
      "description": "Votre identifiant de suivi est : {{trackingId}}. Nous vous contacterons prochainement avec un devis détaillé."
    },
    "error": {
      "title": "Échec de l’envoi",
      "generic": "Une erreur s’est produite. Veuillez réessayer."
    }
  },
  "terms": {
    "pageTitle": "Conditions d’utilisation",
    "title": "Conditions d’utilisation",
    "intro": "Bienvenue chez SwiftParcel. En utilisant notre site web et nos services, vous acceptez de respecter et d’être lié(e) par les conditions suivantes.",
    "section1": {
      "title": "1. Utilisation du domaine",
      "content": "Toutes les communications et services officiels sont exclusivement assurés via le domaine {{domain}}. SwiftParcel n’opère sous aucun autre domaine tel que .express ou autres extensions. Nous ne sommes pas responsables des communications provenant de domaines non autorisés."
    },
    "section2": {
      "title": "2. Accords de service",
      "content": "Les demandes d’expédition, les devis et les services de suivi sont soumis aux lois internationales maritimes et aériennes. Des accords de niveau de service (SLA) spécifiques vous seront fournis lors de la conclusion du contrat."
    },
    "section3": {
      "title": "3. Comptes utilisateurs",
      "content": "Vous êtes responsable de la confidentialité de vos identifiants de compte. Toute activité effectuée depuis votre compte relève de votre responsabilité."
    }
  },
  "privacy": {
    "pageTitle": "Politique de confidentialité",
    "title": "Politique de confidentialité",
    "intro": "Chez SwiftParcel, nous accordons la priorité à la protection de vos données personnelles et professionnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
    "dataCollection": {
      "title": "Collecte de données",
      "content": "Nous recueillons les informations nécessaires à la gestion logistique internationale, notamment les adresses de l’expéditeur et du destinataire, le contenu des colis et les coordonnées de contact. Toutes les données sont traitées de manière sécurisée."
    },
    "internationalTransfers": {
      "title": "Transferts internationaux",
      "content": "En tant que prestataire logistique mondial opérant via {{domain}}, vos données peuvent être transférées à l’étranger afin de faciliter la livraison des envois. Nous veillons à ce que des garanties appropriées soient en place pour tous les transferts internationaux."
    }
  },
  "cookies": {
    "pageTitle": "Politique relative aux cookies",
    "title": "Politique relative aux cookies",
    "intro": "Cette politique explique comment SwiftParcel utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web à l’adresse {{domain}}.",
    "whatAreCookies": {
      "title": "Qu’est-ce qu’un cookie ?",
      "content": "Les cookies sont de petits fichiers de données placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Ils sont largement utilisés par les propriétaires de sites afin de faire fonctionner leurs sites, de les rendre plus efficaces, ou pour fournir des informations statistiques."
    },
    "controllingCookies": {
      "title": "Gestion des cookies",
      "content": "Vous avez le droit de décider d’accepter ou de refuser les cookies. Vous pouvez exercer ce droit en configurant vos préférences via le gestionnaire de consentement aux cookies situé en bas de page du site web."
    }
  },

  "dashboard": {
    "accessDenied": "Vous devez être connecté pour accéder au tableau de bord.",
    "signOutFailed": "Échec de la déconnexion. Veuillez réessayer.",
    "active": "Actif",
    "welcomeBack": "Content de vous revoir"
  },
  "dash_nav": {
    "overview": "Aperçu",
    "shipments": "Envois",
    "newShipment": "Nouvel envoi",
    "track": "Suivre",
    "orders": "Commandes",
    "messages": "Messages",
    "activity": "Activité",
    "report": "Rapport",
    "support": "Support",
    "account": "Compte",
    "billing": "Facturation",
    "documents": "Documents",
    "settings": "Paramètres",
    "homePage": "Accueil",
    "createShipment": "Créer un envoi",
    "signout": "Se déconnecter",
    "myAccount": "Mon compte"
  },
  "common": {
    "user": "Utilisateur",
    "logoAlt": "Logo SwiftParcel",
    "toggleNavigation": "Basculer la navigation",
    "viewAll": "Voir tout"
  },
  "dashboardOverview": {
    "loading": "Chargement de votre tableau de bord logistique…",
    "errors": {
      "fetchFailed": "Impossible de charger les données du tableau de bord. Veuillez réessayer."
    },
    "empty": {
      "title": "Votre centre logistique mondial",
      "subtitle": "Gérez vos envois, suivez vos livraisons et développez votre entreprise — le tout en un seul endroit."
    },
    "actions": {
      "newShipmentDesc": "Créer et planifier une nouvelle livraison",
      "trackDesc": "Surveiller l’état de livraison en temps réel",
      "billingDesc": "Consulter les factures et l’historique des paiements",
      "documentsDesc": "Accéder aux étiquettes d’expédition et aux formulaires douaniers"
    },
    "stats": {
      "total": "Total des envois",
      "pending": "En attente",
      "inTransit": "En transit",
      "delivered": "Livrés",
      "canceled": "Annulés",
      "successRate": "Taux de réussite"
    },
    "createFirstShipment": "Créez votre premier envoi",
    "recentShipments": "Envois récents",
    "shipmentsPlaceholder": "Le composant liste des envois s’affichera ici.",
    "liveTracking": "Suivi en direct",
    "trackingComingSoon": "Mises à jour GPS en temps réel bientôt disponibles.",
    "packageInsights": "Informations sur le colis",
    "insightsDescription": "Poids, dimensions et données douanières.",
    "globalNetwork": "Réseau mondial de livraison",
    "mapDescription": "Visualisation en direct des itinéraires propulsée par SwiftParcel IntelligenceMC"
  },
  "shipments": {
    "title": "Envois",
    "subtitle": "Gérez et suivez tous vos envois en un seul endroit",
    "loading": "Chargement des envois…",
    "errors": {
      "fetchFailed": "Impossible de charger les envois. Veuillez réessayer."
    },
    "stats": {
      "total": "Total des envois",
      "pending": "En attente",
      "inTransit": "En transit",
      "delivered": "Livrés",
      "canceled": "Annulés"
    },
    "search": {
      "placeholder": "Rechercher par ID de suivi, destination…"
    },
    "filter": {
      "status": "Statut",
      "allStatuses": "Tous les statuts"
    },
    "status": {
      "pending": "En attente",
      "inTransit": "En transit",
      "delivered": "Livrés",
      "canceled": "Annulés"
    },
    "actions": {
      "exportCSV": "Exporter en CSV",
      "printLabels": "Imprimer les étiquettes",
      "track": "Suivre",
      "details": "Détails"
    },
    "table": {
      "id": "ID de l’envoi",
      "tracking": "Suivi",
      "route": "Itinéraire",
      "service": "Service",
      "weight": "Poids",
      "date": "Date",
      "estDelivery": "Livraison estimée",
      "actions": "Actions"
    },
    "csv": {
      "id": "ID",
      "tracking": "Suivi",
      "from": "De",
      "to": "À",
      "service": "Service",
      "weight": "Poids (kg)",
      "date": "Date",
      "estDelivery": "Livraison estimée",
      "status": "Statut"
    },
    "print": {
      "title": "Étiquettes SwiftParcel",
      "tracking": "Suivi",
      "to": "À"
    },
    "noData": "Aucun envoi trouvé. Essayez d’ajuster vos filtres."
  },
  "newShipment": {
    "title": "Soumettre une demande d’envoi",
    "subtitle": "Nous examinerons vos informations et vous enverrons une offre confirmée sous 2 heures ouvrées.",
    "sections": {
      "pickupMethod": "1. Méthode de collecte",
      "addresses": "2. Adresses",
      "packageInfo": "3. Informations sur le colis",
      "transportSchedule": "4. Transport et planning"
    },
    "pickup": {
      "dropoffTitle": "Dépôt au centre",
      "dropoffDesc": "Apportez votre colis dans l’un de nos centres locaux",
      "pickupTitle": "Planifier une collecte",
      "pickupDesc": "Nous viendrons le récupérer à votre emplacement"
    },
    "addresses": {
      "sender": "Expéditeur (collecte)",
      "recipient": "Destinataire (livraison)",
      "businessLocation": "Adresse professionnelle"
    },
    "placeholders": {
      "fullName": "Nom complet",
      "phone": "Téléphone",
      "email": "E-mail",
      "streetAddress": "Adresse postale",
      "city": "Ville",
      "zip": "Code postal",
      "packageDescription": "Décrivez le contenu (ex. : électronique, vêtements, machines)",
      "declaredValue": "Valeur déclarée (pour l’assurance)",
      "customsContents": "Listez tous les articles, quantités et valeurs…",
      "specialInstructions": "Instructions ou exigences spéciales…",
      "additionalNotes": "Notes supplémentaires"
    },
    "labels": {
      "preferredPickupDate": "Date souhaitée de collecte",
      "preferredDeliveryDate": "Date souhaitée de livraison",
      "shipmentType": "Type d’envoi",
      "contactPreference": "Préférence de contact"
    },
    "package": {
      "categoryLabel": "Catégorie",
      "categories": {
        "general": "Marchandises générales",
        "fragile": "Fragile",
        "perishable": "Périssable",
        "hazardous": "Dangereux (approbation requise)",
        "documents": "Documents"
      },
      "hazardousWarning": "Les matières dangereuses nécessitent une manipulation et une documentation spéciales. Notre équipe vous contactera.",
      "customsClearance": "Cet envoi nécessite un dédouanement"
    },
    "transport": {
      "air": "Transport aérien",
      "ground": "Transport routier"
    },
    "shipmentTypes": {
      "standard": "Standard",
      "express": "Express (24–72 h)",
      "urgent": "Urgent (jour même/jour suivant)"
    },
    "contactPreferences": {
      "email": "E-mail",
      "sms": "SMS",
      "phone": "Appel téléphonique"
    },
    "errors": {
      "senderName": "Le nom de l’expéditeur est requis",
      "senderPhone": "Le téléphone de l’expéditeur est requis",
      "senderEmail": "Une adresse e-mail valide de l’expéditeur est requise",
      "senderAddress": "L’adresse de l’expéditeur est requise",
      "senderCity": "La ville de l’expéditeur est requise",
      "recipientName": "Le nom du destinataire est requis",
      "recipientPhone": "Le téléphone du destinataire est requis",
      "recipientEmail": "Une adresse e-mail valide du destinataire est requise",
      "recipientAddress": "L’adresse du destinataire est requise",
      "recipientCity": "La ville du destinataire est requise",
      "packageDescription": "La description du colis est requise",
      "weight": "Le poids doit être d’au moins 0,1 kg",
      "length": "La longueur doit être d’au moins 1 cm",
      "width": "La largeur doit être d’au moins 1 cm",
      "height": "La hauteur doit être d’au moins 1 cm",
      "customsContents": "La déclaration de contenu douanier est requise",
      "submitFailed": "Échec de l’envoi de la demande. Veuillez réessayer."
    },
    "success": {
      "message": "Demande envoyée avec succès ! Votre ID d’envoi est : {{id}}"
    },
    "submitting": "Envoi en cours…",
    "submitButton": "Soumettre la demande d’envoi",
    "help": {
      "reviewTime": "Après soumission, notre équipe logistique examinera votre demande et vous enverra une offre confirmée sous 2 heures ouvrées.",
      "urgentHelp": "📞 Besoin d’aide urgente ? Appelez-nous au +1 (800) SWIFT-123"
    }
  }
},
ja: {
  "nav": {
    "home": "ホーム",
    "services": "サービス",
    "quote": "お見積りを取得",
    "track": "荷物を追跡",
    "about": "会社概要",
    "contact": "お問い合わせ",
    "dashboard": "ダッシュボード",
    "login": "ログイン",
    "signup": "新規登録",
    "signout": "ログアウト"
  },
  "logins": {
    "loginTitle": "アカウントにログイン",
    "noAccount": "アカウントをお持ちでないですか？",
    "signupNow": "新規登録",
    "emailLabel": "メールアドレス",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "パスワード",
    "passwordPlaceholder": "パスワードを入力",
    "signupTitle": "新しいアカウントを作成",
    "haveAccount": "すでにアカウントをお持ちですか？",
    "loginNow": "ログイン",
    "signupButton": "新規登録",
    "loginButton": "ログイン",
    "loggingIn": "ログイン中…"
  },
  "documents": {
    "pageTitle": "マイドキュメント",
    "metaDescription": "請求書、契約書、配送書類をダウンロードできます。",
    "title": "マイドキュメント",
    "subtitle": "配送関連のすべての書類を一か所で確認・ダウンロードできます。",
    "download": "ダウンロード",
    "empty": {
      "title": "まだドキュメントがありません",
      "description": "請求書や契約書はまだ生成されていません。利用可能になるとここに表示されます。"
    },
    "types": {
      "invoice": "配送請求書",
      "contract": "サービス契約書",
      "receipt": "支払い領収書",
      "waybill": "運送状（ウェイビル）"
    },
    "success": {
      "downloadedTitle": "ダウンロードを開始しました",
      "downloadedDesc": "{{name}} をダウンロード中…"
    },
    "errors": {
      "title": "ドキュメントエラー",
      "fetchFailed": "ドキュメントの読み込みに失敗しました。後でもう一度お試しください。",
      "downloadFailed": "ドキュメントのダウンロードに失敗しました。",
      "noDownloadUrl": "このドキュメントはダウンロードできません。"
    }
  },
  "billing": {
    "pageTitle": "請求と請求書",
    "metaDescription": "SwiftParcelのサブスクリプションを管理し、請求書を確認・領収書をダウンロードできます。",
    "title": "請求と請求書",
    "subtitle": "お支払い履歴の確認、プランの管理、財務書類へのアクセスが可能です。",
    "viewAllDocuments": "すべての書類を表示",
    "subscription": {
      "title": "現在のプラン",
      "description": "現在有効なサブスクリプションの詳細",
      "basicPlan": "ベーシックプラン",
      "none": "現在、有効なサブスクリプションがありません。"
    },
    "status": {
      "active": "有効",
      "pastDue": "滞納中",
      "canceled": "キャンセル済み",
      "inactive": "無効"
    },
    "invoices": {
      "title": "最近の請求書",
      "viewAll": "すべて表示",
      "empty": {
        "title": "請求書がまだありません",
        "description": "お支払い後に請求書がここに表示されます。"
      }
    },
    "invoice": {
      "defaultDesc": "配送請求書"
    },
    "errors": {
      "title": "請求情報エラー",
      "fetchFailed": "請求情報の読み込みに失敗しました。後でもう一度お試しください。"
    }
  },
  "login": {
    "loginTitlePage": "ログイン",
    "signupTitlePage": "新規登録",
    "metaDescription": "SwiftParcelアカウントに安全にアクセスできます。",
    "loginTitle": "おかえりなさい",
    "signupTitle": "アカウントを作成",
    "emailLabel": "メールアドレス",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "パスワード",
    "passwordPlaceholder": "••••••••",
    "loginButton": "ログイン",
    "signupButton": "新規登録",
    "loginWithGoogle": "Googleで続ける",
    "signupWithGoogle": "Googleで登録",
    "orContinueWith": "またはメールアドレスで続ける",
    "loginNow": "今すぐログイン",
    "signupNow": "今すぐ登録",
    "haveAccount": "すでにアカウントをお持ちですか？",
    "noAccount": "アカウントをお持ちでないですか？",
    "rememberMe": "ログイン状態を保持する",
    "forgotPassword": {
      "link": "パスワードをお忘れですか？",
      "title": "パスワードを再設定",
      "description": "メールアドレスを入力すると、パスワード再設定用のリンクを送信します。",
      "sendButton": "リンクを送信",
      "sending": "送信中…",
      "successTitle": "受信トレイをご確認ください",
      "successDesc": "{{email}} に再設定リンクを送信しました。",
      "errorTitle": "リンクの送信に失敗しました",
      "errorDesc": "メールアドレスをご確認のうえ、再度お試しください。",
      "backToLogin": "ログイン画面に戻る"
    },
    "errors": {
      "title": "認証に失敗しました",
      "generic": "予期しないエラーが発生しました。",
      "emailInUse": "このメールアドレスはすでに登録されています。",
      "invalidEmail": "有効なメールアドレスを入力してください。",
      "invalidCredentials": "メールアドレスまたはパスワードが正しくありません。",
      "weakPassword": "パスワードは6文字以上で入力してください。",
      "tooManyRequests": "試行回数が多すぎます。しばらくお待ちください。",
      "emailRequired": "メールアドレスは必須です。",
      "googleFailed": "Googleでのログインに失敗しました",
      "tryAgain": "再度お試しください。"
    },
    "success": {
      "loginTitle": "ログイン完了",
      "loginDesc": "ダッシュボードへ移動中…",
      "signupTitle": "アカウントを作成しました！",
      "signupDesc": "ログイン前にメールアドレスの確認をお願いします。",
      "googleLogin": "Googleでログインしました"
    },
    "loggingIn": "ログイン中…",
    "signingUp": "アカウント作成中…",
    "footer": "安全・信頼・迅速"
  },
  "home": {
    "heroTitle": "スムーズな配送はここから始まります！",
    "heroSubtitle": "世界中の企業向け、迅速で信頼性が高く安全な配送ソリューション。いつでも確実に、お客様の大切な荷物をお届けします。",
    "getQuote": "無料でお見積り",
    "viewDemo": "デモを見る",
    "whyChoose": "SwiftParcelを選ぶ理由",
    "whyChooseSub": "お客様のビジネスニーズに合わせた包括的な配送ソリューションを提供します",
    "securePkg": "安全な梱包",
    "securePkgDesc": "あらゆる貨物に対応したプロフェッショナルな梱包ソリューション",
    "fastDelivery": "迅速配送",
    "fastDeliveryDesc": "納期に合わせたエクスプレス配送オプション",
    "insured": "保険付配送",
    "insuredDesc": "万が一に備えた完全補償の保険付き",
    "support": "24時間365日サポート",
    "supportDesc": "年中無休のカスタマーサポートとリアルタイム追跡"
  },
  "track": {
    "title": "荷物の追跡",
    "subtitle": "追跡IDを入力して、リアルタイムで荷物の状況を確認できます",
    "placeholder": "追跡IDを入力（例：SP1234567890）",
    "button": "追跡",
    "tracking": "追跡中…",
    "details": "荷物の詳細",
    "status": "ステータス",
    "customer": "お客様",
    "contact": "連絡先",
    "destination": "宛先",
    "address": "配送先住所",
    "packageInfo": "荷物情報",
    "created": "作成日",
    "updated": "最終更新"
  },
  "about": {
    "title": "SwiftParcelについて",
    "teamTitle": "私たちのチーム",
    "subtitle": "2010年より、グローバル物流と配送ソリューションの信頼パートナーとして",
    "storyTitle": "私たちのストーリー",
    "storyText1": "SwiftParcelは、「国際配送をあらゆる規模の企業にとって、誰もが利用でき、信頼でき、ストレスフリーなものにする」というシンプルかつ力強いビジョンのもと設立されました。",
    "storyText2": "これまでに数百万件の配送を扱い、数千もの企業の海外展開を支援し、卓越した評判を築いてきました。",
    "storyDesc1": "SwiftParcelは、「国際配送をあらゆる規模の企業にとって、誰もが利用でき、信頼でき、ストレスフリーなものにする」というシンプルかつ力強いビジョンのもと設立されました。",
    "storyDesc2": "これまでに数百万件の配送を扱い、数千もの企業の海外展開を支援し、卓越した評判を築いてきました。",
    "mission": "ミッション",
    "missionDesc": "シームレスで信頼性が高く、効率的な配送ソリューションを提供すること。",
    "team": "チーム",
    "teamDesc": "数十年の経験を持つ物流の専門家で構成された専任チーム。",
    "commitment": "私たちのコミットメント",
    "commitmentDesc": "卓越性、透明性、長期的なパートナーシップを重視しています。",
    "reach": "グローバルネットワーク",
    "reachDesc": "150か国以上との提携により、お客様の貨物が安全に届くことを保証します。",
    "missionTitle": "ミッション",
    "visionTitle": "ビジョン",
    "valuesTitle": "バリュー",
    "awardTitle": "受賞歴",
    "stats": {
      "countries": "対応国数",
      "shipments": "配送実績",
      "clients": "満足いただいているお客様",
      "ontime": "定時配達率"
    }
  },
  "contact": {
    "title": "お問い合わせ",
    "subtitle": "グローバルチームがいつでもサポートいたします。地域のオフィスまたは専用サポートチャネルまでご連絡ください。",
    "howToReach": "お問い合わせ方法",
    "regionalOffices": "地域オフィス",
    "regionalContact": "地域担当窓口",
    "general": "一般のお問い合わせ",
    "generalDesc": "サービス、パートナーシップ、会社情報に関するご質問はこちらへ。",
    "supportTitle": "カスタマーサポート",
    "supportDesc": "荷物の追跡、アカウント、配送トラブルに関する24時間365日のサポート。",
    "sales": "営業・見積り",
    "salesDesc": "大量配送や法人契約向けのカスタム見積りをご提供します。",
    "shipping": "配送業務",
    "shippingDesc": "通関、禁制品、梱包ガイドラインに関する技術的なご質問はこちらへ。",
    "formTitle": "メッセージを送信",
    "formName": "お名前",
    "formEmail": "メールアドレス",
    "formSubject": "件名",
    "formMessage": "メッセージ"
  },
  
  "footer": {
    "logoAlt": "SwiftParcel ロゴ",
    "description": "グローバルなビジネスニーズに応える、シームレスな配送ソリューション。",
    "supportButton": "グローバルサポート対応状況",
    "quickLinks": "クイックリンク",
    "contact": "お問い合わせ",
    "legal": "法的情報",
    "terms": "利用規約",
    "privacy": "プライバシーポリシー",
    "cookies": "Cookieとプライバシー",
    "allRightsReserved": "All rights reserved.",
    "soc2": "SOC 2 Type II 準拠",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "サービス一覧",
    "metaDescription": "SwiftParcelの包括的な配送サービスをご覧ください。航空貨物、海上貨物、陸上輸送、倉庫保管ソリューションを提供しています。",
    "heroTitle": "配送サービス",
    "heroSubtitle": "お客様のビジネスニーズに合わせた包括的な物流ソリューション",
    "keyFeatures": "主な特徴:",
    "learnMore": "詳しく見る",
    "airFreight": {
      "title": "航空貨物",
      "description": "時間に敏感な貨物向けの迅速かつ効率的な航空輸送サービス。大手航空会社と提携し、お客様の大切な荷物を迅速かつ安全にお届けします。",
      "features": {
        "express": "エクスプレス配送オプション",
        "worldwide": "世界中へのカバレッジ",
        "tracking": "リアルタイム追跡",
        "temperature": "温度管理付きオプション"
      }
    },
    "oceanFreight": {
      "title": "海上貨物",
      "description": "大量貨物に最適なコスト効率の高い海上輸送ソリューション。国際的に競争力のある料金で貨物を輸送したい企業に最適です。",
      "features": {
        "fcl": "フルコンテナ積み（FCL）",
        "lcl": "混載貨物（LCL）",
        "doorToDoor": "ドアツードアサービス",
        "customs": "通関手続きサポート"
      }
    },
    "groundTransport": {
      "title": "陸上輸送",
      "description": "国内および国際間の信頼性の高い陸上輸送サービス。地域配送や陸上輸送ニーズに最適です。",
      "features": {
        "sameDay": "当日配送オプション",
        "regional": "地域配送ネットワーク",
        "fleet": "専用車両",
        "scheduling": "柔軟なスケジュール対応"
      }
    },
    "warehousing": {
      "title": "倉庫保管・物流",
      "description": "在庫管理を含む包括的な倉庫ソリューション。24時間365日監視された安全な施設で、お客様の商品を保管します。",
      "features": {
        "climate": "温度・湿度管理倉庫",
        "inventory": "在庫管理",
        "pickPack": "ピッキング・梱包サービス",
        "distribution": "配送サポート"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 機能準備中",
    "featureComingSoon": "この機能はまだ実装されていませんが、心配ありません！次のリクエストでお知らせください！🚀"
  },
  "quote": {
    "pageTitle": "お見積りを取得",
    "metaDescription": "SwiftParcelから配送のお見積りをリクエストしてください。簡単なフォームにご記入いただくだけで、競争力のあるお見積りをお届けします。",
    "heroTitle": "無料でお見積りを取得",
    "heroSubtitle": "以下のフォームにご記入ください。競争力のあるお見積りをご連絡いたします。",
    "form": {
      "nameLabel": "お名前",
      "namePlaceholder": "山田 太郎",
      "companyLabel": "会社名",
      "companyPlaceholder": "会社名（任意）",
      "emailLabel": "メールアドレス",
      "emailPlaceholder": "taro@example.com",
      "countryLabel": "国",
      "countryPlaceholder": "日本",
      "contactLabel": "電話番号",
      "contactPlaceholder": "+81 90-1234-5678",
      "addressLabel": "配送先住所",
      "addressPlaceholder": "配送先の住所をすべて入力してください",
      "packageInfoLabel": "荷物情報",
      "packageInfoPlaceholder": "荷物の詳細（寸法、重量、内容物、特別な取り扱い要件など）を記載してください"
    },
    "submitting": "送信中…",
    "submitButton": "お見積りリクエストを送信",
    "success": {
      "title": "お見積りリクエストが完了しました！✅",
      "description": "追跡ID: {{trackingId}} です。まもなく詳細なお見積りをご連絡いたします。"
    },
    "error": {
      "title": "送信に失敗しました",
      "generic": "エラーが発生しました。再度お試しください。"
    }
  },
  "terms": {
    "pageTitle": "利用規約",
    "title": "利用規約",
    "intro": "SwiftParcelへようこそ。当社のウェブサイトおよびサービスをご利用になることで、以下の利用規約に同意したものとみなされます。",
    "section1": {
      "title": "1. ドメインの使用",
      "content": "すべての公式コミュニケーションおよびサービスは、{{domain}} ドメインでのみ提供されます。SwiftParcelは .express その他のTLDドメインでは運営していません。許可されていないドメインからの通信については、一切責任を負いません。"
    },
    "section2": {
      "title": "2. サービス契約",
      "content": "配送依頼、お見積り、追跡サービスは、国際海事法および航空法に準拠します。具体的なサービスレベル契約（SLA）は、契約締結時に提供されます。"
    },
    "section3": {
      "title": "3. ユーザーアカウント",
      "content": "お客様は、アカウント認証情報の機密性を維持する責任があります。お客様のアカウント下で発生したすべての活動について、お客様が責任を負います。"
    }
  },
  "privacy": {
    "pageTitle": "プライバシーポリシー",
    "title": "プライバシーポリシー",
    "intro": "SwiftParcelでは、お客様の個人情報およびビジネスデータの保護を最優先しています。本ポリシーでは、情報の収集・利用・保護方法について説明します。",
    "dataCollection": {
      "title": "データ収集",
      "content": "グローバル物流を円滑に進めるために、送荷主・受取人の住所、荷物の内容、連絡先などの必要な情報を収集します。すべてのデータは安全に処理されます。"
    },
    "internationalTransfers": {
      "title": "国際的なデータ移転",
      "content": "{{domain}} を通じて運営されるグローバル物流プロバイダーとして、配送を円滑に行うため、お客様のデータを海外に移転する場合があります。すべての国際移転において、適切な保護措置を講じています。"
    }
  },
  "cookies": {
    "pageTitle": "Cookieポリシー",
    "title": "Cookieポリシー",
    "intro": "本ポリシーでは、お客様が {{domain}} のウェブサイトをご利用になる際に、SwiftParcelがCookieおよび類似技術を使用する方法について説明します。",
    "whatAreCookies": {
      "title": "Cookieとは？",
      "content": "Cookieは、お客様がウェブサイトを訪問した際に、コンピューターやモバイル端末に保存される小さなデータファイルです。ウェブサイト運営者が、サイトの機能向上や効率化、利用状況の分析のために広く使用しています。"
    },
    "controllingCookies": {
      "title": "Cookieの管理",
      "content": "お客様は、Cookieの許可または拒否を決定する権利をお持ちです。ウェブサイトのフッターにある「Cookie同意マネージャー」から、設定を変更できます。"
    }
  },

  "dashboard": {
    "accessDenied": "ダッシュボードにアクセスするにはログインが必要です。",
    "signOutFailed": "ログアウトに失敗しました。再度お試しください。",
    "active": "有効",
    "welcomeBack": "おかえりなさい"
  },
  "dash_nav": {
    "overview": "概要",
    "shipments": "荷物",
    "newShipment": "新規荷物",
    "track": "追跡",
    "orders": "注文",
    "messages": "メッセージ",
    "activity": "アクティビティ",
    "report": "レポート",
    "support": "サポート",
    "account": "アカウント",
    "billing": "請求",
    "documents": "書類",
    "settings": "設定",
    "homePage": "ホーム",
    "createShipment": "荷物を作成",
    "signout": "ログアウト",
    "myAccount": "マイアカウント"
  },
  "common": {
    "user": "ユーザー",
    "logoAlt": "SwiftParcel ロゴ",
    "toggleNavigation": "ナビゲーションを切り替え",
    "viewAll": "すべて表示"
  },
  "dashboardOverview": {
    "loading": "物流ダッシュボードを読み込み中…",
    "errors": {
      "fetchFailed": "ダッシュボードデータの読み込みに失敗しました。再度お試しください。"
    },
    "empty": {
      "title": "グローバル物流ハブ",
      "subtitle": "荷物の管理、配送の追跡、ビジネスの拡大を、すべて1か所で実現します。"
    },
    "actions": {
      "newShipmentDesc": "新しい配送を登録・スケジュール",
      "trackDesc": "リアルタイムで配送状況を監視",
      "billingDesc": "請求書と支払い履歴を確認",
      "documentsDesc": "送り状や通関書類にアクセス"
    },
    "stats": {
      "total": "合計荷物数",
      "pending": "未処理",
      "inTransit": "輸送中",
      "delivered": "配達済み",
      "canceled": "キャンセル済み",
      "successRate": "成功率"
    },
    "createFirstShipment": "最初の荷物を作成",
    "recentShipments": "最近の荷物",
    "shipmentsPlaceholder": "荷物一覧コンポーネントがここに表示されます。",
    "liveTracking": "ライブ追跡",
    "trackingComingSoon": "リアルタイムGPS更新機能は近日公開予定です。",
    "packageInsights": "荷物インサイト",
    "insightsDescription": "重量、寸法、通関データ。",
    "globalNetwork": "グローバル配送ネットワーク",
    "mapDescription": "SwiftParcel Intelligence™ 搭載のライブルート可視化"
  },
  "shipments": {
    "title": "荷物",
    "subtitle": "すべての配送を1か所で管理・追跡",
    "loading": "荷物を読み込み中…",
    "errors": {
      "fetchFailed": "荷物の読み込みに失敗しました。再度お試しください。"
    },
    "stats": {
      "total": "合計荷物数",
      "pending": "未処理",
      "inTransit": "輸送中",
      "delivered": "配達済み",
      "canceled": "キャンセル済み"
    },
    "search": {
      "placeholder": "追跡IDや宛先で検索…"
    },
    "filter": {
      "status": "ステータス",
      "allStatuses": "すべてのステータス"
    },
    "status": {
      "pending": "未処理",
      "inTransit": "輸送中",
      "delivered": "配達済み",
      "canceled": "キャンセル済み"
    },
    "actions": {
      "exportCSV": "CSVでエクスポート",
      "printLabels": "ラベルを印刷",
      "track": "追跡",
      "details": "詳細"
    },
    "table": {
      "id": "荷物ID",
      "tracking": "追跡",
      "route": "ルート",
      "service": "サービス",
      "weight": "重量",
      "date": "日付",
      "estDelivery": "配達予定日",
      "actions": "操作"
    },
    "csv": {
      "id": "ID",
      "tracking": "追跡",
      "from": "発送元",
      "to": "宛先",
      "service": "サービス",
      "weight": "重量 (kg)",
      "date": "日付",
      "estDelivery": "配達予定日",
      "status": "ステータス"
    },
    "print": {
      "title": "SwiftParcel ラベル",
      "tracking": "追跡",
      "to": "宛先"
    },
    "noData": "荷物が見つかりません。フィルター条件を調整してみてください。"
  },
  "newShipment": {
    "title": "荷物依頼を送信",
    "subtitle": "内容を確認後、2営業時間以内に確定見積をお送りします。",
    "sections": {
      "pickupMethod": "1. 引取方法",
      "addresses": "2. 住所情報",
      "packageInfo": "3. 荷物情報",
      "transportSchedule": "4. 輸送とスケジュール"
    },
    "pickup": {
      "dropoffTitle": "ハブへ持ち込み",
      "dropoffDesc": "お近くのハブまで荷物をお持ちください",
      "pickupTitle": "集荷を依頼",
      "pickupDesc": "お客様の所在地まで集荷に伺います"
    },
    "addresses": {
      "sender": "送荷主（引取）",
      "recipient": "受取人（配達）",
      "businessLocation": "事業所所在地"
    },
    "placeholders": {
      "fullName": "氏名",
      "phone": "電話番号",
      "email": "メールアドレス",
      "streetAddress": "住所（番地まで）",
      "city": "市区町村",
      "zip": "郵便番号",
      "packageDescription": "内容物を記載（例：電子機器、衣類、機械など）",
      "declaredValue": "保険申告価格",
      "customsContents": "品目、数量、価格をすべて記載…",
      "specialInstructions": "特別な取り扱い指示や要件…",
      "additionalNotes": "その他備考"
    },
    "labels": {
      "preferredPickupDate": "希望引取日",
      "preferredDeliveryDate": "希望配達日",
      "shipmentType": "荷物タイプ",
      "contactPreference": "連絡方法"
    },
    "package": {
      "categoryLabel": "カテゴリ",
      "categories": {
        "general": "一般貨物",
        "fragile": "壊れもの",
        "perishable": "生もの",
        "hazardous": "危険物（承認が必要）",
        "documents": "書類"
      },
      "hazardousWarning": "危険物は特別な取り扱いと書類が必要です。担当者よりご連絡いたします。",
      "customsClearance": "この荷物は通関手続きが必要です"
    },
    "transport": {
      "air": "航空輸送",
      "ground": "陸上輸送"
    },
    "shipmentTypes": {
      "standard": "標準",
      "express": "エクスプレス（24～72時間）",
      "urgent": "緊急（当日／翌日）"
    },
    "contactPreferences": {
      "email": "メール",
      "sms": "SMS",
      "phone": "電話"
    },
    "errors": {
      "senderName": "送荷主名は必須です",
      "senderPhone": "送荷主電話番号は必須です",
      "senderEmail": "有効な送荷主メールアドレスを入力してください",
      "senderAddress": "送荷主住所は必須です",
      "senderCity": "送荷主市区町村は必須です",
      "recipientName": "受取人名は必須です",
      "recipientPhone": "受取人電話番号は必須です",
      "recipientEmail": "有効な受取人メールアドレスを入力してください",
      "recipientAddress": "受取人住所は必須です",
      "recipientCity": "受取人市区町村は必須です",
      "packageDescription": "荷物の説明は必須です",
      "weight": "重量は0.1kg以上である必要があります",
      "length": "長さは1cm以上である必要があります",
      "width": "幅は1cm以上である必要があります",
      "height": "高さは1cm以上である必要があります",
      "customsContents": "通関内容の申告は必須です",
      "submitFailed": "依頼の送信に失敗しました。再度お試しください。"
    },
    "success": {
      "message": "依頼が正常に送信されました！荷物IDは {{id}} です。"
    },
    "submitting": "送信中…",
    "submitButton": "荷物依頼を送信",
    "help": {
      "reviewTime": "送信後、物流チームが内容を確認し、2営業時間以内に確定見積をお送りします。",
      "urgentHelp": "📞 緊急サポートが必要ですか？+1 (800) SWIFT-123 までお電話ください"
    }
  }
},
pt: {
  "nav": {
    "home": "Início",
    "services": "Serviços",
    "quote": "Obter Orçamento",
    "track": "Rastrear Envio",
    "about": "Sobre",
    "contact": "Contacto",
    "dashboard": "Painel",
    "login": "Iniciar Sessão",
    "signup": "Registar",
    "signout": "Terminar Sessão"
  },
  "logins": {
    "loginTitle": "Inicie sessão na sua conta",
    "noAccount": "Não tem uma conta?",
    "signupNow": "Registe-se",
    "emailLabel": "Endereço de e-mail",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "Palavra-passe",
    "passwordPlaceholder": "Introduza a palavra-passe",
    "signupTitle": "Criar nova conta",
    "haveAccount": "Já tem uma conta?",
    "loginNow": "Iniciar sessão",
    "signupButton": "Registar",
    "loginButton": "Iniciar sessão",
    "loggingIn": "A iniciar sessão..."
  },
  "documents": {
    "pageTitle": "Os Meus Documentos",
    "metaDescription": "Descarregue as suas faturas, contratos e documentos de envio.",
    "title": "Os Meus Documentos",
    "subtitle": "Aceda e descarregue todos os seus documentos relacionados com envios num só local.",
    "download": "Descarregar",
    "empty": {
      "title": "Ainda sem documentos",
      "description": "Ainda não gerou nenhuma fatura nem contrato. Estes aparecerão aqui assim que estiverem disponíveis."
    },
    "types": {
      "invoice": "Fatura de envio",
      "contract": "Contrato de serviço",
      "receipt": "Recibo de pagamento",
      "waybill": "Guia de transporte"
    },
    "success": {
      "downloadedTitle": "Descarga iniciada",
      "downloadedDesc": "{{name}} está a ser descarregado..."
    },
    "errors": {
      "title": "Erro nos Documentos",
      "fetchFailed": "Falha ao carregar os seus documentos. Por favor, tente novamente mais tarde.",
      "downloadFailed": "Falha ao descarregar o documento.",
      "noDownloadUrl": "Este documento não está disponível para descarregar."
    }
  },
  "billing": {
    "pageTitle": "Faturação e Faturas",
    "metaDescription": "Gira a sua subscrição SwiftParcel, veja faturas e descarregue recibos.",
    "title": "Faturação e Faturas",
    "subtitle": "Acompanhe os seus pagamentos, gere o seu plano e aceda a todos os documentos financeiros.",
    "viewAllDocuments": "Ver Todos os Documentos",
    "subscription": {
      "title": "Plano Atual",
      "description": "Detalhes da sua subscrição ativa",
      "basicPlan": "Plano Básico",
      "none": "Não tem nenhuma subscrição ativa."
    },
    "status": {
      "active": "Ativo",
      "pastDue": "Em Atraso",
      "canceled": "Cancelado",
      "inactive": "Inativo"
    },
    "invoices": {
      "title": "Faturas Recentes",
      "viewAll": "Ver todas",
      "empty": {
        "title": "Ainda sem faturas",
        "description": "As suas faturas aparecerão aqui após efetuar um pagamento."
      }
    },
    "invoice": {
      "defaultDesc": "Fatura de envio"
    },
    "errors": {
      "title": "Erro de Faturação",
      "fetchFailed": "Falha ao carregar as informações de faturação. Por favor, tente novamente mais tarde."
    }
  },
  "login": {
    "loginTitlePage": "Iniciar Sessão",
    "signupTitlePage": "Registar",
    "metaDescription": "Aceda à sua conta SwiftParcel de forma segura.",
    "loginTitle": "Bem-vindo novamente",
    "signupTitle": "Crie a sua conta",
    "emailLabel": "Endereço de e-mail",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "Palavra-passe",
    "passwordPlaceholder": "••••••••",
    "loginButton": "Iniciar sessão",
    "signupButton": "Registar",
    "loginWithGoogle": "Continuar com Google",
    "signupWithGoogle": "Registar com Google",
    "orContinueWith": "ou continue com e-mail",
    "loginNow": "Iniciar sessão agora",
    "signupNow": "Registar agora",
    "haveAccount": "Já tem uma conta?",
    "noAccount": "Não tem uma conta?",
    "rememberMe": "Lembrar-me",
    "forgotPassword": {
      "link": "Esqueceu-se da palavra-passe?",
      "title": "Repor a sua palavra-passe",
      "description": "Introduza o seu e-mail e enviaremos um link para repor a palavra-passe.",
      "sendButton": "Enviar link",
      "sending": "A enviar...",
      "successTitle": "Verifique a sua caixa de entrada",
      "successDesc": "Enviámos um link de reposição para {{email}}.",
      "errorTitle": "Não foi possível enviar o link",
      "errorDesc": "Por favor, verifique o seu e-mail e tente novamente.",
      "backToLogin": "Voltar ao início de sessão"
    },
    "errors": {
      "title": "Falha na autenticação",
      "generic": "Ocorreu um erro inesperado.",
      "emailInUse": "Este e-mail já está registado.",
      "invalidEmail": "Por favor, introduza um e-mail válido.",
      "invalidCredentials": "E-mail ou palavra-passe incorretos.",
      "weakPassword": "A palavra-passe deve ter pelo menos 6 caracteres.",
      "tooManyRequests": "Demasiadas tentativas. Por favor, aguarde.",
      "emailRequired": "O e-mail é obrigatório.",
      "googleFailed": "Falha no início de sessão com Google",
      "tryAgain": "Por favor, tente novamente."
    },
    "success": {
      "loginTitle": "Sessão iniciada",
      "loginDesc": "A redirecionar para o seu painel...",
      "signupTitle": "Conta criada!",
      "signupDesc": "Por favor, verifique o seu e-mail antes de iniciar sessão.",
      "googleLogin": "Sessão iniciada com Google"
    },
    "loggingIn": "A iniciar sessão...",
    "signingUp": "A criar conta...",
    "footer": "Seguro. Fiável. Rápido."
  },
  "home": {
    "heroTitle": "O envio perfeito começa aqui!",
    "heroSubtitle": "Soluções de envio rápidas, fiáveis e seguras para empresas em todo o mundo. As suas mercadorias entregues a tempo, sempre.",
    "getQuote": "Obter Orçamento Grátis",
    "viewDemo": "Ver Demonstração",
    "whyChoose": "Porque escolher a SwiftParcel?",
    "whyChooseSub": "Oferecemos soluções completas de envio adaptadas às necessidades do seu negócio",
    "securePkg": "Embalagem Segura",
    "securePkgDesc": "Soluções profissionais de embalagem para todos os tipos de carga",
    "fastDelivery": "Entrega Rápida",
    "fastDeliveryDesc": "Opções de envio expresso para cumprir os seus prazos",
    "insured": "Envios Segurados",
    "insuredDesc": "Cobertura total de seguro para maior tranquilidade",
    "support": "Suporte 24/7",
    "supportDesc": "Serviço de apoio ao cliente e rastreio disponíveis 24 horas por dia"
  },
  "track": {
    "title": "Rastrear o Seu Envio",
    "subtitle": "Introduza o seu ID de rastreio para obter atualizações em tempo real",
    "placeholder": "Introduza o ID de rastreio (ex: SP1234567890)",
    "button": "Rastrear",
    "tracking": "A rastrear...",
    "details": "Detalhes do Envio",
    "status": "Estado",
    "customer": "Cliente",
    "contact": "Contacto",
    "destination": "Destino",
    "address": "Morada de Entrega",
    "packageInfo": "Informações da Encomenda",
    "created": "Criado em",
    "updated": "Última Atualização"
  },
  "about": {
    "title": "Sobre a SwiftParcel",
    "teamTitle": "A Nossa Equipa",
    "subtitle": "O seu parceiro de confiança em logística global e soluções de envio desde 2010",
    "storyTitle": "A Nossa História",
    "storyText1": "A SwiftParcel foi fundada com uma visão simples mas poderosa: tornar o envio internacional acessível, fiável e sem stress para empresas de todas as dimensões.",
    "storyText2": "Ao longo dos anos, tratámos de milhões de envios, ajudámos milhares de empresas a expandirem-se internacionalmente e construímos uma reputação de excelência.",
    "storyDesc1": "A SwiftParcel foi fundada com uma visão simples mas poderosa: tornar o envio internacional acessível, fiável e sem stress para empresas de todas as dimensões.",
    "storyDesc2": "Ao longo dos anos, tratámos de milhões de envios, ajudámos milhares de empresas a expandirem-se internacionalmente e construímos uma reputação de excelência.",
    "mission": "A Nossa Missão",
    "missionDesc": "Fornecer soluções de envio contínuas, fiáveis e eficientes.",
    "team": "A Nossa Equipa",
    "teamDesc": "Uma equipa dedicada de profissionais de logística com décadas de experiência.",
    "commitment": "O Nosso Compromisso",
    "commitmentDesc": "Estamos comprometidos com a excelência, transparência e construção de relações a longo prazo.",
    "reach": "Alcance Global",
    "reachDesc": "Com parcerias em mais de 150 países, garantimos que a sua carga chega em segurança.",
    "missionTitle": "Missão",
    "visionTitle": "Visão",
    "valuesTitle": "Valores",
    "awardTitle": "Prémios",
    "stats": {
      "countries": "Países Servidos",
      "shipments": "Envios Entregues",
      "clients": "Clientes Satisfeitos",
      "ontime": "Entregas Pontuais"
    }
  },
  "contact": {
    "title": "Entre em Contacto",
    "subtitle": "A nossa equipa global está pronta para o ajudar. Contacte um dos nossos escritórios regionais ou utilize os nossos canais dedicados de apoio.",
    "howToReach": "Como Contactar-nos",
    "regionalOffices": "Escritórios Regionais",
    "regionalContact": "Contactos Regionais",
    "general": "Pedidos Gerais",
    "generalDesc": "Para questões gerais sobre os nossos serviços, parcerias e informações da empresa.",
    "supportTitle": "Apoio ao Cliente",
    "supportDesc": "Assistência 24/7 com rastreio, problemas de conta e envios.",
    "sales": "Vendas e Orçamentos",
    "salesDesc": "Obtenha orçamentos personalizados para envios em grande volume e parcerias comerciais.",
    "shipping": "Operações de Envio",
    "shippingDesc": "Questões técnicas sobre alfândega, artigos restritos e diretrizes de embalagem.",
    "formTitle": "Enviar Mensagem",
    "formName": "Nome",
    "formEmail": "E-mail",
    "formSubject": "Assunto",
    "formMessage": "Mensagem"
  },
  
  "footer": {
    "logoAlt": "Logótipo SwiftParcel",
    "description": "Soluções de envio contínuas para as necessidades do seu negócio a nível global.",
    "supportButton": "Disponibilidade de Apoio Global",
    "quickLinks": "Ligações Rápidas",
    "contact": "Contacto",
    "legal": "Informação Legal",
    "terms": "Termos de Serviço",
    "privacy": "Política de Privacidade",
    "cookies": "Cookies e Privacidade",
    "allRightsReserved": "Todos os direitos reservados.",
    "soc2": "Conformidade SOC 2 Tipo II",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "Os Nossos Serviços",
    "metaDescription": "Explore os serviços completos de envio da SwiftParcel, incluindo frete aéreo, frete marítimo, transporte rodoviário e soluções de armazenagem.",
    "heroTitle": "Os Nossos Serviços de Envio",
    "heroSubtitle": "Soluções logísticas abrangentes concebidas para satisfazer as necessidades do seu negócio",
    "keyFeatures": "Principais Características:",
    "learnMore": "Saber Mais",
    "airFreight": {
      "title": "Frete Aéreo",
      "description": "Serviços de carga aérea rápidos e eficientes para envios urgentes. Parceiros com as principais companhias aéreas para garantir que as suas mercadorias cheguem ao destino de forma rápida e segura.",
      "features": {
        "express": "Opções de entrega expresso",
        "worldwide": "Cobertura mundial",
        "tracking": "Acompanhamento em tempo real",
        "temperature": "Opções com controlo de temperatura"
      }
    },
    "oceanFreight": {
      "title": "Frete Marítimo",
      "description": "Soluções de transporte marítimo económicas para cargas volumosas. Ideal para empresas que pretendem transportar mercadorias internacionalmente a tarifas competitivas.",
      "features": {
        "fcl": "Cargas completas de contentor (FCL)",
        "lcl": "Cargas inferiores a um contentor (LCL)",
        "doorToDoor": "Serviço porta-a-porta",
        "customs": "Apoio na desalfandragem"
      }
    },
    "groundTransport": {
      "title": "Transporte Rodoviário",
      "description": "Serviços fiáveis de transporte rodoviário nacional e transfronteiriço. Perfeito para entregas regionais e necessidades de transporte terrestre.",
      "features": {
        "sameDay": "Opções de entrega no mesmo dia",
        "regional": "Distribuição regional",
        "fleet": "Frota dedicada",
        "scheduling": "Agendamento flexível"
      }
    },
    "warehousing": {
      "title": "Armazenagem e Logística",
      "description": "Soluções completas de armazenagem com gestão de inventário. Armazene os seus produtos nas nossas instalações seguras com monitorização 24/7.",
      "features": {
        "climate": "Armazenagem com controlo climático",
        "inventory": "Gestão de inventário",
        "pickPack": "Serviços de preparação e embalagem",
        "distribution": "Apoio à distribuição"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 Funcionalidade em Breve",
    "featureComingSoon": "Esta funcionalidade ainda não está implementada — mas não se preocupe! Pode solicitá-la na sua próxima mensagem! 🚀"
  },
  "quote": {
    "pageTitle": "Obter Orçamento",
    "metaDescription": "Solicite um orçamento de envio da SwiftParcel. Preencha o nosso formulário simples e receba uma proposta competitiva para as suas necessidades de transporte de carga.",
    "heroTitle": "Obtenha um Orçamento Gratuito",
    "heroSubtitle": "Preencha o formulário abaixo e entraremos em contacto consigo com uma proposta competitiva",
    "form": {
      "nameLabel": "Nome",
      "namePlaceholder": "João Silva",
      "companyLabel": "Empresa",
      "companyPlaceholder": "Nome da Empresa (Opcional)",
      "emailLabel": "E-mail",
      "emailPlaceholder": "joao@example.com",
      "countryLabel": "País",
      "countryPlaceholder": "Portugal",
      "contactLabel": "Número de Contacto",
      "contactPlaceholder": "+351 912 345 678",
      "addressLabel": "Morada de Envio",
      "addressPlaceholder": "Introduza a morada completa de envio",
      "packageInfoLabel": "Informações da Encomenda",
      "packageInfoPlaceholder": "Descreva a sua encomenda (dimensões, peso, conteúdo, requisitos especiais de manuseamento)"
    },
    "submitting": "A enviar...",
    "submitButton": "Enviar Pedido de Orçamento",
    "success": {
      "title": "Orçamento Enviado com Sucesso! ✅",
      "description": "O seu ID de acompanhamento é: {{trackingId}}. Entraremos em contacto consigo em breve com um orçamento detalhado."
    },
    "error": {
      "title": "Falha no Envio",
      "generic": "Ocorreu um erro. Por favor, tente novamente."
    }
  },
  "terms": {
    "pageTitle": "Termos de Serviço",
    "title": "Termos de Serviço",
    "intro": "Bem-vindo à SwiftParcel. Ao utilizar o nosso website e serviços, concorda em cumprir e ficar vinculado aos seguintes termos e condições.",
    "section1": {
      "title": "1. Utilização do Domínio",
      "content": "Todas as comunicações e serviços oficiais são realizados exclusivamente através do domínio {{domain}}. A SwiftParcel não opera sob domínios .express ou outras TLDs. Não somos responsáveis por comunicações provenientes de domínios não autorizados."
    },
    "section2": {
      "title": "2. Acordos de Serviço",
      "content": "Os pedidos de envio, orçamentos e serviços de rastreio estão sujeitos às leis internacionais marítimas e aeronáuticas. Acordos específicos de nível de serviço (SLAs) serão fornecidos aquando da celebração do contrato."
    },
    "section3": {
      "title": "3. Contas de Utilizador",
      "content": "É responsável por manter a confidencialidade das credenciais da sua conta. Qualquer atividade realizada na sua conta é da sua inteira responsabilidade."
    }
  },
  "privacy": {
    "pageTitle": "Política de Privacidade",
    "title": "Política de Privacidade",
    "intro": "Na SwiftParcel, damos prioridade à proteção dos seus dados pessoais e empresariais. Esta política descreve como recolhemos, utilizamos e salvaguardamos a sua informação.",
    "dataCollection": {
      "title": "Recolha de Dados",
      "content": "Recolhemos informações necessárias para facilitar a logística global de envios, incluindo moradas do remetente e destinatário, conteúdo das encomendas e dados de contacto. Todos os dados são processados de forma segura."
    },
    "internationalTransfers": {
      "title": "Transferências Internacionais",
      "content": "Enquanto prestador global de logística que opera através de {{domain}}, os seus dados poderão ser transferidos para outros países para facilitar a entrega de encomendas. Garantimos que estão em vigor salvaguardas adequadas para todas as transferências internacionais."
    }
  },
  "cookies": {
    "pageTitle": "Política de Cookies",
    "title": "Política de Cookies",
    "intro": "Esta política explica como a SwiftParcel utiliza cookies e tecnologias semelhantes para o reconhecer quando visita o nosso website em {{domain}}.",
    "whatAreCookies": {
      "title": "O que são cookies?",
      "content": "Os cookies são pequenos ficheiros de dados colocados no seu computador ou dispositivo móvel quando visita um website. São amplamente utilizados pelos proprietários de websites para que estes funcionem, ou funcionem de forma mais eficiente, bem como para fornecer informações de relatórios."
    },
    "controllingCookies": {
      "title": "Gestão de Cookies",
      "content": "Tem o direito de decidir se aceita ou rejeita cookies. Pode exercer os seus direitos relativos a cookies definindo as suas preferências no Gestor de Consentimento de Cookies disponível no rodapé do website."
    }
  },

  "dashboard": {
    "accessDenied": "Tem de iniciar sessão para aceder ao painel.",
    "signOutFailed": "Falha ao terminar sessão. Por favor, tente novamente.",
    "active": "Ativo",
    "welcomeBack": "Bem-vindo novamente"
  },
  "dash_nav": {
    "overview": "Visão Geral",
    "shipments": "Envios",
    "newShipment": "Novo Envio",
    "track": "Rastrear",
    "orders": "Encomendas",
    "messages": "Mensagens",
    "activity": "Atividade",
    "report": "Relatório",
    "support": "Suporte",
    "account": "Conta",
    "billing": "Faturação",
    "documents": "Documentos",
    "settings": "Definições",
    "homePage": "Página Inicial",
    "createShipment": "Criar Envio",
    "signout": "Terminar Sessão",
    "myAccount": "A Minha Conta"
  },
  "common": {
    "user": "Utilizador",
    "logoAlt": "Logótipo SwiftParcel",
    "toggleNavigation": "Alternar navegação",
    "viewAll": "Ver Tudo"
  },
  "dashboardOverview": {
    "loading": "A carregar o seu painel logístico...",
    "errors": {
      "fetchFailed": "Falha ao carregar os dados do painel. Por favor, tente novamente."
    },
    "empty": {
      "title": "O Seu Centro Logístico Global",
      "subtitle": "Gira envios, acompanhe entregas e expanda o seu negócio — tudo num só local."
    },
    "actions": {
      "newShipmentDesc": "Criar e agendar uma nova entrega",
      "trackDesc": "Monitorizar o estado da entrega em tempo real",
      "billingDesc": "Ver faturas e histórico de pagamentos",
      "documentsDesc": "Aceder a etiquetas de envio e formulários aduaneiros"
    },
    "stats": {
      "total": "Total de Envios",
      "pending": "Pendentes",
      "inTransit": "Em Trânsito",
      "delivered": "Entregues",
      "canceled": "Cancelados",
      "successRate": "Taxa de Sucesso"
    },
    "createFirstShipment": "Crie o Seu Primeiro Envio",
    "recentShipments": "Envios Recentes",
    "shipmentsPlaceholder": "O componente da lista de envios será apresentado aqui.",
    "liveTracking": "Rastreio em Direto",
    "trackingComingSoon": "Atualizações GPS em tempo real em breve.",
    "packageInsights": "Informações da Encomenda",
    "insightsDescription": "Peso, dimensões e dados aduaneiros.",
    "globalNetwork": "Rede Global de Entrega",
    "mapDescription": "Visualização de rotas em direto impulsionada pela SwiftParcel Intelligence™"
  },
  "shipments": {
    "title": "Envios",
    "subtitle": "Gira e acompanhe todos os seus envios num só local",
    "loading": "A carregar envios...",
    "errors": {
      "fetchFailed": "Falha ao carregar os envios. Por favor, tente novamente."
    },
    "stats": {
      "total": "Total de Envios",
      "pending": "Pendentes",
      "inTransit": "Em Trânsito",
      "delivered": "Entregues",
      "canceled": "Cancelados"
    },
    "search": {
      "placeholder": "Pesquisar por ID de rastreio, destino..."
    },
    "filter": {
      "status": "Estado",
      "allStatuses": "Todos os Estados"
    },
    "status": {
      "pending": "Pendente",
      "inTransit": "Em Trânsito",
      "delivered": "Entregue",
      "canceled": "Cancelado"
    },
    "actions": {
      "exportCSV": "Exportar CSV",
      "printLabels": "Imprimir Etiquetas",
      "track": "Rastrear",
      "details": "Detalhes"
    },
    "table": {
      "id": "ID do Envio",
      "tracking": "Rastreio",
      "route": "Rota",
      "service": "Serviço",
      "weight": "Peso",
      "date": "Data",
      "estDelivery": "Entrega Estimada",
      "actions": "Ações"
    },
    "csv": {
      "id": "ID",
      "tracking": "Rastreio",
      "from": "De",
      "to": "Para",
      "service": "Serviço",
      "weight": "Peso (kg)",
      "date": "Data",
      "estDelivery": "Entrega Estimada",
      "status": "Estado"
    },
    "print": {
      "title": "Etiquetas SwiftParcel",
      "tracking": "Rastreio",
      "to": "Para"
    },
    "noData": "Nenhum envio encontrado. Tente ajustar os seus filtros."
  },
  "newShipment": {
    "title": "Submeter Pedido de Envio",
    "subtitle": "Iremos analisar os seus dados e enviar-lhe uma proposta confirmada dentro de 2 horas úteis.",
    "sections": {
      "pickupMethod": "1. Método de Recolha",
      "addresses": "2. Moradas",
      "packageInfo": "3. Informações da Encomenda",
      "transportSchedule": "4. Transporte e Agendamento"
    },
    "pickup": {
      "dropoffTitle": "Entrega no Centro",
      "dropoffDesc": "Leve a sua encomenda a um dos nossos centros locais",
      "pickupTitle": "Agendar Recolha",
      "pickupDesc": "Recolheremos na sua localização"
    },
    "addresses": {
      "sender": "Remetente (Recolha)",
      "recipient": "Destinatário (Entrega)",
      "businessLocation": "Localização Comercial"
    },
    "placeholders": {
      "fullName": "Nome Completo",
      "phone": "Telefone",
      "email": "E-mail",
      "streetAddress": "Morada",
      "city": "Cidade",
      "zip": "Código Postal",
      "packageDescription": "Descreva o conteúdo (ex: eletrónica, roupa, maquinaria)",
      "declaredValue": "Valor Declarado (para seguro)",
      "customsContents": "Liste todos os artigos, quantidades e valores...",
      "specialInstructions": "Instruções ou requisitos especiais...",
      "additionalNotes": "Notas adicionais"
    },
    "labels": {
      "preferredPickupDate": "Data Pretendida de Recolha",
      "preferredDeliveryDate": "Data Pretendida de Entrega",
      "shipmentType": "Tipo de Envio",
      "contactPreference": "Preferência de Contacto"
    },
    "package": {
      "categoryLabel": "Categoria",
      "categories": {
        "general": "Mercadorias Gerais",
        "fragile": "Fragil",
        "perishable": "Perecível",
        "hazardous": "Perigoso (requer aprovação)",
        "documents": "Documentos"
      },
      "hazardousWarning": "Materiais perigosos requerem manuseamento e documentação especiais. A nossa equipa entrará em contacto consigo.",
      "customsClearance": "Este envio requer desalfandragem"
    },
    "transport": {
      "air": "Transporte Aéreo",
      "ground": "Transporte Rodoviário"
    },
    "shipmentTypes": {
      "standard": "Standard",
      "express": "Expresso (24–72h)",
      "urgent": "Urgente (Mesmo Dia/Dia Seguinte)"
    },
    "contactPreferences": {
      "email": "E-mail",
      "sms": "SMS",
      "phone": "Chamada Telefónica"
    },
    "errors": {
      "senderName": "O nome do remetente é obrigatório",
      "senderPhone": "O telefone do remetente é obrigatório",
      "senderEmail": "É necessário um e-mail válido do remetente",
      "senderAddress": "A morada do remetente é obrigatória",
      "senderCity": "A cidade do remetente é obrigatória",
      "recipientName": "O nome do destinatário é obrigatório",
      "recipientPhone": "O telefone do destinatário é obrigatório",
      "recipientEmail": "É necessário um e-mail válido do destinatário",
      "recipientAddress": "A morada do destinatário é obrigatória",
      "recipientCity": "A cidade do destinatário é obrigatória",
      "packageDescription": "A descrição da encomenda é obrigatória",
      "weight": "O peso deve ser de pelo menos 0,1 kg",
      "length": "O comprimento deve ser de pelo menos 1 cm",
      "width": "A largura deve ser de pelo menos 1 cm",
      "height": "A altura deve ser de pelo menos 1 cm",
      "customsContents": "A declaração de conteúdo aduaneiro é obrigatória",
      "submitFailed": "Falha ao submeter o pedido. Por favor, tente novamente."
    },
    "success": {
      "message": "Pedido submetido com sucesso! O seu ID de envio é: {{id}}"
    },
    "submitting": "A submeter pedido...",
    "submitButton": "Submeter Pedido de Envio",
    "help": {
      "reviewTime": "Após a submissão, a nossa equipa logística irá analisar o seu pedido e enviar-lhe uma proposta confirmada dentro de 2 horas úteis.",
      "urgentHelp": "📞 Precisa de ajuda urgente? Ligue-nos para +1 (800) SWIFT-123"
    }
  }
},
th: {
  "nav": {
    "home": "หน้าหลัก",
    "services": "บริการ",
    "quote": "ขอใบเสนอราคา",
    "track": "ติดตามพัสดุ",
    "about": "เกี่ยวกับเรา",
    "contact": "ติดต่อเรา",
    "dashboard": "แดชบอร์ด",
    "login": "เข้าสู่ระบบ",
    "signup": "สมัครสมาชิก",
    "signout": "ออกจากระบบ"
  },
  "logins": {
    "loginTitle": "เข้าสู่บัญชีของคุณ",
    "noAccount": "ยังไม่มีบัญชี?",
    "signupNow": "สมัครเลย",
    "emailLabel": "ที่อยู่อีเมล",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "รหัสผ่าน",
    "passwordPlaceholder": "กรอกรหัสผ่าน",
    "signupTitle": "สร้างบัญชีใหม่",
    "haveAccount": "มีบัญชีอยู่แล้ว?",
    "loginNow": "เข้าสู่ระบบ",
    "signupButton": "สมัครสมาชิก",
    "loginButton": "เข้าสู่ระบบ",
    "loggingIn": "กำลังเข้าสู่ระบบ..."
  },
  "documents": {
    "pageTitle": "เอกสารของฉัน",
    "metaDescription": "ดาวน์โหลดใบแจ้งหนี้ สัญญา และเอกสารจัดส่งของคุณ",
    "title": "เอกสารของฉัน",
    "subtitle": "เข้าถึงและดาวน์โหลดเอกสารที่เกี่ยวข้องกับการจัดส่งทั้งหมดได้ในที่เดียว",
    "download": "ดาวน์โหลด",
    "empty": {
      "title": "ยังไม่มีเอกสาร",
      "description": "คุณยังไม่ได้สร้างใบแจ้งหนี้หรือสัญญาใดๆ เอกสารจะแสดงที่นี่เมื่อพร้อมใช้งาน"
    },
    "types": {
      "invoice": "ใบแจ้งหนี้การจัดส่ง",
      "contract": "สัญญาให้บริการ",
      "receipt": "ใบเสร็จรับเงิน",
      "waybill": "ใบกำกับสินค้า (Waybill)"
    },
    "success": {
      "downloadedTitle": "เริ่มดาวน์โหลดแล้ว",
      "downloadedDesc": "กำลังดาวน์โหลด {{name}}..."
    },
    "errors": {
      "title": "ข้อผิดพลาดเกี่ยวกับเอกสาร",
      "fetchFailed": "ไม่สามารถโหลดเอกสารของคุณได้ กรุณาลองอีกครั้งภายหลัง",
      "downloadFailed": "ไม่สามารถดาวน์โหลดเอกสารได้",
      "noDownloadUrl": "เอกสารนี้ไม่สามารถดาวน์โหลดได้"
    }
  },
  "billing": {
    "pageTitle": "การเรียกเก็บเงินและใบแจ้งหนี้",
    "metaDescription": "จัดการการสมัครใช้งาน SwiftParcel ของคุณ ดูใบแจ้งหนี้ และดาวน์โหลดใบเสร็จ",
    "title": "การเรียกเก็บเงินและใบแจ้งหนี้",
    "subtitle": "ติดตามการชำระเงิน จัดการแผนบริการ และเข้าถึงเอกสารทางการเงินทั้งหมด",
    "viewAllDocuments": "ดูเอกสารทั้งหมด",
    "subscription": {
      "title": "แผนปัจจุบัน",
      "description": "รายละเอียดการสมัครใช้งานของคุณ",
      "basicPlan": "แผนพื้นฐาน",
      "none": "คุณไม่มีแผนบริการที่ใช้งานอยู่"
    },
    "status": {
      "active": "ใช้งานอยู่",
      "pastDue": "ค้างชำระ",
      "canceled": "ยกเลิกแล้ว",
      "inactive": "ไม่ได้ใช้งาน"
    },
    "invoices": {
      "title": "ใบแจ้งหนี้ล่าสุด",
      "viewAll": "ดูทั้งหมด",
      "empty": {
        "title": "ยังไม่มีใบแจ้งหนี้",
        "description": "ใบแจ้งหนี้ของคุณจะปรากฏที่นี่หลังจากคุณทำการชำระเงิน"
      }
    },
    "invoice": {
      "defaultDesc": "ใบแจ้งหนี้การจัดส่ง"
    },
    "errors": {
      "title": "ข้อผิดพลาดด้านการเรียกเก็บเงิน",
      "fetchFailed": "ไม่สามารถโหลดข้อมูลการเรียกเก็บเงินได้ กรุณาลองอีกครั้งภายหลัง"
    }
  },
  "login": {
    "loginTitlePage": "เข้าสู่ระบบ",
    "signupTitlePage": "สมัครสมาชิก",
    "metaDescription": "เข้าถึงบัญชี SwiftParcel ของคุณอย่างปลอดภัย",
    "loginTitle": "ยินดีต้อนรับกลับ",
    "signupTitle": "สร้างบัญชีของคุณ",
    "emailLabel": "อีเมล",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "รหัสผ่าน",
    "passwordPlaceholder": "••••••••",
    "loginButton": "เข้าสู่ระบบ",
    "signupButton": "สมัครสมาชิก",
    "loginWithGoogle": "ดำเนินการต่อด้วย Google",
    "signupWithGoogle": "สมัครด้วย Google",
    "orContinueWith": "หรือดำเนินการต่อด้วยอีเมล",
    "loginNow": "เข้าสู่ระบบตอนนี้",
    "signupNow": "สมัครตอนนี้",
    "haveAccount": "มีบัญชีอยู่แล้ว?",
    "noAccount": "ยังไม่มีบัญชี?",
    "rememberMe": "จดจำฉัน",
    "forgotPassword": {
      "link": "ลืมรหัสผ่าน?",
      "title": "รีเซ็ตรหัสผ่านของคุณ",
      "description": "กรอกอีเมลของคุณ เราจะส่งลิงก์เพื่อรีเซ็ตรหัสผ่านให้",
      "sendButton": "ส่งลิงก์",
      "sending": "กำลังส่ง...",
      "successTitle": "ตรวจสอบกล่องจดหมายของคุณ",
      "successDesc": "เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง {{email}} แล้ว",
      "errorTitle": "ไม่สามารถส่งลิงก์ได้",
      "errorDesc": "กรุณาตรวจสอบอีเมลและลองอีกครั้ง",
      "backToLogin": "กลับไปยังหน้าเข้าสู่ระบบ"
    },
    "errors": {
      "title": "การยืนยันตัวตนล้มเหลว",
      "generic": "เกิดข้อผิดพลาดที่ไม่คาดคิด",
      "emailInUse": "อีเมลนี้ลงทะเบียนไว้แล้ว",
      "invalidEmail": "กรุณากรอกอีเมลที่ถูกต้อง",
      "invalidCredentials": "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      "weakPassword": "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",
      "tooManyRequests": "พยายามมากเกินไป กรุณารอสักครู่",
      "emailRequired": "ต้องระบุอีเมล",
      "googleFailed": "เข้าสู่ระบบด้วย Google ล้มเหลว",
      "tryAgain": "กรุณาลองอีกครั้ง"
    },
    "success": {
      "loginTitle": "เข้าสู่ระบบสำเร็จ",
      "loginDesc": "กำลังเปลี่ยนเส้นทางไปยังแดชบอร์ดของคุณ...",
      "signupTitle": "สร้างบัญชีเรียบร้อย!",
      "signupDesc": "กรุณายืนยันอีเมลของคุณก่อนเข้าสู่ระบบ",
      "googleLogin": "เข้าสู่ระบบด้วย Google แล้ว"
    },
    "loggingIn": "กำลังเข้าสู่ระบบ...",
    "signingUp": "กำลังสร้างบัญชี...",
    "footer": "ปลอดภัย เชื่อถือได้ รวดเร็ว"
  },
  "home": {
    "heroTitle": "การจัดส่งอย่างไร้รอยต่อเริ่มต้นที่นี่!",
    "heroSubtitle": "โซลูชันการจัดส่งที่รวดเร็ว น่าเชื่อถือ และปลอดภัยสำหรับธุรกิจทั่วโลก ส่งสินค้าถึงมือคุณตรงเวลา ทุกครั้ง",
    "getQuote": "รับใบเสนอราคาฟรี",
    "viewDemo": "ดูตัวอย่าง",
    "whyChoose": "ทำไมต้องเลือก SwiftParcel?",
    "whyChooseSub": "เราให้บริการโซลูชันการจัดส่งแบบครบวงจรที่ออกแบบมาเพื่อตอบโจทย์ธุรกิจของคุณ",
    "securePkg": "บรรจุภัณฑ์ปลอดภัย",
    "securePkgDesc": "โซลูชันบรรจุภัณฑ์ระดับมืออาชีพสำหรับสินค้าทุกประเภท",
    "fastDelivery": "จัดส่งรวดเร็ว",
    "fastDeliveryDesc": "ตัวเลือกจัดส่งด่วนเพื่อให้ทันตามกำหนดเวลาของคุณ",
    "insured": "ประกันการจัดส่ง",
    "insuredDesc": "ความคุ้มครองประกันเต็มรูปแบบเพื่อความอุ่นใจ",
    "support": "สนับสนุน 24/7",
    "supportDesc": "บริการลูกค้าและการติดตามตลอด 24 ชั่วโมง"
  },
  "track": {
    "title": "ติดตามพัสดุของคุณ",
    "subtitle": "กรอกรหัสติดตามเพื่อรับข้อมูลอัปเดตแบบเรียลไทม์เกี่ยวกับพัสดุของคุณ",
    "placeholder": "กรอกรหัสติดตาม (เช่น SP1234567890)",
    "button": "ติดตาม",
    "tracking": "กำลังติดตาม...",
    "details": "รายละเอียดพัสดุ",
    "status": "สถานะ",
    "customer": "ลูกค้า",
    "contact": "ช่องทางติดต่อ",
    "destination": "ปลายทาง",
    "address": "ที่อยู่จัดส่ง",
    "packageInfo": "ข้อมูลพัสดุ",
    "created": "สร้างเมื่อ",
    "updated": "อัปเดตล่าสุด"
  },
  "about": {
    "title": "เกี่ยวกับ SwiftParcel",
    "teamTitle": "ทีมงานของเรา",
    "subtitle": "พันธมิตรที่เชื่อถือได้ด้านโลจิสติกส์และโซลูชันการจัดส่งระดับโลก ตั้งแต่ปี 2010",
    "storyTitle": "เรื่องราวของเรา",
    "storyText1": "SwiftParcel ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่เรียบง่ายแต่ทรงพลัง: เพื่อทำให้การจัดส่งระหว่างประเทศเข้าถึงได้ง่าย น่าเชื่อถือ และไร้ความกังวลสำหรับธุรกิจทุกขนาด",
    "storyText2": "ตลอดหลายปีที่ผ่านมา เราได้จัดการพัสดุหลายล้านชิ้น ช่วยธุรกิจหลายพันรายขยายสู่ตลาดโลก และสร้างชื่อเสียงด้านความเป็นเลิศ",
    "storyDesc1": "SwiftParcel ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่เรียบง่ายแต่ทรงพลัง: เพื่อทำให้การจัดส่งระหว่างประเทศเข้าถึงได้ง่าย น่าเชื่อถือ และไร้ความกังวลสำหรับธุรกิจทุกขนาด",
    "storyDesc2": "ตลอดหลายปีที่ผ่านมา เราได้จัดการพัสดุหลายล้านชิ้น ช่วยธุรกิจหลายพันรายขยายสู่ตลาดโลก และสร้างชื่อเสียงด้านความเป็นเลิศ",
    "mission": "ภารกิจของเรา",
    "missionDesc": "มอบโซลูชันการจัดส่งที่ราบรื่น น่าเชื่อถือ และมีประสิทธิภาพ",
    "team": "ทีมงานของเรา",
    "teamDesc": "ทีมงานผู้เชี่ยวชาญด้านโลจิสติกส์ที่ทุ่มเทและมีประสบการณ์หลายสิบปี",
    "commitment": "คำมั่นสัญญาของเรา",
    "commitmentDesc": "เราให้ความสำคัญกับความเป็นเลิศ ความโปร่งใส และการสร้างความสัมพันธ์ระยะยาว",
    "reach": "เครือข่ายทั่วโลก",
    "reachDesc": "ด้วยพันธมิตรในกว่า 150 ประเทศ เราดูแลให้สินค้าของคุณถึงปลายทางอย่างปลอดภัย",
    "missionTitle": "ภารกิจ",
    "visionTitle": "วิสัยทัศน์",
    "valuesTitle": "ค่านิยม",
    "awardTitle": "รางวัล",
    "stats": {
      "countries": "ประเทศที่ให้บริการ",
      "shipments": "จำนวนพัสดุที่จัดส่ง",
      "clients": "ลูกค้าพึงพอใจ",
      "ontime": "ส่งตรงเวลา"
    }
  },
  "contact": {
    "title": "ติดต่อเรา",
    "subtitle": "ทีมงานระดับโลกของเราพร้อมให้ความช่วยเหลือ ติดต่อสำนักงานประจำภูมิภาค หรือใช้ช่องทางสนับสนุนเฉพาะของเรา",
    "howToReach": "วิธีติดต่อเรา",
    "regionalOffices": "สำนักงานประจำภูมิภาค",
    "regionalContact": "ช่องทางติดต่อภูมิภาค",
    "general": "คำถามทั่วไป",
    "generalDesc": "สำหรับคำถามทั่วไปเกี่ยวกับบริการ พันธมิตร และข้อมูลบริษัท",
    "supportTitle": "ฝ่ายสนับสนุนลูกค้า",
    "supportDesc": "ความช่วยเหลือตลอด 24 ชั่วโมงเกี่ยวกับการติดตาม ปัญหาบัญชี และการจัดส่ง",
    "sales": "ฝ่ายขายและใบเสนอราคา",
    "salesDesc": "รับใบเสนอราคาแบบกำหนดเองสำหรับการจัดส่งปริมาณมากและพันธมิตรทางธุรกิจ",
    "shipping": "การดำเนินงานจัดส่ง",
    "shippingDesc": "คำถามทางเทคนิคเกี่ยวกับศุลกากร สินค้าต้องห้าม และแนวทางการบรรจุ",
    "formTitle": "ส่งข้อความ",
    "formName": "ชื่อ",
    "formEmail": "อีเมล",
    "formSubject": "หัวเรื่อง",
    "formMessage": "ข้อความ"
  },
  
  "footer": {
    "logoAlt": "โลโก้ SwiftParcel",
    "description": "โซลูชันการจัดส่งอย่างไร้รอยต่อเพื่อตอบโจทย์ความต้องการทางธุรกิจของคุณทั่วโลก",
    "supportButton": "สถานะการให้บริการสนับสนุนทั่วโลก",
    "quickLinks": "ลิงก์ด่วน",
    "contact": "ติดต่อเรา",
    "legal": "ข้อกฎหมาย",
    "terms": "ข้อกำหนดการให้บริการ",
    "privacy": "นโยบายความเป็นส่วนตัว",
    "cookies": "คุกกี้และนโยบายความเป็นส่วนตัว",
    "allRightsReserved": "สงวนลิขสิทธิ์ทุกประการ",
    "soc2": "ได้รับการรับรองตามมาตรฐาน SOC 2 Type II",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "บริการของเรา",
    "metaDescription": "สำรวจบริการจัดส่งแบบครบวงจรจาก SwiftParcel รวมถึงขนส่งทางอากาศ ขนส่งทางทะเล ขนส่งทางถนน และโซลูชันคลังสินค้า",
    "heroTitle": "บริการจัดส่งของเรา",
    "heroSubtitle": "โซลูชันโลจิสติกส์แบบครบวงจรที่ออกแบบมาเพื่อตอบโจทย์ธุรกิจของคุณ",
    "keyFeatures": "คุณสมบัติหลัก:",
    "learnMore": "เรียนรู้เพิ่มเติม",
    "airFreight": {
      "title": "ขนส่งทางอากาศ",
      "description": "บริการขนส่งสินค้าทางอากาศที่รวดเร็วและมีประสิทธิภาพสำหรับสินค้าที่ต้องการจัดส่งด่วน เราเป็นพันธมิตรกับสายการบินชั้นนำเพื่อให้มั่นใจว่าสินค้าของคุณจะถึงปลายทางอย่างรวดเร็วและปลอดภัย",
      "features": {
        "express": "ตัวเลือกจัดส่งด่วน",
        "worldwide": "ครอบคลุมทั่วโลก",
        "tracking": "ติดตามแบบเรียลไทม์",
        "temperature": "ตัวเลือกควบคุมอุณหภูมิ"
      }
    },
    "oceanFreight": {
      "title": "ขนส่งทางทะเล",
      "description": "โซลูชันการขนส่งทางทะเลที่คุ้มค่าสำหรับสินค้าปริมาณมาก เหมาะสำหรับธุรกิจที่ต้องการส่งสินค้าระหว่างประเทศในอัตราที่แข่งขันได้",
      "features": {
        "fcl": "สินค้าเต็มตู้ (FCL)",
        "lcl": "สินค้าไม่เต็มตู้ (LCL)",
        "doorToDoor": "บริการถึงหน้าประตู",
        "customs": "ช่วยเหลือด้านพิธีการศุลกากร"
      }
    },
    "groundTransport": {
      "title": "ขนส่งทางถนน",
      "description": "บริการขนส่งทางถนนภายในประเทศและข้ามพรมแดนที่เชื่อถือได้ เหมาะสำหรับการจัดส่งในระดับภูมิภาคและความต้องการขนส่งทางบก",
      "features": {
        "sameDay": "ตัวเลือกจัดส่งภายในวันเดียว",
        "regional": "กระจายสินค้าในระดับภูมิภาค",
        "fleet": "รถขนส่งเฉพาะ",
        "scheduling": "จัดตารางเวลาได้อย่างยืดหยุ่น"
      }
    },
    "warehousing": {
      "title": "คลังสินค้าและโลจิสติกส์",
      "description": "โซลูชันคลังสินค้าแบบครบวงจรพร้อมระบบจัดการสต็อก สินค้าของคุณจะถูกเก็บรักษาในคลังที่ปลอดภัยของเราพร้อมระบบเฝ้าระวังตลอด 24 ชั่วโมง",
      "features": {
        "climate": "คลังสินค้าควบคุมสภาพแวดล้อม",
        "inventory": "ระบบจัดการสต็อก",
        "pickPack": "บริการคัดแยกและบรรจุสินค้า",
        "distribution": "สนับสนุนการกระจายสินค้า"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 ฟีเจอร์กำลังจะมาถึง",
    "featureComingSoon": "ฟีเจอร์นี้ยังไม่ได้เปิดใช้งาน — แต่ไม่ต้องกังวล! คุณสามารถร้องขอได้ในข้อความถัดไป! 🚀"
  },
  "quote": {
    "pageTitle": "ขอใบเสนอราคา",
    "metaDescription": "ร้องขอใบเสนอราคาค่าจัดส่งจาก SwiftParcel กรอกแบบฟอร์มง่ายๆ ของเราและรับใบเสนอราคาที่แข่งขันได้สำหรับความต้องการจัดส่งสินค้าของคุณ",
    "heroTitle": "รับใบเสนอราคาฟรี",
    "heroSubtitle": "กรอกแบบฟอร์มด้านล่าง และเราจะติดต่อกลับคุณพร้อมใบเสนอราคาที่แข่งขันได้",
    "form": {
      "nameLabel": "ชื่อ",
      "namePlaceholder": "สมชาย ใจดี",
      "companyLabel": "บริษัท",
      "companyPlaceholder": "ชื่อบริษัท (ไม่จำเป็น)",
      "emailLabel": "อีเมล",
      "emailPlaceholder": "somchai@example.com",
      "countryLabel": "ประเทศ",
      "countryPlaceholder": "ประเทศไทย",
      "contactLabel": "เบอร์ติดต่อ",
      "contactPlaceholder": "+66 81 234 5678",
      "addressLabel": "ที่อยู่จัดส่ง",
      "addressPlaceholder": "กรอกที่อยู่จัดส่งให้ครบถ้วน",
      "packageInfoLabel": "ข้อมูลพัสดุ",
      "packageInfoPlaceholder": "อธิบายพัสดุของคุณ (ขนาด น้ำหนัก เนื้อหา สิ่งที่ต้องการเป็นพิเศษในการจัดการ)"
    },
    "submitting": "กำลังส่ง...",
    "submitButton": "ส่งคำขอใบเสนอราคา",
    "success": {
      "title": "ส่งคำขอเรียบร้อยแล้ว! ✅",
      "description": "รหัสติดตามของคุณคือ: {{trackingId}} เราจะติดต่อคุณเร็วๆ นี้พร้อมใบเสนอราคาโดยละเอียด"
    },
    "error": {
      "title": "การส่งล้มเหลว",
      "generic": "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง"
    }
  },
  "terms": {
    "pageTitle": "ข้อกำหนดการให้บริการ",
    "title": "ข้อกำหนดการให้บริการ",
    "intro": "ยินดีต้อนรับสู่ SwiftParcel การใช้งานเว็บไซต์และบริการของเรา ถือว่าคุณยอมรับและผูกพันตามข้อกำหนดและเงื่อนไขต่อไปนี้",
    "section1": {
      "title": "1. การใช้โดเมน",
      "content": "การสื่อสารและบริการทั้งหมดดำเนินการผ่านโดเมน {{domain}} เท่านั้น SwiftParcel ไม่ได้ให้บริการผ่านโดเมน .express หรือโดเมนอื่นใด เราจะไม่รับผิดชอบต่อการสื่อสารที่มาจากโดเมนที่ไม่ได้รับอนุญาต"
    },
    "section2": {
      "title": "2. ข้อตกลงการให้บริการ",
      "content": "คำขอจัดส่ง ใบเสนอราคา และบริการติดตาม จะอยู่ภายใต้กฎหมายระหว่างประเทศด้านการเดินเรือและอากาศ ข้อตกลงระดับการให้บริการ (SLA) ที่เฉพาะเจาะจงจะแจ้งให้ทราบเมื่อมีการทำสัญญา"
    },
    "section3": {
      "title": "3. บัญชีผู้ใช้",
      "content": "คุณมีหน้าที่รักษาความลับของข้อมูลเข้าสู่ระบบบัญชีของคุณ กิจกรรมใดๆ ที่เกิดขึ้นภายใต้บัญชีของคุณถือเป็นความรับผิดชอบของคุณ"
    }
  },
  "privacy": {
    "pageTitle": "นโยบายความเป็นส่วนตัว",
    "title": "นโยบายความเป็นส่วนตัว",
    "intro": "ที่ SwiftParcel เราให้ความสำคัญกับการปกป้องข้อมูลส่วนบุคคลและข้อมูลทางธุรกิจของคุณ นโยบายฉบับนี้อธิบายว่าเราเก็บรวบรวม ใช้ และคุ้มครองข้อมูลของคุณอย่างไร",
    "dataCollection": {
      "title": "การเก็บรวบรวมข้อมูล",
      "content": "เราเก็บรวบรวมข้อมูลที่จำเป็นเพื่ออำนวยความสะดวกด้านโลจิสติกส์ระดับโลก รวมถึงที่อยู่ผู้ส่ง/ผู้รับ รายละเอียดสินค้า และข้อมูลติดต่อ ข้อมูลทั้งหมดจะถูกประมวลผลอย่างปลอดภัย"
    },
    "internationalTransfers": {
      "title": "การโอนข้อมูลระหว่างประเทศ",
      "content": "ในฐานะผู้ให้บริการโลจิสติกส์ระดับโลกที่ดำเนินงานผ่าน {{domain}} ข้อมูลของคุณอาจถูกโอนข้ามพรมแดนเพื่ออำนวยความสะดวกในการจัดส่ง เราดูแลให้มีมาตรการคุ้มครองที่เหมาะสมสำหรับการโอนข้อมูลระหว่างประเทศทั้งหมด"
    }
  },
  "cookies": {
    "pageTitle": "นโยบายคุกกี้",
    "title": "นโยบายคุกกี้",
    "intro": "นโยบายนี้อธิบายว่า SwiftParcel ใช้คุกกี้และเทคโนโลยีที่คล้ายกันอย่างไร เพื่อจดจำคุณเมื่อคุณเยี่ยมชมเว็บไซต์ของเราที่ {{domain}}",
    "whatAreCookies": {
      "title": "คุกกี้คืออะไร?",
      "content": "คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่ถูกจัดเก็บไว้ในคอมพิวเตอร์หรืออุปกรณ์มือถือของคุณเมื่อคุณเข้าชมเว็บไซต์ เว็บไซต์ส่วนใหญ่ใช้คุกกี้เพื่อให้เว็บไซต์ทำงานได้ หรือทำงานได้อย่างมีประสิทธิภาพมากขึ้น รวมถึงเพื่อจัดทำรายงานข้อมูล"
    },
    "controllingCookies": {
      "title": "การควบคุมคุกกี้",
      "content": "คุณมีสิทธิ์ตัดสินใจว่าจะยอมรับหรือปฏิเสธคุกกี้ คุณสามารถใช้สิทธิ์นี้ได้โดยการตั้งค่าความต้องการของคุณในตัวจัดการความยินยอมคุกกี้ (Cookie Consent Manager) ที่อยู่ในส่วนท้ายของเว็บไซต์"
    }
  },

  "dashboard": {
    "accessDenied": "คุณต้องเข้าสู่ระบบก่อนจึงจะสามารถเข้าถึงแดชบอร์ดได้",
    "signOutFailed": "ออกจากระบบไม่สำเร็จ กรุณาลองอีกครั้ง",
    "active": "ใช้งานอยู่",
    "welcomeBack": "ยินดีต้อนรับกลับ"
  },
  "dash_nav": {
    "overview": "ภาพรวม",
    "shipments": "พัสดุ",
    "newShipment": "พัสดุใหม่",
    "track": "ติดตาม",
    "orders": "คำสั่งซื้อ",
    "messages": "ข้อความ",
    "activity": "กิจกรรม",
    "report": "รายงาน",
    "support": "สนับสนุน",
    "account": "บัญชี",
    "billing": "การเรียกเก็บเงิน",
    "documents": "เอกสาร",
    "settings": "การตั้งค่า",
    "homePage": "หน้าหลัก",
    "createShipment": "สร้างพัสดุ",
    "signout": "ออกจากระบบ",
    "myAccount": "บัญชีของฉัน"
  },
  "common": {
    "user": "ผู้ใช้",
    "logoAlt": "โลโก้ SwiftParcel",
    "toggleNavigation": "สลับการนำทาง",
    "viewAll": "ดูทั้งหมด"
  },
  "dashboardOverview": {
    "loading": "กำลังโหลดแดชบอร์ดโลจิสติกส์ของคุณ...",
    "errors": {
      "fetchFailed": "ไม่สามารถโหลดข้อมูลแดชบอร์ดได้ กรุณาลองอีกครั้ง"
    },
    "empty": {
      "title": "ศูนย์กลางโลจิสติกส์ระดับโลกของคุณ",
      "subtitle": "จัดการพัสดุ ติดตามการจัดส่ง และขยายธุรกิจของคุณ — ทั้งหมดในที่เดียว"
    },
    "actions": {
      "newShipmentDesc": "สร้างและกำหนดเวลาจัดส่งใหม่",
      "trackDesc": "ตรวจสอบสถานะการจัดส่งแบบเรียลไทม์",
      "billingDesc": "ดูใบแจ้งหนี้และประวัติการชำระเงิน",
      "documentsDesc": "เข้าถึงฉลากจัดส่งและแบบฟอร์มศุลกากร"
    },
    "stats": {
      "total": "จำนวนพัสดุทั้งหมด",
      "pending": "รอการดำเนินการ",
      "inTransit": "อยู่ระหว่างจัดส่ง",
      "delivered": "จัดส่งแล้ว",
      "canceled": "ยกเลิกแล้ว",
      "successRate": "อัตราความสำเร็จ"
    },
    "createFirstShipment": "สร้างพัสดุแรกของคุณ",
    "recentShipments": "พัสดุล่าสุด",
    "shipmentsPlaceholder": "คอมโพเนนต์รายการพัสดุจะแสดงที่นี่",
    "liveTracking": "ติดตามแบบสด",
    "trackingComingSoon": "อัปเดตตำแหน่ง GPS แบบเรียลไทม์จะเปิดให้บริการเร็วๆ นี้",
    "packageInsights": "ข้อมูลเชิงลึกของพัสดุ",
    "insightsDescription": "น้ำหนัก ขนาด และข้อมูลศุลกากร",
    "globalNetwork": "เครือข่ายจัดส่งทั่วโลก",
    "mapDescription": "การแสดงเส้นทางแบบสด ขับเคลื่อนโดย SwiftParcel Intelligence™"
  },
  "shipments": {
    "title": "พัสดุ",
    "subtitle": "จัดการและติดตามพัสดุทั้งหมดของคุณในที่เดียว",
    "loading": "กำลังโหลดพัสดุ...",
    "errors": {
      "fetchFailed": "ไม่สามารถโหลดพัสดุได้ กรุณาลองอีกครั้ง"
    },
    "stats": {
      "total": "จำนวนพัสดุทั้งหมด",
      "pending": "รอการดำเนินการ",
      "inTransit": "อยู่ระหว่างจัดส่ง",
      "delivered": "จัดส่งแล้ว",
      "canceled": "ยกเลิกแล้ว"
    },
    "search": {
      "placeholder": "ค้นหาด้วยรหัสติดตามหรือปลายทาง..."
    },
    "filter": {
      "status": "สถานะ",
      "allStatuses": "สถานะทั้งหมด"
    },
    "status": {
      "pending": "รอการดำเนินการ",
      "inTransit": "อยู่ระหว่างจัดส่ง",
      "delivered": "จัดส่งแล้ว",
      "canceled": "ยกเลิกแล้ว"
    },
    "actions": {
      "exportCSV": "ส่งออกเป็น CSV",
      "printLabels": "พิมพ์ฉลาก",
      "track": "ติดตาม",
      "details": "รายละเอียด"
    },
    "table": {
      "id": "รหัสพัสดุ",
      "tracking": "ติดตาม",
      "route": "เส้นทาง",
      "service": "บริการ",
      "weight": "น้ำหนัก",
      "date": "วันที่",
      "estDelivery": "วันที่จัดส่งโดยประมาณ",
      "actions": "การดำเนินการ"
    },
    "csv": {
      "id": "รหัส",
      "tracking": "ติดตาม",
      "from": "จาก",
      "to": "ถึง",
      "service": "บริการ",
      "weight": "น้ำหนัก (กก.)",
      "date": "วันที่",
      "estDelivery": "วันที่จัดส่งโดยประมาณ",
      "status": "สถานะ"
    },
    "print": {
      "title": "ฉลาก SwiftParcel",
      "tracking": "ติดตาม",
      "to": "ถึง"
    },
    "noData": "ไม่พบพัสดุ ลองปรับตัวกรองของคุณดู"
  },
  "newShipment": {
    "title": "ส่งคำขอพัสดุ",
    "subtitle": "เราจะตรวจสอบข้อมูลของคุณและส่งใบเสนอราคาที่ยืนยันแล้วภายใน 2 ชั่วโมงทำการ",
    "sections": {
      "pickupMethod": "1. วิธีรับพัสดุ",
      "addresses": "2. ที่อยู่",
      "packageInfo": "3. ข้อมูลพัสดุ",
      "transportSchedule": "4. การขนส่งและกำหนดเวลา"
    },
    "pickup": {
      "dropoffTitle": "นำส่งที่ศูนย์",
      "dropoffDesc": "นำพัสดุของคุณมาที่ศูนย์ของเราแห่งใดแห่งหนึ่ง",
      "pickupTitle": "นัดรับพัสดุ",
      "pickupDesc": "เราจะไปรับพัสดุจากสถานที่ของคุณ"
    },
    "addresses": {
      "sender": "ผู้ส่ง (รับพัสดุ)",
      "recipient": "ผู้รับ (จัดส่ง)",
      "businessLocation": "ที่ตั้งสำนักงาน"
    },
    "placeholders": {
      "fullName": "ชื่อ-นามสกุลเต็ม",
      "phone": "โทรศัพท์",
      "email": "อีเมล",
      "streetAddress": "ที่อยู่",
      "city": "จังหวัด/เขต",
      "zip": "รหัสไปรษณีย์",
      "packageDescription": "อธิบายเนื้อหา (เช่น อุปกรณ์อิเล็กทรอนิกส์ เสื้อผ้า เครื่องจักร)",
      "declaredValue": "มูลค่าที่แจ้ง (สำหรับประกัน)",
      "customsContents": "ระบุสินค้าทั้งหมด จำนวน และมูลค่า...",
      "specialInstructions": "คำแนะนำหรือข้อกำหนดพิเศษ...",
      "additionalNotes": "หมายเหตุเพิ่มเติม"
    },
    "labels": {
      "preferredPickupDate": "วันที่ต้องการให้รับพัสดุ",
      "preferredDeliveryDate": "วันที่ต้องการให้จัดส่ง",
      "shipmentType": "ประเภทพัสดุ",
      "contactPreference": "วิธีติดต่อที่ต้องการ"
    },
    "package": {
      "categoryLabel": "หมวดหมู่",
      "categories": {
        "general": "สินค้าทั่วไป",
        "fragile": "ของเปราะบาง",
        "perishable": "ของเน่าเสียง่าย",
        "hazardous": "ของอันตราย (ต้องได้รับอนุมัติ)",
        "documents": "เอกสาร"
      },
      "hazardousWarning": "ของอันตรายต้องมีการจัดการและเอกสารพิเศษ ทีมงานของเราจะติดต่อคุณ",
      "customsClearance": "พัสดุนี้ต้องผ่านพิธีการศุลกากร"
    },
    "transport": {
      "air": "ขนส่งทางอากาศ",
      "ground": "ขนส่งทางถนน"
    },
    "shipmentTypes": {
      "standard": "มาตรฐาน",
      "express": "ด่วน (24–72 ชม.)",
      "urgent": "เร่งด่วน (วันเดียวกัน/วันถัดไป)"
    },
    "contactPreferences": {
      "email": "อีเมล",
      "sms": "SMS",
      "phone": "โทร"
    },
    "errors": {
      "senderName": "ต้องระบุชื่อผู้ส่ง",
      "senderPhone": "ต้องระบุเบอร์โทรศัพท์ผู้ส่ง",
      "senderEmail": "ต้องระบุอีเมลผู้ส่งที่ถูกต้อง",
      "senderAddress": "ต้องระบุที่อยู่ผู้ส่ง",
      "senderCity": "ต้องระบุจังหวัด/เขตผู้ส่ง",
      "recipientName": "ต้องระบุชื่อผู้รับ",
      "recipientPhone": "ต้องระบุเบอร์โทรศัพท์ผู้รับ",
      "recipientEmail": "ต้องระบุอีเมลผู้รับที่ถูกต้อง",
      "recipientAddress": "ต้องระบุที่อยู่ผู้รับ",
      "recipientCity": "ต้องระบุจังหวัด/เขตผู้รับ",
      "packageDescription": "ต้องระบุคำอธิบายพัสดุ",
      "weight": "น้ำหนักต้องมากกว่าหรือเท่ากับ 0.1 กก.",
      "length": "ความยาวต้องมากกว่าหรือเท่ากับ 1 ซม.",
      "width": "ความกว้างต้องมากกว่าหรือเท่ากับ 1 ซม.",
      "height": "ความสูงต้องมากกว่าหรือเท่ากับ 1 ซม.",
      "customsContents": "ต้องระบุรายการสินค้าสำหรับศุลกากร",
      "submitFailed": "ส่งคำขอไม่สำเร็จ กรุณาลองอีกครั้ง"
    },
    "success": {
      "message": "ส่งคำขอเรียบร้อยแล้ว! รหัสพัสดุของคุณคือ: {{id}}"
    },
    "submitting": "กำลังส่งคำขอ...",
    "submitButton": "ส่งคำขอพัสดุ",
    "help": {
      "reviewTime": "หลังจากส่งคำขอ ทีมโลจิสติกส์ของเราจะตรวจสอบและส่งใบเสนอราคาที่ยืนยันแล้วภายใน 2 ชั่วโมงทำการ",
      "urgentHelp": "📞 ต้องการความช่วยเหลือด่วน? โทรหาเราที่ +1 (800) SWIFT-123"
    }
  }
},
zh: {
  "nav": {
    "home": "首页",
    "services": "服务",
    "quote": "获取报价",
    "track": "追踪货件",
    "about": "关于我们",
    "contact": "联系我们",
    "dashboard": "仪表盘",
    "login": "登录",
    "signup": "注册",
    "signout": "退出登录"
  },
  "logins": {
    "loginTitle": "登录您的账户",
    "noAccount": "还没有账户？",
    "signupNow": "立即注册",
    "emailLabel": "电子邮箱",
    "emailPlaceholder": "mail@example.com",
    "passwordLabel": "密码",
    "passwordPlaceholder": "请输入密码",
    "signupTitle": "创建新账户",
    "haveAccount": "已有账户？",
    "loginNow": "立即登录",
    "signupButton": "注册",
    "loginButton": "登录",
    "loggingIn": "正在登录…"
  },
  "documents": {
    "pageTitle": "我的文档",
    "metaDescription": "下载您的发票、合同和货运文件。",
    "title": "我的文档",
    "subtitle": "一站式访问并下载所有与货运相关的文件。",
    "download": "下载",
    "empty": {
      "title": "暂无文档",
      "description": "您尚未生成任何发票或合同。文件将在可用时显示在此处。"
    },
    "types": {
      "invoice": "货运发票",
      "contract": "服务协议",
      "receipt": "付款收据",
      "waybill": "货运运单"
    },
    "success": {
      "downloadedTitle": "下载已开始",
      "downloadedDesc": "{{name}} 正在下载…"
    },
    "errors": {
      "title": "文档错误",
      "fetchFailed": "无法加载您的文档，请稍后再试。",
      "downloadFailed": "文档下载失败。",
      "noDownloadUrl": "此文档无法下载。"
    }
  },
  "billing": {
    "pageTitle": "账单与发票",
    "metaDescription": "管理您的 SwiftParcel 订阅，查看发票并下载收据。",
    "title": "账单与发票",
    "subtitle": "跟踪付款记录，管理订阅计划，并访问所有财务文件。",
    "viewAllDocuments": "查看所有文档",
    "subscription": {
      "title": "当前套餐",
      "description": "您当前的订阅详情",
      "basicPlan": "基础套餐",
      "none": "您当前没有有效的订阅。"
    },
    "status": {
      "active": "有效",
      "pastDue": "已逾期",
      "canceled": "已取消",
      "inactive": "无效"
    },
    "invoices": {
      "title": "近期发票",
      "viewAll": "查看全部",
      "empty": {
        "title": "暂无发票",
        "description": "完成付款后，您的发票将显示在此处。"
      }
    },
    "invoice": {
      "defaultDesc": "货运发票"
    },
    "errors": {
      "title": "账单错误",
      "fetchFailed": "无法加载账单信息，请稍后再试。"
    }
  },
  "login": {
    "loginTitlePage": "登录",
    "signupTitlePage": "注册",
    "metaDescription": "安全访问您的 SwiftParcel 账户。",
    "loginTitle": "欢迎回来",
    "signupTitle": "创建您的账户",
    "emailLabel": "电子邮箱",
    "emailPlaceholder": "you@example.com",
    "passwordLabel": "密码",
    "passwordPlaceholder": "••••••••",
    "loginButton": "登录",
    "signupButton": "注册",
    "loginWithGoogle": "使用 Google 继续",
    "signupWithGoogle": "使用 Google 注册",
    "orContinueWith": "或使用邮箱继续",
    "loginNow": "立即登录",
    "signupNow": "立即注册",
    "haveAccount": "已有账户？",
    "noAccount": "还没有账户？",
    "rememberMe": "记住我",
    "forgotPassword": {
      "link": "忘记密码？",
      "title": "重置您的密码",
      "description": "输入您的邮箱，我们将发送密码重置链接。",
      "sendButton": "发送重置链接",
      "sending": "发送中…",
      "successTitle": "请查收您的邮箱",
      "successDesc": "我们已向 {{email}} 发送了密码重置链接。",
      "errorTitle": "无法发送重置链接",
      "errorDesc": "请检查您的邮箱地址后重试。",
      "backToLogin": "返回登录页"
    },
    "errors": {
      "title": "身份验证失败",
      "generic": "发生意外错误。",
      "emailInUse": "该邮箱已被注册。",
      "invalidEmail": "请输入有效的邮箱地址。",
      "invalidCredentials": "邮箱或密码不正确。",
      "weakPassword": "密码长度至少为6位。",
      "tooManyRequests": "尝试次数过多，请稍后再试。",
      "emailRequired": "邮箱为必填项。",
      "googleFailed": "Google 登录失败",
      "tryAgain": "请重试。"
    },
    "success": {
      "loginTitle": "已登录",
      "loginDesc": "正在跳转至您的仪表盘…",
      "signupTitle": "账户创建成功！",
      "signupDesc": "请先验证您的邮箱，然后登录。",
      "googleLogin": "已通过 Google 登录"
    },
    "loggingIn": "正在登录…",
    "signingUp": "正在创建账户…",
    "footer": "安全 · 可靠 · 快速"
  },
  "home": {
    "heroTitle": "无缝货运，由此开启！",
    "heroSubtitle": "为全球企业提供快速、可靠、安全的货运解决方案。准时送达，始终如一。",
    "getQuote": "免费获取报价",
    "viewDemo": "查看演示",
    "whyChoose": "为何选择 SwiftParcel？",
    "whyChooseSub": "我们提供量身定制的全方位货运解决方案，满足您的业务需求",
    "securePkg": "安全包装",
    "securePkgDesc": "适用于各类货物的专业包装方案",
    "fastDelivery": "快速送达",
    "fastDeliveryDesc": "多种加急运输选项，确保准时交付",
    "insured": "全程保险",
    "insuredDesc": "全面的货运保险，让您安心无忧",
    "support": "7×24 小时支持",
    "supportDesc": "全天候客户服务与实时追踪"
  },
  "track": {
    "title": "追踪您的货件",
    "subtitle": "输入追踪编号，实时获取货件动态",
    "placeholder": "输入追踪编号（例如：SP1234567890）",
    "button": "追踪",
    "tracking": "正在追踪…",
    "details": "货件详情",
    "status": "状态",
    "customer": "客户",
    "contact": "联系方式",
    "destination": "目的地",
    "address": "收货地址",
    "packageInfo": "包裹信息",
    "created": "创建时间",
    "updated": "最后更新"
  },
  "about": {
    "title": "关于 SwiftParcel",
    "teamTitle": "我们的团队",
    "subtitle": "自 2010 年起，您值得信赖的全球物流与货运解决方案合作伙伴",
    "storyTitle": "我们的故事",
    "storyText1": "SwiftParcel 秉持一个简单而强大的愿景创立：让国际货运对所有规模的企业都变得触手可及、可靠且无忧。",
    "storyText2": "多年来，我们已处理数百万件货件，助力数千家企业拓展国际市场，并建立了卓越的声誉。",
    "storyDesc1": "SwiftParcel 秉持一个简单而强大的愿景创立：让国际货运对所有规模的企业都变得触手可及、可靠且无忧。",
    "storyDesc2": "多年来，我们已处理数百万件货件，助力数千家企业拓展国际市场，并建立了卓越的声誉。",
    "mission": "我们的使命",
    "missionDesc": "提供无缝、可靠、高效的货运解决方案。",
    "team": "我们的团队",
    "teamDesc": "由拥有数十年经验的物流专家组成的专职团队。",
    "commitment": "我们的承诺",
    "commitmentDesc": "我们致力于追求卓越、保持透明，并建立长期合作关系。",
    "reach": "全球覆盖",
    "reachDesc": "依托 150 多个国家的合作伙伴网络，确保您的货物安全抵达。",
    "missionTitle": "使命",
    "visionTitle": "愿景",
    "valuesTitle": "价值观",
    "awardTitle": "荣誉奖项",
    "stats": {
      "countries": "服务国家",
      "shipments": "已交付货件",
      "clients": "满意客户",
      "ontime": "准时交付率"
    }
  },
  "contact": {
    "title": "联系我们",
    "subtitle": "我们的全球团队随时准备为您提供帮助。请联系当地办公室或使用专属支持渠道。",
    "howToReach": "如何联系我们",
    "regionalOffices": "区域办公室",
    "regionalContact": "区域联系人",
    "general": "一般咨询",
    "generalDesc": "有关服务、合作及公司信息的一般性问题。",
    "supportTitle": "客户支持",
    "supportDesc": "7×24 小时协助处理追踪、账户及货运问题。",
    "sales": "销售与报价",
    "salesDesc": "获取大宗货运及企业合作的定制化报价。",
    "shipping": "货运操作",
    "shippingDesc": "关于清关、禁运物品及包装规范的技术咨询。",
    "formTitle": "发送消息",
    "formName": "姓名",
    "formEmail": "邮箱",
    "formSubject": "主题",
    "formMessage": "消息内容"
  },
  "footer": {
    "logoAlt": "SwiftParcel 徽标",
    "description": "为您的全球业务需求提供无缝货运解决方案。",
    "supportButton": "全球支持服务可用性",
    "quickLinks": "快速链接",
    "contact": "联系我们",
    "legal": "法律信息",
    "terms": "服务条款",
    "privacy": "隐私政策",
    "cookies": "Cookie 与隐私",
    "allRightsReserved": "版权所有。",
    "soc2": "符合 SOC 2 Type II 标准",
    "iso27001": "ISO 27001"
  },
  "services": {
    "pageTitle": "我们的服务",
    "metaDescription": "探索 SwiftParcel 全面的货运服务，包括空运、海运、陆运和仓储解决方案。",
    "heroTitle": "我们的货运服务",
    "heroSubtitle": "量身打造的综合物流解决方案，满足您的业务需求",
    "keyFeatures": "主要特点：",
    "learnMore": "了解更多",
    "airFreight": {
      "title": "空运",
      "description": "为时效敏感型货物提供快速高效的航空货运服务。我们与领先航空公司合作，确保您的货物快速、安全抵达目的地。",
      "features": {
        "express": "加急配送选项",
        "worldwide": "全球覆盖",
        "tracking": "实时追踪",
        "temperature": "温控运输选项"
      }
    },
    "oceanFreight": {
      "title": "海运",
      "description": "为大批量货物提供高性价比的海运解决方案。适合希望以具有竞争力的价格进行国际货物运输的企业。",
      "features": {
        "fcl": "整箱货（FCL）",
        "lcl": "拼箱货（LCL）",
        "doorToDoor": "门到门服务",
        "customs": "清关协助"
      }
    },
    "groundTransport": {
      "title": "陆运",
      "description": "可靠的国内及跨境陆路运输服务。适用于区域配送和陆路运输需求。",
      "features": {
        "sameDay": "当日达选项",
        "regional": "区域分发",
        "fleet": "专属车队",
        "scheduling": "灵活调度"
      }
    },
    "warehousing": {
      "title": "仓储与物流",
      "description": "提供含库存管理在内的完整仓储解决方案。您的产品将存放于我们配备 24/7 监控的安全仓库中。",
      "features": {
        "climate": "恒温恒湿仓储",
        "inventory": "库存管理",
        "pickPack": "拣货与包装服务",
        "distribution": "配送支持"
      }
    }
  },
  "common": {
    "comingSoon": "🚧 功能即将上线",
    "featureComingSoon": "此功能尚未实现——但别担心！您可以在下一条消息中提出需求！🚀"
  },
  "quote": {
    "pageTitle": "获取报价",
    "metaDescription": "向 SwiftParcel 申请货运报价。填写我们的简易表单，即可获得具有竞争力的货运报价。",
    "heroTitle": "免费获取报价",
    "heroSubtitle": "填写下方表单，我们将为您提供一份具有竞争力的报价",
    "form": {
      "nameLabel": "姓名",
      "namePlaceholder": "张伟",
      "companyLabel": "公司",
      "companyPlaceholder": "公司名称（可选）",
      "emailLabel": "邮箱",
      "emailPlaceholder": "zhangwei@example.com",
      "countryLabel": "国家",
      "countryPlaceholder": "中国",
      "contactLabel": "联系电话",
      "contactPlaceholder": "+86 138 1234 5678",
      "addressLabel": "收货地址",
      "addressPlaceholder": "请输入完整收货地址",
      "packageInfoLabel": "包裹信息",
      "packageInfoPlaceholder": "请描述您的包裹（尺寸、重量、内容物、特殊处理要求）"
    },
    "submitting": "提交中…",
    "submitButton": "提交报价请求",
    "success": {
      "title": "报价请求已成功提交！✅",
      "description": "您的追踪编号为：{{trackingId}}。我们将尽快与您联系并提供详细报价。"
    },
    "error": {
      "title": "提交失败",
      "generic": "出现错误，请重试。"
    }
  },
  "terms": {
    "pageTitle": "服务条款",
    "title": "服务条款",
    "intro": "欢迎使用 SwiftParcel。使用我们的网站和服务即表示您同意遵守并受以下条款和条件的约束。",
    "section1": {
      "title": "1. 域名使用",
      "content": "所有官方通信和服务仅通过 {{domain}} 域名提供。SwiftParcel 不在 .express 或其他顶级域名下运营。对于来自未授权域名的通信，我们不承担任何责任。"
    },
    "section2": {
      "title": "2. 服务协议",
      "content": "货运请求、报价和追踪服务均受国际海事法和航空法约束。具体的服务水平协议（SLA）将在合同签订时提供。"
    },
    "section3": {
      "title": "3. 用户账户",
      "content": "您有责任维护账户凭证的机密性。您账户下发生的所有活动均由您本人负责。"
    }
  },
  "privacy": {
    "pageTitle": "隐私政策",
    "title": "隐私政策",
    "intro": "在 SwiftParcel，我们高度重视您个人及企业数据的保护。本政策说明了我们如何收集、使用和保护您的信息。",
    "dataCollection": {
      "title": "数据收集",
      "content": "我们会收集全球物流所需的信息，包括寄件人/收件人地址、包裹内容和联系方式。所有数据均经过安全处理。"
    },
    "internationalTransfers": {
      "title": "国际数据传输",
      "content": "作为通过 {{domain}} 运营的全球物流服务商，您的数据可能会跨境传输以协助完成货运交付。我们确保所有国际传输均具备适当的保障措施。"
    }
  },
  "cookies": {
    "pageTitle": "Cookie 政策",
    "title": "Cookie 政策",
    "intro": "本政策说明 SwiftParcel 如何在您访问我们位于 {{domain}} 的网站时，使用 Cookie 及类似技术识别您的身份。",
    "whatAreCookies": {
      "title": "什么是 Cookie？",
      "content": "Cookie 是您访问网站时存储在计算机或移动设备上的小型数据文件。网站所有者广泛使用 Cookie 以确保网站正常运行、提升效率，并提供报告信息。"
    },
    "controllingCookies": {
      "title": "Cookie 管理",
      "content": "您有权决定是否接受或拒绝 Cookie。您可通过网站页脚中的“Cookie 同意管理器”设置您的偏好。"
    }
  },

  "dashboard": {
    "accessDenied": "您必须登录才能访问仪表盘。",
    "signOutFailed": "退出登录失败，请重试。",
    "active": "有效",
    "welcomeBack": "欢迎回来"
  },
  "dash_nav": {
    "overview": "概览",
    "shipments": "货件",
    "newShipment": "新货件",
    "track": "追踪",
    "orders": "订单",
    "messages": "消息",
    "activity": "活动",
    "report": "报告",
    "support": "支持",
    "account": "账户",
    "billing": "账单",
    "documents": "文档",
    "settings": "设置",
    "homePage": "首页",
    "createShipment": "创建货件",
    "signout": "退出登录",
    "myAccount": "我的账户"
  },
  "common": {
    "user": "用户",
    "logoAlt": "SwiftParcel 徽标",
    "toggleNavigation": "切换导航",
    "viewAll": "查看全部"
  },
  "dashboardOverview": {
    "loading": "正在加载您的物流仪表盘……",
    "errors": {
      "fetchFailed": "无法加载仪表盘数据，请重试。"
    },
    "empty": {
      "title": "您的全球物流中心",
      "subtitle": "管理货件、追踪配送、拓展业务——一切尽在掌握。"
    },
    "actions": {
      "newShipmentDesc": "创建并安排新配送",
      "trackDesc": "实时监控配送状态",
      "billingDesc": "查看发票和付款记录",
      "documentsDesc": "获取运单标签和报关单据"
    },
    "stats": {
      "total": "总货件数",
      "pending": "待处理",
      "inTransit": "运输中",
      "delivered": "已送达",
      "canceled": "已取消",
      "successRate": "成功率"
    },
    "createFirstShipment": "创建您的首个货件",
    "recentShipments": "近期货件",
    "shipmentsPlaceholder": "货件列表组件将在此处渲染。",
    "liveTracking": "实时追踪",
    "trackingComingSoon": "实时 GPS 更新功能即将上线。",
    "packageInsights": "包裹洞察",
    "insightsDescription": "重量、尺寸及报关数据。",
    "globalNetwork": "全球配送网络",
    "mapDescription": "由 SwiftParcel Intelligence™ 驱动的实时路线可视化"
  },
  "shipments": {
    "title": "货件",
    "subtitle": "一站式管理并追踪所有配送",
    "loading": "正在加载货件……",
    "errors": {
      "fetchFailed": "无法加载货件，请重试。"
    },
    "stats": {
      "total": "总货件数",
      "pending": "待处理",
      "inTransit": "运输中",
      "delivered": "已送达",
      "canceled": "已取消"
    },
    "search": {
      "placeholder": "按追踪编号、目的地搜索……"
    },
    "filter": {
      "status": "状态",
      "allStatuses": "所有状态"
    },
    "status": {
      "pending": "待处理",
      "inTransit": "运输中",
      "delivered": "已送达",
      "canceled": "已取消"
    },
    "actions": {
      "exportCSV": "导出 CSV",
      "printLabels": "打印标签",
      "track": "追踪",
      "details": "详情"
    },
    "table": {
      "id": "货件编号",
      "tracking": "追踪",
      "route": "路线",
      "service": "服务",
      "weight": "重量",
      "date": "日期",
      "estDelivery": "预计送达",
      "actions": "操作"
    },
    "csv": {
      "id": "编号",
      "tracking": "追踪",
      "from": "发件地",
      "to": "收件地",
      "service": "服务",
      "weight": "重量 (kg)",
      "date": "日期",
      "estDelivery": "预计送达",
      "status": "状态"
    },
    "print": {
      "title": "SwiftParcel 标签",
      "tracking": "追踪",
      "to": "收件人"
    },
    "noData": "未找到货件。请尝试调整筛选条件。"
  },
  "newShipment": {
    "title": "提交货件请求",
    "subtitle": "我们将在 2 个工作小时内审核您的信息并发送确认报价。",
    "sections": {
      "pickupMethod": "1. 取件方式",
      "addresses": "2. 地址信息",
      "packageInfo": "3. 包裹信息",
      "transportSchedule": "4. 运输与排期"
    },
    "pickup": {
      "dropoffTitle": "网点自送",
      "dropoffDesc": "将包裹送至我们的本地网点",
      "pickupTitle": "预约取件",
      "pickupDesc": "我们将上门取件"
    },
    "addresses": {
      "sender": "发件人（取件）",
      "recipient": "收件人（配送）",
      "businessLocation": "营业地址"
    },
    "placeholders": {
      "fullName": "全名",
      "phone": "电话",
      "email": "邮箱",
      "streetAddress": "街道地址",
      "city": "城市",
      "zip": "邮政编码",
      "packageDescription": "描述内容物（例如：电子产品、服装、机械设备）",
      "declaredValue": "申报价值（用于保险）",
      "customsContents": "列出所有物品、数量及价值……",
      "specialInstructions": "特殊说明或要求……",
      "additionalNotes": "附加备注"
    },
    "labels": {
      "preferredPickupDate": "期望取件日期",
      "preferredDeliveryDate": "期望送达日期",
      "shipmentType": "货件类型",
      "contactPreference": "联系方式偏好"
    },
    "package": {
      "categoryLabel": "类别",
      "categories": {
        "general": "普通货物",
        "fragile": "易碎品",
        "perishable": "易腐品",
        "hazardous": "危险品（需审批）",
        "documents": "文件"
      },
      "hazardousWarning": "危险品需特殊处理和文件。我们的团队将与您联系。",
      "customsClearance": "此货件需报关清关"
    },
    "transport": {
      "air": "空运",
      "ground": "陆运"
    },
    "shipmentTypes": {
      "standard": "标准",
      "express": "加急（24–72 小时）",
      "urgent": "紧急（当日/次日达）"
    },
    "contactPreferences": {
      "email": "邮箱",
      "sms": "短信",
      "phone": "电话"
    },
    "errors": {
      "senderName": "发件人姓名为必填项",
      "senderPhone": "发件人电话为必填项",
      "senderEmail": "请输入有效的发件人邮箱",
      "senderAddress": "发件人地址为必填项",
      "senderCity": "发件人城市为必填项",
      "recipientName": "收件人姓名为必填项",
      "recipientPhone": "收件人电话为必填项",
      "recipientEmail": "请输入有效的收件人邮箱",
      "recipientAddress": "收件人地址为必填项",
      "recipientCity": "收件人城市为必填项",
      "packageDescription": "包裹描述为必填项",
      "weight": "重量不得少于 0.1 kg",
      "length": "长度不得少于 1 cm",
      "width": "宽度不得少于 1 cm",
      "height": "高度不得少于 1 cm",
      "customsContents": "报关内容声明为必填项",
      "submitFailed": "提交请求失败，请重试。"
    },
    "success": {
      "message": "请求提交成功！您的货件编号为：{{id}}"
    },
    "submitting": "正在提交请求……",
    "submitButton": "提交货件请求",
    "help": {
      "reviewTime": "提交后，我们的物流团队将在 2 个工作小时内审核您的请求并发送确认报价。",
      "urgentHelp": "📞 需要紧急帮助？请致电 +1 (800) SWIFT-123"
    }
  }
},












  // es: {
  //   nav: { home: 'Inicio', services: 'Servicios', quote: 'Cotizar', track: 'Rastrear', about: 'Nosotros', contact: 'Contacto', dashboard: 'Panel', login: 'Entrar', signup: 'Registro', signout: 'Salir' },
  //   home: {
  //     heroTitle: '¡El Envío Sin Problemas Comienza Aquí!',
  //     heroSubtitle: 'Soluciones de envío rápidas, confiables y seguras para empresas en todo el mundo.',
  //     getQuote: 'Obtener Cotización Gratis',
  //     viewDemo: 'Ver Demo',
  //     whyChoose: '¿Por qué elegir SwiftParcel?',
  //     whyChooseSub: 'Brindamos soluciones integrales de envío adaptadas a sus necesidades',
  //     securePkg: 'Embalaje Seguro',
  //     securePkgDesc: 'Soluciones de embalaje profesional para todo tipo de carga',
  //     fastDelivery: 'Entrega Rápida',
  //     fastDeliveryDesc: 'Opciones de envío exprés para cumplir con sus plazos',
  //     insured: 'Envíos Asegurados',
  //     insuredDesc: 'Cobertura de seguro completa para su tranquilidad',
  //     support: 'Soporte 24/7',
  //     supportDesc: 'Servicio al cliente y seguimiento las 24 horas'
  //   },
  //   track: { title: 'Rastrear su Envío', subtitle: 'Ingrese su ID de rastreo para obtener actualizaciones en tiempo real', placeholder: 'Ingrese ID de Rastreo', button: 'Rastrear', tracking: 'Rastreando...', details: 'Detalles del Envío', status: 'Estado', customer: 'Cliente', contact: 'Contacto', destination: 'Destino', address: 'Dirección', packageInfo: 'Información del Paquete', created: 'Creado', updated: 'Actualizado' },
  //   about: {
  //     title: 'Sobre SwiftParcel',
  //     subtitle: 'Su socio de confianza en logística global',
  //     storyTitle: 'Nuestra Historia',
  //     storyText1: 'SwiftParcel fue fundado con una visión simple: hacer que el envío internacional sea accesible y confiable.',
  //     storyText2: 'A lo largo de los años, hemos manejado millones de envíos y ayudado a miles de empresas.',
  //     mission: 'Nuestra Misión',
  //     missionDesc: 'Proporcionar soluciones de envío eficientes y confiables.',
  //     team: 'Nuestro Equipo',
  //     teamDesc: 'Un equipo dedicado de profesionales de la logística.',
  //     commitment: 'Nuestro Compromiso',
  //     commitmentDesc: 'Estamos comprometidos con la excelencia y la transparencia.',
  //     reach: 'Alcance Global',
  //     reachDesc: 'Con asociaciones en más de 150 países.',
  //     stats: { countries: 'Países Servidos', shipments: 'Envíos Entregados', clients: 'Clientes Felices', ontime: 'Entrega a Tiempo' }
  //   },
  //   contact: { title: 'Contáctenos', subtitle: 'Nuestro equipo global está listo para ayudarle.', howToReach: 'Cómo contactarnos', regionalOffices: 'Oficinas Regionales', regionalContact: 'Contacto Regional', general: 'Consultas Generales', generalDesc: 'Para preguntas generales sobre servicios.', supportTitle: 'Soporte al Cliente', supportDesc: 'Asistencia 24/7 con rastreo.', sales: 'Ventas y Cotizaciones', salesDesc: 'Obtenga cotizaciones personalizadas.', shipping: 'Operaciones de Envío', shippingDesc: 'Preguntas técnicas sobre aduanas.' }
  // },
  // fr: {
  //   nav: { home: 'Accueil', services: 'Services', quote: 'Devis', track: 'Suivre', about: 'À Propos', contact: 'Contact', dashboard: 'Tableau de bord', login: 'Connexion', signup: 'S\'inscrire', signout: 'Déconnexion' },
  //   home: {
  //     heroTitle: 'L\'expédition Transparente Commence Ici !',
  //     heroSubtitle: 'Solutions d\'expédition rapides, fiables et sécurisées pour les entreprises du monde entier.',
  //     getQuote: 'Obtenir un Devis Gratuit',
  //     viewDemo: 'Voir la Démo',
  //     whyChoose: 'Pourquoi Choisir SwiftParcel ?',
  //     whyChooseSub: 'Nous fournissons des solutions logistiques complètes',
  //     securePkg: 'Emballage Sécurisé',
  //     securePkgDesc: 'Solutions d\'emballage professionnelles',
  //     fastDelivery: 'Livraison Rapide',
  //     fastDeliveryDesc: 'Options d\'expédition express',
  //     insured: 'Expéditions Assurées',
  //     insuredDesc: 'Couverture d\'assurance complète',
  //     support: 'Support 24/7',
  //     supportDesc: 'Service client et suivi 24h/24'
  //   },
  //   track: { title: 'Suivre Votre Envoi', subtitle: 'Entrez votre ID de suivi pour des mises à jour en temps réel', placeholder: 'Entrez l\'ID de suivi', button: 'Suivre', tracking: 'Suivi...', details: 'Détails de l\'expédition', status: 'Statut', customer: 'Client', contact: 'Contact', destination: 'Destination', address: 'Adresse', packageInfo: 'Info Colis', created: 'Créé', updated: 'Mis à jour' },
  //   about: { title: 'À Propos de SwiftParcel', subtitle: 'Votre partenaire de confiance en logistique', storyTitle: 'Notre Histoire', storyText1: 'Fondée pour rendre l\'expédition internationale accessible.', storyText2: 'Nous avons géré des millions d\'expéditions.', mission: 'Notre Mission', missionDesc: 'Fournir des solutions fiables.', team: 'Notre Équipe', teamDesc: 'Des professionnels dédiés.', commitment: 'Notre Engagement', commitmentDesc: 'Excellence et transparence.', reach: 'Portée Mondiale', reachDesc: 'Présent dans 150+ pays.', stats: { countries: 'Pays Desservis', shipments: 'Colis Livrés', clients: 'Clients Satisfaits', ontime: 'Livraison à Temps' } },
  //   contact: { title: 'Contactez-nous', subtitle: 'Notre équipe mondiale est là pour vous aider.', howToReach: 'Comment nous joindre', regionalOffices: 'Bureaux Régionaux', regionalContact: 'Contact Régional', general: 'Demandes Générales', generalDesc: 'Questions générales.', supportTitle: 'Support Client', supportDesc: 'Assistance 24/7.', sales: 'Ventes', salesDesc: 'Devis personnalisés.', shipping: 'Opérations', shippingDesc: 'Questions techniques.' }
  // },
  // de: {
  //   nav: { home: 'Start', services: 'Leistungen', quote: 'Angebot', track: 'Verfolgen', about: 'Über uns', contact: 'Kontakt', dashboard: 'Dashboard', login: 'Anmelden', signup: 'Registrieren', signout: 'Abmelden' },
  //   home: {
  //     heroTitle: 'Reibungsloser Versand beginnt hier!',
  //     heroSubtitle: 'Schnelle, zuverlässige und sichere Versandlösungen für Unternehmen weltweit.',
  //     getQuote: 'Kostenloses Angebot',
  //     viewDemo: 'Demo ansehen',
  //     whyChoose: 'Warum SwiftParcel?',
  //     whyChooseSub: 'Wir bieten umfassende Versandlösungen',
  //     securePkg: 'Sichere Verpackung',
  //     securePkgDesc: 'Professionelle Verpackungslösungen',
  //     fastDelivery: 'Schnelle Lieferung',
  //     fastDeliveryDesc: 'Express-Versandoptionen',
  //     insured: 'Versicherte Sendungen',
  //     insuredDesc: 'Vollständiger Versicherungsschutz',
  //     support: '24/7 Support',
  //     supportDesc: 'Rund um die Uhr Kundenservice'
  //   },
  //   track: { title: 'Sendung Verfolgen', subtitle: 'Geben Sie Ihre Tracking-ID ein', placeholder: 'Tracking-ID eingeben', button: 'Verfolgen', tracking: 'Suche...', details: 'Sendungsdetails', status: 'Status', customer: 'Kunde', contact: 'Kontakt', destination: 'Ziel', address: 'Adresse', packageInfo: 'Paketinfo', created: 'Erstellt', updated: 'Aktualisiert' },
  //   about: { title: 'Über SwiftParcel', subtitle: 'Ihr vertrauenswürdiger Logistikpartner', storyTitle: 'Unsere Geschichte', storyText1: 'Gegründet, um internationalen Versand einfach zu machen.', storyText2: 'Millionen von Sendungen abgewickelt.', mission: 'Unsere Mission', missionDesc: 'Effiziente Lösungen bieten.', team: 'Unser Team', teamDesc: 'Erfahrene Logistikprofis.', commitment: 'Unser Versprechen', commitmentDesc: 'Exzellenz und Transparenz.', reach: 'Globale Reichweite', reachDesc: 'In 150+ Ländern.', stats: { countries: 'Länder', shipments: 'Lieferungen', clients: 'Kunden', ontime: 'Pünktlichkeit' } },
  //   contact: { title: 'Kontakt', subtitle: 'Unser Team ist bereit zu helfen.', howToReach: 'So erreichen Sie uns', regionalOffices: 'Regionalbüros', regionalContact: 'Kontakt', general: 'Allgemein', generalDesc: 'Allgemeine Fragen.', supportTitle: 'Kundensupport', supportDesc: '24/7 Hilfe.', sales: 'Vertrieb', salesDesc: 'Angebote für Unternehmen.', shipping: 'Versand', shippingDesc: 'Technische Fragen.' }
  // },
  // zh: {
  //   nav: { home: '首页', services: '服务', quote: '获取报价', track: '追踪', about: '关于我们', contact: '联系我们', dashboard: '仪表板', login: '登录', signup: '注册', signout: '退出' },
  //   home: {
  //     heroTitle: '无缝运输从这里开始！',
  //     heroSubtitle: '为全球企业提供快速、可靠和安全的运输解决方案。',
  //     getQuote: '获取免费报价',
  //     viewDemo: '查看演示',
  //     whyChoose: '为什么选择 SwiftParcel？',
  //     whyChooseSub: '我们提供量身定制的综合运输解决方案',
  //     securePkg: '安全包装',
  //     securePkgDesc: '各类货物的专业包装方案',
  //     fastDelivery: '快速交付',
  //     fastDeliveryDesc: '满足您期限的快递选项',
  //     insured: '投保货物',
  //     insuredDesc: '让您安心的全程保险',
  //     support: '24/7 支持',
  //     supportDesc: '全天候客户服务和追踪'
  //   },
  //   track: { title: '追踪您的货物', subtitle: '输入追踪ID获取实时更新', placeholder: '输入追踪ID', button: '追踪', tracking: '追踪中...', details: '货物详情', status: '状态', customer: '客户', contact: '联系', destination: '目的地', address: '地址', packageInfo: '包裹信息', created: '创建时间', updated: '更新时间' },
  //   about: { title: '关于 SwiftParcel', subtitle: '您值得信赖的全球物流合作伙伴', storyTitle: '我们的故事', storyText1: '旨在让国际运输变得简单可靠。', storyText2: '多年来处理了数百万次运输。', mission: '我们的使命', missionDesc: '提供高效的运输方案。', team: '我们的团队', teamDesc: '敬业的物流专家。', commitment: '我们的承诺', commitmentDesc: '追求卓越和透明。', reach: '全球覆盖', reachDesc: '服务超过150个国家。', stats: { countries: '服务国家', shipments: '已交付货物', clients: '满意客户', ontime: '准时交付' } },
  //   contact: { title: '联系我们', subtitle: '我们的全球团队随时为您服务。', howToReach: '联系方式', regionalOffices: '区域办事处', regionalContact: '区域联系', general: '一般咨询', generalDesc: '一般性问题。', supportTitle: '客户支持', supportDesc: '24/7 协助。', sales: '销售与报价', salesDesc: '商业合作报价。', shipping: '运输运营', shippingDesc: '海关和包装问题。' }
  // },
  // ja: {
  //   nav: { home: 'ホーム', services: 'サービス', quote: '見積もり', track: '追跡', about: '会社概要', contact: 'お問い合わせ', dashboard: 'ダッシュボード', login: 'ログイン', signup: '登録', signout: 'ログアウト' },
  //   home: {
  //     heroTitle: 'シームレスな配送はここから！',
  //     heroSubtitle: '世界中のビジネスに向けた迅速、確実、安全な配送ソリューション。',
  //     getQuote: '無料見積もり',
  //     viewDemo: 'デモを見る',
  //     whyChoose: 'SwiftParcelが選ばれる理由',
  //     whyChooseSub: 'ビジネスニーズに合わせた包括的な配送ソリューション',
  //     securePkg: '安全な梱包',
  //     securePkgDesc: 'あらゆる貨物に対応する専門的な梱包',
  //     fastDelivery: '迅速な配達',
  //     fastDeliveryDesc: '期限を守るエクスプレス配送',
  //     insured: '保険付き配送',
  //     insuredDesc: '安心のための完全な保険適用',
  //     support: '24/7 サポート',
  //     supportDesc: '24時間体制のカスタマーサービス'
  //   },
  //   track: { title: '荷物の追跡', subtitle: '追跡IDを入力して最新状況を確認', placeholder: '追跡IDを入力', button: '追跡', tracking: '追跡中...', details: '配送詳細', status: 'ステータス', customer: 'お客様', contact: '連絡先', destination: '目的地', address: '住所', packageInfo: '荷物情報', created: '作成日', updated: '更新日' },
  //   about: { title: 'SwiftParcelについて', subtitle: '信頼できる物流パートナー', storyTitle: '私たちの物語', storyText1: '国際配送を身近で信頼できるものにするために設立されました。', storyText2: '数百万の配送実績があります。', mission: 'ミッション', missionDesc: '効率的なソリューションを提供します。', team: 'チーム', teamDesc: '経験豊富な専門家たち。', commitment: 'コミットメント', commitmentDesc: '卓越性と透明性を追求します。', reach: 'グローバルリーチ', reachDesc: '150カ国以上で展開。', stats: { countries: '対応国', shipments: '配送完了', clients: '顧客数', ontime: '定時配送率' } },
  //   contact: { title: 'お問い合わせ', subtitle: 'グローバルチームがサポートします。', howToReach: '連絡方法', regionalOffices: '地域オフィス', regionalContact: '地域連絡先', general: '一般のお問い合わせ', generalDesc: 'サービスに関する質問。', supportTitle: 'サポート', supportDesc: '24時間対応。', sales: '営業・見積もり', salesDesc: 'ビジネス向け見積もり。', shipping: '配送業務', shippingDesc: '税関や技術的な質問。' }
  // },
  // ar: {
  //   nav: { home: 'الرئيسية', services: 'الخدمات', quote: 'طلب عرض', track: 'تتبع', about: 'من نحن', contact: 'اتصل بنا', dashboard: 'لوحة التحكم', login: 'دخول', signup: 'تسجيل', signout: 'خروج' },
  //   home: {
  //     heroTitle: 'الشحن السلس يبدأ من هنا!',
  //     heroSubtitle: 'حلول شحن سريعة وموثوقة وآمنة للشركات في جميع أنحاء العالم.',
  //     getQuote: 'احصل على عرض سعر',
  //     viewDemo: 'شاهد العرض',
  //     whyChoose: 'لماذا تختار SwiftParcel؟',
  //     whyChooseSub: 'نقدم حلول شحن شاملة مصممة لاحتياجات عملك',
  //     securePkg: 'تغليف آمن',
  //     securePkgDesc: 'حلول تغليف احترافية لجميع أنواع البضائع',
  //     fastDelivery: 'توصيل سريع',
  //     fastDeliveryDesc: 'خيارات شحن سريع لتلبية مواعيدك',
  //     insured: 'شحنات مؤمنة',
  //     insuredDesc: 'تغطية تأمينية كاملة لراحة بالك',
  //     support: 'دعم 24/7',
  //     supportDesc: 'خدمة عملاء وتتبع على مدار الساعة'
  //   },
  //   track: { title: 'تتبع شحنتك', subtitle: 'أدخل رقم التتبع للحصول على تحديثات فورية', placeholder: 'أدخل رقم التتبع', button: 'تتبع', tracking: 'جاري التتبع...', details: 'تفاصيل الشحنة', status: 'الحالة', customer: 'العميل', contact: 'الاتصال', destination: 'الوجهة', address: 'العنوان', packageInfo: 'معلومات الطرد', created: 'تاريخ الإنشاء', updated: 'آخر تحديث' },
  //   about: { title: 'عن SwiftParcel', subtitle: 'شريكك الموثوق في الخدمات اللوجستية', storyTitle: 'قصتنا', storyText1: 'تأسست لجعل الشحن الدولي متاحاً وموثوقاً.', storyText2: 'قمنا بمعالجة الملايين من الشحنات.', mission: 'مهمتنا', missionDesc: 'توفير حلول شحن فعالة.', team: 'فريقنا', teamDesc: 'خبراء لوجستيات متخصصون.', commitment: 'التزامنا', commitmentDesc: 'التميز والشفافية.', reach: 'نطاق عالمي', reachDesc: 'نخدم أكثر من 150 دولة.', stats: { countries: 'دولة', shipments: 'شحنة تم تسليمها', clients: 'عميل سعيد', ontime: 'تسليم في الوقت' } },
  //   contact: { title: 'اتصل بنا', subtitle: 'فريقنا العالمي جاهز لمساعدتك.', howToReach: 'كيف تصل إلينا', regionalOffices: 'المكاتب الإقليمية', regionalContact: 'جهة الاتصال', general: 'استفسارات عامة', generalDesc: 'أسئلة عامة حول الخدمات.', supportTitle: 'دعم العملاء', supportDesc: 'مساعدة على مدار الساعة.', sales: 'المبيعات', salesDesc: 'عروض أسعار مخصصة.', shipping: 'عمليات الشحن', shippingDesc: 'أسئلة تقنية وجمركية.' }
  // },
  // pt: {
  //   nav: { home: 'Início', services: 'Serviços', quote: 'Cotação', track: 'Rastrear', about: 'Sobre', contact: 'Contato', dashboard: 'Painel', login: 'Entrar', signup: 'Cadastro', signout: 'Sair' },
  //   home: {
  //     heroTitle: 'Envio Sem Fronteiras Começa Aqui!',
  //     heroSubtitle: 'Soluções de envio rápidas, confiáveis e seguras para empresas em todo o mundo.',
  //     getQuote: 'Orçamento Grátis',
  //     viewDemo: 'Ver Demo',
  //     whyChoose: 'Por que SwiftParcel?',
  //     whyChooseSub: 'Fornecemos soluções logísticas completas',
  //     securePkg: 'Embalagem Segura',
  //     securePkgDesc: 'Soluções profissionais de embalagem',
  //     fastDelivery: 'Entrega Rápida',
  //     fastDeliveryDesc: 'Opções de envio expresso',
  //     insured: 'Envios Segurados',
  //     insuredDesc: 'Cobertura completa de seguro',
  //     support: 'Suporte 24/7',
  //     supportDesc: 'Atendimento ao cliente 24 horas'
  //   },
  //   track: { title: 'Rastrear Encomenda', subtitle: 'Digite seu ID para atualizações em tempo real', placeholder: 'ID de Rastreamento', button: 'Rastrear', tracking: 'Rastreando...', details: 'Detalhes do Envio', status: 'Status', customer: 'Cliente', contact: 'Contato', destination: 'Destino', address: 'Endereço', packageInfo: 'Info do Pacote', created: 'Criado', updated: 'Atualizado' },
  //   about: { title: 'Sobre a SwiftParcel', subtitle: 'Seu parceiro logístico de confiança', storyTitle: 'Nossa História', storyText1: 'Fundada para tornar o envio internacional acessível.', storyText2: 'Gerenciamos milhões de envios.', mission: 'Nossa Missão', missionDesc: 'Fornecer soluções eficientes.', team: 'Nossa Equipe', teamDesc: 'Profissionais dedicados.', commitment: 'Nosso Compromisso', commitmentDesc: 'Excelência e transparência.', reach: 'Alcance Global', reachDesc: 'Presente em 150+ países.', stats: { countries: 'Países Atendidos', shipments: 'Entregas', clients: 'Clientes Felizes', ontime: 'No Prazo' } },
  //   contact: { title: 'Fale Conosco', subtitle: 'Nossa equipe global está pronta para ajudar.', howToReach: 'Como nos encontrar', regionalOffices: 'Escritórios Regionais', regionalContact: 'Contato Regional', general: 'Dúvidas Gerais', generalDesc: 'Perguntas gerais.', supportTitle: 'Suporte', supportDesc: 'Assistência 24/7.', sales: 'Vendas', salesDesc: 'Cotações personalizadas.', shipping: 'Operações', shippingDesc: 'Questões técnicas.' }
  // }







};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('swiftparcel-lang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('swiftparcel-lang', langCode);
    
    // Handle RTL
    const langConfig = languages.find(l => l.code === langCode);
    if (langConfig) {
      document.documentElement.dir = langConfig.dir;
      document.documentElement.lang = langConfig.code;
    }
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English
        let fallback = translations['en'];
        for (const fbKey of keys) {
          if (fallback[fbKey] === undefined) return path;
          fallback = fallback[fbKey];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
