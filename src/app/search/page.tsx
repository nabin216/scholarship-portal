// 'use client';

// import React, { useState, useEffect } from 'react';
// import SearchFilters from '@/components/SearchFilters';
// import ScholarshipCard from '@/components/ScholarshipCard';
// import { Scholarship } from '@/types/scholarship';
// import { useSearchParams } from 'next/navigation';

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const [scholarships, setScholarships] = useState<Scholarship[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchScholarships = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Get search parameters from URL
//         const params = new URLSearchParams();
//         for (const [key, value] of Array.from(searchParams.entries())) {
//           if (value) {
//             params.append(key, value);
//           }
//         }

//         // Add default parameters if needed
//         if (!params.has('limit')) {
//           params.append('limit', '10');
//         }
        
//         // Use environment variable for API URL
//         const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/scholarships/?${params.toString()}`;
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`Error fetching scholarships: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setScholarships(data.results || []);
//       } catch (err) {
//         console.error('Error fetching scholarships:', err);
//         setError('Failed to load scholarships. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScholarships();
//   }, [searchParams]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Search Scholarships</h1>
//       <SearchFilters />
      
//       {loading ? (
//         <div className="flex justify-center items-center p-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//         </div>
//       ) : error ? (
//         <div className="bg-red-50 p-4 rounded-lg text-red-600 my-4">
//           <p>{error}</p>
//           <p className="text-sm mt-2">API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
//         </div>
//       ) : scholarships.length === 0 ? (
//         <div className="bg-yellow-50 p-4 rounded-lg text-yellow-600 my-4">
//           No scholarships found matching your criteria.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {scholarships.map(scholarship => (
//             <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchPage;