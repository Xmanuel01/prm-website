import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

const historyTimeline = [
  {
    year: "2018",
    title: "Grassroots Beginnings",
    description: "Initial meetings among reform advocates to address systemic political issues."
  },
  {
    year: "2019",
    title: "Movement Formalized",
    description: "Official founding of PRM with 50 charter members across 12 states."
  },
  {
    year: "2020",
    title: "First National Convention",
    description: "Adoption of party constitution and election of interim leadership."
  },
  {
    year: "2021",
    title: "Policy Framework Published",
    description: "Release of comprehensive reform agenda with input from experts and citizens."
  },
  {
    year: "2022",
    title: "First Electoral Participation",
    description: "PRM candidates run in local elections, winning 8 seats nationwide."
  },
  {
    year: "2023",
    title: "National Expansion",
    description: "Party establishes chapters in all 50 states with over 10,000 members."
  }
];

const coreValues = [
  {
    title: "Integrity",
    description: "We commit to transparency, accountability, and ethical conduct in all our actions."
  },
  {
    title: "Inclusivity",
    description: "We believe in equal representation and participation for all citizens."
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions to complex societal challenges."
  },
  {
    title: "Justice",
    description: "We advocate for fair and equitable systems that serve all people."
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About PRM | People's Reform Movement</title>
        <meta name="description" content="Learn about the history, mission, and values of PRM" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Movement</h1>
            <p className="text-xl max-w-2xl">
              Learn about our history, mission, and the values that guide our work.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-8">
                  To build a political movement that empowers citizens, reforms broken systems, and creates a government that truly serves the people through transparent, accountable, and participatory democracy.
                </p>
                
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg">
                  We envision a society where every citizen has equal opportunity to thrive, where institutions serve the common good, and where political power is decentralized to the people most affected by policy decisions.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gray-100 p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-bold mb-6 text-center">Core Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coreValues.map((value, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-bold mb-3 text-secondary">{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our History</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-secondary transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-0">
                {historyTimeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    {/* Year */}
                    <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold z-10 mx-auto md:mx-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-grow mt-4 md:mt-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Founding Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Founding Principles</h2>
            <div className="prose-lg">
              <p className="mb-4">
                The People's Reform Movement was established on three fundamental principles that continue to guide our work:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>People-Centered Governance:</strong> Political systems should serve citizens, not special interests or career politicians.
                </li>
                <li>
                  <strong>Systemic Reform:</strong> Piecemeal solutions are insufficient; we need comprehensive restructuring of political and economic systems.
                </li>
                <li>
                  <strong>Grassroots Empowerment:</strong> Lasting change comes from the bottom up, with local communities driving the reform agenda.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}