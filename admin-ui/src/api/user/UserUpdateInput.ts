export type UserUpdateInput = {
  email?: string;
  firstName?: string;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
