import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

const policyAreas = [
  {
    title: "Economic Reform",
    description: "Sustainable growth with fair taxation and support for small businesses",
    keyPoints: [
      "Progressive tax system that benefits working families",
      "Investment in infrastructure and green energy",
      "Support for local businesses and entrepreneurs"
    ]
  },
  {
    title: "Education",
    description: "Quality education accessible to all citizens",
    keyPoints: [
      "Increased funding for public schools",
      "Teacher training and support programs",
      "Affordable higher education options"
    ]
  },
  {
    title: "Healthcare",
    description: "Universal access to quality healthcare",
    keyPoints: [
      "Expanded public health insurance",
      "Reduced prescription drug costs",
      "Investment in rural healthcare facilities"
    ]
  },
  {
    title: "Governance Reform",
    description: "Transparent and accountable government",
    keyPoints: [
      "Campaign finance reform",
      "Anti-corruption measures",
      "Citizen participation initiatives"
    ]
  },
  {
    title: "Environmental Policy",
    description: "Sustainable development for future generations",
    keyPoints: [
      "Carbon neutrality by 2040",
      "Protection of natural resources",
      "Green job creation programs"
    ]
  },
  {
    title: "Foreign Policy",
    description: "Cooperative international relations",
    keyPoints: [
      "Diplomatic solutions to conflicts",
      "Fair trade agreements",
      "Human rights advocacy"
    ]
  }
];

export default function Manifesto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PRM Manifesto | People's Reform Movement</title>
        <meta name="description" content="Policy positions and manifesto of the People's Reform Movement" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Manifesto</h1>
            <p className="text-xl max-w-2xl">
              Comprehensive policy proposals to build a more just, prosperous, and sustainable society.
            </p>
          </div>
        </section>
        
        {/* Policy Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policyAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Download Full Manifesto</h2>
              <p className="text-lg mb-6 max-w-3xl">
                Our complete policy document contains detailed proposals, implementation plans, and cost analysis for all reform areas.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Download PDF (English)
                </button>
                <button className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
                  Download PDF (Spanish)
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}