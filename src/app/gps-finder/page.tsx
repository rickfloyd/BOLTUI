
'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';

type Restaurant = {
  name: string;
  vicinity: string;
  rating: number;
};

export default function GpsFinderPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lat: number, lon: number } | null>(null);

  const handleLocationError = (error: GeolocationPositionError) => {
    setLoading(false);
    switch (error.code) {
      case 1: // GeolocationPositionError.PERMISSION_DENIED
        setError("Location access denied. Please enable location permissions in your browser.");
        break;
      case 2: // GeolocationPositionError.POSITION_UNAVAILABLE
        setError("Location information is unavailable.");
        break;
      case 3: // GeolocationPositionError.TIMEOUT
        setError("The location request timed out.");
        break;
      default:
        setError("An unknown error occurred while getting your location.");
        break;
    }
  };

  const fetchRestaurants = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`/api/places?lat=${lat}&lon=${lon}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch restaurant data.');
      }
      const data = await response.json();
      setRestaurants(data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      setError(null);
      setRestaurants([]);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchRestaurants(latitude, longitude);
        },
        handleLocationError
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
            🍔 Local Food Finder
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Click the button below to find restaurants near your current location.
          </p>
          <div className="mt-8">
            <Button
              onClick={getLocation}
              disabled={loading}
              className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]"
            >
              {loading ? 'Searching...' : 'Find Food Near Me'}
            </Button>
          </div>

          <div className="mt-10 text-left">
            {loading && location && (
              <p className="text-cyan-400 text-center">📍 Your location: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}. Searching for restaurants...</p>
            )}

            {error && (
              <p className="text-red-400 text-center text-xl">{error}</p>
            )}

            {restaurants.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 border-b-2 border-cyan-500/30 pb-3">Nearby Restaurants</h2>
                <ul className="space-y-6">
                  {restaurants.map((place, index) => (
                    <li key={index} className="p-4 rounded-lg bg-black/30 border border-pink-400/50">
                      <strong className="text-xl text-white block">{place.name}</strong>
                      <p className="text-gray-400">{place.vicinity || "Location not available"}</p>
                      <p className="text-yellow-400">Rating: {place.rating || "N/A"} ⭐</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {!loading && !error && restaurants.length === 0 && location && (
                <p className="text-gray-400 text-center text-xl">No restaurants found nearby.</p>
            )}

          </div>
        </div>
      </main>
    </>
  );
}
