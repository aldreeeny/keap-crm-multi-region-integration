const calculateData = (areafield,dateInput) => {

  let data = {
    area : areafield,
    dateInput : new Date(dateInput),
    constStartDate: new Date("2015-01-01")
  }

let refferedGroupSize = refferedGroupSizeCalc(data);
let engagementGroupSize  = engagementGroupSizeCal(data);

let calculated = {
  refferedGroup:refferedGroupSize.length,
  refferedGroupSizeLastMonth: refferedGroupSizeLastMonth(refferedGroupSize,data),
  refferedGroupSizeLastYear: refferedGroupSizeLastYear(refferedGroupSize,data),

  engagementGroup: engagementGroupSize.length,
  engagementGroupSizeLastMonth: engagementGroupSizeLastMonth(engagementGroupSize,data),
  engagementGroupSizeLastYear: engagementGroupSizeLastYear(engagementGroupSize,data)

}


return calculated
}


const refferedGroupSizeCalc = (data) => {
  let contacts = contactsSheet.getRange("A2:R").getValues().filter(contact => contact[17] == data.area);
    contacts = contacts.filter(contact => contact[14] != ""); //filter entries with membership_Commencement_Date
    contacts =  contacts.filter(contact => contact[15] == ""); // filter entries without cancelation date
    let count = contacts.filter(contact => contact[12] != ""); //filter entries with refferal group
  return count
}

const refferedGroupSizeLastMonth = (refferedGroupSize,data) => {
  let startDate = data.constStartDate;
  let endDate = data.dateInput;
    let inputYear = endDate.getFullYear();
    let inputMonth = endDate.getMonth();
  let lastMonthDate = new Date(inputYear, inputMonth - 1, endDate.getDate());
  

  let countThisMonth = refferedGroupSize.filter(date => date[14] >= startDate && date[14] <= endDate);
  let countLastMonth = refferedGroupSize.filter(date => date[14] >= startDate && date[14] <= lastMonthDate);


  return countThisMonth.length - countLastMonth.length;
}

const refferedGroupSizeLastYear = (refferedGroupSize,data) => {
  let startDate = data.constStartDate;
  let endDate = data.dateInput;
    let inputYear = endDate.getFullYear();
  let lastYearDate = new Date(inputYear - 1, endDate.getMonth(), endDate.getDate());
  


  let countThisMonth = refferedGroupSize.filter(date => date[14] >= startDate && date[14] <= endDate);
  let countLastYear = refferedGroupSize.filter(date => date[14] >= startDate && date[14] <= lastYearDate);


  return countThisMonth.length - countLastYear.length;
}

const engagementGroupSizeCal = (data) => {
    let contacts = contactsSheet.getRange("A2:R").getValues().filter(contact => contact[17] == data.area);
    contacts = contacts.filter(contact => contact[14] != ""); //filter entries with membership_Commencement_Date
    contacts =  contacts.filter(contact => contact[15] == ""); // filter entries without cancelation date
    let count = contacts.filter(contact => contact[13] != ""); //filter entries with nurturing group
  return count
}

const engagementGroupSizeLastMonth = (engagementGroupSize,data) => {
  let startDate = data.constStartDate;
  let endDate = data.dateInput;
    let inputYear = endDate.getFullYear();
    let inputMonth = endDate.getMonth();
  let lastMonthDate = new Date(inputYear, inputMonth - 1, endDate.getDate());
  

  let countThisMonth = engagementGroupSize.filter(date => date[14] >= startDate && date[14] <= endDate);
  let countLastMonth = engagementGroupSize.filter(date => date[14] >= startDate && date[14] <= lastMonthDate);


  return countThisMonth.length - countLastMonth.length;
}

const engagementGroupSizeLastYear = (engagementGroupSize,data) => {
  let startDate = data.constStartDate;
  let endDate = data.dateInput;
    let inputYear = endDate.getFullYear();
  let lastYearDate = new Date(inputYear - 1, endDate.getMonth(), endDate.getDate());


  let countThisMonth = engagementGroupSize.filter(date => date[14] >= startDate && date[14] <= endDate);
  let countLastYear = engagementGroupSize.filter(date => date[14] >= startDate && date[14] <= lastYearDate);


  return countThisMonth.length - countLastYear.length;
}







