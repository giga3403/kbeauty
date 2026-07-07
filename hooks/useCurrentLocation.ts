import { useState, useEffect } from 'react';

// 서울역 기본 좌표 (Fallback)
export const DEFAULT_LOCATION = { lat: 37.5546, lng: 126.9706 };

export function useCurrentLocation() {
  const [location, setLocation] = useState<{lat: number; lng: number} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getLocation();
  }, []);

  const onSuccess = (position: GeolocationPosition) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    setIsLoading(false);
  };

  const onError = (error: GeolocationPositionError) => {
    console.warn('Geolocation error:', error.message);
    setError(error.message);
    // 권한 거부 또는 에러 시 기본 위치(서울역)로 폴백
    setLocation(DEFAULT_LOCATION);
    setIsLoading(false);
  };

  const getLocation = () => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      setError('Geolocation을 지원하지 않는 브라우저입니다.');
      setLocation(DEFAULT_LOCATION);
      setIsLoading(false);
      return;
    }
    
    // 고정밀도(enableHighAccuracy) 옵션을 주어 GPS 값을 더 정확히 가져옴
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  };

  return { location, error, isLoading, getLocation };
}
