import StoreDetailClient from "./StoreDetailClient";

export function generateStaticParams() {
  // Return dummy IDs so Next.js can pre-render these paths for static export
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: 'olive-young-myeongdong' }
  ];
}

export default function StoreDetailPage() {
  return <StoreDetailClient />;
}
