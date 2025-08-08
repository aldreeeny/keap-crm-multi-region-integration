const getProductsUSA = () => {

  let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": properties.keapUSA
    }
  }
  let data = UrlFetchApp.fetch(productsRequest,options);
  data = JSON.parse(data);
  data = productsArray(data.products,"USA");
  Logger.log(data);


  return data
}