'use client';

import { cn } from 'clsx';

export function FormInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className={cn(
          'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight',
          'focus:outline-none focus:shadow-outline'
        )}
        type="text"
        value={value}
        onChange={onChange}
        id={label}
      />
    </div>
  );
}