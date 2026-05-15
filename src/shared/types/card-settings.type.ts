export interface CardSettings {
  showCover: boolean;
  showTitle: boolean;
  showAuthor: boolean;
  showRating: boolean;
  showProgress: boolean;
}

export const DEFAULT_CARD_SETTINGS: CardSettings = {
  showCover: true,
  showTitle: true,
  showAuthor: true,
  showRating: true,
  showProgress: true,
};
