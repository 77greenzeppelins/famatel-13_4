import {
    mainPagesPaths,
    additionalPagesPath,
    mainCategoriesNames,
    mainCategoriesPath,
    wtyczkiGniazdaSubCatNames,
    wtyczkiGniazdaSubCatFullPaths,
    gniazdaZBlokadaSubCatNames,
    gniazdaZBlokadaSubCatFullPaths,
    adapteryPrzemysloweSubCatNames,
    adapteryPrzemysloweSubCatFullPaths,
    przedluzaczeBebnoweSubCatNames,
    przedluzaczeBebnoweSubCatFullPaths,
    obudowyAndRozdzielniceSubCatNames,
    obudowyAndRozdzielniceSubCatFullPaths,
    rozdzielniceModuloweSubCatNames,
    rozdzielniceModuloweSubCatFullPaths,
    puszkiInstalacyjneSubCatNames,
    puszkiInstalacyjneSubCatFullPaths
} from './routingData';

export const energatabText = {
    overlay: {
        line1: 'Famatel Polska',
        line2: 'zaprasza na targi'
    },
    pageNews: {
        intro: 'Zapraszamy',
        title: 'Międzynarodowe Energetyczne Targi Bielskie ENERGETAB 2023',
        title2: ['Międzynarodowe Energetyczne Targi Bielskie', 'ENERGETAB 2023'],
        data: '12 - 14 września',
        city: 'Bielsko - Biała',
        text1: 'Ponownie prezentujemy nasze rozwiązania na największych w Polsce miedzynarodowych targach urządzeń i technologii dla energetyki.',
        // where: 'Znajdziesz nas w pawilonie XX na stoisku 66',
        where: 'Nasza lokalizacja na terenie targów:',
        pawilon: ['M', 'pawilon'],
        stoisko: ['10', 'stoisko']
    }
};
/*
--------------- used as metadata text in RootLayout or page.js ----------------
*/
export const layoutText = {
    title: 'Famatel Polska - profesjonalna elektryka przemysłowa',
    description:
        'Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!',
    keywords: ['elektryka przemysłowa', 'gniazda przemysłowe', 'wtyczki przemysłowe', 'rozdzielnice przemysłowe', 'rozdzielnice', 'ip65', 'ip40'],
    viewport: 'width=device-width, initial-scale=1',
    twitter: {
        desc: 'Famatel - profesjonalna elektryka przemysłowa',
        imageAlt: 'Zdjęcie wtyczki w trudnych warunkach terenowych.'
    }
};
export const metadataText = {
    //---- social media
    twitter: { title: 'Famatel Polska - profesjonalna elektryka przemysłowa' },

    //---- for individual pages --- contactPage
    contactPage: {
        title: 'Kontakt',
        canonical: mainPagesPaths.kontakt,
        desc: 'Skontaktuj się z nami już dziś! Jeśli szukasz rozwiązań z zakresu elektryki przemysłowej i masz jakiekolwiek pytania, podziel się nimi z nami telefonicznie lub mailowo. Jeśli planujesz nas odwiedzić, pamiętaj, że Famatel Polska mieści sie w Bielawie przy ulicy Willowej 5, ale lepszy dojazd jest od ulicy Strażackiej.'
    },

    //---- for individual pages --- produktyPage
    produktyPage: {
        canonical: mainPagesPaths.produkty,
        title: 'Produkty | rozdzielnice | wtyczki | gniazda',
        desc: 'W naszej ofercie znajdziesz profesjonalne rozwiązania w następujących grupach produktowych: (1) Przemysłowe wtyczki i gniazda; (2) Gniazda z rozłącznikiem i blokadą; (3) Adaptery przemysłowe; (4) Gniazda podwieszane; (5) Przedłużacze bębnowe; (6) Rozłączniki bezpieczeństwa; (7) Ładowarki samochodowe; (8) Obudowy i rozdzielnice; (9) Rozdzielnice modułowe; (10) Puszki instalacyjne.'
    },

    //---- for individual pages --- aktualnosciPage
    aktualnosciPage: {
        canonical: mainPagesPaths.aktualnosci,
        title: 'Aktualności | rozdzielnice | wtyczki | gniazda',
        desc: 'Bieżące informacje na temat naszej oferty.'
    },

    //---- for individual pages --- doPobraniaPage
    doPobraniaPage: {
        canonical: mainPagesPaths.doPobrania,
        title: 'Materiały do pobrania | rozdzielnice | wtyczki | gniazda',
        desc: 'Obszerna źródło materiałów w formacie PDF. Znajdziesz tutaj nasz aktualny katalog, deklaracje zgodności oraz karty produktów.'
    },

    //---- for individual pages --- notaPrawnaPage
    notaPrawnaPage: {
        canonical: additionalPagesPath.notaPrawna,
        title: 'Nota Prawna',
        desc: 'Nota Prawna - Famatel Polska sp. z o.o.'
    },

    //---- for nested produktyPage ---
    cat1: {
        title: mainCategoriesNames[0],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[0]}`,
        desc: 'Szeroki wybór przemysłowych wtyczek i gniazd. Zapraszamy do wyboru spośród następujących podkategorii: (1) wtyczki i gniazda przenośne, (2) wtyczki i gniazda tablicowe, (3) wtyczki i gniazda ścienne, (4) wtyczki i gniazda tablicowe jednofazowe, (5) wtyczki i gniazda jednofazowe, (6) wtyczki i gniazda na bardzo niskie napięcia, (7) wtyczki i gniazda kontenerowe, (8) wtyczki i gniazda estradowe, (8)wtyczki i gniazda campingowe',
        keywords: ['wtyczka', 'gniazdo', 'wtyczki przemysłowe', 'gniazda przemysłowe'],
        subCat1: {
            title: wtyczkiGniazdaSubCatNames[0],
            canonical: wtyczkiGniazdaSubCatFullPaths[0],
            description: 'Szeroki wybór przemysłowych wtyczek i gniazd przenośnych',
            keywords: ['przemysłowe wtyczki przenośne', 'przemysłowe gniazda przenośne', 'wtyczka przenośna', 'gniazdo przenośne']
        },
        subCat2: {
            title: wtyczkiGniazdaSubCatNames[1],
            canonical: wtyczkiGniazdaSubCatFullPaths[1],
            description: 'Szeroki wybór wtyczek i gniazd tablicowych',
            keywords: ['gniazda tablicowe', 'wtyczki tablicowe']
        },
        subCat3: {
            title: wtyczkiGniazdaSubCatNames[2],
            canonical: wtyczkiGniazdaSubCatFullPaths[2],
            description: 'Szeroki wybór wtyczek i gniazd ściennych',
            keywords: ['gniazda ścienne', 'wtyczki ścienne']
        },
        subCat4: {
            title: wtyczkiGniazdaSubCatNames[3],
            canonical: wtyczkiGniazdaSubCatFullPaths[3],
            description: 'Szeroki wybór wtyczek i gniazd tablicowych jednofazowych',
            keywords: ['gniazda tablicowe jednofazowe', 'wtyczki tablicowe jednofazowe']
        },
        subCat5: {
            title: wtyczkiGniazdaSubCatNames[4],
            canonical: wtyczkiGniazdaSubCatFullPaths[4],
            description: 'Szeroki wybór wtyczek i gniazd jednofazowych',
            keywords: ['gniazda jednofazowe', 'gniazda schuko', 'wtyczki jednofazowe', 'wtyczki schuko']
        },
        subCat6: {
            title: wtyczkiGniazdaSubCatNames[5],
            canonical: wtyczkiGniazdaSubCatFullPaths[5],
            description: 'Szeroki wybór wtyczek i gniazd na bardzo niskie napięcia',
            keywords: ['gniazda niskonapięciowe', 'gniazda niskie napięcia', 'wtyczki niskonapięciowe', 'wtyczki niskie napięcia']
        },
        subCat7: {
            title: wtyczkiGniazdaSubCatNames[6],
            canonical: wtyczkiGniazdaSubCatFullPaths[6],
            description: 'Szeroki wybór wtyczek i gniazd kontenerowych',
            keywords: ['gniazda kontenerowe', 'gniazda chłodnicze', 'wtyczki kontenerowe', 'wtyczki chłodnicze']
        },
        subCat8: {
            title: wtyczkiGniazdaSubCatNames[7],
            canonical: wtyczkiGniazdaSubCatFullPaths[7],
            description: 'Szeroki wybór wtyczek i gniazd estradowych',
            keywords: ['gniazda estradowe', 'wtyczki estradowe']
        },
        subCat9: {
            title: wtyczkiGniazdaSubCatNames[8],
            canonical: wtyczkiGniazdaSubCatFullPaths[8],
            description: 'Szeroki wybór wtyczek i gniazd kontenerowych',
            keywords: ['gniazda kontenerowe', 'wtyczki kontenerowe']
        }
    },
    cat2: {
        title: mainCategoriesNames[1],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[1]}`,
        desc: 'Szeroki wybór gniazd z rozłącznikiem i blokadą. Zapraszamy do wyboru spośród następujących podkategorii: (1) Gniazda tablicowe z rozłącznikiem i blokadą, (2)Gniazda stałe z rozłącznikiem i blokadą, (3) Gniazda z opcjonalnymi komponentami',
        keywords: ['gniazda z rozłącznikiem i blokadą', 'gniazdo z blokadą', 'gniazdo z rozłącznikiem'],

        subCat1: {
            title: gniazdaZBlokadaSubCatNames[0],
            canonical: gniazdaZBlokadaSubCatFullPaths[0],
            description: 'Szeroki wybór gniazd tablicowych z rozłącznikiem i blokadą',
            keywords: ['gniazdo tablicowe z rozłącznikiem i blokadą']
        },
        subCat2: {
            title: gniazdaZBlokadaSubCatNames[1],
            canonical: gniazdaZBlokadaSubCatFullPaths[1],
            description: 'Szeroki wybór gniazd stałych z rozłącznikiem i blokadą',
            keywords: ['gniazdo stałe z rozłącznikiem i blokadą']
        },
        subCat3: {
            title: gniazdaZBlokadaSubCatNames[2],
            canonical: gniazdaZBlokadaSubCatFullPaths[2],
            description: 'Szeroki wybór gniazd komponentowych z rozłącznikiem i blokadą',
            keywords: ['gniazdo komponentowe z rozłącznikiem i blokadą']
        },
        subCat4: {
            title: gniazdaZBlokadaSubCatNames[3],
            canonical: gniazdaZBlokadaSubCatFullPaths[3],
            description: 'Akcesoria do gniazd tablicowych z rozłącznikiem i blokadą',
            keywords: ['akcesoria']
        }
    },
    cat3: {
        title: mainCategoriesNames[2],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[2]}`,
        desc: 'Szeroki wybór adapterów przemysłowych. Zapraszamy do wyboru spośród następujących podkategorii: (1) Adaptery przemysłowe Schuko (2) Adaptery wielokrotne przemysłowe, (3) Adaptery wielokrotne przemysłowe z przewodem',
        keywords: ['adaptery przemysłowe'],
        subCat1: {
            title: adapteryPrzemysloweSubCatNames[0],
            canonical: adapteryPrzemysloweSubCatFullPaths[0],
            description: 'Szeroki wybór adapterów przemysłowych Schuko',
            keywords: ['adaptery przemysłowe']
        },
        subCat2: {
            title: adapteryPrzemysloweSubCatNames[1],
            canonical: adapteryPrzemysloweSubCatFullPaths[1],
            description: 'Szeroki wybór adapterów wielokrotnych przemysłowych',
            keywords: ['adaptery wielokrotne przemysłowe']
        },
        subCat3: {
            title: adapteryPrzemysloweSubCatNames[2],
            canonical: adapteryPrzemysloweSubCatFullPaths[2],
            description: 'Szeroki wybór adapterów wielokrotnych przemysłowych z przewodem',
            keywords: ['adaptery wielokrotne przemysłowe z przewodem']
        }
    },
    cat4: {
        title: mainCategoriesNames[3],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[3]}`,
        desc: 'Gniazda podwieszane to większa elastyczność w organizacji połączeń sieciowych na liniach produkcyjnych.',
        keywords: ['gniazda podwieszane', 'gniazda na linie produkcyjne', 'gniazda wielostronne']
    },
    cat5: {
        title: mainCategoriesNames[4],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[4]}`,
        desc: 'Szeroki wybór przedłużaczy bębnowych. Zapraszamy do wyboru spośród następujących podkategorii: (1) Przedłużacze bębnowe IP55 z gniazdami Schuko IP67, (2) Przemysłowe przedłużacze bębnowe z gniazdami IP67, (2) Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
        keywords: ['przedłużacze bębnowe', 'przedłużacze bębnowe Schuko', 'przedłużacze bębnowe IP67', 'przedłużacze przemysłowe IP67', 'przedłużacze metalowe IP67'],
        subCat1: {
            title: przedluzaczeBebnoweSubCatNames[0],
            canonical: przedluzaczeBebnoweSubCatFullPaths[0],
            description: 'Szeroki wybór przedłużaczy bębnowych IP55 z gniazdami Schuko IP67',
            keywords: ['przedłużacz bębnowy schuko']
        },
        subCat2: {
            title: przedluzaczeBebnoweSubCatNames[1],
            canonical: przedluzaczeBebnoweSubCatFullPaths[1],
            description: 'Szeroki wybór przedłużaczy bębnowych gniazdami IP67',
            keywords: ['przedłużacz bębnowy IP67']
        },
        subCat3: {
            title: przedluzaczeBebnoweSubCatNames[2],
            canonical: przedluzaczeBebnoweSubCatFullPaths[2],
            description: 'Szeroki wybór metalowych przedłużaczy bębnowych z gniazdami IP67',
            keywords: ['metalowy przedłużacz bębnowy']
        }
    },
    cat6: {
        title: mainCategoriesNames[5],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[5]}`,
        desc: 'Rozłączniki bezpieczeństwa o wysokich standardach technicznych i estetycznych',
        keywords: ['rozłączniki bezpieczeństwa', 'Rozłączniki bezpieczeństwa dla gastronomii']
    },
    cat7: {
        title: mainCategoriesNames[6],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[6]}`,
        desc: 'Nowoczesne ładowarki samochodowe do ewszechstronnego zastosowania',
        keywords: ['ładowarki', 'Ładowarki samochodowe', 'Ekologiczne ładowarki samochodowe']
    },
    cat8: {
        title: mainCategoriesNames[7],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[7]}`,
        desc: 'Szeroki wybór obudów i rozdzielnic przemysłowych. Zapraszamy do wyboru spośród następujących podkategorii: (1) Obudowy puste, (2) Rozdzielnice przemysłowe, (3) Obudowy gumowe',
        keywords: ['obudowa', 'rozdzielnice'],
        subCat1: {
            title: obudowyAndRozdzielniceSubCatNames[0],
            canonical: obudowyAndRozdzielniceSubCatFullPaths[0],
            description: 'Szeroki wybór obudów pustych',
            keywords: ['obudowy puste']
        },
        subCat2: {
            title: obudowyAndRozdzielniceSubCatNames[1],
            canonical: obudowyAndRozdzielniceSubCatFullPaths[1],
            description: 'Szeroki wybór rozdzielnic przemysłowych',
            keywords: ['rozdzielnice przemysłowe']
        },
        subCat3: {
            title: obudowyAndRozdzielniceSubCatNames[2],
            canonical: obudowyAndRozdzielniceSubCatFullPaths[2],
            description: 'Szeroki wybór obudów gumowych',
            keywords: ['obudowy gumowe, rozdzielnice przemysłowe gumowe']
        },
        subCat4: {
            title: obudowyAndRozdzielniceSubCatNames[3],
            canonical: obudowyAndRozdzielniceSubCatFullPaths[3],
            description: 'Akcesoria do obudów i rozdzielnic',
            keywords: ['akcesoria do obudów', 'akcesoria do rozdzielnic']
        }
    },
    cat9: {
        title: mainCategoriesNames[8],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[8]}`,
        desc: 'Szeroki wybór rozdzielnic. Zapraszamy do wyboru spośród następujących podkategorii: (1) Rozdzielnice ścienne IP65, (2) Rozdzielnice modułowe IP65, (3) Rozdzielnice modułowe Nuova IP40, (4) Rozdzielnice modułowe Nuova + IP40, (5) Rozdzielnice modułowe Vita IP40, (6) Rozdzielnice modułowe ścienne ICP, (7) Rozdzielnice modułowe metalowe IP40, (8) Rozdzielnice modułowe metalowe ICT',
        keywords: ['rozdzielnica modułowa', 'rozdzielnice modułowe'],
        subCat1: {
            title: rozdzielniceModuloweSubCatNames[0],
            canonical: rozdzielniceModuloweSubCatFullPaths[0],
            description: 'Szeroki wybór rozdzielnic ściennych IP65',
            keywords: ['rozdzielnica ścienna ip65']
        },
        subCat2: {
            title: rozdzielniceModuloweSubCatNames[1],
            canonical: rozdzielniceModuloweSubCatFullPaths[1],
            description: 'Szeroki wybór rozdzielnic modułowych IP65',
            keywords: ['rozdzielnica modułowa ip65']
        },
        subCat3: {
            title: rozdzielniceModuloweSubCatNames[2],
            canonical: rozdzielniceModuloweSubCatFullPaths[2],
            description: 'Szeroki wybór rozdzielnic modułowych IP40 z kolekcji Nuova',
            keywords: ['rozdzielnica modułowa ip40', 'rozdzielnica Nuova']
        },
        subCat4: {
            title: rozdzielniceModuloweSubCatNames[3],
            canonical: rozdzielniceModuloweSubCatFullPaths[3],
            description: 'Szeroki wybór rozdzielnic modułowych IP40 z kolekcji Nuova+',
            keywords: ['rozdzielnica modułowa ip40', 'rozdzielnica Nuova+']
        },
        subCat5: {
            title: rozdzielniceModuloweSubCatNames[4],
            canonical: rozdzielniceModuloweSubCatFullPaths[4],
            description: 'Szeroki wybór rozdzielnic modułowych IP40 z kolekcji Vita',
            keywords: ['rozdzielnica modułowa ip40', 'rozdzielnica Vita']
        },
        subCat6: {
            title: rozdzielniceModuloweSubCatNames[5],
            canonical: rozdzielniceModuloweSubCatFullPaths[5],
            description: 'Szeroki wybór rozdzielnic modułowych ściennych ICP',
            keywords: ['rozdzielnica modułowa ścienna ICP', 'rozdzielnica ICP']
        },
        subCat7: {
            title: rozdzielniceModuloweSubCatNames[6],
            canonical: rozdzielniceModuloweSubCatFullPaths[6],
            description: 'Szeroki wybór metalowych rozdzielnic modułowych ściennych ICP',
            keywords: ['metalowa rozdzielnica modułowa ścienna ICP', 'metalowa rozdzielnica ICP']
        },
        subCat8: {
            title: rozdzielniceModuloweSubCatNames[7],
            canonical: rozdzielniceModuloweSubCatFullPaths[7],
            description: 'Szeroki wybór rozdzielnic modułowych metalowych ICT',
            keywords: ['rozdzielnica modułowa metalowych ICT', 'rozdzielnica metalowa ICT']
        },
        subCat9: {
            title: rozdzielniceModuloweSubCatNames[8],
            canonical: rozdzielniceModuloweSubCatFullPaths[8],
            description: 'Akcesoria do rozdzielnic modułowych',
            keywords: ['akcesoria do rozdzielnic modułowych']
        }
    },
    cat10: {
        title: mainCategoriesNames[9],
        canonical: `${mainPagesPaths.produkty}/${mainCategoriesPath[9]}`,
        desc: 'Szeroki wybór puszek instalacyjnych. Zapraszamy do wyboru spośród następujących podkategorii: (1) Puszki instalacyjne zamykane IP55 IP65, (2) Puszki instalacyjne drywall, (3) Puszki instalacyjne osadzone',
        keywords: ['puszki instalacyjne', 'puszki ip65', 'puszki ip55'],
        subCat1: {
            title: puszkiInstalacyjneSubCatNames[0],
            canonical: puszkiInstalacyjneSubCatFullPaths[0],
            description: 'Szeroki wybór puszek instalacyjnych zamykanych',
            keywords: ['puszki instalacyjne zamykane']
        },
        subCat2: {
            title: puszkiInstalacyjneSubCatNames[1],
            canonical: puszkiInstalacyjneSubCatFullPaths[1],
            description: 'Szeroki wybór puszek instalacyjnych zamykanych',
            keywords: ['puszki instalacyjne zamykane']
        },
        subCat3: {
            title: puszkiInstalacyjneSubCatNames[2],
            canonical: puszkiInstalacyjneSubCatFullPaths[2],
            description: 'Szeroki wybór puszek instalacyjnych zamykanych',
            keywords: ['puszki instalacyjne zamykane']
        }
    }
};

export const HomePageText = {
    hero: { header: 'Elektryka przemysłowa' },
    sectionsText: {
        s1: {
            numb: '14307',
            label: 'model',
            text: 'Stworzyliśmy ten model, aby wspierać Twoje działania w szczególnie wymagających warunkach.'
        },
        s2: {
            numb: '+30',
            label: 'lat',
            text: 'Od przeszło 30 lat dbamy o Twój komfort i bezpieczeństwo przy inwestycjach z zakresu elektryki przemysłowej.'
        },
        s4: {
            numb: '+80',
            label: 'państw',
            text: 'Nasze rozwiązania z zakresu elektryki przemysłowej znane są Klientom w przeszło 80 krajach na całym świecie.'
        },
        s3: {
            numb: '8',
            label: 'business subsidies',
            text: 'Aby zoptymalizować realizację Twoich zamówień oparliśmy sie na 8 firmach partnerskich.'
        }
    }
};

export const ProduktyPageText = {
    hero: {
        l1: 'Oddajemy do Twojej dyspozycji',
        l2: 'kategorii profesjonalnych produktów'
    },
    categoriesDescritpions: [
        //___1__wtyczki i gniazda przemysłowe
        'Szeroka gama przemysłowych wtyczek i gniazd z kolekcji SpeedPRO. Dzięki zaawansowanej i rozbudowanej specyfikacji technicznej, pozwalają na zastosowanie w róźnych gałęziach przemysłu. Zaprojektowane i wyprodukowane zgodnie z najbardziej wymagającymi standardami jakości, gwarantują najlepszą wydajność w ekstremalnych zakresach temperatur oraz wysoką odporność mechaniczną i wodoszczelność.',
        //___2
        'Rozbudowana oferta gniazd tablicowych i ściennych z opcjonalnymi szynami DIN i zabezpieczeniami MCB. Dzięki blokadzie mechanicznej współpracującej z rozłącznikiem gwarantują wysokie standardy bezpieczeństwa i jakość instalacji. Gniazda dostępne są w stopniach szczelności IP44 i IP67.',
        //___3__adaptery przemysłowe
        'Szeroka gama adapterów przemysłowych, kompatybilnych z gniazdami i wtyczkami różnych systemów łączenia (m.in. Schuko). Wykorzystując materiały odporne na udary mechaniczne, które dodatkowo mogą pracować w szerokim zakresie temperatur, stworzyliśmy sprzęt dla profesjonalnych użytkowników. Adaptery dostępne są w stopniach szczelności IP44 i IP67.',
        //___4__gniazda podwieszane
        'Linia mobilnych gniazd podwieszanych, gwarantujących wysoki poziom elastyczności na liniach montażowych i w systemach automatyzacji przemysłowej. Dzięki podwieszeniu oraz ruchowi w płaszczyźnie pionowej, gniazda te zwiększaj mobilność pracowników oraz możliwość instalacji w miejscach trudno dostępnych. Kompatybilne z gniazdami IP44 i IP65. ',
        //___5__przedłużacze będnowe
        'Rozbudowana oferta przedłużaczy bębnowych, kompatybilnych z gniazdami i wtyczkami różnych systemów łączenia (m.in. Schuko). Wykorzystując materiały odporne na udary mechaniczne, które dodatkowo mogą pracować w szerokim zakresie temperatur, stworzyliśmy profesjonalny sprzęt dla wymagających użytkowników. Przedłużacze dostępne są w stopniach szczelności IP44 i IP67.',
        //___6__rozłączniki bezpieczeństwa
        'Profesjonalna linia rozłaczników bezpieczeństwa, pracujących w szerokim zakresie prądu znamionowego. Dzięki zastosowaniu materiałów odpornych na udary mechaniczne, korozję i czynniki chemiczne, Twoja instalacja zyskuje wyjątkowy poziom trwałości i niezawodności. Ten produkt to synonim bezpieczeństwa.',
        //___7__ładowarki samochodowe
        'Nowość! Lini profesjonalnych ładowarek samochodowych do zastosowania w warunkach domowych. Zaawansowane technicznie, z licznymi systemami zabezpieczeń zwiększających komfort codziennego użytkowania.',
        //___8__
        'Rozbudowana oferta przemysłowych obudów IP65 z możliwością tworzenia modułów w pionie i w poziomie za pomocą elementu łączącego. Asortyment składa się z kilkunastu modeli (m.in. obudów gumowych) z miejscem na szeroko konfigurowalne zabezpieczenia (wyłączniki MCB, RCCD, itp.). Dodatkowo oferujemy nasze usługi inżynierskie w celu dostosowania produktu do konkretych specyfikacji technicznych.',
        //___9

        'Szeroka gama rozdzielnic modułowych, oparta na kilku autorskich kolekcjach. Każda z kolekcji przygotowana została z myślą o potrzebach instalatorskich w ściśle określonych warunkach (z uwzględnieniem warunków o wysokim poziomie wilgoci czy zapylenia). Różnorodność rozwiązań zastosowanych w naszych rozdzielnicach pozwala na ich użycie w sektorze mieszkaniowym, usługowym, jak i przemysłowym. ',
        //___10
        'Rozbudowana oferta puszek instalacyjnych ułatwiających życie każdego montera instalacji elektrycznych. Wykonane z tworzywa termoplastycznego (bez zawartości halogenów!) o wysokiej odporności na uderzenia oraz promieniowanie UV. Nowa konstrukcja dławnic gwarantuje stopień IP55 przy bezpośrednim wprowadzeniu przewodów, bez konieczności użycia sztywnych rurek.'
    ]
};

export const NowosciPageText = {
    hero: {
        header: ['Wkrótce', 'pojawi sie tutaj coś niezwykle', 'elektryzującego...']
    }
};

export const doPobraniaPageText = {
    chaptersHeader: 'Rozdziały katalogu',
    declarations: 'Deklaracje zgodności'
};

export const kontaktPageText = {
    hero: {
        h1: 'Famatel Polska',
        l1: 'poniedziałek - piątek',
        l2: '8ºº - 16ºº',
        l3: 'Zapraszamy od poniedziałku do piątku w godzinach 8ºº - 16ºº.',
        tex1: 'Zespół Famatel Polska zaprasza do kontaktu od poniedziałku do piątku w godzinach 8ºº - 16ºº.'
    },
    headers: ['Kontakt', 'Dane firmowe', 'Wskazówki dojazd'],
    daneFirmy: ['FAMATEL Polska Sp. z o.o.', 'Ul. Willowa 5', '58-260 Bielawa', 'NIP 8822120823', 'KRS 0000525431'],
    dojazd: ['ul. Strażacka', '58-260 Bielawa'],
    dojazdNav: ['50.68051, 16.60300']
};

export const footerText = {
    dojazdPrompt: 'Dojazd od ul. Strażackiej',
    topSectionHeaders: ['Regulacje', 'Strony główne', 'Kategorie Produktów'],
    bottomSectionHeaders: ['Dane Firmowe', 'Kontakt']
};

/*
___1. used in <Header> | <SearchEngineButton> & <DropDownEngineButton>
*/
export const headerSpecButtons = {
    searchEngine: 'searchEngine',
    dropDownMenu: 'menu'
};

export const productSearchEngineText = {
    placeholder: 'np.: 13100',
    header1: 'Wprowadź kod produktu:',
    header2: 'Rezultat wyszukiwania:',
    noResult: 'Brak',
    noError: 'Sprawdźmy to!',
    button: 'Szukaj',
    valMin: 'Podany kod jest zbyt krótki.',
    valMax: 'Podany kod jest zbyt długi.',
    valRequired: 'Podaj kod szukanego produktu!',
    valMatch: 'Podany kod nie odnosi się do żadnego produktu',
    isProduct: 'Zobacz stronę produktu.',
    // noProduct: 'W naszej ofercie nie ma produktu o podanym kodzie.',
    noProduct: 'Brak produktu o podanym kodzie.',
    hasCard: 'Podierz kartę produktu (PDF)',
    hasDeclaration: 'Podierz deklarację produktu (PDF)'
};

export const allHeaders = {
    catPages: ['charakterystyka ogólna', 'normy', 'materiał'],
    tableHeaders: ['karta katalogowa', 'specyfikacja techniczna', 'charakterystyka ogólna', 'opis', 'normy'],
    gniazdaPodwieszanePage: ['Karta katalogowa (warianty 28000)', 'Karta katalogowa (warianty 27000)']
};

export const notaPrawnaPageText = {
    header: 'Nota Prawna',
    text: [
        'Wszelkie prawa do całej zawartości serwisu internetowego FAMATEL POLSKA, są zastrzeżone. Użytkownik ma prawo do pobrania oraz drukowania całych stron lub fragmentów serwisu internetowego FAMATEL POLSKA, pod warunkiem nienaruszania praw autorskich oraz praw wynikających z rejestracji znaków towarowych należących do FAMATEL Polska Sp. z o.o. Żadna część serwisu nie może być w celach komercyjnych kopiowana w całości lub części, transmitowana elektronicznie lub w inny sposób modyfikowana, linkowana lub wykorzystana bez uprzedniej pisemnej zgody FAMATEL Polska Sp. z o.o.',
        'FAMATEL Polska Sp. z o.o. na bieżąco aktualizuje informacje zawarte w serwisie, jednak nie ponosi żadnej odpowiedzialności za dokładność, aktualność oraz kompletność informacji przedstawionych na stronach serwisu. Jednocześnie FAMATEL Polska Sp. z o.o. zastrzega sobie prawo do wprowadzania zmian w części lub całości serwisu bez uprzedzenia. Ryzyko związane z użytkowaniem i wykorzystaniem informacji przedstawionych w serwisie ponosi sam użytkownik. FAMATEL Polska Sp. z o.o. nie ponosi żadnej odpowiedzialności z tytułu wyrządzonych szkód będących rezultatem korzystania z serwisu FAMATEL POLSKA.'
    ]
};

export const cookiesText = {
    popup: 'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies, a korzystanie z naszej witryny oznacza ich akceptację. W każdym momencie mogą Państwo dokonać zmiany ustawień w przeglądarce.',
    link: 'W każdym momencie mogą Państwo dokonać zmiany ustawień w przeglądarce.',
    // popup:
    //   'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki',
    policy: 'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki.',
    comment1: 'Dla Państwa wygody serwis Famatel.pl używa plików cookies po to, by dostosować serwis do potrzeb użytkowników, a także w celach statystycznych.',
    comment2:
        'Pliki cookies (tzw. ciasteczka) to niewielkie pliki tekstowe wysyłane przez odwiedzany serwis internetowy do urządzenia internauty (komputer, smartfon itp.). Nie zawierają one żadnych danych osobowych.'
};
