import React, { useState } from 'react';

function GreetingComponent() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Show greeting only if name is not empty */}
      {name.trim() !== '' && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default GreetingComponent;

