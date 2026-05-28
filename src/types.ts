/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  year: number;
  status: 'successful' | 'unsuccessful';
  client: string;
  location: string;
  value: string;
  scopeOfWork: string;
  challenge: string;
  solution: string;
}

export type ActiveTab = 'home' | 'projects' | 'services' | 'information';

export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ExpertiseItem {
  id: string;
  numeral: string;
  title: string;
  description: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  company: string;
  projectType: string;
  message: string;
  timestamp: string;
}
