"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FilterOptions } from '../types/filterOptions';

const HomeSearchFilter = () => {
    const router = useRouter();
    const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);
    const [filterOptionsLoading, setFilterOptionsLoading] = useState(true);
    const [filterValues, setFilterValues] = useState({
        level: '',
        country: '',
        field: '',
        deadline: ''
    });

    // Fetch filter options from backend
    useEffect(() => {
        const fetchFilterOptions = async () => {
            try {
                setFilterOptionsLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scholarships/filter-options/`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setFilterOptions(data);
                
            } catch (error) {
                console.error('Error fetching filter options:', error);
                // Keep filter options as null on error, components will handle gracefully
            } finally {
                setFilterOptionsLoading(false);
            }
        };

        fetchFilterOptions();
    }, []);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilterValues(prev => ({ ...prev, [name]: value }));
    };    const handleArrowClick = () => {
        // Build query parameters from filter values
        const queryParams = new URLSearchParams();
        
        // Map home filter names to search page filter names
        const filterMapping = {
            level: 'levels',
            country: 'country',
            field: 'field_of_study',
            deadline: 'deadline_before'
        };
        
        // Only add parameters that have values
        Object.entries(filterValues).forEach(([key, value]) => {
            if (value) {
                const mappedKey = filterMapping[key as keyof typeof filterMapping];
                if (mappedKey) {
                    queryParams.append(mappedKey, value);
                }
            }
        });

        // Navigate to the scholarships search page with filters
        router.push(`/scholarships/search?${queryParams.toString()}`);
    };

    return (
        <div className="bg-[#E8EEF7] rounded-full shadow-md flex items-center">
            <div className="flex-1 grid grid-cols-4 divide-x divide-gray-200">                <div className="px-6 py-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Level</div>                    <select 
                        name="level"
                        value={filterValues.level}
                        onChange={handleFilterChange}
                        className="w-full bg-transparent text-gray-500 border-none focus:ring-0 text-sm py-1"
                        disabled={filterOptionsLoading}
                    >
                        <option value="">Select Level</option>
                        {filterOptions?.levels.map((level) => (
                            <option key={level.id} value={level.name}>
                                {level.name}
                            </option>
                        ))}
                    </select>
                </div>                <div className="px-6 py-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Country</div>                    <select 
                        name="country"
                        value={filterValues.country}
                        onChange={handleFilterChange}
                        className="w-full bg-transparent text-gray-500 border-none focus:ring-0 text-sm py-1"
                        disabled={filterOptionsLoading}
                    >
                        <option value="">Select Country</option>
                        {filterOptions?.countries.map((country) => (
                            <option key={country.id} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>                <div className="px-6 py-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Field</div>                    <select 
                        name="field"
                        value={filterValues.field}
                        onChange={handleFilterChange}
                        className="w-full bg-transparent text-gray-500 border-none focus:ring-0 text-sm py-1"
                        disabled={filterOptionsLoading}
                    >
                        <option value="">Select field</option>
                        {filterOptions?.fields_of_study.map((field) => (
                            <option key={field.id} value={field.name}>
                                {field.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="px-6 py-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Deadline</div>
                    <input 
                        type="date" 
                        name="deadline"
                        value={filterValues.deadline}
                        onChange={handleFilterChange}
                        className="w-full bg-transparent text-gray-500 border-none focus:ring-0 text-sm py-1"
                    />
                </div>
            </div>
            <div className="px-2">
                <button 
                    onClick={handleArrowClick}
                    className="bg-[#FFE814] hover:bg-[#FFE200] text-black rounded-full h-12 w-12 flex items-center justify-center transition-colors"
                >
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default HomeSearchFilter;
