const getCustomFields = () => {
let data = [];
const keysAreas = [
  [properties.keapAustralia, "Australia"], 
  [properties.keapNewZealand, "NewZealand"], 
  [properties.keapUSA, "USA"], 
  [properties.keapBalticEU, "BalticEU"], 
  [properties.keapCanada, "Canada"]
  ];

keysAreas.forEach((area) => {
    let options = {
      "contentType": "application/json",
      "headers":{"X-Keap-API-Key": area[0]
    }
  }  
  let model = UrlFetchApp.fetch(getCustomFieldsRequest,options);
  model = JSON.parse(model);

  model.custom_fields.forEach((field) => {
      let hold = [
      field.id,
      field.label,
      field.field_name,
      field.record_type,
      field.field_type,
      area[1],
      ]
      data.push(hold);
  })
})
writeSheet(customFieldsSheet, data);
}


const parseCustomField = (id, location) => {
  id = YOUR_CUSTOM_FIELD_ID;
  location = "Australia";
let sheet = customFieldsSheet.getRange("A2:F").getValues();

let fieldName = sheet.find((field) => field[0] == id && field[5] == location)

Logger.log(sheet);
Logger.log(fieldName);
}

const getCustomFieldValue = (id, customfields) => {
  let fieldValue = customfields.find(field => field.id == id)
  return fieldValue.content

}
