//@ts-ignore
import { NEXT_PUBLIC_URL_POSTS } from "@env";
import { type Post } from "../types";

export const getPosts = (): Promise<Array<Post>> => {
  return new Promise<Array<Post>>((resolve, reject) => {
    fetch(NEXT_PUBLIC_URL_POSTS)
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => reject(error));
  });
};
