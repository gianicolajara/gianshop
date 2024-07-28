import "next-auth";

declare module "next-auth" {
  interface User {
    password: string;
  }
}
