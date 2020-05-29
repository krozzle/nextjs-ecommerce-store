import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className='container'>
      <Head>
        <title>about TSH</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <p className='description'>
          <code>what's the deal with </code>
        </p>
        <h1 className='title'>The Smelly Husband?</h1>
        <p className='description'>
          <code>100% real talk</code>
        </p>

        <div className='grid'>
          <div className='card'>
            <h2>A wise man once said:</h2>
            <h1>'happy wife, happy life'</h1>
            <br />
            <p>
              Our team at TSH believes it to be true because it's the life we
              live a.k.a. the best life.
            </p>
            <br />
            <p className='strikethrough'>Ask our wives.</p>
            <p>Our word should be sufficient!</p>
          </div>
          <div className='card'>
            <p>
              Becoming a better husband is easy. All it seems to take is
              improving by 1% every day. If you can't think of any areas to
              improve in, ask your wife for advice.
            </p>
            <p>
              You should always be able to kick your yesterd*y's self's ass.
            </p>
            <p>
              <code>
                If you find yourself not having a wife, you should visit our
                store ASAP!!
              </code>
            </p>
          </div>
          <a href='/store' className='card'>
            <div>
              <p>
                We wanna help! ..and sell our stuff, obviously. They're all made
                by 100% sustainable means.
                <p>Visit our store and see how we can be of service.</p>
              </p>
            </div>
          </a>
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
        .strikethrough {
          text-decoration: line-through;
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
          flex-wrap: wrap;

          max-width: 100%;
          min-width: 60%;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          background: ##e5e3db;
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
