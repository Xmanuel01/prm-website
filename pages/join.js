import Head from 'next/head';
import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import { useState } from 'react';

const membershipTypes = [
  {
    id: 'standard',
    name: 'Standard Membership',
    price: '$25/year',
    description: 'Basic membership with voting rights in party elections',
    features: [
      'Voting rights in party elections',
      'Receive party communications',
      'Eligibility to attend conventions',
      'Discounts on event tickets'
    ]
  },
  {
    id: 'sustaining',
    name: 'Sustaining Membership',
    price: '$10/month',
    description: 'Monthly supporter with additional benefits',
    features: [
      'All standard membership benefits',
      'Exclusive policy briefings',
      'Invitations to member-only events',
      'PRM supporter badge'
    ]
  },
  {
    id: 'student',
    name: 'Student/Low-Income',
    price: '$10/year',
    description: 'Discounted membership for students and low-income individuals',
    features: [
      'All standard membership benefits',
      'Reduced rate for students',
      'Access to youth programs',
      'Mentorship opportunities'
    ]
  }
];

export default function Join() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    membershipType: '',
    volunteerInterests: [],
    skills: '',
    paymentMethod: 'credit',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentInterests = prev.volunteerInterests || [];
      if (checked) {
        return {
          ...prev,
          volunteerInterests: [...currentInterests, value]
        };
      } else {
        return {
          ...prev,
          volunteerInterests: currentInterests.filter(item => item !== value)
        };
      }
    });
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (step === 2) {
      if (!formData.membershipType) newErrors.membershipType = 'Please select a membership type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      alert('Thank you for joining PRM!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Join PRM | People's Reform Movement</title>
        <meta name="description" content="Join or volunteer with PRM" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Movement</h1>
            <p className="text-xl max-w-2xl">
              Become a member or volunteer to help build a better future.
            </p>
          </div>
        </section>
        
        {/* Progress Steps */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex justify-between relative">
                  {/* Progress line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-secondary -z-10 transition-all duration-300" 
                    style={{ width: `${(step - 1) * 50}%` }}
                  ></div>
                  
                  {/* Steps */}
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'} font-bold`}>
                        {stepNumber}
                      </div>
                      <span className={`mt-2 text-sm font-medium ${step >= stepNumber ? 'text-secondary' : 'text-gray-500'}`}>
                        {stepNumber === 1 && 'Your Info'}
                        {stepNumber === 2 && 'Membership'}
                        {stepNumber === 3 && 'Payment'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="address" className="block text-gray-700 mb-2">Street Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Select State</option>
                          <option value="AL">Alabama</option>
                          {/* Add all other states */}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="zip" className="block text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary px-8"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Membership Options</h2>
                    
                    <div className="space-y-4">
                      {membershipTypes.map((type) => (
                        <div 
                          key={type.id}
                          className={`p-6 border rounded-lg cursor-pointer transition-all ${formData.membershipType === type.id ? 'border-secondary bg-secondary bg-opacity-10' : 'border-gray-300 hover:border-secondary'}`}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, membershipType: type.id }));
                            if (errors.membershipType) {
                              setErrors(prev => ({ ...prev, membershipType: '' }));
                            }
                          }}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 w-5 h-5 mt-0.5 border rounded-full mr-4 flex items-center justify-center ${formData.membershipType === type.id ? 'border-secondary bg-secondary' : 'border-gray-300'}`}>
                              {formData.membershipType === type.id && (
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{type.name}</h3>
                              <p className="text-secondary font-medium">{type.price}</p>
                              <p className="text-gray-600 my-2">{type.description}</p>
                              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                {type.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {errors.membershipType && <p className="text-sm text-red-500">{errors.membershipType}</p>}
                    
                    <div className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Volunteer Opportunities</h3>
                      <p className="text-gray-600 mb-4">Check any areas you'd be interested in volunteering:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Canvassing',
                          'Phone Banking',
                          'Event Planning',
                          'Social Media',
                          'Data Entry',
                          'Graphic Design',
                          'Fundraising',
                          'Translation Services'
                        ].map((interest) => (
                          <label key={interest} className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="volunteerInterests"
                              value={interest}
                              checked={formData.volunteerInterests.includes(interest)}
                              onChange={handleCheckboxChange}
                              className="rounded text-secondary focus:ring-secondary"
                            />
                            <span className="text-gray-700">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary px-8"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                    
                    <div>
                      <label className="block text-gray-700 mb-4">Payment Method *</label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={handleChange}
                            className="text-secondary focus:ring-secondary"
                          />
                          <span className="text-gray-700">Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleChange}
                            className="text-secondary focus:ring-secondary"
                          />
                          <span className="text-gray-700">PayPal</span>
                        </label>
                      </div>
                    </div>
                    
                    {formData.paymentMethod === 'credit' && (
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number *</label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="cardExpiry" className="block text-gray-700 mb-2">Expiry Date *</label>
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cardCvc" className="block text-gray-700 mb-2">CVC *</label>
                            <input
                              type="text"
                              id="cardCvc"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleChange}
                              placeholder="123"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formData.paymentMethod === 'paypal' && (
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="mb-4">You'll be redirected to PayPal to complete your payment after submitting this form.</p>
                        <div className="inline-block bg-yellow-100 p-2 rounded">
                          {/* PayPal logo placeholder */}
                          <div className="w-32 h-10 bg-gray-300 flex items-center justify-center">
                            PayPal
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <label htmlFor="skills" className="block text-gray-700 mb-2">Skills or Expertise (Optional)</label>
                      <textarea
                        id="skills"
                        name="skills"
                        rows="3"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Tell us about any special skills or expertise you might bring to our movement..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn-primary px-8"
                      >
                        Complete Membership
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Not Ready to Join as a Member?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              You can still support our movement by volunteering your time and skills.
            </p>
            <button className="btn-primary">
              Volunteer With Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}