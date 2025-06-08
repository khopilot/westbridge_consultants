import React from 'react'
import './styles/ContactMap.css'

const ContactMap: React.FC = () => {
  const locations = [
    {
      name: 'Phnom Penh Office',
      address: 'BKK 1, Khan Chamkar Mon, Phnom Penh',
      mapUrl: 'https://maps.google.com/?q=BKK+1+Khan+Chamkar+Mon+Phnom+Penh+Cambodia',
      isMain: true
    },
    {
      name: 'Siem Reap Office',
      address: 'Sivatha Boulevard, Siem Reap',
      mapUrl: 'https://maps.google.com/?q=Sivatha+Boulevard+Siem+Reap+Cambodia',
      isMain: false
    }
  ]

  return (
    <section className="contact-map">
      <div className="container">
        <div className="contact-map__header fade-up">
          <div className="map-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Locations</span>
          </div>
          <h3>Visit Our Offices</h3>
          <p>We're strategically located across Cambodia to serve you better</p>
        </div>

        <div className="contact-map__content fade-up">
          <div className="location-cards">
            {locations.map((location, index) => (
              <div key={index} className={`location-card ${location.isMain ? 'location-card--main' : ''}`}>
                <div className="location-card__header">
                  <h4>{location.name}</h4>
                  {location.isMain && <span className="main-badge">Main Office</span>}
                </div>
                <p className="location-card__address">{location.address}</p>
                <a 
                  href={location.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="location-card__action"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="2,6 10,13 18,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 18H21L18 21L15 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>View on Maps</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="map-placeholder">
            <div className="map-content">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4>Interactive Map</h4>
              <p>Discover our locations and plan your visit</p>
              <a 
                href="https://maps.google.com/?q=Cambodia+business+district" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-cta"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap 