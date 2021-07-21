import { ILangData } from '../util';
import cursus from './cursus';
import globalTranslations from './global.json';
import interests from './interests.md';
import profile from './profile.md';

const data: ILangData = {
  interests,
  profile,
  cursus,
  global: globalTranslations,
};

export default data;
