import React, { useState } from 'react';
import './production.css';

const Production = () => {
    const [selectedPlant, setSelectedPlant] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);

    const plantFilters = ['Plant 1', 'Plant 2', 'Plant 3'];
    const itemFilters = ['Item 101', 'Item 102', 'Item 103'];

    const handleFilterClick = (filterType) => {
        setActiveFilter(activeFilter === filterType ? null : filterType);
    };

    const handleOptionSelect = (option, filterType) => {
        if (filterType === 'plant') {
            setSelectedPlant(option);
        } else {
            setSelectedItem(option);
        }
        setActiveFilter(null);
    };

    return (
        <div className="production-page">
        <div className="top-section">
            <div className="top-left-section">
              <div className="Latest-SchedDate">
                <h2>Latest Schedule Date for Items</h2>

                <div className="filter-buttons">
                  <div className="filter-container">
                    <button 
                      className="Filter_1" 
                      onClick={() => handleFilterClick('plant')}
                    >
                      Plant: {selectedPlant || 'Select'}
                    </button>
                    {activeFilter === 'plant' && (
                      <ul className="filter-list">
                        {plantFilters.map((plant) => (
                          <li key={plant} onClick={() => handleOptionSelect(plant, 'plant')}>
                            {plant}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="filter-container">
                    <button 
                      className="Filter_1" 
                      onClick={() => handleFilterClick('item')}
                    >
                      Item No.: {selectedItem || 'Select'}
                    </button>
                    {activeFilter === 'item' && (
                      <ul className="filter-list">
                        {itemFilters.map((item) => (
                          <li key={item} onClick={() => handleOptionSelect(item, 'item')}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

              {/* Rest of the layout */}
              <div className="top-right-section">
                <div className="button-container">
                  <button className="filter-button">Filter By Period</button>
                  <button className="export-button">Export Data</button>
                </div>
                <div className="total-production-week">
                  <h3>Total Production this week</h3>
                  {/* Add your content here */}
                </div>
                <div className="plant-high-prod">
                  <h3>Plant with highest production this week</h3>
                  {/* Add your content here */}
                </div>
              </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="bottom-left-section">
              <div className="prod-before-holidays">
                  <h2>Production Before Holidays</h2>
                  {/* Add your data visualization or content here */}
              </div>
            </div>
            <div className="bottom-right-section">
              <div className="prod-over-periods">
                  <h2>Production Over Periods</h2>
                  {/* Add your data visualization or content here */}
              </div>
            </div>
          </div>
      </div>
    );
  };

export default Production;
