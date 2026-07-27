const SITE_URL = 'https://www.interiorsinmumbai.com';
const SITE_NAME = 'Interiors in Mumbai';

const ORG_ID = `${SITE_URL}/#organization`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SOCIAL_LINKS = [
  process.env.REACT_APP_FACEBOOK_URL || 'https://www.facebook.com/interiorsinmumbai',
  process.env.REACT_APP_INSTAGRAM_URL || 'https://www.instagram.com/interiorsinmumbai',
  process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/interiorsinmumbai',
  process.env.REACT_APP_YOUTUBE_URL || 'https://www.youtube.com/@interiorsinmumbai',
];

const BUSINESS = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo512.png`,
  telephone: '+919987241424',
  email: 'hello@interiorsinmumbai.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 7, Aashirwad Building, Mira Road East',
    addressLocality: 'Mira-Bhayandar',
    addressRegion: 'Maharashtra',
    postalCode: '401107',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.2813,
    longitude: 72.8642,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
  priceRange: '₹₹',
  areaServed: ['Mumbai', 'Mira Road', 'Andheri', 'Bandra', 'Powai', 'Thane'],
};

const buildOrganization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BUSINESS.name,
  url: BUSINESS.url,
  logo: {
    '@type': 'ImageObject',
    url: BUSINESS.logo,
    width: 512,
    height: 512,
  },
  image: BUSINESS.logo,
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  address: BUSINESS.address,
  geo: BUSINESS.geo,
  sameAs: SOCIAL_LINKS,
});

const buildWebSite = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: BUSINESS.name,
  url: BUSINESS.url,
  publisher: { '@id': ORG_ID },
});

const buildLocalBusiness = () => ({
  '@type': [
    'LocalBusiness',
    'HomeAndConstructionBusiness',
    'ProfessionalService',
    'InteriorDesignBusiness',
    'GeneralContractor',
  ],
  '@id': LOCAL_ID,
  name: BUSINESS.name,
  url: BUSINESS.url,
  image: BUSINESS.logo,
  logo: BUSINESS.logo,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: BUSINESS.address,
  geo: BUSINESS.geo,
  openingHoursSpecification: BUSINESS.openingHoursSpecification,
  areaServed: BUSINESS.areaServed,
  sameAs: SOCIAL_LINKS,
  parentOrganization: { '@id': ORG_ID },
});

const buildImageObject = (url, { width, height, caption } = {}) => ({
  '@type': 'ImageObject',
  url,
  ...(width ? { width } : {}),
  ...(height ? { height } : {}),
  ...(caption ? { caption } : {}),
});

const buildVideoObject = ({ name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl }) => ({
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl,
  uploadDate,
  ...(contentUrl ? { contentUrl } : {}),
  embedUrl,
  publisher: { '@id': ORG_ID },
});

const buildService = ({ name, description, serviceType, url, image }) => ({
  '@type': 'Service',
  name,
  description,
  serviceType,
  url,
  ...(image ? { image } : {}),
  provider: { '@id': ORG_ID },
  areaServed: BUSINESS.areaServed,
});

const buildArticle = ({ headline, description, image, datePublished, dateModified, author, url }) => ({
  '@type': 'Article',
  headline,
  description,
  image: image ? buildImageObject(image) : undefined,
  datePublished,
  dateModified: dateModified || datePublished,
  author: author
    ? { '@type': 'Person', name: author }
    : { '@type': 'Organization', name: BUSINESS.name },
  publisher: { '@id': ORG_ID },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url || BUSINESS.url },
});

const buildGlobalGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [buildOrganization(), buildWebSite(), buildLocalBusiness()],
});

const buildAboutPage = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Interiors in Mumbai',
  description:
    'Interiors in Mumbai (Shrishti Interiors) is a Mumbai-based interior design and turnkey contracting firm with 15+ years of experience, 1,200+ projects, certifications, and written warranties.',
  url: `${SITE_URL}/about-us`,
  mainEntity: { '@id': ORG_ID },
  mentions: [
    { '@type': 'Organization', name: 'Indian Institute of Interior Designers (IIID)' },
    { '@type': 'Organization', name: 'Hettich' },
    { '@type': 'Organization', name: 'Hafele' },
    { '@type': 'Organization', name: 'Asian Paints' },
  ],
});

const buildTeamGraph = (members) => ({
  '@context': 'https://schema.org',
  '@graph': members.map((m, i) => ({
    '@type': 'Person',
    '@id': `${SITE_URL}/#person-${i + 1}`,
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    worksFor: { '@id': ORG_ID },
    ...(m.sameAs ? { sameAs: [m.sameAs] } : {}),
  })),
});

export {
  SITE_URL,
  SITE_NAME,
  ORG_ID,
  LOCAL_ID,
  WEBSITE_ID,
  SOCIAL_LINKS,
  BUSINESS,
  buildOrganization,
  buildWebSite,
  buildLocalBusiness,
  buildImageObject,
  buildVideoObject,
  buildService,
  buildArticle,
  buildGlobalGraph,
  buildAboutPage,
  buildTeamGraph,
};
