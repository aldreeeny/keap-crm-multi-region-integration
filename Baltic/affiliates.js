const getAffiliatesBaltic = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapBalticEU
    }
  }
  let data = UrlFetchApp.fetch(affiliatesRequest,options);
  data = JSON.parse(data);
  data = affiliatesArray(data.affiliates,"Baltic/EU");
  Logger.log(data);

  return data
}