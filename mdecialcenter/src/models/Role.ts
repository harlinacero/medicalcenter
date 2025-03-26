import { MenuRoute } from "../components/menu/menu";


export interface Role {
    id: number;
    name: string;
    menus: MenuRoute[];
}
