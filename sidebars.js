/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],      

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Packages',
      collapsible: false,
      items: ['packages/integrate-package','packages/rollback-package' ],
    },
    {
      type: 'category',
      label: 'For Developers',
      collapsible: false,
      items: ['For Developers/manage-docs-versions',
        'For Developers/translate-your-site'
        ,'For Developers/translate-your-site copy', 
        'For Developers/translate-your-site copy 2'],
    },
  ],
   
};

export default sidebars;
