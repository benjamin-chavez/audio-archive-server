import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Post = {
  id: Generated<number>;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  title: string;
  content: string | null;
  published: Generated<boolean>;
  authorId: number;
};
export type Product = {
  id: Generated<number>;
  price: string | null;
  userId: number;
};
export type Profile = {
  id: Generated<number>;
  biography: string | null;
  userId: number;
};
export type User = {
  id: Generated<number>;
  email: string;
  name: string | null;
};
export type DB = {
  Post: Post;
  Product: Product;
  Profile: Profile;
  User: User;
};
