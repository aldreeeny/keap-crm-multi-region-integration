const getTaggedContactsUSA = () => {
  let taggedContacts = [];
  let offset = 0;
  let tagContact;
  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapUSA
    }
  }

    do {
    let url = "https://api.infusionsoft.com/crm/rest/v1/tags/"+tagCurrentBxGlobalMemeber.usa+"/contacts/?limit=1000&offset="+offset+"&order=id";
      let data = UrlFetchApp.fetch(url,options);
      data = JSON.parse(data);
      tagContact = data.contacts.length;
      taggedContacts = taggedContacts.concat(taggedContactsArray(data.contacts,"USA",tagCurrentBxGlobalMemeber.usa));
      offset = offset+1000;

      Logger.log(offset)
      Logger.log(tagContact)

      Utilities.sleep(15000);
  }
  while (tagContact != 0);

Logger.log (taggedContacts);
writeSheet(extraSheet, taggedContacts);

return taggedContacts
}

