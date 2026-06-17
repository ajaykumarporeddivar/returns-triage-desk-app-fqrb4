'use client';

export function UpgradePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">Upgrade</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          // Unlock full roadmap features
        }}
      >
        Unlock Full Roadmap
      </button>
    </div>
  );
}