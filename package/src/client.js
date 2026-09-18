import { createClient } from 'contentful';

const space = process.env.REACT_APP_CONTENTFUL_SPACE;
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

console.log('Initializing Contentful client with:', {
  space,
  environment,
  accessTokenPrefix: accessToken ? accessToken.substring(0, 4) + '...' : 'NOT_SET'
});

export const client = createClient({
  space,
  accessToken,
  environment,
  logHandler: (level, data) => {
    if (level === 'error') {
      console.error('Contentful Error:', data);
    } else {
      console.log('Contentful Log:', { level, data });
    }
  }
});
