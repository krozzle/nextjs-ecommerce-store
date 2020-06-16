import Cookies from 'js-cookie';

export default function CookiesInCart({ product }) {
  let newCookies = [];
  const oldCookies = Cookies.get('shoppingCart');
  oldCookies === undefined
    ? (newCookies = [product])
    : (newCookies = [...JSON.parse(oldCookies), product]);
  Cookies.set('shoppingCart', newCookies);
}
