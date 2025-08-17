

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ProfileIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
);
const SettingsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
);

const mockPayments = [
  { month: 'June 2025', amount: 1200, status: 'Paid' },
  { month: 'July 2025', amount: 1200, status: 'Paid' },
];
const currentDue = { month: 'August 2025', amount: 1200, status: 'Due' };



function App() {
  return (
    <div className="tenant-dashboard" style={{ maxWidth: 400, margin: '0 auto', padding: 0, background: '#f7f8fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ padding: '24px 16px 80px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <img src={reactLogo} alt="Logo" style={{ width: 40, marginRight: 8 }} />
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: 24, margin: 0 }}>Maintenance Summary</h2>
        </div>
        <div style={{ marginBottom: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 16 }}>
          <h3 style={{ display: 'flex', alignItems: 'center', fontSize: 18, margin: 0, marginBottom: 12 }}>
            <PaymentIcon />
            <span style={{ marginLeft: 8 }}>Past Payments</span>
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {mockPayments.map((p, idx) => (
              <li key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', marginBottom: 10, fontSize: 16 }}>
                <span style={{ textAlign: 'left' }}>{p.month}</span>
                <span style={{ color: 'green', fontWeight: 500, textAlign: 'center' }}>{p.status}</span>
                <span style={{ fontWeight: 600, textAlign: 'right' }}>₹{p.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 16 }}>
          <h3 style={{ fontSize: 18, margin: 0, marginBottom: 12 }}>Current Due</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffeaea', padding: 12, borderRadius: 8, fontSize: 16 }}>
            <span>{currentDue.month}</span>
            <span style={{ color: 'red', fontWeight: 500 }}>{currentDue.status}</span>
            <span style={{ fontWeight: 600 }}>₹{currentDue.amount}</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="#" style={{ background: '#007bff', color: '#fff', padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 'bold', fontSize: 18, boxShadow: '0 2px 8px #007bff33', display: 'inline-block' }}>
            Make Payment
          </a>
        </div>
      </div>
      <nav style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', background: '#fff', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 64, boxShadow: '0 -2px 8px #0001' }}>
        <button style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#007bff', fontWeight: 500, fontSize: 14 }}>
          <ProfileIcon />
          Profile
        </button>
        <button style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#007bff', fontWeight: 500, fontSize: 14 }}>
          <SettingsIcon />
          Settings
        </button>
      </nav>
    </div>
  );
}

export default App
