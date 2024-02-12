```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/managedCertificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainControlValidation = "string"
      subjectName = "string"
    }
  })
}

```

### managedEnvironments/managedCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Certificate resource specific properties | ManagedCertificateProperties |


### ManagedCertificateProperties

| Name | Description | Value |
|-|-|-|
| domainControlValidation | Selected type of domain control validation for managed certificates. | 'CNAME''HTTP''TXT' |
| subjectName | Subject name of the certificate. | string |


