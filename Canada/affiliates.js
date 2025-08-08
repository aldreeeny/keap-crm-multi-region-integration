const getAffiliatesCanada = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapCanada
    }
  }
  let data = UrlFetchApp.fetch(affiliatesRequest,options);
  data = JSON.parse(data);
  data = affiliatesArray(data.affiliates,"Canada");
  Logger.log(data);

  return data
}