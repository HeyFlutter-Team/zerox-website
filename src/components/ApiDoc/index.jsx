// src/components/ApiDoc/index.jsx
import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SwaggerUI = ({ url }) => {
  useEffect(() => {
    // Dynamically load Swagger UI CSS and JS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css';
    document.head.appendChild(linkElement);

    const uiBundle = document.createElement('script');
    uiBundle.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js';
    document.body.appendChild(uiBundle);

    const uiStandalone = document.createElement('script');
    uiStandalone.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js';
    
    uiBundle.onload = () => {
      document.body.appendChild(uiStandalone);
      
      uiStandalone.onload = () => {
        window.ui = SwaggerUIBundle({
          url: url,
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "BaseLayout",
          defaultModelsExpandDepth: -1
        });
      };
    };

    // Cleanup function
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(uiBundle);
      document.body.removeChild(uiStandalone);
    };
  }, [url]);

  return (
    <div className="swagger-section">
      <div id="swagger-ui"></div>
      <style>
        {`
          .swagger-section {
            margin: 20px 0;
            padding: 20px;
            border: 1px solid var(--ifm-color-emphasis-300);
            border-radius: var(--ifm-border-radius);
          }

          /* Override Swagger UI styles to match Docusaurus theme */
          .swagger-ui {
            font-family: var(--ifm-font-family-base);
          }

          .swagger-ui .opblock-tag {
            color: var(--ifm-color-content);
          }

          .swagger-ui .opblock .opblock-summary-operation-id, 
          .swagger-ui .opblock .opblock-summary-path, 
          .swagger-ui .opblock .opblock-summary-description {
            color: var(--ifm-color-content);
          }

          /* Adjust colors for dark mode compatibility */
          html[data-theme='dark'] .swagger-ui,
          html[data-theme='dark'] .swagger-ui .opblock-tag,
          html[data-theme='dark'] .swagger-ui .opblock .opblock-summary-operation-id,
          html[data-theme='dark'] .swagger-ui .opblock .opblock-summary-path,
          html[data-theme='dark'] .swagger-ui .opblock .opblock-summary-description {
            color: var(--ifm-color-content);
          }
        `}
      </style>
    </div>
  );
};

// Wrap component in BrowserOnly to prevent SSR issues
const ApiDoc = ({ url }) => {
  return (
    <BrowserOnly>
      {() => <SwaggerUI url={url} />}
    </BrowserOnly>
  );
};

export default ApiDoc;