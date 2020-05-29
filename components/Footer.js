import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='paragraph'>Powered by</p>
      <a
        href='https://github.com/krozzle'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='image' src='/logo2.png' alt='Tsinelas' />
      </a>
      <br />
      <div className='footLink'>
        <ul className='footLink'>
          <li className='listStyle'>
            <a href='/'>Order Status</a>
          </li>
          <li className='listStyle'>
            <a href='/'>Shipping and Delivery</a>
          </li>
          <li className='listStyle'>
            <a href='/'>Returns</a>
          </li>
          <li className='listStyle'>
            <a href='/'>Contact Us</a>
          </li>
          <li className='listStyle'>
            <a href='/'>Payment Options</a>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: 100%;
            border-top: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            bottom: 0;
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
          }

          .paragraph {
            margin-right: 0.45em;
          }

          .footLink {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 75%;
          }

          .listStyle {
            list-style-type: none;
          }
        `}
      </style>
    </div>
  );
}
