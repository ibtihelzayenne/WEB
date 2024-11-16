import React from 'react';

const App = () => {
  return (
    <div className="container">
      {/* Colonne 1 */}
      <div className="column">
        <div className="large-block"></div>
        <div className="large-block"></div>
      </div>

      {/* Colonne 2 */}
      <div className="column">
        <div className="large-block"></div>
        <div className="large-block"></div>
      </div>

      {/* Colonne 3 - Barre latérale */}
      <div className="sidebar">
        <div className="small-block"></div>
        <div className="small-block"></div>
        <div className="small-block"></div>
        <div className="small-block"></div>
      </div>
    </div>
  );
};

export default App;
