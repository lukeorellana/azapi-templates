```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/informationProtectionPolicies@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationTypes = {
        {customized property} = {
          custom = bool
          description = "string"
          displayName = "string"
          enabled = bool
          keywords = [
            {
              canBeNumeric = bool
              custom = bool
              excluded = bool
              pattern = "string"
            }
          ]
          order = int
          recommendedLabelId = "string"
        }
      }
      labels = {
        {customized property} = {
          description = "string"
          displayName = "string"
          enabled = bool
          order = int
          rank = "string"
        }
      }
    }
  })
}

```

### informationProtectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: see valuesValid characters:Use one of:customeffective |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Information protection policy data | InformationProtectionPolicyProperties |


### InformationProtectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| informationTypes | The sensitivity information types. | InformationProtectionPolicyPropertiesInformationType... |
| labels | Dictionary of sensitivity labels. | InformationProtectionPolicyPropertiesLabels |


### InformationProtectionPolicyPropertiesInformationType...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InformationType |


### InformationType

| Name | Description | Value |
|-|-|-|
| custom | Indicates whether the information type is custom or not. | bool |
| description | The description of the information type. | string |
| displayName | The name of the information type. | string |
| enabled | Indicates whether the information type is enabled or not. | bool |
| keywords | The information type keywords. | InformationProtectionKeyword[] |
| order | The order of the information type. | int |
| recommendedLabelId | The recommended label id to be associated with this information type. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


### InformationProtectionKeyword

| Name | Description | Value |
|-|-|-|
| canBeNumeric | Indicates whether the keyword can be applied on numeric types or not. | bool |
| custom | Indicates whether the keyword is custom or not. | bool |
| excluded | Indicates whether the keyword is excluded or not. | bool |
| pattern | The keyword pattern. | string |


### InformationProtectionPolicyPropertiesLabels

| Name | Description | Value |
|-|-|-|
| {customized property} |  | SensitivityLabel |


### SensitivityLabel

| Name | Description | Value |
|-|-|-|
| description | The description of the sensitivity label. | string |
| displayName | The name of the sensitivity label. | string |
| enabled | Indicates whether the label is enabled or not. | bool |
| order | The order of the sensitivity label. | int |
| rank | The rank of the sensitivity label. | 'Critical''High''Low''Medium''None' |


