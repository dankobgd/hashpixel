import en from './en.json';
import rs from './rs.json';
import flattenMessages from './flattenMessages';

export default {
  'en-US': flattenMessages(en),
  'sr-RS': flattenMessages(rs),
};
