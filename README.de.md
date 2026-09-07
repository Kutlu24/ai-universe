# AI Evreni — KI-Werkzeug-Verzeichnis

Ein kleines, filterbares Verzeichnis von KI-Tools (ChatGPT, DALL-E, Bard und mehr), als statische Seite mit Suchfeld, Kategorie-/Preisfiltern und einem Detail-Modal pro Tool.

🇬🇧 English version: [README.md](README.md)

## Was es macht

- Listet KI-Tools mit Name, Kategorie (Text-/Bild-/Code-Generierung), Preis (kostenlos/kostenpflichtig) und kurzer Beschreibung.
- Live-Suche und Dropdown-Filter aktualisieren die Liste sofort.
- Klick auf ein Tool öffnet ein Modal mit mehr Details und einem Link zur Tool-Website.
- Tool-Daten liegen als einfaches JS-Array in `script.js` — kein Backend, kein Build-Prozess.

## Technik

Reines HTML, CSS und Vanilla-JavaScript.

## Ausführen

`index.html` im Browser öffnen, oder den Ordner mit einem beliebigen statischen Server bereitstellen:

```bash
npx serve .
```

## Hinweise

Vor der Veröffentlichung bereinigt: Die Skriptdatei hiess im Original fälschlich `script.cs` (jetzt `script.js`), und versehentlich nach dem schliessenden `</html>`-Tag eingefügter KI-Chat-Text wurde entfernt. Die Abschnitte „Öğren" (Lernen), „Topluluk" (Community) und „Kaynaklar" (Ressourcen) sind bewusst schlanke Platzhalter für künftige Inhalte.
