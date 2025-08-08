const getAffiliatesUSA = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapUSA
    }
  }
  let data = UrlFetchApp.fetch(affiliatesRequest,options);
  data = JSON.parse(data);
  data = affiliatesArray(data.affiliates,"USA");
  Logger.log(data);

  return data
}