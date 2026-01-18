(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/I18nProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const translations = {
    en: {
        nav: {
            home: "Home",
            features: "Features",
            pricing: "Pricing",
            blog: "Blog",
            about: "About",
            careers: "Careers"
        },
        hero: {
            badge: "Your Personal Style Companion",
            title1: "Dress Better.",
            titleHighlight: "Feel Amazing.",
            subtitle: "The AI-powered fashion app that rates your outfits, suggests what to wear, and helps you discover your unique style. Join 10,000+ users who've transformed their wardrobes.",
            downloadOn: "Download on the",
            getItOn: "GET IT ON",
            scroll: "Scroll to explore"
        },
        stats: {
            users: "Users",
            outfits: "Outfits",
            rating: "App Rating"
        },
        features: {
            badge: "Powerful Features",
            title: "Everything You Need to Look Your Best",
            subtitle: "Six game-changing features designed to transform how you dress, shop, and express yourself through fashion.",
            learnMore: "Learn more",
            rateFit: {
                title: "Rate My Fit",
                tagline: "Get honest feedback instantly",
                description: "Snap a photo of your outfit and get instant, honest ratings. We don't just give you a score—we give you actionable tips on how to elevate your look."
            },
            styleGenie: {
                title: "Style Genie",
                tagline: "'I have nothing to wear' is cancelled",
                description: "Tell the Style Genie where you're going—a date, the office, or a lazy Sunday—and it will build the perfect outfit from your digital closet instantly."
            },
            inspiration: {
                title: "Infinite Inspiration",
                tagline: "Never feel uninspired again",
                description: "Scroll through thousands of stunning, real-world outfit ideas from our global community. Filter by style, season, or occasion to spark your next great look."
            },
            studio: {
                title: "Try Before You Wear",
                tagline: "Your virtual fitting room",
                description: "Mix and match your clothes on a digital canvas. Layer jackets, swap shoes, and test accessories—create your dream outfit while your clothes stay folded."
            },
            marketplace: {
                title: "Shop The Look",
                tagline: "Find what you're missing",
                description: "See an outfit you love but missing that key piece? Our marketplace connects you to unique items from style-savvy users who share your taste."
            },
            fashionDna: {
                title: "Fashion DNA",
                tagline: "Discover your unique style",
                description: "Take our interactive quiz to decode your personal Fashion DNA. Understand your core aesthetic and build a wardrobe that's 100% authentically you."
            }
        },
        howItWorks: {
            badge: "Simple & Easy",
            title: "Get Started in Minutes",
            subtitle: "Four simple steps to transform your wardrobe experience",
            step1Title: "Download the App",
            step1Desc: "Available free on iOS and Android",
            step2Title: "Snap Your Clothes",
            step2Desc: "Build your digital wardrobe",
            step3Title: "Get Styled",
            step3Desc: "Receive personalized suggestions",
            step4Title: "Look Amazing",
            step4Desc: "Step out with confidence"
        },
        testimonials: {
            badge: "Loved by Users",
            title: "Real People, Real Results",
            quote1: "Luvaa completely changed how I approach getting dressed. The outfit ratings are spot-on!",
            quote2: "The Style Genie is like having a personal stylist in my pocket. I'm never stuck anymore.",
            quote3: "I've discovered my personal style thanks to the Fashion DNA quiz. Game changer!",
            quote4: "Finally found my aesthetic. The inspiration feed is incredible!",
            quote5: "The Studio feature saved me from so many bad outfit decisions.",
            quote6: "Sold items I never wore and found unique pieces from other users!"
        },
        trust: {
            secure: "Secure & Private",
            privacy: "Your Data Protected",
            free: "Free to Download"
        },
        cta: {
            title: "Ready to Transform Your Style?",
            subtitle: "Join thousands of users who've already discovered their best looks. Download Luvaa today and start dressing with confidence.",
            download: "Download Free",
            pricing: "View Pricing"
        },
        premium: {
            title: "Unlock More with Luvaa Credits",
            aiOutfits: "Generate outfits with AI",
            bgRemoval: "Professional background removal",
            virtualTryOn: "Virtual try-on with AI",
            analytics: "Advanced style insights",
            templates: "Exclusive outfit templates",
            cta: "See Pricing"
        },
        pricing: {
            title: "Simple, Transparent Pricing",
            lead: "No subscriptions. No expiring credits. Just pay as you go and unlock premium features.",
            features: {
                noRecurring: "No recurring fees",
                noExpiry: "Credits never expire",
                free: "Free features included"
            },
            pack: {
                starter: {
                    title: "Starter Pack",
                    price: "$2.99",
                    credits: "10 AI Credits",
                    desc: "Perfect for trying it out.",
                    value: ""
                },
                popular: {
                    title: "Popular Pack",
                    price: "$4.99",
                    credits: "25 AI Credits",
                    desc: "Best for regular styling.",
                    value: "Save ~30%"
                },
                pro: {
                    title: "Pro Pack",
                    price: "$9.99",
                    credits: "60 AI Credits",
                    desc: "For fashion enthusiasts.",
                    value: "Best Value (Save ~45%)"
                }
            }
        },
        press: {
            title: "Press & Media",
            lead: "For press inquiries, high-resolution assets, or partnership opportunities, contact press@luvaa.app.",
            kitTitle: "Press Kit",
            kitDesc: "Our press kit includes logos, screenshots, and executive bios."
        },
        featuresPage: {
            title: "Features",
            lead: "Discover all the powerful tools Luvaa offers to transform your fashion experience."
        },
        legal: {
            privacyTitle: "Privacy Policy",
            termsTitle: "Terms of Service",
            contactTitle: "Contact"
        },
        contact: {
            title: "Contact Us",
            lead: "Have questions? We'd love to hear from you. Reach out at hello@luvaa.app.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message"
            }
        },
        blogPage: {
            title: "Blog",
            lead: "Stories, updates, and style tips from the Luvaa team."
        },
        blog: {
            featured: {
                title: "Featured: How to Refresh Your Wardrobe",
                body: "Learn practical steps to sort your closet, identify pieces to keep or sell, and create new outfits without buying more."
            }
        },
        footer: {
            company: {
                about: "About Us",
                careers: "Careers",
                press: "Press"
            },
            product: {
                features: "Features",
                pricing: "Pricing",
                blog: "Blog"
            },
            legal: {
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                contact: "Contact"
            },
            copyright: "© {year} Luvaa. All rights reserved."
        },
        about: {
            title: "About Luvaa",
            lead: "Luvaa was born from a simple frustration: standing in front of a closet full of clothes and feeling like you have nothing to wear.",
            lead2: "We're building the future of personal fashion—using AI to help everyone dress better, feel more confident, and express their unique style.",
            missionTitle: "Our Mission",
            mission: "To democratize personal styling and make looking your best effortless for everyone.",
            teamTitle: "Our Team",
            team: "A passionate team of designers, engineers, and fashion lovers working remotely across the globe."
        },
        careers: {
            intro: "We're building the future of personal fashion. If you love design, mobile apps, and transforming how people express themselves, we'd love to hear from you.",
            whyTitle: "Why Work With Us",
            whyCopy: "Flexible remote work, creative freedom, and the chance to impact millions of users worldwide.",
            openRoles: "Open Roles",
            viewApply: "View & Apply",
            frontendSummary: "Own web UI and performance. Build scalable, accessible components.",
            mobileSummary: "Ship native-feeling mobile experiences and camera/upload flows.",
            mlSummary: "Work on recommendations and AI systems to personalize outfit suggestions.",
            designerSummary: "Design mobile-first flows, prototypes, and user research.",
            contactCopy: "Email careers@luvaa.app with your resume and tell us what excites you about fashion tech."
        }
    },
    nl: {
        nav: {
            home: "Home",
            features: "Functies",
            pricing: "Prijzen",
            blog: "Blog",
            about: "Over",
            careers: "Vacatures"
        },
        hero: {
            badge: "Je Persoonlijke Stijl Buddy",
            title1: "Kleed Je Beter.",
            titleHighlight: "Voel Je Geweldig.",
            subtitle: "De AI-gestuurde mode-app die je outfits beoordeelt, suggereert wat je moet dragen, en helpt je jouw unieke stijl te ontdekken. Sluit je aan bij 10.000+ gebruikers.",
            downloadOn: "Download in de",
            getItOn: "DOWNLOAD IN",
            scroll: "Scroll om te ontdekken"
        },
        stats: {
            users: "Gebruikers",
            outfits: "Outfits",
            rating: "App Beoordeling"
        },
        features: {
            badge: "Krachtige Functies",
            title: "Alles Wat Je Nodig Hebt",
            subtitle: "Zes baanbrekende functies ontworpen om te veranderen hoe je je kleedt, shopt en jezelf uitdrukt.",
            learnMore: "Meer info",
            rateFit: {
                title: "Beoordeel Mijn Look",
                tagline: "Krijg direct eerlijke feedback",
                description: "Maak een foto van je outfit en krijg direct een eerlijke beoordeling. We geven niet alleen een score—we geven je tips om je look te verbeteren."
            },
            styleGenie: {
                title: "Stijl Genie",
                tagline: "'Ik heb niets om aan te trekken' is verleden tijd",
                description: "Vertel de Stijl Genie waar je naartoe gaat en het bouwt direct de perfecte outfit uit je digitale kast."
            },
            inspiration: {
                title: "Oneindige Inspiratie",
                tagline: "Nooit meer zonder inspiratie",
                description: "Scroll door duizenden prachtige outfit-ideeën van onze wereldwijde community. Filter op stijl, seizoen of gelegenheid."
            },
            studio: {
                title: "Probeer Voor Je Draagt",
                tagline: "Je virtuele paskamer",
                description: "Mix en match je kleding op een digitaal canvas. Combineer jasjes, wissel schoenen en test accessoires."
            },
            marketplace: {
                title: "Shop De Look",
                tagline: "Vind wat je mist",
                description: "Zie je een outfit die je leuk vindt maar mis je dat ene stuk? Onze marktplaats verbindt je met unieke items."
            },
            fashionDna: {
                title: "Mode DNA",
                tagline: "Ontdek je unieke stijl",
                description: "Doe onze interactieve quiz om je persoonlijke Mode DNA te ontdekken. Begrijp je kern-esthetiek."
            }
        },
        howItWorks: {
            badge: "Simpel & Makkelijk",
            title: "Start in Minuten",
            subtitle: "Vier simpele stappen om je garderobe te transformeren",
            step1Title: "Download de App",
            step1Desc: "Gratis beschikbaar voor iOS en Android",
            step2Title: "Fotografeer Je Kleding",
            step2Desc: "Bouw je digitale garderobe",
            step3Title: "Krijg Styling",
            step3Desc: "Ontvang gepersonaliseerde suggesties",
            step4Title: "Zie Er Geweldig Uit",
            step4Desc: "Ga met vertrouwen de deur uit"
        },
        testimonials: {
            badge: "Geliefd door Gebruikers",
            title: "Echte Mensen, Echte Resultaten",
            quote1: "Luvaa heeft volledig veranderd hoe ik me kleed. De outfit beoordelingen zijn perfect!",
            quote2: "De Stijl Genie is als een persoonlijke stylist in mijn zak.",
            quote3: "Ik heb mijn persoonlijke stijl ontdekt dankzij de Mode DNA quiz!",
            quote4: "Eindelijk mijn esthetiek gevonden. De inspiratiefeed is geweldig!",
            quote5: "De Studio functie heeft me gered van zoveel slechte outfit keuzes.",
            quote6: "Items verkocht die ik nooit droeg en unieke stukken gevonden!"
        },
        trust: {
            secure: "Veilig & Privé",
            privacy: "Je Data Beschermd",
            free: "Gratis te Downloaden"
        },
        cta: {
            title: "Klaar om Je Stijl te Transformeren?",
            subtitle: "Sluit je aan bij duizenden gebruikers die hun beste looks al hebben ontdekt.",
            download: "Download Gratis",
            pricing: "Bekijk Prijzen"
        },
        premium: {
            title: "Ontgrendel Meer met Luvaa Credits",
            aiOutfits: "Genereer outfits met AI",
            bgRemoval: "Professionele achtergrondverwijdering",
            virtualTryOn: "Virtuele paskamer met AI",
            analytics: "Geavanceerde stijl inzichten",
            templates: "Exclusieve outfit templates",
            cta: "Bekijk Prijzen"
        },
        pricing: {
            title: "Eenvoudige, Transparante Prijzen",
            lead: "Geen abonnementen. Geen verlopende credits. Betaal per gebruik.",
            features: {
                noRecurring: "Geen terugkerende kosten",
                noExpiry: "Credits verlopen nooit",
                free: "Gratis functies inbegrepen"
            },
            pack: {
                starter: {
                    title: "Starter Pack",
                    price: "$2.99",
                    credits: "10 AI Credits",
                    desc: "Perfect om uit te proberen.",
                    value: ""
                },
                popular: {
                    title: "Popular Pack",
                    price: "$4.99",
                    credits: "25 AI Credits",
                    desc: "Beste voor regelmatig stylen.",
                    value: "Bespaar ~30%"
                },
                pro: {
                    title: "Pro Pack",
                    price: "$9.99",
                    credits: "60 AI Credits",
                    desc: "Voor mode-enthousiastelingen.",
                    value: "Beste Waarde (Bespaar ~45%)"
                }
            }
        },
        press: {
            title: "Pers & Media",
            lead: "Voor persvragen, neem contact op met press@luvaa.app.",
            kitTitle: "Perskit",
            kitDesc: "Onze perskit bevat logo's, screenshots en bio's."
        },
        footer: {
            company: {
                about: "Over Ons",
                careers: "Vacatures",
                press: "Pers"
            },
            product: {
                features: "Functies",
                pricing: "Prijzen",
                blog: "Blog"
            },
            legal: {
                privacy: "Privacybeleid",
                terms: "Gebruiksvoorwaarden",
                contact: "Contact"
            },
            copyright: "© {year} Luvaa. Alle rechten voorbehouden."
        },
        about: {
            title: "Over Luvaa",
            lead: "Luvaa ontstond uit een simpele frustratie: voor een volle kast staan en het gevoel hebben dat je niets hebt om aan te trekken.",
            lead2: "We bouwen de toekomst van persoonlijke mode—met AI om iedereen te helpen beter te kleden.",
            missionTitle: "Onze Missie",
            mission: "Persoonlijke styling democratiseren en er op je best uitzien moeiteloos maken voor iedereen.",
            teamTitle: "Ons Team",
            team: "Een gepassioneerd team van ontwerpers, ingenieurs en modeliefhebbers dat wereldwijd op afstand werkt."
        },
        careers: {
            intro: "We bouwen de toekomst van persoonlijke mode. Als je van design en mobiele apps houdt, horen we graag van je.",
            whyTitle: "Waarom Bij Ons Werken",
            whyCopy: "Flexibel werken op afstand, creatieve vrijheid en impact op miljoenen gebruikers wereldwijd.",
            openRoles: "Open Vacatures",
            viewApply: "Bekijk & Solliciteer",
            frontendSummary: "Verantwoordelijk voor web UI en performance.",
            mobileSummary: "Bouw native mobiele ervaringen.",
            mlSummary: "Werk aan AI-systemen voor gepersonaliseerde outfit suggesties.",
            designerSummary: "Ontwerp mobile-first flows en prototypes.",
            contactCopy: "Mail careers@luvaa.app met je CV."
        },
        contact: {
            title: "Contact",
            lead: "Vragen? Neem contact op via hello@luvaa.app.",
            form: {
                name: "Naam",
                email: "E-mail",
                message: "Bericht",
                send: "Verstuur"
            }
        },
        blogPage: {
            title: "Blog",
            lead: "Verhalen en stijltips van het Luvaa team."
        },
        blog: {
            featured: {
                title: "Uitgelicht: Vernieuw Je Garderobe",
                body: "Leer praktische stappen om je kast te ordenen en nieuwe outfits te maken."
            }
        },
        legal: {
            privacyTitle: "Privacybeleid",
            termsTitle: "Gebruiksvoorwaarden",
            contactTitle: "Contact"
        },
        featuresPage: {
            title: "Functies",
            lead: "Ontdek alle krachtige tools die Luvaa biedt."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            features: "Funktionen",
            pricing: "Preise",
            blog: "Blog",
            about: "Über Uns",
            careers: "Karriere"
        },
        hero: {
            badge: "Dein Persönlicher Stilberater",
            title1: "Besser Anziehen.",
            titleHighlight: "Großartig Fühlen.",
            subtitle: "Die KI-gestützte Mode-App, die deine Outfits bewertet, dir sagt was du anziehen sollst und dir hilft, deinen einzigartigen Stil zu entdecken.",
            downloadOn: "Laden im",
            getItOn: "JETZT BEI",
            scroll: "Scrollen zum Entdecken"
        },
        stats: {
            users: "Nutzer",
            outfits: "Outfits",
            rating: "App-Bewertung"
        },
        features: {
            badge: "Leistungsstarke Funktionen",
            title: "Alles Was Du Brauchst",
            subtitle: "Sechs bahnbrechende Funktionen, die verändern wie du dich kleidest und ausdrückst.",
            learnMore: "Mehr erfahren",
            rateFit: {
                title: "Outfit Bewerten",
                tagline: "Sofortiges ehrliches Feedback",
                description: "Mach ein Foto deines Outfits und erhalte sofort eine ehrliche Bewertung. Wir geben dir Tipps, wie du deinen Look verbessern kannst."
            },
            styleGenie: {
                title: "Stil Genie",
                tagline: "'Ich hab nichts anzuziehen' ist Geschichte",
                description: "Sag dem Stil Genie wohin du gehst und es erstellt sofort das perfekte Outfit aus deinem digitalen Kleiderschrank."
            },
            inspiration: {
                title: "Endlose Inspiration",
                tagline: "Nie wieder uninspiriert",
                description: "Scrolle durch tausende wunderschöne Outfit-Ideen aus unserer globalen Community. Filtere nach Stil, Saison oder Anlass."
            },
            studio: {
                title: "Anprobieren Vor Dem Tragen",
                tagline: "Deine virtuelle Umkleidekabine",
                description: "Mixe und kombiniere deine Kleidung auf einem digitalen Canvas. Kombiniere Jacken, tausche Schuhe und teste Accessoires."
            },
            marketplace: {
                title: "Shop Den Look",
                tagline: "Finde was dir fehlt",
                description: "Siehst du ein Outfit das dir gefällt, aber dir fehlt ein Teil? Unser Marktplatz verbindet dich mit einzigartigen Stücken."
            },
            fashionDna: {
                title: "Mode DNA",
                tagline: "Entdecke deinen einzigartigen Stil",
                description: "Mach unser interaktives Quiz um deine persönliche Mode DNA zu entschlüsseln. Verstehe deine Kern-Ästhetik."
            }
        },
        howItWorks: {
            badge: "Einfach & Schnell",
            title: "Starte in Minuten",
            subtitle: "Vier einfache Schritte um deine Garderobe zu transformieren",
            step1Title: "App Herunterladen",
            step1Desc: "Kostenlos für iOS und Android",
            step2Title: "Kleidung Fotografieren",
            step2Desc: "Baue deine digitale Garderobe",
            step3Title: "Styling Erhalten",
            step3Desc: "Personalisierte Vorschläge bekommen",
            step4Title: "Großartig Aussehen",
            step4Desc: "Mit Selbstvertrauen rausgehen"
        },
        testimonials: {
            badge: "Von Nutzern Geliebt",
            title: "Echte Menschen, Echte Ergebnisse",
            quote1: "Luvaa hat komplett verändert wie ich mich anziehe. Die Outfit-Bewertungen sind perfekt!",
            quote2: "Der Stil Genie ist wie ein persönlicher Stylist in meiner Tasche.",
            quote3: "Ich habe meinen persönlichen Stil dank dem Mode DNA Quiz entdeckt!",
            quote4: "Endlich meine Ästhetik gefunden. Der Inspirations-Feed ist unglaublich!",
            quote5: "Die Studio Funktion hat mich vor so vielen schlechten Outfit-Entscheidungen bewahrt.",
            quote6: "Sachen verkauft die ich nie getragen habe und einzigartige Stücke gefunden!"
        },
        trust: {
            secure: "Sicher & Privat",
            privacy: "Daten Geschützt",
            free: "Kostenlos Herunterladen"
        },
        cta: {
            title: "Bereit Deinen Stil zu Transformieren?",
            subtitle: "Schließe dich tausenden Nutzern an, die ihre besten Looks bereits entdeckt haben.",
            download: "Kostenlos Herunterladen",
            pricing: "Preise Ansehen"
        },
        premium: {
            title: "Mehr Freischalten mit Luvaa Credits",
            aiOutfits: "Outfits mit KI generieren",
            bgRemoval: "Professionelle Hintergrundentfernung",
            virtualTryOn: "Virtuelles Anprobieren mit KI",
            analytics: "Erweiterte Stil-Einblicke",
            templates: "Exklusive Outfit-Vorlagen",
            cta: "Preise Ansehen"
        },
        pricing: {
            title: "Einfache, Transparente Preise",
            lead: "Keine Abos. Keine verfallenden Credits. Zahle nur was du nutzt.",
            features: {
                noRecurring: "Keine wiederkehrenden Gebühren",
                noExpiry: "Credits verfallen nie",
                free: "Kostenlose Funktionen enthalten"
            },
            pack: {
                starter: {
                    title: "Starter Pack",
                    price: "$2.99",
                    credits: "10 AI Credits",
                    desc: "Perfekt zum Ausprobieren.",
                    value: ""
                },
                popular: {
                    title: "Popular Pack",
                    price: "$4.99",
                    credits: "25 AI Credits",
                    desc: "Beste für regelmäßiges Styling.",
                    value: "Spare ~30%"
                },
                pro: {
                    title: "Pro Pack",
                    price: "$9.99",
                    credits: "60 AI Credits",
                    desc: "Für Mode-Enthusiasten.",
                    value: "Bester Wert (Spare ~45%)"
                }
            }
        },
        press: {
            title: "Presse & Medien",
            lead: "Für Presseanfragen kontaktiere press@luvaa.app.",
            kitTitle: "Pressekit",
            kitDesc: "Unser Pressekit enthält Logos und Screenshots."
        },
        footer: {
            company: {
                about: "Über Uns",
                careers: "Karriere",
                press: "Presse"
            },
            product: {
                features: "Funktionen",
                pricing: "Preise",
                blog: "Blog"
            },
            legal: {
                privacy: "Datenschutz",
                terms: "Nutzungsbedingungen",
                contact: "Kontakt"
            },
            copyright: "© {year} Luvaa. Alle Rechte vorbehalten."
        },
        about: {
            title: "Über Luvaa",
            lead: "Luvaa entstand aus einer einfachen Frustration: Vor einem vollen Kleiderschrank zu stehen und das Gefühl zu haben, nichts anzuziehen zu haben.",
            lead2: "Wir bauen die Zukunft der persönlichen Mode—mit KI, um allen zu helfen, sich besser zu kleiden.",
            missionTitle: "Unsere Mission",
            mission: "Persönliches Styling demokratisieren und es für jeden mühelos machen, am besten auszusehen.",
            teamTitle: "Unser Team",
            team: "Ein leidenschaftliches Team aus Designern, Ingenieuren und Mode-Liebhabern, das weltweit remote arbeitet."
        },
        careers: {
            intro: "Wir bauen die Zukunft der persönlichen Mode. Wenn du Design und mobile Apps liebst, würden wir gerne von dir hören.",
            whyTitle: "Warum Bei Uns Arbeiten",
            whyCopy: "Flexibles Remote-Arbeiten, kreative Freiheit und die Chance, Millionen von Nutzern weltweit zu beeinflussen.",
            openRoles: "Offene Stellen",
            viewApply: "Ansehen & Bewerben",
            frontendSummary: "Web UI und Performance verantworten.",
            mobileSummary: "Native mobile Erlebnisse entwickeln.",
            mlSummary: "An KI-Systemen für personalisierte Outfit-Vorschläge arbeiten.",
            designerSummary: "Mobile-first Flows und Prototypen designen.",
            contactCopy: "Mail an careers@luvaa.app mit deinem Lebenslauf."
        },
        contact: {
            title: "Kontakt",
            lead: "Fragen? Kontaktiere uns unter hello@luvaa.app.",
            form: {
                name: "Name",
                email: "E-Mail",
                message: "Nachricht",
                send: "Senden"
            }
        },
        blogPage: {
            title: "Blog",
            lead: "Geschichten und Stiltipps vom Luvaa Team."
        },
        blog: {
            featured: {
                title: "Empfohlen: Garderobe Auffrischen",
                body: "Lerne praktische Schritte um deinen Kleiderschrank zu ordnen."
            }
        },
        legal: {
            privacyTitle: "Datenschutz",
            termsTitle: "Nutzungsbedingungen",
            contactTitle: "Kontakt"
        },
        featuresPage: {
            title: "Funktionen",
            lead: "Entdecke alle leistungsstarken Tools die Luvaa bietet."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            features: "Fonctionnalités",
            pricing: "Tarifs",
            blog: "Blog",
            about: "À Propos",
            careers: "Carrières"
        },
        hero: {
            badge: "Votre Conseiller Style Personnel",
            title1: "Habillez-vous Mieux.",
            titleHighlight: "Sentez-vous Incroyable.",
            subtitle: "L'application mode propulsée par l'IA qui note vos tenues, suggère quoi porter et vous aide à découvrir votre style unique. Rejoignez 10 000+ utilisateurs.",
            downloadOn: "Télécharger sur",
            getItOn: "TÉLÉCHARGER SUR",
            scroll: "Défiler pour explorer"
        },
        stats: {
            users: "Utilisateurs",
            outfits: "Tenues",
            rating: "Note App"
        },
        features: {
            badge: "Fonctionnalités Puissantes",
            title: "Tout Ce Dont Vous Avez Besoin",
            subtitle: "Six fonctionnalités révolutionnaires conçues pour transformer comment vous vous habillez et vous exprimez.",
            learnMore: "En savoir plus",
            rateFit: {
                title: "Notez Ma Tenue",
                tagline: "Feedback honnête instantané",
                description: "Prenez une photo de votre tenue et obtenez une note honnête instantanée. Nous vous donnons des conseils pour améliorer votre look."
            },
            styleGenie: {
                title: "Génie du Style",
                tagline: "'Je n'ai rien à me mettre' c'est fini",
                description: "Dites au Génie du Style où vous allez et il créera instantanément la tenue parfaite depuis votre garde-robe digitale."
            },
            inspiration: {
                title: "Inspiration Infinie",
                tagline: "Plus jamais sans inspiration",
                description: "Parcourez des milliers d'idées de tenues sublimes de notre communauté mondiale. Filtrez par style, saison ou occasion."
            },
            studio: {
                title: "Essayez Avant de Porter",
                tagline: "Votre cabine d'essayage virtuelle",
                description: "Mixez et associez vos vêtements sur un canvas digital. Combinez vestes, changez de chaussures et testez les accessoires."
            },
            marketplace: {
                title: "Achetez Le Look",
                tagline: "Trouvez ce qui vous manque",
                description: "Vous aimez une tenue mais il vous manque une pièce clé? Notre marketplace vous connecte à des pièces uniques."
            },
            fashionDna: {
                title: "ADN Mode",
                tagline: "Découvrez votre style unique",
                description: "Faites notre quiz interactif pour décoder votre ADN Mode personnel. Comprenez votre esthétique fondamentale."
            }
        },
        howItWorks: {
            badge: "Simple & Facile",
            title: "Commencez en Minutes",
            subtitle: "Quatre étapes simples pour transformer votre garde-robe",
            step1Title: "Téléchargez l'App",
            step1Desc: "Gratuit sur iOS et Android",
            step2Title: "Photographiez Vos Vêtements",
            step2Desc: "Construisez votre garde-robe digitale",
            step3Title: "Recevez des Conseils",
            step3Desc: "Suggestions personnalisées",
            step4Title: "Soyez Sublime",
            step4Desc: "Sortez avec confiance"
        },
        testimonials: {
            badge: "Adoré par les Utilisateurs",
            title: "Vraies Personnes, Vrais Résultats",
            quote1: "Luvaa a complètement changé comment je m'habille. Les notes de tenues sont parfaites!",
            quote2: "Le Génie du Style est comme avoir un styliste personnel dans ma poche.",
            quote3: "J'ai découvert mon style personnel grâce au quiz ADN Mode!",
            quote4: "Enfin trouvé mon esthétique. Le fil d'inspiration est incroyable!",
            quote5: "La fonction Studio m'a sauvé de tant de mauvais choix de tenues.",
            quote6: "J'ai vendu des articles que je ne portais jamais et trouvé des pièces uniques!"
        },
        trust: {
            secure: "Sécurisé & Privé",
            privacy: "Données Protégées",
            free: "Téléchargement Gratuit"
        },
        cta: {
            title: "Prêt à Transformer Votre Style?",
            subtitle: "Rejoignez des milliers d'utilisateurs qui ont déjà découvert leurs meilleurs looks.",
            download: "Télécharger Gratuitement",
            pricing: "Voir les Tarifs"
        },
        premium: {
            title: "Débloquez Plus avec Luvaa Credits",
            aiOutfits: "Générez des tenues avec l'IA",
            bgRemoval: "Suppression d'arrière-plan pro",
            virtualTryOn: "Essayage virtuel avec l'IA",
            analytics: "Analyses de style avancées",
            templates: "Templates de tenues exclusifs",
            cta: "Voir les Tarifs"
        },
        pricing: {
            title: "Tarifs Simples et Transparents",
            lead: "Pas d'abonnement. Pas de crédits expirants. Payez à l'utilisation.",
            features: {
                noRecurring: "Pas de frais récurrents",
                noExpiry: "Les crédits n'expirent jamais",
                free: "Fonctionnalités gratuites incluses"
            },
            pack: {
                starter: {
                    title: "Starter Pack",
                    price: "$2.99",
                    credits: "10 Crédits IA",
                    desc: "Parfait pour essayer.",
                    value: ""
                },
                popular: {
                    title: "Popular Pack",
                    price: "$4.99",
                    credits: "25 Crédits IA",
                    desc: "Idéal pour le styling régulier.",
                    value: "Économisez ~30%"
                },
                pro: {
                    title: "Pro Pack",
                    price: "$9.99",
                    credits: "60 Crédits IA",
                    desc: "Pour les passionnés de mode.",
                    value: "Meilleur Rapport (Économisez ~45%)"
                }
            }
        },
        press: {
            title: "Presse & Médias",
            lead: "Pour les demandes presse, contactez press@luvaa.app.",
            kitTitle: "Kit Presse",
            kitDesc: "Notre kit presse inclut logos et captures d'écran."
        },
        footer: {
            company: {
                about: "À Propos",
                careers: "Carrières",
                press: "Presse"
            },
            product: {
                features: "Fonctionnalités",
                pricing: "Tarifs",
                blog: "Blog"
            },
            legal: {
                privacy: "Confidentialité",
                terms: "Conditions d'utilisation",
                contact: "Contact"
            },
            copyright: "© {year} Luvaa. Tous droits réservés."
        },
        about: {
            title: "À Propos de Luvaa",
            lead: "Luvaa est né d'une frustration simple: se tenir devant une garde-robe pleine et avoir l'impression de n'avoir rien à porter.",
            lead2: "Nous construisons le futur de la mode personnelle—en utilisant l'IA pour aider tout le monde à mieux s'habiller.",
            missionTitle: "Notre Mission",
            mission: "Démocratiser le styling personnel et rendre le fait d'être à son meilleur sans effort pour tous.",
            teamTitle: "Notre Équipe",
            team: "Une équipe passionnée de designers, ingénieurs et amoureux de la mode travaillant à distance à travers le monde."
        },
        careers: {
            intro: "Nous construisons le futur de la mode personnelle. Si vous aimez le design et les apps mobiles, nous serions ravis de vous rencontrer.",
            whyTitle: "Pourquoi Travailler Avec Nous",
            whyCopy: "Travail à distance flexible, liberté créative et la chance d'impacter des millions d'utilisateurs.",
            openRoles: "Postes Ouverts",
            viewApply: "Voir & Postuler",
            frontendSummary: "Gérer l'UI web et la performance.",
            mobileSummary: "Développer des expériences mobiles natives.",
            mlSummary: "Travailler sur les systèmes d'IA pour des suggestions personnalisées.",
            designerSummary: "Designer des flows mobile-first et prototypes.",
            contactCopy: "Envoyez un email à careers@luvaa.app avec votre CV."
        },
        contact: {
            title: "Contact",
            lead: "Des questions? Contactez-nous à hello@luvaa.app.",
            form: {
                name: "Nom",
                email: "Email",
                message: "Message",
                send: "Envoyer"
            }
        },
        blogPage: {
            title: "Blog",
            lead: "Histoires et conseils style de l'équipe Luvaa."
        },
        blog: {
            featured: {
                title: "À la Une: Rafraîchir Votre Garde-robe",
                body: "Apprenez des étapes pratiques pour organiser votre garde-robe."
            }
        },
        legal: {
            privacyTitle: "Confidentialité",
            termsTitle: "Conditions d'utilisation",
            contactTitle: "Contact"
        },
        featuresPage: {
            title: "Fonctionnalités",
            lead: "Découvrez tous les outils puissants que Luvaa offre."
        }
    },
    tr: {
        nav: {
            home: "Ana Sayfa",
            features: "Özellikler",
            pricing: "Fiyatlar",
            blog: "Blog",
            about: "Hakkında",
            careers: "Kariyer"
        },
        hero: {
            badge: "Kişisel Stil Danışmanınız",
            title1: "Daha İyi Giyin.",
            titleHighlight: "Harika Hissedin.",
            subtitle: "Kıyafetlerinizi değerlendiren, ne giyeceğinizi öneren ve benzersiz stilinizi keşfetmenize yardımcı olan yapay zeka destekli moda uygulaması. 10.000+ kullanıcıya katılın.",
            downloadOn: "İndir:",
            getItOn: "İNDİR:",
            scroll: "Keşfetmek için kaydırın"
        },
        stats: {
            users: "Kullanıcı",
            outfits: "Kombin",
            rating: "Uygulama Puanı"
        },
        features: {
            badge: "Güçlü Özellikler",
            title: "İhtiyacınız Olan Her Şey",
            subtitle: "Giyinme ve kendinizi ifade etme şeklinizi dönüştürmek için tasarlanmış altı çığır açan özellik.",
            learnMore: "Daha fazla",
            rateFit: {
                title: "Kombinimi Değerlendir",
                tagline: "Anında dürüst geri bildirim alın",
                description: "Kombininizin fotoğrafını çekin ve anında dürüst bir değerlendirme alın. Size sadece puan vermiyoruz—görünümünüzü nasıl geliştireceğiniz konusunda ipuçları veriyoruz."
            },
            styleGenie: {
                title: "Stil Cini",
                tagline: "'Giyecek hiçbir şeyim yok' sona erdi",
                description: "Stil Cini'ne nereye gittiğinizi söyleyin ve dijital dolabınızdan anında mükemmel kombini oluştursun."
            },
            inspiration: {
                title: "Sonsuz İlham",
                tagline: "Bir daha asla ilhamsız kalmayın",
                description: "Küresel topluluğumuzdan binlerce muhteşem kombin fikrine göz atın. Stil, mevsim veya duruma göre filtreleyin."
            },
            studio: {
                title: "Giymeden Önce Dene",
                tagline: "Sanal deneme kabininiz",
                description: "Kıyafetlerinizi dijital bir tuval üzerinde karıştırıp eşleştirin. Ceketleri birleştirin, ayakkabıları değiştirin ve aksesuarları test edin."
            },
            marketplace: {
                title: "Kombini Satın Al",
                tagline: "Eksik olanı bulun",
                description: "Beğendiğiniz bir kombin mi gördünüz ama size anahtar parça mı eksik? Pazarımız sizi benzersiz parçalarla buluşturur."
            },
            fashionDna: {
                title: "Moda DNA'sı",
                tagline: "Benzersiz stilinizi keşfedin",
                description: "Kişisel Moda DNA'nızı çözmek için interaktif testimizi yapın. Temel estetiğinizi anlayın."
            }
        },
        howItWorks: {
            badge: "Basit ve Kolay",
            title: "Dakikalar İçinde Başlayın",
            subtitle: "Gardırobunuzu dönüştürmek için dört basit adım",
            step1Title: "Uygulamayı İndirin",
            step1Desc: "iOS ve Android'de ücretsiz",
            step2Title: "Kıyafetlerinizi Fotoğraflayın",
            step2Desc: "Dijital gardırobunuzu oluşturun",
            step3Title: "Stil Önerileri Alın",
            step3Desc: "Kişiselleştirilmiş öneriler",
            step4Title: "Harika Görünün",
            step4Desc: "Özgüvenle dışarı çıkın"
        },
        testimonials: {
            badge: "Kullanıcılar Tarafından Seviliyor",
            title: "Gerçek İnsanlar, Gerçek Sonuçlar",
            quote1: "Luvaa giyinme şeklimi tamamen değiştirdi. Kombin değerlendirmeleri mükemmel!",
            quote2: "Stil Cini cebimde kişisel bir stilist gibi.",
            quote3: "Moda DNA testi sayesinde kişisel stilimi keşfettim!",
            quote4: "Sonunda estetiğimi buldum. İlham akışı inanılmaz!",
            quote5: "Stüdyo özelliği beni çok sayıda kötü kombin kararından kurtardı.",
            quote6: "Hiç giymediğim eşyaları sattım ve benzersiz parçalar buldum!"
        },
        trust: {
            secure: "Güvenli ve Özel",
            privacy: "Verileriniz Korunuyor",
            free: "Ücretsiz İndirin"
        },
        cta: {
            title: "Stilinizi Dönüştürmeye Hazır mısınız?",
            subtitle: "En iyi görünümlerini zaten keşfetmiş binlerce kullanıcıya katılın.",
            download: "Ücretsiz İndir",
            pricing: "Fiyatları Görüntüle"
        },
        premium: {
            title: "Luvaa Kredileriyle Daha Fazlasını Açın",
            aiOutfits: "AI ile kombinler oluşturun",
            bgRemoval: "Profesyonel arka plan kaldırma",
            virtualTryOn: "AI ile sanal deneme",
            analytics: "Gelişmiş stil analizleri",
            templates: "Özel kombin şablonları",
            cta: "Fiyatları Görüntüle"
        },
        pricing: {
            title: "Basit, Şeffaf Fiyatlandırma",
            lead: "Abonelik yok. Süresi dolan kredi yok. Sadece kullandığın kadar öde.",
            features: {
                noRecurring: "Yinelenen ücret yok",
                noExpiry: "Krediler asla sona ermez",
                free: "Ücretsiz özellikler dahil"
            },
            pack: {
                starter: {
                    title: "Başlangıç Paketi",
                    price: "$2.99",
                    credits: "10 AI Kredisi",
                    desc: "Denemek için mükemmel.",
                    value: ""
                },
                popular: {
                    title: "Popüler Paket",
                    price: "$4.99",
                    credits: "25 AI Kredisi",
                    desc: "Düzenli stil için en iyisi.",
                    value: "~%30 Tasarruf"
                },
                pro: {
                    title: "Pro Paket",
                    price: "$9.99",
                    credits: "60 AI Kredisi",
                    desc: "Moda tutkunları için.",
                    value: "En İyi Değer (~%45 Tasarruf)"
                }
            }
        },
        press: {
            title: "Basın & Medya",
            lead: "Basın soruları için press@luvaa.app ile iletişime geçin.",
            kitTitle: "Basın Kiti",
            kitDesc: "Basın kitimiz logo ve ekran görüntüleri içerir."
        },
        footer: {
            company: {
                about: "Hakkımızda",
                careers: "Kariyer",
                press: "Basın"
            },
            product: {
                features: "Özellikler",
                pricing: "Fiyatlar",
                blog: "Blog"
            },
            legal: {
                privacy: "Gizlilik Politikası",
                terms: "Kullanım Şartları",
                contact: "İletişim"
            },
            copyright: "© {year} Luvaa. Tüm hakları saklıdır."
        },
        about: {
            title: "Luvaa Hakkında",
            lead: "Luvaa basit bir hayal kırıklığından doğdu: Dolu bir gardırobun önünde durup giyecek hiçbir şeyiniz yokmuş gibi hissetmek.",
            lead2: "Kişisel modanın geleceğini inşa ediyoruz—herkesin daha iyi giyinmesine yardımcı olmak için yapay zeka kullanıyoruz.",
            missionTitle: "Misyonumuz",
            mission: "Kişisel stillendirmeyi demokratikleştirmek ve herkesin en iyi göründüğü hali zahmetsiz hale getirmek.",
            teamTitle: "Ekibimiz",
            team: "Dünya genelinde uzaktan çalışan tutkulu tasarımcılar, mühendisler ve moda severlerden oluşan bir ekip."
        },
        careers: {
            intro: "Kişisel modanın geleceğini inşa ediyoruz. Tasarım ve mobil uygulamaları seviyorsanız, sizden haber almak isteriz.",
            whyTitle: "Neden Bizimle Çalışmalısınız",
            whyCopy: "Esnek uzaktan çalışma, yaratıcı özgürlük ve dünya çapında milyonlarca kullanıcıyı etkileme şansı.",
            openRoles: "Açık Pozisyonlar",
            viewApply: "Görüntüle & Başvur",
            frontendSummary: "Web UI ve performansı yönetin.",
            mobileSummary: "Yerel mobil deneyimler geliştirin.",
            mlSummary: "Kişiselleştirilmiş öneriler için AI sistemleri üzerinde çalışın.",
            designerSummary: "Mobil öncelikli akışlar ve prototipler tasarlayın.",
            contactCopy: "CV'niz ile careers@luvaa.app adresine e-posta gönderin."
        },
        contact: {
            title: "İletişim",
            lead: "Sorularınız mı var? hello@luvaa.app adresinden bize ulaşın.",
            form: {
                name: "İsim",
                email: "E-posta",
                message: "Mesaj",
                send: "Gönder"
            }
        },
        blogPage: {
            title: "Blog",
            lead: "Luvaa ekibinden hikayeler ve stil ipuçları."
        },
        blog: {
            featured: {
                title: "Öne Çıkan: Gardırobunuzu Yenileyin",
                body: "Gardırobunuzu düzenlemek için pratik adımları öğrenin."
            }
        },
        legal: {
            privacyTitle: "Gizlilik Politikası",
            termsTitle: "Kullanım Şartları",
            contactTitle: "İletişim"
        },
        featuresPage: {
            title: "Özellikler",
            lead: "Luvaa'nın sunduğu tüm güçlü araçları keşfedin."
        }
    }
};
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useI18n() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}
_s(useI18n, "/dMy7t63NXD4eYACoT93CePwGrg=");
function I18nProvider({ children }) {
    _s1();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            const stored = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("luvaa_locale") : "TURBOPACK unreachable";
            if (stored && [
                "en",
                "nl",
                "de",
                "fr",
                "tr"
            ].includes(stored)) {
                setLocaleState(stored);
            }
        }
    }["I18nProvider.useEffect"], []);
    function setLocale(l) {
        setLocaleState(l);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("luvaa_locale", l);
        }
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "I18nProvider.useMemo[t]": ()=>{
            return ({
                "I18nProvider.useMemo[t]": (key)=>{
                    const parts = key.split(".");
                    let result = translations[locale];
                    for (const p of parts){
                        if (result && typeof result === "object" && p in result) {
                            result = result[p];
                        } else {
                            return key;
                        }
                    }
                    return typeof result === "string" ? result : key;
                }
            })["I18nProvider.useMemo[t]"];
        }
    }["I18nProvider.useMemo[t]"], [
        locale
    ]);
    const availableLocales = [
        {
            code: "en",
            label: "English"
        },
        {
            code: "nl",
            label: "Nederlands"
        },
        {
            code: "de",
            label: "Deutsch"
        },
        {
            code: "fr",
            label: "Français"
        },
        {
            code: "tr",
            label: "Türkçe"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            locale,
            setLocale,
            t,
            availableLocales
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/I18nProvider.tsx",
        lineNumber: 873,
        columnNumber: 5
    }, this);
}
_s1(I18nProvider, "9+2gjiT8IT0oO2ar4F6/yIcMlJY=");
_c = I18nProvider;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/I18nProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t, locale, setLocale, availableLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function onDocClick(e) {
                if (!langRef.current) return;
                if (!langRef.current.contains(e.target)) setLangOpen(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setLangOpen(false);
            }
            document.addEventListener('click', onDocClick);
            document.addEventListener('keydown', onKey);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener('click', onDocClick);
                    document.removeEventListener('keydown', onKey);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const linkClass = (href)=>`inline-block pb-1 border-b-2 ${pathname === href ? 'border-[#ec547c] text-[#ec547c]' : 'border-transparent text-gray-700'} transition-colors`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-white/80 border-b border-gray-100 fixed top-0 left-0 right-0 z-50 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/luvaa-icon.svg",
                            alt: "Luvaa",
                            className: "h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-6 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: linkClass('/'),
                                "aria-current": pathname === '/' ? 'page' : undefined,
                                children: t('nav.home')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/pricing",
                                className: linkClass('/pricing'),
                                "aria-current": pathname === '/pricing' ? 'page' : undefined,
                                children: t('nav.pricing')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/blog",
                                className: linkClass('/blog'),
                                "aria-current": pathname === '/blog' ? 'page' : undefined,
                                children: t('nav.blog')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
                                className: linkClass('/about'),
                                "aria-current": pathname === '/about' ? 'page' : undefined,
                                children: t('nav.about')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/careers",
                                className: linkClass('/careers'),
                                "aria-current": pathname === '/careers' ? 'page' : undefined,
                                children: t('nav.careers')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: langRef,
                                className: "hidden md:block relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-haspopup": "listbox",
                                        "aria-expanded": langOpen,
                                        "aria-label": `Language, ${availableLocales.find((l)=>l.code === locale)?.label || 'English'}`,
                                        onClick: ()=>setLangOpen((s)=>!s),
                                        className: "flex items-center gap-2 border rounded px-2 py-1 text-sm bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: locale === 'en' ? '🇬🇧' : locale === 'nl' ? '🇳🇱' : locale === 'de' ? '🇩🇪' : locale === 'fr' ? '🇫🇷' : locale === 'tr' ? '🇹🇷' : ''
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: availableLocales.find((l)=>l.code === locale)?.label || 'EN'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 text-gray-600",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                "aria-hidden": true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        role: "listbox",
                                        "aria-label": "Select language",
                                        className: "absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50",
                                        children: availableLocales.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                role: "option",
                                                "aria-selected": locale === l.code,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setLocale(l.code);
                                                        setLangOpen(false);
                                                    },
                                                    className: `w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2 ${locale === l.code ? 'font-semibold' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg",
                                                            children: l.code === 'en' ? '🇬🇧' : l.code === 'nl' ? '🇳🇱' : l.code === 'de' ? '🇩🇪' : l.code === 'fr' ? '🇫🇷' : l.code === 'tr' ? '🇹🇷' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: l.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            }, l.code, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Toggle menu",
                                "aria-expanded": open,
                                onClick: ()=>setOpen((s)=>!s),
                                className: "md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec547c]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-gray-700",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 141
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute right-6 top-full mt-2 w-[220px] bg-white border border-gray-100 rounded-lg shadow-lg z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            onClick: ()=>setOpen(false),
                            className: `py-2 ${linkClass('/')}`,
                            children: t('nav.home')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/pricing",
                            onClick: ()=>setOpen(false),
                            className: `py-2 ${linkClass('/pricing')}`,
                            children: t('nav.pricing')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/blog",
                            onClick: ()=>setOpen(false),
                            className: `py-2 ${linkClass('/blog')}`,
                            children: t('nav.blog')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/about",
                            onClick: ()=>setOpen(false),
                            className: `py-2 ${linkClass('/about')}`,
                            children: t('nav.about')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/careers",
                            onClick: ()=>setOpen(false),
                            className: `py-2 ${linkClass('/careers')}`,
                            children: t('nav.careers')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pt-2 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm text-gray-600 mb-1 block",
                                    children: "Language"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "Language",
                                    value: locale,
                                    onChange: (e)=>{
                                        setLocale(e.target.value);
                                        setOpen(false);
                                    },
                                    className: "w-full border rounded px-2 py-1 text-sm",
                                    children: availableLocales.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: l.code,
                                            children: l.label
                                        }, l.code, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Header, "s557kLA75YsRJo23dHIYLSwL7XA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.7_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_2ae8545c._.js.map