## Microsoft.AzureArcData/dataControllers@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      extensionId = "string"
      infrastructure = "string"
      lastUploadedDate = "string"
      logAnalyticsWorkspaceConfig = {
        primaryKey = "string"
        workspaceId = "string"
      }
      logsDashboardCredential = {
        password = "string"
        username = "string"
      }
      metricsDashboardCredential = {
        password = "string"
        username = "string"
      }
      onPremiseProperty = {
        id = "string"
        publicSigningKey = "string"
        signingCertificateThumbprint = "string"
      }
      uploadServicePrincipal = {
        authority = "string"
        clientId = "string"
        clientSecret = "string"
        tenantId = "string"
      }
      uploadWatermark = {
        logs = "string"
        metrics = "string"
        usages = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### dataControllers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | The data controller's properties | DataControllerProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### DataControllerProperties

| Name | Description | Value |
|-|-|-|
| basicLoginInformation | Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API. | BasicLoginInformation |
| clusterId | If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to. | string |
| extensionId | If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to. | string |
| infrastructure | The infrastructure the data controller is running on. | 'alibaba''aws''azure''gcp''onpremises''other' |
| k8sRaw | The raw kubernetes information | For Bicep, you can use theany()function. |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |
| logAnalyticsWorkspaceConfig | Log analytics workspace id and primary key | LogAnalyticsWorkspaceConfig |
| logsDashboardCredential | Login credential for logs dashboard on the Kubernetes cluster. | BasicLoginInformation |
| metricsDashboardCredential | Login credential for metrics dashboard on the Kubernetes cluster. | BasicLoginInformation |
| onPremiseProperty | Properties from the Kubernetes data controller | OnPremiseProperty |
| uploadServicePrincipal | Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity. | UploadServicePrincipal |
| uploadWatermark | Properties on upload watermark.  Mostly timestamp for each upload data type | UploadWatermark |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### LogAnalyticsWorkspaceConfig

| Name | Description | Value |
|-|-|-|
| primaryKey | Primary key of the workspace | string |
| workspaceId | Azure Log Analytics workspace ID | string |


### OnPremiseProperty

| Name | Description | Value |
|-|-|-|
| id | A globally unique ID identifying the associated Kubernetes cluster | string (required) |
| publicSigningKey | Certificate that contains the Kubernetes cluster public key used to verify signing | string (required) |
| signingCertificateThumbprint | Unique thumbprint returned to customer to verify the certificate being uploaded | string |


### UploadServicePrincipal

| Name | Description | Value |
|-|-|-|
| authority | Authority for the service principal. Example:https://login.microsoftonline.com/ | string |
| clientId | Client ID of the service principal for uploading data. | string |
| clientSecret | Secret of the service principal | string |
| tenantId | Tenant ID of the service principal. | string |


### UploadWatermark

| Name | Description | Value |
|-|-|-|
| logs | Last uploaded date for logs from kubernetes cluster. Defaults to current date time | string |
| metrics | Last uploaded date for metrics from kubernetes cluster. Defaults to current date time | string |
| usages | Last uploaded date for usages from kubernetes cluster. Defaults to current date time | string |
## Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainServiceAccountLoginInformation = {
        password = "string"
        username = "string"
      }
      spec = {
        activeDirectory = {
          domainControllers = {
            primaryDomainController = {
              hostname = "string"
            }
            secondaryDomainControllers = [
              {
                hostname = "string"
              }
            ]
          }
          netbiosDomainName = "string"
          ouDistinguishedName = "string"
          realm = "string"
          serviceAccountProvisioning = "string"
        }
        dns = {
          domainName = "string"
          nameserverIPAddresses = [
            "string"
          ]
          preferK8sDnsForPtrLookups = bool
          replicas = int
        }
      }
      status = {
        lastUpdateTime = "string"
        observedGeneration = int
        state = "string"
      }
    }
  })
}

```

### dataControllers/activeDirectoryConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataControllers |
| properties | null | ActiveDirectoryConnectorProperties(required) |


### ActiveDirectoryConnectorProperties

| Name | Description | Value |
|-|-|-|
| domainServiceAccountLoginInformation | Username and password for domain service account authentication. | BasicLoginInformation |
| spec | null | ActiveDirectoryConnectorSpec(required) |
| status | null | ActiveDirectoryConnectorStatus |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### ActiveDirectoryConnectorSpec

| Name | Description | Value |
|-|-|-|
| activeDirectory | null | ActiveDirectoryConnectorDomainDetails(required) |
| dns | null | ActiveDirectoryConnectorDNSDetails(required) |


### ActiveDirectoryConnectorDomainDetails

| Name | Description | Value |
|-|-|-|
| domainControllers | null | ActiveDirectoryDomainControllers |
| netbiosDomainName | NETBIOS name of the Active Directory domain. | string |
| ouDistinguishedName | The distinguished name of the Active Directory Organizational Unit. | string |
| realm | Name (uppercase) of the Active Directory domain that this AD connector will be associated with. | string (required) |
| serviceAccountProvisioning | The service account provisioning mode for this Active Directory connector. | 'automatic''manual' |


### ActiveDirectoryDomainControllers

| Name | Description | Value |
|-|-|-|
| primaryDomainController | Information about the Primary Domain Controller (PDC) in the AD domain. | ActiveDirectoryDomainController |
| secondaryDomainControllers | null | ActiveDirectoryDomainController[] |


### ActiveDirectoryDomainController

| Name | Description | Value |
|-|-|-|
| hostname | Fully-qualified domain name of a domain controller in the AD domain. | string (required) |


### ActiveDirectoryConnectorDNSDetails

| Name | Description | Value |
|-|-|-|
| domainName | DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers. | string |
| nameserverIPAddresses | List of Active Directory DNS server IP addresses. | string[] (required) |
| preferK8sDnsForPtrLookups | Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups. | bool |
| replicas | Replica count for DNS proxy service. Default value is 1. | int |


### ActiveDirectoryConnectorStatus

| Name | Description | Value |
|-|-|-|
| lastUpdateTime | The time that the custom resource was last updated. | string |
| observedGeneration | The version of the replicaSet associated with the AD connector custom resource. | int |
| state | The state of the AD connector custom resource. | string |
## Microsoft.AzureArcData/postgresInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/postgresInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      dataControllerId = "string"
      lastUploadedDate = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "string"
      size = "string"
      tier = "Hyperscale"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### postgresInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Resource sku. | PostgresInstanceSku |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | null | PostgresInstanceProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### PostgresInstanceProperties

| Name | Description | Value |
|-|-|-|
| admin | The instance admin | string |
| basicLoginInformation | Username and password for basic authentication. | BasicLoginInformation |
| dataControllerId | The data controller id | string |
| k8sRaw | The raw kubernetes information | For Bicep, you can use theany()function. |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### PostgresInstanceSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| dev | Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. | bool |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU.  It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier. | 'Hyperscale' |
## Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityGroupId = "string"
      availabilityGroupName = "string"
      basicFeatures = bool
      clusterTypeDesc = "string"
      collectionTimestamp = "string"
      dbFailover = bool
      dtcSupport = bool
      instanceName = "string"
      isContained = bool
      isDistributed = bool
      requiredSynchronizedSecondariesCommit = int
      version = int
    }
  })
}

```

### sqlAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | null | SqlAvailabilityGroupProperties |


### SqlAvailabilityGroupProperties

| Name | Description | Value |
|-|-|-|
| availabilityGroupId | Id GUID of the availability group. | string (required) |
| availabilityGroupName | The name of the availability group. | string (required) |
| basicFeatures | SQL Server basic availability group. | bool |
| clusterTypeDesc | SQL Server availability group cluster type description | string |
| collectionTimestamp | Timestamp for when the data was collected from the client machine. | string |
| dbFailover | SQL Server availability group failover for database health conditions. | bool |
| dtcSupport | SQL Server availability group DTC support enabled. | bool |
| instanceName | The name of the instance name which availability group primary is on. | string |
| isContained | SQL Server availability group contained system databases. | bool |
| isDistributed | SQL Server distributed availability group. | bool |
| requiredSynchronizedSecondariesCommit | Availability group required the number of synchronized secondary to commit. | int |
| version | SQL Server availability group current version. | int |
## Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupDatabaseId = "string"
      value = [
        {
          databaseStateDesc = "string"
          isCommitParticipant = bool
          isLocal = bool
          isPrimaryReplica = bool
          isSuspended = bool
          replicaName = "string"
          suspendReasonDesc = "string"
          synchronizationHealthDesc = "string"
          synchronizationStateDesc = "string"
        }
      ]
    }
  })
}

```

### sqlAvailabilityGroups/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlAvailabilityGroups |
| properties | Properties of Arc Sql Availability Group Multiple Database Replica | SqlAvailabilityGroupMultiDatabaseReplicaResourceProp...(required) |


### SqlAvailabilityGroupMultiDatabaseReplicaResourceProp...

| Name | Description | Value |
|-|-|-|
| groupDatabaseId | ID GUID of the database for availability group. | string |
| value | Array of  Arc Sql Availability Group Database Replicas. | SqlAvailabilityGroupDatabaseReplicaResourcePropertie...[] |


### SqlAvailabilityGroupDatabaseReplicaResourcePropertie...

| Name | Description | Value |
|-|-|-|
| databaseStateDesc | Description of the database state of the availability replica. | string |
| isCommitParticipant | Whether this replica is transaction committer. | bool |
| isLocal | Whether the availability database is local. | bool |
| isPrimaryReplica | Returns 1 if the replica is primary, or 0 if it is a secondary replica. | bool |
| isSuspended | Whether this data movement is suspended. | bool |
| replicaName | the database replica name. | string |
| suspendReasonDesc | Description of the database suspended state reason. | string |
| synchronizationHealthDesc | Description of the health of database. | string |
| synchronizationStateDesc | Description of the data-movement state. | string |
## Microsoft.AzureArcData/sqlAvailabilityGroups/sqlServerInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups/sqlServerInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configure = {
        availabilityModeDesc = "string"
        backupPriority = int
        createDate = "string"
        endpointUrl = "string"
        failoverModeDesc = "string"
        modifyDate = "string"
        primaryRoleAllowConnectionsDesc = "string"
        readOnlyRoutingUrl = "string"
        readWriteRoutingUrl = "string"
        secondaryRoleAllowConnectionsDesc = "string"
        seedingModeDesc = "string"
        sessionTimeout = int
      }
      replicaId = "string"
      replicaName = "string"
      state = {
        availabilityGroupReplicaRole = "string"
        connectedStateDesc = "string"
        lastConnectErrorDescription = "string"
        lastConnectErrorTimestamp = "string"
        operationalStateDesc = "string"
        recoveryHealthDesc = "string"
        synchronizationHealthDesc = "string"
      }
    }
  })
}

```

### sqlAvailabilityGroups/sqlServerInstances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlAvailabilityGroups |
| properties | Properties of Arc Sql Availability Group Replica | SqlAvailabilityGroupReplicaResourceProperties(required) |


### SqlAvailabilityGroupReplicaResourceProperties

| Name | Description | Value |
|-|-|-|
| configure | null | AvailabilityGroupConfigure |
| replicaId | ID GUID of the availability group. | string |
| replicaName | the replica name. | string |
| state | null | AvailabilityGroupState |


### AvailabilityGroupConfigure

| Name | Description | Value |
|-|-|-|
| availabilityModeDesc | Availability Synchronization mode description of availability group replica. | string |
| backupPriority | Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group. | int |
| createDate | Date that the replica was created. | string |
| endpointUrl | Mirroring endpoint URL of availability group replica | string |
| failoverModeDesc | failover mode description of the availability group replica. | string |
| modifyDate | Date that the replica was modified. | string |
| primaryRoleAllowConnectionsDesc | Allowed the connections for primary role of the availability group replica. | string |
| readOnlyRoutingUrl | Connectivity endpoint (URL) of the read only availability replica. | string |
| readWriteRoutingUrl | Connectivity endpoint (URL) of the read write availability replica. | string |
| secondaryRoleAllowConnectionsDesc | Allowed the connections for secondary role of availability group replica. | string |
| seedingModeDesc | Describes seeding mode. | string |
| sessionTimeout | The time-out period of availability group session replica, in seconds. | int |


### AvailabilityGroupState

| Name | Description | Value |
|-|-|-|
| availabilityGroupReplicaRole | Role description of the availability group replica. | string |
| connectedStateDesc | Connected state description of the availability group replica. | string |
| lastConnectErrorDescription | Last connect error description of the availability group replica. | string |
| lastConnectErrorTimestamp | Last connect error time stamp of the availability group replica. | string |
| operationalStateDesc | Operation state description of the availability group replica | string |
| recoveryHealthDesc | Recovery health description of the availability group replica. | string |
| synchronizationHealthDesc | Synchronization health description of the availability group replica. | string |
## Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeDirectoryInformation = {
        keytabInformation = {
          keytab = "string"
        }
      }
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      dataControllerId = "string"
      endTime = "string"
      extensionId = "string"
      k8sRaw = {
        spec = {
          replicas = int
          scheduling = {
            default = {
              resources = {
                limits = {}
                requests = {}
              }
            }
          }
        }
      }
      lastUploadedDate = "string"
      licenseType = "string"
      startTime = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "vCore"
      size = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### sqlManagedInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Resource sku. | SqlManagedInstanceSku |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | null | SqlManagedInstanceProperties(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### SqlManagedInstanceProperties

| Name | Description | Value |
|-|-|-|
| activeDirectoryInformation | Active Directory information related to this SQL Managed Instance. | ActiveDirectoryInformation |
| admin | The instance admin user | string |
| basicLoginInformation | Username and password for basic authentication. | BasicLoginInformation |
| clusterId | If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to. | string |
| dataControllerId | null | string |
| endTime | The instance end time | string |
| extensionId | If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to. | string |
| k8sRaw | The raw kubernetes information | SqlManagedInstanceK8SRaw |
| lastUploadedDate | Last uploaded date from Kubernetes cluster. Defaults to current date time | string |
| licenseType | The license type to apply for this managed instance. | 'BasePrice''DisasterRecovery''LicenseIncluded' |
| startTime | The instance start time | string |


### ActiveDirectoryInformation

| Name | Description | Value |
|-|-|-|
| keytabInformation | Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used. | KeytabInformation |


### KeytabInformation

| Name | Description | Value |
|-|-|-|
| keytab | A base64-encoded keytab. | string |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### SqlManagedInstanceK8SRaw

| Name | Description | Value |
|-|-|-|
| spec | The kubernetes spec information. | SqlManagedInstanceK8SSpec |


### SqlManagedInstanceK8SSpec

| Name | Description | Value |
|-|-|-|
| replicas | This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'. | int |
| scheduling | The kubernetes scheduling information. | K8SScheduling |


### K8SScheduling

| Name | Description | Value |
|-|-|-|
| default | The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service | K8SSchedulingOptions |


### K8SSchedulingOptions

| Name | Description | Value |
|-|-|-|
| resources | The kubernetes resource limits and requests used to restrict or reserve resource usage. | K8SResourceRequirements |


### K8SResourceRequirements

| Name | Description | Value |
|-|-|-|
| limits | Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'. | object |
| requests | Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'. | object |


### SqlManagedInstanceSku

| Name | Description | Value |
|-|-|-|
| capacity | The SKU capacity | int |
| dev | Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. | bool |
| family | The SKU family | string |
| name | The name of the SKU. | 'vCore' (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | The pricing tier for the instance. | 'BusinessCritical''GeneralPurpose' |
## Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerManagedInstanceId = "string"
      spec = {
        partnerMI = "string"
        partnerMirroringCert = "string"
        partnerMirroringURL = "string"
        partnerSyncMode = "string"
        role = "string"
        sharedName = "string"
        sourceMI = "string"
      }
    }
  })
}

```

### sqlManagedInstances/failoverGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlManagedInstances |
| properties | null | FailoverGroupProperties(required) |


### FailoverGroupProperties

| Name | Description | Value |
|-|-|-|
| partnerManagedInstanceId | The resource ID of the partner SQL managed instance. | string (required) |
| spec | The specifications of the failover group resource. | FailoverGroupSpec(required) |
| status | The status of the failover group custom resource. | For Bicep, you can use theany()function. |


### FailoverGroupSpec

| Name | Description | Value |
|-|-|-|
| partnerMI | The name of the partner SQL managed instance. | string |
| partnerMirroringCert | The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported. | string |
| partnerMirroringURL | The mirroring endpoint URL of the partner SQL managed instance. | string |
| partnerSyncMode | The partner sync mode of the SQL managed instance. | 'async''sync' |
| role | The role of the SQL managed instance in this failover group. | 'force-primary-allow-data-loss''force-secondary''primary''secondary' (required) |
| sharedName | The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name. | string |
| sourceMI | The name of the SQL managed instance with this failover group role. | string |
## Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      azureDefenderStatus = "string"
      azureDefenderStatusLastUpdated = "string"
      collation = "string"
      containerResourceId = "string"
      cores = "string"
      currentVersion = "string"
      edition = "string"
      hostType = "string"
      instanceName = "string"
      licenseType = "string"
      patchLevel = "string"
      productId = "string"
      status = "string"
      tcpDynamicPorts = "string"
      tcpStaticPorts = "string"
      vCore = "string"
      version = "string"
    }
  })
}

```

### sqlServerInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | null | SqlServerInstanceProperties |


### SqlServerInstanceProperties

| Name | Description | Value |
|-|-|-|
| azureDefenderStatus | Status of Azure Defender. | 'Protected''Unknown''Unprotected' |
| azureDefenderStatusLastUpdated | Timestamp of last Azure Defender status update. | string |
| collation | SQL Server collation. | string |
| containerResourceId | ARM Resource id of the container resource (Azure Arc for Servers). | string (required) |
| cores | The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance. | string |
| currentVersion | SQL Server current version. | string |
| edition | SQL Server edition. | 'Business Intelligence''Developer''Enterprise''Evaluation''Express''Standard''Web' |
| hostType | Type of host for Azure Arc SQL Server | 'AWS Kubernetes Service''AWS VMWare Virtual Machine''AWS Virtual Machine''Azure Kubernetes Service''Azure VMWare Virtual Machine''Azure Virtual Machine''Container''GCP Kubernetes Service''GCP VMWare Virtual Machine''GCP Virtual Machine''Other''Physical Server''Virtual Machine' |
| instanceName | SQL Server instance name. | string |
| licenseType | SQL Server license type. | 'Free''HADR''LicenseOnly''PAYG''Paid''ServerCAL''Undefined' |
| patchLevel | SQL Server update level. | string |
| productId | SQL Server product ID. | string |
| status | The cloud connectivity status. | 'Connected''Disconnected''Registered''Unknown' (required) |
| tcpDynamicPorts | Dynamic TCP ports used by SQL Server. | string |
| tcpStaticPorts | Static TCP ports used by SQL Server. | string |
| vCore | The number of logical processors used by the SQL Server instance. | string |
| version | SQL Server version. | 'SQL Server 2012''SQL Server 2014''SQL Server 2016''SQL Server 2017''SQL Server 2019''SQL Server 2022''Unknown' |
## Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupInformation = {
        lastFullBackup = "string"
        lastLogBackup = "string"
      }
      collationName = "string"
      compatibilityLevel = int
      databaseCreationDate = "string"
      databaseOptions = {
        isAutoCloseOn = bool
        isAutoCreateStatsOn = bool
        isAutoShrinkOn = bool
        isAutoUpdateStatsOn = bool
        isEncrypted = bool
        isMemoryOptimizationEnabled = bool
        isRemoteDataArchiveEnabled = bool
        isTrustworthyOn = bool
      }
      recoveryMode = "string"
      sizeMB = int
      spaceAvailableMB = int
      state = "string"
    }
  })
}

```

### sqlServerInstances/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlServerInstances |
| properties | Properties of Arc Sql Server database | SqlServerDatabaseResourceProperties(required) |


### SqlServerDatabaseResourceProperties

| Name | Description | Value |
|-|-|-|
| backupInformation |  | SqlServerDatabaseResourcePropertiesBackupInformation |
| collationName | Collation of the database. | string |
| compatibilityLevel | Compatibility level of the database | int |
| databaseCreationDate | Creation date of the database. | string |
| databaseOptions | List of features that are enabled for the database | SqlServerDatabaseResourcePropertiesDatabaseOptions |
| recoveryMode | Status of the database. | 'Bulk-logged''Full''Simple' |
| sizeMB | Size of the database. | int |
| spaceAvailableMB | Space left of the database. | int |
| state | State of the database. | 'Copying''Emergency''Offline''OfflineSecondary''Online''Recovering''RecoveryPending''Restoring''Suspect' |


### SqlServerDatabaseResourcePropertiesBackupInformation

| Name | Description | Value |
|-|-|-|
| lastFullBackup | Date time of last full backup. | string |
| lastLogBackup | Date time of last log backup. | string |


### SqlServerDatabaseResourcePropertiesDatabaseOptions

| Name | Description | Value |
|-|-|-|
| isAutoCloseOn |  | bool |
| isAutoCreateStatsOn |  | bool |
| isAutoShrinkOn |  | bool |
| isAutoUpdateStatsOn |  | bool |
| isEncrypted |  | bool |
| isMemoryOptimizationEnabled |  | bool |
| isRemoteDataArchiveEnabled |  | bool |
| isTrustworthyOn |  | bool |
## Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityGroupId = "string"
      availabilityGroupName = "string"
      configure = {
        availabilityModeDesc = "string"
        backupPriority = int
        createDate = "string"
        endpointUrl = "string"
        failoverModeDesc = "string"
        modifyDate = "string"
        primaryRoleAllowConnectionsDesc = "string"
        readOnlyRoutingUrl = "string"
        readWriteRoutingUrl = "string"
        secondaryRoleAllowConnectionsDesc = "string"
        seedingModeDesc = "string"
        sessionTimeout = int
      }
      state = {
        availabilityGroupReplicaRole = "string"
        connectedStateDesc = "string"
        lastConnectErrorDescription = "string"
        lastConnectErrorTimestamp = "string"
        operationalStateDesc = "string"
        recoveryHealthDesc = "string"
        synchronizationHealthDesc = "string"
      }
    }
  })
}

```

### sqlServerInstances/sqlAvailabilityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlServerInstances |
| properties | Properties of Arc Sql Server availability group | SqlServerAvailabilityGroupResourceProperties(required) |


### SqlServerAvailabilityGroupResourceProperties

| Name | Description | Value |
|-|-|-|
| availabilityGroupId | ID GUID of the availability group. | string (required) |
| availabilityGroupName | the availability group name. | string |
| configure | null | AvailabilityGroupConfigure |
| state | null | AvailabilityGroupState |


### AvailabilityGroupConfigure

| Name | Description | Value |
|-|-|-|
| availabilityModeDesc | Availability Synchronization mode description of availability group replica. | string |
| backupPriority | Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group. | int |
| createDate | Date that the replica was created. | string |
| endpointUrl | Mirroring endpoint URL of availability group replica | string |
| failoverModeDesc | failover mode description of the availability group replica. | string |
| modifyDate | Date that the replica was modified. | string |
| primaryRoleAllowConnectionsDesc | Allowed the connections for primary role of the availability group replica. | string |
| readOnlyRoutingUrl | Connectivity endpoint (URL) of the read only availability replica. | string |
| readWriteRoutingUrl | Connectivity endpoint (URL) of the read write availability replica. | string |
| secondaryRoleAllowConnectionsDesc | Allowed the connections for secondary role of availability group replica. | string |
| seedingModeDesc | Describes seeding mode. | string |
| sessionTimeout | The time-out period of availability group session replica, in seconds. | int |


### AvailabilityGroupState

| Name | Description | Value |
|-|-|-|
| availabilityGroupReplicaRole | Role description of the availability group replica. | string |
| connectedStateDesc | Connected state description of the availability group replica. | string |
| lastConnectErrorDescription | Last connect error description of the availability group replica. | string |
| lastConnectErrorTimestamp | Last connect error time stamp of the availability group replica. | string |
| operationalStateDesc | Operation state description of the availability group replica | string |
| recoveryHealthDesc | Recovery health description of the availability group replica. | string |
| synchronizationHealthDesc | Synchronization health description of the availability group replica. | string |
