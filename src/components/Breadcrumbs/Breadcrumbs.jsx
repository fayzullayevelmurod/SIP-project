import React from 'react';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';

const CustomBreadcrumbs = ({ items = [] }) => {

  const breadcrumbItems = items.map(item => ({
    label: item.label,
    href: item.href,
  }));

  return <Breadcrumbs fitMode="scroll" items={breadcrumbItems} size='xs' />;
};

export default CustomBreadcrumbs;
