import {
  LotusAuthor,
  LotusCreateDate,
  LotusDescription,
  LotusLink,
  LotusLogo,
  LotusProvider,
  LotusTitle
} from './Lotus';

export const Lotus = Object.assign(LotusProvider, {
  Title: LotusTitle,
  Description: LotusDescription,
  Author: LotusAuthor,
  Logo: LotusLogo,
  CreateDate: LotusCreateDate,
  Link: LotusLink
});
