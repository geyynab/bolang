// File: AdminPage.js
import React, { useState } from 'react';
import '../styles/admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const dummyData = [
  {
    id: 1,
    name: 'Surabaya Zoo',
    jam: '08.00–16.00',
    tiket: 'Rp. 15.000',
    akses: 'Tersedia',
    operation: true
  },
  {
    id: 2,
    name: 'Taman Bungkul',
    jam: '06.00–20.00',
    tiket: 'Gratis',
    akses: 'Tidak Tersedia',
    operation: true
  },
  {
    id: 3,
    name: 'Museum 10 Nopember',
    jam: '09.00–15.00',
    tiket: 'Rp. 10.000',
    akses: 'Tersedia',
    operation: false
  },
];

function AdminPage() {
  const [search, setSearch] = useState('');

  const filteredData = dummyData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-wrapper">
      <div className="admin-sidebar">
        <h2>Data Statistik</h2>
      </div>

      <div className="admin-content">
        <div className="admin-header-spacer"></div>

        <input
          type="text"
          className="search-bar"
          placeholder="Cari tempat wisata..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="admin-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jam Operasional</th>
              <th>Tiket</th>
              <th>Akses Disabilitas</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.jam}</td>
                <td>{item.tiket}</td>
                <td>
                  {item.akses === 'Tersedia' ? (
                    <i className="fas fa-check-circle text-green" title="Tersedia"></i>
                  ) : (
                    <i className="fas fa-times-circle text-red" title="Tidak Tersedia"></i>
                  )}
                </td>
                <td>
                  <i className="fas fa-pen clickable" onClick={() => alert(`Edit item dengan ID: ${item.id}`)}></i>
                  <i className="fas fa-trash clickable" onClick={() => alert(`Hapus item dengan ID: ${item.id}`)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
