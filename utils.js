const emailList = () => {

  
}

const contactsArray = (data,area,custom_field_map) => {
let contacts = [];
  Logger.log(data);
  data.forEach((contact) => {

    let custom_fields = {
                  refferal_Group : getCustomFieldValue(custom_field_map.refferal_Group, contact.custom_fields),
                  nurturing_Group : getCustomFieldValue(custom_field_map.nurturing_Group, contact.custom_fields),
                  membership_Commencement_Date : getCustomFieldValue(custom_field_map.membership_Commencement_Date, contact.custom_fields),
                  membership_Cancellation_Date : getCustomFieldValue(custom_field_map.membership_Cancellation_Date, contact.custom_fields),
                  date_of_Final_Payment : getCustomFieldValue(custom_field_map.date_of_Final_Payment, contact.custom_fields),
                  membershipType : getCustomFieldValue(custom_field_map.membershipType, contact.custom_fields)
            }

    let hold = [
      contact.id,
      contact.given_name,
      contact.middle_name,
      contact.family_name,
      contact.owner_id,
      contact.company,
      contact.date_created,
      contact.last_updated,
      contact.email_opted_in,
      contact.email_status,
      contact.ScoreValue,
      custom_fields.membershipType,
      custom_fields.refferal_Group,
      custom_fields.nurturing_Group,
      custom_fields.membership_Commencement_Date,
      custom_fields.membership_Cancellation_Date,
      custom_fields.date_of_Final_Payment,
      contact.tag_ids.toString(),
      area
    ];
  contacts.push(hold);
  });
  return contacts
}

const contactsArrayFiltered = (data,status) => {
    let hold = [
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],
      data[6],
      data[7],
      data[8],
      data[9],
      data[10],
      data[11],
      data[12],
      data[13],
      data[14],
      data[15],
      data[16],
      status,
      data[18]
    ];
  return hold
}

const companiesArray = (data, location) => {
let companies = [];

  data.forEach((company) => {
    let hold = [
          company.id,
          company.company_name,
          company.email_address,
          company.website,
          company.address.line1,
          company.address.line2,
          company.address.locality,
          company.address.region,
          company.address.zip_code,
          company.address.zip_four,
          company.address.country_code,
          company.phone_number.number,
          company.phone_number.extension,
          company.phone_number.type,
          company.email_opted_in,
          company.email_status,
          location
    ];
  companies.push(hold);
  });

return companies
}

const usersArray = (data, location) => {
let users = [];

  data.forEach((user) => {
    let hold = [
          user.id,
          user.global_user_id,
          user.infusionsoft_id,
          user.job_title,
          user.email_address,
          user.website,
          user.time_zone,
          user.company_name,
          user.given_name,
          user.middle_name,
          user.family_name,
          user.preferred_name,
          user.status,
          user.partner,
          user.last_updated,
          location
    ];
  users.push(hold);
  });

return users
}

const productsArray = (data, area) => {
let products = [];

  data.forEach((product) => {
    let hold = [
          product.id,
          product.sku,
          product.url,
          product.status,
          product.product_name,
          product.product_desc,
          product.product_price,
          product.product_short_desc,
          product.subscription_only,
          product.product_options,
          product.subscription_plans,
          area
    ];
  products.push(hold);
  });
return products
}


const emailsArray = (data, location) => {
let emails = [];
  data.forEach((email) => {
    let hold = [
          email.id,
          email.subject,
          email.headers,
          email.contact_id,
          email.sent_to_address,
          email.sent_to_cc_addresses,
          email.sent_from_address,
          email.sent_from_reply_address,
          email.sent_date,
          email.received_date,
          email.opened_date,
          email.clicked_date,
          email.original_provider,
          email.original_provider_id,
          location
    ];
  emails.push(hold);
  });
return emails
}

const affiliatesArray = (data, area) => {
let affiliates = [];
  data.forEach((affiliate) => {
    let hold = [
          affiliate.id,
          affiliate.contact_id,
          affiliate.parent_id,
          affiliate.code,
          affiliate.name,
          affiliate.status,
          affiliate.notify_on_lead,
          affiliate.notify_on_sale,
          affiliate.track_leads_for,
          area
    ];
  affiliates.push(hold);
  });
return affiliates
}

const taggedContactsArray = (data, area, tagID) => {
let taggedContacts = []

data.forEach((contact) => {
  let hold = [
    tagID,
    contact.contact.id,
    contact.contact.email,
    contact.date_applied,
    area
  ];
  taggedContacts.push(hold)
})
return taggedContacts
}

const writeSheet = (sheet,data) => {
  let write = sheet;
  write.getRange("A2:Z").clearContent();
  write.getRange(2, 1, data.length, data[0].length).setValues(data);
}






