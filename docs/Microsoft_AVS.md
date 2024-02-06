## Microsoft.AVS/privateClouds@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds@2022-05-01"
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
      availability = {
        secondaryZone = int
        strategy = "string"
        zone = int
      }
      circuit = {}
      encryption = {
        keyVaultProperties = {
          keyName = "string"
          keyVaultUrl = "string"
          keyVersion = "string"
        }
        status = "string"
      }
      identitySources = [
        {
          alias = "string"
          baseGroupDN = "string"
          baseUserDN = "string"
          domain = "string"
          name = "string"
          password = "string"
          primaryServer = "string"
          secondaryServer = "string"
          ssl = "string"
          username = "string"
        }
      ]
      internet = "string"
      managementCluster = {
        clusterSize = int
        hosts = [
          "string"
        ]
      }
      networkBlock = "string"
      nsxtPassword = "string"
      secondaryCircuit = {}
      vcenterPassword = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### privateClouds

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The private cloud SKU | Sku(required) |
| identity | The identity of the private cloud, if configured. | PrivateCloudIdentity |
| properties | The properties of a private cloud resource | PrivateCloudProperties |


### PrivateCloudIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the private cloud. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Private Cloud. | 'None''SystemAssigned' |


### PrivateCloudProperties

| Name | Description | Value |
|-|-|-|
| availability | Properties describing how the cloud is distributed across availability zones | AvailabilityProperties |
| circuit | An ExpressRoute Circuit | Circuit |
| encryption | Customer managed key encryption, can be enabled or disabled | Encryption |
| identitySources | vCenter Single Sign On Identity Sources | IdentitySource[] |
| internet | Connectivity to internet is enabled or disabled | 'Disabled''Enabled' |
| managementCluster | The default cluster used for management | ManagementCluster |
| networkBlock | The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22 | string (required) |
| nsxtPassword | Optionally, set the NSX-T Manager password when the private cloud is created | string |
| secondaryCircuit | A secondary expressRoute circuit from a separate AZ. Only present in a stretched private cloud | Circuit |
| vcenterPassword | Optionally, set the vCenter admin password when the private cloud is created | string |


### AvailabilityProperties

| Name | Description | Value |
|-|-|-|
| secondaryZone | The secondary availability zone for the private cloud | int |
| strategy | The availability strategy for the private cloud | 'DualZone''SingleZone' |
| zone | The primary availability zone for the private cloud | int |


### Encryption

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | The key vault where the encryption key is stored | EncryptionKeyVaultProperties |
| status | Status of customer managed encryption key | 'Disabled''Enabled' |


### EncryptionKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key. | string |
| keyVaultUrl | The URL of the vault. | string |
| keyVersion | The version of the key. | string |


### IdentitySource

| Name | Description | Value |
|-|-|-|
| alias | The domain's NetBIOS name | string |
| baseGroupDN | The base distinguished name for groups | string |
| baseUserDN | The base distinguished name for users | string |
| domain | The domain's dns name | string |
| name | The name of the identity source | string |
| password | The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups. | string |
| primaryServer | Primary server URL | string |
| secondaryServer | Secondary server URL | string |
| ssl | Protect LDAP communication using SSL certificate (LDAPS) | 'Disabled''Enabled' |
| username | The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group | string |


### ManagementCluster

| Name | Description | Value |
|-|-|-|
| clusterSize | The cluster size | int |
| hosts | The hosts | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU. | string (required) |
## Microsoft.AVS/privateClouds/addons@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/addons@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addonType = "string"
      // For remaining properties, see AddonProperties objects
    }
  })
}

```

### privateClouds/addons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of an addon resource | AddonProperties |


### AddonProperties

| Name | Description | Value |
|-|-|-|
| addonType | Set the object type | ArcHCXSRMVR(required) |


### AddonArcProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'Arc' (required) |
| vCenter | The VMware vCenter resource ID | string |


### AddonHcxProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'HCX' (required) |
| offer | The HCX offer, example VMware MaaS Cloud Provider (Enterprise) | string (required) |


### AddonSrmProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'SRM' (required) |
| licenseKey | The Site Recovery Manager (SRM) license | string |


### AddonVrProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'VR' (required) |
| vrsCount | The vSphere Replication Server (VRS) count | int (required) |
## Microsoft.AVS/privateClouds/authorizations@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/authorizations@2022-05-01"
  name = "string"
  parent_id = "string"
}

```

### privateClouds/authorizations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
## Microsoft.AVS/privateClouds/cloudLinks@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/cloudLinks@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedCloud = "string"
    }
  })
}

```

### privateClouds/cloudLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a cloud link. | CloudLinkProperties |


### CloudLinkProperties

| Name | Description | Value |
|-|-|-|
| linkedCloud | Identifier of the other private cloud participating in the link. | string |
## Microsoft.AVS/privateClouds/clusters@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterSize = int
      hosts = [
        "string"
      ]
    }
    sku = {
      name = "string"
    }
  })
}

```

### privateClouds/clusters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | The cluster SKU | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a cluster resource | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| clusterSize | The cluster size | int |
| hosts | The hosts | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU. | string (required) |
## Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diskPoolVolume = {
        lunName = "string"
        mountOption = "string"
        targetId = "string"
      }
      netAppVolume = {
        id = "string"
      }
    }
  })
}

```

### privateClouds/clusters/datastores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties of a datastore resource | DatastoreProperties |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| diskPoolVolume | An iSCSI volume | DiskPoolVolume |
| netAppVolume | An Azure NetApp Files volume | NetAppVolume |


### DiskPoolVolume

| Name | Description | Value |
|-|-|-|
| lunName | Name of the LUN to be used for datastore | string (required) |
| mountOption | Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN | 'ATTACH''MOUNT' |
| targetId | Azure resource ID of the iSCSI target | string (required) |


### NetAppVolume

| Name | Description | Value |
|-|-|-|
| id | Azure resource ID of the NetApp volume | string (required) |
## Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      state = "string"
      type = "string"
      // For remaining properties, see PlacementPolicyProperties objects
    }
  })
}

```

### privateClouds/clusters/placementPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | placement policy properties | PlacementPolicyProperties |


### PlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the placement policy | string |
| state | Whether the placement policy is enabled or disabled | 'Disabled''Enabled' |
| type | Set the object type | VmHostVmVm(required) |


### VmHostPlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| type | placement policy type | 'VmHost' (required) |
| affinityStrength | vm-host placement policy affinity strength (should/must) | 'Must''Should' |
| affinityType | placement policy affinity type | 'Affinity''AntiAffinity' (required) |
| azureHybridBenefitType | placement policy azure hybrid benefit opt-in type | 'None''SqlHost' |
| hostMembers | Host members list | string[] (required) |
| vmMembers | Virtual machine members list | string[] (required) |


### VmPlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| type | placement policy type | 'VmVm' (required) |
| affinityType | placement policy affinity type | 'Affinity''AntiAffinity' (required) |
| vmMembers | Virtual machine members list | string[] (required) |
## Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      expressRouteId = "string"
      peerExpressRouteCircuit = "string"
    }
  })
}

```

### privateClouds/globalReachConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a global reach connection resource | GlobalReachConnectionProperties |


### GlobalReachConnectionProperties

| Name | Description | Value |
|-|-|-|
| authorizationKey | Authorization key from the peer express route used for the global reach connection | string |
| expressRouteId | The ID of the Private Cloud's ExpressRoute Circuit that is participating in the global reach connection | string |
| peerExpressRouteCircuit | Identifier of the ExpressRoute Circuit to peer with in the global reach connection | string |
## Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01"
  name = "string"
  parent_id = "string"
}

```

### privateClouds/hcxEnterpriseSites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
## Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failureReason = "string"
      hiddenParameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      namedOutputs = {}
      output = [
        "string"
      ]
      parameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      retention = "string"
      scriptCmdletId = "string"
      timeout = "string"
    }
  })
}

```

### privateClouds/scriptExecutions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a script execution resource | ScriptExecutionProperties |


### ScriptExecutionProperties

| Name | Description | Value |
|-|-|-|
| failureReason | Error message if the script was able to run, but if the script itself had errors or powershell threw an exception | string |
| hiddenParameters | Parameters that will be hidden/not visible to ARM, such as passwords and credentials | ScriptExecutionParameter[] |
| namedOutputs | User-defined dictionary. | object |
| output | Standard output stream from the powershell execution | string[] |
| parameters | Parameters the script will accept | ScriptExecutionParameter[] |
| retention | Time to live for the resource. If not provided, will be available for 60 days | string |
| scriptCmdletId | A reference to the script cmdlet resource if user is running a AVS script | string |
| timeout | Time limit for execution | string (required) |


### ScriptExecutionParameter

| Name | Description | Value |
|-|-|-|
| name | The parameter name | string (required) |
| type | Set the object type | CredentialSecureValueValue(required) |


### PSCredentialExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'Credential' (required) |
| password | password for login | string |
| username | username for login | string |


### ScriptSecureStringExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'SecureValue' (required) |
| secureValue | A secure value for the passed parameter, not to be stored in logs | string |


### ScriptStringExecutionParameter

| Name | Description | Value |
|-|-|-|
| type | The type of execution parameter | 'Value' (required) |
| value | The value for the passed parameter | string |
## Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      revision = int
      dhcpType = "string"
      // For remaining properties, see WorkloadNetworkDhcpEntity objects
    }
  })
}

```

### privateClouds/workloadNetworks/dhcpConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DHCP properties. | WorkloadNetworkDhcpEntity |


### WorkloadNetworkDhcpEntity

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the DHCP entity. | string |
| revision | NSX revision number. | int |
| dhcpType | Set the object type | RELAYSERVER(required) |


### WorkloadNetworkDhcpRelay

| Name | Description | Value |
|-|-|-|
| dhcpType | Type of DHCP: SERVER or RELAY. | 'RELAY' (required) |
| serverAddresses | DHCP Relay Addresses. Max 3. | string[] |


### WorkloadNetworkDhcpServer

| Name | Description | Value |
|-|-|-|
| dhcpType | Type of DHCP: SERVER or RELAY. | 'SERVER' (required) |
| leaseTime | DHCP Server Lease Time. | int |
| serverAddress | DHCP Server Address. | string |
## Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultDnsZone = "string"
      displayName = "string"
      dnsServiceIp = "string"
      fqdnZones = [
        "string"
      ]
      logLevel = "string"
      revision = int
    }
  })
}

```

### privateClouds/workloadNetworks/dnsServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DNS Service properties | WorkloadNetworkDnsServiceProperties |


### WorkloadNetworkDnsServiceProperties

| Name | Description | Value |
|-|-|-|
| defaultDnsZone | Default DNS zone of the DNS Service. | string |
| displayName | Display name of the DNS Service. | string |
| dnsServiceIp | DNS service IP of the DNS Service. | string |
| fqdnZones | FQDN zones of the DNS Service. | string[] |
| logLevel | DNS Service log level. | 'DEBUG''ERROR''FATAL''INFO''WARNING' |
| revision | NSX revision number. | int |
## Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      dnsServerIps = [
        "string"
      ]
      dnsServices = int
      domain = [
        "string"
      ]
      revision = int
      sourceIp = "string"
    }
  })
}

```

### privateClouds/workloadNetworks/dnsZones

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DNS Zone properties | WorkloadNetworkDnsZoneProperties |


### WorkloadNetworkDnsZoneProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the DNS Zone. | string |
| dnsServerIps | DNS Server IP array of the DNS Zone. | string[] |
| dnsServices | Number of DNS Services using the DNS zone. | int |
| domain | Domain names of the DNS Zone. | string[] |
| revision | NSX revision number. | int |
| sourceIp | Source IP of the DNS Zone. | string |
## Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = "string"
      direction = "string"
      displayName = "string"
      revision = int
      source = "string"
    }
  })
}

```

### privateClouds/workloadNetworks/portMirroringProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | Port Mirroring Properties. | WorkloadNetworkPortMirroringProperties |


### WorkloadNetworkPortMirroringProperties

| Name | Description | Value |
|-|-|-|
| destination | Destination VM Group. | string |
| direction | Direction of port mirroring profile. | 'BIDIRECTIONAL''EGRESS''INGRESS' |
| displayName | Display name of the port mirroring profile. | string |
| revision | NSX revision number. | int |
| source | Source VM Group. | string |
## Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      numberOfPublicIPs = int
    }
  })
}

```

### privateClouds/workloadNetworks/publicIPs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | Public IP Block properties | WorkloadNetworkPublicIPProperties |


### WorkloadNetworkPublicIPProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the Public IP Block. | string |
| numberOfPublicIPs | Number of Public IPs requested. | int |
## Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectedGateway = "string"
      displayName = "string"
      revision = int
      subnet = {
        dhcpRanges = [
          "string"
        ]
        gatewayAddress = "string"
      }
    }
  })
}

```

### privateClouds/workloadNetworks/segments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | The properties of a Workload Segment proxy resource. | WorkloadNetworkSegmentProperties |


### WorkloadNetworkSegmentProperties

| Name | Description | Value |
|-|-|-|
| connectedGateway | Gateway which to connect segment to. | string |
| displayName | Display name of the segment. | string |
| revision | NSX revision number. | int |
| subnet | Subnet which to connect segment to. | WorkloadNetworkSegmentSubnet |


### WorkloadNetworkSegmentSubnet

| Name | Description | Value |
|-|-|-|
| dhcpRanges | DHCP Range assigned for subnet. | string[] |
| gatewayAddress | Gateway address. | string |
## Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      members = [
        "string"
      ]
      revision = int
    }
  })
}

```

### privateClouds/workloadNetworks/vmGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | VM Group properties. | WorkloadNetworkVMGroupProperties |


### WorkloadNetworkVMGroupProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the VM group. | string |
| members | Virtual machine members of this group. | string[] |
| revision | NSX revision number. | int |
