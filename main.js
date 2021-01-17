
var card = new Card({

  form: "form", // *required*

  container: ".card-wrapper", // *required*

  // Strings for translation - optional
  messages: {
    validDate: "valid\ndate", // optional - default 'valid\nthru'
    monthYear: "mm/yyyy", // optional - default 'month/year'
  },

  // Default placeholders for rendered fields - optional
  placeholders: {
    number: "•••• •••• •••• ••••",
    name: "Full Name",
    expiry: "••/••",
    cvc: "•••",
  },

});
