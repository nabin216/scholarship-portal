'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Button from './ui/Button';
import { useAuth } from '../app/Authentication/context/AuthContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <header className="bg-white sticky top-0 z-50 py-2.5">
            <div className="mx-4 md:mx-8 lg:mx-12">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-1">
                <span className="text-xl font-bold text-gray-900">ScholarMatch</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                <Link href="/scholarships" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition-colors">
                    Scholarships
                </Link>
                <Link href="/admissions" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition-colors">
                    Admissions
                </Link>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center space-x-2">
                {isAuthenticated ? (
                    <>
                        <Link href="/profile" className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors px-4 py-2">
                            <UserCircleIcon className="h-5 w-5 mr-1" />
                            <span>{user?.name || 'My Profile'}</span>
                        </Link>
                        <button 
                            onClick={logout}
                            className="bg-gray-100 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/Authentication/register" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors px-4 py-2">
                            Register
                        </Link>
                        <Link href="/Authentication/login" className="bg-yellow-400 hover:bg-yellow-500 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                            Log In
                        </Link>
                    </>
                )}
                </div>

                {/* Mobile menu button */}
                <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <Bars3Icon className="h-6 w-6" />
                )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 py-4">
                <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                        Home
                    </Link>
                    <Link href="/scholarships" className="text-gray-700 hover:text-primary-600 font-medium">
                        Scholarships
                    </Link>
                    <Link href="/search" className="text-gray-700 hover:text-primary-600 font-medium">
                        Search
                    </Link>
                    
                    {isAuthenticated ? (
                        <>
                            <Link href="/profile" className="text-gray-700 hover:text-primary-600 font-medium">
                                My Profile
                            </Link>
                            <button 
                                onClick={logout}
                                className="text-left text-gray-700 hover:text-primary-600 font-medium"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="pt-4 border-t border-gray-100 space-y-2">
                            <Button variant="ghost" size="md" fullWidth asChild>
                                <Link href="/Authentication/login">Sign In</Link>
                            </Button>
                            <Button variant="primary" size="md" fullWidth asChild>
                                <Link href="/Authentication/register">Register</Link>
                            </Button>
                        </div>
                    )}
                </nav>
                </div>
            )}
            </div>
        </header>
    );
};

export default Header;