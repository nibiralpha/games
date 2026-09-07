import { ChildMenu } from "@Constant/DataTypes";

export interface SearchMenu {
  id: number;
  name: string;
  value: string;
  expand: boolean;
  childMenus: ChildMenu[];
}
