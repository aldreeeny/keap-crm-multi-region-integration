# Keap CRM Multi-Region Data Integration

## Overview

This Google Apps Script project provides comprehensive data integration with Keap CRM (formerly Infusionsoft) across multiple regions including Australia, New Zealand, USA, Baltic EU, and Canada. The system extracts and processes contacts, companies, users, products, emails, and affiliates data, with advanced filtering and calculation capabilities for business analytics.

## Features

- **Multi-Region Support**: Handles data from 5 different Keap CRM regions
- **Comprehensive Data Extraction**: Contacts, companies, users, products, emails, affiliates
- **Advanced Filtering**: Filter contacts by tags and custom fields
- **Custom Field Management**: Dynamic custom field mapping and processing
- **Location-Based Analytics**: Region-specific calculations and reporting
- **Interactive UI**: Custom sidebar for calculations and data management
- **Automated Data Processing**: Batch operations for large datasets
- **Real-time Data Sync**: Live data extraction and processing

## File Structure

- **`.clasp.json`**: Google Apps Script CLI configuration
- **`appsscript.json`**: Apps Script manifest file
- **`const.js`**: Configuration constants, API endpoints, and location mappings
- **`customFields.js`**: Custom field management and processing functions
- **`Triggers.js`**: Main trigger functions and data extraction orchestration
- **`utils.js`**: Utility functions for data processing and array manipulation
- **`calculationSidebar.html`**: HTML template for the interactive sidebar
- **`Calculations/`**: Directory containing calculation-specific functions
  - `buttonTriggers.js`: Button event handlers
  - `contactLocations.js`: Location-based contact processing
  - `contacts.js`: Contact data processing functions
- **Regional Directories**: `Australia/`, `Baltic/`, `Canada/`, `NewZealand/`, `USA/`

## Setup Instructions

### Prerequisites

1. **Google Apps Script Project**: Create a new Google Apps Script project
2. **Keap CRM Accounts**: Access to Keap CRM instances for each region
3. **Google Sheets**: Spreadsheet with predefined sheet names
4. **API Access**: Keap API keys for each region

### Configuration

1. **Replace Placeholders**: Update the following placeholders in the code:
   - `YOUR_SCRIPT_ID_HERE` in `.clasp.json`
   - `YOUR_AUSTRALIA_TAG_ID` in `const.js`
   - `YOUR_BALTIC_TAG_ID` in `const.js`
   - `YOUR_CANADA_TAG_ID` in `const.js`
   - `YOUR_NEW_ZEALAND_TAG_ID` in `const.js`
   - `YOUR_USA_TAG_ID` in `const.js`
   - `YOUR_CUSTOM_FIELD_ID` in `customFields.js`

2. **Script Properties Setup**:
   Configure the following properties in Apps Script:
   - `keapAustralia`: API key for Australia region
   - `keapNewZealand`: API key for New Zealand region
   - `keapUSA`: API key for USA region
   - `keapBalticEU`: API key for Baltic EU region
   - `keapCanada`: API key for Canada region

3. **Google Sheets Setup**:
   Create sheets with the following names:
   - "Contacts" (filtered contacts)
   - "contactsDump" (all contacts)
   - "companies"
   - "users"
   - "products"
   - "emails"
   - "affiliates"
   - "customFields"
   - "Calculations"
   - "Australia"
   - "USA"
   - "extraSheet"

## Usage

### Main Functions

1. **`getContactsDump()`**: Extracts all contacts from all regions
2. **`getContactsFiltered()`**: Extracts filtered contacts with specific criteria
3. **`getAffiliates()`**: Extracts affiliate data from all regions
4. **`getProducts()`**: Extracts product data from all regions
5. **`getTaggedContacts()`**: Extracts contacts with specific tags
6. **`getCustomFields()`**: Extracts custom field definitions
7. **`calculationSidebar()`**: Opens interactive calculation sidebar

### Data Processing

#### Contact Data Structure:
- Contact ID, names, company, dates
- Custom fields (membership type, referral group, nurturing group)
- Membership dates (commencement, cancellation, final payment)
- Tag IDs, region information

#### Company Data Structure:
- Company ID, name, contact information
- Address details (lines, locality, region, zip, country)
- Phone numbers, email status

#### User Data Structure:
- User ID, global user ID, job title
- Contact information, time zone, status
- Partner information, last updated

#### Product Data Structure:
- Product ID, SKU, URL, status
- Product details (name, description, price)
- Subscription information, options, plans

#### Email Data Structure:
- Email ID, subject, headers
- Contact information, addresses
- Dates (sent, received, opened, clicked)
- Provider information

#### Affiliate Data Structure:
- Affiliate ID, contact ID, parent ID
- Code, name, status
- Notification settings, tracking information

## API Configuration

The script uses Keap's REST API with the following endpoints:
- Base URL: `https://api.infusionsoft.com/crm/rest/v1/`
- Authentication: X-Keap-API-Key header
- Rate Limiting: Built-in pagination support

### API Headers:
```javascript
{
  "contentType": "application/json",
  "headers": {
    "X-Keap-API-Key": "YOUR_API_KEY"
  }
}
```

## Custom Fields Management

The system supports dynamic custom field processing:
- **Field Mapping**: Automatic mapping of custom field IDs to labels
- **Value Extraction**: Retrieves custom field values from contact data
- **Region Support**: Different custom fields per region
- **Type Handling**: Supports various field types (text, date, number, etc.)

## Location-Based Features

### Australia Locations:
Comprehensive list of Australian locations including:
- Sydney (CBD, Hills, Parramatta, etc.)
- Melbourne (East, South, West, etc.)
- Brisbane, Gold Coast, Perth, Adelaide
- Regional centers and lunch/dinner locations

### USA Locations:
Texas-based locations including:
- Austin (Round Rock, South Austin, etc.)
- San Antonio (Northwest, North Central)
- Georgetown, Troy Lunch

## Functions Reference

### Core Data Functions

- `getContactsDump()`: Retrieves all contacts from all regions
- `getContactsFiltered()`: Retrieves filtered contacts with specific criteria
- `getAffiliates()`: Retrieves affiliate data from all regions
- `getProducts()`: Retrieves product data from all regions
- `getTaggedContacts()`: Retrieves contacts with specific tags
- `getCustomFields()`: Retrieves custom field definitions

### Utility Functions

- `contactsArray()`: Processes contact data into array format
- `contactsArrayFiltered()`: Processes filtered contact data
- `companiesArray()`: Processes company data into array format
- `usersArray()`: Processes user data into array format
- `productsArray()`: Processes product data into array format
- `emailsArray()`: Processes email data into array format
- `affiliatesArray()`: Processes affiliate data into array format
- `taggedContactsArray()`: Processes tagged contact data
- `writeSheet()`: Writes data to Google Sheets

### Custom Field Functions

- `getCustomFieldValue()`: Extracts custom field values
- `parseCustomField()`: Parses custom field information

## Security Notes

- **API Keys**: Store Keap API keys securely in script properties
- **Script ID**: Keep the script ID private
- **Tag IDs**: Ensure tag IDs are correct for your Keap organization
- **Custom Field IDs**: Verify custom field IDs match your setup
- **Data Access**: Ensure appropriate permissions for all sheets

## Troubleshooting

1. **Authentication Errors**: Verify Keap API keys are valid and have appropriate permissions
2. **Tag Not Found**: Ensure tag IDs are correct for your Keap organization
3. **Custom Field Errors**: Verify custom field IDs exist in your Keap setup
4. **Sheet Not Found**: Ensure all required sheet names exist exactly as specified
5. **API Rate Limits**: Keap API has rate limits; the script includes pagination support
6. **Data Format Issues**: Verify API response structure matches expected format

## Development

- Test with individual regions before running all
- Check Apps Script logs for detailed execution information
- Monitor API usage to stay within rate limits
- Use the calculation sidebar for testing and debugging
- Verify custom field mappings for each region

## Regional Support

The system supports the following regions:
- **Australia**: Full location mapping and data processing
- **New Zealand**: Complete data integration
- **USA**: Texas-based locations and data processing
- **Baltic EU**: European region support
- **Canada**: Canadian region support

## License

This project is for internal use. Please ensure compliance with Keap's API terms of service and Google Apps Script usage policies. 
