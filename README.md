# NOBLEmind

Installierbarer Web-Client für OpenAI, Claude, Gemini, Kimi und Grok.
API-Schlüssel und Chats bleiben auf dem Gerät — es gibt kein Backend.

**Live:** https://nicozrm.github.io/R223-Remote/

## Aufbau

| Datei | Zweck |
| --- | --- |
| `index.html` | Die komplette App — Markup, Styles und Logik in einer Datei |
| `sw.js` | Service Worker, cacht nur die App-Hülle (nie API-Verkehr) |
| `manifest.webmanifest` | PWA-Manifest für Installation auf Home-Bildschirm/Desktop |
| `icon.svg`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | App-Icons |
| `entitlements-BUClQUJs.js` | ES-Modul mit Tarif-/Tageszeit-Logik (siehe Hinweis unten) |
| `.nojekyll` | Schaltet die Jekyll-Verarbeitung auf GitHub Pages ab |

## Installation auf dem Gerät

1. Seite in Chrome oder Safari öffnen
2. Menü → „Zum Home-Bildschirm hinzufügen“ bzw. Installations-Symbol in der Adressleiste
3. Die App startet danach eigenständig und funktioniert offline

## Hinweis zu `entitlements-BUClQUJs.js`

Die Datei ist ein Build-Chunk aus einem anderen Projekt und wird von
`index.html` nicht eingebunden. Sie importiert `./index-BAl3cIIH.js`, das hier
nicht vorhanden ist — für sich allein ist sie daher nicht lauffähig. Sie liegt
unverändert im Repo, damit nichts verloren geht.

## Veröffentlichung

GitHub Pages liefert den Inhalt des Repository-Roots des Standard-Branches aus.
Jeder Merge nach `main` aktualisiert die Live-Seite automatisch.
