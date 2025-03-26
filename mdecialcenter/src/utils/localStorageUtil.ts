import { Session } from "../models/Session";
import { MenuRoute } from "../components/menu/menu";

const TOKEN = 'token';
const MENUS = 'menus';

const localStorageUtil = {

    getTokenUncode(): string | null {
        const token = localStorage.getItem(TOKEN);
        if (token) {
            return token
        }
        return null;
    },

    getToken(): Session | null {
        const token = localStorage.getItem(TOKEN);
        if (token) {
            const sessionData = JSON.parse(atob(token.split('.')[1]));
            return sessionData;
        }
        return null;
    },

    setToken(token: string) {
        localStorage.setItem(TOKEN, token);
    },

    removeToken() {
        localStorage.removeItem(TOKEN);
    },

    removeMenu() {
        localStorage.removeItem(MENUS);
    },

    getMenus(): MenuRoute[] {
        const menus = localStorage.getItem('menus');
        if (menus) {
            const sessionData = JSON.parse(menus);
            return sessionData;
        }
        return [];
    },

    setMenus(menus: MenuRoute[]) {
        localStorage.setItem(MENUS, JSON.stringify(menus));
    }
};

export { localStorageUtil };