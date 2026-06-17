import { useClient } from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ReturnRequestForm({ intl, currency }) {
  const [formState, setFormState] = useState({
    date: '',
    customerName: '',
    orderNumber: '',
    reason: '',
    status: '',
    priority: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col')}>
      <label>
        Date:
        <input
          type="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        />
      </label>
      <label>
        Customer Name:
        <input
          type="text"
          value={formState.customerName}
          onChange={(e) => setFormState({ ...formState, customerName: e.target.value })}
        />
      </label>
      <label>
        Order Number:
        <input
          type="text"
          value={formState.orderNumber}
          onChange={(e) => setFormState({ ...formState, orderNumber: e.target.value })}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          value={formState.reason}
          onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
        />
      </label>
      <label>
        Status:
        <select
          value={formState.status}
          onChange={(e) => setFormState({ ...formState, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          value={formState.priority}
          onChange={(e) => setFormState({ ...formState, priority: e.target.value })}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}