export default (name: string) => {
  switch (name) {
    case 'diploma':
      return '/assets/medias/diploma.svg';
    case 'job':
      return '/assets/medias/job.svg';
    case 'internship':
      return '/assets/medias/internship.svg';
    case 'personalproject':
      return '/assets/medias/start-up.svg';
    case 'schoolproject':
      return '/assets/medias/project-management.svg';
    default:
      return '';
  }
};
