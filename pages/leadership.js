import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

const leadershipTeam = [
  {
    name: "Dr. Sarah Chen",
    title: "Party Chairperson",
    bio: "Political scientist and former university professor with 15 years of experience in governance reform advocacy.",
    image: "/images/leadership/sarah-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    title: "Deputy Chair",
    bio: "Community organizer and founder of several successful grassroots movements for economic justice.",
    image: "/images/leadership/michael-rodriguez.jpg"
  },
  {
    name: "Aisha Johnson",
    title: "Policy Director",
    bio: "Former legislative analyst specializing in healthcare and education policy reform.",
    image: "/images/leadership/aisha-johnson.jpg"
  },
  {
    name: "David Park",
    title: "Communications Director",
    bio: "Award-winning journalist and media strategist focused on political transparency.",
    image: "/images/leadership/david-park.jpg"
  },
  {
    name: "Rev. James Williams",
    title: "Outreach Coordinator",
    bio: "Faith leader and longtime advocate for criminal justice reform and community development.",
    image: "/images/leadership/james-williams.jpg"
  },
  {
    name: "Maria Gonzalez",
    title: "Youth Engagement Director",
    bio: "Youngest elected member of the national leadership, representing the next generation of reformers.",
    image: "/images/leadership/maria-gonzalez.jpg"
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Leadership | People's Reform Movement</title>
        <meta name="description" content="Meet the leadership team of PRM" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
            <p className="text-xl max-w-2xl">
              Meet the dedicated team guiding the People's Reform Movement.
            </p>
          </div>
        </section>
        
        {/* Leadership Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 relative overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-secondary font-medium mb-4">{leader.title}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Membership Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Become Part of Our Movement</h2>
              <p className="text-xl mb-8">
                PRM is powered by thousands of members across the country. Join us in building a better future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/join" className="btn-primary">
                  Join as Member
                </a>
                <a href="/volunteer" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}