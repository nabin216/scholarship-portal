import React from 'react';
import ScholarshipCard from '../../components/ScholarshipCard';
import { Scholarship } from '../../types/scholarship';
import Link from 'next/link';

async function getScholarships(): Promise<Scholarship[]> {
  const res = await fetch('http://localhost:8000/api/scholarships/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch scholarships');
  }

  return res.json();
}

export default async function ScholarshipsPage() {
  let scholarships: Scholarship[] = [];
  let error = null;

  try {
    scholarships = await getScholarships();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load scholarships';
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Available Scholarships</h1>
        <div className="flex items-center gap-4">
          <Link 
            href="/scholarships/search" 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Advanced Search
          </Link>
          <span className="text-gray-500">Found {scholarships.length} scholarships</span>
        </div>
      </div>

      {/* Grid layout for desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <ScholarshipCard 
            key={scholarship.id}
            scholarship={scholarship}
          />
        ))}
      </div>

      {/* List view for all screens - similar to filtered search style */}
      <div className="space-y-4 md:hidden">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white rounded-md shadow-sm overflow-hidden">
            <div className="flex">
              {/* Scholarship Image */}
              <div className="w-1/5 bg-gray-200 flex items-center justify-center p-4">
                {scholarship.image ? (
                  <img 
                    src={scholarship.image} 
                    alt={scholarship.title}
                    className="h-20 w-20 object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              
              {/* Scholarship Details */}
              <div className="w-4/5 p-4 flex">
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-blue-600">{scholarship.title}</h2>
                  </div>
                  
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {scholarship.fund_type?.map(cat => (
                      <span key={`fund-${cat.id}`} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {cat.name}
                      </span>
                    ))}
                    {scholarship.sponsor_type?.map(sponsor => (
                      <span key={`sponsor-${sponsor.id}`} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {sponsor.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex gap-4">
                    <span className="text-gray-600 text-sm">
                      Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                    </span>
                    <span className="text-gray-600 text-sm">
                      Levels: {scholarship.levels?.map(l => l.name).join(', ')}
                    </span>
                  </div>
                </div>
                
                {/* Right side with button */}
                <div className="w-1/4 flex flex-col items-end justify-between">
                  <span className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded">
                    {scholarship.country}
                  </span>
                  <a
                    href={scholarship.application_url || `/scholarships/${scholarship.id}`}
                    target={scholarship.application_url ? "_blank" : "_self"}
                    rel={scholarship.application_url ? "noopener noreferrer" : ""}
                    className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded text-sm font-medium"
                  >
                    {scholarship.application_url ? 'Apply Now' : 'View Details'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {scholarships.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No scholarships available at the moment.</p>
        </div>
      )}
    </div>
  );
}