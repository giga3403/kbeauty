-- 캡처해주신 실제 Supabase products 테이블 스키마에 맞춘 샘플 데이터 입력(Seed) 쿼리입니다.
-- (id 컬럼은 int8(Identity 또는 자동증가)이고, created_at은 자동생성 된다고 가정하여 제외했습니다.)

INSERT INTO public.products 
(product_name, brand, category, price, skin_type, concern, olive_young_code)
VALUES
  ('히알루론산 수분 폭탄 크림', '더마수분', 'Cream', 25000, 'Dry', 'Hydration', 'OY1001'),
  ('시카 티트리 진정 토너', '퓨어시카', 'Toner', 18000, 'Oily', 'Acne', 'OY1002'),
  ('나이아신아마이드 10% 브라이트닝 세럼', '글로우이펙트', 'Serum', 32000, 'Combination', 'Brightening', 'OY1003'),
  ('바쿠치올 안티에이징 앰플', '유스랩', 'Ampoule', 45000, 'Dry', 'Aging', 'OY1004'),
  ('살리실산(BHA) 모공 클렌징 폼', '클리어스킨', 'Cleanser', 15000, 'Oily', 'Pore Care', 'OY1005'),
  ('무기자차 마일드 선크림', '퓨어선', 'Sunscreen', 22000, 'Sensitive', 'Soothing', 'OY1006'),
  ('수분 가득 알로에 수딩 젤', '네이처가든', 'Gel', 12000, 'Normal', 'Soothing', 'OY1007'),
  ('프로폴리스 영양 에센스', '허니비', 'Essence', 28000, 'Dry', 'Aging', 'OY1008');
