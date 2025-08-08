const getProductsAut = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapAustralia
    }
  }
  let data = UrlFetchApp.fetch(productsRequest,options);
  data = JSON.parse(data);
  data = productsArray(data.products,"Australia");
  Logger.log(data);

  return data
}