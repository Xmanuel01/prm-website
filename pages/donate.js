import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

export default function Donate() {
  const donationAmounts = [10, 25, 50, 100, 250, 500];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Support PRM | People's Reform Movement</title>
        <meta name="description" content="Donate to support the People's Reform Movement" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Movement</h1>
            <p className="text-xl max-w-2xl">
              Your contribution helps us fight for reform, organize events, and reach more citizens.
            </p>
          </div>
        </section>
        
        {/* Donation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-secondary p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fund grassroots organizing efforts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Support policy research and development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Help us reach voters across the country</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Build a movement for lasting change</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
                  <form>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="amount">
                        Donation Amount
                      </label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className="border border-gray-300 rounded-md py-2 px-4 hover:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          id="amount"
                          className="w-full pl-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                          placeholder="Other amount"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="frequency">
                        Frequency
                      </label>
                      <select
                        id="frequency"
                        className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option>One-time donation</option>
                        <option>Monthly donation</option>
                        <option>Quarterly donation</option>
                        <option>Annual donation</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-secondary focus:ring-secondary" />
                        <span className="ml-2">Make this donation anonymously</span>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 px-4"
                    >
                      Donate Now
                    </button>
                    
                    <p className="mt-4 text-sm text-gray-500">
                      Contributions to PRM are not tax deductible. Paid for by People's Reform Movement.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}