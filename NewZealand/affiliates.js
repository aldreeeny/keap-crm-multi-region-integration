const getAffiliatesNewZealand = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapNewZealand
    }
  }
  let data = UrlFetchApp.fetch(affiliatesRequest,options);
  data = JSON.parse(data);
  data = affiliatesArray(data.affiliates,"NewZealand");
  Logger.log(data);

writeSheet(extraSheet, data);

  return data
}