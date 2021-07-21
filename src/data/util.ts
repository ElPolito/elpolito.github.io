export interface ICursus {
  date: {
    from: string;
    to?: string;
  };
  label: string;
  type: 'diploma' | 'internship' | 'job' | 'personalproject' | 'schoolproject';
  details: string;
  keywords: string[];
  logo: string;
  link: string;
}

export interface ILangData {
  interests: string;
  profile: string;
  global: any;
  cursus: ICursus[];
}

export default (cursus: ICursus[]) =>
  cursus.sort((a: ICursus, b: ICursus) => {
    const aFromSplitted = a.date.from.split('-');
    const aFromMonth = aFromSplitted.length > 1 ? parseInt(aFromSplitted[0], 10) : 0;
    const aFromYear = aFromSplitted.length > 1 ? parseInt(aFromSplitted[1], 10) : parseInt(a.date.from, 10);

    const bFromSplitted = b.date.from.split('-');
    const bFromMonth = bFromSplitted.length > 1 ? parseInt(bFromSplitted[0], 10) : 0;
    const bFromYear = bFromSplitted.length > 1 ? parseInt(bFromSplitted[1], 10) : parseInt(b.date.from, 10);

    if (aFromYear < bFromYear) return 1;
    if (aFromYear > bFromYear) return -1;
    if (aFromMonth < bFromMonth) return 1;
    if (aFromMonth > bFromMonth) return -1;

    if (!a.date.to || !b.date.to) {
      if (!a.date.to && b.date.to) return -1;
      if (a.date.to && !b.date.to) return 1;
      return 0;
    }

    const aToSplitted = a.date.to.split('-');
    const aToMonth = aToSplitted.length > 1 ? parseInt(aToSplitted[0], 10) : 0;
    const aToYear = aToSplitted.length > 1 ? parseInt(aToSplitted[1], 10) : parseInt(a.date.to, 10);

    const bToSplitted = b.date.to.split('-');
    const bToMonth = bToSplitted.length > 1 ? parseInt(bToSplitted[0], 10) : 0;
    const bToYear = bToSplitted.length > 1 ? parseInt(bToSplitted[1], 10) : parseInt(b.date.to, 10);

    if (aToYear < bToYear) return 1;
    if (aToYear > bToYear) return -1;
    if (aToMonth < bToMonth) return 1;
    if (aToMonth > bToMonth) return -1;

    return 0;
  });
