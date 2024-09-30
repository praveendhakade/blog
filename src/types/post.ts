export interface IPost extends IPostFile {
  slug: string;
  content: string;
}

export interface IPostFile {
  isFeatured: boolean;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface ISaveMessage {
  email: string;
  name: string;
  message: string;
}
export interface IMessage extends ISaveMessage {
  _id: string;
}

export interface INotification {
  title: string;
  message: string;
  status: "success" | "pending" | "error" | "";
}
