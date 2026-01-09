import React from 'react';
import SEO from '../components/SEO';

const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <SEO 
        title="Membership" 
        description="Join the Archery Club of Uva. Learn about membership requirements, benefits, and how to apply."
        url="/membership"
      />
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Membership</h1>
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-4">How to Become a Member</h2>
        <p className="text-gray-300 mb-6">
          We welcome archery enthusiasts of all skill levels! To become a member of the Archery Club of Uva:
        </p>
        <ol className="list-decimal list-inside text-gray-200 mb-6 space-y-2">
          <li>Contact us via email (<a href="mailto:uvaarchery@gmail.com" className="text-blue-400 underline">uvaarchery@gmail.com</a>) or phone (+94 71 811 8969) to express your interest.</li>
          <li>Attend an introductory session at our club grounds in Rotoruwa, Kabillawela North, Bandarawela.</li>
          <li>Fill out the membership application form provided at the club or request a digital copy via email.</li>
          <li>Submit the completed form along with any required documents and membership fee.</li>
          <li>Our committee will review your application and contact you with further details.</li>
        </ol>
        <p className="text-gray-400 mt-4">
          <strong>Note:</strong> Membership is open to all ages. Beginners will receive basic training and safety instructions. For more information, please reach out to us directly.
        </p>
      </div>
    </div>
  );
};

export default Membership;
