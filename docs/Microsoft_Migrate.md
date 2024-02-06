## Microsoft.Migrate/assessmentProjects@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects@2019-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assessmentSolutionId = "string"
      customerStorageAccountArmId = "string"
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      projectStatus = "string"
      publicNetworkAccess = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure location in which project is created. | string |
| tags | Tags provided by Azure Tagging service. | For Bicep, you can use theany()function. |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the project. | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| assessmentSolutionId | Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects. | string |
| customerStorageAccountArmId | The ARM id of the storage account used for interactions when public access is disabled. | string |
| customerWorkspaceId | The ARM id of service map workspace created by customer. | string |
| customerWorkspaceLocation | Location of service map workspace created by customer. | string |
| projectStatus | Assessment project status. | 'Active''Inactive' |
| publicNetworkAccess | This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method. | string |
## Microsoft.Migrate/assessmentProjects/groups@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/groups@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupType = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the group. | GroupProperties(required) |


### GroupProperties

| Name | Description | Value |
|-|-|-|
| groupType | The type of group. | string |
## Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureDiskType = "string"
      azureHybridUseBenefit = "string"
      azureLocation = "string"
      azureOfferCode = "string"
      azurePricingTier = "string"
      azureStorageRedundancy = "string"
      azureVmFamilies = [
        "string"
      ]
      currency = "string"
      discountPercentage = int
      percentile = "string"
      reservedInstance = "string"
      scalingFactor = int
      sizingCriterion = "string"
      stage = "string"
      timeRange = "string"
      vmUptime = {
        daysPerMonth = int
        hoursPerDay = int
      }
    }
    eTag = "string"
  })
}

```

### assessmentProjects/groups/assessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:groups |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the assessment. | AssessmentProperties(required) |


### AssessmentProperties

| Name | Description | Value |
|-|-|-|
| azureDiskType | Storage type selected for this disk. | 'Premium''Standard''StandardOrPremium''StandardSSD''Unknown' (required) |
| azureHybridUseBenefit | AHUB discount on windows virtual machines. | 'No''Unknown''Yes' (required) |
| azureLocation | Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API. | 'AustraliaEast''AustraliaSoutheast''BrazilSouth''CanadaCentral''CanadaEast''CentralIndia''CentralUs''ChinaEast''ChinaNorth''EastAsia''EastUs''EastUs2''GermanyCentral''GermanyNortheast''JapanEast''JapanWest''KoreaCentral''KoreaSouth''NorthCentralUs''NorthEurope''SouthCentralUs''SouthIndia''SoutheastAsia''USDoDCentral''USDoDEast''USGovArizona''USGovIowa''USGovTexas''USGovVirginia''UkSouth''UkWest''Unknown''WestCentralUs''WestEurope''WestIndia''WestUs''WestUs2' (required) |
| azureOfferCode | Offer code according to which cost estimation is done. | 'EA''MSAZR0003P''MSAZR0022P''MSAZR0023P''MSAZR0025P''MSAZR0029P''MSAZR0036P''MSAZR0044P''MSAZR0059P''MSAZR0060P''MSAZR0062P''MSAZR0063P''MSAZR0064P''MSAZR0111P''MSAZR0120P''MSAZR0121P''MSAZR0122P''MSAZR0123P''MSAZR0124P''MSAZR0125P''MSAZR0126P''MSAZR0127P''MSAZR0128P''MSAZR0129P''MSAZR0130P''MSAZR0144P''MSAZR0148P''MSAZR0149P''MSAZRDE0003P''MSAZRDE0044P''MSAZRUSGOV0003P''MSMCAZR0044P''MSMCAZR0059P''MSMCAZR0060P''MSMCAZR0063P''MSMCAZR0120P''MSMCAZR0121P''MSMCAZR0125P''MSMCAZR0128P''Unknown' (required) |
| azurePricingTier | Pricing tier for Size evaluation. | 'Basic''Standard' (required) |
| azureStorageRedundancy | Storage Redundancy type offered by Azure. | 'GeoRedundant''LocallyRedundant''ReadAccessGeoRedundant''Unknown''ZoneRedundant' (required) |
| azureVmFamilies | List of azure VM families. | String array containing any of:'Av2_series''Basic_A0_A4''DC_Series''DS_series''DSv2_series''D_series''Dsv3_series''Dv2_series''Dv3_series''Esv3_series''Ev3_series''F_series''Fs_series''Fsv2_series''GS_series''G_series''H_series''Ls_series''M_series''Standard_A0_A7''Standard_A8_A11''Unknown' (required) |
| currency | Currency to report prices in. | 'ARS''AUD''BRL''CAD''CHF''CNY''DKK''EUR''GBP''HKD''IDR''INR''JPY''KRW''MXN''MYR''NOK''NZD''RUB''SAR''SEK''TRY''TWD''USD''Unknown''ZAR' (required) |
| discountPercentage | Custom discount percentage to be applied on final costs. Can be in the range [0, 100]. | int (required) |
| percentile | Percentile of performance data used to recommend Azure size. | 'Percentile50''Percentile90''Percentile95''Percentile99' (required) |
| reservedInstance | Azure reserved instance. | 'None''RI1Year''RI3Year' (required) |
| scalingFactor | Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3. | int (required) |
| sizingCriterion | Assessment sizing criterion. | 'AsOnPremises''PerformanceBased' (required) |
| stage | User configurable setting that describes the status of the assessment. | 'Approved''InProgress''UnderReview' (required) |
| timeRange | Time range of performance data used to recommend a size. | 'Custom''Day''Month''Week' (required) |
| vmUptime | Specify the duration for which the VMs are up in the on-premises environment. | VmUptime(required) |


### VmUptime

| Name | Description | Value |
|-|-|-|
| daysPerMonth | Number of days in a month for VM uptime. | int |
| hoursPerDay | Number of hours per day for VM uptime. | int |
## Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/hypervcollectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag |  | string |
| properties |  | CollectorProperties |


### CollectorProperties

| Name | Description | Value |
|-|-|-|
| agentProperties |  | CollectorAgentProperties |
| discoverySiteId | The ARM id of the discovery service site. | string |


### CollectorAgentProperties

| Name | Description | Value |
|-|-|-|
| spnDetails |  | CollectorBodyAgentSpnProperties |


### CollectorBodyAgentSpnProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| audience | Intended audience for the service principal. | string |
| authority | AAD Authority URL which was used to request the token for the service principal. | string |
| objectId | Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| tenantId | Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
## Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/importcollectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag |  | string |
| properties |  | ImportCollectorProperties |


### ImportCollectorProperties

| Name | Description | Value |
|-|-|-|
| discoverySiteId |  | string |
## Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

### assessmentprojects/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentprojects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the private endpoint endpoint connection. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | State of the private endpoint connection. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required on the private endpoint connection. | string |
| description | Description of the private endpoint connection. | string |
| status | Connection status of the private endpoint connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/servercollectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag |  | string |
| properties |  | CollectorProperties |


### CollectorProperties

| Name | Description | Value |
|-|-|-|
| agentProperties |  | CollectorAgentProperties |
| discoverySiteId | The ARM id of the discovery service site. | string |


### CollectorAgentProperties

| Name | Description | Value |
|-|-|-|
| spnDetails |  | CollectorBodyAgentSpnProperties |


### CollectorBodyAgentSpnProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| audience | Intended audience for the service principal. | string |
| authority | AAD Authority URL which was used to request the token for the service principal. | string |
| objectId | Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| tenantId | Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
## Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects/vmwarecollectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentProjects |
| eTag |  | string |
| properties |  | CollectorProperties |


### CollectorProperties

| Name | Description | Value |
|-|-|-|
| agentProperties |  | CollectorAgentProperties |
| discoverySiteId | The ARM id of the discovery service site. | string |


### CollectorAgentProperties

| Name | Description | Value |
|-|-|-|
| spnDetails |  | CollectorBodyAgentSpnProperties |


### CollectorBodyAgentSpnProperties

| Name | Description | Value |
|-|-|-|
| applicationId | Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| audience | Intended audience for the service principal. | string |
| authority | AAD Authority URL which was used to request the token for the service principal. | string |
| objectId | Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
| tenantId | Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string |
## Microsoft.Migrate/migrateProjects@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
      serviceEndpoint = "string"
      utilityStorageAccountId = "string"
    }
    eTag = "string"
  })
}

```

### migrateProjects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure location in which project is created. | string |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of a migrate project. | MigrateProjectProperties |


### MigrateProjectProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Gets or sets the state of public network access. | 'Disabled''Enabled''NotSpecified' |
| serviceEndpoint | Service endpoint. | string |
| utilityStorageAccountId | Utility storage account id. | string |
## Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

### migrateProjects/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:migrateProjects |
| eTag | Gets the tag for optimistic concurrency control. | string |
| properties | Properties of Connection state request. | ConnectionStateRequestBodyPropertiesOrPrivateEndpoin... |


### ConnectionStateRequestBodyPropertiesOrPrivateEndpoin...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | Private endpoint connection state. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Action required. | string |
| description | Description of the object. | string |
| status | Private link connection state. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.Migrate/projects@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects@2018-02-02"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

### projects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure location in which project is created. | string |
| tags | Tags provided by Azure Tagging service. | For Bicep, you can use theany()function. |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the project. | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| customerWorkspaceId | ARM ID of the Service Map workspace created by user. | string |
| customerWorkspaceLocation | Location of the Service Map workspace created by user. | string |
| provisioningState | Provisioning state of the project. | 'Accepted''Creating''Deleting''Failed''Moving''Succeeded' |
## Microsoft.Migrate/projects/groups@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      machines = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

### projects/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the group. | GroupProperties(required) |


### GroupProperties

| Name | Description | Value |
|-|-|-|
| machines | List of machine names that are part of this group. | string[] (required) |
## Microsoft.Migrate/projects/groups/assessments@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups/assessments@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureHybridUseBenefit = "string"
      azureLocation = "string"
      azureOfferCode = "string"
      azurePricingTier = "string"
      azureStorageRedundancy = "string"
      currency = "string"
      discountPercentage = int
      percentile = "string"
      scalingFactor = int
      sizingCriterion = "string"
      stage = "string"
      timeRange = "string"
    }
    eTag = "string"
  })
}

```

### projects/groups/assessments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:groups |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the assessment. | AssessmentProperties(required) |


### AssessmentProperties

| Name | Description | Value |
|-|-|-|
| azureHybridUseBenefit | AHUB discount on windows virtual machines. | 'No''Unknown''Yes' (required) |
| azureLocation | Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API. | 'AustraliaEast''AustraliaSoutheast''BrazilSouth''CanadaCentral''CanadaEast''CentralIndia''CentralUs''ChinaEast''ChinaNorth''EastAsia''EastUs''EastUs2''GermanyCentral''GermanyNortheast''JapanEast''JapanWest''KoreaCentral''KoreaSouth''NorthCentralUs''NorthEurope''SouthCentralUs''SouthIndia''SoutheastAsia''UkSouth''UkWest''Unknown''WestCentralUs''WestEurope''WestIndia''WestUs''WestUs2' (required) |
| azureOfferCode | Offer code according to which cost estimation is done. | 'MSAZR0003P''MSAZR0022P''MSAZR0023P''MSAZR0025P''MSAZR0029P''MSAZR0036P''MSAZR0044P''MSAZR0059P''MSAZR0060P''MSAZR0062P''MSAZR0063P''MSAZR0064P''MSAZR0111P''MSAZR0120P''MSAZR0121P''MSAZR0122P''MSAZR0123P''MSAZR0124P''MSAZR0125P''MSAZR0126P''MSAZR0127P''MSAZR0128P''MSAZR0129P''MSAZR0130P''MSAZR0144P''MSAZR0148P''MSAZR0149P''MSAZRDE0003P''MSAZRDE0044P''MSMCAZR0044P''MSMCAZR0059P''MSMCAZR0060P''MSMCAZR0063P''MSMCAZR0120P''MSMCAZR0121P''MSMCAZR0125P''MSMCAZR0128P''Unknown' (required) |
| azurePricingTier | Pricing tier for Size evaluation. | 'Basic''Standard' (required) |
| azureStorageRedundancy | Storage Redundancy type offered by Azure. | 'GeoRedundant''LocallyRedundant''ReadAccessGeoRedundant''Unknown''ZoneRedundant' (required) |
| currency | Currency to report prices in. | 'ARS''AUD''BRL''CAD''CHF''CNY''DKK''EUR''GBP''HKD''IDR''INR''JPY''KRW''MXN''MYR''NOK''NZD''RUB''SAR''SEK''TRY''TWD''USD''Unknown''ZAR' (required) |
| discountPercentage | Custom discount percentage to be applied on final costs. Can be in the range [0, 100]. | int (required) |
| percentile | Percentile of performance data used to recommend Azure size. | 'Percentile50''Percentile90''Percentile95''Percentile99' (required) |
| scalingFactor | Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3. | int (required) |
| sizingCriterion | Assessment sizing criterion. | 'AsOnPremises''PerformanceBased' (required) |
| stage | User configurable setting that describes the status of the assessment. | 'Approved''InProgress''UnderReview' (required) |
| timeRange | Time range of performance data used to recommend a size. | 'Day''Month''Week' (required) |
