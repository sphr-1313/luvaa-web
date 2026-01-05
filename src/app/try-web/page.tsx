"use client";
import { useEffect } from 'react';

export default function TryAppPage() {
    useEffect(() => {
        // Redirect to the static Flutter app
        window.location.href = '/try-web/index.html';
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ec547c]/10 to-[#ed754f]/10">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#ec547c] mb-4"></div>
                <p className="text-gray-700 font-medium">Loading Luvaa App...</p>
            </div>
        </div>
    );
}
