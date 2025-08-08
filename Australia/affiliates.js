const getAffiliatesAut = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapAustralia
    }
  }
  let data = UrlFetchApp.fetch(affiliatesRequest,options);
  data = JSON.parse(data);
  data = affiliatesArray(data.affiliates,"Australia");
  Logger.log(data);

  return data
}