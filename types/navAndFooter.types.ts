export interface FooterProps {
  socialLinks: ISocialLink[];
}

export interface ISocialLink {
  title: string;
  link:  string;
  image: string;
}

export interface ILogo {
  id:        string;
  logoTitle: string;
  logoImage: ILogoImage;
}

interface ILogoImage {
  __typename: string;
  url:        string;
}