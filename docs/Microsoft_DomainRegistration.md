## Microsoft.DomainRegistration/domains@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DomainRegistration/domains@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authCode = "string"
      autoRenew = bool
      consent = {
        agreedAt = "string"
        agreedBy = "string"
        agreementKeys = [
          "string"
        ]
      }
      contactAdmin = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactBilling = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactRegistrant = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      contactTech = {
        addressMailing = {
          address1 = "string"
          address2 = "string"
          city = "string"
          country = "string"
          postalCode = "string"
          state = "string"
        }
        email = "string"
        fax = "string"
        jobTitle = "string"
        nameFirst = "string"
        nameLast = "string"
        nameMiddle = "string"
        organization = "string"
        phone = "string"
      }
      dnsType = "string"
      dnsZoneId = "string"
      privacy = bool
      targetDnsType = "string"
    }
    kind = "string"
  })
}

```

### domains

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | Domain resource specific properties | DomainProperties |


### DomainProperties

| Name | Description | Value |
|-|-|-|
| authCode |  | string |
| autoRenew | trueif the domain should be automatically renewed; otherwise,false. | bool |
| consent | Legal agreement consent. | DomainPurchaseConsent(required) |
| contactAdmin | Administrative contact. | Contact(required) |
| contactBilling | Billing contact. | Contact(required) |
| contactRegistrant | Registrant contact. | Contact(required) |
| contactTech | Technical contact. | Contact(required) |
| dnsType | Current DNS type | 'AzureDns''DefaultDomainRegistrarDns' |
| dnsZoneId | Azure DNS Zone to use | string |
| privacy | trueif domain privacy is enabled for this domain; otherwise,false. | bool |
| targetDnsType | Target DNS type (would be used for migration) | 'AzureDns''DefaultDomainRegistrarDns' |


### DomainPurchaseConsent

| Name | Description | Value |
|-|-|-|
| agreedAt | Timestamp when the agreements were accepted. | string |
| agreedBy | Client IP address. | string |
| agreementKeys | List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API underTopLevelDomainresource. | string[] |


### Contact

| Name | Description | Value |
|-|-|-|
| addressMailing | Mailing address. | Address |
| email | Email address. | string (required) |
| fax | Fax number. | string |
| jobTitle | Job title. | string |
| nameFirst | First name. | string (required) |
| nameLast | Last name. | string (required) |
| nameMiddle | Middle name. | string |
| organization | Organization contact belongs to. | string |
| phone | Phone number. | string (required) |


### Address

| Name | Description | Value |
|-|-|-|
| address1 | First line of an Address. | string (required) |
| address2 | The second line of the Address. Optional. | string |
| city | The city for the address. | string (required) |
| country | The country for the address. | string (required) |
| postalCode | The postal code for the address. | string (required) |
| state | The state or province for the address. | string (required) |
## Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ownershipId = "string"
    }
    kind = "string"
  })
}

```

### domains/domainOwnershipIdentifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
| properties | DomainOwnershipIdentifier resource specific properties | DomainOwnershipIdentifierProperties |


### DomainOwnershipIdentifierProperties

| Name | Description | Value |
|-|-|-|
| ownershipId | Ownership Id. | string |
