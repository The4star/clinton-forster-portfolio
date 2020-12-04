export interface IHero {
  title: string;
  subtitle: string;
  media: IHeroMedia;
  mobileMedia?: IHeroMedia;
}

interface IHeroMedia { 
  type: string;
  url: string;
}