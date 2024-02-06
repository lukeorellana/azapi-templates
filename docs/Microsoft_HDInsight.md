## Microsoft.HDInsight/clusters@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HDInsight/clusters@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      clusterDefinition = {
        blueprint = "string"
        componentVersion = {}
        kind = "string"
      }
      clusterVersion = "string"
      computeIsolationProperties = {
        enableComputeIsolation = bool
        hostSku = "string"
      }
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
      diskEncryptionProperties = {
        encryptionAlgorithm = "string"
        encryptionAtHost = bool
        keyName = "string"
        keyVersion = "string"
        msiResourceId = "string"
        vaultUri = "string"
      }
      encryptionInTransitProperties = {
        isEncryptionInTransitEnabled = bool
      }
      kafkaRestProperties = {
        clientGroupInfo = {
          groupId = "string"
          groupName = "string"
        }
        configurationOverride = {}
      }
      minSupportedTlsVersion = "string"
      networkProperties = {
        privateLink = "string"
        resourceProviderConnection = "string"
      }
      osType = "string"
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
      securityProfile = {
        aaddsResourceId = "string"
        clusterUsersGroupDNs = [
          "string"
        ]
        directoryType = "ActiveDirectory"
        domain = "string"
        domainUsername = "string"
        domainUserPassword = "string"
        ldapsUrls = [
          "string"
        ]
        msiResourceId = "string"
        organizationalUnitDN = "string"
      }
      storageProfile = {
        storageaccounts = [
          {
            container = "string"
            fileshare = "string"
            fileSystem = "string"
            isDefault = bool
            key = "string"
            msiResourceId = "string"
            name = "string"
            resourceId = "string"
            saskey = "string"
          }
        ]
      }
      tier = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-59Valid characters:Alphanumerics and hyphensStart and end with letter or number.Resource name must be unique across Azure. |
| location | The location of the cluster. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the cluster, if configured. | ClusterIdentity |
| properties | The cluster create parameters. | ClusterCreatePropertiesOrClusterGetProperties |
| zones | The availability zones. | string[] |


### ClusterIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ClusterCreatePropertiesOrClusterGetProperties

| Name | Description | Value |
|-|-|-|
| clusterDefinition | The cluster definition. | ClusterDefinition |
| clusterVersion | The version of the cluster. | string |
| computeIsolationProperties | The compute isolation properties. | ComputeIsolationProperties |
| computeProfile | The compute profile. | ComputeProfile |
| diskEncryptionProperties | The disk encryption properties. | DiskEncryptionProperties |
| encryptionInTransitProperties | The encryption-in-transit properties. | EncryptionInTransitProperties |
| kafkaRestProperties | The cluster kafka rest proxy configuration. | KafkaRestProperties |
| minSupportedTlsVersion | The minimal supported tls version. | string |
| networkProperties | The network properties. | NetworkProperties |
| osType | The type of operating system. | 'Linux''Windows' |
| privateLinkConfigurations | The private link configurations. | PrivateLinkConfiguration[] |
| securityProfile | The security profile. | SecurityProfile |
| storageProfile | The storage profile. | StorageProfile |
| tier | The cluster tier. | 'Premium''Standard' |


### ClusterDefinition

| Name | Description | Value |
|-|-|-|
| blueprint | The link to the blueprint. | string |
| componentVersion | The versions of different services in the cluster. | object |
| configurations | The cluster configurations. | For Bicep, you can use theany()function. |
| kind | The type of cluster. | string |


### ComputeIsolationProperties

| Name | Description | Value |
|-|-|-|
| enableComputeIsolation | The flag indicates whether enable compute isolation or not. | bool |
| hostSku | The host sku. | string |


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


### DiskEncryptionProperties

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Algorithm identifier for encryption, default RSA-OAEP. | 'RSA-OAEP''RSA-OAEP-256''RSA1_5' |
| encryptionAtHost | Indicates whether or not resource disk encryption is enabled. | bool |
| keyName | Key name that is used for enabling disk encryption. | string |
| keyVersion | Specific key version that is used for enabling disk encryption. | string |
| msiResourceId | Resource ID of Managed Identity that is used to access the key vault. | string |
| vaultUri | Base key vault URI where the customers key is located eg.https://myvault.vault.azure.net | string |


### EncryptionInTransitProperties

| Name | Description | Value |
|-|-|-|
| isEncryptionInTransitEnabled | Indicates whether or not inter cluster node communication is encrypted in transit. | bool |


### KafkaRestProperties

| Name | Description | Value |
|-|-|-|
| clientGroupInfo | The information of AAD security group. | ClientGroupInfo |
| configurationOverride | The configurations that need to be overriden. | object |


### ClientGroupInfo

| Name | Description | Value |
|-|-|-|
| groupId | The AAD security group id. | string |
| groupName | The AAD security group name. | string |


### NetworkProperties

| Name | Description | Value |
|-|-|-|
| privateLink | Indicates whether or not private link is enabled. | 'Disabled''Enabled' |
| resourceProviderConnection | The direction for the resource provider connection. | 'Inbound''Outbound' |


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


### SecurityProfile

| Name | Description | Value |
|-|-|-|
| aaddsResourceId | The resource ID of the user's Azure Active Directory Domain Service. | string |
| clusterUsersGroupDNs | Optional. The Distinguished Names for cluster user groups | string[] |
| directoryType | The directory type. | 'ActiveDirectory' |
| domain | The organization's active directory domain. | string |
| domainUsername | The domain user account that will have admin privileges on the cluster. | string |
| domainUserPassword | The domain admin password. | string |
| ldapsUrls | The LDAPS protocol URLs to communicate with the Active Directory. | string[] |
| msiResourceId | User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS. | string |
| organizationalUnitDN | The organizational unit within the Active Directory to place the cluster and service accounts. | string |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| storageaccounts | The list of storage accounts in the cluster. | StorageAccount[] |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| container | The container in the storage account, only to be specified for WASB storage accounts. | string |
| fileshare | The file share name. | string |
| fileSystem | The filesystem, only to be specified for Azure Data Lake Storage Gen 2. | string |
| isDefault | Whether or not the storage account is the default storage account. | bool |
| key | The storage account access key. | string |
| msiResourceId | The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2. | string |
| name | The name of the storage account. | string |
| resourceId | The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2. | string |
| saskey | The shared access signature key. | string |
## Microsoft.HDInsight/clusters/applications@2021-06-01

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
## Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01"
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
  })
}

```

### clusters/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The private endpoint connection properties. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The private link service connection state. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Whether there is further actions. | string |
| description | The optional description of the status. | string |
| status | The concrete private link service connection. | 'Approved''Pending''Rejected''Removed' (required) |
