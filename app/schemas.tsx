import Script from 'next/script';

export function StructuredData() {
  const eventVenueSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    '@id': 'https://omkarshubhamgarden.github.io/#venue',
    name: 'Omkar Shubham Garden',
    description: 'Premier garden venue near Khanapur for weddings, receptions, engagements, and family celebrations. 15+ years of family trust.',
    url: 'https://omkarshubhamgarden.github.io/',
    image: 'https://omkarshubhamgarden.github.io/images/outdoor-entrance.webp',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 320,
      bestRating: '5',
      worstRating: '1'
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: '100+ spaces' },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: 'Available' },
      { '@type': 'LocationFeatureSpecification', name: 'Catering', value: 'On-site kitchen' }
    ]
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://omkarshubhamgarden.github.io/#organization',
    name: 'Omkar Shubham Garden',
    url: 'https://omkarshubhamgarden.github.io/',
    logo: 'https://omkarshubhamgarden.github.io/images/shubham-omkar-logo.webp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919880975481',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Kannada', 'Marathi']
    },
    sameAs: []
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://omkarshubhamgarden.github.io/#business',
    name: 'Omkar Shubham Garden',
    description: 'Premium celebration venue offering wedding and event spaces for up to 3,000 guests.',
    image: 'https://omkarshubhamgarden.github.io/images/outdoor-entrance.webp',
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
    priceRange: '₹₹₹',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 320
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
        item: 'https://omkarshubhamgarden.github.io/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Venue',
        item: 'https://omkarshubhamgarden.github.io/#venue'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://omkarshubhamgarden.github.io/#contact'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the guest capacity at Omkar Shubham Garden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our venue can accommodate up to 3,000 guests for large celebrations, with various spaces including an open mandap (500 guests), pavilion (800 guests), and dining area (400 seating).'
        }
      },
      {
        '@type': 'Question',
        name: 'How far is Omkar Shubham Garden from Khanapur Railway Station?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located just 2.2 km (5 minutes) from Khanapur Railway Station, making us easily accessible for guests arriving by train.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide parking facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer organized on-site parking for 100+ vehicles with dedicated security stewards.'
        }
      },
      {
        '@type': 'Question',
        name: 'What types of events can be hosted at your venue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We host weddings, receptions, sangeet & haldi ceremonies, engagements, naming ceremonies, milestone birthdays, anniversaries, and corporate gatherings.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is the venue wheelchair accessible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our venue features level pathways, gentle ramps, and wide corridors to ensure accessibility for elderly guests and those with mobility needs.'
        }
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
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
