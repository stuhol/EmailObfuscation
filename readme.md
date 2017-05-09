# Email obfuscation

## Description

A simple e-mail obfuscation to help reduce SPAM, it's not going to prevent
someone from getting your e-mail address. Rather, it makes it harder for
automated bots to.

The idea is that you use an icon or text other than your e-mail address as
a placeholder. When the user hovers over the link your e-mail address is
de-obfuscated and inserted as a mailto link. Hopefully this will defeat bots,
unless they trigger the hover event, or simply search for base64 encode strings
and decode them and match for e-mail addresses.

## Requirements

* jQuery - Tested against 3.2.1
* Base 64 encoded e-mail address
* Ionicons (optional) - A good set of icons http://ionicons.com/

## Use

Encode your e-mail address as base 64. For example:

`$ echo -n me@mydomain.com | base64`

Copy your base 64 encoded e-mail address in to obfuEmail variable located in
emailobfu.js

Create a link on your webpage with an ID of "email". E.g.:

`<a id="email" href="#">E-mail Me</a>`

or

`<a class="ion-ios-email-outline" style="font-size: 32px" id="email" href="#" title="E-mail me"></a>`

You can change the ID used in the script by editing the emailLinkID variable.

See example.html or https://jsfiddle.net/stuhol/pd8upfvc/
