const getProductsCanada = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapCanada
    }
  }
  let data = UrlFetchApp.fetch(productsRequest,options);
  data = JSON.parse(data);
  data = productsArray(data.products,"Canada");
  Logger.log(data);

  return data
}