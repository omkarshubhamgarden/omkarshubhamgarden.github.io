import Script from 'next/script';

export function StructuredData() {
  const eventVenueSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    '@id': 'https://omkarshubhamgarden.com/#venue',
    name: 'Omkar Shubham Garden',
    description: 'Garden celebration venue near Khanapur for weddings, receptions, engagements, and family celebrations.',
    url: 'https://omkarshubhamgarden.com/',
    image: 'https://omkarshubhamgarden.com/images/og-cover.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Ramgurwardi Cross, Jamboti Road',
      addressLocality: 'Khanapur',
      addressRegion: 'Karnataka',
      postalCode: '591302',
      addressCountry: 'IN'
    },
    telephone: '+919880975481',
    email: 'enquiry@omkarshubhamgarden.com',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.6394,
      longitude: 74.5190
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '17:00'
    },
    maximumAttendeeCapacity: 3000,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: '100+ spaces' },
      { '@type': 'LocationFeatureSpecification', name: 'Catering', value: 'Prep area for caterers' }
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://omkarshubhamgarden.com/#organization',
    name: 'Omkar Shubham Garden',
    url: 'https://omkarshubhamgarden.com/',
    logo: 'https://omkarshubhamgarden.com/images/shubham-omkar-logo.webp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919880975481',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Kannada', 'Marathi']
    },
    sameAs: [
      'https://www.instagram.com/omkarshubhamgarden/',
      'https://www.youtube.com/@omkarshubhamgarden'
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://omkarshubhamgarden.com/#business',
    name: 'Omkar Shubham Garden',
    description: 'Celebration venue offering wedding and event spaces for up to 3,000 guests.',
    image: 'https://omkarshubhamgarden.com/images/og-cover.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Ramgurwardi Cross, Jamboti Road',
      addressLocality: 'Khanapur',
      addressRegion: 'Karnataka',
      postalCode: '591302',
      addressCountry: 'IN'
    },
    telephone: '+919880975481',
    email: 'enquiry@omkarshubhamgarden.com',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.6394,
      longitude: 74.5190
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '17:00'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://omkarshubhamgarden.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Venue',
        item: 'https://omkarshubhamgarden.com/#venue'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://omkarshubhamgarden.com/#contact'
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-event-venue"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
