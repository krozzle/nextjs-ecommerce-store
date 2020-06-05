require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

module.exports.getProducts = async function getProducts() {
  const products = await sql`
  select * from products
  `;
};

// const products = [
//   {
//     id: '1',
//     name: 'Razor',
//     image: '/razor1.jpg',
//     price: 11,
//     description:
//       'Show off your freshly shaved handsome face! Our razors are made by completely sustainable means and are 100% vegan.',
//   },
// ];

module.exports.getProductById = async function getProducts(id) {
  const product = await sql`
  select * from products where id = {id}
  `;
  return product;
  // return products.find(product => product.id === id);
};

// export function getProducts() {
//   return products;
// }
