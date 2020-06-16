import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { NextPageContext } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cookiesInCart from '../../cookiesInCart';

type Item = {
  id: string;
  name: string;
  img: string;
  price: number;
  description: string;
};

const Product = (product: Item) => {
  const [total, setTotal] = useState<number>();
  const [units, setUnits] = useState(1);
  if (!product) return <div>product not found!</div>;
  console.log(product[0]);

  function handleUnits(e) {
    setUnits(Number(e.target.value));
    setTotal(e.target.value * product.price);
  }
  // function addToCart() {
  //   product = {
  //     id: product.id,
  //     name: product.name,
  //     image: product.image,
  //     price: product.price,
  //     description: product.description,
  //     amount: units,
  //   };

  const cartItems = Cookie.get('cart') || [];

  cartItems.push(product[0]);
  Cookie.set('cart', cartItems);

  let itemFilter = cartItems.find(item => item.id === product[0].id);

  // if (itemFilter) {
  //   let duplicatItems = cartItems.map(item => {
  //     item.id === product.id
  //       ? {
  //           ...item,
  //           amount: item.amount + units,
  //           price: (item.amount + units) * item.price,
  //         }
  //       : item;
  //   });
  //   cookie.set('cart', duplicatItems);
  // } else {
  //   cartItems.push(product);
  //   cookie.set('cart', cartItems);
  // }

  window.location.reload();

  return (
    <div className='container'>
      <Head>
        <title>{product[0].name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <div>
        <h2>The Smelly Husband's</h2>

        <h1 className='title'>{product[0].name || ''}</h1>
        <p className='description'>{product[0].description}</p>

        <div>
          <div>
            <img className='image' src={product[0].img} alt='razor' />
          </div>
          <div>
            <p className='price'>{product[0].price}€</p>

            <label>
              <input
                type='number'
                min='1'
                placeholder='0'
                onChange={handleUnits}
              ></input>
            </label>
            <p>Total: {total}€</p>
            <button data-cy='addToCartButton' onClick={cookiesInCart(product)}>
              add to cart
            </button>
          </div>
        </div>
      </div>
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

        code {
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
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
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
export default Product;

export async function getServerSideProps(context: NextPageContext) {
  const id = context.query.id;
  const { getProductById } = await import('../../db.js');
  const product = await getProductById();
  if (product === undefined) {
    return { props: {} };
  }
  return {
    // will be passed to the page component as props
    props: {
      product[0],
    },
  };
}
