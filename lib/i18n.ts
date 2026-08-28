export type LanguageCode = 'en' | 'hi' | 'mr' | 'kn';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  /** Compact label shown inside the fixed-header language pill. */
  shortLabel?: string;
  fontClass?: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', shortLabel: 'EN' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', shortLabel: 'हिंदी', fontClass: 'font-devanagari' },
  { code: 'mr', label: 'Marathi', nativeName: 'मराठी', shortLabel: 'मराठी', fontClass: 'font-devanagari' },
  { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ', shortLabel: 'ಕನ್ನಡ', fontClass: 'font-kannada' },
];

export const translations: Record<LanguageCode, Record<string, any>> = {
  en: {
    nav: {
      home: 'Home',
      story: 'Story',
      spaces: 'Spaces',
      celebrations: 'Celebrations',
      gallery: 'Gallery',
      amenities: 'Amenities',
      reviews: 'Reviews',
      location: 'Location',
      contact: 'Contact',
      planCTA: 'Plan Your Celebration',
    },
    hero: {
      eyebrow: 'Near Ramgurwardi Cross • Jamboti Road, Khanapur',
      title: 'Where Life’s Most Meaningful Celebrations Naturally Belong',
      subtitle: 'A quiet, nature-framed celebration sanctuary surrounded by Areca palm groves for evening family functions with Garden. Welcoming families for weddings, receptions, and timeless milestones.',
      ctaPrimary: 'Plan Your Celebration',
      ctaSecondary: 'Explore Venue Spaces',
      ctaDates: 'Check Availability',
      droneBadge: 'Drone Aerial View Ready',
      locationBadge: '1.5 km from Khanapur town',
    },
    story: {
      eyebrow: 'Heritage & Philosophy',
      title: 'A Natural Sanctuary Built on 15+ Years of Family Trust',
      p1: 'For 15+ years, Omkar Shubham Garden has been the tranquil backdrop to generations of love stories, sacred vows, and joyous family reunions. Situated 1.5 km from Khanapur on Jamboti Road, our venue is crafted for open-garden family functions with warm natural surroundings and thoughtful, seamless hospitality.',
      p2: 'Surrounded by towering Areca palms and framed by the fresh breezes of the Western Ghats region, we provide the canvas—you create the memories that last a lifetime.',
      stat1Number: '3,000+',
      stat2Number: '1,500+',
      stat1Label: 'Guests Capacity',
      stat2Label: 'Functions Hosted',
      stat3Number: '4.9 ★',
      stat3Label: 'Google Rating',
      stat4Number: '100+',
      stat4Label: 'Parking Spaces',
    },
    spaces: {
      eyebrow: 'The Venue Spaces',
      title: 'Thoughtfully Composed for Every Moment',
      subtitle: 'Explore four venue configurations for evening family functions with Garden, from Lawn 200+ gatherings to Hall guest 1000+ celebrations.',
      items: [
        {
          id: 'open-mandap',
          name: 'Open Mandap',
          capacity: 'Up to 500 Guests',
          area: '5000 sq ft',
          desc: 'An open mandap setting for evening family functions with Garden and intimate wedding ceremonies.',
          features: ['Open Air Setting', 'Mandap Setup Ready', 'Garden Surroundings'],
          image: '/images/family-event.webp'
        },
        {
          id: 'haldi-reception',
          name: 'Haldi Ceremony Reception',
          capacity: '500 seating',
          area: '8000 sq ft',
          desc: 'Open area designed for Haldi ceremonies, receptions, and lively family gatherings.',
          features: ['Open area', 'Reception Setup Ready', 'Family Seating'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'Pavilion',
          capacity: '800 guests',
          area: '10000 sq ft',
          desc: 'A comfortable pavilion for large celebrations and Hall guest 1000+ arrangements, with space to host family functions smoothly.',
          features: ['Fully ventilated', 'Lighting', 'Surrounding greenery'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'Dining Area',
          capacity: '400 seating',
          area: '5000 sq ft',
          desc: 'A dedicated dining area for comfortable seating, traditional meals, and buffet service.',
          features: ['400 seating', 'Buffet Ready', 'Hand-wash Stations', 'Hygienic Cleanliness'],
          image: '/images/food-venue.webp'
        }
      ]
    },
    celebrations: {
      eyebrow: 'Celebrations We Host',
      title: 'Every Landmark Occasion, Rooted in Tradition',
      items: [
        { title: 'Weddings & Vivaha', desc: 'Sacred rituals under open skies or majestic indoor mandaps with full family comfort.', icon: 'Ring' },
        { title: 'Receptions & Evenings', desc: 'Starlit banquets illuminated by warm festoon lights and joyous musical nights.', icon: 'Sparkles' },
        { title: 'Sangeet & Haldi Ceremonies', desc: 'Vibrant courtyard spaces for turmeric rituals, dancing, and laughter.', icon: 'Sun' },
        { title: 'Engagement & Naming Ceremonies', desc: 'Intimate setting for close family gatherings and holy blessings.', icon: 'Heart' },
        { title: 'Milestone Birthdays & Anniversaries', desc: 'Memorable family reunions with spacious lawn play areas for all generations.', icon: 'Cake' },
        { title: 'Community & Corporate Meets', desc: 'Dignified space with ample parking and seating for regional assemblies.', icon: 'Users' }
      ]
    },
    gallery: {
      eyebrow: 'Photo Gallery',
      title: 'Moments Captured in the Garden',
      filterAll: 'All Spaces',
      filterLawn: 'Garden Lawns',
      filterNight: 'Night Ambience',
      filterMandap: 'Mandap & Rituals',
      filterDining: 'Dining & Feasts',
    },
    amenities: {
      eyebrow: 'Infrastructure & Comfort',
      title: 'Reassurance Built Into Every Detail',
      subtitle: 'We take care of essential logistics so host families can focus on celebrating with zero stress.',
      items: [
        { title: '100+ Parking Spaces', desc: 'Organized, safe on-site parking with dedicated security stewards for guests arriving from Goa, Belagavi, and Khanapur.', icon: 'Car' },
        { title: '100% Generator Power Backup', desc: 'Heavy-duty diesel generators ensuring uninterrupted lighting, stage audio, and catering operations throughout your event.', icon: 'Zap' },
        { title: 'Bridal & Groom Dressing Suites', desc: 'Private luxury rooms with mirrors, attached baths, and lounge seating for seamless wedding prep.', icon: 'DoorClosed' },
        { title: 'Senior & Wheelchair Accessible', desc: 'Level pathways, gentle ramps, and wide corridors ensure elders and guests with mobility needs move with ease and dignity.', icon: 'Accessibility' },
        { title: "Gentlemen's and Ladies' Washrooms", desc: 'Frequently maintained, hygienic toilet blocks with constant water supply.', icon: 'Droplets' },
        { title: 'Overnight Stay Accommodation', desc: 'Overnight stay accommodation for up to 100 guests.', icon: 'ShieldCheck' },
        { title: 'Catering Kitchen & Preparation Area', desc: 'Hygienic, well-lit prep space for external caterers with heavy-duty power and water supply points.', icon: 'Utensils' }
      ]
    },
    reviews: {
      eyebrow: 'Guest Reviews',
      title: 'Trusted by Generations of Families',
      ratingText: '320+ Verified Reviews on Google',
      outOf: 'Out of 5.0',
      items: [
        {
          name: 'Mahesh Kulkarni',
          event: 'Daughter’s Wedding • Khanapur',
          review: 'Omkar Shubham Garden made our daughter’s wedding truly magical. The open lawn at night with warm lighting was breathtaking. Ample parking made it so easy for guests arriving from Belagavi and Goa.',
          rating: 5,
          date: 'Nov 2025'
        },
        {
          name: 'Priya & Rahul Patil',
          event: 'Wedding Reception • Belagavi',
          review: 'The staff is exceptionally helpful and cooperative. Having both an open lawn and a covered pavilion saved us when evening breeze turned cool. Clean restrooms and smooth dining management!',
          rating: 5,
          date: 'Jan 2026'
        },
        {
          name: 'Suresh Naik',
          event: '60th Birthday Celebration',
          review: 'Quiet location just outside Khanapur town away from city noise. Surrounded by green trees, very serene atmosphere. All our family members complimented the venue choice.',
          rating: 5,
          date: 'Dec 2025'
        }
      ]
    },
    location: {
      eyebrow: 'Location & Directions',
      title: 'Easy to Reach, Hard to Forget',
      address: 'Near Ramgurwardi Cross, Jamboti Road, Khanapur',
      landmark: '1.5 km from Khanapur town',
      stationNote: '5 mins from Khanapur Railway Station • 35 mins from Belagavi City',
      distances: [
        { place: 'Khanapur Railway Station', dist: '2.2 km', time: '5 mins' },
        { place: 'Khanapur Bus Stand', dist: '2.0 km', time: '4 mins' },
        { place: 'Belagavi City Center', dist: '28 km', time: '35 mins' },
        { place: 'Belagavi Airport — Sambra (IATA: IXG)', dist: '38 km', time: '45 mins' },
        { place: 'Goa Border via Chorla Ghat', dist: '35 km', time: '40 mins' },
      ],
      mapDirectionsCTA: 'Open Directions in Google Maps',
    },
    plannerModal: {
      title: 'Interactive Celebration Planner & Estimator',
      subtitle: 'Calculate recommended space, guest capacity, and estimated venue arrangements in 3 simple steps.',
      step1Title: '1. Select Event Type',
      step2Title: '2. Estimated Guests',
      step3Title: '3. Preferred Timing & Extras',
      calculateBtn: 'View Recommended Layout',
      recommendationTitle: 'Recommended Venue Layout for Your Event:',
      guestsLabel: 'Guests',
    },
    contact: {
      eyebrow: 'Plan Your Celebration',
      title: 'Plan Your Celebration',
      subtitle: 'Connect directly with our venue management team. We respond promptly within 2 business hours.',
      formName: 'Your Full Name',
      formPhone: 'Phone Number (WhatsApp Preferred)',
      formEventType: 'Event Type',
      formDate: 'Expected Event Date',
      formGuests: 'Expected Guest Count',
      formMessage: 'Additional Notes or Special Requests',
      submitBtn: 'Send Celebration Enquiry',
      submitting: 'Sending Enquiry...',
      successMsg: 'Thank you! Your enquiry has been sent. Our team will contact you shortly.',
      directCall: 'Call Management',
      directWhatsApp: 'Chat on WhatsApp',
      officeHoursTitle: 'Office & Venue Visit Hours',
      officeHoursTime: 'Monday – Sunday: 10:00 AM to 5:00 PM',
      phoneValue: 'Main: 9880975481 | Manager: 9901643802',
      whatsappValue: '9880975481',
      emailValue: 'enquiry@omkarshubhamgarden.com'
    }
  },
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      story: 'हमारी कहानी',
      spaces: 'परिसर',
      celebrations: 'समारोह',
      gallery: 'चित्र दीर्घा',
      amenities: 'सुविधाएं',
      reviews: 'समीक्षाएं',
      location: 'स्थान',
      contact: 'संपर्क',
      planCTA: 'समारोह की योजना बनाएं',
    },
    hero: {
      eyebrow: 'बाचोली, खानापूर • जांबोटी रोड, कर्नाटक',
      title: 'जहाँ जीवन के सबसे अनमोल उत्सव प्राकृतिक रूप से रचते हैं',
      subtitle: 'अरेका पाम के बगीचों से घिरा एक शांत और सुंदर आयोजन स्थल। विवाह, रिसेप्शन और पारिवारिक उत्सवों के लिए सहर्ष आमंत्रित।',
      ctaPrimary: 'समारोह की योजना बनाएं',
      ctaSecondary: 'स्थल देखें',
      ctaDates: 'तिथि उपलब्धता जांचें',
      droneBadge: 'ड्रोन एरियल व्यू तैयार',
      locationBadge: 'खानापूर से १.५ किमी',
    },
    story: {
      eyebrow: 'हमारी विरासत और दर्शन',
      title: 'पारिवारिक विश्वास पर बना एक प्राकृतिक स्थल',
      p1: 'वर्षों से, ओंकार शुभम गार्डन पीढ़ियों के प्रेम, पवित्र विवाह संकल्पों और आनंदमयी पारिवारिक सम्मेलनों का साक्षी रहा है। खानापूर से जांबोटी रोड पर केवल १.५ किमी दूर, हमारा परिसर प्राकृतिक शांति और उत्तम आतिथ्य का अनुपम मिश्रण प्रस्तुत करता है।',
      p2: 'पश्चिमी घाट की ताजी हवाओं और ऊंचे अरेका पाम के पेड़ों के बीच, हम आपको एक सुंदर कैनवास प्रदान करते हैं—जहाँ आप जीवन भर की यादें संजोते हैं।',
      stat1Number: '३,०००+',
      stat1Label: 'अतिथि क्षमता',
      stat2Number: '१,५००+',
      stat2Label: 'सफलतापूर्वक आयोजित समारोह',
      stat3Number: '४.९ ★',
      stat3Label: 'गूगल सत्यापित रेटिंग',
      stat4Number: '१००+',
      stat4Label: 'सुरक्षित पार्किंग स्थान',
    },
    spaces: {
      eyebrow: 'हमारे परिसर',
      title: 'हर अवसर के लिए सुंदरता से निर्मित',
      subtitle: 'खुले तारों भरे लॉन, विशाल कवर्ड हॉल और सुंदर भोजन मंडप में से चुनें।',
      items: [
        {
          id: 'lawn',
          name: 'ओपन गार्डन लॉन एवं मंडप',
          capacity: '१,५०० अतिथियों तक',
          area: '२५,००० वर्ग फीट',
          desc: 'ऊंचे अरेका पाम के वृक्षों से घिरा हरी-भरी घास का लॉन। विवाह मंडप और भव्य शाम के रिसेप्शन के लिए उत्तम।',
          features: ['प्रकाशित मंडप क्षेत्र', 'सुंदर सजावटी लाइटें', 'मंच स्थापना हेतु तैयार', 'प्राकृतिक ताजी हवा'],
          image: '/images/family-event.webp'
        },
        {
          id: 'mandap',
          name: 'पवित्र विवाह मंडप आंगन',
          capacity: '६०० बैठे अतिथियों तक',
          area: '१०,००० वर्ग फीट',
          desc: 'पारंपरिक विवाह रीति-रिवाजों और फूलों से सजे मंडप के लिए समर्पित स्थान।',
          features: ['पारंपरिक पीतल सजावट', 'वैदिक मंत्रोच्चार हेतु बढ़िया ध्वनिकी', 'उन्नत अनुष्ठान मंच', 'पुष्प मंडप ढांचा'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'ग्रैंड बैंक्वेट पैवेलियन (सभागृह)',
          capacity: '८०० अतिथियों तक',
          area: '१४,००० वर्ग फीट',
          desc: 'लकड़ी के सुंदर काम से सजा मौसम-रोधी कवर्ड हॉल। दोपहर के कार्यक्रमों और औपचारिक मंच प्रस्तुतियों के लिए आदर्श।',
          features: ['सर्व-मौसम सुरक्षा', 'ऊंची छत व हवादार', 'ध्वनि प्रणाली एकीकृत', 'सुंदर मंच बैकड्रॉप'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'छायादार भोजन मंडप',
          capacity: '५०० एक साथ बैठकर भोजन हेतु',
          area: '९,००० वर्ग फीट',
          desc: 'पारंपरिक केल के पत्ते की पंगत एवं आधुनिक बफेट सेवा दोनों के लिए विशाल भोजन हॉल।',
          features: ['हाथ धोने का स्थान', 'बफेट व पंगत व्यवस्था', 'रसोई से सीधा संपर्क', 'स्वच्छता व सफाई'],
          image: '/images/food-venue.webp'
        }
      ]
    },
    celebrations: {
      eyebrow: 'आयोजित किए जाने वाले समारोह',
      title: 'परंपरा से जुड़े सभी प्रमुख शुभ अवसर',
      items: [
        { title: 'विवाह व शुभ परिणय', desc: 'खुले आसमान या भव्य मंडप के नीचे पारंपरिक विधि-विधान से संपन्न होने वाले विवाह।', icon: 'Ring' },
        { title: 'रिसेप्शन व संगीत संध्या', desc: 'सुंदर रोशनी और संगीत से जगमगाती शामें।', icon: 'Sparkles' },
        { title: 'हल्दी व मेहंदी समारोह', desc: 'हल्दी रस्म और नृत्य के लिए उत्साहपूर्ण प्रांगण।', icon: 'Sun' },
        { title: 'सगाई व नामकरण संस्कार', desc: 'निकट संबंधियों और आशीर्वाद हेतु शांत वातावरण।', icon: 'Heart' },
        { title: 'जन्मदिन व वर्षगांठ उत्सव', desc: 'सभी पीढ़ियों के लिए विशाल लॉन के साथ यादगार पारिवारिक समारोह।', icon: 'Cake' },
        { title: 'सामाजिक व कॉर्पोरेट सम्मेलन', desc: 'पर्याप्त सीटिंग और पार्किंग के साथ गरिमापूर्ण आयोजन स्थल।', icon: 'Users' }
      ]
    },
    gallery: {
      eyebrow: 'चित्र दीर्घा',
      title: 'गार्डन में कैद किए गए सुंदर क्षण',
      filterAll: 'सभी परिसर',
      filterLawn: 'गार्डन लॉन',
      filterNight: 'रात्रि सौंदर्य',
      filterMandap: 'मंडप व सजावट',
      filterDining: 'भोजन हॉल',
    },
    amenities: {
      eyebrow: 'सुविधाएं एवं ढांचा',
      title: 'हर बारीकी में आपकी निश्चिंतता',
      subtitle: 'हम आवश्यक व्यवस्थाएं संभालते हैं ताकि परिवार पूरी तरह से उत्सव का आनंद ले सकें।',
      items: [
        { title: '१००+ वाहनों हेतु पार्किंग', desc: 'गोवा, बेलगाम व खानापूर से आने वाले अतिथियों के लिए सुरक्षित पार्किंग व गार्ड व्यवस्था।', icon: 'Car' },
        { title: '१००% जनरेटर बैकअप', desc: 'बिना रुकावट प्रकाश, साउंड और केटरिंग संचालन हेतु भारी जनरेटर बैकअप।', icon: 'Zap' },
        { title: 'वर-वधू हेतु वातानुकूलित कमरे', desc: 'विवाह की तैयारी के लिए निजी एसी कमरे, दर्पण व संलग्न शौचालय सुविधा।', icon: 'DoorClosed' },
        { title: 'वरिष्ठ नागरिकों हेतु सुलभता', desc: 'समतल रास्ते व रैंप ताकि बुजुर्ग आसानी से आवागमन कर सकें।', icon: 'Accessibility' },
        { title: 'आधुनिक व स्वच्छ शौचालय', desc: 'निरंतर जल आपूर्ति के साथ पुरुषों व महिलाओं के लिए साफ-सुथरे शौचालय।', icon: 'Droplets' },
        { title: 'केटरिंग रसोई व तैयारी क्षेत्र', desc: 'केटरर्स हेतु पर्याप्त स्थान, पानी व बिजली व्यवस्था के साथ स्वच्छ रसोई।', icon: 'Utensils' }
      ]
    },
    reviews: {
      eyebrow: 'पारिवारिक समीक्षाएं',
      title: 'पीढ़ियों का भरोसा और स्नेह',
      ratingText: '३२०+ गूगल सत्यापित समीक्षाओं के आधार पर ४.९ औसत रेटिंग',
      outOf: '५.० में से',
      items: [
        {
          name: 'महेश कुलकर्णी',
          event: 'पुत्री का विवाह • खानापूर',
          review: 'ओंकार शुभम गार्डन ने हमारी बेटी की शादी को सचमुच यादगार बना दिया। रात में रोशनी से नहाया हुआ लॉन बेहद खूबसूरत लग रहा था। पार्किंग की उत्तम व्यवस्था थी।',
          rating: 5,
          date: 'नवंबर २०२५'
        },
        {
          name: 'प्रिया एवं राहुल पाटिल',
          event: 'विवाह रिसेप्शन • बेलगाम',
          review: 'कर्मचारी बहुत ही सहयोगी हैं। ओपन लॉन और कवर्ड हॉल दोनों का होना बहुत फायदेमंद रहा। साफ-सुथरे शौचालय और बेहतरीन व्यवस्था!',
          rating: 5,
          date: 'जनवरी २०२६'
        },
        {
          name: 'सुरेश नाईक',
          event: '६०वां जन्मदिवस समारोह',
          review: 'खानापूर शहर से २ किमी दूर जांबोटी रोड पर शांत व सुंदर माहौल। सभी परिजनों ने जगह की खूब तारीफ की।',
          rating: 5,
          date: 'दिसंबर २०२५'
        }
      ]
    },
    location: {
      eyebrow: 'स्थान एवं मार्ग',
      title: 'पहुंचना आसान, भूलना मुश्किल',
      address: 'जांबोटी रोड, बाचोली के पास, खानापूर, कर्नाटक ५९१३०२',
      landmark: 'खानापूर शहर से जांबोटी / चोरला घाट मार्ग पर १.५ किमी',
      stationNote: 'खानापूर रेलवे स्टेशन से ५ मिनट • बेलगाम शहर से ३५ मिनट',
      distances: [
        { place: 'खानापूर रेलवे स्टेशन', dist: '२.२ किमी', time: '५ मिनट' },
        { place: 'खानापूर बस स्टैंड', dist: '२.० किमी', time: '४ मिनट' },
        { place: 'बेलगाम शहर केंद्र', dist: '२८ किमी', time: '३५ मिनट' },
        { place: 'बेलगाम हवाई अड्डा — सांबरा (IXG)', dist: '३८ किमी', time: '४५ मिनट' },
        { place: 'चोरला घाट होते हुए गोवा सीमा', dist: '३५ किमी', time: '४० मिनट' },
      ],
      mapDirectionsCTA: 'गूगल मैप्स पर मार्ग देखें',
    },
    plannerModal: {
      title: 'समारोह आयोजक एवं अनुमानक',
      subtitle: '३ सरल चरणों में अपने कार्यक्रम हेतु उपयुक्त परिसर व व्यवस्था का अनुमान लगाएं।',
      step1Title: '१. कार्यक्रम का प्रकार चुनें',
      step2Title: '२. अनुमानित अतिथियों की संख्या',
      step3Title: '३. समय व अतिरिक्त आवश्यकताएं',
      calculateBtn: 'सुझाई गई व्यवस्था देखें',
      recommendationTitle: 'आपके कार्यक्रम हेतु अनुशंसित व्यवस्था:',
      guestsLabel: 'अतिथि',
    },
    contact: {
      eyebrow: 'पूछताछ एवं तिथियां',
      title: 'समारोह की योजना बनाएं',
      subtitle: 'हमारी टीम से सीधे संपर्क करें। हम २ घंटे में उत्तर देते हैं।',
      formName: 'आपका पूरा नाम',
      formPhone: 'फोन नंबर (व्हाट्सएप)',
      formEventType: 'कार्यक्रम का प्रकार',
      formDate: 'अपेक्षित तिथि',
      formGuests: 'अतिथियों की संख्या',
      formMessage: 'अतिरिक्त विवरण या आवश्यकताएं',
      submitBtn: 'पूछताछ भेजें',
      submitting: 'भेजा जा रहा है...',
      successMsg: 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हमारी टीम जल्द आपसे संपर्क करेगी।',
      directCall: 'कॉल करें',
      directWhatsApp: 'व्हाट्सएप पर चैट करें',
      officeHoursTitle: 'कार्यालय एवं स्थल भ्रमण समय',
      officeHoursTime: 'सोमवार – रविवार: सुबह १०:०० से शाम ५:०० बजे तक',
      phoneValue: 'Main: 9880975481 | Manager: 9901643802',
      whatsappValue: '9880975481',
      emailValue: 'enquiry@omkarshubhamgarden.com'
    }
  },
  mr: {
    nav: {
      home: 'मुख्य पृष्ठ',
      story: 'आमची गोष्ट',
      spaces: 'परिसर',
      celebrations: 'समारंभ',
      gallery: 'छायाचित्र दालन',
      amenities: 'सुविधा',
      reviews: 'अभिप्राय',
      location: 'स्थान',
      contact: 'संपर्क',
      planCTA: 'समारंभाचे नियोजन करा',
    },
    hero: {
      eyebrow: 'बाचोली, खानापूर • जांबोटी रोड, कर्नाटक',
      title: 'जिथे आयुष्यातील सर्वात मौल्यवान क्षण निसर्गरम्य वातावरणात फुलतात',
      subtitle: 'अरेका पामच्या बागांनी वेढलेले एक शांत आणि भव्य मंगल कार्यालय. विवाह, रिसेप्शन आणि कौटुंबिक सोहळ्यांसाठी सहर्ष स्वागत.',
      ctaPrimary: 'समारंभाचे नियोजन करा',
      ctaSecondary: 'परिसर पहा',
      ctaDates: 'तारीख उपलब्धता तपासा',
      droneBadge: 'ड्रोन व्ह्यू सज्ज',
      locationBadge: 'खानापूरपासून १.५ किमी',
    },
    story: {
      eyebrow: 'आमचा वारसा आणि विचार',
      title: 'अनेक वर्षांच्या कौटुंबिक विश्वासावर आधारलेले निसर्गरम्य ठिकाण',
      p1: 'गेल्या अनेक वर्षांपासून, ओंकार शुभम गार्डन हे शेकडो कौटुंबिक सोहळे, विवाह बंधने आणि आनंदाच्या क्षणांचे साक्षीदार राहिले आहे. खानापूरपासून जांबोटी रोडवर अवघ्या १.५ किमी अंतरावर, हे ठिकाण निसर्गरम्य शांतता आणि उत्कृष्ट आदरातिथ्याचा अनोखा संगम घडवून आणते.',
      p2: 'निसर्गाच्या कुशीत आणि अरेका पामच्या झाडांच्या सावलीत, आम्ही एक सुंदर व्यासपीठ देतो—जिथे तुम्ही आयुष्याचे आनंदी क्षण साकारता.',
      stat1Number: '३,०००+',
      stat1Label: 'अतिथी क्षमता',
      stat2Number: '१,५००+',
      stat2Label: 'यशस्वी कौटुंबिक सोहळे',
      stat3Number: '४.९ ★',
      stat3Label: 'गूगल व्हेरिफाइड रेटिंग',
      stat4Number: '१००+',
      stat4Label: 'सुरक्षित पार्किंग जागा',
    },
    spaces: {
      eyebrow: 'आमचे परिसर',
      title: 'प्रत्येक प्रसंगासाठी सुंदर रचना',
      subtitle: 'तारेंकित ओपन लॉन, भव्य इनडोअर हॉल आणि जेवणाचा मंडप यामधून निवडा.',
      items: [
        {
          id: 'lawn',
          name: 'ओपन गार्डन लॉन व मंडप',
          capacity: '१,५०० अतिथींपर्यंत',
          area: '२५,००० स्क्वेअर फूट',
          desc: 'अरेका पामच्या झाडांनी वेढलेले हिरवेगार लॉन. लग्नाचा मंडप आणि संध्याकाळच्या रिसेप्शनसाठी अतिशय उत्तम.',
          features: ['प्रकाशित मंडप परिसर', 'सुंदर रोषणाई', 'स्टेज सेटअप तयार', 'मोकळी ताजी हवा'],
          image: '/images/family-event.webp'
        },
        {
          id: 'mandap',
          name: 'पवित्र विवाह मंडप',
          capacity: '६०० बसलेले अतिथी',
          area: '१०,००० स्क्वेअर फूट',
          desc: 'पारंपरिक विवाह विधी आणि फुलांनी सजवलेल्या मंडपासाठी खास तयार केलेली जागा.',
          features: ['पारंपरिक पितळी सजावट', 'उत्कृष्ट ध्वनी व्यवस्था', 'उंच पूजा व्यासपीठ', 'पुष्प मंडप रचना'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'ग्रँड बँक्वेट पॅव्हेलियन (हॉल)',
          capacity: '८०० अतिथींपर्यंत',
          area: '१४,००० स्क्वेअर फूट',
          desc: 'लाकडी नक्षीकाम असलेला सर्व-हवामान कवर्ड हॉल. दुपारचे कार्यक्रम आणि व्यासपीठावरील सोहळ्यांसाठी आदर्श.',
          features: ['सर्व-हवामान संरक्षण', 'उंच छत व खेळती हवा', 'साउंड सिस्टीम सज्ज', 'आकर्षक स्टेज बॅकड्रॉप'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'छायादार भोजनालय',
          capacity: '५०० जण एकाच वेळी',
          area: '९,००० स्क्वेअर फूट',
          desc: 'पारंपरिक केळीच्या पानांवरील पंगत तसेच आधुनिक बफे सेवेसाठी प्रशस्त जेवणाचा हॉल.',
          features: ['हस्त प्रक्षालन जागा', 'बफे व पंगत सोय', 'स्वयंपाकघराशी थेट जोडणी', 'उत्कृष्ट स्वच्छता'],
          image: '/images/food-venue.webp'
        }
      ]
    },
    celebrations: {
      eyebrow: 'आयोजित केले जाणारे सोहळे',
      title: 'परंपरेने सजलेले सर्व शुभ प्रसंग',
      items: [
        { title: 'शुभ विवाह व परिणय', desc: 'मोकळ्या आकाशाखाली किंवा भव्य मंडपात संपन्न होणारे पारंपरिक लग्नसोहळे.', icon: 'Ring' },
        { title: 'रिसेप्शन व संगीत संध्या', desc: 'सुंदर रोषणाई आणि संगीताने सजलेल्या आनंदमयी संध्याकाळी.', icon: 'Sparkles' },
        { title: 'हळदी व मेहंदी सोहळा', desc: 'हळदीचे विधी आणि संगीतासाठी उत्साही प्रांगण.', icon: 'Sun' },
        { title: 'साखरपुडा व बारसे सोहळा', desc: 'जवळच्या नातेवाईकांच्या उपस्थितीत धार्मिक विधींसाठी शांत वातावरण.', icon: 'Heart' },
        { title: 'वाढदिवस व स्नेहसंमेलन', desc: 'सर्व पिढ्यांसाठी प्रशस्त जागेसह कौटुंबिक सोहळे.', icon: 'Cake' },
        { title: 'सामाजिक व कॉर्पोरेट बैठका', desc: 'पुरेशी आसनव्यवस्था आणि पार्किंगसह प्रतिष्ठित ठिकाण.', icon: 'Users' }
      ]
    },
    gallery: {
      eyebrow: 'छायाचित्र दालन',
      title: 'गार्डनमध्ये टिपलेले सुंदर क्षण',
      filterAll: 'सर्व परिसर',
      filterLawn: 'गार्डन लॉन',
      filterNight: 'रात्रीचे सौंदर्य',
      filterMandap: 'मंडप व सजावट',
      filterDining: 'जेवणाचा हॉल',
    },
    amenities: {
      eyebrow: 'सुविधा आणि व्यवस्था',
      title: 'प्रत्येक बाबतीत तुमची काळजी',
      subtitle: 'आम्ही आवश्यक ती सर्व व्यवस्था सांभाळतो जेणेकरून कुटुंब निश्चिंतपणे सोहळा साजरा करू शकेल.',
      items: [
        { title: '१००+ गाड्यांसाठी पार्किंग', desc: 'गोवा, बेळगाव आणि खानापूरहून येणाऱ्या पाहुण्यांसाठी सुरक्षित पार्किंग व रक्षक.', icon: 'Car' },
        { title: '१००% जनरेटर बॅकअप', desc: 'विनाखंड लाईट, ध्वनी व कॅटरिंगसाठी शक्तिशाली जनरेटर सुविधा.', icon: 'Zap' },
        { title: 'नवरदेव-नवरीसाठी एसी रूम्स', desc: 'तयारीसाठी खाजगी वातानुकूलित खोल्या, मोठे आरसे व अटॅच टॉयलेट.', icon: 'DoorClosed' },
        { title: 'ज्येष्ठ नागरिकांसाठी सुलभता', desc: 'सपाट रस्ते आणि रॅम्प्स ज्यामुळे वृद्धांची ने-आण सोपी होते.', icon: 'Accessibility' },
        { title: 'आधुनिक व स्वच्छ स्वच्छतागृहे', desc: 'सतत पाणीपुरवठ्यासह महिला व पुरुषांसाठी अत्यंत स्वच्छ टॉयलेट्स.', icon: 'Droplets' },
        { title: 'कॅटरिंग किचन व पूर्वतयारी जागा', desc: 'कॅटरर्ससाठी मुबलक पाणी व विजेसह स्वच्छ स्वयंपाकघर जागा.', icon: 'Utensils' }
      ]
    },
    reviews: {
      eyebrow: 'कौटुंबिक अभिप्राय',
      title: 'पिढ्यानपिढ्यांचा विश्वास',
      ratingText: '३२०+ गूगलबद्दलच्या अभिप्रायांच्या आधारे ४.९ सरासरी रेटिंग',
      outOf: '५.० पैकी',
      items: [
        {
          name: 'महेश कुलकर्णी',
          event: 'मुलीचे लग्न • खानापूर',
          review: 'ओंकार शुभम गार्डनने आमच्या मुलीचे लग्न खरोखरच अविस्मरणीय बनवले. रात्रीच्या वेळेस रोषणाईतील लॉन खूपच सुंदर दिसत होता. पार्किंगची उत्तम सोय होती.',
          rating: 5,
          date: 'नोव्हेंबर २०२५'
        },
        {
          name: 'प्रिया आणि राहुल पाटील',
          event: 'रिसेप्शन • बेळगाव',
          review: 'येथील कर्मचारी अत्यंत सहकार्य करणारे आहेत. ओपन लॉन आणि कवर्ड हॉल दोन्ही असल्याने खूप सोयीचे झाले.',
          rating: 5,
          date: 'जानेवारी २०२६'
        },
        {
          name: 'सुरेश नाईक',
          event: '६० वा वाढदिवस सोहळा',
          review: 'खानापूर शहरापासून अवघ्या २ किमी अंतरावर जांबोटी रोडवर शांत आणि निसर्गरम्य वातावरण.',
          rating: 5,
          date: 'डिसेंबर २०२५'
        }
      ]
    },
    location: {
      eyebrow: 'स्थान आणि रस्ता',
      title: 'पोहोचणे सोपे, विसरणे कठीण',
      address: 'जांबोटी रोड, बाचोली जवळ, खानापूर, कर्नाटक ५९१३०२',
      landmark: 'खानापूर शहरापासून जांबोटी / चोरला घाट रस्त्यावर १.५ किमी',
      stationNote: 'खानापूर रेल्वे स्टेशनपासून ५ मिनिटे • बेळगाव शहरापासून ३५ मिनिटे',
      distances: [
        { place: 'खानापूर रेल्वे स्टेशन', dist: '२.२ किमी', time: '५ मिनिटे' },
        { place: 'खानापूर बस स्थानक', dist: '२.० किमी', time: '४ मिनिटे' },
        { place: 'बेळगाव मध्यवर्ती शहर', dist: '२८ किमी', time: '३५ मिनिटे' },
        { place: 'बेळगाव विमानतळ — सांबरा (IXG)', dist: '३८ किमी', time: '४५ मिनिटे' },
        { place: 'चोरला घाट मार्गे गोवा सीमा', dist: '३५ किमी', time: '४० मिनिटे' },
      ],
      mapDirectionsCTA: 'गूगल मॅप्सवर रस्ता पहा',
    },
    plannerModal: {
      title: 'समारंभ नियोजन आणि अंदाज',
      subtitle: '३ सोप्या पायऱ्यांमध्ये तुमच्या कार्यक्रमासाठी योग्य जागेचा अंदाज घ्या.',
      step1Title: '१. कार्यक्रमाचा प्रकार निवडा',
      step2Title: '२. अंदाजित पाहुण्यांची संख्या',
      step3Title: '३. वेळ आणि अतिरिक्त गरजा',
      calculateBtn: 'सुचवलेली रचना पहा',
      recommendationTitle: 'तुमच्या कार्यक्रमासाठी सुचवलेली रचना:',
      guestsLabel: 'पाहुणे',
    },
    contact: {
      eyebrow: 'चौकशी व तारखा',
      title: 'समारंभाचे नियोजन करा',
      subtitle: 'आमच्या टीमशी थेट संपर्क साधा. आम्ही २ तासांच्या आत उत्तर देतो.',
      formName: 'तुमचे पूर्ण नाव',
      formPhone: 'फोन नंबर (व्हॉट्सॲप)',
      formEventType: 'कार्यक्रमाचा प्रकार',
      formDate: 'अपेक्षित तारीख',
      formGuests: 'अंदाजित पाहुणे संख्या',
      formMessage: 'अतिरिक्त माहिती किंवा संदेश',
      submitBtn: 'चौकशी पाठवा',
      submitting: 'पाठवत आहे...',
      successMsg: 'धन्यवाद! तुमची चौकशी आम्हाला मिळाली आहे. आमची टीम लवकरच संपर्क करेल.',
      directCall: 'कॉल करा',
      directWhatsApp: 'व्हॉट्सॲपवर चॅट करा',
      officeHoursTitle: 'कार्यालय व भेट देण्याची वेळ',
      officeHoursTime: 'सोमवार – रविवार: सकाळी १०:०० ते संध्याकाळी ५:००',
      phoneValue: 'Main: 9880975481 | Manager: 9901643802',
      whatsappValue: '9880975481',
      emailValue: 'enquiry@omkarshubhamgarden.com'
    }
  },
  kn: {
    nav: {
      home: 'ಮುಖ್ಯ ಪುಟ',
      story: 'ನಮ್ಮ ಕಥೆ',
      spaces: 'ಸ್ಥಳಗಳು',
      celebrations: 'ಸಂಭ್ರಮಗಳು',
      gallery: 'ಛಾಯಾಚಿತ್ರ ಗ್ಯಾಲರಿ',
      amenities: 'ಸೌಲಭ್ಯಗಳು',
      reviews: 'ಅಭಿಪ್ರಾಯಗಳು',
      location: 'ಸ್ಥಳ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      planCTA: 'ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮ ಯೋಜಿಸಿ',
    },
    hero: {
      eyebrow: 'ಬಾಚೋಳಿ, ಖಾನಾಪುರ • ಜಾಂಬೋಟಿ ರಸ್ತೆ, ಕರ್ನಾಟಕ',
      title: 'ಜೀವನದ ಅತ್ಯಂತ ಅರ್ಥಪೂರ್ಣ ಸಂಭ್ರಮಗಳು ಸಹಜವಾಗಿ ಕಂಗೊಳಿಸುವ ಸುಂದರ ತಾಣ',
      subtitle: 'ಅಡಿಕೆ ತೋಟಗಳ ನಡುವೆ ನೆಲೆಸಿರುವ ಶಾಂತ ಹಾಗೂ ನೈಸರ್ಗಿಕ ಕಲ್ಯಾಣ ಮಂಟಪ. ಮದುವೆ, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಕೌಟುಂಬಿಕ ಸಮಾರಂಭಗಳಿಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ.',
      ctaPrimary: 'ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮ ಯೋಜಿಸಿ',
      ctaSecondary: 'ಸ್ಥಳಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
      ctaDates: 'ದಿನಾಂಕ ಲಭ್ಯತೆ ಪರಿಶೀಲಿಸಿ',
      droneBadge: 'ಡ್ರೋನ್ ವೈಮಾನಿಕ ದೃಶ್ಯ ಸಿದ್ಧ',
      locationBadge: 'ಖಾನಾಪುರದಿಂದ ೧.೫ ಕಿ.ಮೀ',
    },
    story: {
      eyebrow: 'ನಮ್ಮ ಪರಂಪರೆ ಮತ್ತು ತತ್ವ',
      title: 'ವರ್ಷಗಳ ಕೌಟುಂಬಿಕ ನಂಬಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿತ ನೈಸರ್ಗಿಕ ತಾಣ',
      p1: 'ವರ್ಷಗಳಿಂದ, ಓಂಕಾರ ಶುಭಂ ಗಾರ್ಡನ್ ನೂರಾರು ಕುಟುಂಬಗಳ ಪ್ರೀತಿ, ಶುಭ ಮದುವೆ ಬಂಧ ಹಾಗೂ ಸಂಭ್ರಮದ ಕ್ಷಣಗಳಿಗೆ ಸುಂದರ ಸಾಕ್ಷಿಯಾಗಿದೆ. ಖಾನಾಪುರದಿಂದ ಜಾಂಬೋಟಿ ರಸ್ತೆಯಲ್ಲಿ ಕೇವಲ ೧.೫ ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ಈ ತಾಣವು ನಿಸರ್ಗದ ಪ್ರಶಾಂತತೆ ಹಾಗೂ ಆತಿಥ್ಯದ ಸಮ್ಮಿಲನವಾಗಿದೆ.',
      p2: 'ಎತ್ತರದ ಅಡಿಕೆ ಮರಗಳ ಸಾಲು ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ತಂಪು ಗಾಳಿಯ ನಡುವೆ, ನಿಮ್ಮ ಜೀವಮಾನದ ಸುಂದರ ನೆನಪುಗಳನ್ನು ರೂಪಿಸಲು ನಾವು ಸಿದ್ಧರಿದ್ದೇವೆ.',
      stat1Number: '೩,೦೦೦+',
      stat1Label: 'ಅತಿಥಿ ಸಾಮರ್ಥ್ಯ',
      stat2Number: '೧,೫೦೦+',
      stat2Label: 'ಯಶಸ್ವಿ ಸಮಾರಂಭಗಳು',
      stat3Number: '೪.೯ ★',
      stat3Label: 'ಗೂಗಲ್ ಪರಿಶೀಲಿತ ರೇಟಿಂಗ್',
      stat4Number: '೧೦೦+',
      stat4Label: 'ಸುರಕ್ಷಿತ ಪಾರ್ಕಿಂಗ್ ವ್ಯವಸ್ಥೆ',
    },
    spaces: {
      eyebrow: 'ನಮ್ಮ ಸ್ಥಳಗಳು',
      title: 'ಪ್ರತಿಯೊಂದು ಕ್ಷಣಕ್ಕೂ ಅದ್ಭುತವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸ್ಥಳಗಳು',
      subtitle: 'ತಾರಾಂಗಣದ ಬಯಲು ಉದ್ಯಾನವನ, ಬೃಹತ್ ಕವರ್ಡ್ ಸಭಾಂಗಣ ಹಾಗೂ ಸುಂದರ ಭೋಜನ ಮಂಟಪಗಳ ಆಯ್ಕೆ.',
      items: [
        {
          id: 'lawn',
          name: 'ಓಪನ್ ಗಾರ್ಡನ್ ಲಾನ್‌ ಮತ್ತು ಮಂಟಪ',
          capacity: '೧,೫೦೦ ಅತಿಥಿಗಳವರೆಗೆ',
          area: '೨೫,೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಎತ್ತರದ ಅಡಿಕೆ ಮರಗಳಿಂದ ಸುತ್ತುವರಿದ ಹಸಿರು ಹುಲ್ಲುಹಾಸು. ಮದುವೆ ಮಂಟಪ ಮತ್ತು ಸಂಜೆಯ ರಿಸೆಪ್ಷನ್‌ಗೆ ಅತ್ಯುತ್ತಮ.',
          features: ['ದೀಪಾಲಂಕೃತ ಮಂಟಪ', 'ಸುಂದರ ದೀಪಾಲಂಕಾರ', 'ಸ್ಟೇಜ್ ಸೆಟಪ್ ಸಿದ್ಧ', 'ನೈಸರ್ಗಿಕ ತಂಪು ಗಾಳಿ'],
          image: '/images/family-event.webp'
        },
        {
          id: 'mandap',
          name: 'ಪವಿತ್ರ ವಿವಾಹ ಮಂಟಪ ಆವರಣ',
          capacity: '೬೦೦ ಕುಳಿತ ಅತಿಥಿಗಳು',
          area: '೧೦,೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಸಾಂಪ್ರದಾಯಿಕ ವಿವಾಹ ಶಾಸ್ತ್ರಗಳು ಮತ್ತು ಹೂವಿನ ಮಂಟಪಕ್ಕಾಗಿ ವಿಶೇಷವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಆವರಣ.',
          features: ['ಸಾಂಪ್ರದಾಯಿಕ ಹಿತ್ತಾಳೆ ಅಲಂಕಾರ', 'ವೇದ ಮಂತ್ರೋಚ್ಚಾರಣೆಗೆ ಸೂಕ್ತ ಧ್ವನಿ ಗ್ರಹಣ', 'ಎತ್ತರದ ಪೂಜಾ ವೇದಿಕೆ', 'ಹೂವಿನ ಮಂಟಪ ಸೌಲಭ್ಯ'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'ಗ್ರಾಂಡ್ ಬ್ಯಾಂಕ್ವೆಟ್ ಪೆವಿಲಿಯನ್ (ಸಭಾಂಗಣ)',
          capacity: '೮೦೦ ಅತಿಥಿಗಳವರೆಗೆ',
          area: '೧೪,೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಮರದ ನಕ್ಷೆಗಳೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾದ ಹವಾಮಾನ-ನಿರೋಧಕ ಕವರ್ಡ್ ಸಭಾಂಗಣ. ಮಧ್ಯಾಹ್ನದ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸೂಕ್ತ.',
          features: ['ಎಲ್ಲಾ ಹವಾಮಾನಕ್ಕೂ ಸೂಕ್ತ', 'ಎತ್ತರದ ಛಾವಣಿ ಮತ್ತು ಗಾಳಿ ಸಂಚಾರ', 'ಸೌಂಡ್ ಸಿಸ್ಟಮ್ ಸಂಯೋಜಿತ', 'ಆಕರ್ಷಕ ವೇದಿಕೆ ಹಿನ್ನೆಲೆ'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'ನೆರಳಿನ ಭೋಜನ ಮಂಟಪ',
          capacity: 'ಒಂದೇ ಬಾರಿಗೆ ೫೦೦ ಮಂದಿಗೆ ಭೋಜನ',
          area: '೯,೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಸಾಂಪ್ರದಾಯಿಕ ಬಾಳೆ ಎಲೆ ಊಟ ಹಾಗೂ ಆಧುನಿಕ ಬಫೆ ವ್ಯವಸ್ಥೆಗೆ ವಿಶಾಲ ಭೋಜನ ಸಭಾಂಗಣ.',
          features: ['ಕೈ ತೊಳೆಯುವ ವ್ಯವಸ್ಥೆ', 'ಬಫೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಊಟ', 'ಅಡುಗೆಮನೆಯೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ', 'ಉತ್ತಮ ನೈರ್ಮಲ್ಯ'],
          image: '/images/food-venue.webp'
        }
      ]
    },
    celebrations: {
      eyebrow: 'ನಾವು ಆಯೋಜಿಸುವ ಸಮಾರಂಭಗಳು',
      title: 'ಪರಂಪರೆಯೊಂದಿಗೆ ಬೆಸೆದ ಎಲ್ಲಾ ಶುಭ ಕಾರ್ಯಗಳು',
      items: [
        { title: 'ವಿವಾಹ ಮಹೋತ್ಸವ', desc: 'ಬಯಲು ಆಕಾಶದಡಿಯಲ್ಲಿ ಅಥವಾ ಭವ್ಯ ಮಂಟಪದಲ್ಲಿ ನಡೆಯುವ ಸಾಂಪ್ರದಾಯಿಕ ಮದುವೆಗಳು.', icon: 'Ring' },
        { title: 'ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಸಂಗೀತ ಸಂಜೆ', desc: 'ದೀಪಾಲಂಕಾರ ಮತ್ತು ಸಂಗೀತದೊಂದಿಗೆ ಕಳೆಯುವ ಆನಂದದಾಯಕ ಸಂಜೆಗಳು.', icon: 'Sparkles' },
        { title: 'ಅರಿಶಿನ ಮತ್ತು ಮೆಹಂದಿ ಶಾಸ್ತ್ರ', desc: 'ಅರಿಶಿನ ಶಾಸ್ತ್ರ ಮತ್ತು ನೃತ್ಯಕ್ಕಾಗಿ ಉತ್ಸಾಹಭರಿತ ಆವರಣ.', icon: 'Sun' },
        { title: 'ನಿಶ್ಚಿತಾರ್ಥ ಮತ್ತು ನಾಮಕರಣ', desc: 'ಆತ್ಮೀಯ ಸಂಬಂಧಿಕರ ಸಮ್ಮುಖದಲ್ಲಿ ನಡೆಯುವ ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸೂಕ್ತ ಸ್ಥಳ.', icon: 'Heart' },
        { title: 'ಹುಟ್ಟುಹಬ್ಬ ಮತ್ತು ಸುವರ್ಣ ಮಹೋತ್ಸವ', desc: 'ಎಲ್ಲಾ ವಯೋಮಾನದವರಿಗೂ ವಿಶಾಲ ಜಾಗದೊಂದಿಗೆ ಕೌಟುಂಬಿಕ ಸಂಭ್ರಮಗಳು.', icon: 'Cake' },
        { title: 'ಸಮುದಾಯ ಮತ್ತು ಸಂಸ್ಥೆಯ ಸಭೆಗಳು', desc: 'ಸಾಕಷ್ಟು ಆಸನ ಹಾಗೂ ಪಾರ್ಕಿಂಗ್ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಪ್ರತಿಷ್ಠಿತ ಆವರಣ.', icon: 'Users' }
      ]
    },
    gallery: {
      eyebrow: 'ಛಾಯಾಚಿತ್ರ ಗ್ಯಾಲರಿ',
      title: 'ಉದ್ಯಾನವನದಲ್ಲಿ ಸೆರೆಹಿಡಿದ ಸುಂದರ ಕ್ಷಣಗಳು',
      filterAll: 'ಎಲ್ಲಾ ಸ್ಥಳಗಳು',
      filterLawn: 'ಉದ್ಯಾನವನ',
      filterNight: 'ರಾತ್ರಿಯ ಸೌಂದರ್ಯ',
      filterMandap: 'ಮಂಟಪ ಮತ್ತು ಅಲಂಕಾರ',
      filterDining: 'ಊಟದ ಸಭಾಂಗಣ',
    },
    amenities: {
      eyebrow: 'ಸೌಲಭ್ಯಗಳು ಮತ್ತು ವ್ಯವಸ್ಥೆ',
      title: 'ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ನಿಶ್ಚಿಂತತೆ',
      subtitle: 'ಕುಟುಂಬಗಳು ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲದೆ ಸಂಭ್ರಮಿಸಲು ಅಗತ್ಯ ವ್ಯವಸ್ಥೆಗಳನ್ನು ನಾವು ನಿಭಾಯಿಸುತ್ತೇವೆ.',
      items: [
        { title: '೧೦೦+ ವಾಹನಗಳಿಗೆ ಪಾರ್ಕಿಂಗ್', desc: 'ಗೋವಾ, ಬೆಳಗಾವಿ ಮತ್ತು ಖಾನಾಪುರದಿಂದ ಬರುವ ಅತಿಥಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಪಾರ್ಕಿಂಗ್ ಮತ್ತು ಸೆಕ್ಯೂರಿಟಿ.', icon: 'Car' },
        { title: '೧೦೦% ಜನರೇಟರ್ ಬ್ಯಾಕಪ್', desc: 'ನಿರಂತರ ದೀಪ, ಧ್ವನಿ ಹಾಗೂ ಅಡುಗೆ ವ್ಯವಸ್ಥೆಗೆ ಶಕ್ತಿಶಾಲಿ ಜನರೇಟರ್ ಸೌಲಭ್ಯ.', icon: 'Zap' },
        { title: 'ವರ-ವಧುವಿನ ಎಸಿ ಕೊಠಡಿಗಳು', desc: 'ಸಿದ್ಧತೆಗೆ ಖಾಸಗಿ ಎಸಿ ಕೊಠಡಿಗಳು, ವಿಶಾಲ ಕನ್ನಡಿ ಮತ್ತು ಅಟ್ಯಾಚ್ಡ್ ಟಾಯ್ಲೆಟ್.', icon: 'DoorClosed' },
        { title: 'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಸುಲಭ ಸಂಚಾರ', desc: 'ಸಮತಟ್ಟಾದ ಹಾದಿಗಳು ಮತ್ತು ರ‍್ಯಾಂಪ್‌ಗಳು, ಹಿರಿಯರು ಸುಲಭವಾಗಿ ಸಂಚರಿಸಬಹುದು.', icon: 'Accessibility' },
        { title: 'ಆಧುನಿಕ ಶೌಚಾಲಯಗಳು', desc: 'ನಿರಂತರ ನೀರು ಪೂರೈಕೆಯೊಂದಿಗೆ ಮಹಿಳೆಯರು ಮತ್ತು ಪುರುಷರಿಗೆ ಅತ್ಯಂತ ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳು.', icon: 'Droplets' },
        { title: 'ಅಡುಗೆ ತಯಾರಿ ಸ್ಥಳ', desc: 'ಅಡುಗೆಯವರಿಗೆ ಸಾಕು ಬೇಕಾದಷ್ಟು ಜಾಗ, ನೀರು ಮತ್ತು ವಿದ್ಯುತ್‌ನೊಂದಿಗೆ ನೈರ್ಮಲ್ಯದ ಅಡುಗೆಮನೆ.', icon: 'Utensils' }
      ]
    },
    reviews: {
      eyebrow: 'ಕುಟುಂಬಗಳ ಅಭಿಪ್ರಾಯಗಳು',
      title: 'ಪೀಳಿಗೆಗಳ ನಂಬಿಕೆ ಮತ್ತು ಪ್ರೀತಿ',
      ratingText: '೩೨೦+ ಗೂಗಲ್ ಪರಿಶೀಲಿತ ಅಭಿಪ್ರಾಯಗಳ ಆಧಾರದ ಮೇಲೆ ೪.೯ ಸರಾಸರಿ ರೇಟಿಂಗ್',
      outOf: '೫.೦ ರಲ್ಲಿ',
      items: [
        {
          name: 'ಮಹೇಶ ಕುಲಕರ್ಣಿ',
          event: 'ಮಗಳ ಮದುವೆ • ಖಾನಾಪುರ',
          review: 'ಓಂಕಾರ ಶುಭಂ ಗಾರ್ಡನ್ ನಮ್ಮ ಮಗಳ ಮದುವೆಯನ್ನು ಅತ್ಯಂತ ಯಶಸ್ವಿಯಾಗಿ ನೆರವೇರಿಸಿಕೊಟ್ಟಿತು. ರಾತ್ರಿಯ ಬೆಳಕಿನಲ್ಲಿ ಲಾನ್ ಕಂಗೊಳಿಸುತ್ತಿತ್ತು. ಪಾರ್ಕಿಂಗ್ ವ್ಯವಸ್ಥೆ ಉತ್ತಮವಾಗಿತ್ತು.',
          rating: 5,
          date: 'ನವೆಂಬರ್ ೨೦೨೫'
        },
        {
          name: 'ಪ್ರಿಯಾ ಮತ್ತು ರಾಹುಲ್ ಪಾಟೀಲ',
          event: 'ರಿಸೆಪ್ಷನ್ • ಬೆಳಗಾವಿ',
          review: 'ಇಲ್ಲಿನ ಸಿಬ್ಬಂದಿ ಅತ್ಯಂತ ಸಹಕಾರಿಯಾಗಿದ್ದಾರೆ. ಬಯಲು ಲಾನ್ ಮತ್ತು ಕವರ್ಡ್ ಸಭಾಂಗಣ ಎರಡೂ ಇರುವುದು ತುಂಬಾ ಅನುಕೂಲವಾಯಿತು.',
          rating: 5,
          date: 'ಜನವರಿ ೨೦೨೬'
        },
        {
          name: 'ಸುರೇಶ ನಾಯಕ್',
          event: '೬೦ನೇ ಜನ್ಮದಿನದ ಸಂಭ್ರಮ',
          review: 'ಖಾನಾಪುರ ನಗರದಿಂದ ಕೇವಲ ೨ ಕಿ.ಮೀ ದೂರದಲ್ಲಿ ಜಾಂಬೋಟಿ ರಸ್ತೆಯಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಶಾಂತ ವಾತಾವರಣ.',
          rating: 5,
          date: 'ಡಿಸೆಂಬರ್ ೨೦೨೫'
        }
      ]
    },
    location: {
      eyebrow: 'ಸ್ಥಳ ಮತ್ತು ಮಾರ್ಗ',
      title: 'ತಲುಪುವುದು ಸುಲಭ, ಮರೆಯುವುದು ಕಷ್ಟ',
      address: 'ಜಾಂಬೋಟಿ ರಸ್ತೆ, ಬಾಚೋಳಿ ಹತ್ತಿರ, ಖಾನಾಪುರ, ಕರ್ನಾಟಕ ೫೯೧೩೦೨',
      landmark: 'ಖಾನಾಪುರ ಪಟ್ಟಣದಿಂದ ಜಾಂಬೋಟಿ / ಚೋರ್ಲಾ ಘಾಟ್ ರಸ್ತೆಯಲ್ಲಿ ೧.೫ ಕಿ.ಮೀ',
      stationNote: 'ಖಾನಾಪುರ ರೈಲ್ವೆ ನಿಲ್ದಾಣದಿಂದ ೫ ನಿಮಿಷ • ಬೆಳಗಾವಿ ನಗರದಿಂದ ೩೫ ನಿಮಿಷ',
      distances: [
        { place: 'ಖಾನಾಪುರ ರೈಲ್ವೆ ನಿಲ್ದಾಣ', dist: '೨.೨ ಕಿ.ಮೀ', time: '೫ ನಿಮಿಷ' },
        { place: 'ಖಾನಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', dist: '೨.೦ ಕಿ.ಮೀ', time: '೪ ನಿಮಿಷ' },
        { place: 'ಬೆಳಗಾವಿ ನಗರ ಕೇಂದ್ರ', dist: '೨೮ ಕಿ.ಮೀ', time: '೩೫ ನಿಮಿಷ' },
        { place: 'ಬೆಳಗಾವಿ ವಿಮಾನ ನಿಲ್ದಾಣ — ಸಾಂಬ್ರಾ (IXG)', dist: '೩೮ ಕಿ.ಮೀ', time: '೪೫ ನಿಮಿಷ' },
        { place: 'ಚೋರ್ಲಾ ಘಾಟ್ ಮೂಲಕ ಗೋವಾ ಗಡಿ', dist: '೩೫ ಕಿ.ಮೀ', time: '೪೦ ನಿಮಿಷ' },
      ],
      mapDirectionsCTA: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಮಾರ್ಗ ವೀಕ್ಷಿಸಿ',
    },
    plannerModal: {
      title: 'ಸಂಭ್ರಮ ಯೋಜನೆ ಮತ್ತು ಅಂದಾಜು',
      subtitle: '೩ ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಸೂಕ್ತ ಸ್ಥಳ ಹಾಗೂ ವ್ಯವಸ್ಥೆಯನ್ನು ಅಂದಾಜಿಸಿ.',
      step1Title: '೧. ಕಾರ್ಯಕ್ರಮದ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ',
      step2Title: '೨. ಅಂದಾಜು ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
      step3Title: '೩. ಸಮಯ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಅಗತ್ಯಗಳು',
      calculateBtn: 'ಶಿಫಾರಸು ಮಾಡಿದ ವಿನ್ಯಾಸ ವೀಕ್ಷಿಸಿ',
      recommendationTitle: 'ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಶಿಫಾರಸು ಮಾಡಿದ ವಿನ್ಯಾಸ:',
      guestsLabel: 'ಅತಿಥಿಗಳು',
    },
    contact: {
      eyebrow: 'ವಿಚಾರಣೆ ಮತ್ತು ದಿನಾಂಕಗಳು',
      title: 'ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮ ಯೋಜಿಸಿ',
      subtitle: 'ನಮ್ಮ ಸ್ಥಳ ನಿರ್ವಹಣಾ ತಂಡದೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ. ನಾವು ೨ ಗಂಟೆಗಳ ಒಳಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ.',
      formName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು',
      formPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ (ವಾಟ್ಸಾಪ್)',
      formEventType: 'ಕಾರ್ಯಕ್ರಮದ ಪ್ರಕಾರ',
      formDate: 'ನಿರೀಕ್ಷಿತ ದಿನಾಂಕ',
      formGuests: 'ಅಂದಾಜು ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
      formMessage: 'ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ ಅಥವಾ ಸಂದೇಶ',
      submitBtn: 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ',
      submitting: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      successMsg: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿಚಾರಣೆ ತಲುಪಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲಿದೆ.',
      directCall: 'ಕರೆ ಮಾಡಿ',
      directWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
      officeHoursTitle: 'ಕಚೇರಿ ಮತ್ತು ಸ್ಥಳ ವೀಕ್ಷಣೆ ಸಮಯ',
      officeHoursTime: 'ಸೋಮವಾರ – ಭಾನುವಾರ: ಬೆಳಿಗ್ಗೆ ೧೦:೦೦ ರಿಂದ ಸಂಜೆ ೫:೦೦ ರವರೆಗೆ',
      phoneValue: 'Main: 9880975481 | Manager: 9901643802',
      whatsappValue: '9880975481',
      emailValue: 'enquiry@omkarshubhamgarden.com'
    }
  }
};
