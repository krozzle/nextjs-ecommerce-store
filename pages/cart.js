import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from './products/products';

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function handleUnits(e) {
    e.target.value * props.cart.price;
  }

  function removeItem(id) {
    cookie.remove(
      props.cart.id.find((item) => {
        return item.id !== item.id;
      }),
    );
    window.location.reload();

  return (
    <div className='container'>
      <Head>
        <title>The Smelly Husband</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <h1 className='title'>Shopping cart</h1>

        <div className='grid'>
          <a href='/store' className='card'>
            <h3>Visit Our Store &rarr;</h3>
            <p>
              Find products to improve your husband, your home and your life.
            </p>
          </a>
          <img className='image' src='/coffee-in-bed.jpg' alt='Coffee in bed' />
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
          margin-top: 1em;
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

        .image {
          width: 30%;
          height: 100%;
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
          justify-content: center;

          max-width: 100%;
          min-width: 60%;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 70%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
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
