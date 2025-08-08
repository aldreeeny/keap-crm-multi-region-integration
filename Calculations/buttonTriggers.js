const buttonCalc = (inputDate) => {
  Logger.log (inputDate)
let australia = {
  data:calculateData("Australia",inputDate),
  range:"B3:I3"
  }
let balticEU = {
  data:calculateData("Baltic",inputDate),
  range:"B7:I7"
}
let canada = {
  data:calculateData("Canada",inputDate),
  range:"B11:I11"
}
let newZealand = {
  data:calculateData("NewZealand",inputDate),
  range:"B15:I15"
}
let usa = {
  data:calculateData("USA",inputDate),
  range:"B19:I19"
}

let writeData = [australia,balticEU,canada,newZealand,usa];

Logger.log(writeData);
writeSheetCalc(writeData)
return writeData
}

const writeSheetCalc = (writeData) => {
  let write = calculations;
  writeData.forEach(area => {
    let hold = [[area.data.refferedGroup,
    area.data.refferedGroupSizeLastMonth,
    area.data.refferedGroupSizeLastYear,
    "",
    "",
    area.data.engagementGroup,
    area.data.engagementGroupSizeLastMonth,
    area.data.engagementGroupSizeLastYear]];

    write.getRange(area.range).clearContent();
    write.getRange(area.range).setValues(hold);
  })
  return
}

