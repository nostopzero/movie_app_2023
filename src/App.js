import React from 'react';

function Movie({fav}) {
  return <h3>I love {fav}.</h3>;
}

function App() {
  return (
    <div>
      <h1>Helllllllo React</h1>
      <Movie fav="avatar" />
      <Movie fav="criminal" />
      <Movie fav="saw" />
    </div>
  );
}

export default App;
