import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const fallbackContent = document.getElementById('seo-fallback');

// Only hydrate if we have content AND it's not our manual fallback
// In production (post-react-snap), the fallback div will be gone, replaced by actual app HTML
if (container.hasChildNodes() && !fallbackContent) {
  ReactDOM.hydrateRoot(container, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

serviceWorkerRegistration.register();
reportWebVitals();
