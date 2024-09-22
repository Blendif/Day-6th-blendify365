import React from 'react';

function FreelancingServices() {
  return (
    <div className="services-section py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Freelancing Services</h2>

      <div className="service-card p-6 neumorphic-shadow rounded-lg text-center">
        <h3 className="text-3xl">Proofreading Service</h3>
        <button className="neumorphic-button mt-4">Request Service</button>
      </div>

      <div className="service-card p-6 neumorphic-shadow rounded-lg text-center">
        <h3 className="text-3xl">Content Writing</h3>
        <button className="neumorphic-button mt-4">Request Service</button>
      </div>
    </div>
  );
}

export default FreelancingServices;
