import { ILangData } from '../data/util';
import data from '../data';

export type Langs = 'en' | 'fr';

export interface LangData {
  lang: Langs;
  icon: string;
  data: ILangData;
}

type ChangeLangSubscriber = (lang: LangData) => void;

const langData: LangData[] = [
  {
    lang: 'en',
    icon: 'uk-flag.jpg',
    data: data.en,
  },
  {
    lang: 'fr',
    icon: 'fr-flag.png',
    data: data.fr,
  },
];

export default class LangService {
  private static curLang: Langs = 'fr';
  private static subscribers: ChangeLangSubscriber[] = [];

  public static setLang = (lang: Langs) => {
    LangService.curLang = lang;
    const langData = LangService.getCurLangData();
    LangService.subscribers.forEach((subscriber) => subscriber(langData));
  };

  public static getLang = () => LangService.curLang;

  public static getCurLangData = () => langData.find((l) => l.lang === LangService.curLang) || langData[0];

  public static getLangsData = () => langData;

  public static subscribeToLangChange = (subscriber: ChangeLangSubscriber) => {
    LangService.subscribers.push(subscriber);
  };

  public static unsubscribeToLangChange = (subscriber: ChangeLangSubscriber) => {
    LangService.subscribers = LangService.subscribers.filter((sub) => sub !== subscriber);
  };
}
