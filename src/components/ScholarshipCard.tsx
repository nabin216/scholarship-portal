import React from 'react';

interface ScholarshipCardProps {
    title: string;
    amount: string;
    applyLink: string;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ title, amount, applyLink }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-lg text-gray-700">Amount: {amount}</p>
            <a href={applyLink} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
            </a>
        </div>
    );
};

export default ScholarshipCard;