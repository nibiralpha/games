export interface ChildMenu {
  id: number;
  name: string;
}
export  interface SearchMenu {
  id: number;
  name: string;
  value: string;
  expand: boolean;
  childmenus: ChildMenu[];
}
