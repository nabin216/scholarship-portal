import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-8">
                {/* Logo + Links Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="text-xl font-bold">
                            ScholarMatch
                        </Link>
                        <p className="text-sm text-gray-500 mt-2">
                            ©️ All rights reserved since 2007
                        </p>
                    </div>
                    <div className="text-sm">
                        <Link href="/help-center" className="text-gray-600 hover:text-gray-900">Help Center</Link>
                        <span className="mx-2">·</span>
                        <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
                        <span className="mx-2">·</span>
                        <Link href="/support-team" className="text-gray-600 hover:text-gray-900">Support Team</Link>
                        <span className="mx-2">·</span>
                        <Link href="/how-to-works" className="text-gray-600 hover:text-gray-900">How it Works</Link>
                        <span className="mx-2">·</span>
                        <Link href="/get-in-touch" className="text-gray-600 hover:text-gray-900">Get in touch</Link>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="/images/icon-handshake.svg" alt="Handshake" className="w-12 h-12 mr-4" />
                            <div>
                                <h3 className="font-semibold mb-1">Psst! Find exclusive opportunities and insider tips!</h3>
                                <p className="text-sm text-gray-600">Do you want to discover hidden scholarships and advice from others? Sign up now to unlock your future!</p>
                            </div>
                        </div>
                        <button className="bg-white text-sm font-medium px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                            Join now
                        </button>
                    </div>
                </div>

                {/* Copyright + Branding */}
                <div className="text-center text-sm text-gray-500">
                    ScholarMatch ©️
                </div>
            </div>
        </footer>
    );
};

export default Footer;