export interface IHero {
  title: string;
  subtitle: string;
  media: IHeroMedia;
}

interface IHeroMedia { 
  type: string;
  url: string;
}