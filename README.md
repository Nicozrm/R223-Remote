# 📦 R223-Remote

Ein vollständig interaktives Webtool für das Retourenmanagement, mit dem du mobil oder am PC **Etiketten scannen**, **bearbeiten**, **als PDF generieren** und direkt als App auf dem Homescreen installieren kannst.  
Entwickelt von 🧠 Nico Zimmermann, für den produktiven Einsatz an echten SATO-Druckern & NVE-Barcodes.

---

## 🚀 Features

- 📷 **NVE-Kamera-Scan** (Code128, z. B. 34019...)
- 🧪 **Eingabe von Charge, Ursprung, Grund & Verwendungszweck**
- 📄 **PDF-Erzeugung im originalen Etikett-Stil**
- 📲 **PWA-fähig** → auf Handy installierbar
- 🌑 Darkmode / Terminal UI / Neongrün-Vibes
- 🔧 Zwei Tools: `etikett.html` (Kartons), `palette.html` (Paletten)

---

## 📁 Seitenstruktur

| Datei           | Funktion                         |
|----------------|----------------------------------|
| `index.html`   | Startseite mit Navigation        |
| `etikett.html` | Haupttool für Kartonetiketten    |
| `palette.html` | Optional: Palettenerweiterung    |
| `manifest.json`| Für PWA / App-Installation       |
| `icon.png`     | App-Icon (für Homescreen etc.)   |

---

## ⚙️ Anwendung

1. **Repo öffnen:**  
   [https://nicozrm.github.io/R223-Remote](https://nicozrm.github.io/R223-Remote)

2. **Tool auswählen:**
   - 📦 [Etikett scannen](https://nicozrm.github.io/R223-Remote/etikett.html)
   - 🧊 [Paletten scannen](https://nicozrm.github.io/R223-Remote/palette.html)

3. **PDF erzeugen:**  
   → Wird automatisch mit Charge, NVE & MHD generiert (A6 Format)  
   → Ideal für Druck über SATO-Etikettendrucker

4. **Installieren auf dem Handy:**
   - Öffne im Chrome/Safari
   - Menü → „Zum Home-Bildschirm hinzufügen“
   - Voilà, die App ist da

---

## 🛠️ To-Do / Erweiterungen (optional)

- 🖨️ Druckintegration über Netzwerkdrucker (SATO)
- ☁️ Datenbank-Anbindung für Rückverfolgung
- 🔐 Login-System mit Benutzerrollen
- 📂 Etikett-Archiv mit Verlaufsfunktion

---

## 🧠 Entwickler

**Nico Zimmermann**  
R223 | Retouren- & Etikettenlösung für die Fleischindustrie  
💬 Fragen, Anregungen, Bugs → DM oder Fork gern gesehen.

---

> Made with 💡, Kaffee ☕ und jsPDF 📄
