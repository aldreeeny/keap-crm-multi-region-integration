const getContactsAut = () => {
  let contactsDetails = [];
  let offset = 0;
  let contact;
  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapAustralia
    }
  }

    do {
    let url = "https://api.infusionsoft.com/crm/rest/v1/contacts/?limit=1000&offset="+offset+"&order=id&optional_properties=custom_fields";
      let data = UrlFetchApp.fetch(url,options);
      data = JSON.parse(data);
      contact = data.contacts.length;
      contactsDetails = contactsDetails.concat(contactsArray(data.contacts,"Australia",customFieldsAus));
      offset = offset+1000;

      Logger.log(offset)
      Logger.log(contact)

      Utilities.sleep(15000);
  }
  while (contact != 0);

Logger.log (contactsDetails);


return contactsDetails
}

const customFieldsAus = {
    refferal_Group : 238,
    nurturing_Group : 446,
    membershipType: 242,
    membership_Commencement_Date : 320,
    membership_Cancellation_Date : 340,
    date_of_Final_Payment : 348
}



