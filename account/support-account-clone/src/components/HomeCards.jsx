import React from 'react';

const HomeCards = () => {
  const cards = [
    {
      img: 'https://i.ibb.co/LZPVKq9/card1.png',
      title: 'New Surface Pro 7',
      description:
        'See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play.',
      link: '#',
    },
    {
      img: 'https://i.ibb.co/KjGFHVJ/card2.png',
      title: 'New Surface Laptop 3',
      description:
        'Express yourself powerfully with a thin, light, and elegant design, faster performance, and up to 11.5 hours battery life.',
      link: '#',
    },
    {
      img: 'https://i.ibb.co/2cnshH6/card3.png',
      title: 'Save $150 + free controller',
      description:
        'Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349.',
      link: '#',
    },
    {
      img: 'https://i.ibb.co/G57P0Pb/card4.png',
      title: 'The new Microsoft Edge',
      description:
        'Expect more. World class performance, with more privacy, more productivity, and more value.',
      link: '#',
    },
  ];

  return (
    <section className="home-cards">
      {cards.map((card, index) => (
        <div key={index}>
          <img src={card.img} alt="" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href={card.link}>Learn More <i className="fas fa-chevron-right"></i></a>
        </div>
      ))}
    </section>
  );
};

export default HomeCards;
