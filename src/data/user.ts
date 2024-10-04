import { atom } from 'jotai';

export interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const userAtom = atom<UserType[]>([]);

export const userNameAtom = atom('');
