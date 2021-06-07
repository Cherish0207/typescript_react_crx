export interface User {
  _id: number;
  username: string;
}
export interface UserListResponse {
  code: number;
  data: Array<User>;
}

export interface UserAddResponse {
  code: number;
  data: User;
}
