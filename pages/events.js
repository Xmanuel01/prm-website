import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

const upcomingEvents = [
  {
    id: 1,
    title: "Town Hall: Education Reform",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Springfield Community Center",
    description: "Join us for a discussion on our comprehensive education reform proposals with PRM policy experts.",
    image: "/images/events/town-hall.jpg"
  },
  {
    id: 2,
    title: "Youth Empowerment Rally",
    date: "June 22, 2023",
    time: "3:00 PM - 6:00 PM",
    location: "Central Park Amphitheater",
    description: "An energizing event focused on engaging young voters and addressing youth-specific policy issues.",
    image: "/images/events/youth-rally.jpg"
  },
  {
    id: 3,
    title: "PRM State Convention",
    date: "July 8-9, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Riverside Convention Center",
    description: "Annual gathering of PRM members to set policy priorities and elect state leadership.",
    image: "/images/events/convention.jpg"
  },
  {
    id: 4,
    title: "Community Organizing Training",
    date: "July 15, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Online Event",
    description: "Learn effective grassroots organizing techniques from experienced PRM campaigners.",
    image: "/images/events/training.jpg"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Events | People's Reform Movement</title>
        <meta name="description" content="Upcoming PRM events and activities" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-xl max-w-2xl">
              Join us at upcoming events to learn more and get involved.
            </p>
          </div>
        </section>
        
        {/* Events Calendar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                      <div className="mt-2 md:mt-0 bg-secondary text-white py-1 px-3 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mb-3">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="mb-6">{event.description}</p>
                    <button className="btn-primary">
                      RSVP Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Events Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Event Photo {item}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="text-white bg-secondary bg-opacity-80 hover:bg-opacity-100 rounded-full p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
                View More Past Events
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}