import { useClient } from 'react';
import { useParams } from 'next/navigation';
import { ReturnRequestForm } from '@/components/forms';

export default function IntakePage() {
  const params = useParams();
  const intl = 'en-US';
  const currency = 'USD';

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <ReturnRequestForm intl={intl} currency={currency} />
    </div>
  );
}