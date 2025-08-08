
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Functions')
      .addItem('Refresh Data', 'getContacts')
      .addItem('Calculations', 'calculationSidebar')
      .addToUi();
}

const calculationSidebar = () => {
  const htmlTemplate = HtmlService.createTemplateFromFile("calculationSidebar");
  const html = htmlTemplate.evaluate().setTitle("Calculations");
  SpreadsheetApp.getUi().showSidebar(html);

}


const getContactsDump = () => {
  let contacts = [];

  let data_Baltic = getContactsBaltic();
  let data_Canada = getContactsCanada();
  let data_NewZealand = getContactsNewZealand();
  let data_USA = getContactsUSA();

  let data = contacts.concat(data_Baltic,data_Canada,data_NewZealand,data_USA);
  writeSheet(contactsSheet, data);
  return data
}

const getContactsFiltered = () => {
  let contacts = [];
  
  let data_Baltic = filteredContactsBaltic();
  let data_Canada = filteredContactsCanada();
  let data_NewZealand = filteredContactsNewZealand();
  let data_USA = filteredContactsUSA();

  let data = contacts.concat(data_Baltic,data_Canada,data_NewZealand,data_USA);
  Logger.log(data);
  writeSheet(filteredContactsSheet, data);
  return data
}


const getAffiliates = () => {
  let affiliate = [];
  let data_Aus = getAffiliatesAut();
  let data_Baltic = getAffiliatesBaltic();
  let data_Canada = getAffiliatesCanada();
  let data_NewZealand = getAffiliatesNewZealand();
  let data_USA = getAffiliatesUSA();

  let data = affiliate.concat(data_Aus,data_Baltic,data_Canada,data_NewZealand,data_USA);
  writeSheet(affiliatesSheet, data);
  return data
}

const getProducts = () => {
  let products = [];
  let data_Aus = getProductsAut();
  let data_Baltic = getProductsBaltic();
  let data_Canada = getProductsCanada();
  let data_NewZealand = getProductsNewZealand();
  let data_USA = getProductsUSA();

  let data = products.concat(data_Aus,data_Baltic,data_Canada,data_NewZealand,data_USA);
  writeSheet(productsSheet, data);
  return data
}

const getTaggedContacts = () => {
  let taggedContacts = [];
    let data_Baltic = getTaggedContactsBaltic();
    let data_Canada = getTaggedContactsCanada();
    let data_NewZealand = getTaggedContactsNewZealand();
    let data_USA = getTaggedContactsUSA();

  let data = taggedContacts.concat(data_Baltic,data_Canada,data_NewZealand,data_USA);
  writeSheet(taggedContactsSheet, data);
  return data
}


