const getProductsNewZealand = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapNewZealand
    }
  }
  let data = UrlFetchApp.fetch(productsRequest,options);
  data = JSON.parse(data);
  data = productsArray(data.products,"NewZealand");
  Logger.log(data);

  return data
}