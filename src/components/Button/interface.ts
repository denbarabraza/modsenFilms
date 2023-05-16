export interface IButton {
  label?: string;
  title: string;
  type: 'search' | 'categories' | 'other';
  callBack?: () => void;
}
