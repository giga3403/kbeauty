"use client";

import { useState, useEffect } from "react";
import { Search, Navigation, MapPin } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { useCurrentLocation, DEFAULT_LOCATION } from "../../hooks/useCurrentLocation";
import { supabase } from "../../lib/supabase";

const mapContainerStyle = {
  width: "100%",
  height: "100%"
};

// 다크 모드 구글 맵 스타일 (기본 POI 및 대중교통 마커 숨김)
const darkMapStyle = [
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
];

interface Store {
  id: number;
  name: string;
  brand_type: string;
  lat: number;
  lng: number;
  distance: number;
}

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Olive Young", "Pharmacy", "Personal Color", "Idol Makeup", "Skin Clinic"];
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const { location, isLoading } = useCurrentLocation();
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  useEffect(() => {
    if (location) {
      fetchNearbyStores(location.lat, location.lng);
    }
  }, [location]);

  const fetchNearbyStores = async (lat: number, lng: number) => {
    // Supabase RPC 호출 (반경 3km 이내)
    const { data, error } = await supabase.rpc('get_nearby_stores', {
      usr_lat: lat,
      usr_lng: lng,
      radius_meters: 3000
    });

    if (error) {
      console.error("Error fetching stores:", error);
    } else {
      setStores(data || []);
      // 가장 가까운 스토어를 기본 선택 (옵션)
      if (data && data.length > 0) {
        setSelectedStore(data[0]);
      }
    }
  };

  const filteredStores = activeFilter === "All" 
    ? stores 
    : stores.filter(s => s.brand_type === activeFilter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Top Bar / Search */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-slate-950 to-transparent pt-10 pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md shadow-lg rounded-2xl px-5 py-4 flex justify-between items-center border border-white/10 pointer-events-auto">
          <span className="font-playfair text-white font-bold text-lg">Beauty Map</span>
          <Search className="w-5 h-5 text-slate-300" />
        </div>
      </div>

      {/* Google Map View */}
      <div className="flex-1 bg-slate-900 relative overflow-hidden">
        {!isLoaded || isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <span className="animate-pulse">Loading Map & GPS...</span>
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location || DEFAULT_LOCATION}
            zoom={14}
            options={{
              styles: darkMapStyle,
              disableDefaultUI: true,
              zoomControl: false,
            }}
          >
            {/* User Location Marker */}
            {location && (
              <Marker
                position={location}
                icon={{
                  path: typeof window !== "undefined" ? window.google.maps.SymbolPath.CIRCLE : 0,
                  fillColor: '#fbbf24', // amber-400
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2,
                  scale: 8
                }}
                zIndex={999}
              />
            )}

            {/* Store Markers */}
            {filteredStores.map((store) => (
              <Marker
                key={store.id}
                position={{ lat: store.lat, lng: store.lng }}
                onClick={() => setSelectedStore(store)}
                icon={{
                  url: store.brand_type === 'Olive Young' 
                        ? 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"><circle cx="22" cy="22" r="18" fill="%238b5cf6" stroke="white" stroke-width="3"/><text x="22" y="28" font-size="18" font-weight="bold" fill="white" text-anchor="middle">O</text></svg>'
                        : 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"><circle cx="22" cy="22" r="18" fill="%23ec4899" stroke="white" stroke-width="3"/><text x="22" y="28" font-size="18" font-weight="bold" fill="white" text-anchor="middle">P</text></svg>'
                }}
              />
            ))}

            {/* Info Window for Selected Store (Optional, since we show it at bottom) */}
          </GoogleMap>
        )}
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-[90px] left-0 w-full z-20 px-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 pointer-events-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                if (f !== "All" && stores.length > 0) {
                  const filtered = stores.filter(s => s.brand_type === f);
                  if (filtered.length > 0) setSelectedStore(filtered[0]);
                }
              }}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg border ${
                activeFilter === f 
                  ? 'bg-white text-slate-950 border-white' 
                  : 'bg-slate-900/80 backdrop-blur-sm text-slate-300 border-white/10 hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Selected Store Card */}
        {selectedStore && (
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-5 flex justify-between items-center shadow-2xl border border-white/10 pointer-events-auto group">
            <div>
              <div className="flex gap-2 mb-1">
                 <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                   selectedStore.brand_type === 'Olive Young' 
                     ? 'bg-violet-500/20 text-violet-300 border-violet-500/30' 
                     : 'bg-pink-500/20 text-pink-300 border-pink-500/30'
                 }`}>
                   {selectedStore.brand_type.toUpperCase()}
                 </span>
              </div>
              <h3 className="font-playfair font-semibold text-white text-lg mb-1">{selectedStore.name}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-pink-400"><Navigation className="w-3 h-3" /> {(selectedStore.distance).toFixed(0)}m away</span>
              </div>
            </div>
            <Link href={`/store/${selectedStore.id}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors text-white border border-white/20">
              <span className="font-bold">❯</span>
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
