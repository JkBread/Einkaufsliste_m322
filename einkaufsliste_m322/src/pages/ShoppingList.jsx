import React, { useState } from 'react';

function ShoppingList({ shoppingItems, setShoppingItems }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const toggleStatus = (id) => {
    setShoppingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  const filteredItems = shoppingItems
    // 1. Nach Status filtern
    .filter((item) => {
      if (filter === 'open') return !item.status;
      if (filter === 'bought') return item.status;
      return true; // 'all'
    })
    // 2. Nach Titel suchen (falls der Titel existiert)
    .filter((item) => {
      const title = item.productTitle || item.name || '';
      return title.toLowerCase().includes(searchQuery.toLowerCase().trim());
    })

  return (
    <div>
      <h1>Shopping List</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search in shopping list..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All ({shoppingItems.length})
          </button>
          <button 
            className={filter === 'open' ? 'active' : ''} 
            onClick={() => setFilter('open')}
          >
            Not yet bought ({shoppingItems.filter(i => !i.status).length})
          </button>
          <button 
            className={filter === 'bought' ? 'active' : ''} 
            onClick={() => setFilter('bought')}
          >
            Bought ({shoppingItems.filter(i => i.status).length})
          </button>
        </div>
        {filteredItems.length === 0 ? (
        <p>No shopping items found.</p>
      ) : (
        <ul className="shopping-list">
          {filteredItems.map((item) => (
            <li 
              key={item.id} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '8px',
                opacity: item.status ? 0.6 : 1
              }}
            >
              {/* Checkbox zum Abhaken */}
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => toggleStatus(item.id)}
              />

              {/* Titel & Details */}
              <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
}

export default ShoppingList;