import { atom } from 'jotai';

export interface UserType {
  id: number;
  name: string;
  age: number;
  email: string;
}

export const userAtom = atom<UserType[]>([]);
