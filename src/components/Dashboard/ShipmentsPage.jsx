// src/components/Dashboard/ShipmentsPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { useAuth } from '../../contexts/FirebaseAuthContext';
import { useLanguage } from '../../contexts/LanguageContext'; // 👈 Add this
import './ShipmentsPage.css';

const ShipmentsPage = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage(); // 👈 Add this
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  });

  // Fetch shipments from Firestore
  useEffect(() => {
    if (!currentUser) return;

    const fetchShipments = async () => {
      try {
        setLoading(true);
        setError('');

        // Query user's shipments
        const q = query(
          collection(db, 'shipments'),
          where('userId', '==', currentUser.uid),
          orderBy('createdAt', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        }));

        setShipments(data);
      } catch (err) {
        console.error('Error fetching shipments:', err);
        setError(t('shipments.errors.fetchFailed')); // 👈 Localized
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, [currentUser, t]); // 👈 Add t to deps

  // Stats
  const stats = useMemo(() => {
    const total = shipments.length;
    const pending = shipments.filter(s => s.status === 'pending').length;
    const inTransit = shipments.filter(s => s.status === 'in_transit').length;
    const delivered = shipments.filter(s => s.status === 'delivered').length;
    const canceled = shipments.filter(s => s.status === 'canceled').length;
    return { total, pending, inTransit, delivered, canceled };
  }, [shipments]);

  // Filtered shipments
  const filteredShipments = useMemo(() => {
    return shipments.filter(ship => {
      const matchesStatus = filters.status === 'all' || ship.status === filters.status;
      const matchesSearch = 
        ship.tracking?.toLowerCase().includes(filters.search.toLowerCase()) ||
        ship.to?.city?.toLowerCase().includes(filters.search.toLowerCase()) ||
        ship.id?.toLowerCase().includes(filters.search.toLowerCase()) ||
        ship.to?.country?.toLowerCase().includes(filters.search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [shipments, filters]);

  const handleStatusChange = (e) => {
    setFilters(prev => ({ ...prev, status: e.target.value }));
  };

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const getStatusBadge = (status) => {
    const config = {
      pending: { text: t('shipments.status.pending'), color: 'warning' },
      in_transit: { text: t('shipments.status.inTransit'), color: 'info' },
      delivered: { text: t('shipments.status.delivered'), color: 'success' },
      canceled: { text: t('shipments.status.canceled'), color: 'danger' }
    };
    return config[status] || config.pending;
  };

  // Export to CSV
  const exportToCSV = () => {
    if (filteredShipments.length === 0) return;

    const headers = [
      t('shipments.csv.id'),
      t('shipments.csv.tracking'),
      t('shipments.csv.from'),
      t('shipments.csv.to'),
      t('shipments.csv.service'),
      t('shipments.csv.weight'),
      t('shipments.csv.date'),
      t('shipments.csv.estDelivery'),
      t('shipments.csv.status')
    ];

    const csvContent = [
      headers.join(','),
      ...filteredShipments.map(ship => [
        ship.id,
        ship.tracking,
        `${ship.from?.city}, ${ship.from?.country}`,
        `${ship.to?.city}, ${ship.to?.country}`,
        ship.service,
        ship.package?.weight || 'N/A',
        ship.createdAt?.toLocaleDateString() || ship.date,
        ship.estimatedDelivery || '—',
        ship.status
      ].map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `swiftshipments_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Print labels
  const printLabels = () => {
    if (filteredShipments.length === 0) return;
    
    const printContent = `
      <html>
        <head>
          <title>${t('shipments.print.title')}</title>
          <style>
            body { font-family: 'Courier New', monospace; margin: 20px; }
            .label { border: 2px solid #333; padding: 15px; margin-bottom: 20px; }
            .tracking { font-size: 24px; font-weight: bold; }
            .address { font-size: 14px; line-height: 1.4; }
            .service { font-size: 16px; font-weight: bold; margin: 10px 0; }
          </style>
        </head>
        <body>
          ${filteredShipments.map(ship => `
            <div class="label">
              <div class="tracking">${t('shipments.print.tracking')}: ${ship.tracking}</div>
              <div class="service">${ship.service.toUpperCase()}</div>
              <div class="address">
                <strong>${t('shipments.print.to')}:</strong><br>
                ${ship.to?.name}<br>
                ${ship.to?.address}<br>
                ${ship.to?.city}, ${ship.to?.zip}<br>
                ${ship.to?.country}
              </div>
            </div>
          `).join('')}
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="shipments-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>{t('shipments.title')}</h1>
          <p>{t('shipments.subtitle')}</p>
        </div>
        <Link to="/dashboard/new-shipment" className="btn-primarys">
          <i className="fas fa-plus"></i> {t('nav.newShipment')}
        </Link>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>{t('shipments.loading')}</p>
        </div>
      )}

      {error && (
        <div className="alert error">
          ❌ {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Summary Stats */}
          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">{t('shipments.stats.total')}</div>
            </div>
            <div className="stat-card warning">
              <div className="stat-value">{stats.pending}</div>
              <div className="stat-label">{t('shipments.stats.pending')}</div>
            </div>
            <div className="stat-card info">
              <div className="stat-value">{stats.inTransit}</div>
              <div className="stat-label">{t('shipments.stats.inTransit')}</div>
            </div>
            <div className="stat-card success">
              <div className="stat-value">{stats.delivered}</div>
              <div className="stat-label">{t('shipments.stats.delivered')}</div>
            </div>
            <div className="stat-card danger">
              <div className="stat-value">{stats.canceled}</div>
              <div className="stat-label">{t('shipments.stats.canceled')}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="controls">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder={t('shipments.search.placeholder')}
                value={filters.search}
                onChange={handleSearchChange}
              />
            </div>
            <div className="filter-group">
              <label>{t('shipments.filter.status')}:</label>
              <select value={filters.status} onChange={handleStatusChange}>
                <option value="all">{t('shipments.filter.allStatuses')}</option>
                <option value="pending">{t('shipments.status.pending')}</option>
                <option value="in_transit">{t('shipments.status.inTransit')}</option>
                <option value="delivered">{t('shipments.status.delivered')}</option>
                <option value="canceled">{t('shipments.status.canceled')}</option>
              </select>
            </div>
            <div className="actions">
              <button className="btn-secondary" onClick={exportToCSV}>
                <i className="fas fa-download"></i> {t('shipments.actions.exportCSV')}
              </button>
              <button className="btn-secondary" onClick={printLabels}>
                <i className="fas fa-print"></i> {t('shipments.actions.printLabels')}
              </button>
            </div>
          </div>

          {/* Shipments Table */}
          <div className="shipments-table">
            <table>
              <thead>
                <tr>
                  <th>{t('shipments.table.id')}</th>
                  <th>{t('shipments.table.tracking')}</th>
                  <th>{t('shipments.table.route')}</th>
                  <th>{t('shipments.table.service')}</th>
                  <th>{t('shipments.table.weight')}</th>
                  <th>{t('shipments.table.date')}</th>
                  <th>{t('shipments.table.estDelivery')}</th>
                  <th>{t('shipments.table.status')}</th>
                  <th>{t('shipments.table.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredShipments.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="no-data">
                      {t('shipments.noData')}
                    </td>
                  </tr>
                ) : (
                  filteredShipments.map(ship => {
                    const badge = getStatusBadge(ship.status);
                    return (
                      <tr key={ship.id}>
                        <td>#{ship.id}</td>
                        <td>
                          <code>{ship.tracking}</code>
                        </td>
                        <td>
                          <div className="route">
                            <span className="from">
                              {ship.from?.city || '—'}{ship.from?.country ? `, ${ship.from.country}` : ''}
                            </span>
                            <span className="arrow">→</span>
                            <span className="to">
                              {ship.to?.city || '—'}{ship.to?.country ? `, ${ship.to.country}` : ''}
                            </span>
                          </div>
                        </td>
                        <td>{ship.service}</td>
                        <td>{ship.package?.weight ? `${ship.package.weight} kg` : '—'}</td>
                        <td>{ship.createdAt?.toLocaleDateString() || '—'}</td>
                        <td>
                          {ship.estimatedDelivery 
                            ? new Date(ship.estimatedDelivery).toLocaleDateString() 
                            : '—'}
                        </td>
                        <td>
                          <span className={`status-badge ${badge.color}`}>
                            {badge.text}
                          </span>
                        </td>
                        <td>
                          <Link to={`/dashboard/tracking?tracking=${ship.tracking}`} className="btn-small">
                            {t('shipments.actions.track')}
                          </Link>
                          <button className="btn-small btn-secondary">{t('shipments.actions.details')}</button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ShipmentsPage;



// // src/components/Dashboard/ShipmentsPage.jsx
// import React, { useState, useEffect, useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { db } from '../../lib/firebase';
// import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
// import { useAuth } from '../../contexts/FirebaseAuthContext';
// import './ShipmentsPage.css';

// const ShipmentsPage = () => {
//   const { currentUser } = useAuth();
//   const [shipments, setShipments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     status: 'all',
//     search: ''
//   });

//   // Fetch shipments from Firestore
//   useEffect(() => {
//     if (!currentUser) return;

//     const fetchShipments = async () => {
//       try {
//         setLoading(true);
//         setError('');

//         // Query user's shipments
//         const q = query(
//           collection(db, 'shipments'),
//           where('userId', '==', currentUser.uid),
//           orderBy('createdAt', 'desc')
//         );

//         const querySnapshot = await getDocs(q);
//         const data = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//           createdAt: doc.data().createdAt?.toDate() || new Date()
//         }));

//         setShipments(data);
//       } catch (err) {
//         console.error('Error fetching shipments:', err);
//         setError('Failed to load shipments. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShipments();
//   }, [currentUser]);

//   // Stats
//   const stats = useMemo(() => {
//     const total = shipments.length;
//     const pending = shipments.filter(s => s.status === 'pending').length;
//     const inTransit = shipments.filter(s => s.status === 'in_transit').length;
//     const delivered = shipments.filter(s => s.status === 'delivered').length;
//     const canceled = shipments.filter(s => s.status === 'canceled').length;
//     return { total, pending, inTransit, delivered, canceled };
//   }, [shipments]);

//   // Filtered shipments
//   const filteredShipments = useMemo(() => {
//     return shipments.filter(ship => {
//       const matchesStatus = filters.status === 'all' || ship.status === filters.status;
//       const matchesSearch = 
//         ship.tracking?.toLowerCase().includes(filters.search.toLowerCase()) ||
//         ship.to?.city?.toLowerCase().includes(filters.search.toLowerCase()) ||
//         ship.id?.toLowerCase().includes(filters.search.toLowerCase()) ||
//         ship.to?.country?.toLowerCase().includes(filters.search.toLowerCase());
//       return matchesStatus && matchesSearch;
//     });
//   }, [shipments, filters]);

//   const handleStatusChange = (e) => {
//     setFilters(prev => ({ ...prev, status: e.target.value }));
//   };

//   const handleSearchChange = (e) => {
//     setFilters(prev => ({ ...prev, search: e.target.value }));
//   };

//   const getStatusBadge = (status) => {
//     const config = {
//       pending: { text: 'Pending', color: 'warning' },
//       in_transit: { text: 'In Transit', color: 'info' },
//       delivered: { text: 'Delivered', color: 'success' },
//       canceled: { text: 'Canceled', color: 'danger' }
//     };
//     return config[status] || config.pending;
//   };

//   //   Export to CSV
//   const exportToCSV = () => {
//     if (filteredShipments.length === 0) return;

//     const headers = [
//       'ID', 'Tracking', 'From', 'To', 'Service', 'Weight (kg)',
//       'Date', 'Est. Delivery', 'Status'
//     ];

//     const csvContent = [
//       headers.join(','),
//       ...filteredShipments.map(ship => [
//         ship.id,
//         ship.tracking,
//         `${ship.from?.city}, ${ship.from?.country}`,
//         `${ship.to?.city}, ${ship.to?.country}`,
//         ship.service,
//         ship.package?.weight || 'N/A',
//         ship.createdAt?.toLocaleDateString() || ship.date,
//         ship.estimatedDelivery || '—',
//         ship.status
//       ].map(field => `"${field}"`).join(','))
//     ].join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.setAttribute('href', url);
//     link.setAttribute('download', `swiftshipments_${new Date().toISOString().slice(0,10)}.csv`);
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   //   Print labels
//   const printLabels = () => {
//     if (filteredShipments.length === 0) return;
    
//     const printContent = `
//       <html>
//         <head>
//           <title>SwiftParcel Labels</title>
//           <style>
//             body { font-family: 'Courier New', monospace; margin: 20px; }
//             .label { border: 2px solid #333; padding: 15px; margin-bottom: 20px; }
//             .tracking { font-size: 24px; font-weight: bold; }
//             .address { font-size: 14px; line-height: 1.4; }
//             .service { font-size: 16px; font-weight: bold; margin: 10px 0; }
//           </style>
//         </head>
//         <body>
//           ${filteredShipments.map(ship => `
//             <div class="label">
//               <div class="tracking">Tracking: ${ship.tracking}</div>
//               <div class="service">${ship.service.toUpperCase()}</div>
//               <div class="address">
//                 <strong>To:</strong><br>
//                 ${ship.to?.name}<br>
//                 ${ship.to?.address}<br>
//                 ${ship.to?.city}, ${ship.to?.zip}<br>
//                 ${ship.to?.country}
//               </div>
//             </div>
//           `).join('')}
//         </body>
//       </html>
//     `;

//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
//   };

//   return (
//     <div className="shipments-page">
//       {/* Header */}
//       <div className="page-header">
//         <div>
//           <h1>Shipments</h1>
//           <p>Manage and track all your deliveries in one place</p>
//         </div>
//         <Link to="/dashboard/new-shipment" className="btn-primarys">
//           <i className="fas fa-plus"></i> New Shipment
//         </Link>
//       </div>

//       {/* Loading & Error States */}
//       {loading && (
//         <div className="loading-state">
//           <div className="spinner"></div>
//           <p>Loading shipments...</p>
//         </div>
//       )}

//       {error && (
//         <div className="alert error">
//           ❌ {error}
//         </div>
//       )}

//       {!loading && !error && (
//         <>
//           {/* Summary Stats */}
//           <div className="summary-stats">
//             <div className="stat-card">
//               <div className="stat-value">{stats.total}</div>
//               <div className="stat-label">Total Shipments</div>
//             </div>
//             <div className="stat-card warning">
//               <div className="stat-value">{stats.pending}</div>
//               <div className="stat-label">Pending</div>
//             </div>
//             <div className="stat-card info">
//               <div className="stat-value">{stats.inTransit}</div>
//               <div className="stat-label">In Transit</div>
//             </div>
//             <div className="stat-card success">
//               <div className="stat-value">{stats.delivered}</div>
//               <div className="stat-label">Delivered</div>
//             </div>
//             <div className="stat-card danger">
//               <div className="stat-value">{stats.canceled}</div>
//               <div className="stat-label">Canceled</div>
//             </div>
//           </div>

//           {/* Controls */}
//           <div className="controls">
//             <div className="search-bar">
//               <i className="fas fa-search"></i>
//               <input
//                 type="text"
//                 placeholder="Search by tracking ID, destination..."
//                 value={filters.search}
//                 onChange={handleSearchChange}
//               />
//             </div>
//             <div className="filter-group">
//               <label>Status:</label>
//               <select value={filters.status} onChange={handleStatusChange}>
//                 <option value="all">All Statuses</option>
//                 <option value="pending">Pending</option>
//                 <option value="in_transit">In Transit</option>
//                 <option value="delivered">Delivered</option>
//                 <option value="canceled">Canceled</option>
//               </select>
//             </div>
//             <div className="actions">
//               <button className="btn-secondary" onClick={exportToCSV}>
//                 <i className="fas fa-download"></i> Export CSV
//               </button>
//               <button className="btn-secondary" onClick={printLabels}>
//                 <i className="fas fa-print"></i> Print Labels
//               </button>
//             </div>
//           </div>

//           {/* Shipments Table */}
//           <div className="shipments-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Shipment ID</th>
//                   <th>Tracking</th>
//                   <th>Route</th>
//                   <th>Service</th>
//                   <th>Weight</th>
//                   <th>Date</th>
//                   <th>Est. Delivery</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredShipments.length === 0 ? (
//                   <tr>
//                     <td colSpan="9" className="no-data">
//                       No shipments found. Try adjusting your filters.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredShipments.map(ship => {
//                     const badge = getStatusBadge(ship.status);
//                     return (
//                       <tr key={ship.id}>
//                         <td>#{ship.id}</td>
//                         <td>
//                           <code>{ship.tracking}</code>
//                         </td>
//                         <td>
//                           <div className="route">
//                             <span className="from">
//                               {ship.from?.city || '—'}{ship.from?.country ? `, ${ship.from.country}` : ''}
//                             </span>
//                             <span className="arrow">→</span>
//                             <span className="to">
//                               {ship.to?.city || '—'}{ship.to?.country ? `, ${ship.to.country}` : ''}
//                             </span>
//                           </div>
//                         </td>
//                         <td>{ship.service}</td>
//                         <td>{ship.package?.weight ? `${ship.package.weight} kg` : '—'}</td>
//                         <td>{ship.createdAt?.toLocaleDateString() || '—'}</td>
//                         <td>
//                           {ship.estimatedDelivery 
//                             ? new Date(ship.estimatedDelivery).toLocaleDateString() 
//                             : '—'}
//                         </td>
//                         <td>
//                           <span className={`status-badge ${badge.color}`}>
//                             {badge.text}
//                           </span>
//                         </td>
//                         <td>
//                           <Link to={`/dashboard/tracking?tracking=${ship.tracking}`} className="btn-small">
//                             Track
//                           </Link>
//                           <button className="btn-small btn-secondary">Details</button>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ShipmentsPage;












