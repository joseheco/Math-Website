import React, { useState, useEffect } from 'react';

const Quote = () => (
  <div className="quotes-div">
    <Phrases />
  </div>
);

const Phrases = () => {
  const url = 'https://random-math-quote-api.herokuapp.com/';
  const [list, setList] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const respondeJSON = await response.json();
    setList(respondeJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <p className="quotes">
        { !list ? 'Loading..' : list.quote}
        -
        { !list ? 'Author' : list.author}
      </p>
    </>
  );
};

export default Quote;
