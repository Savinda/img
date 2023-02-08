import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Page() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/savayer/demo/posts');
      const data = await response.json();
      setCards(data);
    }
    fetchData();
  }, []);

  function handleClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <div>
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title.en}
            linkTitle={item.link_title}
            href={item.link}
            text={item.body ? item.body.en.substr(0, 50) + '...' : ''}
            linkClassName={item.id === 1 ? 'card__link--red' : ''}
            target={item.id === 1 ? '_blank' : ''}
            onClick={() => handleClick(item.link)}
          />
        );
      })}
    </div>
  );
}

export default Page;
