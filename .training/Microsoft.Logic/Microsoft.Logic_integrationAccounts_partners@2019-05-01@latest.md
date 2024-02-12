```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/partners@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      content = {
        b2b = {
          businessIdentities = [
            {
              qualifier = "string"
              value = "string"
            }
          ]
        }
      }
      partnerType = "string"
    }
  })
}

```

### integrationAccounts/partners

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account partner properties. | IntegrationAccountPartnerProperties(required) |


### IntegrationAccountPartnerProperties

| Name | Description | Value |
|-|-|-|
| content | The partner content. | PartnerContent(required) |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| partnerType | The partner type. | 'B2B''NotSpecified' (required) |


### PartnerContent

| Name | Description | Value |
|-|-|-|
| b2b | The B2B partner content. | B2BPartnerContent |


### B2BPartnerContent

| Name | Description | Value |
|-|-|-|
| businessIdentities | The list of partner business identities. | BusinessIdentity[] |


### BusinessIdentity

| Name | Description | Value |
|-|-|-|
| qualifier | The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32 | string (required) |
| value | The user defined business identity value. | string (required) |


