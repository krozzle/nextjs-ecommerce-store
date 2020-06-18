import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// require('dotenv').config();

// const { getProducts, getProductById } = require('../../db');

// app.get('/', async (req, res) => {
//   const products = await getProducts();

//   res.send(`
//   <h1>Products</h1>
//   <ul>
// ${users.map(product => {
//   return `<li>
//   <a href="/products/${product.id}">${product.name}</a>
//   </li>`;
// })}
//   </ul>
//   `);
// });

// app.get('/products/:productId', async function productsHandler(req, res) {
//   const productId = req.params.productId;

//   const product = await getUserById(productId);

//   if (product.count === 0) {
//     res.status(404).send('we are out of stuff! soz');
//   }
//   res.send(`
//   <h1>${product[0].name}</h1>
//   <pre>${JSON.stringify(product[0])}</pre>
//   `);
// });

// app.listen(port, () =>
//   console.log(`example app listening at http://localhost:${port}`),
// );

type Items = {
  id: string;
  name: string;
  img: string;
  price: number;
  description: string;
};

type Props = { products: Items };

const ProductsPage = (props: Props) => {
  // const items = products;
  // console.log(items);
  return (
    <div>
      <Head>
        <title>store TSH</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <div>
          <p>
            <code>welcome to</code>
          </p>
          <h1>The Smelly Husband's</h1>
          <p>
            <code>online store</code>
          </p>
        </div>

        {/* <div className='grid'>
        <ul>

        </ul>
        </div> */}

        {/* <div className='grid'>
          <ul>
            {(
              product = ({ props }) => {
                return (
                  <li key={props.product.id}>
                    <Link
                      href={'/products/' + props.product.id}
                      as={'/products/' + props.product.id}
                    >
                      <a className='card'>
                        <img src={props.product.img} alt='a product' />
                        <h2>{product.name}</h2>
                        <p>{product.price} €</p>
                      </a>
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </div> */}
      </main>

      <Footer />

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export default ProductsPage;

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../db.js');
  const products = await getProducts(context.params);
  console.log(products);
  console.log('context', context);
  if (products === undefined) {
    return { props: {} };
    // console.log(products);
  }

  return {
    props: {
      products: products[0],
    },
    // console.log('products', props)
  };
}
