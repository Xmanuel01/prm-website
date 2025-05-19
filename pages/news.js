import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

const newsArticles = [
  {
    id: 1,
    title: "PRM Announces Comprehensive Economic Reform Package",
    date: "May 20, 2023",
    category: "Policy",
    excerpt: "The People's Reform Movement today unveiled a detailed economic reform agenda focused on middle-class relief and small business support...",
    image: "/images/news/economic-reform.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Party Leader Addresses Climate Change Concerns",
    date: "May 15, 2023",
    category: "Environment",
    excerpt: "In a keynote speech at the National Sustainability Forum, PRM chair outlined the party's ambitious climate action plan...",
    image: "/images/news/climate-speech.jpg",
    featured: false
  },
  {
    id: 3,
    title: "PRM Gains Ground in Latest Polls",
    date: "May 10, 2023",
    category: "Elections",
    excerpt: "New polling data shows growing support for PRM candidates, particularly among young voters and independents...",
    image: "/images/news/polling-data.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Town Hall Series Draws Large Crowds",
    date: "May 5, 2023",
    category: "Events",
    excerpt: "The first three stops on PRM's national town hall tour have attracted overflow crowds eager to discuss reform issues...",
    image: "/images/news/town-hall.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Youth Wing Launches Voter Registration Drive",
    date: "April 28, 2023",
    category: "Campaign",
    excerpt: "PRM's youth division has registered over 10,000 new voters in its first month of operation...",
    image: "/images/news/voter-drive.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Policy Director Testifies Before Legislature",
    date: "April 22, 2023",
    category: "Policy",
    excerpt: "PRM's policy chief presented expert testimony on healthcare reform to the state assembly's health committee...",
    image: "/images/news/testimony.jpg",
    featured: false
  }
];

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>News & Press | People's Reform Movement</title>
        <meta name="description" content="Latest news and press releases from PRM" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Press</h1>
            <p className="text-xl max-w-2xl">
              Stay updated with the latest from the People's Reform Movement.
            </p>
          </div>
        </section>
        
        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 h-96">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-secondary text-white py-1 px-3 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-500">{featuredArticle.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                    <p className="text-lg mb-6">{featuredArticle.excerpt}</p>
                    <button className="btn-primary">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* News Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-secondary">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <button className="text-secondary font-medium hover:underline">
                      Continue Reading →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
        
        {/* Press Releases */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
            
            <div className="space-y-6">
              {[
                "PRM Statement on New Economic Legislation - May 18, 2023",
                "Party Leadership Condemns Political Violence - May 12, 2023",
                "PRM Announces Candidate Slate for Upcoming Elections - May 5, 2023",
                "Response to Recent Policy Proposal from Opposition - April 30, 2023",
                "Official Party Position on Constitutional Reform - April 25, 2023"
              ].map((release, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium mb-1">{release}</h3>
                  <button className="text-sm text-secondary hover:underline">
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
                View All Press Releases
              </button>
            </div>
          </div>
        </section>
        
        {/* Media Contact */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
              <p className="text-xl mb-8">
                Journalists and media representatives can contact our communications team for interviews, statements, and press materials.
              </p>
              <button className="btn-primary bg-white text-primary hover:bg-gray-100">
                Contact Press Office
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}