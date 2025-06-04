export interface User {
  id: string;
  name: string;
  permissions: 'admin' | 'user';
}