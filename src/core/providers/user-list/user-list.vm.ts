export interface UserListCountextModel {
  memberList: Member[];
}

export interface Member {
  id: number;
  login: string;
  avatarUrl: string;
}