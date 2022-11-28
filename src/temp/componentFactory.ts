/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.

import dynamic from 'next/dynamic'


import * as ContentBlock from 'src/components/ContentBlock';
import * as StyleguideFieldUsageCheckbox from 'src/components/fields/Styleguide-FieldUsage-Checkbox';
import * as StyleguideFieldUsageContentList from 'src/components/fields/Styleguide-FieldUsage-ContentList';
import * as StyleguideFieldUsageCustom from 'src/components/fields/Styleguide-FieldUsage-Custom';
import * as StyleguideFieldUsageDate from 'src/components/fields/Styleguide-FieldUsage-Date';
import * as StyleguideFieldUsageFile from 'src/components/fields/Styleguide-FieldUsage-File';
import * as StyleguideFieldUsageImage from 'src/components/fields/Styleguide-FieldUsage-Image';
import * as StyleguideFieldUsageItemLink from 'src/components/fields/Styleguide-FieldUsage-ItemLink';
import * as StyleguideFieldUsageLink from 'src/components/fields/Styleguide-FieldUsage-Link';
import * as StyleguideFieldUsageNumber from 'src/components/fields/Styleguide-FieldUsage-Number';
import * as StyleguideFieldUsageRichText from 'src/components/fields/Styleguide-FieldUsage-RichText';
import * as StyleguideFieldUsageText from 'src/components/fields/Styleguide-FieldUsage-Text';
const GraphQLConnectedDemo = {
  module: () => import('src/components/graphql/GraphQL-ConnectedDemo.dynamic'),
  element: (isEditing?: boolean) => isEditing ? require('src/components/graphql/GraphQL-ConnectedDemo.dynamic')?.default : dynamic(GraphQLConnectedDemo.module)
}
import * as GraphQLIntegratedDemo from 'src/components/graphql/GraphQL-IntegratedDemo';
import * as GraphQLLayout from 'src/components/graphql/GraphQL-Layout';
import * as StyleguideComponentParams from 'src/components/styleguide/Styleguide-ComponentParams';
import * as StyleguideCustomRouteType from 'src/components/styleguide/Styleguide-CustomRouteType';
import * as StyleguideLayoutReuse from 'src/components/styleguide/Styleguide-Layout-Reuse';
import * as StyleguideLayoutTabsTab from 'src/components/styleguide/Styleguide-Layout-Tabs-Tab';
import * as StyleguideLayoutTabs from 'src/components/styleguide/Styleguide-Layout-Tabs';
import * as StyleguideLayout from 'src/components/styleguide/Styleguide-Layout';
import * as StyleguideMultilingual from 'src/components/styleguide/Styleguide-Multilingual';
import * as StyleguideRouteFields from 'src/components/styleguide/Styleguide-RouteFields';
import * as StyleguideSection from 'src/components/styleguide/Styleguide-Section';
import * as StyleguideSitecoreContext from 'src/components/styleguide/Styleguide-SitecoreContext';
import * as StyleguideSpecimen from 'src/components/styleguide/Styleguide-Specimen';
import * as StyleguideTracking from 'src/components/styleguide/Styleguide-Tracking';

const components = new Map();

components.set('ContentBlock', ContentBlock);
components.set('Styleguide-FieldUsage-Checkbox', StyleguideFieldUsageCheckbox);
components.set('Styleguide-FieldUsage-ContentList', StyleguideFieldUsageContentList);
components.set('Styleguide-FieldUsage-Custom', StyleguideFieldUsageCustom);
components.set('Styleguide-FieldUsage-Date', StyleguideFieldUsageDate);
components.set('Styleguide-FieldUsage-File', StyleguideFieldUsageFile);
components.set('Styleguide-FieldUsage-Image', StyleguideFieldUsageImage);
components.set('Styleguide-FieldUsage-ItemLink', StyleguideFieldUsageItemLink);
components.set('Styleguide-FieldUsage-Link', StyleguideFieldUsageLink);
components.set('Styleguide-FieldUsage-Number', StyleguideFieldUsageNumber);
components.set('Styleguide-FieldUsage-RichText', StyleguideFieldUsageRichText);
components.set('Styleguide-FieldUsage-Text', StyleguideFieldUsageText);
components.set('GraphQL-ConnectedDemo', GraphQLConnectedDemo);
components.set('GraphQL-IntegratedDemo', GraphQLIntegratedDemo);
components.set('GraphQL-Layout', GraphQLLayout);
components.set('Styleguide-ComponentParams', StyleguideComponentParams);
components.set('Styleguide-CustomRouteType', StyleguideCustomRouteType);
components.set('Styleguide-Layout-Reuse', StyleguideLayoutReuse);
components.set('Styleguide-Layout-Tabs-Tab', StyleguideLayoutTabsTab);
components.set('Styleguide-Layout-Tabs', StyleguideLayoutTabs);
components.set('Styleguide-Layout', StyleguideLayout);
components.set('Styleguide-Multilingual', StyleguideMultilingual);
components.set('Styleguide-RouteFields', StyleguideRouteFields);
components.set('Styleguide-Section', StyleguideSection);
components.set('Styleguide-SitecoreContext', StyleguideSitecoreContext);
components.set('Styleguide-Specimen', StyleguideSpecimen);
components.set('Styleguide-Tracking', StyleguideTracking);

// Next.js 'dynamic' import and JavaScript 'dynamic' import are different.
// Next.js 'dynamic(...)' returns common 'React.ComponentType' while
// 'import('...')' returns 'Promise' that will resolve module.
// componentModule uses 'import(...)' because primary usage of it to get not only 'React Component' (default export) but all named exports.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
// componentFactory uses 'dynamic(...)' because primary usage of it to render 'React Component' (default export).
// See https://nextjs.org/docs/advanced-features/dynamic-import
// At the end you will have single preloaded script for each lazy loading module.
// Editing mode doesn't work well with dynamic components in nextjs: dynamic components are not displayed without refresh after a rendering is added. 
// This happens beacuse Sitecore editors simply insert updated HTML generated on server side. This conflicts with nextjs dynamic logic as no HTML gets rendered for dynamic component
// So we use require() to obtain dynamic components in editing mode while preserving dynamic logic for non-editing scenarios
// As we need to be able to seamlessly work with dynamic components in both editing and normal modes, different componentFactory functions will be passed to app

export function componentModule(componentName: string) {
  const component = components.get(componentName);

  // check that component is lazy loading module
  if (!component?.default && component?.module) {
    // return js dynamic import
    return component.module();
  }

  return component;
}

function baseComponentFactory(componentName: string, exportName?: string, isEditing?: boolean) {
  const component = components.get(componentName);

  // check that component should be dynamically imported
  if (component?.element) {
    // return next.js dynamic import
    return component.element(isEditing);
  }

  if (exportName) {
    return component[exportName];
  }

  return component?.Default || component?.default || component;
}
  
export function componentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, false);
}

export function editingComponentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, true);
}