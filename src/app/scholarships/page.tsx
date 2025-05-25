import React from 'react';
import ScholarshipCard from '@/components/ScholarshipCard';

const scholarships = [
  {
    id: 1,
    title: 'National Merit Scholarship',
    amount: '$2,000',
    applyLink: '#',
  },
  {
    id: 2,
    title: 'STEM Scholarship',
    amount: '$1,500',
    applyLink: '#',
  },
  {
    id: 3,
    title: 'Artistic Achievement Scholarship',
    amount: '$1,000',
    applyLink: '#',
  },
];

const ScholarshipsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Scholarships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>
    </div>
  );
};

export default ScholarshipsPage;