# FetchEShop Komponent


### Denna README ger en översikt över hur man installerar, använder och förstår `FetchEShop`-komponenten samt hanterar potentiella fel.


`FetchEShop` är en React-komponent som hämtar och visar innehåll från MinaAktiviteter-tjänsten. Den är designad för att användas i React- och Next.js-applikationer.

## Installation

1. Kopiera `FetchEShop`-komponenten till ditt projekt.
2. Installera eventuella nödvändiga beroenden (om några).

## Användning

Importera och använd `FetchEShop`-komponenten i din React-komponent:

```sh
import FetchEShop from './FetchEShop';

const App = () => {
  return (
    <div>
      <FetchEShop url="https://minaaktiviteter.se/api/content/json/?contenttype=shop&org=esportsacademy" />
    </div>
  );
};

export default App;
```

```sh
git clone https://github.com/<name>/<theprojectname>
```
Install dependencies:

```sh
npm i
```

To Start the project:    
```sh
npm run dev
```

### To style the tables from MinaAktiviteter, Copy this css and you can add to it ass well

```sh

.headerRow .title span {
  font-family: monospace;
  font-size: clamp(1.5rem, 0.75rem + 4vw, 3rem);
}

td {
  padding: 0 0.25rem;
}

td.title {
  float: left;
  font-family: monospace;
  font-size: clamp(1.5rem, 0.75rem + 2vw, 2rem);
}

.cwEvents {
  position: relative;
  height: fit-content;
}

.cwEvents tbody {
  width: 100%;
}

.cwEvents tbody tr {
  padding: 0.5rem 0;
  max-width: 100%;
}

.dataRow th {
  padding: 0 0.2rem;
}

```


## Props
### url (valfri): URL för att hämta innehåll från MinaAktiviteter API. Standardvärde är 'https://minaaktiviteter.se/api/content/json/?contenttype=shop&org=<Dinorganisation>'.

## Funktioner
Hämta innehåll från en specificerad URL.
Dynamiskt ladda och tillämpa CSS- och JavaScript-filer från den hämtade datan.
Rendera HTML-innehåll.

## Exempel på URL
Alla aktiviteter: https://minaaktiviteter.se/api/content/json/?contenttype=shop&org=<DinOrganisation>
Termins länk: https://minaaktiviteter.se/<DinOrganisation>/shop/?eventGroup1=termin

## Exempel från Danscenter Stockholms kurs hiphop/hype med Robert Wägar
Kurs länk: https://minaaktiviteter.se/api/content/json/?eventGroup1=HYPE&contenttype=shop&org=fryshuset-dans

## Felhantering
Om ett fel uppstår vid hämtning av innehåll kommer ett felmeddelande att loggas i konsolen och laddningsstatusen avbryts.

## Licens
Detta projekt är licensierat under MIT-licensen.
