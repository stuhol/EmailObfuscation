/*

A simple e-mail obfuscation to help reduce SPAM, it's not going to prevent
someone from getting your e-mail address. Rather, it makes it harder for
automated bots to.

The idea is that you use an icon or text other than your e-mail address as
a placeholder. When the user hovers over the link your e-mail address is
de-obfuscated and inserted as a mailto link. Hopefully this will defeat bots,
unless they trigger the hover event, or simply search for base64 encode strings
and decode them and match for e-mail addresses.

Requirements: jQuery, Base 64 encoded e-mail address

*/

// Base64 encoded e-mail address
// $ echo -n <e-mail address> | base64
var obfuEmail = "bWVAbXlkb21haW4uY29t";

// E-mail link ID
var emailLinkID = "email";

$('#' + emailLinkID).hover(function(){ deobfuEmailHover(); }, function() { obfuEmailHover(); });

function deobfuEmailHover() {
   var deobfuEmail = atob(obfuEmail);
   $('#' + emailLinkID).attr('href', 'mailto:' + deobfuEmail);
}

function obfuEmailHover() {
   $('#' + emailLinkID).attr('href', '#');
}
