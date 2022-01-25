export type User = {
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
