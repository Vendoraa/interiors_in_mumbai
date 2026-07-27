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
  teamSize: 45,
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
  { value: '45+', label: 'Designers & craftsmen' },
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

export const AWARDS = [
  'Mumbai Interior Design Award 2023 – Residential',
  'Best Turnkey Execution (Suburban Mumbai) 2022',
  'Customer Choice Award 2021',
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

export const TEAM = [
  {
    img: IMAGES.team1,
    name: 'Amit Deshmukh',
    role: 'Principal Architect',
    bio: 'Leads design direction with 14+ years shaping Mumbai apartments and bungalows. IIID-registered architect focused on space-efficient, livable homes.',
    sameAs: '',
  },
  {
    img: IMAGES.team2,
    name: 'Neha Sharma',
    role: 'Head of Interior Design',
    bio: 'Specialises in modular kitchens and wardrobes, blending aesthetics with ergonomics across 400+ Mumbai homes.',
    sameAs: '',
  },
  {
    img: IMAGES.team3,
    name: 'Rohit Pawar',
    role: 'Turnkey Project Manager',
    bio: 'Coordinates civil, carpentry, electrical, and painting teams to deliver projects on time with a single point of accountability.',
    sameAs: '',
  },
  {
    img: IMAGES.team4,
    name: 'Sandeep Kulkarni',
    role: 'Site Supervisor & Quality Lead',
    bio: 'Ensures every site meets our quality checklist, from material checks to final snag clearance before handover.',
    sameAs: '',
  },
  {
    img: IMAGES.team5,
    name: 'Priya Nair',
    role: 'Senior Designer',
    bio: 'Creates 3D concepts and colour stories that help clients visualise their home before a single tile is laid.',
    sameAs: '',
  },
  {
    img: IMAGES.team6,
    name: 'Karan Mehta',
    role: 'Estimation & Client Relations',
    bio: 'Prepares transparent, fixed quotations so clients know the full cost upfront with no hidden surprises.',
    sameAs: '',
  },
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
