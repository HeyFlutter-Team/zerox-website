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
          layout: "BaseLayout",
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
          section.models.is-open,
          .information-container {
          display: none;
          }

          /* Default light theme styles */
          .scheme-container {
              background-color: #ffffff;
              color: #000000;
              border: 1px solid #cccccc;
          }
          

          /* Override Swagger UI styles to match Docusaurus theme */
          .swagger-ui {
            font-family: var(--ifm-font-family-base);
          }

          .swagger-ui .section .models .is-open {
            display: none;
          }

          .swagger-ui .opblock-tag {
            color: var(--ifm-color-content);
          }

          .swagger-ui .opblock .opblock-summary-operation-id, 
          .swagger-ui .opblock .opblock-summary-path, 
          .swagger-ui .opblock .opblock-summary-description {
            color: var(--ifm-color-content);
          }


          .swagger-ui table thead tr td, 
          .swagger-ui table thead tr th,
          .swagger-ui table tbody tr td:first-of-type,
          .swagger-ui table tbody tr td {
            padding: 12px 10px;
          }

          /* Adjust colors for dark mode compatibility */
          html[data-theme='dark'] .swagger-ui {
            /* General text color adjustments */
            color: var(--ifm-color-content);
          }

          html[data-theme='dark'] .swagger-ui {
            /* Grouped child selectors for consistent text color */
            label,
            .response-col_status,
            .tab li,
            .prop-format,
            .parameter__name,
            .parameter__type,
            .parameter__in,
            table thead td,
            table thead th,
            .opblock-description-wrapper p,
            .opblock-external-docs-wrapper p,
            .opblock-title_normal p,
            .opblock-control-arrow,
            .opblock-tag small,
            .scheme-container .schemes > .schemes-server-container > label,
            .opblock .opblock-section-header h4,
            .btn,
            .opblock .opblock-section-header > label {
              color:#eeeaea;
            }

            /* Operation block summaries */
            .opblock-tag,
            .opblock .opblock-summary-operation-id,
            .opblock .opblock-summary-path,
            .opblock .opblock-summary-description {
              color: var(--ifm-color-content);
            }

  
            /* Dropdowns and section headers, Inputs for email, file, password, search, and text*/
            select,
            .opblock .opblock-section-header,
            input[disabled],
            select[disabled], 
            textarea[disabled],
            input[type='email'],
            input[type='password'],
            input[type='search'],
            input[type='text'],
            input[type='file'] {
              background-color: #1e1e1e;
              color: #ffffff;
            }
          }

          /* Scheme container adjustments */
          html[data-theme='dark'] .scheme-container,
          html[data-theme='dark'] .scheme-container .scheme-server-container {
            background-color: #1e1e1e;
            color: var(--ifm-color-content);
            border: 1px solid #444444;
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