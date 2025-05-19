import Head from 'next/head';
import Link from 'next/link'; // <-- Add this import
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import {Card} from '../src/components/Card';
import {Hero} from '../src/components/Hero';
import { quickLinks, latestNews } from '../src/utils/constants';


export default function Home() {
  const quickLinks = [
    { title: 'Our Manifesto', description: 'Discover our comprehensive policy proposals', link: '/manifesto', icon: '📜' },
    { title: 'Meet Our Leaders', description: 'Get to know the team driving change', link: '/leadership', icon: '👥' },
    { title: 'Upcoming Events', description: 'Join us at rallies and town halls', link: '/events', icon: '🗓️' },
    { title: 'Support PRM', description: 'Contribute to our campaign', link: '/donate', icon: '❤️' },
  ];

  const latestNews = [
    { title: 'PRM Announces Economic Reform Plan', date: 'May 15, 2023', excerpt: 'New policy focuses on middle-class tax relief and small business support...', link: '/news/economic-reform' },
    { title: 'Town Hall Meeting in Springfield', date: 'May 10, 2023', excerpt: 'Join us this Saturday to discuss education reform in your community...', link: '/news/town-hall-springfield' },
    { title: 'Party Leader Addresses Climate Concerns', date: 'May 5, 2023', excerpt: 'Detailed plan for sustainable development and green energy investment...', link: '/news/climate-plan' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>People's Reform Movement | Building a Better Future</title>
        <meta name="description" content="Official website of the People's Reform Movement political party" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get Involved with PRM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
        
        {/* About PRM Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About The People's Reform Movement</h2>
                <p className="text-lg mb-4">
                  Founded in 2020, the PRM emerged from a grassroots movement demanding political accountability and systemic reform. 
                  We believe in putting people before politics and solutions before ideology.
                </p>
                <p className="text-lg mb-6">
                  Our party brings together citizens from all walks of life united by the common goal of creating a more just, 
                  prosperous, and sustainable society for future generations.
                </p>
                <Link href="/about">
                <a className="btn-primary">Learn More About Us</a>
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                  {/* Placeholder for about image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [PRM Members Photo]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest News Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((item, index) => (
                <div key={index} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                    <p className="mb-4">{item.excerpt}</p>
                    <Link href={item.link} className="text-secondary font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/news" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View All News
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}