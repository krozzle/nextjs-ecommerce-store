require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

// const products = [
//   {
//     id: '1',
//     name: 'Razor',
//     img: '/razor1.jpg',
//     price: 11,
//     description:
//       'Show off your freshly shaved handsome face! Our razors are made by completely sustainable means and are 100% vegan.',
//   },
// ];

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products
  `;
  return products;
}

export async function updateProductNameById(id, name) {
  const product = await sql`
    UPDATE products
      SET name = ${name}
      SET price = ${price}
      SET description = ${description}
      WHERE id = ${id}
  `;
  return product;
}

export async function deleteProductById(id) {
  const product = await sql`
    DELETE FROM products WHERE id = ${id}
  `;
  return product;
}

export async function getProductById(id) {
  const product = await sql`
  SELECT * FROM products WHERE id = ${id}
  `;
  return product[0];
}
