import React from 'react';
import Link from 'next/link';

export default function Header() {
  const linkList = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Store', url: '/products/productsPage' },
    { name: 'Profile', url: '/users' },
  ];

  return (
    <div className='header'>
      <div className='logo'>
        <a href='/'>
          <img className='image' src='/logo2.png' alt='Tsinelas' />
        </a>
      </div>
      <div className='navLink'>
        {linkList.map(link => {
          return (
            <Link key={link.url} href={link.url}>
              <a className='aLinks'>{link.name}</a>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-around;
            position: fixed;
            background: white;
            top: 0;
            width: 100%;
            align-items: center;
            z-index: 100;
          }

          .navLink {
            display: flex;
            justify-content: space-around;
            align-items: stretch;
          }

          .logo {
            display: flex;
            justify-content: space-around;
            align-items: stretch;
          }

          .image {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 2em;
            width: 2em;
            border-radius: 10px;
          }

          .aLinks {
            padding: 1em;
            border: solid 1px black;

            text-align: center;
          }

          .headLink {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 75%;
          }

          .listStyle {
            list-style-type: none;
          }
          .spanStyle {
             {
              /* transform: skew(20deg); */
            }
          }
        `}
      </style>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { getProductById } = await import('../db');
//   const product = getProductById(context.params.id);
//   if (product === undefined) {
//     return { props: {} };
//   }
//   return {
//     // will be passed to the page component as props
//     props: {
//       product,
//     },
//   };
// }
