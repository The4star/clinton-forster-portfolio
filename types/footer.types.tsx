import { Interface } from "readline";

export interface FooterProps {
  socialLinks: ISocialLinks[];
}

export interface ISocialLinks {
  title: string;
  link:  string;
  image: string;
}