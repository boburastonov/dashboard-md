import get from 'lodash/get';

import { getMinFile } from '@/helpers/mappers';

import type * as Types from './types';

export const Profile = (item?): Types.IEntity.Profile => ({
  id: get(item, 'id') || '',
  fullName: get(item, 'fullName') || '',
  firstName: get(item, 'firstName') || '',
  lastName: get(item, 'lastName') || '',
  login: get(item, 'login') || '',
  photo: getMinFile(get(item, 'photo')),
  region: get(item, 'regions') || [],
  activated: get(item, 'activated') || '',
  permissions: get(item, 'permissions') || [],
});

export const Token = (item?): Types.IEntity.Token => ({
  accessToken: get(item, 'accessToken') || '',
});
