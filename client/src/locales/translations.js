import en from './en.json';
import rs from './rs.json';
import flattenMessages from './flattenMessages';

export default {
  en: flattenMessages(en),
  sr: flattenMessages(rs),
};
