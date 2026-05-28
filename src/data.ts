/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Capability, ExpertiseItem } from './types';

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'exp-1',
    numeral: 'I',
    title: 'Proposal Management',
    description: 'End-to-end proposal leadership, section management, compliance coordination, reviews, proofreading, and production.'
  },
  {
    id: 'exp-2',
    numeral: 'II',
    title: 'Writing and Editing',
    description: 'Technical writing, substantive editing, and story development that help subject matter experts turn complex work into clear proposal content.'
  },
  {
    id: 'exp-3',
    numeral: 'III',
    title: 'Graphic and Document Design',
    description: 'Proposal graphics, document design, templates, and production support for qualification submissions, proposals, and technical documentation.'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'cap-1',
    number: '01',
    title: 'People',
    description: 'We can staff an entire proposal department or provide supplemental personnel, working with your subject matter experts to develop proposal submissions, strengthened over time with reusable content libraries.',
    details: [
      'Proposal managers',
      'Technical writers',
      'Editors and proofreaders',
      'Graphic and document designers'
    ]
  },
  {
    id: 'cap-2',
    number: '02',
    title: 'Proposals',
    description: 'Our eight full-time graphic designers, writers, editors, and proposal managers collaborate on every project to deliver proposals and qualification submissions.',
    details: [
      'Proposal management',
      'Section management',
      'Substantive editing',
      'Strategic reviews',
      'Proofreading and production'
    ]
  },
  {
    id: 'cap-3',
    number: '03',
    title: 'Projects',
    description: 'Once you have won, we support the development of technical documentation required by design and early works agreements, pre-development agreements, or typical mobilization.',
    details: [
      'Technical documentation',
      'Design and early works agreement support',
      'Pre-development agreement support',
      'Mobilization documentation'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'highway-maintenance-alta',
    name: 'Highway Maintenance, ALTA',
    category: 'HIGHWAYS',
    subCategory: 'HIGHWAYS',
    year: 2025,
    status: 'won',
    client: 'Highway maintenance contractor',
    location: 'Alberta, Canada',
    value: 'Hundreds of millions of dollars',
    scopeOfWork: 'Ongoing support for a highway maintenance contractor expanding its presence in Alberta, Canada.',
    challenge: 'The contractor needed proposal support across executive leadership and subject matter experts in British Columbia and Alberta.',
    solution: 'WIN / RATIO wrote and edited content, provided graphic design, and developed strategies to maximize points. Outcome: four new Alberta contracts secured.'
  },
  {
    id: 'ottawau-student-residence-development',
    name: 'OttawaU Student Residence Development',
    category: 'BUILDINGS',
    subCategory: 'BUILDINGS',
    year: 2025,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Ottawa, Canada',
    value: 'Not publicly listed',
    scopeOfWork: 'Bid to design, construct, finance, and maintain housing facilities for the University of Ottawa.',
    challenge: 'The submission required coordinated end-to-end proposal delivery for a public university residence development.',
    solution: 'WIN / RATIO provided a six-person team for proposal management, section management, substantive editing, graphic design, strategic reviews, proofreading, and production.'
  },
  {
    id: 'miso-qualification',
    name: 'MISO Qualification',
    category: 'ENERGY',
    subCategory: 'ENERGY',
    year: 2025,
    status: 'qualified',
    client: 'International contractor',
    location: 'United States',
    value: 'Access to pursuits collectively valued at $21.3B',
    scopeOfWork: 'Submission to gain access to the US electric transmission system market.',
    challenge: 'The contractor needed to organize administrative and financial information, historical contract data, and procedural and technical documentation.',
    solution: 'WIN / RATIO helped gather and organize the qualification material. Outcome: qualified to bid in the US MISO region.'
  },
  {
    id: 'i-285-east-express-lanes',
    name: 'I-285 East Express Lanes',
    category: 'HIGHWAYS',
    subCategory: 'HIGHWAYS',
    year: 2025,
    status: 'qualified',
    client: 'Consortium',
    location: 'Atlanta, Georgia',
    value: 'Not publicly listed',
    scopeOfWork: 'Request for qualification submission for express lanes along the I-285 highway in Atlanta, Georgia.',
    challenge: 'The project involved design, build, finance, operate, and maintain responsibilities.',
    solution: 'WIN / RATIO provided proposal management, section management, substantive editing, graphic design, strategic reviews, proofreading, and production. Outcome: qualified.'
  },
  {
    id: 'fraser-river-tunnel',
    name: 'Fraser River Tunnel',
    category: 'TUNNELS',
    subCategory: 'TUNNELS / HIGHWAYS',
    year: 2025,
    status: 'qualified',
    client: 'Consortium',
    location: 'British Columbia, Canada',
    value: 'Not publicly listed',
    scopeOfWork: 'Request for qualification submission for a highway tunnel to replace the aging Massey Tunnel.',
    challenge: 'The pursuit was structured as a design and early works agreement for a major tunnel replacement.',
    solution: 'WIN / RATIO provided proposal management, section management, substantive editing, graphic design, strategic reviews, proofreading, and production. Outcome: qualified.'
  },
  {
    id: 'baylor-u-cup',
    name: 'Baylor U CUP',
    category: 'ENERGY',
    subCategory: 'ENERGY',
    year: 2025,
    status: 'not-listed',
    client: 'Consortium',
    location: 'Baylor University',
    value: 'Not publicly listed',
    scopeOfWork: 'Short engagement to improve a consortium submission to replace Baylor University energy complex.',
    challenge: 'The team had two weeks to improve templates, gather information, and strengthen the presentation of information.',
    solution: 'WIN / RATIO redeveloped templates, gathered additional partner information, conducted interviews, advised on point-maximizing presentation, and provided graphic and document design.'
  },
  {
    id: 'deep-geological-repository',
    name: 'Deep Geological Repository',
    category: 'MINING',
    subCategory: 'MINING',
    year: 2024,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Not publicly listed',
    value: 'Not publicly listed',
    scopeOfWork: 'Pursuit to design and build a deep geological repository for long-term disposal of radioactive waste.',
    challenge: 'The bid required clear end-to-end proposal management for a highly technical repository project.',
    solution: 'WIN / RATIO provided proposal management, section management, substantive editing, graphic design, strategic reviews, proofreading, and production.'
  },
  {
    id: 'alto-high-speed-rail',
    name: 'Alto High Speed Rail',
    category: 'RAIL',
    subCategory: 'RAIL',
    year: 2024,
    status: 'won',
    client: 'Alto proponent team',
    location: 'Canada',
    value: '$3.9B co-development phase',
    scopeOfWork: 'Proposal management consultant for Alto, Canada first high speed rail line and the largest infrastructure project in Canadian history.',
    challenge: 'The submission was the largest and most complex in the company history and required nearly a year of work with each technical discipline.',
    solution: 'WIN / RATIO organized a 13-person team, analyzed complex RFP requirements and evaluation criteria, and developed a documentation strategy to demonstrate compliance and responsiveness. Outcome: won.'
  },
  {
    id: 'henry-ford-health-cup',
    name: 'Henry Ford Health CUP',
    category: 'ENERGY',
    subCategory: 'ENERGY / BUILDINGS',
    year: 2023,
    status: 'won',
    client: 'Consortium',
    location: 'Detroit, Michigan',
    value: '$255M',
    scopeOfWork: 'Qualification submission to finance and construct a new central utility plant within Henry Ford Health expanded Detroit South Campus.',
    challenge: 'The pursuit required a focused qualification submission for a health campus energy facility.',
    solution: 'WIN / RATIO supported the consortium qualification submission. Outcome: won.'
  },
  {
    id: 'dundas-bus-rapid-transit',
    name: 'Dundas Bus Rapid Transit',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2023,
    status: 'qualified',
    client: 'Consortium',
    location: 'Ontario, Canada',
    value: '$580M',
    scopeOfWork: 'Request for qualification submission for 48 km of frequent bus rapid transit infrastructure in Ontario.',
    challenge: 'The submission needed to position a consortium for a large corridor transit project.',
    solution: 'WIN / RATIO supported the request for qualification submission. Outcome: qualified.'
  },
  {
    id: 'copper-cliff-mine',
    name: 'Copper Cliff Mine',
    category: 'MINING',
    subCategory: 'MINING',
    year: 2023,
    status: 'successful',
    client: 'Canadian contractor',
    location: 'Canada',
    value: '$945M',
    scopeOfWork: 'Submission to perform a feasibility study and subsequent development of the Copper Cliff Mine for Vale Canada.',
    challenge: 'The contractor needed proposal support for a major mining feasibility and development pursuit.',
    solution: 'WIN / RATIO supported the Canadian contractor submission. Outcome: successful.'
  },
  {
    id: 'public-schools-package',
    name: 'Public Schools Package',
    category: 'BUILDINGS',
    subCategory: 'BUILDINGS',
    year: 2023,
    status: 'not-listed',
    client: 'Proponent team',
    location: "Prince George's County, Maryland",
    value: 'Not publicly listed',
    scopeOfWork: 'RFQ and RFP phases for a package of public schools.',
    challenge: 'The bid covered design, build, finance, and maintenance responsibilities across a school package.',
    solution: 'WIN / RATIO six-person team supported both phases with section management, substantive editing, graphic design, proofreading, and production.'
  },
  {
    id: 'highway-maintenance-bc',
    name: 'Highway Maintenance, BC',
    category: 'HIGHWAYS',
    subCategory: 'HIGHWAYS',
    year: 2022,
    status: 'won',
    client: 'Highway maintenance contractor',
    location: 'British Columbia, Canada',
    value: 'Hundreds of millions of dollars',
    scopeOfWork: 'Ongoing support to secure existing highway maintenance contracts and expand in British Columbia.',
    challenge: 'The contractor needed direct support with executive leadership and subject matter experts.',
    solution: 'WIN / RATIO wrote and edited content, created graphics, and developed point-maximizing strategies. Outcome: two historic contracts retained and two new contracts secured.'
  },
  {
    id: 'ontario-line-south-tunnel-and-stations',
    name: 'Ontario Line - South Tunnel and Stations',
    category: 'TRANSIT',
    subCategory: 'TRANSIT / TUNNELS',
    year: 2022,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Toronto, Ontario',
    value: '$5.5B',
    scopeOfWork: 'Bid to design, build, and finance the advance south tunnel and stations for Toronto Ontario Line subway.',
    challenge: 'The mega-bid required coordinated proposal delivery across tunnel and station scope.',
    solution: 'WIN / RATIO seven-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production.'
  },
  {
    id: 'eglinton-crosstown-west-tunnel',
    name: 'Eglinton Crosstown West Tunnel',
    category: 'TRANSIT',
    subCategory: 'TRANSIT / TUNNELS',
    year: 2022,
    status: 'won',
    client: 'Proponent team',
    location: 'Toronto, Ontario',
    value: '$255M',
    scopeOfWork: 'Bid to design, build, and finance the advance tunnel for the extension of the Eglinton-Crosstown light rail line.',
    challenge: 'The pursuit required end-to-end proposal support for an advance tunnel scope.',
    solution: 'WIN / RATIO seven-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production. Outcome: won.'
  },
  {
    id: 'inglewood-transit-connector',
    name: 'Inglewood Transit Connector',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2022,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Greater Los Angeles',
    value: 'Not publicly listed',
    scopeOfWork: 'Bid to design and build a metro line in Greater Los Angeles.',
    challenge: 'The pursuit needed coordinated end-to-end proposal support for a transit line.',
    solution: 'WIN / RATIO six-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production.'
  },
  {
    id: 'go-rail-on-corridor-works',
    name: 'GO Rail - On Corridor Works',
    category: 'RAIL',
    subCategory: 'RAIL',
    year: 2021,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Ontario, Canada',
    value: 'Not publicly listed',
    scopeOfWork: 'Mega-bid to upgrade GO Rail track, civil infrastructure, signalling, electrification, electric vehicles, operations, and maintenance.',
    challenge: 'The pursuit combined infrastructure upgrades, vehicles, operations, and maintenance in one major submission.',
    solution: 'WIN / RATIO nine-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production.'
  },
  {
    id: 'scarborough-subway-tunnel',
    name: 'Scarborough Subway Tunnel',
    category: 'TRANSIT',
    subCategory: 'TRANSIT / TUNNELS',
    year: 2021,
    status: 'won',
    client: 'Proponent team',
    location: 'Toronto, Ontario',
    value: '$750M',
    scopeOfWork: 'Qualification and proposal stages for an advance tunnel for a subway extension in Toronto.',
    challenge: 'The pursuit required support through both RFQ and RFP phases.',
    solution: 'WIN / RATIO four- to six-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production. Outcome: won.'
  },
  {
    id: 'sepulveda-transit-corridor',
    name: 'Sepulveda Transit Corridor',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2020,
    status: 'won',
    client: 'International consortium',
    location: 'Los Angeles, California',
    value: 'Not publicly listed',
    scopeOfWork: 'Bid to enter into a pre-development agreement with LA Metro for a new transit line.',
    challenge: 'The team needed to demonstrate vehicle and systems compliance and develop a high-scoring pre-development agreement solution.',
    solution: 'WIN / RATIO worked intensively with technical, engineering, architecture, and project management teams. Outcome: won CDA phase.'
  },
  {
    id: 'flood-diversion-channel',
    name: 'Flood Diversion Channel',
    category: 'CLIMATE',
    subCategory: 'CLIMATE',
    year: 2019,
    status: 'won',
    client: 'Consortium',
    location: 'Fargo, North Dakota',
    value: '$3B',
    scopeOfWork: 'Bid to design, build, finance, operate, and maintain a 30-mile stormwater diversion channel.',
    challenge: 'The first USACE public-private partnership required multi-volume printed submission coordination during COVID travel restrictions.',
    solution: 'WIN / RATIO four-person team provided proposal management, section management, substantive editing, graphic design, proofreading, and production. Outcome: won.'
  },
  {
    id: 'hazel-mccallion-light-rail',
    name: 'Hazel McCallion Light Rail',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2019,
    status: 'won',
    client: 'Large consortium',
    location: 'Toronto, Ontario',
    value: '$4.6B',
    scopeOfWork: 'Bid to design, build, finance, operate, and maintain light rail in the Greater Toronto Area.',
    challenge: 'The consortium included five partners and two prime engineering consultants.',
    solution: 'WIN / RATIO staffed a four-person team for proposal management, section management, substantive editing, graphic design, proofreading, and production. Outcome: won.'
  },
  {
    id: 'energy-services-acquisition-program',
    name: 'Energy Services Acquisition Program',
    category: 'CLIMATE',
    subCategory: 'CLIMATE / ENERGY',
    year: 2018,
    status: 'not-listed',
    client: 'Proponent team',
    location: 'Ottawa, Canada',
    value: '$2.6B',
    scopeOfWork: 'Bid to modernize heating and cooling systems serving 80 federal government buildings in Ottawa.',
    challenge: 'The submission required end-to-end proposal management for a major federal energy modernization program.',
    solution: 'WIN / RATIO provided a five-person team for proposal management, section management, substantive editing, graphic design, proofreading, and production.'
  },
  {
    id: 'conrac-at-lax',
    name: 'CONRAC at LAX',
    category: 'BUILDINGS',
    subCategory: 'BUILDINGS',
    year: 2018,
    status: 'not-listed',
    client: 'Internal team',
    location: 'Los Angeles, California',
    value: 'Not publicly listed',
    scopeOfWork: 'Bid to design, build, finance, operate, and maintain the car rental facility at Los Angeles Airport.',
    challenge: 'The pursuit required proposal services for a major airport facility.',
    solution: 'WIN / RATIO collaborated with the internal team on proposal services, including section management and technical writing.'
  },
  {
    id: 'revenue-vehicle-options-analysis',
    name: 'Revenue Vehicle Options Analysis',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2017,
    status: 'not-listed',
    client: 'Multi-disciplinary team',
    location: 'Ontario, Canada',
    value: 'Not publicly listed',
    scopeOfWork: 'Analysis of the impact of purchasing a different light rail vehicle for the Eglinton Crosstown LRT project.',
    challenge: 'The team needed technical writing and editing support for a multi-disciplinary analysis.',
    solution: 'WIN / RATIO provided technical writing and editing support.'
  },
  {
    id: 'hamilton-light-rail',
    name: 'Hamilton Light Rail',
    category: 'TRANSIT',
    subCategory: 'TRANSIT',
    year: 2017,
    status: 'qualified',
    client: 'Consortium',
    location: 'Hamilton, Ontario',
    value: 'Not publicly listed',
    scopeOfWork: 'RFQ submission for a light rail design-build-finance-operate-maintain project that was subsequently cancelled.',
    challenge: 'Two WIN / RATIO team members had six weeks to work with a six-company consortium and design consultants.',
    solution: 'WIN / RATIO led the RFQ submission and produced a high-scoring document. Outcome: qualified.'
  }
];
