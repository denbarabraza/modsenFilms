export interface IButton {
  title: string;
  type: 'search' | 'categories' | 'other';
  callBack?: () => void;
}
