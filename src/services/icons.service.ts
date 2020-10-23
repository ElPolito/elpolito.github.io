export default (name: string) => {
  switch (name) {
    case 'diploma':
      return '/assets/medias/diploma.svg';
    case 'job':
      return '/assets/medias/job.svg';
    case 'internship':
      return '/assets/medias/internship.svg';
    default:
      return '';
  }
};
