import cookies from 'js-cookie';

export default function CookiesInCart({ product }) {
  let newCookies = [];
  const oldCookies = cookies.get('shoppingCart');
  oldCookies === undefined
    ? (newCookies = [product])
    : (newCookies = [...JSON.parse(oldCookies), product]);
  cookies.set('shoppingCart', newCookies);
}
