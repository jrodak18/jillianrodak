import React from 'react';

export interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}