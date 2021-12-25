import moment from 'moment';

export const formatDate = (date) => {
  if (date !== 'present date') {
    date = moment(date).format('MMM, YYYY');
  }
  return date;
};
