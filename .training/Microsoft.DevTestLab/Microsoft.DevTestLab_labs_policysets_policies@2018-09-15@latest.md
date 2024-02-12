```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/policysets/policies@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      evaluatorType = "string"
      factData = "string"
      factName = "string"
      status = "string"
      threshold = "string"
    }
  })
}

```

### labs/policysets/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: policysets |
| properties | The properties of the resource. | PolicyProperties(required) |


### PolicyProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the policy. | string |
| evaluatorType | The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy). | 'AllowedValuesPolicy''MaxValuePolicy' |
| factData | The fact data of the policy. | string |
| factName | The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc. | 'EnvironmentTemplate''GalleryImage''LabPremiumVmCount''LabTargetCost''LabVmCount''LabVmSize''ScheduleEditPermission''UserOwnedLabPremiumVmCount''UserOwnedLabVmCount''UserOwnedLabVmCountInSubnet' |
| status | The status of the policy. | 'Disabled''Enabled' |
| threshold | The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy). | string |


