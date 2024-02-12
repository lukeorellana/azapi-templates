```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalData = {
        ticketLink = "string"
        ticketNumber = int
        ticketStatus = "string"
      }
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      isGracePeriod = bool
      owner = "string"
      remediationDueDate = "string"
      remediationEta = {
        eta = "string"
        justification = "string"
      }
    }
  })
}

```

### assessments/governanceAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessments |
| properties | The properties of a governance assignment | GovernanceAssignmentProperties |


### GovernanceAssignmentProperties

| Name | Description | Value |
|-|-|-|
| additionalData | The additional data for the governance assignment - e.g. links to ticket (optional), see example | GovernanceAssignmentAdditionalData |
| governanceEmailNotification | The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners | GovernanceEmailNotification |
| isGracePeriod | Defines whether there is a grace period on the governance assignment | bool |
| owner | The Owner for the governance assignment - e.g. user@contoso.com - see example | string |
| remediationDueDate | The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period) | string (required) |
| remediationEta | The ETA (estimated time of arrival) for remediation (optional), see example | RemediationEta |


### GovernanceAssignmentAdditionalData

| Name | Description | Value |
|-|-|-|
| ticketLink | Ticket link associated with this governance assignment - for example:https://snow.com | string |
| ticketNumber | Ticket number associated with this governance assignment | intConstraints:Min value = 0 |
| ticketStatus | The ticket status associated with this governance assignment - for example: Active | string |


### GovernanceEmailNotification

| Name | Description | Value |
|-|-|-|
| disableManagerEmailNotification | Exclude manager from weekly email notification. | bool |
| disableOwnerEmailNotification | Exclude  owner from weekly email notification. | bool |


### RemediationEta

| Name | Description | Value |
|-|-|-|
| eta | ETA for remediation. | string (required) |
| justification | Justification for change of Eta. | string (required) |


