import { IMAGES } from '../constants/theme';

export const COMPANY = {
  name: 'Interiors in Mumbai',
  legalName: 'Shrishti Interiors',
  url: 'https://www.interiorsinmumbai.com',
  email: 'hello@interiorsinmumbai.com',
  telephone: '+919987241424',
  telephone2: '+918369658010',
  address: 'Shop 7, Aashirwad Building, Mira Road East, Mira-Bhayandar, Maharashtra 401107',
  foundingDate: '2009',
  yearsInBusiness: 15,
  projectsCompleted: 1200,
  satisfaction: 98,
  priceRange: '₹₹',
  hours: 'Monday to Saturday, 10:00 AM – 7:00 PM',
  hoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
};

export const STATS = [
  { value: '15+', label: 'Years in business' },
  { value: '1,200+', label: 'Projects completed' },
  { value: '98%', label: 'Customer satisfaction' },
];

export const CERTIFICATIONS = [
  { name: 'Indian Institute of Interior Designers (IIID)', detail: 'Registered design practice' },
  { name: 'Hettich Authorised Partner', detail: 'Certified hardware & fittings' },
  { name: 'Hafele Certified Kitchen Partner', detail: 'Modular kitchen specialist' },
  { name: 'Asian Paints Approved Contractor', detail: 'Trained painting applicator' },
  { name: 'ISO 9001:2015 Quality Management', detail: 'Process & quality certified' },
  { name: 'GST Registered Business', detail: 'Transparent, compliant billing' },
];

export const SERVICE_AREAS = [
  'Mira Road',
  'Andheri',
  'Bandra',
  'Powai',
  'Thane',
  'Borivali',
  'Malad',
  'Kandivali',
  'Jogeshwari',
  'Goregaon',
  'Juhu',
  'Chembur',
  'Navi Mumbai',
  'South Mumbai',
];

export const WARRANTY = [
  { title: '10-Year Warranty', text: 'On civil, carpentry, and modular woodwork against manufacturing and structural defects.' },
  { title: '5-Year Warranty', text: 'On waterproofing and false-ceiling work for leak- and crack-free performance.' },
  { title: '2-Year Warranty', text: 'On painting, electrical, and hardware mechanisms with free service visits.' },
  { title: 'AMC Option', text: 'Annual maintenance contracts available for ongoing care of your interiors.' },
];

export const TESTIMONIALS = [];

export const BEFORE_AFTER = [
  {
    before: IMAGES.before1bhk,
    after: IMAGES.after1bhk,
    title: '1BHK Makeover – Mira Road',
    text: 'A bare shell 1BHK turned into a warm, storage-rich family home with a closed kitchen and custom wardrobes.',
  },
  {
    before: IMAGES.mumbai2bhk,
    after: IMAGES.mumbaiKitchen,
    title: '2BHK Renovation – Andheri',
    text: 'Open, brighter living space with a modern modular kitchen and space-saving furniture.',
  },
  {
    before: IMAGES.mumbai3bhk,
    after: IMAGES.portfolioLivingRoom,
    title: '3BHK Interior – Powai',
    text: 'Elegant living room and bedrooms with layered lighting and premium laminate finishes.',
  },
];

export const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=Interiors+in+Mumbai+reviews';
