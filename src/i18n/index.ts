import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.team': 'Our Team',
      'nav.programs': 'Programs',
      'nav.events': 'Events',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'nav.language': 'Language',

      // Hero Section
      'hero.title': 'Bright Hearts Brighter Society',
      'hero.subtitle': 'Empowering Youth, Building Tomorrow',
      'hero.description': 'Join us in creating positive change in our communities through youth engagement, education, and social development programs.',
      'hero.cta.primary': 'Get Involved',
      'hero.cta.secondary': 'Learn More',

      // About Section
      'about.title': 'About Our Organization',
      'about.mission.title': 'Our Mission',
      'about.mission.text': 'To empower young people to become positive agents of change in their communities through education, skill development, and social engagement.',
      'about.vision.title': 'Our Vision',
      'about.vision.text': 'A society where every young person has the opportunity to reach their full potential and contribute meaningfully to community development.',
      'about.values.title': 'Our Values',
      'about.values.text': 'Integrity, Inclusivity, Innovation, and Impact guide everything we do.',

      // Team Section
      'team.title': 'Meet Our Team',
      'team.subtitle': 'Dedicated individuals working together for positive change',

      // Programs Section
      'programs.title': 'Our Programs',
      'programs.subtitle': 'Empowering youth through diverse initiatives',
      'programs.education': 'Education & Skills',
      'programs.community': 'Community Service',
      'programs.leadership': 'Leadership Development',
      'programs.cultural': 'Cultural Activities',

      // Contact Section
      'contact.title': 'Get In Touch',
      'contact.subtitle': 'Ready to make a difference? Join us today!',
      'contact.form.name': 'Your Name',
      'contact.form.email': 'Email Address',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',

      // Footer
      'footer.connect': 'Connect With Us',
      'footer.rights': 'All rights reserved.',
    }
  },
  bn: {
    translation: {
      // Navigation
      'nav.home': 'হোম',
      'nav.about': 'আমাদের সম্পর্কে',
      'nav.team': 'আমাদের দল',
      'nav.programs': 'কর্মসূচি',
      'nav.events': 'ইভেন্ট',
      'nav.gallery': 'গ্যালারি',
      'nav.contact': 'যোগাযোগ',
      'nav.language': 'ভাষা',

      // Hero Section
      'hero.title': 'আলোকিত হৃদয় আলোকিত সমাজ',
      'hero.subtitle': 'যুব শক্তি জাগরণ, আগামীর নির্মাণ',
      'hero.description': 'যুব সম্প্রদায়ের মাধ্যমে শিক্ষা, দক্ষতা উন্নয়ন এবং সামাজিক কর্মসূচির মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনতে আমাদের সাথে যোগ দিন।',
      'hero.cta.primary': 'যুক্ত হন',
      'hero.cta.secondary': 'আরো জানুন',

      // About Section
      'about.title': 'আমাদের সংস্থা সম্পর্কে',
      'about.mission.title': 'আমাদের লক্ষ্য',
      'about.mission.text': 'শিক্ষা, দক্ষতা উন্নয়ন এবং সামাজিক সংযোগের মাধ্যমে তরুণদের তাদের সম্প্রদায়ের ইতিবাচক পরিবর্তনের এজেন্ট হিসেবে ক্ষমতায়ন করা।',
      'about.vision.title': 'আমাদের দৃষ্টিভঙ্গি',
      'about.vision.text': 'এমন একটি সমাজ যেখানে প্রতিটি তরুণ তাদের পূর্ণ সম্ভাবনায় পৌঁছানোর এবং সমাজ উন্নয়নে অর্থবহ অবদান রাখার সুযোগ পাবে।',
      'about.values.title': 'আমাদের মূল্যবোধ',
      'about.values.text': 'সততা, অন্তর্ভুক্তি, উদ্ভাবন এবং প্রভাব - এগুলো আমাদের সকল কাজের দিকনির্দেশনা।',

      // Team Section
      'team.title': 'আমাদের দলের সাথে পরিচিত হন',
      'team.subtitle': 'ইতিবাচক পরিবর্তনের জন্য একসাথে কাজ করা নিবেদিতপ্রাণ ব্যক্তিরা',

      // Programs Section
      'programs.title': 'আমাদের কর্মসূচি',
      'programs.subtitle': 'বিভিন্ন উদ্যোগের মাধ্যমে যুব সমাজের ক্ষমতায়ন',
      'programs.education': 'শিক্ষা ও দক্ষতা',
      'programs.community': 'কমিউনিটি সেবা',
      'programs.leadership': 'নেতৃত্ব উন্নয়ন',
      'programs.cultural': 'সাংস্কৃতিক কার্যক্রম',

      // Contact Section
      'contact.title': 'যোগাযোগ করুন',
      'contact.subtitle': 'পরিবর্তন আনতে প্রস্তুত? আজই আমাদের সাথে যোগ দিন!',
      'contact.form.name': 'আপনার নাম',
      'contact.form.email': 'ইমেইল ঠিকানা',
      'contact.form.message': 'বার্তা',
      'contact.form.submit': 'বার্তা পাঠান',

      // Footer
      'footer.connect': 'আমাদের সাথে যুক্ত হন',
      'footer.rights': 'সকল অধিকার সংরক্ষিত।',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;