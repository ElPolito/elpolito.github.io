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
    label: 'Baccalauréat Scientifique SVT Spécialité ISN (Informatique et science du numérique) Mention Très bien',
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
    label: 'DUT Informatique - IUT Lyon 1 Université Claude Bernard',
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
    label: "Formation d'ingénieur en informatique - INSA de Lyon",
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
    label: 'Maîtrise en Génie logiciel - Ets Montréal',
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
    label: "Stage de fin d'étude - Easylife - Réalisation d'un chatbot",
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
    label: "CDD - Easylife - Participation au développement d'une application web de gestion de caisse",
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
    label: "Stage - Axopen - Réalisation d'un site web pour un client",
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
    label: 'Stage - enioka - Consultant DevOps chez un client',
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
    label: "Consultant - Etic - Réalisation d'une application mobile et d'un site vitrine pour un client",
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
    label: 'Réédition du jeu mobile Up Proximity disponible sur le PlayStore',
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
    label: "Développement d'un jeu mobile de type space shooter",
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
    label: "Projet tutoré réalisé avec l'IUT. Développement d'un jeu avec Unity Engine",
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
    label: "Développement d'un système de launcher pour les développeurs de jeux vidéo",
    type: 'personalproject',
    keywords: [],
    details: yukkyLauncherDetails,
    logo: 'yukky-logo.png',
    link: 'https://launcher.yukkyapp.com',
  },
];

export default sortCursus(cursus);
