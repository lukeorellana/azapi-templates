```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      type = "string"
      // For remaining properties, see IntegrationRuntime objects
    }
  })
}

```

### workspaces/integrationRuntimes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Integration runtime properties. | IntegrationRuntime(required) |


### IntegrationRuntime

| Name | Description | Value |
|-|-|-|
| description | Integration runtime description. | string |
| type | Set the object type | ManagedSelfHosted(required) |


### ManagedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'Managed' (required) |
| managedVirtualNetwork | Managed integration runtime managed virtual network. | ManagedIntegrationRuntimeManagedVirtualNetworkRefere... |
| typeProperties | Managed integration runtime properties. | ManagedIntegrationRuntimeTypeProperties(required) |


### ManagedIntegrationRuntimeManagedVirtualNetworkRefere...

| Name | Description | Value |
|-|-|-|
| id | The id of the managed virtual network. | string |
| referenceName | The reference name of the managed virtual network | string |
| type | The type of the managed virtual network. | string |


### ManagedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| computeProperties | The compute resource for managed integration runtime. | IntegrationRuntimeComputeProperties |
| customerVirtualNetwork | The name of virtual network to which Azure-SSIS integration runtime will join | IntegrationRuntimeCustomerVirtualNetwork |
| ssisProperties | SSIS properties for managed integration runtime. | IntegrationRuntimeSsisProperties |


### IntegrationRuntimeComputeProperties

| Name | Description | Value |
|-|-|-|
| dataFlowProperties | Data flow properties for managed integration runtime. | IntegrationRuntimeDataFlowProperties |
| location | The location for managed integration runtime. The supported regions could be found on /azure/data-factory/data-factory-data-movement-activities | string |
| maxParallelExecutionsPerNode | Maximum parallel executions count per node for managed integration runtime. | int |
| nodeSize | The node size requirement to managed integration runtime. | string |
| numberOfNodes | The required number of nodes for managed integration runtime. | int |
| vNetProperties | VNet properties for managed integration runtime. | IntegrationRuntimeVNetProperties |


### IntegrationRuntimeDataFlowProperties

| Name | Description | Value |
|-|-|-|
| computeType | Compute type of the cluster which will execute data flow job. | 'ComputeOptimized''General''MemoryOptimized' |
| coreCount | Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. | int |
| timeToLive | Time to live (in minutes) setting of the cluster which will execute data flow job. | int |


### IntegrationRuntimeVNetProperties

| Name | Description | Value |
|-|-|-|
| publicIPs | Resource IDs of the public IP addresses that this integration runtime will use. | string[] |
| subnet | The name of the subnet this integration runtime will join. | string |
| subnetId | The ID of subnet, to which this Azure-SSIS integration runtime will be joined. | string |
| vNetId | The ID of the VNet that this integration runtime will join. | string |


### IntegrationRuntimeCustomerVirtualNetwork

| Name | Description | Value |
|-|-|-|
| subnetId | The ID of subnet to which Azure-SSIS integration runtime will join. | string |


### IntegrationRuntimeSsisProperties

| Name | Description | Value |
|-|-|-|
| catalogInfo | Catalog information for managed dedicated integration runtime. | IntegrationRuntimeSsisCatalogInfo |
| customSetupScriptProperties | Custom setup script properties for a managed dedicated integration runtime. | IntegrationRuntimeCustomSetupScriptProperties |
| dataProxyProperties | Data proxy properties for a managed dedicated integration runtime. | IntegrationRuntimeDataProxyProperties |
| edition | The edition for the SSIS Integration Runtime | 'Enterprise''Standard' |
| expressCustomSetupProperties | Custom setup without script properties for a SSIS integration runtime. | CustomSetupBase[] |
| licenseType | License type for bringing your own license scenario. | 'BasePrice''LicenseIncluded' |


### IntegrationRuntimeSsisCatalogInfo

| Name | Description | Value |
|-|-|-|
| catalogAdminPassword | The password of the administrator user account of the catalog database. | SecureString |
| catalogAdminUserName | The administrator user name of catalog database. | string |
| catalogPricingTier | The pricing tier for the catalog database. The valid values could be found inhttps://azure.microsoft.com/pricing/details/sql-database/ | 'Basic''Premium''PremiumRS''Standard' |
| catalogServerEndpoint | The catalog database server URL. | string |


### SecureString

| Name | Description | Value |
|-|-|-|
| type | Type of the secret. | string (required) |
| value | Value of secure string. | string (required) |


### IntegrationRuntimeCustomSetupScriptProperties

| Name | Description | Value |
|-|-|-|
| blobContainerUri | The URI of the Azure blob container that contains the custom setup script. | string |
| sasToken | The SAS token of the Azure blob container. | SecureString |


### IntegrationRuntimeDataProxyProperties

| Name | Description | Value |
|-|-|-|
| connectVia | The self-hosted integration runtime reference. | EntityReference |
| path | The path to contain the staged data in the Blob storage. | string |
| stagingLinkedService | The staging linked service reference. | EntityReference |


### EntityReference

| Name | Description | Value |
|-|-|-|
| referenceName | The name of this referenced entity. | string |
| type | The type of this referenced entity. | 'IntegrationRuntimeReference''LinkedServiceReference' |


### CustomSetupBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | CmdkeySetupComponentSetupEnvironmentVariableSetup(required) |


### CmdkeySetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'CmdkeySetup' (required) |
| typeProperties | Cmdkey command custom setup type properties. | CmdkeySetupTypeProperties(required) |


### CmdkeySetupTypeProperties

| Name | Description | Value |
|-|-|-|
| password | The password of data source access. | SecretBase(required) |
| targetName | The server name of data source access. | For Bicep, you can use theany()function.(required) |
| userName | The user name of data source access. | For Bicep, you can use theany()function.(required) |


### SecretBase

| Name | Description | Value |
|-|-|-|
| type | Set the object type | SecureString(required) |


### ComponentSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'ComponentSetup' (required) |
| typeProperties | Install 3rd party component type properties. | LicensedComponentSetupTypeProperties(required) |


### LicensedComponentSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| componentName | The name of the 3rd party component. | string (required) |
| licenseKey | The license key to activate the component. | SecretBase |


### EnvironmentVariableSetup

| Name | Description | Value |
|-|-|-|
| type | The type of custom setup. | 'EnvironmentVariableSetup' (required) |
| typeProperties | Add environment variable type properties. | EnvironmentVariableSetupTypeProperties(required) |


### EnvironmentVariableSetupTypeProperties

| Name | Description | Value |
|-|-|-|
| variableName | The name of the environment variable. | string (required) |
| variableValue | The value of the environment variable. | string (required) |


### SelfHostedIntegrationRuntime

| Name | Description | Value |
|-|-|-|
| type | Type of integration runtime. | 'SelfHosted' (required) |
| typeProperties | When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime. | SelfHostedIntegrationRuntimeTypeProperties |


### SelfHostedIntegrationRuntimeTypeProperties

| Name | Description | Value |
|-|-|-|
| linkedInfo | Linked integration runtime type from data factory | LinkedIntegrationRuntimeType |


### LinkedIntegrationRuntimeType

| Name | Description | Value |
|-|-|-|
| authorizationType | Set the object type | KeyRBAC(required) |


### LinkedIntegrationRuntimeKeyAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'Key' (required) |
| key | The key used for authorization. | SecureString(required) |


### LinkedIntegrationRuntimeRbacAuthorization

| Name | Description | Value |
|-|-|-|
| authorizationType | The authorization type for integration runtime sharing. | 'RBAC' (required) |
| resourceId | The resource identifier of the integration runtime to be shared. | string (required) |


