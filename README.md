# Studio Emanuela Sequi — sito web

Sito one-page statico di **Studio Emanuela Sequi**, Consulente del Lavoro e
Agenzia per il Lavoro ad Ancona (Via Alessandro Maggini 212, 60127 Ancona).

## Struttura

```
index.html        Pagina unica (HTML semantico, meta SEO, JSON-LD)
css/style.css     Stile istituzionale (verde acqua #14a795, grigio-blu #222a33, Lato)
js/main.js        Interazioni minime (email antispam, menu mobile, form mailto)
fonts/            Lato 300/400/700 + corsivo (self-hosted, subset latin)
img/fondazione-lavoro.png  Logo Fondazione Consulenti per il Lavoro (da fondazionelavoro.it, uso autorizzato)
img/og-image.png  Immagine Open Graph 1200x630
favicon.svg       Favicon
robots.txt        Regole per i motori di ricerca
sitemap.xml       Sitemap
```

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub (es. `www.studiosequi.com`) e carica questi file
   nella branch principale.
2. Nel repository: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**.
3. Il sito sarà online all'indirizzo `https://<utente>.github.io/www.studiosequi.com/`.
4. Se il dominio `www.studiosequi.com` è già registrato, in **Settings → Pages**
   aggiungi il custom domain e configura il record CNAME sul DNS del dominio.

Il sito è interamente statico: non richiede build, generatore o dipendenze.

## Nota sulla privacy

- Il sito **non utilizza cookie** e non raccoglie dati: i font sono self-hosted,
  non ci sono script di terze parti né mappe incorporate.
- L'email `emanuela@studiosequi.com` è protetta antispam (ricostruita via
  JavaScript a runtime; senza JavaScript viene mostrato un messaggio esplicativo).
- Il modulo di contatto apre il programma di posta del visitatore con il
  messaggio precompilato (mailto): nessun dato transita dal sito.

## Posizionamento

- Target primario: aziende e studi di commercialisti/avvocati.
- Servizio in evidenza: perizie di parte (CTP) nelle controversie di lavoro.
- Qualifiche: Consulente del Lavoro (Ordine, dal 2001 n. 241), Agenzia per il
  Lavoro — delegata della Fondazione Consulenti per il Lavoro dal 2005
  (n. AN00608FL), ASSE.CO (Asseverazione Contributiva e Retributiva).

## Come modificare i contenuti

- Servizi, FAQ e testi: aprire `index.html` e modificare le sezioni
  `<section id="servizi">`, `<section id="faq">`, ecc.
- Colori e stile: variabili CSS in cima a `css/style.css`.
- Coordinate geografiche nello schema JSON-LD: sono approssimative (livello
  via, OpenStreetMap); sostituirle con quelle esatte del civico 212 se disponibili.

## Verifica SEO

- Titolo e meta description ottimizzati su keyword locale
  ("consulente del lavoro ancona", "agenzia per il lavoro ancona").
- Dati strutturati JSON-LD: `ProfessionalService` (LocalBusiness) e `FAQPage`.
- `robots.txt` e `sitemap.xml` pronti per Google Search Console.
- Dopo la pubblicazione: registrare il sito in Google Search Console e inviare
  la sitemap; richiedere l'indicizzazione della pagina iniziale.
