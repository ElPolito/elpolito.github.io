import cursus from './cursus';
import globalTranslations from './lang/fr/global.json';
import interests from './lang/fr/interests.md';
import profile from './lang/fr/profile.md';

export const getCursus = () => {
  return cursus;
};

export const getProfile = () => {
  return profile;
};

export const getInterests = () => {
  return interests;
};

export const getGlobalTranslations = () => {
  return globalTranslations;
};
