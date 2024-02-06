## Microsoft.Chaos/experiments@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/experiments@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      selectors = [
        {
          filter = {
            type = "string"
            // For remaining properties, see Filter objects
          }
          id = "string"
          targets = [
            {
              id = "string"
              type = "ChaosTarget"
            }
          ]
          type = "string"
        }
      ]
      startOnCreation = bool
      steps = [
        {
          branches = [
            {
              actions = [
                {
                  name = "string"
                  type = "string"
                  // For remaining properties, see Action objects
                }
              ]
              name = "string"
            }
          ]
          name = "string"
        }
      ]
    }
  })
}

```

### experiments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the experiment resource. | ResourceIdentity |
| properties | The properties of the experiment resource. | ExperimentProperties(required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | String of the resource identity type. | 'None''SystemAssigned' (required) |


### ExperimentProperties

| Name | Description | Value |
|-|-|-|
| selectors | List of selectors. | Selector[] (required) |
| startOnCreation | A boolean value that indicates if experiment should be started on creation or not. | bool |
| steps | List of steps. | Step[] (required) |


### Selector

| Name | Description | Value |
|-|-|-|
| filter | Model that represents available filter types that can be applied to a targets list. | Filter |
| id | String of the selector ID. | string (required) |
| targets | List of Target references. | TargetReference[] (required) |
| type | Enum of the selector type. | 'List''Percent''Random''Tag' (required) |


### Filter

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Simple(required) |


### SimpleFilter

| Name | Description | Value |
|-|-|-|
| type | Enum that discriminates between filter types. Currently onlySimpletype is supported. | 'Simple' (required) |
| parameters | Model that represents the Simple filter parameters. | SimpleFilterParameters |


### SimpleFilterParameters

| Name | Description | Value |
|-|-|-|
| zones | List of Azure availability zones to filter targets by. | string[] |


### TargetReference

| Name | Description | Value |
|-|-|-|
| id | String of the resource ID of a Target resource. | string (required) |
| type | Enum of the Target reference type. | 'ChaosTarget' (required) |


### Step

| Name | Description | Value |
|-|-|-|
| branches | List of branches. | Branch[] (required) |
| name | String of the step name. | string (required) |


### Branch

| Name | Description | Value |
|-|-|-|
| actions | List of actions. | Action[] (required) |
| name | String of the branch name. | string (required) |


### Action

| Name | Description | Value |
|-|-|-|
| name | String that represents a Capability URN. | string (required) |
| type | Set the object type | continuousdelaydiscrete(required) |


### ContinuousAction

| Name | Description | Value |
|-|-|-|
| type | Enum that discriminates between action models. | 'continuous' (required) |
| duration | ISO8601 formatted string that represents a duration. | string (required) |
| parameters | List of key value pairs. | KeyValuePair[] (required) |
| selectorId | String that represents a selector. | string (required) |


### KeyValuePair

| Name | Description | Value |
|-|-|-|
| key | The name of the setting for the action. | string (required) |
| value | The value of the setting for the action. | string (required) |


### DelayAction

| Name | Description | Value |
|-|-|-|
| type | Enum that discriminates between action models. | 'delay' (required) |
| duration | ISO8601 formatted string that represents a duration. | string (required) |


### DiscreteAction

| Name | Description | Value |
|-|-|-|
| type | Enum that discriminates between action models. | 'discrete' (required) |
| parameters | List of key value pairs. | KeyValuePair[] (required) |
| selectorId | String that represents a selector. | string (required) |
## Microsoft.Chaos/targets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/targets@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### targets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the target resource. | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the target resource. | object (required) |
## Microsoft.Chaos/targets/capabilities@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/targets/capabilities@2022-10-01-preview"
  name = "string"
  parent_id = "string"
}

```

### targets/capabilities

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:targets |
