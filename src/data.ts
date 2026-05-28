/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Capability, ExpertiseItem } from './types';

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'exp-1',
    numeral: 'I',
    title: 'Proposal Architecture',
    description: 'Deep structural layout of compliance requirements, building a robust outline that acts as an unbroken golden thread from compliance matrices to technical narratives.'
  },
  {
    id: 'exp-2',
    numeral: 'II',
    title: 'Technical Editing',
    description: 'Transforming dense engineering specifications into persuasive, readable, and highly precise technical narratives that evaluators can parse in under 30 seconds.'
  },
  {
    id: 'exp-3',
    numeral: 'III',
    title: 'Information Design',
    description: 'Creating bespoke, publication-grade infographics and functional diagrams that visualize logistical operations, structural designs, and complex scheduling.'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'cap-1',
    number: '01',
    title: 'Proposal Writing',
    description: 'We craft compelling narratives that translate complex technical expertise into persuasive value propositions. Our writing ensures your firm’s unique methodology resonates with institutional evaluators.',
    details: [
      'Bid Management Strategy & Storyboarding',
      'Compliance Matrix Tracking',
      'Executive Summary Authorship',
      'Technical Narrative Crafting'
    ]
  },
  {
    id: 'cap-2',
    number: '02',
    title: 'Editing & Review',
    description: 'Our meticulous review process focuses on structural integrity, stylistic consistency, and grammatical precision. We eliminate ambiguity to present a polished, authoritative voice in every document.',
    details: [
      'Red Team Evaluative Reviews',
      'Structural Clarity Auditing',
      'Grammatical Precision Tuning',
      'Style Guide Alignment'
    ]
  },
  {
    id: 'cap-3',
    number: '03',
    title: 'Graphic Design',
    description: 'Visualizing complex data through minimalist, editorial-grade layouts that prioritize information hierarchy. We ensure every diagram and page structure supports the overall narrative of excellence.',
    details: [
      'Custom Technical Diagrams',
      'Bespoke Bid Templates (InDesign & Word)',
      'Prestige Executive Summaries',
      'Interactive Web Submissions'
    ]
  },
  {
    id: 'cap-4',
    number: '04',
    title: 'Project Management',
    description: 'Strategic oversight for high-value bid cycles, coordinating multidisciplinary teams under stringent deadlines. We manage the workflow from inception to delivery, ensuring no detail is overlooked.',
    details: [
      'Critical Path Management (CPM)',
      'Multi-stakeholder Coordination',
      'Deliverable Compliance Auditing',
      'Production Scheduling & Packaging'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    name: 'Cross-River Expressway Expansion',
    category: 'HIGHWAYS',
    subCategory: 'HIGHWAYS / INFRASTRUCTURE',
    year: 2024,
    status: 'successful',
    client: 'Department of Transportation',
    location: 'Pacific Northwest',
    value: '$1.2B USD',
    scopeOfWork: 'Comprehensive design-build-maintain proposal drafting, including technical schedules, seismic resilience arguments, and environmental mitigation plans for a 24-mile corridor.',
    challenge: 'Addressing complex environmental runoff constraints near salmon-spawning waters while proposing a hyper-accelerated 36-month construction cycle.',
    solution: 'Designed a dual-phase bioswale runoff collection schema and visualized it via customized high-clarity site plan diagrams, winning perfect scores in the technical criteria.'
  },
  {
    id: 'proj-2',
    name: 'The Vertical Arboretum Tower',
    category: 'BUILDINGS',
    subCategory: 'BUILDINGS / CLIMATE',
    year: 2023,
    status: 'unsuccessful',
    client: 'Eco-Living Corporation',
    location: 'London, UK',
    value: '£450M GBP',
    scopeOfWork: 'Prestige bidding support for a sustainable high-density residential highrise integrating over 20,000 native micro-fauna plantings and micro-wind energy systems.',
    challenge: 'The mechanical, electrical, and plumbing (MEP) integration plan struggled to align with strict city shadow-casting and structural load-bearing wind resistance matrices.',
    solution: 'Engineered a highly aesthetic 80-page proposal folio emphasizing self-sustaining greywater loops and prefabricated timber floor cassettes to offset weight.'
  },
  {
    id: 'proj-3',
    name: 'Great Western Rail Link (Ph IV)',
    category: 'RAIL',
    subCategory: 'RAIL / TRANSIT',
    year: 2024,
    status: 'successful',
    client: 'National Transit Authority',
    location: 'Western Plains Region',
    value: '$850M USD',
    scopeOfWork: 'Strategic response alignment, system safety program plan (SSPP) editing, and scheduling architecture for a high-speed commuter rail extension spanning 8 existing transport hubs.',
    challenge: 'Demonstrating seamless signaling systems integration across legacy tracks and brand-new automated safety mechanisms without disrupting commuter schedules.',
    solution: 'Authored an explanatory 4D phasing plan with meticulous timeline graphics detailing night-shift construction windows, securing the lowest risk rating among all candidates.'
  },
  {
    id: 'proj-4',
    name: 'Subterranean Transit Hub 01',
    category: 'TUNNELS',
    subCategory: 'TUNNELS / TRANSIT',
    year: 2023,
    status: 'successful',
    client: 'Metropolitan Transit Alliance',
    location: 'Vancouver, BC',
    value: '$2.1B CAD',
    scopeOfWork: 'TBM (Tunnel Boring Machine) risk profiling, underground structural safety manuals, and detailed procurement narrative structure for a underground rail terminal.',
    challenge: 'Conveying technical risk-mitigation measures for soft-clay sub-surface conditions underneath high-density financial districts.',
    solution: 'Structured a clear, visual risk-register table paired with explanatory narrative profiles for every major excavation hazard, demonstrating absolute control and foresight.'
  },
  {
    id: 'proj-5',
    name: 'Arctic Ridge Mining Facility',
    category: 'MINING',
    subCategory: 'MINING / ENERGY',
    year: 2022,
    status: 'unsuccessful',
    client: 'Boreas Resources Group',
    location: 'Nunavut Territory',
    value: '$580M CAD',
    scopeOfWork: 'Writing logistics management, severe-cold survival infrastructure manuals, and indigenous trade partner outreach reports for an ultra-remote open-pit minerals site.',
    challenge: 'Logistical supply chains were entirely reliant on seasonal ice roads, introducing immense scheduling volatility.',
    solution: 'Formulated an intricate backup barge transport matrix and localized material stockpiling schedule to mitigate winter freezing delays.'
  },
  {
    id: 'proj-6',
    name: 'Renewable Grid Integration Phase II',
    category: 'ENERGY',
    subCategory: 'ENERGY / CLIMATE',
    year: 2024,
    status: 'successful',
    client: 'Consolidated CleanPower Inc.',
    location: 'California, USA',
    value: '$420M USD',
    scopeOfWork: 'Writing grid-resilience compliance reports, battery-storage scaling plans, and federal grant-funding applications for a utility-scale solar+wind storage grid.',
    challenge: 'Meeting stringent federal environmental justice and local supply-chain compliance regulations required under the newly enacted Clean Infrastructure Act.',
    solution: 'Researched and compiled an air-tight socio-economic community impact study, securing a $110M federal matching grant for the utility provider.'
  },
  {
    id: 'proj-7',
    name: 'South Basin Drainage Masterplan',
    category: 'CLIMATE',
    subCategory: 'CLIMATE / INFRASTRUCTURE',
    year: 2022,
    status: 'unsuccessful',
    client: 'Bayou Flood Authority',
    location: 'Gulf Coast Region',
    value: '$130M USD',
    scopeOfWork: 'Bidding response leadership, disaster recovery scheduling, and technical editing of stormwater hydrology reports for a defensive coastal storm drainage upgrade.',
    challenge: 'Demonstrating rapid-mobilization capacity in the wake of catastrophic category-5 hurricane scenarios under dynamic staffing constraints.',
    solution: 'Designed a localized emergency subcontractor network outline and automated triage system for instant floodgate operations.'
  },
  {
    id: 'proj-8',
    name: 'Central District Library Wing',
    category: 'BUILDINGS',
    subCategory: 'BUILDINGS',
    year: 2023,
    status: 'successful',
    client: 'Municipality of Vancouver',
    location: 'Vancouver, BC',
    value: '$95M CAD',
    scopeOfWork: 'LEED Gold certification roadmap drafting, modern mass-timber engineering explanations, and public interest outreach planning for a library expansion.',
    challenge: 'Explaining mass-timber structural characteristics to conservative municipal architects who were worried about long-term moisture and integrity issues.',
    solution: 'Composed a pristine, academically referenced whitepaper comparing structural cross-laminated timber (CLT) to standard structural steel, winning unanimous project approval.'
  }
];
