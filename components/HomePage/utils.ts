const perPageOptions = [
  { label: '9 per page', value: '9' },
  { label: '18 per page', value: '18' },
  { label: '27 per page', value: '27' },
];

const sortOptions = [
  { label: 'Dont sort', value: '' },
  { label: 'By # of followers', value: 'followers' },
  { label: 'By # of repositories', value: 'repositories' },
  { label: 'By date joined', value: 'joined' },
];

const orderOptions = [
  { label: 'Any order', value: '' },
  { label: 'Asc', value: 'asc' },
  { label: 'Desc', value: 'desc' },
];

export { perPageOptions, sortOptions, orderOptions };
