import sortCursus, { ICursus } from '../../util';

import axopenDetails from './cursus-details/axopen.md';
import bacDetails from './cursus-details/bac.md';
import bulletfireDetails from './cursus-details/bulletfire.md';
import dutDetails from './cursus-details/dut.md';
import easylifeCDDDetails from './cursus-details/easylife.cdd.md';
import easylifeStageDetails from './cursus-details/easylife.stage.md';
import eniokaDetails from './cursus-details/enioka.md';
import etsDetails from './cursus-details/ets.md';
import ewaDetails from './cursus-details/ewa.md';
import insaDetails from './cursus-details/insa.md';
import spacyDetails from './cursus-details/spacy.md';
import upProximityDetails from './cursus-details/up-proximity.md';
import yukkyLauncherDetails from './cursus-details/yukky.launcher.md';

const cursus: ICursus[] = [
  {
    date: {
      from: '2017',
      to: '2017',
    },
    label: 'High School diploma, scientific option, equivalent to A Levels (with highest honour)',
    type: 'diploma',
    details: bacDetails,
    keywords: [],
    logo: 'lycee.png',
    link: 'https://saint-exupery-lyon.ent.auvergnerhonealpes.fr/',
  },
  {
    date: {
      from: '09-2017',
      to: '07-2019',
    },
    label: 'Two-year university degree in Computer Science - IUT Lyon 1, Claude Bernard University',
    type: 'diploma',
    details: dutDetails,
    keywords: [],
    logo: 'iut.png',
    link: 'https://iut.univ-lyon1.fr/',
  },
  {
    date: {
      from: '09-2019',
    },
    label: 'Master in Computer Science Engineering - INSA Lyon University',
    type: 'diploma',
    details: insaDetails,
    keywords: [],
    logo: 'insa.jpg',
    link: 'https://insa-lyon.fr',
  },
  {
    date: {
      from: '08-2021',
    },
    label: 'Master in Software Engineering - Ets Montréal University',
    type: 'diploma',
    details: etsDetails,
    keywords: [],
    logo: 'ets.png',
    link: 'https://www.etsmtl.ca/',
  },
  {
    date: {
      from: '04-2019',
      to: '06-2019',
    },
    label: 'Internship - Easylife - Chatbot implementation',
    type: 'internship',
    keywords: ['Typescript', 'Javascript', 'React', 'Dialogflow', 'SAP Recast', 'NLU'],
    details: easylifeStageDetails,
    logo: 'easylife.png',
    link: 'https://www.easy-life.fr/',
  },
  {
    date: {
      from: '07-2019',
      to: '07-2019',
    },
    label: 'Work experience - Easylife - Development of a cash management application',
    type: 'job',
    keywords: ['Typescript', 'Javascript', 'React', 'Redux', 'MSSql'],
    details: easylifeCDDDetails,
    logo: 'easylife.png',
    link: 'https://www.easy-life.fr/',
  },
  {
    date: {
      from: '07-2020',
      to: '08-2020',
    },
    label: 'Internship - Axopen - Creation of a website for a client',
    type: 'internship',
    keywords: ['Wordpress', 'PHP', 'MySql', 'Elementor'],
    details: axopenDetails,
    logo: 'axopen.png',
    link: 'https://www.axopen.com/',
  },
  {
    date: {
      from: '05-2021',
      to: '08-2021',
    },
    label: "Internship - enioka - DevOps consultant in a client's company",
    type: 'internship',
    keywords: ['DevOps', 'ITIL', 'Azure DevOps', 'Ansible', 'AWX', 'Powershell'],
    details: eniokaDetails,
    logo: 'enioka.svg',
    link: 'https://enioka.com',
  },
  {
    date: {
      from: '04-2020',
    },
    label: 'Consultant - Etic - Creation of a mobile application and a showcase site for a client',
    type: 'job',
    keywords: ['Flutter', 'Laravel', 'Dart', 'PHP', 'Redis', 'Laravel Echo', 'MySql', 'Docker', 'Google Cloud'],
    details: ewaDetails,
    logo: 'etic.png',
    link: 'https://www.etic-insa.com/',
  },
  {
    date: {
      from: '2019',
      to: '2019',
    },
    label: 'Personal project - Reissue of the mobile game Up Proximity available on the PlayStore',
    type: 'personalproject',
    keywords: ['Unity Engine', 'Game development', 'C#', 'Android', 'PlayStore'],
    details: upProximityDetails,
    logo: 'asteroid.svg',
    link: 'https://smallprodgame.com',
  },
  {
    date: {
      from: '10-2017',
      to: '2-2018',
    },
    label: 'Personal project - Development of a space shooter mobile game',
    type: 'personalproject',
    keywords: ['Unity Engine', 'Game development', 'C#', 'Android', 'PlayStore', 'Multiplayer'],
    details: spacyDetails,
    logo: 'spacy.png',
    link: 'https://smallprodgame.com',
  },
  {
    date: {
      from: '03-2018',
      to: '03-2019',
    },
    label: 'School project at IUT - Development of a game with Unity Engine',
    type: 'schoolproject',
    keywords: [],
    details: bulletfireDetails,
    logo: 'logoBF.png',
    link: '',
  },
  {
    date: {
      from: '08-2019',
    },
    label: 'Personal project - Development of a launcher for game developers',
    type: 'personalproject',
    keywords: [],
    details: yukkyLauncherDetails,
    logo: 'yukky-logo.png',
    link: 'https://launcher.yukkyapp.com',
  },
];

export default sortCursus(cursus);
