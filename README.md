# Cookies

Was ihr findet ist ein Backend, welches Login und Register macht, jedoch keine Tokens und keine Cookies beinhaltet.

## Aufgaben
1. Implementiere JWT. installiere das Paket und implementiere die Funktionen, die einen Token erstellt und die Gültigkeit überprüft
2. Erstelle bei Login einen Token mit Payload ID und Email. Gebe diesen als Cookie zurück
3. Erstelle eine Route die nur Zugänglich ist, wenn man eingeloggt ist. Überprüfe das mit einer Middleware, die den Cookie ausliest

BONUS: Baue ein Frontend, für die Routen. Entweder mit Views oder seperaten React.