```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Confluent/agreements@2021-12-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accepted = bool
      licenseTextLink = "string"
      plan = "string"
      privacyPolicyLink = "string"
      product = "string"
      publisher = "string"
      retrieveDatetime = "string"
      signature = "string"
    }
  })
}

```

### agreements

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| properties | Represents the properties of the resource. | ConfluentAgreementProperties |


### ConfluentAgreementProperties

| Name | Description | Value |
|-|-|-|
| accepted | If any version of the terms have been accepted, otherwise false. | bool |
| licenseTextLink | Link to HTML with Microsoft and Publisher terms. | string |
| plan | Plan identifier string. | string |
| privacyPolicyLink | Link to the privacy policy of the publisher. | string |
| product | Product identifier string. | string |
| publisher | Publisher identifier string. | string |
| retrieveDatetime | Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. | string |
| signature | Terms signature. | string |


