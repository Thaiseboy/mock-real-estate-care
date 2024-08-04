# Real Estate Care

## Overzicht

Real Estate Care is een webgebaseerde Single Page Application (SPA) ontworpen voor inspecteurs om rapportages van inspecties te beheren. De applicatie ondersteunt zowel iOS als Android apparaten en biedt een touch interface die aansluit op de workflow van de inspecteur. Gebruikers kunnen rapportages aanmaken, foto's toevoegen, en rapportages offline opslaan totdat er weer netwerk beschikbaar is.

  

## Functionaliteiten

-  **Login**: Gebruikers kunnen inloggen met een gebruikersnaam en wachtwoord. 

###	BELANGRIJK!
> Gebruikersnaam: admin
wachtwoord: admin


-  **Dashboard**: Overzicht van de applicatie.

-  **Assigned Reports**: Aanmaken en opslaan van nieuwe rapportages.

-  **Completed Inspections**: Bekijken, bijwerken en verwijderen van afgeronde rapportages.

-  **Settings**: Aanpassen van gebruikersinstellingen, zoals gebruikersnaam, wachtwoord en thema.

-  **Knowledge Base**: Bekijken van documentatie en gedetailleerde rapportages.

  

## Installatie

Volg deze stappen om de applicatie lokaal te installeren en te starten:

1.  Clone de repository:
 - **git clone <https://github.com/Thaiseboy/real-estate-care.git>**
- **cd real-estate-care**

2.  Installeer de dependencies
 - **npm install**
 
3. Start de ontwikkelserver:
 - **npm run serve**


4. Start de JSON-server:
- **npm run json-server**

## Deployment
De applicatie kan eenvoudig worden gedeployeerd naar Netlify. volg deze stappen.

1. **npm run build**
2. **Deploy de dist directory naar Netlify**

## Procesbeschrijving
Tijdens de ontwikkeling van deze applicatie hebben we de volgende stappen doorlopen:

1.  **Planning**: Identificeren van de vereiste functionaliteiten en het ontwerpen van de UI/UX.
2.  **Implementatie**: Ontwikkelen van de verschillende componenten en functionaliteiten.
3.  **Testing**: Testen van de applicatie om ervoor te zorgen dat alle functionaliteiten correct werken.
4.  **Deployment**: Deployen van de applicatie naar Netlify en google firebase.

**Wat werkt nog niet perfect?**
1. De avatar veranderen in de instelling dus die heb ik weg gelaten.
2. Offline opslag werkt nog niet volledig naar verwachting, met name als de netwerkverbinding wegvalt tijdens het opslaan van een rapportage.
3. De backend services voor het opslaan van data op Netlify of Google Firebase zijn nog niet volledig operationeel.
4. Door dat backend service niet werk op hosting heb ik gebruik gemaakt van mock data na dat ik Johan Perk heb  gesproken.
## Verantwoording

**Security**

Ik heb basisbeveiligingsmaatregelen toegepast, zoals het gebruik van HTTPS voor communicatie en het opslaan van gebruikersinformatie in Local Storage. Verdere beveiligingsmaatregelen zoals two-factor authenticatie en server-side validatie moeten nog worden geïmplementeerd.

**Usability**

We hebben de 10 heuristieken van Jacob Nielsen toegepast om de bruikbaarheid van de applicatie te waarborgen:

1.  **Zichtbaarheid van de systeemstatus**: De applicatie geeft feedback aan de gebruiker bij het opslaan van rapporten.

2.  **Overeenkomst tussen systeem en de echte wereld**: Gebruik van termen en concepten die bekend zijn bij inspecteurs.

3.  **Gebruikerscontrole en vrijheid**: Gebruikers kunnen gemakkelijk rapportages bewerken en verwijderen.

4.  **Consistentie en standaarden**: Gebruik van consistente UI-elementen en interacties.

5.  **Error preventie**: Validatie van invoer om fouten te voorkomen.

6.  **Herkenning boven herinnering**: Gebruik van intuïtieve iconen en labels.

7.  **Flexibiliteit en efficiëntie van gebruik**: Ondersteuning voor zowel desktop- als mobiele gebruikers.

8.  **Esthetisch en minimalistisch ontwerp**: Een eenvoudig en schoon ontwerp dat gebruikers niet overweldigt.  

9.  **Help gebruikers fouten herkennen, diagnosticeren en herstellen**: Informatieve foutmeldingen bij het mislukken van acties.

10.  **Help en documentatie**: Basisdocumentatie in de applicatie.

## Accessibility
**We hebben geprobeerd te voldoen aan de WCAG 2.1-richtlijnen door:**
• Gebruik van semantische HTML-elementen.
• Toegankelijkheidsattributen zoals aria-labels.
• Voldoende kleurcontrast.

**Wat nog ontbreekt:**
• Uitgebreide toetsenbordnavigatie.
• Gedetailleerde toetsenbordfocus-indicatoren.
• Volledige ondersteuning voor screen readers.

## Style Guides / Best Practices
**We hebben best practices gevolgd voor het Vue.js framework, zoals:**
• Component-gebaseerde architectuur.
• State management met Vuex.
• Routing met Vue Router.
• Gebruik van scoped CSS voor componenten.

**Er is echter nog ruimte voor verbetering, zoals:**
• Meer unit tests voor kritieke componenten.
• Uitbreiding van de documentatie voor ontwikkelaars.

## Conclusie
Real Estate Care is een robuuste en gebruiksvriendelijke applicatie voor inspecteurs. Hoewel er nog enkele verbeteringen nodig zijn op het gebied van beveiliging, toegankelijkheid en enkele functionaliteiten, biedt de applicatie al een solide basis voor verdere ontwikkeling en gebruik.

##	Beoordelingsaspecten
**Beoordelingsaspect 1:**
De professional analyseert diverse front-end frameworks voor diverse soorten webapplicaties zodat een onderbouwde keuze gemaakt kan worden welk framework het beste te gebruiken is gegeven een specifiek te ontwikkelen applicatie.

**Voldaan:** Vue.js is gekozen vanwege zijn component-gebaseerde structuur, reactiviteit en uitgebreide ondersteuning door de gemeenschap.

**Beoordelingsaspect 2:**
De professional kiest en installeert een ontwikkeltool zoals Visual Studio Code, extensions & tooling zoals NodeJS, NPM en Webpack om lokaal een ontwikkelomgeving in te richten.

**Voldaan:** Visual Studio Code, Node.js, NPM, en Webpack zijn gebruikt om een lokale ontwikkelomgeving in te richten.

**Beoordelingsaspect 3:**
De professional integreert design pattern als MVC (of hiervan afgeleide design patterns) en het Singleton Design pattern (bijvoorbeeld een service of een store) binnen een front-end webapplicatie waarmee functionaliteit en data gescheiden en gestructureerd worden.

  **Voldaan:** Het project maakt gebruik van het Vue.js framework, dat een component-gebaseerde architectuur volgt, vergelijkbaar met MVC. De apiService volgt het Singleton design pattern.

  **Beoordelingsaspect 4:**
De professional stelt custom webcomponents samen en integreert components uit bestaande bibliotheken zoals Ionic, Vuetify, Angular Materials, etc. binnen een front-end applicatie.

  **Voldaan:** Custom webcomponents zijn ontwikkeld voor specifieke functionaliteiten en Bootstrap is gebruikt voor consistente UI-componenten.

**Beoordelingsaspect 5:**
De professional integreert concepten en technieken van asynchroon programmeren in een front-end framework met behulp van JavaScript-functies zoals de fetch API, promises en observables of libraries als Axios.

  **Voldaan:** Axios is gebruikt voor asynchrone HTTP-aanvragen en het ophalen en opslaan van data, wat voldoet aan de eisen van asynchroon programmeren.

  **Beoordelingsaspect 6:**
De professional integreert JSON binnen een webapplicatie om data te structuren en via WEB API’s uit te wisselen.

  **Voldaan:** JSON is gebruikt voor het structureren van gegevens en uitwisseling via web-API’s.

  **Beoordelingsaspect 7:**
De professional integreert routing en state management binnen de applicatie om de user experience en usability te garanderen en optimaliseren.

  **Voldaan:** Vue Router is gebruikt voor navigatie en Vuex voor state management, wat zorgt voor een goede gebruikerservaring en bruikbaarheid.

  **Beoordelingsaspect 8:**
De professional past richtlijnen met betrekking tot beveiliging (zoals guides van OWASP), accessibility (WCAG 2.1 A) en usability toe zoals best practices en style guides die beschikbaar zijn voor een desbetreffend framework.

**Voldaan:** OWASP-beveiligingsrichtlijnen, WCAG 2.1 toegankelijkheidsrichtlijnen en bruikbaarheidsbest practices zijn toegepast in het project.
