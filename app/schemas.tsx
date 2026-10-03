// JSON-LD is emitted as plain <script type="application/ld+json"> tags rather than
// via next/script. next/script defaults to the `afterInteractive` strategy, which
// only serialises the payload into the RSC flight data and injects the tag from
// client JS — so crawlers reading the static HTML never saw the structured data.
// Plain script tags are server-rendered into out/index.html.
export function StructuredData() {
  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: 320,
    bestRating: '5',
    worstRating: '1',
  };

  const reviews = [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Mahesh Kulkarni' },
      datePublished: '2025-11',
      reviewBody:
        "Omkar Shubham Garden made our daughter's wedding truly magical. The open lawn at night with warm lighting was breathtaking. Ample parking made it so easy for guests arriving from Belagavi and Goa.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Priya & Rahul Patil' },
      datePublished: '2026-01',
      reviewBody:
        'The staff is exceptionally helpful and cooperative. Having both an open lawn and a covered pavilion saved us when evening breeze turned cool. Clean restrooms and smooth dining management!',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Suresh Naik' },
      datePublished: '2025-12',
      reviewBody:
        'Quiet location just outside Khanapur town away from city noise. Surrounded by green trees, very serene atmosphere. All our family members complimented the venue choice.',
    },
  ];

  const amenityFeature = [
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: '100+ vehicle spaces' },
    { '@type': 'LocationFeatureSpecification', name: 'Generator Backup', value: '100% uninterrupted power backup' },
    { '@type': 'LocationFeatureSpecification', name: 'Bridal Suite', value: 'Bridal and groom dressing suites' },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: 'true' },
    { '@type': 'LocationFeatureSpecification', name: 'Overnight Stay', value: 'Accommodation for up to 100 guests' },
    { '@type': 'LocationFeatureSpecification', name: 'Catering Kitchen', value: 'Full prep area — serves up to 2,000 guests' },
    { '@type': 'LocationFeatureSpecification', name: 'Seating Included', value: '2 Maharaja chairs, 600 plastic chairs' },
    { '@type': 'LocationFeatureSpecification', name: 'Dining Tables Included', value: '30 dining tables' },
    { '@type': 'LocationFeatureSpecification', name: 'Ceremonial Items', value: 'Homkund fire pit, 4 Paat platforms' },
  ];

  const eventVenueSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    '@id': 'https://omkarshubhamgarden.com/#venue',
    name: 'Omkar Shubham Garden',
    alternateName: [
      'Shubham Garden Khanapur',
      'Omkar Garden',
      'Khanapur Garden Venue',
      'Omkar Shubham',
    ],
    description:
      'Omkar Shubham Garden is a premier wedding and celebration venue near Khanapur, Karnataka with over 15 years of experience hosting weddings, receptions, sangeet, haldi ceremonies, and family functions for up to 3,000 guests. Open garden with areca palm canopy, covered pavilion, 100+ parking, 100% generator backup.',
    url: 'https://omkarshubhamgarden.com/',
    image: [
      'https://omkarshubhamgarden.com/images/og-cover.jpg',
      'https://omkarshubhamgarden.com/images/outdoor-entrance.webp',
      'https://omkarshubhamgarden.com/images/stage-decor.webp',
      'https://omkarshubhamgarden.com/images/family-event.webp',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Ramgurwardi Cross, Jamboti Road',
      addressLocality: 'Khanapur',
      addressRegion: 'Karnataka',
      postalCode: '591302',
      addressCountry: 'IN',
    },
    telephone: '+919880975481',
    email: 'enquiry@omkarshubhamgarden.com',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.6394,
      longitude: 74.519,
    },
    hasMap: 'https://maps.google.com/?q=Omkar+Shubham+Garden+Khanapur+Jamboti+Road',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '17:00',
    },
    maximumAttendeeCapacity: 3000,
    aggregateRating,
    review: reviews,
    amenityFeature,
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': 'https://omkarshubhamgarden.com/#business',
    name: 'Omkar Shubham Garden',
    alternateName: [
      'Shubham Garden',
      'Omkar Garden Khanapur',
      'Khanapur Banquet Hall',
      'Khanapur Marriage Hall',
      'Khanapur Kalyana Mantapa',
      'Jamboti Road Function Hall',
    ],
    description:
      'Wedding venue and banquet hall in Khanapur, Karnataka. Open garden venue with covered pavilion for weddings, receptions, and family functions. Capacity up to 3,000 guests. 100+ parking. 4.9 star rated. 15+ years of family trust.',
    image: 'https://omkarshubhamgarden.com/images/og-cover.jpg',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Ramgurwardi Cross, Jamboti Road',
      addressLocality: 'Khanapur',
      addressRegion: 'Karnataka',
      postalCode: '591302',
      addressCountry: 'IN',
    },
    telephone: '+919880975481',
    email: 'enquiry@omkarshubhamgarden.com',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.6394,
      longitude: 74.519,
    },
    url: 'https://omkarshubhamgarden.com/',
    hasMap: 'https://maps.google.com/?q=Omkar+Shubham+Garden+Khanapur+Jamboti+Road',
    sameAs: [
      'https://www.instagram.com/omkarshubhamgarden/',
      'https://www.youtube.com/@omkarshubhamgarden',
      'https://www.facebook.com/omkarshubhamgarden/',
      'https://x.com/omshubhamgarden',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '17:00',
    },
    aggregateRating,
    review: reviews,
    amenityFeature,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    areaServed: [
      { '@type': 'City', name: 'Khanapur' },
      { '@type': 'City', name: 'Belagavi' },
      { '@type': 'City', name: 'Belgaum' },
      { '@type': 'State', name: 'Karnataka' },
      { '@type': 'State', name: 'Goa' },
      { '@type': 'State', name: 'Maharashtra' },
    ],
    knowsAbout: [
      'Wedding Venue',
      'Banquet Hall',
      'Marriage Hall',
      'Kalyana Mantapa',
      'Function Hall',
      'Garden Wedding',
      'Reception Venue',
      'Sangeet Venue',
      'Haldi Ceremony',
      'Engagement Ceremony',
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://omkarshubhamgarden.com/#organization',
    name: 'Omkar Shubham Garden',
    url: 'https://omkarshubhamgarden.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://omkarshubhamgarden.com/images/shubham-omkar-logo.webp',
      width: 600,
      height: 600,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+919880975481',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada', 'Marathi'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '17:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919901643802',
        contactType: 'Sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Kannada', 'Marathi'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/omkarshubhamgarden/',
      'https://www.youtube.com/@omkarshubhamgarden',
      'https://www.facebook.com/omkarshubhamgarden/',
      'https://x.com/omshubhamgarden',
    ],
    foundingDate: '2010',
  };

  // FIXED: BreadcrumbList now contains only the canonical root URL.
  // Previously it contained #contact and #venue fragment URLs which
  // Google was indexing as separate pages (confirmed in Search Console:
  // 16 impressions, 0 clicks at position 15 for the fragment URL).
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Omkar Shubham Garden — Wedding & Celebration Venue Khanapur',
        item: 'https://omkarshubhamgarden.com/',
      },
    ],
  };

  // FAQPage targets real "banquet hall near me" and local search intents.
  // Per Google Search Central guidelines, each Q&A must reflect real visible
  // page content — every answer below corresponds to content already on the site.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the maximum guest capacity at Omkar Shubham Garden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Omkar Shubham Garden accommodates up to 3,000 guests. The Open Mandap holds 500 guests in 5,000 sq ft; the Pavilion holds 800 guests; the Haldi Ceremony Reception seats 500; and the Dining Area seats 400 guests.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Omkar Shubham Garden located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Omkar Shubham Garden is near Ramgurwardi Cross, Jamboti Road, Khanapur, Karnataka 591302. It is 1.5 km from Khanapur town, 2.2 km from Khanapur Railway Station, 28 km from Belagavi city, 38 km from Belagavi Airport (Sambra, IATA: IXG), and 35 km from Goa via Chorla Ghat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Omkar Shubham Garden available for weddings and marriage functions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Omkar Shubham Garden hosts weddings (Vivaha), wedding receptions, engagement ceremonies, Sangeet nights, Haldi ceremonies, milestone birthdays, anniversary celebrations, and corporate gatherings. Over 1,500 functions in 15+ years. Rating: 4.9/5 from 320+ Google reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the booking advance and payment terms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hall reservation covers 6:00 PM to 4:00 PM the following day. 50% of the total amount is due at booking; the remaining balance is due when the hall is handed over. Contact +91 98809 75481 or enquiry@omkarshubhamgarden.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Omkar Shubham Garden have parking facilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, organized on-site parking for 100+ vehicles with dedicated security stewards. The venue is easily accessible for luxury buses and private cars from Belagavi, Goa, and Maharashtra.',
        },
      },
      {
        '@type': 'Question',
        name: 'What facilities are included in the Omkar Shubham Garden booking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Included: 2 Maharaja chairs and 600 plastic chairs, catering utensils for up to 2,000 guests, cooking stoves, 30 dining tables, the Homkund sacred fire pit, and 4 Paat platforms. Available on request: 100% generator power backup, bridal and groom dressing suites, wheelchair-accessible pathways, overnight accommodation for 100 guests, and a catering prep kitchen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is the best banquet hall near Khanapur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Omkar Shubham Garden is the top-rated celebration venue near Khanapur with a 4.9/5 Google rating from 320+ reviews. It is an open garden banquet hall with covered pavilion on Jamboti Road — the most trusted wedding and event venue in Khanapur for 15+ years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there overnight accommodation at Omkar Shubham Garden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Omkar Shubham Garden offers overnight stay accommodation for up to 100 guests. Guests are responsible for their own valuables; personal locks are recommended for room doors.',
        },
      },
    ],
  };

  const blocks = [eventVenueSchema, organizationSchema, localBusinessSchema, breadcrumbSchema, faqSchema];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
