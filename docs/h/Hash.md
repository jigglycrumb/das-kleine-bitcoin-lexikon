---
id: hash
title: Hash
---

Ein Hash ist eine Zeichenfolge aus Buchstaben und Zahlen.

Hashes sind das Ergebnis von speziellen mathematischen Funktionen, sogenannten Einweg- oder Hashfunktionen.  
Das Besondere an diesen Funktionen ist, dass sich das Ergebnis sehr einfach erzeugen lässt, wenn man die Eingaben kennt. Aus dem Ergebnis die Eingaben herzuleiten, ist allerdings sehr schwierig bis unmöglich.

Sieh dir z.B. diese einfache Gleichung an:

    a x b = 21

Wahrscheinlich wirst du nach einigen Sekunden wissen, dass sich die Gleichung mit a=3, b=7 lösen lässt.  
Nun sieh dir diese Gleichung an:

    a x b = 298685240103926

Es wird dich wahrscheinlich einige Zeit kosten, darauf zu kommen, dass die gesuchte Lösung a=9860162, b=30292123 lautet.

Wenn du a und b hast, ist die Überprüfung des Ergebnisses kein Problem. Wenn du nur das Ergebnis hast, wird es schwierig.

Hash-Funktionen haben viele nützliche Anwendungsfälle und werden in der Informationstechnik häufig verwendet.

Hast du dich z.B. schon einmal gefragt, warum du dein Passwort immer zurücksetzen musst, wenn du es vergessen hast und dir dein Anbieter nicht einfach dein Passwort schickt? Das liegt daran, dass der Anbieter nur einen Hash deines Passworts gespeichert hat und dein eigentliches Passwort gar nicht kennt.  
Wenn du dich einloggst, erzeugt der Anbieter einfach einen Hash deines eingetippten Passworts und vergleicht diesen mit dem Hash, den er gespeichert hat. So weiß er, dass das Passwort stimmt, ohne es kennen zu müssen. Und so kommt auch niemand an dein Passwort, falls der Anbieter gehackt wird.

[Bitcoin](../b/bitcoin) verwendet Hashes unter anderem für das [Mining](../m/mining). Die für das [Bitcoin](../b/bitcoin)-[Mining](../m/mining) verwendete Hash-Funktion ist [SHA-256](../s/sha-256).
