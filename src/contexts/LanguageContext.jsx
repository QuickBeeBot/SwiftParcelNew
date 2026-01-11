
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
    "services": "الخدمات",
    "company": "الشركة",
    "legal": "القانوني",
    "airFreight": "الشحن الجوي",
    "seaFreight": "الشحن البحري",
    "roadFreight": "الشحن البري",
    "warehousing": "التخزين",
    "aboutUs": "من نحن",
    "contact": "اتصل بنا",
    "trackShipment": "تتبع الشحنة",
    "getQuote": "احصل على عرض سعر",
    "privacyPolicy": "سياسة الخصوصية",
    "termsOfService": "شروط الخدمة",
    "cookiePolicy": "سياسة ملفات تعريف الارتباط",
    "tagline": "وسائل التواصل الاجتماعي"
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
    "services": "Leistungen",
    "company": "Unternehmen",
    "legal": "Rechtliches",
    "airFreight": "Luftfracht",
    "seaFreight": "Seefracht",
    "roadFreight": "Straßenfracht",
    "warehousing": "Lagerhaltung",
    "aboutUs": "Über uns",
    "contact": "Kontakt",
    "trackShipment": "Sendung verfolgen",
    "getQuote": "Angebot anfordern",
    "privacyPolicy": "Datenschutzrichtlinie",
    "termsOfService": "Nutzungsbedingungen",
    "cookiePolicy": "Cookie-Richtlinie",
    "tagline": "Social Media"
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
    "services": "Servicios",
    "company": "Empresa",
    "legal": "Legal",
    "airFreight": "Carga aérea",
    "seaFreight": "Carga marítima",
    "roadFreight": "Carga terrestre",
    "warehousing": "Almacenamiento",
    "aboutUs": "Acerca de",
    "contact": "Contacto",
    "trackShipment": "Rastrear envío",
    "getQuote": "Obtener presupuesto",
    "privacyPolicy": "Política de privacidad",
    "termsOfService": "Términos de servicio",
    "cookiePolicy": "Política de cookies",
    "tagline": "Redes sociales"
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
    "services": "Services",
    "company": "Entreprise",
    "legal": "Mentions légales",
    "airFreight": "Fret aérien",
    "seaFreight": "Fret maritime",
    "roadFreight": "Fret routier",
    "warehousing": "Entreposage",
    "aboutUs": "À propos",
    "contact": "Contact",
    "trackShipment": "Suivre un envoi",
    "getQuote": "Obtenir un devis",
    "privacyPolicy": "Politique de confidentialité",
    "termsOfService": "Conditions d’utilisation",
    "cookiePolicy": "Politique relative aux cookies",
    "tagline": "Réseaux sociaux"
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
    "services": "サービス",
    "company": "会社情報",
    "legal": "法的情報",
    "airFreight": "航空貨物",
    "seaFreight": "海上貨物",
    "roadFreight": "陸上輸送",
    "warehousing": "倉庫保管",
    "aboutUs": "会社概要",
    "contact": "お問い合わせ",
    "trackShipment": "荷物を追跡",
    "getQuote": "お見積りを取得",
    "privacyPolicy": "プライバシーポリシー",
    "termsOfService": "利用規約",
    "cookiePolicy": "Cookieポリシー",
    "tagline": "SNS"
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
    "services": "Serviços",
    "company": "Empresa",
    "legal": "Legal",
    "airFreight": "Frete Aéreo",
    "seaFreight": "Frete Marítimo",
    "roadFreight": "Frete Rodoviário",
    "warehousing": "Armazenagem",
    "aboutUs": "Sobre Nós",
    "contact": "Contacto",
    "trackShipment": "Rastrear Envio",
    "getQuote": "Obter Orçamento",
    "privacyPolicy": "Política de Privacidade",
    "termsOfService": "Termos de Serviço",
    "cookiePolicy": "Política de Cookies",
    "tagline": "Redes Sociais"
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
    "services": "บริการ",
    "company": "บริษัท",
    "legal": "ข้อกฎหมาย",
    "airFreight": "ขนส่งทางอากาศ",
    "seaFreight": "ขนส่งทางทะเล",
    "roadFreight": "ขนส่งทางถนน",
    "warehousing": "คลังสินค้า",
    "aboutUs": "เกี่ยวกับเรา",
    "contact": "ติดต่อเรา",
    "trackShipment": "ติดตามพัสดุ",
    "getQuote": "ขอใบเสนอราคา",
    "privacyPolicy": "นโยบายความเป็นส่วนตัว",
    "termsOfService": "ข้อกำหนดการให้บริการ",
    "cookiePolicy": "นโยบายคุกกี้",
    "tagline": "โซเชียลมีเดีย"
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
    "services": "服务",
    "company": "公司",
    "legal": "法律信息",
    "airFreight": "空运",
    "seaFreight": "海运",
    "roadFreight": "陆运",
    "warehousing": "仓储服务",
    "aboutUs": "关于我们",
    "contact": "联系我们",
    "trackShipment": "追踪货件",
    "getQuote": "获取报价",
    "privacyPolicy": "隐私政策",
    "termsOfService": "服务条款",
    "cookiePolicy": "Cookie 政策",
    "tagline": "社交媒体"
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
