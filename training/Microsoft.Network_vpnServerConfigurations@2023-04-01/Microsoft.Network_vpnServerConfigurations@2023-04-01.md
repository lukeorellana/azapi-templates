```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aadAuthenticationParameters = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
      }
      configurationPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      name = "string"
      radiusClientRootCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      radiusServerAddress = "string"
      radiusServerRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      radiusServers = [
        {
          radiusServerAddress = "string"
          radiusServerScore = int
          radiusServerSecret = "string"
        }
      ]
      radiusServerSecret = "string"
      vpnAuthenticationTypes = [
        "string"
      ]
      vpnClientIpsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      vpnClientRevokedCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      vpnClientRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      vpnProtocols = [
        "string"
      ]
    }
  })
}

```

### vpnServerConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the P2SVpnServer configuration. | VpnServerConfigurationProperties |


### VpnServerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| aadAuthenticationParameters | The set of aad vpn authentication parameters. | AadAuthenticationParameters |
| configurationPolicyGroups | List of all VpnServerConfigurationPolicyGroups. | VpnServerConfigurationPolicyGroup[] |
| name | The name of the VpnServerConfiguration that is unique within a resource group. | string |
| radiusClientRootCertificates | Radius client root certificate of VpnServerConfiguration. | VpnServerConfigRadiusClientRootCertificate[] |
| radiusServerAddress | The radius server address property of the VpnServerConfiguration resource for point to site client connection. | string |
| radiusServerRootCertificates | Radius Server root certificate of VpnServerConfiguration. | VpnServerConfigRadiusServerRootCertificate[] |
| radiusServers | Multiple Radius Server configuration for VpnServerConfiguration. | RadiusServer[] |
| radiusServerSecret | The radius secret property of the VpnServerConfiguration resource for point to site client connection. | string |
| vpnAuthenticationTypes | VPN authentication types for the VpnServerConfiguration. | String array containing any of:'AAD''Certificate''Radius' |
| vpnClientIpsecPolicies | VpnClientIpsecPolicies for VpnServerConfiguration. | IpsecPolicy[] |
| vpnClientRevokedCertificates | VPN client revoked certificate of VpnServerConfiguration. | VpnServerConfigVpnClientRevokedCertificate[] |
| vpnClientRootCertificates | VPN client root certificate of VpnServerConfiguration. | VpnServerConfigVpnClientRootCertificate[] |
| vpnProtocols | VPN protocols for the VpnServerConfiguration. | String array containing any of:'IkeV2''OpenVPN' |


### AadAuthenticationParameters

| Name | Description | Value |
|-|-|-|
| aadAudience | AAD Vpn authentication parameter AAD audience. | string |
| aadIssuer | AAD Vpn authentication parameter AAD issuer. | string |
| aadTenant | AAD Vpn authentication parameter AAD tenant. | string |


### VpnServerConfigurationPolicyGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupProperties |


### VpnServerConfigurationPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VpnServerConfigurationPolicyGroup or not. | bool |
| policyMembers | Multiple PolicyMembers for VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupMember[] |
| priority | Priority for VpnServerConfigurationPolicyGroup. | int |


### VpnServerConfigurationPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VpnServerConfigurationPolicyGroupMember. | string |
| name | Name of the VpnServerConfigurationPolicyGroupMember. | string |


### VpnServerConfigRadiusClientRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| thumbprint | The Radius client root certificate thumbprint. | string |


### VpnServerConfigRadiusServerRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| publicCertData | The certificate public data. | string |


### RadiusServer

| Name | Description | Value |
|-|-|-|
| radiusServerAddress | The address of this radius server. | string (required) |
| radiusServerScore | The initial score assigned to this radius server. | int |
| radiusServerSecret | The secret used for this radius server. | string |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### VpnServerConfigVpnClientRevokedCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| thumbprint | The revoked VPN client certificate thumbprint. | string |


### VpnServerConfigVpnClientRootCertificate

| Name | Description | Value |
|-|-|-|
| name | The certificate name. | string |
| publicCertData | The certificate public data. | string |


