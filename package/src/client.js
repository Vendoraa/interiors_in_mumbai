import { createClient } from 'contentful';

const space = 'as5c0n8s85du';
// Changed to use a Content Delivery API token instead of a Management token
const accessToken = 'aCjkJS44Vwh5BekGNhWUu8Df_TlFSLiZEqGTmbrd1rI';
const environment = 'master';

console.log('Initializing Contentful client with:', {
  space,
  environment,
  accessTokenPrefix: accessToken.substring(0, 4) + '...'
});

export const client = createClient({
  space,
  accessToken,
  environment,
  // Add request/response logging
  logHandler: (level, data) => {
    if (level === 'error') {
      console.error('Contentful Error:', data);
    } else {
      console.log('Contentful Log:', { level, data });
    }
  }
});
