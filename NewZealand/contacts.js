const getContactsNewZealand = () => {
  let contactsDetails = [];
  let offset = 0;
  let contact;
  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapNewZealand
    }
  }

    do {
    let url = "https://api.infusionsoft.com/crm/rest/v1/contacts/?limit=1000&offset="+offset+"&order=id&optional_properties=custom_fields";
      let data = UrlFetchApp.fetch(url,options);
      data = JSON.parse(data);
      contact = data.contacts.length;
      contactsDetails = contactsDetails.concat(contactsArray(data.contacts,"NewZealand",customFieldsNewZealand));
      offset = offset+1000;

      Logger.log(offset)
      Logger.log(contact)

      Utilities.sleep(15000);
  }
  while (contact != 0);

Logger.log (contactsDetails);

return contactsDetails
}

const customFieldsNewZealand = {
    refferal_Group : 586,
    nurturing_Group : 588,
    membershipType: 596,
    membership_Commencement_Date : 404,
    membership_Cancellation_Date : 420,
    date_of_Final_Payment : 332
}

const filteredContactsNewZealand = () => {
let contactsList = [];

let sheet = taggedContactsSheet.getRange("A2:E").getValues();
sheet = sheet.filter(element => element[0] != ""); //removeEmpty values
sheet = sheet.filter(element => element[4] == "NewZealand");

 sheet = sheet.map((element) => ({
    TagID: element[0],
    id: element[1],
    email: element[2],
    date_applied: element[3],
    area: element[4]
  }));

let contacts = contactsSheet.getRange("A2:S").getValues();
contacts = contacts.filter(contact => contact[1] != "") // removeEmpty given_name;
contacts = contacts.filter(contact => contact[18] == "NewZealand")


contacts.forEach((contact) => {
  let status = sheet.find(element => element.id == contact[0]);
  if(status != null){contactsList.push(contactsArrayFiltered(contact,"Tag Applied"))}

})

Logger.log(contactsList);
  return contactsList
}