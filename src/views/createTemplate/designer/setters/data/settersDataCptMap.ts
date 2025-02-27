import { ISetterMap } from '@/views/createTemplate/types/IHJNewSchema';

import title from './title.vue';
import name from './name.vue';
import age from './age.vue';
import address from './address.vue';
import avatar from './avatar.vue';
import workService from './workService.vue';
import phoneNumber from './phoneNumber.vue';
import email from './email.vue';
import abstract from './abstract.vue';
import degree from './degree.vue';
import jobSearchType from './jobSearchType.vue';

const settersDataCptMap: ISetterMap = {
  title,
  name,
  age,
  address,
  avatar,
  workService,
  phoneNumber,
  email,
  abstract,
  degree,
  jobSearchType
};
export default settersDataCptMap;
