import React from 'react';

const LinksSection = () => (
  <section className="links">
    <div className="links-inner">
      {[
        {
          title: "What's New",
          links: ['Surface Pro X', 'Surface Laptop 3', 'Surface Pro 7', 'Windows 10 apps', 'Office apps'],
        },
        {
          title: 'Microsoft Store',
          links: ['Account Profile', 'Download Center', 'Microsoft Store support', 'Returns', 'Order tracking'],
        },
        {
          title: 'Education',
          links: [
            'Microsoft in education',
            'Office for students',
            'Office 365 for schools',
            'Deals for students',
            'Microsoft Azure',
          ],
        },
      ].map((section, index) => (
        <ul key={index}>
          <li>
            <h3>{section.title}</h3>
          </li>
          {section.links.map((link, idx) => (
            <li key={idx}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default LinksSection;
