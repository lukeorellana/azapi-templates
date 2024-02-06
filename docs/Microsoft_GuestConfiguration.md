## Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      guestConfiguration = {
        assignmentType = "string"
        configurationParameter = [
          {
            name = "string"
            value = "string"
          }
        ]
        configurationProtectedParameter = [
          {
            name = "string"
            value = "string"
          }
        ]
        contentHash = "string"
        contentUri = "string"
        kind = "DSC"
        name = "string"
        version = "string"
      }
      latestAssignmentReport = {
        assignment = {
          configuration = {}
        }
        resources = [
          {
            reasons = [
              {
              }
            ]
          }
        ]
        vm = {}
      }
      vmssVMList = [
        {
        }
      ]
    }
  })
}

```

### guestConfigurationAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Region where the VM is located. | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of the Guest configuration assignment. | GuestConfigurationAssignmentProperties |


### GuestConfigurationAssignmentProperties

| Name | Description | Value |
|-|-|-|
| context | The source which initiated the guest configuration assignment. Ex: Azure Policy | string |
| guestConfiguration | The guest configuration to assign. | GuestConfigurationNavigation |
| latestAssignmentReport | Last reported guest configuration assignment report. | AssignmentReport |
| vmssVMList | The list of VM Compliance data for VMSS | VmssvmInfo[] |


### GuestConfigurationNavigation

| Name | Description | Value |
|-|-|-|
| assignmentType | Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor. | 'ApplyAndAutoCorrect''ApplyAndMonitor''Audit''DeployAndAutoCorrect' |
| configurationParameter | The configuration parameters for the guest configuration. | ConfigurationParameter[] |
| configurationProtectedParameter | The protected configuration parameters for the guest configuration. | ConfigurationParameter[] |
| contentHash | Combined hash of the guest configuration package and configuration parameters. | string |
| contentUri | Uri of the storage where guest configuration package is uploaded. | string |
| kind | Kind of the guest configuration. For example:DSC | 'DSC' |
| name | Name of the guest configuration. | string |
| version | Version of the guest configuration. | string |


### ConfigurationParameter

| Name | Description | Value |
|-|-|-|
| name | Name of the configuration parameter. | string |
| value | Value of the configuration parameter. | string |


### AssignmentReport

| Name | Description | Value |
|-|-|-|
| assignment | Configuration details of the guest configuration assignment. | AssignmentInfo |
| resources | The list of resources for which guest configuration assignment compliance is checked. | AssignmentReportResource[] |
| vm | Information about the VM. | VMInfo |


### AssignmentInfo

| Name | Description | Value |
|-|-|-|
| configuration | Information about the configuration. | ConfigurationInfo |


### AssignmentReportResource

| Name | Description | Value |
|-|-|-|
| reasons | Compliance reason and reason code for a resource. | AssignmentReportResourceComplianceReason[] |
