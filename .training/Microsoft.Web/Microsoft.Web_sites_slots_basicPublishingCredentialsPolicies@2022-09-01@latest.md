```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "ftp"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/slots/basicPublishingCredentialsPolicies-ftp

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ftp' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "scm"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/slots/basicPublishingCredentialsPolicies-scm

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'scm' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |


