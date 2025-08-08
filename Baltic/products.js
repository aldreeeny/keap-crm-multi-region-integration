const getProductsBaltic = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapBalticEU
    }
  }
  let data = UrlFetchApp.fetch(productsRequest,options);
  data = JSON.parse(data);
  data = productsArray(data.products,"Baltic/EU");
  Logger.log(data);

  return data
}