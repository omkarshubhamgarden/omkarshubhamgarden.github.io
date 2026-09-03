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
      successMsg: 'Thank you! Your enquiry has been sent via a Secure form. Our Team will contact you soon, Or you can instantly get in touch with our team Click on Instant WhatsApp Connect Button below.',
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
      eyebrow: 'रामगुरवाड़ी क्रॉस के पास • जांबोटी रोड, खानापुर',
      title: 'जहाँ जीवन के सबसे सार्थक उत्सव स्वाभाविक रूप से अपने घर पाते हैं',
      subtitle: 'अरेका पाम के बगीचों से घिरा एक शांत, प्रकृति-सुसज्जित उत्सव अभयारण्य — गार्डन के साथ शाम के पारिवारिक समारोहों के लिए। विवाह, रिसेप्शन और जीवन के अविस्मरणीय पड़ावों के लिए परिवारों का सहर्ष स्वागत।',
      ctaPrimary: 'समारोह की योजना बनाएं',
      ctaSecondary: 'स्थल विकल्प देखें',
      ctaDates: 'उपलब्धता जांचें',
      droneBadge: 'ड्रोन एरियल व्यू तैयार',
      locationBadge: 'खानापुर शहर से १.५ किमी',
    },
    story: {
      eyebrow: 'विरासत और दर्शन',
      title: '१५+ वर्षों के पारिवारिक विश्वास पर निर्मित एक प्राकृतिक अभयारण्य',
      p1: '१५+ वर्षों से, ओंकार शुभम गार्डन पीढ़ियों की प्रेम कहानियों, पवित्र संकल्पों और आनंदमयी पारिवारिक पुनर्मिलन की शांत पृष्ठभूमि रहा है। जांबोटी रोड पर खानापुर से १.५ किमी स्थित, हमारा स्थल गार्डन के साथ शाम के पारिवारिक समारोहों के लिए गर्म प्राकृतिक परिवेश और सहज, निर्बाध आतिथ्य के साथ रचा गया है।',
      p2: 'ऊँचे अरेका पाम से घिरा और पश्चिमी घाट की ताजी हवाओं से सजा, हम कैनवास प्रदान करते हैं — आप जीवन भर की यादें बनाते हैं।',
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
      eyebrow: 'स्थल विकल्प',
      title: 'हर क्षण के लिए सोच-समझकर रचित',
      subtitle: 'गार्डन के साथ शाम के पारिवारिक समारोहों के लिए चार स्थल विकल्प — २००+ मेहमानों के लॉन से लेकर १०००+ मेहमानों के हॉल तक।',
      items: [
        {
          id: 'open-mandap',
          name: 'ओपन मंडप',
          capacity: '५०० अतिथियों तक',
          area: '५००० वर्ग फीट',
          desc: 'गार्डन के साथ शाम के पारिवारिक समारोहों और आत्मीय विवाह समारोहों के लिए खुला मंडप स्थल।',
          features: ['खुला परिवेश', 'मंडप स्थापना हेतु तैयार', 'गार्डन परिवेश'],
          image: '/images/family-event.webp'
        },
        {
          id: 'haldi-reception',
          name: 'हल्दी समारोह रिसेप्शन',
          capacity: '५०० बैठक',
          area: '८००० वर्ग फीट',
          desc: 'हल्दी समारोह, रिसेप्शन और जीवंत पारिवारिक समारोहों के लिए डिज़ाइन किया गया खुला क्षेत्र।',
          features: ['खुला क्षेत्र', 'रिसेप्शन सेटअप तैयार', 'परिवार के लिए बैठक व्यवस्था'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'पवेलियन',
          capacity: '८०० अतिथि',
          area: '१०००० वर्ग फीट',
          desc: 'बड़े उत्सवों और १०००+ मेहमानों के हॉल प्रबंध के लिए आरामदायक पवेलियन, जहाँ पारिवारिक समारोह सहजता से सम्पन्न होते हैं।',
          features: ['पूर्णतः हवादार', 'प्रकाश व्यवस्था', 'हरियाली से घिरा'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'भोजन क्षेत्र',
          capacity: '४०० बैठक',
          area: '५००० वर्ग फीट',
          desc: 'आरामदायक बैठने, पारंपरिक भोजन और बुफे सेवा के लिए समर्पित भोजन क्षेत्र।',
          features: ['४०० बैठक', 'बुफे के लिए तैयार', 'हाथ धोने के स्टेशन', 'स्वच्छता'],
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
      eyebrow: 'बुनियादी ढांचा और आराम',
      title: 'हर बारीकी में निश्चिंतता',
      subtitle: 'हम आवश्यक व्यवस्थाएं संभालते हैं ताकि परिवार बिना किसी तनाव के उत्सव का आनंद ले सकें।',
      items: [
        { title: '१००+ पार्किंग स्थल', desc: 'गोवा, बेलगावी और खानापुर से आने वाले मेहमानों के लिए समर्पित सुरक्षा कर्मियों के साथ व्यवस्थित, सुरक्षित ऑन-साइट पार्किंग।', icon: 'Car' },
        { title: '१००% जनरेटर पावर बैकअप', desc: 'आपके पूरे कार्यक्रम के दौरान निर्बाध प्रकाश, मंच ऑडियो और केटरिंग संचालन सुनिश्चित करने वाले हेवी-ड्यूटी डीजल जनरेटर।', icon: 'Zap' },
        { title: 'दुल्हन और दूल्हे के सज्जा सुइट्स', desc: 'सहज विवाह तैयारी के लिए दर्पण, संलग्न स्नानघर और लाउंज बैठने के साथ निजी लग्जरी कमरे।', icon: 'DoorClosed' },
        { title: 'वरिष्ठ और व्हीलचेयर सुगमता', desc: 'समतल रास्ते, सौम्य रैंप और चौड़े गलियारे सुनिश्चित करते हैं कि बुजुर्ग और गतिशीलता सहायता की आवश्यकता वाले मेहमान गरिमा के साथ आसानी से चल सकें।', icon: 'Accessibility' },
        { title: 'पुरुष और महिला शौचालय', desc: 'निरंतर जल आपूर्ति के साथ बार-बार साफ किए जाने वाले स्वच्छ शौचालय ब्लॉक।', icon: 'Droplets' },
        { title: 'रात्रि प्रवास आवास', desc: '१०० मेहमानों तक के लिए रात्रि प्रवास आवास।', icon: 'ShieldCheck' },
        { title: 'केटरिंग किचन और तैयारी क्षेत्र', desc: 'बाहरी कैटरर्स के लिए हेवी-ड्यूटी बिजली और जल आपूर्ति बिंदुओं के साथ स्वच्छ, सु-प्रकाशित तैयारी स्थल।', icon: 'Utensils' }
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
      eyebrow: 'स्थान और दिशा-निर्देश',
      title: 'पहुँचना आसान, भूलना मुश्किल',
      address: 'रामगुरवाड़ी क्रॉस के पास, जांबोटी रोड, खानापुर',
      landmark: 'खानापुर शहर से १.५ किमी',
      stationNote: 'खानापुर रेलवे स्टेशन से ५ मिनट • बेलगावी शहर से ३५ मिनट',
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
      successMsg: 'धन्यवाद! आपकी पूछताछ सुरक्षित फॉर्म के माध्यम से भेज दी गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी, या आप तुरंत हमारी टीम से संपर्क कर सकते हैं — नीचे \'इंस्टेंट व्हाट्सएप कनेक्ट\' बटन पर क्लिक करें।',
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
      eyebrow: 'रामगुरवाडी क्रॉसजवळ • जांबोटी रोड, खानापूर',
      title: 'जिथे आयुष्यातील सर्वात अर्थपूर्ण उत्सव स्वाभाविकपणे आपले घर शोधतात',
      subtitle: 'अरेका पामच्या बागांनी वेढलेले एक शांत, निसर्गरम्य उत्सव अभयारण्य — गार्डनसह संध्याकाळच्या कौटुंबिक सोहळ्यांसाठी। विवाह, रिसेप्शन आणि अविस्मरणीय टप्प्यांसाठी कुटुंबांचे सहर्ष स्वागत.',
      ctaPrimary: 'समारंभाचे नियोजन करा',
      ctaSecondary: 'स्थळ पर्याय एक्स्प्लोर करा',
      ctaDates: 'उपलब्धता तपासा',
      droneBadge: 'ड्रोन एरियल व्ह्यू सज्ज',
      locationBadge: 'खानापूर शहरापासून १.५ किमी',
    },
    story: {
      eyebrow: 'वारसा आणि तत्वज्ञान',
      title: '१५+ वर्षांच्या कौटुंबिक विश्वासावर उभारलेले निसर्गरम्य अभयारण्य',
      p1: '१५+ वर्षांपासून, ओंकार शुभम गार्डन हे प्रेमकथा, पवित्र शपथा आणि आनंदी कौटुंबिक पुनर्मिलनांसाठी एक शांत पार्श्वभूमी राहिले आहे. जांबोटी रोडवर खानापूरपासून १.५ किमी अंतरावर वसलेले, आमचे स्थळ गार्डनसह संध्याकाळच्या कौटुंबिक सोहळ्यांसाठी उबदार नैसर्गिक परिसर आणि विचारपूर्वक, अखंड आतिथ्यासह तयार केले आहे.',
      p2: 'उंच अरेका पाम वृक्षांनी वेढलेले आणि पश्चिम घाटाच्या ताज्या वाऱ्यांनी सजलेले, आम्ही कॅनव्हास देतो — तुम्ही आयुष्यभराच्या आठवणी घडवता.',
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
      eyebrow: 'स्थळ पर्याय',
      title: 'प्रत्येक क्षणासाठी विचारपूर्वक रचना',
      subtitle: 'गार्डनसह संध्याकाळच्या कौटुंबिक सोहळ्यांसाठी चार स्थळ रचना — २००+ पाहुण्यांच्या लॉनपासून ते १०००+ पाहुण्यांच्या हॉलपर्यंत.',
      items: [
        {
          id: 'open-mandap',
          name: 'ओपन मंडप',
          capacity: '५०० पाहुण्यांपर्यंत',
          area: '५००० चौ. फूट',
          desc: 'गार्डनसह संध्याकाळच्या कौटुंबिक सोहळ्यांसाठी आणि जवळच्या विवाह समारंभांसाठी खुला मंडप.',
          features: ['खुले वातावरण', 'मंडप सेटअप सज्ज', 'गार्डन परिसर'],
          image: '/images/family-event.webp'
        },
        {
          id: 'haldi-reception',
          name: 'हळद समारंभ रिसेप्शन',
          capacity: '५०० बैठक व्यवस्था',
          area: '८००० चौ. फूट',
          desc: 'हळद समारंभ, रिसेप्शन आणि उत्साही कौटुंबिक मेळाव्यांसाठी तयार केलेले खुले क्षेत्र.',
          features: ['खुले क्षेत्र', 'रिसेप्शन सेटअप सज्ज', 'कौटुंबिक बैठक व्यवस्था'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'पॅव्हेलियन',
          capacity: '८०० पाहुणे',
          area: '१०००० चौ. फूट',
          desc: 'मोठ्या उत्सवांसाठी आणि १०००+ पाहुण्यांच्या हॉल व्यवस्थेसाठी आरामदायक पॅव्हेलियन, जिथे कौटुंबिक सोहळे सहजतेने पार पडतात.',
          features: ['पूर्णतः हवेशीर', 'प्रकाश व्यवस्था', 'हिरवाईने वेढलेले'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'भोजन क्षेत्र',
          capacity: '४०० बैठक व्यवस्था',
          area: '५००० चौ. फूट',
          desc: 'आरामदायी बैठक, पारंपरिक जेवण आणि बुफे सेवेसाठी समर्पित भोजन क्षेत्र.',
          features: ['४०० बैठक व्यवस्था', 'बुफे सज्ज', 'हात धुण्याची स्थानके', 'स्वच्छता'],
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
      eyebrow: 'पायाभूत सुविधा आणि आराम',
      title: 'प्रत्येक तपशीलात विश्वासार्हता',
      subtitle: 'आम्ही आवश्यक लॉजिस्टिक्स सांभाळतो जेणेकरून कुटुंबे कोणत्याही तणावाशिवाय उत्सव साजरा करण्यावर लक्ष केंद्रित करू शकतील.',
      items: [
        { title: '१००+ पार्किंग जागा', desc: 'गोवा, बेळगावी आणि खानापूरहून येणाऱ्या पाहुण्यांसाठी समर्पित सुरक्षा रक्षकांसह व्यवस्थित, सुरक्षित ऑन-साइट पार्किंग.', icon: 'Car' },
        { title: '१००% जनरेटर पॉवर बॅकअप', desc: 'तुमच्या संपूर्ण कार्यक्रमादरम्यान अखंड प्रकाश, स्टेज ऑडिओ आणि केटरिंग ऑपरेशन्स सुनिश्चित करणारे हेवी-ड्यूटी डिझेल जनरेटर.', icon: 'Zap' },
        { title: 'वधू आणि वर सज्जा सुइट्स', desc: 'अखंड विवाह तयारीसाठी आरसे, संलग्न स्नानगृह आणि लाउंज बैठकीसह खाजगी लक्झरी खोल्या.', icon: 'DoorClosed' },
        { title: 'ज्येष्ठ आणि व्हीलचेअर सुलभता', desc: 'सपाट मार्ग, सौम्य रॅम्प आणि रुंद कॉरिडॉर ज्यामुळे वृद्ध आणि गतिशीलता सहाय्य आवश्यक असलेले पाहुणे सन्मानाने सहज फिरू शकतात.', icon: 'Accessibility' },
        { title: 'पुरुष आणि महिला स्वच्छतागृहे', desc: 'सतत पाणीपुरवठ्यासह वारंवार देखभाल केलेले स्वच्छ शौचालय ब्लॉक्स.', icon: 'Droplets' },
        { title: 'रात्रभर मुक्कामाची सोय', desc: '१०० पाहुण्यांपर्यंत रात्रभर मुक्कामाची सोय.', icon: 'ShieldCheck' },
        { title: 'केटरिंग किचन आणि तयारी क्षेत्र', desc: 'बाह्य केटरर्ससाठी हेवी-ड्यूटी वीज आणि पाणीपुरवठा बिंदूंसह स्वच्छ, चांगल्या प्रकाशाची तयारी जागा.', icon: 'Utensils' }
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
      eyebrow: 'स्थान आणि दिशा',
      title: 'पोहोचणे सोपे, विसरणे कठीण',
      address: 'रामगुरवाडी क्रॉसजवळ, जांबोटी रोड, खानापूर',
      landmark: 'खानापूर शहरापासून १.५ किमी',
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
      successMsg: 'धन्यवाद! तुमची चौकशी सुरक्षित फॉर्मद्वारे पाठवली गेली आहे. आमची टीम लवकरच तुमच्याशी संपर्क करेल, किंवा तुम्ही त्वरित आमच्या टीमशी संपर्क साधू शकता — खालील \'इंस्टंट व्हाट्सॲप कनेक्ट\' बटणावर क्लिक करा।',
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
      eyebrow: 'ರಾಮಗುರವಾಡಿ ಕ್ರಾಸ್ ಬಳಿ • ಜಾಂಬೋಟಿ ರಸ್ತೆ, ಖಾನಾಪುರ',
      title: 'ಜೀವನದ ಅತ್ಯಂತ ಅರ್ಥಪೂರ್ಣ ಸಂಭ್ರಮಗಳು ಸಹಜವಾಗಿ ನೆಲೆಸುವ ತಾಣ',
      subtitle: 'ಅಡಿಕೆ ತೋಟಗಳಿಂದ ಸುತ್ತುವರಿದ ಶಾಂತ, ನಿಸರ್ಗ-ಸಿಂಗರಿಸಿದ ಸಂಭ್ರಮ ಅಭಯಾರಣ್ಯ — ಗಾರ್ಡನ್ ಸಹಿತ ಸಂಜೆಯ ಕೌಟುಂಬಿಕ ಸಮಾರಂಭಗಳಿಗಾಗಿ. ಮದುವೆ, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಚಿರಕಾಲದ ಮೈಲಿಗಲ್ಲುಗಳಿಗೆ ಕುಟುಂಬಗಳಿಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ.',
      ctaPrimary: 'ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮ ಯೋಜಿಸಿ',
      ctaSecondary: 'ಸ್ಥಳ ಆಯ್ಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
      ctaDates: 'ಲಭ್ಯತೆ ಪರಿಶೀಲಿಸಿ',
      droneBadge: 'ಡ್ರೋನ್ ವೈಮಾನಿಕ ನೋಟ ಸಿದ್ಧ',
      locationBadge: 'ಖಾನಾಪುರ ಪಟ್ಟಣದಿಂದ ೧.೫ ಕಿ.ಮೀ',
    },
    story: {
      eyebrow: 'ಪರಂಪರೆ ಮತ್ತು ತತ್ವಶಾಸ್ತ್ರ',
      title: '೧೫+ ವರ್ಷಗಳ ಕುಟುಂಬದ ನಂಬಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿಸಲಾದ ನೈಸರ್ಗಿಕ ಅಭಯಾರಣ್ಯ',
      p1: '೧೫+ ವರ್ಷಗಳಿಂದ, ಓಂಕಾರ ಶುಭಂ ಗಾರ್ಡನ್ ಪ್ರೀತಿಯ ಕಥೆಗಳು, ಪವಿತ್ರ ಪ್ರತಿಜ್ಞೆಗಳು ಮತ್ತು ಸಂತೋಷದ ಕುಟುಂಬ ಪುನರ್ಮಿಲನಗಳಿಗೆ ಶಾಂತ ಹಿನ್ನೆಲೆಯಾಗಿದೆ. ಜಾಂಬೋಟಿ ರಸ್ತೆಯಲ್ಲಿ ಖಾನಾಪುರದಿಂದ ೧.೫ ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ನಮ್ಮ ತಾಣವು ಗಾರ್ಡನ್ ಸಹಿತ ಸಂಜೆಯ ಕುಟುಂಬ ಸಮಾರಂಭಗಳಿಗೆ ಬೆಚ್ಚಗಿನ ನೈಸರ್ಗಿಕ ಸುತ್ತಮುತ್ತಲು ಮತ್ತು ಚಿಂತನಶೀಲ, ತಡೆರಹಿತ ಆತಿಥ್ಯದೊಂದಿಗೆ ರಚಿಸಲಾಗಿದೆ.',
      p2: 'ಎತ್ತರದ ಅಡಿಕೆ ಮರಗಳಿಂದ ಸುತ್ತುವರಿದು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ತಾಜಾ ತಂಗಾಳಿಯಿಂದ ಅಲಂಕೃತವಾದ ನಾವು ಕ್ಯಾನ್ವಾಸ್ ಒದಗಿಸುತ್ತೇವೆ — ನೀವು ಜೀವಮಾನದ ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೀರಿ.',
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
      eyebrow: 'ಸ್ಥಳ ಆಯ್ಕೆಗಳು',
      title: 'ಪ್ರತಿಯೊಂದು ಕ್ಷಣಕ್ಕೂ ಚಿಂತನಶೀಲವಾಗಿ ರಚಿಸಲಾಗಿದೆ',
      subtitle: 'ಗಾರ್ಡನ್ ಸಹಿತ ಸಂಜೆಯ ಕುಟುಂಬ ಸಮಾರಂಭಗಳಿಗೆ ನಾಲ್ಕು ಸ್ಥಳ ಸಂರಚನೆಗಳು — ೨೦೦+ ಅತಿಥಿಗಳ ಲಾನ್‌ನಿಂದ ೧೦೦೦+ ಅತಿಥಿಗಳ ಹಾಲ್‌ವರೆಗೆ.',
      items: [
        {
          id: 'open-mandap',
          name: 'ಓಪನ್ ಮಂಟಪ',
          capacity: '೫೦೦ ಅತಿಥಿಗಳವರೆಗೆ',
          area: '೫೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಗಾರ್ಡನ್ ಸಹಿತ ಸಂಜೆಯ ಕುಟುಂಬ ಸಮಾರಂಭಗಳು ಮತ್ತು ಆತ್ಮೀಯ ವಿವಾಹ ಸಮಾರಂಭಗಳಿಗಾಗಿ ತೆರೆದ ಮಂಟಪ.',
          features: ['ತೆರೆದ ವಾತಾವರಣ', 'ಮಂಟಪ ಸೆಟಪ್ ಸಿದ್ಧ', 'ಗಾರ್ಡನ್ ಪರಿಸರ'],
          image: '/images/family-event.webp'
        },
        {
          id: 'haldi-reception',
          name: 'ಅರಿಶಿನ ಸಮಾರಂಭ ರಿಸೆಪ್ಷನ್',
          capacity: '೫೦೦ ಆಸನಗಳು',
          area: '೮೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಅರಿಶಿನ ಸಮಾರಂಭ, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಉತ್ಸಾಹಭರಿತ ಕುಟುಂಬ ಕೂಟಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ತೆರೆದ ಪ್ರದೇಶ.',
          features: ['ತೆರೆದ ಪ್ರದೇಶ', 'ರಿಸೆಪ್ಷನ್ ಸೆಟಪ್ ಸಿದ್ಧ', 'ಕುಟುಂಬ ಆಸನ'],
          image: '/images/haldi-decor.webp'
        },
        {
          id: 'pavilion',
          name: 'ಪೆವಿಲಿಯನ್',
          capacity: '೮೦೦ ಅತಿಥಿಗಳು',
          area: '೧೦೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ದೊಡ್ಡ ಸಂಭ್ರಮಗಳು ಮತ್ತು ೧೦೦೦+ ಅತಿಥಿಗಳ ಹಾಲ್ ವ್ಯವಸ್ಥೆಗಾಗಿ ಆರಾಮದಾಯಕ ಪೆವಿಲಿಯನ್, ಕುಟುಂಬ ಸಮಾರಂಭಗಳನ್ನು ಸರಾಗವಾಗಿ ಆಯೋಜಿಸಲು ಸ್ಥಳಾವಕಾಶವಿದೆ.',
          features: ['ಸಂಪೂರ್ಣ ಗಾಳಿಯಾಡುವ', 'ಬೆಳಕು', 'ಹಸಿರಿನಿಂದ ಆವೃತ'],
          image: '/images/hall-decor.webp'
        },
        {
          id: 'dining',
          name: 'ಊಟದ ಪ್ರದೇಶ',
          capacity: '೪೦೦ ಆಸನಗಳು',
          area: '೫೦೦೦ ಚದರ ಅಡಿ',
          desc: 'ಆರಾಮದಾಯಕ ಆಸನ, ಸಾಂಪ್ರದಾಯಿಕ ಊಟ ಮತ್ತು ಬಫೆ ಸೇವೆಗಾಗಿ ಮೀಸಲಾದ ಊಟದ ಪ್ರದೇಶ.',
          features: ['೪೦೦ ಆಸನಗಳು', 'ಬಫೆಗೆ ಸಿದ್ಧ', 'ಕೈ ತೊಳೆಯುವ ಕೇಂದ್ರಗಳು', 'ನೈರ್ಮಲ್ಯ'],
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
      eyebrow: 'ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಸೌಕರ್ಯ',
      title: 'ಪ್ರತಿ ವಿವರದಲ್ಲೂ ಭರವಸೆ',
      subtitle: 'ಆತಿಥೇಯ ಕುಟುಂಬಗಳು ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲದೆ ಸಂಭ್ರಮದ ಮೇಲೆ ಗಮನಹರಿಸಲು ನಾವು ಅಗತ್ಯ ವ್ಯವಸ್ಥೆಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.',
      items: [
        { title: '೧೦೦+ ಪಾರ್ಕಿಂಗ್ ಸ್ಥಳಗಳು', desc: 'ಗೋವಾ, ಬೆಳಗಾವಿ ಮತ್ತು ಖಾನಾಪುರದಿಂದ ಬರುವ ಅತಿಥಿಗಳಿಗೆ ಮೀಸಲಾದ ಭದ್ರತಾ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ವ್ಯವಸ್ಥಿತ, ಸುರಕ್ಷಿತ ಆನ್-ಸೈಟ್ ಪಾರ್ಕಿಂಗ್.', icon: 'Car' },
        { title: '೧೦೦% ಜನರೇಟರ್ ಪವರ್ ಬ್ಯಾಕಪ್', desc: 'ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಕಾರ್ಯಕ್ರಮದಾದ್ಯಂತ ತಡೆರಹಿತ ಬೆಳಕು, ವೇದಿಕೆ ಆಡಿಯೋ ಮತ್ತು ಅಡುಗೆ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಖಚಿತಪಡಿಸುವ ಹೆವಿ-ಡ್ಯೂಟಿ ಡೀಸೆಲ್ ಜನರೇಟರ್‌ಗಳು.', icon: 'Zap' },
        { title: 'ವಧು ಮತ್ತು ವರರ ಸಜ್ಜು ಸೂಟ್‌ಗಳು', desc: 'ತಡೆರಹಿತ ವಿವಾಹ ಸಿದ್ಧತೆಗಾಗಿ ಕನ್ನಡಿಗಳು, ಲಗತ್ತಿಸಲಾದ ಸ್ನಾನಗೃಹ ಮತ್ತು ಲಾಂಜ್ ಆಸನದೊಂದಿಗೆ ಖಾಸಗಿ ಐಷಾರಾಮಿ ಕೊಠಡಿಗಳು.', icon: 'DoorClosed' },
        { title: 'ಹಿರಿಯರು ಮತ್ತು ವೀಲ್‌ಚೇರ್ ಪ್ರವೇಶ', desc: 'ಸಮತಟ್ಟಾದ ಹಾದಿಗಳು, ಸೌಮ್ಯ ರ‍್ಯಾಂಪ್‌ಗಳು ಮತ್ತು ಅಗಲವಾದ ಕಾರಿಡಾರ್‌ಗಳು ಹಿರಿಯರು ಮತ್ತು ಚಲನಶೀಲತೆ ಅಗತ್ಯವಿರುವ ಅತಿಥಿಗಳು ಗೌರವದಿಂದ ಸುಲಭವಾಗಿ ಚಲಿಸುವಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತವೆ.', icon: 'Accessibility' },
        { title: 'ಪುರುಷರು ಮತ್ತು ಮಹಿಳೆಯರ ಶೌಚಾಲಯಗಳು', desc: 'ನಿರಂತರ ನೀರು ಪೂರೈಕೆಯೊಂದಿಗೆ ಆಗಾಗ್ಗೆ ನಿರ್ವಹಿಸಲ್ಪಡುವ ನೈರ್ಮಲ್ಯ ಶೌಚಾಲಯ ಬ್ಲಾಕ್‌ಗಳು.', icon: 'Droplets' },
        { title: 'ರಾತ್ರಿ ತಂಗುವ ವಸತಿ', desc: '೧೦೦ ಅತಿಥಿಗಳವರೆಗೆ ರಾತ್ರಿ ತಂಗುವ ವಸತಿ.', icon: 'ShieldCheck' },
        { title: 'ಅಡುಗೆ ಮನೆ ಮತ್ತು ಸಿದ್ಧತಾ ಪ್ರದೇಶ', desc: 'ಬಾಹ್ಯ ಅಡುಗೆಯವರಿಗೆ ಹೆವಿ-ಡ್ಯೂಟಿ ವಿದ್ಯುತ್ ಮತ್ತು ನೀರು ಪೂರೈಕೆ ಬಿಂದುಗಳೊಂದಿಗೆ ನೈರ್ಮಲ್ಯ, ಚೆನ್ನಾಗಿ ಬೆಳಗಿದ ಸಿದ್ಧತಾ ಸ್ಥಳ.', icon: 'Utensils' }
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
      eyebrow: 'ಸ್ಥಳ ಮತ್ತು ನಿರ್ದೇಶನಗಳು',
      title: 'ತಲುಪಲು ಸುಲಭ, ಮರೆಯಲು ಕಷ್ಟ',
      address: 'ರಾಮಗುರವಾಡಿ ಕ್ರಾಸ್ ಹತ್ತಿರ, ಜಾಂಬೋಟಿ ರಸ್ತೆ, ಖಾನಾಪುರ',
      landmark: 'ಖಾನಾಪುರ ಪಟ್ಟಣದಿಂದ ೧.೫ ಕಿ.ಮೀ',
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
      successMsg: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿಚಾರಣೆ ಸುರಕ್ಷಿತ ಫಾರ್ಮ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ, ಅಥವಾ ನೀವು ತಕ್ಷಣ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು — ಕೆಳಗಿನ \'ತಕ್ಷಣ ವಾಟ್ಸಾಪ್ ಸಂಪರ್ಕ\' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.',
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
