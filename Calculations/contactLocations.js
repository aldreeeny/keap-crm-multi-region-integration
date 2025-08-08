const locationData = {
  locations : usaLocations,
  area : "USA",
  dateInput : new Date("2023-02"),
  constStartDate: new Date("2015-01-01")
}


const getDataSourceContacts = () => {

    let contacts = filteredContactsSheet.getRange("A2:S").getValues().filter(contact => contact[18] == locationData.area);
    contacts = contacts.filter(contact => contact[14] != ""); //filter entries with membership_Commencement_Date
    contacts =  contacts.filter(contact => contact[15] == ""); // filter entries without cancelation date

    let startDate = locationData.constStartDate;
    let endDate = locationData.dateInput;
    let inputYear = endDate.getFullYear();
    let inputMonth = endDate.getMonth();

    let lastMonthDate = new Date(inputYear, inputMonth - 1, endDate.getDate());
    let lastYearDate = new Date(inputYear - 1, endDate.getMonth(), endDate.getDate());

return {dataSource: contacts, lastMonthDate: lastMonthDate,lastYearDate: lastYearDate} 
}

const reffGroupSize = () => {
  let contacts = getDataSourceContacts();
  let data = [];

  locationData.locations.forEach((loc) => {

    let hold = [];
    let count = loc == "" ? "" : contacts.dataSource.filter(contact => contact[12] == loc);

    let vsMonth = count == "" ? "" : reffGroupLastMonth(count,contacts);
    let vsYear = count == "" ? "" : reffGroupLastYear(count,contacts);
    count = count == "" ?"" : count.length 
    hold.push(count);
    hold.push(vsMonth);
    hold.push(vsYear);
    data.push(hold)
  })

  Logger.log(data);

  let write = calLocUSA;
  write.getRange("B3:D").clearContent();
  write.getRange(3, 2, data.length, data[0].length).setValues(data);

  return data
}


const reffGroupLastMonth = (count,contacts) => {
  let countThisMonth = count.filter(date => date[14] >= locationData.constStartDate && date[14] <= locationData.dateInput);
  let countLastMonth = count.filter(date => date[14] >= locationData.constStartDate && date[14] <= contacts.lastMonthDate);
  return countThisMonth.length - countLastMonth.length;
}

const reffGroupLastYear = (count,contacts) => {
  let countThisMonth = count.filter(date => date[14] >= locationData.constStartDate && date[14] <= locationData.dateInput);
  let countLastYear = count.filter(date => date[14] >= locationData.constStartDate && date[14] <= contacts.lastYearDate);
  return countThisMonth.length - countLastYear.length;
}

// needs to be crossed checked.
const engGroupSize = () => {
  let contacts = getDataSourceContacts();
  let data = [];

    locationData.locations.forEach((loc) => {

    let hold = [];
    let count = loc == "" ? "" : contacts.dataSource.filter(contact => contact[13] == loc);

    let vsMonth = count == "" ? "" : reffGroupLastMonth(count,contacts);
    let vsYear = count == "" ? "" : reffGroupLastYear(count,contacts);
    count = count == "" ?"" : count.length 
    hold.push(count);
    hold.push(vsMonth);
    hold.push(vsYear);
    data.push(hold)
  })

  let write = calLocUSA;
  write.getRange("G3:I").clearContent();
  write.getRange(3, 7, data.length, data[0].length).setValues(data);

  return data
}





