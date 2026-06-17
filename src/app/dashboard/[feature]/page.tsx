import { useClient } from 'react';
import { useParams } from 'next/navigation';

export default function FeaturePage() {
  const params = useParams();
  const feature = params.feature;

  if (feature === 'dashboard') {
    return <div>Dashboard Page</div>;
  } else if (feature === 'settings') {
    return <div>Settings Page</div>;
  } else {
    return <div>Not Found</div>;
  }
}