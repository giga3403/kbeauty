-- 1. PostGIS 확장 활성화 (이미 되어있을 수 있지만 안전을 위해 추가)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. 주변 매장 검색을 위한 Postgres 함수(RPC) 생성
-- 이 함수는 클라이언트(브라우저)에서 Supabase JS로 호출할 수 있습니다.
CREATE OR REPLACE FUNCTION get_nearby_stores(
  usr_lat double precision, 
  usr_lng double precision, 
  radius_meters integer DEFAULT 2000
)
RETURNS TABLE (
  id int8,
  name text,
  brand_type text,
  lat float8,
  lng float8,
  distance float8
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    id, 
    name, 
    brand_type, 
    lat,
    lng,
    ST_Distance(location, ST_MakePoint(usr_lng, usr_lat)::geography) AS distance
  FROM stores
  WHERE ST_DWithin(location, ST_MakePoint(usr_lng, usr_lat)::geography, radius_meters)
  ORDER BY distance ASC;
$$;

-- 3. 임시 매장 데이터 생성 (서울역 인근)
-- 기존 데이터 삭제 (선택 사항, 필요 시 주석 해제)
-- TRUNCATE TABLE public.stores RESTART IDENTITY CASCADE;

INSERT INTO public.stores (name, brand_type, lat, lng, location)
VALUES
  ('올리브영 서울스퀘어점', 'Olive Young', 37.5552, 126.9734, ST_MakePoint(126.9734, 37.5552)::geography),
  ('올리브영 명동본점', 'Olive Young', 37.5629, 126.9825, ST_MakePoint(126.9825, 37.5629)::geography),
  ('올리브영 시청역점', 'Olive Young', 37.5627, 126.9768, ST_MakePoint(126.9768, 37.5627)::geography),
  ('온누리약국 서울역점', 'Pharmacy', 37.5541, 126.9700, ST_MakePoint(126.9700, 37.5541)::geography),
  ('메디컬 스킨 클리닉 명동', 'Skin Clinic', 37.5615, 126.9841, ST_MakePoint(126.9841, 37.5615)::geography),
  ('홍대 메이크업 스튜디오', 'Idol Makeup', 37.5568, 126.9234, ST_MakePoint(126.9234, 37.5568)::geography),
  ('강남역 퍼스널컬러 진단소', 'Personal Color', 37.4979, 127.0276, ST_MakePoint(127.0276, 37.4979)::geography);
