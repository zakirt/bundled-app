/**
 * Cookies test
 */
import { Cookies } from 'Cookies';

describe('Cookies', () => {
    let cookies: Cookies;

    beforeEach(() => {
        cookies = new Cookies();
    });

    it('should be defined', () => {
        expect(cookies).toBeDefined();
    });

    it('should have getCookie method', () => {
        expect(typeof cookies.getCookie).toBe('function');
    });

    describe('getCookie', () => {
        it('should return empty string', () => {
            expect(cookies.getCookie('cookieName')).toBe('');
        });
    });
});
