```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      agentUpdate = {
        maintenanceWindows = [
          {
            dayOfWeek = "string"
            hour = int
          }
        ]
        maintenanceWindowTimeZone = "string"
        type = "string"
        useSessionHostLocalTime = bool
      }
      customRdpProperty = "string"
      description = "string"
      friendlyName = "string"
      hostPoolType = "string"
      loadBalancerType = "string"
      managementType = "string"
      maxSessionLimit = int
      personalDesktopAssignmentType = "string"
      preferredAppGroupType = "string"
      publicNetworkAccess = "string"
      registrationInfo = {
        expirationTime = "string"
        registrationTokenOperation = "string"
        token = "string"
      }
      ring = int
      ssoadfsAuthority = "string"
      ssoClientId = "string"
      ssoClientSecretKeyVaultPath = "string"
      ssoSecretType = "string"
      startVMOnConnect = bool
      validationEnvironment = bool
      vmTemplate = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### hostPools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with letter or number. End with letter, number, or underscore. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for HostPool | HostPoolProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### HostPoolProperties

| Name | Description | Value |
|-|-|-|
| agentUpdate | The session host configuration for updating agent, monitoring agent, and stack component. | AgentUpdateProperties |
| customRdpProperty | Custom rdp property of HostPool. | string |
| description | Description of HostPool. | string |
| friendlyName | Friendly name of HostPool. | string |
| hostPoolType | HostPool type for desktop. | 'BYODesktop''Personal''Pooled' (required) |
| loadBalancerType | The type of the load balancer. | 'BreadthFirst''DepthFirst''Persistent' (required) |
| managementType | The type of management for this hostpool, Automated or Standard. The default value is Automated. | 'Automated''Standard' |
| maxSessionLimit | The max session limit of HostPool. | int |
| personalDesktopAssignmentType | PersonalDesktopAssignment type for HostPool. | 'Automatic''Direct' |
| preferredAppGroupType | The type of preferred application group type, default to Desktop Application Group | 'Desktop''None''RailApplications' (required) |
| publicNetworkAccess | Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints | 'Disabled''Enabled''EnabledForClientsOnly''EnabledForSessionHostsOnly' |
| registrationInfo | The registration info of HostPool. | RegistrationInfo |
| ring | The ring number of HostPool. | int |
| ssoadfsAuthority | URL to customer ADFS server for signing WVD SSO certificates. | string |
| ssoClientId | ClientId for the registered Relying Party used to issue WVD SSO certificates. | string |
| ssoClientSecretKeyVaultPath | Path to Azure KeyVault storing the secret used for communication to ADFS. | string |
| ssoSecretType | The type of single sign on Secret Type. | 'Certificate''CertificateInKeyVault''SharedKey''SharedKeyInKeyVault' |
| startVMOnConnect | The flag to turn on/off StartVMOnConnect feature. | bool |
| validationEnvironment | Is validation environment. | bool |
| vmTemplate | VM template for sessionhosts configuration within hostpool. | string |


### AgentUpdateProperties

| Name | Description | Value |
|-|-|-|
| maintenanceWindows | List of maintenance windows. Maintenance windows are 2 hours long. | MaintenanceWindowProperties[] |
| maintenanceWindowTimeZone | Time zone for maintenance as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyidMust be set if useLocalTime is true. | string |
| type | The type of maintenance for session host components. | 'Default''Scheduled' |
| useSessionHostLocalTime | Whether to use localTime of the virtual machine. | bool |


### MaintenanceWindowProperties

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| hour | The update start hour of the day. (0 - 23) | int |


### RegistrationInfo

| Name | Description | Value |
|-|-|-|
| expirationTime | Expiration time of registration token. | string |
| registrationTokenOperation | The type of resetting the token. | 'Delete''None''Update' |
| token | The registration token base64 encoded string. | string |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


