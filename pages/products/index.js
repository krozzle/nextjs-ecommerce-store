import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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

const Products = ({ products }) => {
  const items = products;
  console.log(items);
  return (
    <div className='container'>
      <Head>
        <title>store TSH</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <p className='description'>
          <code>welcome to</code>
        </p>
        <h1 className='title'>The Smelly Husband's</h1>
        <p className='description'>
          <code>online store</code>
        </p>

        <div className='grid'>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <Link
                    href={'/products/' + product.id}
                    as={'/products/' + product.id}
                  >
                    <a className='card'>
                      <img src={product.img} alt="'product" />
                      <h2>{product.name}</h2>
                      <p>{product.price} €</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .codeStyle {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          height: 15em;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .image {
          width: 30%;
          height: 100%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
export default Products;

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../db.js');

  const products = await getProducts(context.params);
  console.log(products);

  return {
    props: {
      products,
    },
  };
}
