```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HDInsight/clusters/applications@2021-06-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationType = "string"
      computeProfile = {
        roles = [
          {
            autoscale = {
              capacity = {
                maxInstanceCount = int
                minInstanceCount = int
              }
              recurrence = {
                schedule = [
                  {
                    days = [
                      "string"
                    ]
                    timeAndCapacity = {
                      maxInstanceCount = int
                      minInstanceCount = int
                      time = "string"
                    }
                  }
                ]
                timeZone = "string"
              }
            }
            dataDisksGroups = [
              {
                disksPerNode = int
              }
            ]
            encryptDataDisks = bool
            hardwareProfile = {
              vmSize = "string"
            }
            minInstanceCount = int
            name = "string"
            osProfile = {
              linuxOperatingSystemProfile = {
                password = "string"
                sshProfile = {
                  publicKeys = [
                    {
                      certificateData = "string"
                    }
                  ]
                }
                username = "string"
              }
            }
            scriptActions = [
              {
                name = "string"
                parameters = "string"
                uri = "string"
              }
            ]
            targetInstanceCount = int
            virtualNetworkProfile = {
              id = "string"
              subnet = "string"
            }
            VMGroupName = "string"
          }
        ]
      }
      errors = [
        {
          code = "string"
          message = "string"
        }
      ]
      httpsEndpoints = [
        {
          accessModes = [
            "string"
          ]
          destinationPort = int
          disableGatewayAuth = bool
          privateIPAddress = "string"
          subDomainSuffix = "string"
        }
      ]
      installScriptActions = [
        {
          name = "string"
          parameters = "string"
          roles = [
            "string"
          ]
          uri = "string"
        }
      ]
      privateLinkConfigurations = [
        {
          name = "string"
          properties = {
            groupId = "string"
            ipConfigurations = [
              {
                name = "string"
                properties = {
                  primary = bool
                  privateIPAddress = "string"
                  privateIPAllocationMethod = "string"
                  subnet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      sshEndpoints = [
        {
          destinationPort = int
          location = "string"
          privateIPAddress = "string"
          publicPort = int
        }
      ]
      uninstallScriptActions = [
        {
          name = "string"
          parameters = "string"
          roles = [
            "string"
          ]
          uri = "string"
        }
      ]
    }
    etag = "string"
  })
}

```

### clusters/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | The tags for the application. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| etag | The ETag for the application | string |
| properties | The properties of the application. | ApplicationProperties |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| applicationType | The application type. | string |
| computeProfile | The list of roles in the cluster. | ComputeProfile |
| errors | The list of errors. | Errors[] |
| httpsEndpoints | The list of application HTTPS endpoints. | ApplicationGetHttpsEndpoint[] |
| installScriptActions | The list of install script actions. | RuntimeScriptAction[] |
| privateLinkConfigurations | The private link configurations. | PrivateLinkConfiguration[] |
| sshEndpoints | The list of application SSH endpoints. | ApplicationGetEndpoint[] |
| uninstallScriptActions | The list of uninstall script actions. | RuntimeScriptAction[] |


### ComputeProfile

| Name | Description | Value |
|-|-|-|
| roles | The list of roles in the cluster. | Role[] |


### Role

| Name | Description | Value |
|-|-|-|
| autoscale | The autoscale configurations. | Autoscale |
| dataDisksGroups | The data disks groups for the role. | DataDisksGroups[] |
| encryptDataDisks | Indicates whether encrypt the data disks. | bool |
| hardwareProfile | The hardware profile. | HardwareProfile |
| minInstanceCount | The minimum instance count of the cluster. | int |
| name | The name of the role. | string |
| osProfile | The operating system profile. | OsProfile |
| scriptActions | The list of script actions on the role. | ScriptAction[] |
| targetInstanceCount | The instance count of the cluster. | int |
| virtualNetworkProfile | The virtual network profile. | VirtualNetworkProfile |
| VMGroupName | The name of the virtual machine group. | string |


### Autoscale

| Name | Description | Value |
|-|-|-|
| capacity | Parameters for load-based autoscale | AutoscaleCapacity |
| recurrence | Parameters for schedule-based autoscale | AutoscaleRecurrence |


### AutoscaleCapacity

| Name | Description | Value |
|-|-|-|
| maxInstanceCount | The maximum instance count of the cluster | int |
| minInstanceCount | The minimum instance count of the cluster | int |


### AutoscaleRecurrence

| Name | Description | Value |
|-|-|-|
| schedule | Array of schedule-based autoscale rules | AutoscaleSchedule[] |
| timeZone | The time zone for the autoscale schedule times | string |


### AutoscaleSchedule

| Name | Description | Value |
|-|-|-|
| days | Days of the week for a schedule-based autoscale rule | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| timeAndCapacity | Time and capacity for a schedule-based autoscale rule | AutoscaleTimeAndCapacity |


### AutoscaleTimeAndCapacity

| Name | Description | Value |
|-|-|-|
| maxInstanceCount | The maximum instance count of the cluster | int |
| minInstanceCount | The minimum instance count of the cluster | int |
| time | 24-hour time in the form xx:xx | string |


### DataDisksGroups

| Name | Description | Value |
|-|-|-|
| disksPerNode | The number of disks per node. | int |


### HardwareProfile

| Name | Description | Value |
|-|-|-|
| vmSize | The size of the VM | string |


### OsProfile

| Name | Description | Value |
|-|-|-|
| linuxOperatingSystemProfile | The Linux OS profile. | LinuxOperatingSystemProfile |


### LinuxOperatingSystemProfile

| Name | Description | Value |
|-|-|-|
| password | The password. | string |
| sshProfile | The SSH profile. | SshProfile |
| username | The username. | string |


### SshProfile

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys. | SshPublicKey[] |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| certificateData | The certificate for SSH. | string |


### ScriptAction

| Name | Description | Value |
|-|-|-|
| name | The name of the script action. | string (required) |
| parameters | The parameters for the script provided. | string (required) |
| uri | The URI to the script. | string (required) |


### VirtualNetworkProfile

| Name | Description | Value |
|-|-|-|
| id | The ID of the virtual network. | string |
| subnet | The name of the subnet. | string |


### Errors

| Name | Description | Value |
|-|-|-|
| code | The error code. | string |
| message | The error message. | string |


### ApplicationGetHttpsEndpoint

| Name | Description | Value |
|-|-|-|
| accessModes | The list of access modes for the application. | string[] |
| destinationPort | The destination port to connect to. | int |
| disableGatewayAuth | The value indicates whether to disable GatewayAuth. | bool |
| privateIPAddress | The private ip address of the endpoint. | string |
| subDomainSuffix | The subdomain suffix of the application. | string |


### RuntimeScriptAction

| Name | Description | Value |
|-|-|-|
| name | The name of the script action. | string (required) |
| parameters | The parameters for the script | string |
| roles | The list of roles where script will be executed. | string[] (required) |
| uri | The URI to the script. | string (required) |


### PrivateLinkConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of private link configuration. | string (required) |
| properties | The private link configuration properties. | PrivateLinkConfigurationProperties(required) |


### PrivateLinkConfigurationProperties

| Name | Description | Value |
|-|-|-|
| groupId | The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'. | string (required) |
| ipConfigurations | The IP configurations for the private link service. | IPConfiguration[] (required) |


### IPConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of private link IP configuration. | string (required) |
| properties | The private link ip configuration properties. | IPConfigurationProperties |


### IPConfigurationProperties

| Name | Description | Value |
|-|-|-|
| primary | Indicates whether this IP configuration is primary for the corresponding NIC. | bool |
| privateIPAddress | The IP address. | string |
| privateIPAllocationMethod | The method that private IP address is allocated. | 'dynamic''static' |
| subnet | The subnet resource id. | ResourceId |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | The azure resource id. | string |


### ApplicationGetEndpoint

| Name | Description | Value |
|-|-|-|
| destinationPort | The destination port to connect to. | int |
| location | The location of the endpoint. | string |
| privateIPAddress | The private ip address of the endpoint. | string |
| publicPort | The public port to connect to. | int |


