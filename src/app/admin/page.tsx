"use client";

import { useState } from 'react';
import { Users, BookOpen, Briefcase, TrendingUp, BarChart, Settings, Mail } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: "Total Leads", value: "148", trend: "+12%" },
    { label: "Active Clients", value: "32", trend: "+5%" },
    { label: "Website Traffic", value: "12.4k", trend: "+24%" },
    { label: "Consultation Bookings", value: "24", trend: "+18%" }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--premium-black)', paddingTop: '80px' }}>
      
      {/* Admin Sidebar */}
      <div style={{ width: '280px', borderRight: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: '1.5rem', marginBottom: '8px' }}>Nexo Admin</h2>
          <p style={{ color: 'var(--success)', fontSize: '0.85rem' }}>● Online</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setActiveTab('overview')} style={getTabStyle(activeTab === 'overview')}><BarChart size={18}/> Overview</button>
          <button onClick={() => setActiveTab('leads')} style={getTabStyle(activeTab === 'leads')}><Mail size={18}/> Lead Management</button>
          <button onClick={() => setActiveTab('clients')} style={getTabStyle(activeTab === 'clients')}><Users size={18}/> Client Management</button>
          <button onClick={() => setActiveTab('settings')} style={getTabStyle(activeTab === 'settings')}><Settings size={18}/> Settings</button>
        </nav>
      </div>

      {/* Admin Content */}
      <div style={{ flex: 1, padding: '40px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '32px', color: 'var(--white)' }}>
          Dashboard Overview
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel" style={{ padding: '24px' }}>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '8px' }}>{stat.label}</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)' }}>{stat.value}</span>
                <span style={{ color: 'var(--success)', fontSize: '0.9rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={14}/> {stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '32px', minHeight: '400px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--white)' }}>Recent Leads / Bookings</h3>
            <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>View All</button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--white)', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--muted-text)' }}>
                <th style={{ padding: '12px 0', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '12px 0', fontWeight: 500 }}>Service</th>
                <th style={{ padding: '12px 0', fontWeight: 500 }}>Date</th>
                <th style={{ padding: '12px 0', fontWeight: 500 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px 0' }}>Rahul Sharma</td>
                <td style={{ padding: '16px 0' }}>SEO Audit</td>
                <td style={{ padding: '16px 0', color: 'var(--muted-text)' }}>May 28, 2026</td>
                <td style={{ padding: '16px 0' }}><span style={statusStyle('new')}>New</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px 0' }}>Priya Reddy</td>
                <td style={{ padding: '16px 0' }}>Meta Ads</td>
                <td style={{ padding: '16px 0', color: 'var(--muted-text)' }}>May 27, 2026</td>
                <td style={{ padding: '16px 0' }}><span style={statusStyle('contacted')}>Contacted</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px 0' }}>TechStart Solutions</td>
                <td style={{ padding: '16px 0' }}>Web Development</td>
                <td style={{ padding: '16px 0', color: 'var(--muted-text)' }}>May 26, 2026</td>
                <td style={{ padding: '16px 0' }}><span style={statusStyle('closed')}>Closed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const getTabStyle = (isActive: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  borderRadius: '8px',
  background: isActive ? 'var(--primary-blue)' : 'transparent',
  color: isActive ? 'var(--white)' : 'var(--muted-text)',
  textAlign: 'left' as const,
  width: '100%',
  transition: 'all 0.2s ease'
});

const statusStyle = (status: string) => {
  let bg = '';
  let color = '';
  if (status === 'new') {
    bg = 'rgba(0, 102, 255, 0.1)';
    color = 'var(--primary-blue)';
  } else if (status === 'contacted') {
    bg = 'rgba(255, 122, 0, 0.1)';
    color = 'var(--accent-orange)';
  } else if (status === 'closed') {
    bg = 'rgba(34, 197, 94, 0.1)';
    color = 'var(--success)';
  }

  return {
    padding: '4px 12px',
    borderRadius: '20px',
    background: bg,
    color: color,
    fontSize: '0.85rem',
    fontWeight: 600
  };
};
