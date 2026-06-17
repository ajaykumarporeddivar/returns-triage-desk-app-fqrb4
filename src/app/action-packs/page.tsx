import { useClient } from 'react';
import { useParams } from 'next/navigation';
import { ActionPackTable } from '@/components/ui';

export default function ActionPacksPage() {
  const params = useParams();
  const intl = 'en-US';
  const currency = 'USD';

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <ActionPackTable intl={intl} currency={currency} />
    </div>
  );
}