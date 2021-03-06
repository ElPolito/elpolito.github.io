import axopenDetails from './cursus-details/axopen.md';
import bacDetails from './cursus-details/bac.md';
import bulletfireDetails from './cursus-details/bulletfire.md';
import dutDetails from './cursus-details/dut.md';
import easylifeCDDDetails from './cursus-details/easylife.cdd.md';
import easylifeStageDetails from './cursus-details/easylife.stage.md';
import ewaDetails from './cursus-details/ewa.md';
import insaDetails from './cursus-details/insa.md';
import spacyDetails from './cursus-details/spacy.md';
import upProximityDetails from './cursus-details/up-proximity.md';
import yukkyLauncherDetails from './cursus-details/yukky.launcher.md';

export interface ICursus {
  date: {
    from: string;
    to?: string;
  };
  label: {
    fr: string;
    en: string;
  };
  type: 'diploma' | 'internship' | 'job' | 'personalproject' | 'schoolproject';
  details: string;
  keywords: string[];
  logo: string;
  link: string;
}

const cursus: ICursus[] = [
  {
    date: {
      from: '2017',
      to: '2017',
    },
    label: {
      fr: 'Baccalauréat Scientifique SVT Spécialité ISN (Informatique et science du numérique) Mention Très bien',
      en: 'TODO',
    },
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
    label: {
      fr: 'DUT Informatique - IUT Lyon 1 Université Claude Bernard',
      en: 'TODO',
    },
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
    label: {
      fr: "Formation d'ingénieur en informatique - INSA de Lyon",
      en: 'TODO',
    },
    type: 'diploma',
    details: insaDetails,
    keywords: [],
    logo: 'insa.jpg',
    link: 'https://insa-lyon.fr',
  },
  {
    date: {
      from: '04-2019',
      to: '06-2019',
    },
    label: {
      fr: "Stage de fin d'étude - Easylife - Réalisation d'un chatbot",
      en: 'TODO',
    },
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
    label: {
      fr: "CDD - Easylife - Participation au développement d'une application web de gestion de caisse",
      en: 'TODO',
    },
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
    label: {
      fr: "Stage - Axopen - Réalisation d'un site web pour un client",
      en: '',
    },
    type: 'internship',
    keywords: ['Wordpress', 'PHP', 'MySql', 'Elementor'],
    details: axopenDetails,
    logo: 'axopen.png',
    link: 'https://www.axopen.com/',
  },
  {
    date: {
      from: '04-2020',
    },
    label: {
      fr: "Consultant - Etic - Réalisation d'une application mobile et d'un site vitrine pour un client",
      en: '',
    },
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
    label: {
      fr: 'Réédition du jeu mobile Up Proximity disponible sur le PlayStore',
      en: '',
    },
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
    label: {
      fr: "Développement d'un jeu mobile de type space shooter",
      en: '',
    },
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
    label: {
      fr: "Projet tutoré réalisé avec l'IUT. Développement d'un jeu avec Unity Engine",
      en: '',
    },
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
    label: {
      fr: "Développement d'un système de launcher pour les développeurs de jeux vidéo",
      en: '',
    },
    type: 'personalproject',
    keywords: [],
    details: yukkyLauncherDetails,
    logo: 'yukky-logo.png',
    link: 'https://launcher.yukkyapp.com',
  },
];

export default cursus;
