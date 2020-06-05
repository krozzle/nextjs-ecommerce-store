import { useState } from 'react';
import cookie from 'js-cookie';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProductById } from '../../db';

export default function Product({ product }) {
  if (!product) return <div>not found!</div>;

  const [units, setUnits] = useState(0);
  const [total, setTotal] = useState(product.price);

  function handleUnits(e) {
    setUnits(Number(e.target.value));
    setTotal(e.target.value * product.price);
  }
  function addToCart() {
    let cartItems = cookie.JSON('cart') || [];

    const product = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      amount: units,
    };

    cartItems.push(product);
    cookie.set('cart', cartItems);

    let itemFilter = itemsStored.find(item => item.id === product.id);

    if (itemFilter) {
      cartItems = itemsStored.map((item, id) => {
        item.id === product.id
          ? { ...item, amount: product.amount + items }
          : product;
      });
      cookie.set('cart', cartItems);
    }

    window.location.reload();
  }

  return (
    <div className='container'>
      <Head>
        <title>{product.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <h2>The Smelly Husband's</h2>

        <h1 className='title'>{product.name}</h1>
        <p className='description'>{product.description}</p>

        <div className='grid'>
          <div>
            <img className='image' src={product.image} alt='razor' />
          </div>
          <div>
            <p className='price'>{product.price}€</p>

            <label for='productNumber'>
              <input
                type='number'
                min='1'
                placeholder='0'
                onChange={handleUnits}
              ></input>
            </label>
            <p>Total: {total}€</p>
          </div>
        </div>
        <div>
          <button onClick={addToCart}>add to cart</button>
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
}

export function getServerSideProps(context) {
  const product = getProductById(context.params.id);
  if (product === undefined) {
    return { props: {} };
  }
  return {
    // will be passed to the page component as props
    props: {
      product,
    },
  };
}