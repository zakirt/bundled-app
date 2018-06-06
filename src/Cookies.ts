/**
 * Utility for retrieving and setting browser cookies
 */

export class Cookies {

    /**
     * Sets browser cookie
     */
    public setCookie(name: string, value: string, hours?: number): Cookies {
        let expires: string = '';
        if (hours) {
            const date: Date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value}${expires}; path=/`;

        return this;
    }
}
