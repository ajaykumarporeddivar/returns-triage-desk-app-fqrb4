'use client';
import { useState } from 'react';
import { returnRequests } from '@/lib/data';

interface Props {
  returnRequests: { id: number; customerName: string; orderNumber: string; returnReason: string; status: string }[];
}

export default function Intake({ returnRequests }: Props) {
  const [customerName, setCustomerName] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReturnRequest = {
      id: returnRequests.length + 1,
      customerName,
      orderNumber,
      returnReason,
      status,
    };
    returnRequests.push(newReturnRequest);
    setCustomerName('');
    setOrderNumber('');
    setReturnReason('');
    setStatus('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Intake</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
          Customer Name
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNumber">
          Order Number
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="orderNumber"
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnReason">
          Return Reason
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="returnReason"
          type="text"
          value={returnReason}
          onChange={(e) => setReturnReason(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
          Status
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="status"
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}