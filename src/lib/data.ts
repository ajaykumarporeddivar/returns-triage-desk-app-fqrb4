export const returnRequests = [
  {
    id: 1,
    date: '2024-09-01',
    customerName: 'John Doe',
    orderNumber: 'ORD1234',
    reason: 'Damaged item',
    status: 'New',
    priority: 'High'
  },
  {
    id: 2,
    date: '2024-09-02',
    customerName: 'Jane Doe',
    orderNumber: 'ORD5678',
    reason: 'Incorrect item',
    status: 'New',
    priority: 'Medium'
  },
  {
    id: 3,
    date: '2024-09-03',
    customerName: 'Bob Smith',
    orderNumber: 'ORD9012',
    reason: 'Defective item',
    status: 'New',
    priority: 'High'
  },
  {
    id: 4,
    date: '2024-09-04',
    customerName: 'Alice Johnson',
    orderNumber: 'ORD3456',
    reason: 'Missing item',
    status: 'New',
    priority: 'Low'
  },
  {
    id: 5,
    date: '2024-09-05',
    customerName: 'Mike Brown',
    orderNumber: 'ORD7890',
    reason: 'Wrong size',
    status: 'New',
    priority: 'Medium'
  },
  {
    id: 6,
    date: '2024-09-06',
    customerName: 'Emma Taylor',
    orderNumber: 'ORD4567',
    reason: 'Incorrect color',
    status: 'New',
    priority: 'Low'
  },
  {
    id: 7,
    date: '2024-09-07',
    customerName: 'Oliver Davis',
    orderNumber: 'ORD2345',
    reason: 'Defective item',
    status: 'New',
    priority: 'High'
  },
  {
    id: 8,
    date: '2024-09-08',
    customerName: 'Ava Lee',
    orderNumber: 'ORD6789',
    reason: 'Missing item',
    status: 'New',
    priority: 'Low'
  },
  {
    id: 9,
    date: '2024-09-09',
    customerName: 'Liam Chen',
    orderNumber: 'ORD0123',
    reason: 'Incorrect item',
    status: 'New',
    priority: 'Medium'
  },
  {
    id: 10,
    date: '2024-09-10',
    customerName: 'Sophia Patel',
    orderNumber: 'ORD4567',
    reason: 'Damaged item',
    status: 'New',
    priority: 'High'
  }
];

export const statuses = [
  { id: 1, name: 'New' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'Resolved' }
];

export const priorities = [
  { id: 1, name: 'High' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'Low' }
];

export const reasons = [
  { id: 1, name: 'Damaged item' },
  { id: 2, name: 'Incorrect item' },
  { id: 3, name: 'Defective item' },
  { id: 4, name: 'Missing item' },
  { id: 5, name: 'Wrong size' },
  { id: 6, name: 'Incorrect color' }
];

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
