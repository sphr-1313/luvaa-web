"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "nl" | "de" | "fr" | "tr";

type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      blog: "Blog",
      about: "About",
      careers: "Careers",
    },
    press: {
      title: "Press & Media",
      lead: "For press inquiries, high-resolution assets, or partnership opportunities, contact press@luvaa.app.",
      kitTitle: "Press Kit",
      kitDesc: "Our press kit includes logos, screenshots, and executive bios.",
    },
    pricing: {
      title: "Pricing",
      lead: "No subscriptions. No expiring credits. Just pay as you go.",
      features: {
        noRecurring: "No recurring fees",
        noExpiry: "Credits never expire",
        free: "Free features included",
      },
      pack: {
        starter: {
          title: "Starter Pack",
          price: "$2.99",
          credits: "10 AI Credits",
          desc: "Best for trying it out.",
          value: "",
        },
        popular: {
          title: "Popular Pack",
          price: "$4.99",
          credits: "25 AI Credits",
          desc: "Best for seasonal wardrobe refreshes.",
          value: "Save ~30%",
        },
        pro: {
          title: "Pro Pack",
          price: "$9.99",
          credits: "60 AI Credits",
          desc: "Best for fashion creators & power users.",
          value: "Best Value (Save ~45%)",
        },
      },
    },
    featuresPage: {
      title: "Features",
      lead: "Luvaa helps you discover, organize and trade fashion with smart suggestions and a community-driven marketplace.",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      contactTitle: "Contact",
      termsSummary: "These terms govern the use of Luvaa's website and services. By using Luvaa you agree to our terms.",
      userContentTitle: "User Content",
      userContent: "Users retain ownership of images they upload but grant Luvaa a license to display and process content to provide service functionality.",
      privacySummary: "Your privacy matters to us. Luvaa collects account information and wardrobe data to provide personalization and marketplace features.",
      dataUseTitle: "Data Use",
      dataUse: "We use wardrobe photos to generate tags and suggestions. Aggregated, anonymized data helps improve recommendations.",
      deleteAccountTitle: "Luvaa – Account Deletion",
      deleteAccountIntro: "Users can delete their Luvaa account in two ways:",
      deleteMethod1Title: "In the Luvaa mobile app:",
      deleteMethod1Desc: "Open the app, go to Profile, click on Settings and select \"Delete account\".",
      deleteMethod2Title: "If the user cannot access the app:",
      deleteMethod2Desc: "They can request account deletion by emailing support@luvaa.app from the email address associated with their Luvaa account.",
      dataDeletionTitle: "Data deletion details:",
      dataDeletionIntro: "When an account is deleted, the following data is permanently removed:",
      dataDeletionItem1: "Account and authentication data",
      dataDeletionItem2: "Profile information",
      dataDeletionItem3: "Saved outfits, items, and user preferences",
      retentionTitle: "Retention:",
      retentionDesc: "All associated data is permanently deleted within 30 days of the deletion request.",
    },
    contact: {
      title: "Contact",
      lead: "Have questions? Reach out to us at hello@luvaa.app or use the form below.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
    },
    blogPage: {
      title: "Blog",
      lead: "Stories, updates, and insights from the Luvaa team.",
    },
    blog: {
      featured: {
        title: "Featured: How to Refresh Your Wardrobe",
        body: "Learn practical steps to sort your closet, identify pieces to keep or sell, and create new outfits without buying more.",
      },
    },
    cta: {
      tryOnWeb: "Try on Web",
    },
    hero: {
      title1: "Your Wardrobe,",
      titleHighlight: "Reimagined",
      subtitle:
        "Luvaa is the app that inspires your style, organizes your closet, and helps you buy & sell fashion. Join 10,000+ users and discover 300,000+ outfits.",
      appPreview: "App Preview",
    },
    stats: {
      users: "Users",
      outfits: "Outfits",
      items: "Items for Sale",
    },
    features: {
      inspired: "Get Inspired",
      organize: "Organize Closet",
      suggestions: "Smart Suggestions",
      sell: "Sell & Shop",
      digitalCloset: "Digital Closet",
      digitalClosetDesc: "Upload photos of your clothes, tag items, and create collections.",
      aiSuggestions: "AI Outfit Suggestions",
      aiSuggestionsDesc: "Personalized outfit recommendations based on your wardrobe and context.",
      marketplace: "Selling & Marketplace",
      marketplaceDesc: "List items for sale with pricing suggestions and connect with buyers.",
      inspiration: "Inspiration Feed",
      inspirationDesc: "Discover outfits from the community and save looks.",
      search: "Smart Search & Tags",
      searchDesc: "Find items quickly by color, season, or custom tags.",
      detailedTitle: "Everything You Need to Master Your Style",
      detailedSubtitle: "Powerful features designed to transform how you interact with your wardrobe",
      smartRecommendations: "Personalized Outfit Suggestions",
      smartRecommendationsDesc: "Get outfit suggestions tailored to your style. The app learns your preferences and suggests looks that match your taste, occasion, and season.",
      organizeDigital: "Organize Your Closet Digitally",
      organizeDigitalDesc: "Upload photos of your clothes and accessories. Items are automatically categorized with backgrounds removed, creating a searchable digital wardrobe you can access anywhere.",
      mixMatch: "Mix & Match in Real-Time",
      mixMatchDesc: "Drag and drop items to create outfits on a virtual canvas. Experiment with different combinations, backgrounds, and layouts before committing to a look.",
      intelligentAnalysis: "Smart Outfit Analysis",
      intelligentAnalysisDesc: "Get instant insights on colors, patterns, styles, and occasions. Discover which pieces work well together and get suggestions for complementary items.",
      saveOrganize: "Save & Organize Inspiration",
      saveOrganizeDesc: "Create custom collections for different occasions, seasons, or moods. Save outfits from our curated feed or your own creations for easy access later.",
      shopSimilar: "Shop Similar Items",
      shopSimilarDesc: "Love an outfit but don't own the pieces? Browse our integrated marketplace to find similar items or list your own clothes for others to discover.",
      findInstantly: "Find Anything Instantly",
      findInstantlyDesc: "Search by color, style, season, or occasion. Natural language search understands queries like 'casual summer dress' or 'formal winter coat'.",
      bgRemoval: "Automatic Background Removal",
      bgRemovalDesc: "Upload any clothing photo and get clean, catalog-quality images with backgrounds automatically removed—perfect for your digital wardrobe.",
    },
    premium: {
      title: "Unlock More with Luvaa Credits",
      aiOutfits: "Generate outfits with AI (even with your own photos!)",
      bgRemoval: "Professional background removal",
      virtualTryOn: "Virtual try-on with AI",
      analytics: "Advanced style insights",
      templates: "Exclusive outfit templates",
      cta: "See Pricing",
    },
    howItWorks: {
      title: "Get Started in Minutes",
      subtitle: "Four simple steps to transform your wardrobe experience",
      step1Title: "Download the app",
      step1Desc: "Available on iOS and Android",
      step2Title: "Upload your first items",
      step2Desc: "Snap photos of your clothes",
      step3Title: "Explore curated outfits",
      step3Desc: "Get personalized recommendations",
      step4Title: "Create your first look",
      step4Desc: "Mix and match in Studio",
    },
    testimonials: {
      title: "What Our Users Say",
    },
    footer: {
      company: {
        about: "About Us",
        careers: "Careers",
        press: "Press",
      },
      product: {
        features: "Features",
        pricing: "Pricing",
        blog: "Blog",
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
      },
      copyright: "© {year} Luvaa. All rights reserved.",
    },
    about: {
      title: "About Luvaa",
      lead: "Luvaa began as a passion project to reimagine how people interact with their wardrobes.",
      lead2: "Our product combines intuitive design with machine learning to deliver outfit suggestions tailored to personal taste, weather, and occasion.",
      missionTitle: "Our Mission",
      mission: "We aim to make fashion more sustainable by helping people rediscover and reuse what they already own.",
      teamTitle: "Our Team",
      team: "A small team of designers, engineers, and fashion enthusiasts working remotely across the globe.",
    },
    careers: {
      intro: "We're building the future of personal fashion. If you love design, mobile apps, and smarter shopping experiences, we'd love to hear from you.",
      whyTitle: "Why Work With Us",
      whyCopy: "Luvaa offers flexible remote work, a collaborative culture, and opportunities to influence products used by thousands of users worldwide.",
      openRoles: "Open Roles",
      viewApply: "View & Apply",
      frontendSummary: "Own web UI and performance. Build scalable, accessible components.",
      mobileSummary: "Ship native-feeling mobile experiences and camera/upload flows.",
      mlSummary: "Work on recommendations and retrieval systems to personalize outfit suggestions.",
      designerSummary: "Design mobile-first flows, prototyping, and user research.",
      contactCopy: "Alternatively, you can email careers@luvaa.app with your resume and a short note about what excites you about fashion tech.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      features: "Functies",
      pricing: "Prijzen",
      blog: "Blog",
      about: "Over",
      careers: "Vacatures",
    },
    press: {
      title: "Pers",
      lead: "Voor persvragen, hoge resolutie assets of partnerschappen, neem contact op met press@luvaa.app.",
      kitTitle: "Perskit",
      kitDesc: "Onze perskit bevat logo's, screenshots en bio's van leidinggevenden.",
    },
    pricing: {
      title: "Prijzen",
      lead: "Geen abonnementen. Geen verlopende credits. Betaal per gebruik.",
      features: {
        noRecurring: "Geen terugkerende kosten",
        noExpiry: "Credits verlopen nooit",
        free: "Gratis functies inbegrepen",
      },
      pack: {
        starter: {
          title: "Starter Pack",
          price: "$2.99",
          credits: "10 AI Credits",
          desc: "Ideaal om het uit te proberen.",
          value: "",
        },
        popular: {
          title: "Popular Pack",
          price: "$4.99",
          credits: "25 AI Credits",
          desc: "Beste voor seizoensgebonden vernieuwingen.",
          value: "Bespaar ~30%",
        },
        pro: {
          title: "Pro Pack",
          price: "$9.99",
          credits: "60 AI Credits",
          desc: "Voor fashion creators & power users.",
          value: "Beste Waarde (Bespaar ~45%)",
        },
      },
    },
    featuresPage: {
      title: "Functies",
      lead: "Luvaa helpt je mode te ontdekken, organiseren en verhandelen met slimme suggesties en een community-marktplaats.",
    },
    legal: {
      privacyTitle: "Privacybeleid",
      termsTitle: "Gebruiksvoorwaarden",
      contactTitle: "Contact",
      termsSummary: "Deze voorwaarden regelen het gebruik van de website en diensten van Luvaa.",
      userContentTitle: "Gebruikersinhoud",
      userContent: "Gebruikers behouden eigendom van geüploade afbeeldingen maar verlenen Luvaa een licentie om content te tonen en te verwerken.",
      privacySummary: "Uw privacy is belangrijk voor ons. Luvaa verzamelt accountgegevens en kastgegevens om personalisatie en marktplaatsfuncties te bieden.",
      dataUseTitle: "Gegevensgebruik",
      dataUse: "We gebruiken kastfoto's om tags en suggesties te genereren. Geaggregeerde, geanonimiseerde gegevens helpen bij het verbeteren van aanbevelingen.",
      deleteAccountTitle: "Luvaa – Account Verwijderen",
      deleteAccountIntro: "Gebruikers kunnen hun Luvaa-account op twee manieren verwijderen:",
      deleteMethod1Title: "In de Luvaa mobiele app:",
      deleteMethod1Desc: "Open de app, ga naar Profiel, klik op Instellingen en selecteer \"Account verwijderen\".",
      deleteMethod2Title: "Als de gebruiker geen toegang heeft tot de app:",
      deleteMethod2Desc: "Ze kunnen accountverwijdering aanvragen door een e-mail te sturen naar support@luvaa.app vanaf het e-mailadres dat aan hun Luvaa-account is gekoppeld.",
      dataDeletionTitle: "Details over gegevensverwijdering:",
      dataDeletionIntro: "Wanneer een account wordt verwijderd, worden de volgende gegevens permanent verwijderd:",
      dataDeletionItem1: "Account- en authenticatiegegevens",
      dataDeletionItem2: "Profielinformatie",
      dataDeletionItem3: "Opgeslagen outfits, items en gebruikersvoorkeuren",
      retentionTitle: "Bewaarperiode:",
      retentionDesc: "Alle bijbehorende gegevens worden binnen 30 dagen na het verwijderingsverzoek permanent verwijderd.",
    },
    contact: {
      title: "Contact",
      lead: "Vragen? Neem contact op via hello@luvaa.app of gebruik het onderstaande formulier.",
      form: {
        name: "Naam",
        email: "E-mail",
        message: "Bericht",
        send: "Bericht verzenden",
      },
    },
    blogPage: {
      title: "Blog",
      lead: "Verhalen, updates en inzichten van het Luvaa-team.",
    },
    blog: {
      featured: {
        title: "Uitgelicht: Hoe Vernieuw Je Je Kledingkast",
        body: "Leer praktische stappen om je kast te ordenen, stukken te identificeren om te behouden of te verkopen, en nieuwe outfits te maken zonder meer te kopen.",
      },
    },
    cta: {
      tryOnWeb: "Probeer op Web",
    },
    hero: {
      title1: "Je kledingkast,",
      titleHighlight: "Hernieuwd",
      subtitle:
        "Luvaa is de app die je stijl inspireert, je kast organiseert en helpt met kopen & verkopen van mode. Sluit je aan bij 10.000+ gebruikers en ontdek 300.000+ outfits.",
      appPreview: "App Voorbeeld",
    },
    stats: {
      users: "Gebruikers",
      outfits: "Outfits",
      items: "Items te koop",
    },
    features: {
      inspired: "Laat je inspireren",
      organize: "Organiseer kast",
      suggestions: "Slimme suggesties",
      sell: "Verkopen & Winkelen",
      digitalCloset: "Digitale Kast",
      digitalClosetDesc: "Upload foto's van je kleding, tag items en maak collecties.",
      aiSuggestions: "AI Outfit Suggesties",
      aiSuggestionsDesc: "Gepersonaliseerde outfit-voorstellen op basis van je kast en context.",
      marketplace: "Verkopen & Markt",
      marketplaceDesc: "Plaats items te koop met prijsvoorstellen en verbind met kopers.",
      inspiration: "Inspiratiefeed",
      inspirationDesc: "Ontdek outfits van de community en sla looks op.",
      search: "Slim Zoeken & Tags",
      searchDesc: "Vind items snel op kleur, seizoen of tags.",
      detailedTitle: "Alles wat je nodig hebt om je stijl te beheersen",
      detailedSubtitle: "Krachtige functies ontworpen om je interactie met je garderobe te transformeren",
      smartRecommendations: "Gepersonaliseerde Outfit Suggesties",
      smartRecommendationsDesc: "Krijg outfit suggesties op maat van je stijl. De app leert je voorkeuren en stelt looks voor die passen bij je smaak, gelegenheid en seizoen.",
      organizeDigital: "Organiseer je Kast Digitaal",
      organizeDigitalDesc: "Upload foto's van je kleding en accessoires. Items worden automatisch gecategoriseerd met verwijderde achtergronden, waardoor een doorzoekbare digitale garderobe ontstaat.",
      mixMatch: "Mix & Match in Real-Time",
      mixMatchDesc: "Sleep items om outfits te creëren op een virtueel canvas. Experimenteer met verschillende combinaties, achtergronden en layouts voordat je een look vastlegt.",
      intelligentAnalysis: "Slimme Outfit Analyse",
      intelligentAnalysisDesc: "Krijg directe inzichten over kleuren, patronen, stijlen en gelegenheden. Ontdek welke stukken goed samenwerken en krijg suggesties voor complementaire items.",
      saveOrganize: "Bewaar & Organiseer Inspiratie",
      saveOrganizeDesc: "Creëer aangepaste collecties voor verschillende gelegenheden, seizoenen of stemmingen. Bewaar outfits van onze feed of je eigen creaties voor gemakkelijke toegang later.",
      shopSimilar: "Shop Vergelijkbare Items",
      shopSimilarDesc: "Hou je van een outfit maar heb je de stukken niet? Blader door onze geïntegreerde marktplaats om vergelijkbare items te vinden of plaats je eigen kleding voor anderen om te ontdekken.",
      findInstantly: "Vind Alles Direct",
      findInstantlyDesc: "Zoek op kleur, stijl, seizoen of gelegenheid. Onze semantische zoekopdracht begrijpt natuurlijke taalvragen zoals 'casual zomerjurk' of 'formele winterjas'.",
      bgRemoval: "Professionele Achtergrondverwijdering",
      bgRemovalDesc: "Upload elke kledingfoto en onze AI verwijdert direct de achtergrond, waardoor schone, cataloguskwaliteit afbeeldingen ontstaan perfect voor je digitale garderobe.",
    },
    premium: {
      title: "Ontgrendel Meer met Luvaa Credits",
      aiOutfits: "Genereer outfits met AI (zelfs met je eigen foto's!)",
      bgRemoval: "Professionele achtergrondverwijdering",
      virtualTryOn: "Virtuele paskamer met AI",
      analytics: "Geavanceerde stijl inzichten",
      templates: "Exclusieve outfit templates",
      cta: "Bekijk Prijzen",
    },
    howItWorks: {
      title: "Ga in Minuten van Start",
      subtitle: "Vier eenvoudige stappen om je garderobe-ervaring te transformeren",
      step1Title: "Download de app",
      step1Desc: "Beschikbaar op iOS en Android",
      step2Title: "Upload je eerste items",
      step2Desc: "Maak foto's van je kleding",
      step3Title: "Ontdek samengestelde outfits",
      step3Desc: "Krijg gepersonaliseerde aanbevelingen",
      step4Title: "Creëer je eerste look",
      step4Desc: "Mix en match in Studio",
    },
    testimonials: {
      title: "Wat onze gebruikers zeggen",
    },
    footer: {
      company: {
        about: "Over ons",
        careers: "Vacatures",
        press: "Pers",
      },
      product: {
        features: "Functies",
        pricing: "Prijzen",
        blog: "Blog",
      },
      legal: {
        privacy: "Privacybeleid",
        terms: "Gebruiksvoorwaarden",
        contact: "Contact",
      },
      copyright: "© {year} Luvaa. Alle rechten voorbehouden.",
    },
    about: {
      title: "Over Luvaa",
      lead: "Luvaa begon als een passieproject om te heroverwegen hoe mensen omgaan met hun kledingkasten.",
      lead2: "Ons product combineert intuïtief ontwerp met machine learning om outfit-voorstellen op maat te leveren.",
      missionTitle: "Onze Missie",
      mission: "We willen mode duurzamer maken door mensen te helpen herontdekken wat ze al bezitten.",
      teamTitle: "Ons Team",
      team: "Een klein team van ontwerpers, ingenieurs en mode-enthousiastelingen die wereldwijd op afstand werken.",
    },
    careers: {
      intro: "Wir bauen die Zukunft der persönlichen Mode. Wenn Sie Design, mobile Apps und intelligentes Einkaufen lieben, freuen wir uns auf Ihre Bewerbung.",
      whyTitle: "Warum bei uns arbeiten",
      whyCopy: "Luvaa bietet flexibles Remote-Arbeiten, eine kollaborative Kultur und Chancen, Produktentscheidungen zu beeinflussen.",
      openRoles: "Offene Stellen",
      viewApply: "Ansehen & Bewerben",
      frontendSummary: "Verantwortlich für Web-UI und Performance. Erstellen Sie skalierbare, zugängliche Komponenten.",
      mobileSummary: "Liefern Sie native mobile Erlebnisse und Kamera-/Upload-Flows.",
      mlSummary: "Arbeiten Sie an Empfehlungssystemen und Retrieval, um Outfit-Vorschläge zu personalisieren.",
      designerSummary: "Gestalten Sie Mobile-first-Flows, Prototyping und Nutzerforschung.",
      contactCopy: "Alternativ können Sie Ihre Bewerbung an careers@luvaa.app senden.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      features: "Funktionen",
      pricing: "Preise",
      blog: "Blog",
      about: "Über",
      careers: "Karriere",
    },
    press: {
      title: "Presse & Medien",
      lead: "Für Presseanfragen, hochauflösende Assets oder Partnerschaften kontaktieren Sie press@luvaa.app.",
      kitTitle: "Pressekit",
      kitDesc: "Unser Pressekit enthält Logos, Screenshots und Biografien der Geschäftsführung.",
    },
    pricing: {
      title: "Preise",
      lead: "Keine Abos. Keine verfallenden Credits. Zahlen Sie nur, was Sie nutzen.",
      features: {
        noRecurring: "Keine wiederkehrenden Gebühren",
        noExpiry: "Credits verfallen nie",
        free: "Kostenlose Funktionen enthalten",
      },
      pack: {
        starter: {
          title: "Starter Pack",
          price: "$2.99",
          credits: "10 AI Credits",
          desc: "Perfekt zum Ausprobieren.",
          value: "",
        },
        popular: {
          title: "Popular Pack",
          price: "$4.99",
          credits: "25 AI Credits",
          desc: "Beste für saisonale Updates.",
          value: "Sparen Sie ~30%",
        },
        pro: {
          title: "Pro Pack",
          price: "$9.99",
          credits: "60 AI Credits",
          desc: "Für Mode-Creator & Power-User.",
          value: "Bester Wert (Sparen Sie ~45%)",
        },
      },
    },
    featuresPage: {
      title: "Funktionen",
      lead: "Luvaa hilft Ihnen, Mode zu entdecken, zu organisieren und zu handeln, mit intelligenten Vorschlägen und einem Community-Marktplatz.",
    },
    legal: {
      privacyTitle: "Datenschutz",
      termsTitle: "Nutzungsbedingungen",
      contactTitle: "Kontakt",
      termsSummary: "Diese Bedingungen regeln die Nutzung der Luvaa-Website und -Dienste.",
      userContentTitle: "Nutzerinhalte",
      userContent: "Nutzer behalten das Eigentum an hochgeladenen Bildern, gewähren Luvaa jedoch eine Lizenz zur Anzeige und Verarbeitung.",
      privacySummary: "Ihre Privatsphäre ist uns wichtig. Luvaa sammelt Kontoinformationen und Garderobendaten, um Personalisierung und Marktplatzfunktionen bereitzustellen.",
      dataUseTitle: "Datenverwendung",
      dataUse: "Wir verwenden Garderobenfotos, um Tags und Vorschläge zu generieren. Aggregierte, anonymisierte Daten verbessern Empfehlungen.",
      deleteAccountTitle: "Luvaa – Konto Löschen",
      deleteAccountIntro: "Benutzer können ihr Luvaa-Konto auf zwei Arten löschen:",
      deleteMethod1Title: "In der Luvaa Mobile App:",
      deleteMethod1Desc: "Öffnen Sie die App, gehen Sie zu Profil, klicken Sie auf Einstellungen und wählen Sie \"Konto löschen\".",
      deleteMethod2Title: "Wenn der Benutzer nicht auf die App zugreifen kann:",
      deleteMethod2Desc: "Sie können die Kontolöschung beantragen, indem sie eine E-Mail an support@luvaa.app von der E-Mail-Adresse senden, die mit ihrem Luvaa-Konto verknüpft ist.",
      dataDeletionTitle: "Details zur Datenlöschung:",
      dataDeletionIntro: "Wenn ein Konto gelöscht wird, werden die folgenden Daten dauerhaft entfernt:",
      dataDeletionItem1: "Konto- und Authentifizierungsdaten",
      dataDeletionItem2: "Profilinformationen",
      dataDeletionItem3: "Gespeicherte Outfits, Artikel und Benutzerpräferenzen",
      retentionTitle: "Aufbewahrung:",
      retentionDesc: "Alle zugehörigen Daten werden innerhalb von 30 Tagen nach der Löschanfrage dauerhaft gelöscht.",
    },
    contact: {
      title: "Kontakt",
      lead: "Fragen? Kontaktieren Sie uns unter hello@luvaa.app oder verwenden Sie das untenstehende Formular.",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Nachricht senden",
      },
    },
    blogPage: {
      title: "Blog",
      lead: "Geschichten, Updates und Einblicke vom Luvaa-Team.",
    },
    blog: {
      featured: {
        title: "Empfohlen: Wie Sie Ihre Garderobe Auffrischen",
        body: "Erfahren Sie praktische Schritte zum Sortieren Ihres Schranks, zur Identifizierung von Teilen zum Behalten oder Verkaufen und zum Erstellen neuer Outfits.",
      },
    },
    cta: {
      tryOnWeb: "Im Web ausprobieren",
    },
    hero: {
      title1: "Dein Kleiderschrank,",
      titleHighlight: "Neu gedacht",
      subtitle:
        "Luvaa ist die App, die deinen Stil inspiriert, deinen Kleiderschrank organisiert und beim Kaufen & Verkaufen von Mode hilft. Schließe dich 10.000+ Nutzern an und entdecke 300.000+ Outfits.",
      appPreview: "App Vorschau",
    },
    stats: {
      users: "Benutzer",
      outfits: "Outfits",
      items: "Artikel zum Verkauf",
    },
    features: {
      inspired: "Lass dich inspirieren",
      organize: "Kleiderschrank organisieren",
      suggestions: "Intelligente Vorschläge",
      sell: "Verkaufen & Einkaufen",
      digitalCloset: "Digitale Garderobe",
      digitalClosetDesc: "Lade Fotos deiner Kleidung hoch, tagge Items und erstelle Kollektionen.",
      aiSuggestions: "KI Outfit-Vorschläge",
      aiSuggestionsDesc: "Personalisierte Outfit-Empfehlungen basierend auf deinem Kleiderschrank und Kontext.",
      marketplace: "Verkauf & Marktplatz",
      marketplaceDesc: "Stelle Artikel zum Verkauf mit Preisvorschlägen ein und verbinde dich mit Käufern.",
      inspiration: "Inspiration Feed",
      inspirationDesc: "Entdecke Outfits aus der Community und speichere Looks.",
      search: "Intelligente Suche & Tags",
      searchDesc: "Finde Artikel schnell nach Farbe, Saison oder benutzerdefinierten Tags.",
      detailedTitle: "Alles, was du brauchst, um deinen Stil zu meistern",
      detailedSubtitle: "Leistungsstarke Funktionen, die deine Interaktion mit deiner Garderobe transformieren",
      smartRecommendations: "Personalisierte Outfit-Empfehlungen",
      smartRecommendationsDesc: "Erhalte auf deinen Stil zugeschnittene Outfit-Vorschläge. Die App lernt deine Präferenzen und schlägt Looks vor, die zu deinem Geschmack, Anlass und der Saison passen.",
      organizeDigital: "Organisiere deinen Kleiderschrank digital",
      organizeDigitalDesc: "Lade Fotos deiner Kleidung und Accessoires hoch. Artikel werden automatisch kategorisiert und Hintergründe entfernt, wodurch eine durchsuchbare digitale Garderobe entsteht.",
      mixMatch: "Mix & Match in Echtzeit",
      mixMatchDesc: "Ziehe Artikel per Drag & Drop, um Outfits auf einer virtuellen Leinwand zu erstellen. Experimentiere mit verschiedenen Kombinationen, Hintergründen und Layouts.",
      intelligentAnalysis: "Intelligente Outfit-Analyse",
      intelligentAnalysisDesc: "Erhalte sofortige Einblicke in Farben, Muster, Stile und Anlässe. Entdecke, welche Teile gut zusammenpassen und erhalte Vorschläge für ergänzende Artikel.",
      saveOrganize: "Speichere & Organisiere Inspiration",
      saveOrganizeDesc: "Erstelle benutzerdefinierte Kollektionen für verschiedene Anlässe, Jahreszeiten oder Stimmungen. Speichere Outfits aus unserem kuratierten Feed oder deine eigenen Kreationen für späteren Zugriff.",
      shopSimilar: "Kaufe ähnliche Artikel",
      shopSimilarDesc: "Liebst du ein Outfit, besitzt aber die Teile nicht? Durchsuche unseren integrierten Marktplatz, um ähnliche Artikel zu finden oder liste deine eigene Kleidung für andere zum Entdecken.",
      findInstantly: "Finde alles sofort",
      findInstantlyDesc: "Suche nach Farbe, Stil, Saison oder Anlass. Unsere semantische Suche versteht natürliche Sprachanfragen wie 'lässiges Sommerkleid' oder 'formeller Wintermantel'.",
      bgRemoval: "Professionelle Hintergrundentfernung",
      bgRemovalDesc: "Lade jedes Kleidungsfoto hoch und unsere KI entfernt sofort den Hintergrund und erstellt saubere, katalogqualität Bilder, die perfekt für deine digitale Garderobe sind.",
    },
    premium: {
      title: "Schalte mehr frei mit Luvaa Credits",
      aiOutfits: "Generiere Outfits mit KI (sogar mit deinen eigenen Fotos!)",
      bgRemoval: "Professionelle Hintergrundentfernung",
      virtualTryOn: "Virtuelle Anprobe mit KI",
      analytics: "Erweiterte Stil-Einblicke",
      templates: "Exklusive Outfit-Vorlagen",
      cta: "Preise ansehen",
    },
    howItWorks: {
      title: "Starte in Minuten",
      subtitle: "Vier einfache Schritte, um dein Garderobe-Erlebnis zu transformieren",
      step1Title: "Lade die App herunter",
      step1Desc: "Verfügbar für iOS und Android",
      step2Title: "Lade deine ersten Artikel hoch",
      step2Desc: "Fotografiere deine Kleidung",
      step3Title: "Entdecke kuratierte Outfits",
      step3Desc: "Erhalte personalisierte Empfehlungen",
      step4Title: "Erstelle deinen ersten Look",
      step4Desc: "Mix und Match im Studio",
    },
    testimonials: {
      title: "Was unsere Nutzer sagen",
    },
    footer: {
      company: {
        about: "Über uns",
        careers: "Karriere",
        press: "Presse",
      },
      product: {
        features: "Funktionen",
        pricing: "Preise",
        blog: "Blog",
      },
      legal: {
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        contact: "Kontakt",
      },
      copyright: "© {year} Luvaa. Alle Rechte vorbehalten.",
    },
    about: {
      title: "Über Luvaa",
      lead: "Luvaa begann als ein Projekt aus Leidenschaft, um neu zu denken, wie Menschen mit ihren Kleiderschränken interagieren.",
      lead2: "Unser Produkt kombiniert intuitives Design mit Machine Learning, um Outfit-Vorschläge zu liefern, die auf persönlichen Geschmack und Anlass zugeschnitten sind.",
      missionTitle: "Unsere Mission",
      mission: "Wir möchten Mode nachhaltiger machen, indem wir Menschen helfen, wiederzuentdecken, was sie bereits besitzen.",
      teamTitle: "Unser Team",
      team: "Ein kleines Team von Designern, Ingenieuren und Modebegeisterten, die remote über die ganze Welt verteilt arbeiten.",
    },
    careers: {
      intro: "Nous construisons l'avenir de la mode personnelle. Si vous aimez le design, les applications mobiles et une expérience d'achat plus intelligente, nous serions ravis de vous rencontrer.",
      whyTitle: "Pourquoi travailler avec nous",
      whyCopy: "Luvaa offre du travail à distance flexible, une culture collaborative et des opportunités d'influencer des produits utilisés par des milliers d'utilisateurs.",
      openRoles: "Postes ouverts",
      viewApply: "Voir & Postuler",
      frontendSummary: "Gérer l'UI web et les performances. Construire des composants évolutifs et accessibles.",
      mobileSummary: "Fournir des expériences mobiles natives et des flux de caméra/téléversement.",
      mlSummary: "Travailler sur des systèmes de recommandation et de recherche pour personnaliser les suggestions de tenues.",
      designerSummary: "Concevoir des parcours mobile-first, des prototypes et mener des recherches utilisateurs.",
      contactCopy: "Vous pouvez également envoyer un e-mail à careers@luvaa.app avec votre CV et une courte note.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      blog: "Blog",
      about: "À propos",
      careers: "Carrières",
    },
    press: {
      title: "Presse & Médias",
      lead: "Pour les demandes de presse, les assets haute résolution ou les partenariats, contactez press@luvaa.app.",
      kitTitle: "Kit de presse",
      kitDesc: "Notre kit de presse comprend des logos, captures d'écran et biographies.",
    },
    pricing: {
      title: "Tarifs",
      lead: "Pas d'abonnement. Pas de crédits expirants. Payez à l'utilisation.",
      features: {
        noRecurring: "Pas de frais récurrents",
        noExpiry: "Les crédits n'expirent jamais",
        free: "Fonctionnalités gratuites incluses",
      },
      pack: {
        starter: {
          title: "Starter Pack",
          price: "$2.99",
          credits: "10 Crédits IA",
          desc: "Idéal pour essayer.",
          value: "",
        },
        popular: {
          title: "Popular Pack",
          price: "$4.99",
          credits: "25 Crédits IA",
          desc: "Parfait pour les changements de saison.",
          value: "Économisez ~30%",
        },
        pro: {
          title: "Pro Pack",
          price: "$9.99",
          credits: "60 Crédits IA",
          desc: "Pour les créateurs de mode & utilisateurs avancés.",
          value: "Meilleure valeur (Économisez ~45%)",
        },
      },
    },
    featuresPage: {
      title: "Fonctionnalités",
      lead: "Luvaa vous aide à découvrir, organiser et échanger de la mode grâce à des suggestions intelligentes et une place de marché communautaire.",
    },
    legal: {
      privacyTitle: "Politique de confidentialité",
      termsTitle: "Conditions d'utilisation",
      contactTitle: "Contact",
      termsSummary: "Ces conditions régissent l'utilisation du site Web et des services de Luvaa.",
      userContentTitle: "Contenu utilisateur",
      userContent: "Les utilisateurs conservent la propriété des images qu'ils téléchargent mais accordent à Luvaa une licence pour afficher et traiter le contenu.",
      privacySummary: "Votre vie privée compte pour nous. Luvaa collecte des informations de compte et des données de garde-robe pour fournir des fonctionnalités de personnalisation et de marché.",
      dataUseTitle: "Utilisation des données",
      dataUse: "Nous utilisons les photos de garde-robe pour générer des tags et des suggestions. Les données agrégées et anonymisées améliorent les recommandations.",
      deleteAccountTitle: "Luvaa – Suppression de Compte",
      deleteAccountIntro: "Les utilisateurs peuvent supprimer leur compte Luvaa de deux manières :",
      deleteMethod1Title: "Dans l'application mobile Luvaa :",
      deleteMethod1Desc: "Ouvrez l'application, allez dans Profil, cliquez sur Paramètres et sélectionnez \"Supprimer le compte\".",
      deleteMethod2Title: "Si l'utilisateur ne peut pas accéder à l'application :",
      deleteMethod2Desc: "Ils peuvent demander la suppression du compte en envoyant un e-mail à support@luvaa.app depuis l'adresse e-mail associée à leur compte Luvaa.",
      dataDeletionTitle: "Détails de la suppression des données :",
      dataDeletionIntro: "Lorsqu'un compte est supprimé, les données suivantes sont définitivement supprimées :",
      dataDeletionItem1: "Données de compte et d'authentification",
      dataDeletionItem2: "Informations de profil",
      dataDeletionItem3: "Tenues enregistrées, articles et préférences utilisateur",
      retentionTitle: "Rétention :",
      retentionDesc: "Toutes les données associées sont définitivement supprimées dans les 30 jours suivant la demande de suppression.",
    },
    contact: {
      title: "Contact",
      lead: "Des questions ? Contactez-nous à hello@luvaa.app ou utilisez le formulaire ci-dessous.",
      form: {
        name: "Nom",
        email: "E-mail",
        message: "Message",
        send: "Envoyer",
      },
    },
    blogPage: {
      title: "Blog",
      lead: "Histoires, mises à jour et perspectives de l'équipe Luvaa.",
    },
    blog: {
      featured: {
        title: "En vedette: Comment rafraîchir votre garde-robe",
        body: "Apprenez des étapes pratiques pour trier votre garde-robe, identifier les pièces à garder ou à vendre et créer de nouvelles tenues sans acheter davantage.",
      },
    },
    cta: {
      tryOnWeb: "Essayer sur le Web",
    },
    hero: {
      title1: "Votre garde-robe,",
      titleHighlight: "Réinventée",
      subtitle:
        "Luvaa est l'application qui inspire votre style, organise votre garde-robe et vous aide à acheter et vendre de la mode. Rejoignez 10 000+ utilisateurs et découvrez 300 000+ tenues.",
      appPreview: "Aperçu de l'application",
    },
    stats: {
      users: "Utilisateurs",
      outfits: "Tenues",
      items: "Articles en vente",
    },
    features: {
      inspired: "Trouvez l'inspiration",
      organize: "Organiser la garde-robe",
      suggestions: "Suggestions intelligentes",
      sell: "Vendre & Acheter",
      digitalCloset: "Garde-robe Numérique",
      digitalClosetDesc: "Téléchargez des photos de vos vêtements, taguez des articles et créez des collections.",
      aiSuggestions: "Suggestions d'Outfits IA",
      aiSuggestionsDesc: "Recommandations personnalisées basées sur votre garde-robe et le contexte.",
      marketplace: "Vente & Marché",
      marketplaceDesc: "Mettez des articles en vente avec suggestions de prix et connectez-vous avec des acheteurs.",
      inspiration: "Fil d'inspiration",
      inspirationDesc: "Découvrez des tenues de la communauté et enregistrez des looks.",
      search: "Recherche Intelligente & Tags",
      searchDesc: "Trouvez rapidement des articles par couleur, saison ou tags personnalisés.",
      detailedTitle: "Tout ce dont vous avez besoin pour maîtriser votre style",
      detailedSubtitle: "Des fonctionnalités puissantes conçues pour transformer votre interaction avec votre garde-robe",
      smartRecommendations: "Suggestions de tenues personnalisées",
      smartRecommendationsDesc: "Obtenez des suggestions de tenues adaptées à votre style. L'application apprend vos préférences et suggère des looks qui correspondent à votre goût, occasion et saison.",
      organizeDigital: "Organisez votre garde-robe numériquement",
      organizeDigitalDesc: "Téléchargez des photos de vos vêtements et accessoires. Les articles sont automatiquement catégorisés avec suppression d'arrière-plan, créant une garde-robe numérique consultable.",
      mixMatch: "Mixez et associez en temps réel",
      mixMatchDesc: "Glissez-déposez des articles pour créer des tenues sur un canevas virtuel. Expérimentez avec différentes combinaisons, arrière-plans et mises en page.",
      intelligentAnalysis: "Analyse intelligente des tenues",
      intelligentAnalysisDesc: "Obtenez des informations instantanées sur les couleurs, motifs, styles et occasions. Découvrez quelles pièces fonctionnent bien ensemble et obtenez des suggestions d'articles complémentaires.",
      saveOrganize: "Enregistrez et organisez l'inspiration",
      saveOrganizeDesc: "Créez des collections personnalisées pour différentes occasions, saisons ou humeurs. Enregistrez des tenues de notre flux organisé ou vos propres créations pour un accès facile plus tard.",
      shopSimilar: "Achetez des articles similaires",
      shopSimilarDesc: "Vous aimez une tenue mais ne possédez pas les pièces? Parcourez notre marché intégré pour trouver des articles similaires ou listez vos propres vêtements pour que d'autres les découvrent.",
      findInstantly: "Trouvez tout instantanément",
      findInstantlyDesc: "Recherchez par couleur, style, saison ou occasion. Notre recherche sémantique comprend les requêtes en langage naturel comme 'robe d'été décontractée' ou 'manteau d'hiver formel'.",
      bgRemoval: "Suppression d'arrière-plan professionnelle",
      bgRemovalDesc: "Téléchargez n'importe quelle photo de vêtement et notre IA supprime instantanément l'arrière-plan, créant des images propres de qualité catalogue parfaites pour votre garde-robe numérique.",
    },
    premium: {
      title: "Débloquez plus avec Luvaa Credits",
      aiOutfits: "Générez des tenues avec l'IA (même avec vos propres photos!)",
      bgRemoval: "Suppression d'arrière-plan professionnelle",
      virtualTryOn: "Essayage virtuel avec l'IA",
      analytics: "Analyses de style avancées",
      templates: "Modèles de tenues exclusifs",
      cta: "Voir les tarifs",
    },
    howItWorks: {
      title: "Commencez en quelques minutes",
      subtitle: "Quatre étapes simples pour transformer votre expérience de garde-robe",
      step1Title: "Téléchargez l'application",
      step1Desc: "Disponible sur iOS et Android",
      step2Title: "Téléchargez vos premiers articles",
      step2Desc: "Prenez des photos de vos vêtements",
      step3Title: "Explorez les tenues organisées",
      step3Desc: "Obtenez des recommandations personnalisées",
      step4Title: "Créez votre premier look",
      step4Desc: "Mixez et associez dans Studio",
    },
    testimonials: {
      title: "Ce que disent nos utilisateurs",
    },
    footer: {
      company: {
        about: "À propos",
        careers: "Carrières",
        press: "Presse",
      },
      product: {
        features: "Fonctionnalités",
        pricing: "Tarifs",
        blog: "Blog",
      },
      legal: {
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        contact: "Contact",
      },
      copyright: "© {year} Luvaa. Tous droits réservés.",
    },
    about: {
      title: "À propos de Luvaa",
      lead: "Luvaa a commencé comme un projet passion pour repenser la façon dont les gens interagissent avec leur garde-robe.",
      lead2: "Notre produit combine un design intuitif et le machine learning pour proposer des tenues adaptées au goût et à l'occasion.",
      missionTitle: "Notre Mission",
      mission: "Nous visons à rendre la mode plus durable en aidant les gens à redécouvrir ce qu'ils possèdent déjà.",
      teamTitle: "Notre Équipe",
      team: "Une petite équipe de designers, d'ingénieurs et de passionnés de mode travaillant à distance dans le monde entier.",
    },
    careers: {
      intro: "Kişisel modanın geleceğini inşa ediyoruz. Tasarımı, mobil uygulamaları ve daha akıllı alışveriş deneyimlerini seviyorsanız, sizden haber almayı isteriz.",
      whyTitle: "Neden Bizimle Çalışmalısınız",
      whyCopy: "Luvaa esnek uzaktan çalışma, işbirlikçi bir kültür ve binlerce kullanıcı tarafından kullanılan ürünleri etkileme fırsatları sunar.",
      openRoles: "Açık Pozisyonlar",
      viewApply: "Görüntüle & Başvur",
      frontendSummary: "Web UI ve performanstan sorumlu olun. Ölçeklenebilir, erişilebilir bileşenler oluşturun.",
      mobileSummary: "Yerel hisli mobil deneyimler ve kamera/yükleme akışları sağlayın.",
      mlSummary: "Kişiselleştirilmiş kıyafet önerileri için öneri ve retrieval sistemleri üzerinde çalışın.",
      designerSummary: "Mobil öncelikli akışlar, prototipleme ve kullanıcı araştırması tasarlayın.",
      contactCopy: "Alternatif olarak, özgeçmişinizi ve kısa bir notu careers@luvaa.app adresine e-posta ile gönderebilirsiniz.",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      features: "Özellikler",
      pricing: "Fiyatlandırma",
      blog: "Blog",
      about: "Hakkında",
      careers: "Kariyer",
    },
    press: {
      title: "Basın & Medya",
      lead: "Basın talepleri, yüksek çözünürlüklü varlıklar veya ortaklık fırsatları için press@luvaa.app adresiyle iletişime geçin.",
      kitTitle: "Basın Kiti",
      kitDesc: "Basın kitimiz logolar, ekran görüntüleri ve yönetici biyografilerini içerir.",
    },
    pricing: {
      title: "Fiyatlandırma",
      lead: "Abonelik yok. Süresi dolan krediler yok. Sadece kullandıkça öde.",
      features: {
        noRecurring: "Tekrarlayan ücret yok",
        noExpiry: "Kredilerin süresi asla dolmaz",
        free: "Ücretsiz özellikler dahil",
      },
      pack: {
        starter: {
          title: "Starter Pack",
          price: "$2.99",
          credits: "10 AI Kredisi",
          desc: "Denemek için en iyisi.",
          value: "",
        },
        popular: {
          title: "Popular Pack",
          price: "$4.99",
          credits: "25 AI Kredisi",
          desc: "Mevsimlik gardırop yenilemeleri için.",
          value: "%30 Tasarruf Edin",
        },
        pro: {
          title: "Pro Pack",
          price: "$9.99",
          credits: "60 AI Kredisi",
          desc: "Moda yaratıcıları ve sık kullanıcılar için.",
          value: "En İyi Değer (%45 Tasarruf Edin)",
        },
      },
    },
    featuresPage: {
      title: "Özellikler",
      lead: "Luvaa, akıllı öneriler ve topluluk odaklı bir pazar yeri ile modayı keşfetmenize, düzenlemenize ve takas etmenize yardımcı olur.",
    },
    legal: {
      privacyTitle: "Gizlilik Politikası",
      termsTitle: "Hizmet Şartları",
      contactTitle: "İletişim",
      termsSummary: "Bu şartlar Luvaa'nin web sitesi ve hizmetlerinin kullanımını düzenler.",
      userContentTitle: "Kullanıcı İçeriği",
      userContent: "Kullanıcılar yükledikleri görsellerin sahipliğini korur, ancak Luvaa'nin hizmetleri sağlamak için görüntülemeye ve işlemeye yönelik bir lisans verir.",
      privacySummary: "Gizliliğiniz bizim için önemlidir. Luvaa, kişiselleştirme ve pazar yeri özellikleri sağlamak için hesap bilgileri ve dolap verileri toplar.",
      dataUseTitle: "Veri Kullanımı",
      dataUse: "Dolap fotoğraflarını etiketler ve öneriler oluşturmak için kullanıyoruz. Toplu, anonim veriler önerileri geliştirmeye yardımcı olur.",
      deleteAccountTitle: "Luvaa – Hesap Silme",
      deleteAccountIntro: "Kullanıcılar Luvaa hesaplarını iki şekilde silebilirler:",
      deleteMethod1Title: "Luvaa mobil uygulamasında:",
      deleteMethod1Desc: "Uygulamayı açın, Profil'e gidin, Ayarlar'a tıklayın ve \"Hesabı sil\" seçeneğini seçin.",
      deleteMethod2Title: "Kullanıcı uygulamaya erişemiyorsa:",
      deleteMethod2Desc: "Luvaa hesaplarıyla ilişkili e-posta adresinden support@luvaa.app adresine e-posta göndererek hesap silme talebinde bulunabilirler.",
      dataDeletionTitle: "Veri silme detayları:",
      dataDeletionIntro: "Bir hesap silindiğinde, aşağıdaki veriler kalıcı olarak kaldırılır:",
      dataDeletionItem1: "Hesap ve kimlik doğrulama verileri",
      dataDeletionItem2: "Profil bilgileri",
      dataDeletionItem3: "Kaydedilmiş kıyafetler, öğeler ve kullanıcı tercihleri",
      retentionTitle: "Saklama:",
      retentionDesc: "İlişkili tüm veriler, silme talebinden sonraki 30 gün içinde kalıcı olarak silinir.",
    },
    contact: {
      title: "İletişim",
      lead: "Sorularınız mı var? Bize hello@luvaa.app adresinden ulaşın veya aşağıdaki formu kullanın.",
      form: {
        name: "İsim",
        email: "E-posta",
        message: "Mesaj",
        send: "Mesaj Gönder",
      },
    },
    blogPage: {
      title: "Blog",
      lead: "Luvaa ekibinden hikayeler, güncellemeler ve içgörüler.",
    },
    blog: {
      featured: {
        title: "Öne Çıkan: Gardırobunuzu Nasıl Yenilersiniz",
        body: "Dolabınızı düzenlemek, saklanacak veya satılacak parçaları belirlemek ve daha fazla satın almadan yeni kıyafetler oluşturmak için pratik adımları öğrenin.",
      },
    },
    cta: {
      tryOnWeb: "Web'de dene",
    },
    hero: {
      title1: "Dolabınız,",
      titleHighlight: "Yeniden Hayal Edildi",
      subtitle:
        "Luvaa, tarzınızı ilham veren, dolabınızı düzenleyen ve moda alım-satımında yardımcı olan uygulamadır. 10.000+ kullanıcıya katılın ve 300.000+ kıyafet keşfedin.",
      appPreview: "Uygulama Önizlemesi",
    },
    stats: {
      users: "Kullanıcılar",
      outfits: "Kıyafetler",
      items: "Satıştaki Ürünler",
    },
    features: {
      inspired: "İlham Alın",
      organize: "Dolabı Düzenle",
      suggestions: "Akıllı Öneriler",
      sell: "Sat & Satın Al",
      digitalCloset: "Dijital Dolap",
      digitalClosetDesc: "Kıyafetlerinizin fotoğraflarını yükleyin, öğeleri etiketleyin ve koleksiyonlar oluşturun.",
      aiSuggestions: "AI Kıyafet Önerileri",
      aiSuggestionsDesc: "Dolabınıza ve bağlama göre kişiselleştirilmiş öneriler.",
      marketplace: "Satış & Pazar Yeri",
      marketplaceDesc: "Fiyat önerileri ile ürünlerinizi listeleyin ve alıcılarla bağlantı kurun.",
      inspiration: "İlham Akışı",
      inspirationDesc: "Topluluktan kıyafetler keşfedin ve beğendiğiniz görünümleri kaydedin.",
      search: "Akıllı Arama & Etiketler",
      searchDesc: "Renk, sezon veya özel etiketlere göre öğeleri hızlıca bulun.",
      detailedTitle: "Tarzınızda Ustalaşmak İçin İhtiyacınız Olan Her Şey",
      detailedSubtitle: "Gardırobunuzla etkileşiminizi dönüştürmek için tasarlanmış güçlü özellikler",
      smartRecommendations: "Kişiselleştirilmiş Kıyafet Önerileri",
      smartRecommendationsDesc: "Tarzınıza uygun kıyafet önerileri alın. Uygulama tercihlerinizi öğrenir ve zevkinize, durumunuza ve mevsime uygun görünümler önerir.",
      organizeDigital: "Dolabınızı Dijital Olarak Düzenleyin",
      organizeDigitalDesc: "Kıyafetlerinizin ve aksesuarlarınızın fotoğraflarını yükleyin. Öğeler otomatik olarak kategorize edilir ve arka planlar kaldırılır, her yerden erişilebilen aranabilir bir dijital gardırop oluşturulur.",
      mixMatch: "Gerçek Zamanlı Mix & Match",
      mixMatchDesc: "Sanal bir tuvalde kıyafetler oluşturmak için öğeleri sürükleyip bırakın. Bir görünüme karar vermeden önce farklı kombinasyonlar, arka planlar ve düzenlerle denemeler yapın.",
      intelligentAnalysis: "Akıllı Kıyafet Analizi",
      intelligentAnalysisDesc: "Renkler, desenler, stiller ve durumlar hakkında anında içgörüler edinin. Hangi parçaların iyi çalıştığını keşfedin ve tamamlayıcı öğeler için öneriler alın.",
      saveOrganize: "İlhamı Kaydedin ve Düzenleyin",
      saveOrganizeDesc: "Farklı durumlar, mevsimler veya ruh halleri için özel koleksiyonlar oluşturun. Daha sonra kolay erişim için düzenlenmiş akışımızdan veya kendi kreasyonlarınızdan kıyafetleri kaydedin.",
      shopSimilar: "Benzer Ürünleri Satın Alın",
      shopSimilarDesc: "Bir kıyafeti seviyor ama parçalara sahip değil misiniz? Benzer öğeleri bulmak için entegre pazarımıza göz atın veya başkalarının keşfetmesi için kendi kıyafetlerinizi listeleyin.",
      findInstantly: "Her Şeyi Anında Bulun",
      findInstantlyDesc: "Renk, stil, mevsim veya duruma göre arama yapın. Semantik aramam 'gündelik yaz elbisesi' veya 'resmi kış paltosu' gibi doğal dil sorgularını anlar.",
      bgRemoval: "Profesyonel Arka Plan Kaldırma",
      bgRemovalDesc: "Herhangi bir giysi fotoğrafı yükleyin ve AI'mız anında arka planı kaldırır, dijital gardırobunuz için mükemmel temiz, katalog kalitesinde görüntüler oluşturur.",
    },
    premium: {
      title: "Luvaa Kredileri ile Daha Fazlasını Açın",
      aiOutfits: "AI ile kıyafet oluşturun (kendi fotoğraflarınızla bile!)",
      bgRemoval: "Profesyonel arka plan kaldırma",
      virtualTryOn: "AI ile sanal deneme",
      analytics: "Gelişmiş stil içgörüleri",
      templates: "Özel kıyafet şablonları",
      cta: "Fiyatlandırmayı Görün",
    },
    howItWorks: {
      title: "Dakikalar İçinde Başlayın",
      subtitle: "Gardırop deneyiminizi dönüştürmek için dört basit adım",
      step1Title: "Uygulamayı indirin",
      step1Desc: "iOS ve Android'de mevcut",
      step2Title: "İlk öğelerinizi yükleyin",
      step2Desc: "Kıyafetlerinizin fotoğraflarını çekin",
      step3Title: "Seçilmiş kıyafetleri keşfedin",
      step3Desc: "Kişiselleştirilmiş öneriler alın",
      step4Title: "İlk görünümünüzü oluşturun",
      step4Desc: "Studio'da mix ve match yapın",
    },
    testimonials: {
      title: "Kullanıcılarımız Ne Diyor",
    },
    footer: {
      company: {
        about: "Hakkımızda",
        careers: "Kariyer",
        press: "Basın",
      },
      product: {
        features: "Özellikler",
        pricing: "Fiyatlandırma",
        blog: "Blog",
      },
      legal: {
        privacy: "Gizlilik Politikası",
        terms: "Hizmet Şartları",
        contact: "İletişim",
      },
      copyright: "© {year} Luvaa. Tüm hakları saklıdır.",
    },
    about: {
      title: "Luvaa Hakkında",
      lead: "Luvaa, insanların gardıroplarıyla nasıl etkileşimde bulunduğunu yeniden tasarlamak için bir tutku projesi olarak başladı.",
      lead2: "Ürünümüz, kişisel zevk ve duruma göre kıyafet önerileri sunmak için sezgisel tasarımı makine öğrenimi ile birleştirir.",
      missionTitle: "Misyonumuz",
      mission: "İnsanların zaten sahip olduklarını yeniden keşfetmelerine yardımcı olarak modayı daha sürdürülebilir hale getirmeyi amaçlıyoruz.",
      teamTitle: "Ekibimiz",
      team: "Dünya çapında uzaktan çalışan küçük bir tasarımcı, mühendis ve moda meraklıları ekibi.",
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  availableLocales: { code: Locale; label: string }[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null;
      return (saved as Locale) || "en";
    } catch (e) {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch (e) { }
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const availableLocales = useMemo(
    () => [
      { code: "en" as Locale, label: "English" },
      { code: "nl" as Locale, label: "Nederlands" },
      { code: "de" as Locale, label: "Deutsch" },
      { code: "fr" as Locale, label: "Français" },
      { code: "tr" as Locale, label: "Türkçe" },
    ],
    []
  );

  const t = (key: string, vars?: Record<string, string | number>) => {
    const parts = key.split(".");
    let cur: any = translations[locale] || translations["en"];
    for (const p of parts) {
      if (!cur) break;
      cur = cur[p];
    }
    let out = typeof cur === "undefined" ? key : String(cur);
    if (vars) {
      for (const k of Object.keys(vars)) {
        out = out.replace(`{${k}}`, String(vars[k]));
      }
    }
    return out;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, availableLocales }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export default I18nProvider;
