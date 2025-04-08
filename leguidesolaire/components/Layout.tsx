import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Le Guide Solaire</title>
        <meta name="description" content="Blog dédié aux kits solaires à installer soi-même, à l'autoconsommation et à l'énergie solaire pour tous." />
      </Head>
      <header className="bg-yellow-100 p-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Le Guide Solaire</h1>
          <nav>
            <a href="/" className="mr-4">Accueil</a>
            <a href="/blog" className="mr-4">Blog</a>
            <a href="/a-propos" className="mr-4">À propos</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-100 text-center p-4 mt-8">
        © 2025 Le Guide Solaire
      </footer>
    </>
  );
}