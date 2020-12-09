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
  links:      string[];
  viewLink:   string;
  thumbnail:  IImage;
}

export interface ITechStack {
  title: string
  logo: IImage;
}

interface IImage {
  url: string
}
