export interface IPortfolioCategory {
  __typename: string;
  id:         string;
  title:      string;
  pieces:     IPortfolioPiece[];
}

export interface IPortfolioPiece {
  __typename: string;
  id:         string;
  title:      string;
  techStack:  ITechStack[];
  body:       string;
  links:      ILink[];
  viewLink:   string;
  thumbnail:  IImage;
  images: IImage[];
}

interface ILink {
  text: string;
  url: string;
}

export interface ITechStack {
  title: string
  logo: IImage;
}

export interface IImage {
  __typename?: string
  url: string
}
