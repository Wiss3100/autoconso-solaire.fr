import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Le Guide Solaire</h1>
        <p className="mb-4">Bienvenue sur Le Guide Solaire, votre source d'information pour tout comprendre sur les kits solaires à installer soi-même et l'autoconsommation énergétique.</p>
      </div>
    </Layout>
  );
}