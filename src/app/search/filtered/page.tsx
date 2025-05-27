'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

/**
 * This is a legacy page that redirects to the new scholarship search page.
 * It preserves URL parameters when redirecting.
 */
export default function LegacyFilteredResultsRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Create the new URL with the same search parameters
    const newPath = '/scholarships/search';
    const currentParams = searchParams?.toString();
    const redirectTo = currentParams ? `${newPath}?${currentParams}` : newPath;
    
    // Redirect to the new path
    router.replace(redirectTo);
  }, [router, searchParams]);
  
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500'></div>
    </div>
  );
}
