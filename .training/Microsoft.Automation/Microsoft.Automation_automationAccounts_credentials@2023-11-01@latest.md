```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/credentials@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      password = "string"
      userName = "string"
    }
  })
}

```

### automationAccounts/credentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the credential. | CredentialCreateOrUpdatePropertiesOrCredentialProper...(required) |


### CredentialCreateOrUpdatePropertiesOrCredentialProper...

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the credential. | string |
| password | Gets or sets the password of the credential. | string (required) |
| userName | Gets or sets the user name of the credential. | string (required) |


