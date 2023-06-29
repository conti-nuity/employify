export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface Employee {
  name: string;
  uid: string;
  user_name: string;
}

export interface Button {
  navigation: any;
  view: string;
  children: string;
  variant: string;
}
