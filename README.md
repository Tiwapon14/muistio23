# muistio23

### Tämä sovellus luo reactilla ja käytä JSON-tiedostoa.

### Sovelluksella on frontend ja backend tiedostoja.

# Helposti kun haluaa  frontend ja backend yhdistä yhdessä.
- Mene koneellasi terminaali-ikkunassa frontendin juurihakemistoon. (C:\Users\petri.keronen\testi_nodejs\muistio_frontend)
- Anna komento: npm run build
- Komennon seurauksena syntyy hakemiston build (joka sisältää jo sovelluksen ainoan html-tiedoston index.html) sisään hakemisto static, jonka alle generoituu sovelluksen   JavaScript-koodin minifioitu versio. Vaikka sovelluksen koodi on kirjoitettu useaan tiedostoon, generoituu kaikki JavaScript yhteen tiedostoon. Samaan tiedostoon tulee   myös kaikkien sovelluksen koodin tarvitsemien riippuvuuksien koodi.
- Kopioidaan frontendin tuotantokoodi (build-kansio) backendin juurikansion alle 
