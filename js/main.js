// Assemble contact details at runtime so the raw address never appears in the
// page source (basic protection against email-harvesting scrapers).
(function () {
  "use strict";

  var EMAIL_USER = "youngjustin";
  var EMAIL_DOMAIN = "microsoft.com";
  var address = EMAIL_USER + "@" + EMAIL_DOMAIN;

  // Primary "Email" link in the header -> opens the mail client.
  var emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.setAttribute("href", "mailto:" + address);
    emailLink.setAttribute("title", "Email Justin Young");
  }
})();
