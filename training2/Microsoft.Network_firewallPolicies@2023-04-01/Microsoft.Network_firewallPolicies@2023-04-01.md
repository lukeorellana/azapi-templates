```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies@2023-04-01"
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
      basePolicy = {
        id = "string"
      }
      dnsSettings = {
        enableProxy = bool
        requireProxyForNetworkRules = bool
        servers = [
          "string"
        ]
      }
      explicitProxy = {
        enableExplicitProxy = bool
        enablePacFile = bool
        httpPort = int
        httpsPort = int
        pacFile = "string"
        pacFilePort = int
      }
      insights = {
        isEnabled = bool
        logAnalyticsResources = {
          defaultWorkspaceId = {
            id = "string"
          }
          workspaces = [
            {
              region = "string"
              workspaceId = {
                id = "string"
              }
            }
          ]
        }
        retentionDays = int
      }
      intrusionDetection = {
        configuration = {
          bypassTrafficSettings = [
            {
              description = "string"
              destinationAddresses = [
                "string"
              ]
              destinationIpGroups = [
                "string"
              ]
              destinationPorts = [
                "string"
              ]
              name = "string"
              protocol = "string"
              sourceAddresses = [
                "string"
              ]
              sourceIpGroups = [
                "string"
              ]
            }
          ]
          privateRanges = [
            "string"
          ]
          signatureOverrides = [
            {
              id = "string"
              mode = "string"
            }
          ]
        }
        mode = "string"
      }
      sku = {
        tier = "string"
      }
      snat = {
        autoLearnPrivateRanges = "string"
        privateRanges = [
          "string"
        ]
      }
      sql = {
        allowSqlRedirect = bool
      }
      threatIntelMode = "string"
      threatIntelWhitelist = {
        fqdns = [
          "string"
        ]
        ipAddresses = [
          "string"
        ]
      }
      transportSecurity = {
        certificateAuthority = {
          keyVaultSecretId = "string"
          name = "string"
        }
      }
    }
  })
}

```

### firewallPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the firewall policy. | ManagedServiceIdentity |
| properties | Properties of the firewall policy. | FirewallPolicyPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### FirewallPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| basePolicy | The parent firewall policy from which rules are inherited. | SubResource |
| dnsSettings | DNS Proxy Settings definition. | DnsSettings |
| explicitProxy | Explicit Proxy Settings definition. | ExplicitProxy |
| insights | Insights on Firewall Policy. | FirewallPolicyInsights |
| intrusionDetection | The configuration for Intrusion detection. | FirewallPolicyIntrusionDetection |
| sku | The Firewall Policy SKU. | FirewallPolicySku |
| snat | The private IP addresses/IP ranges to which traffic will not be SNAT. | FirewallPolicySnat |
| sql | SQL Settings definition. | FirewallPolicySQL |
| threatIntelMode | The operation mode for Threat Intelligence. | 'Alert''Deny''Off' |
| threatIntelWhitelist | ThreatIntel Allowlist for Firewall Policy. | FirewallPolicyThreatIntelWhitelist |
| transportSecurity | TLS Configuration definition. | FirewallPolicyTransportSecurity |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### DnsSettings

| Name | Description | Value |
|-|-|-|
| enableProxy | Enable DNS Proxy on Firewalls attached to the Firewall Policy. | bool |
| requireProxyForNetworkRules | FQDNs in Network Rules are supported when set to true. | bool |
| servers | List of Custom DNS Servers. | string[] |


### ExplicitProxy

| Name | Description | Value |
|-|-|-|
| enableExplicitProxy | When set to true, explicit proxy mode is enabled. | bool |
| enablePacFile | When set to true, pac file port and url needs to be provided. | bool |
| httpPort | Port number for explicit proxy http protocol, cannot be greater than 64000. | int |
| httpsPort | Port number for explicit proxy https protocol, cannot be greater than 64000. | int |
| pacFile | SAS URL for PAC file. | string |
| pacFilePort | Port number for firewall to serve PAC file. | int |


### FirewallPolicyInsights

| Name | Description | Value |
|-|-|-|
| isEnabled | A flag to indicate if the insights are enabled on the policy. | bool |
| logAnalyticsResources | Workspaces needed to configure the Firewall Policy Insights. | FirewallPolicyLogAnalyticsResources |
| retentionDays | Number of days the insights should be enabled on the policy. | int |


### FirewallPolicyLogAnalyticsResources

| Name | Description | Value |
|-|-|-|
| defaultWorkspaceId | The default workspace Id for Firewall Policy Insights. | SubResource |
| workspaces | List of workspaces for Firewall Policy Insights. | FirewallPolicyLogAnalyticsWorkspace[] |


### FirewallPolicyLogAnalyticsWorkspace

| Name | Description | Value |
|-|-|-|
| region | Region to configure the Workspace. | string |
| workspaceId | The workspace Id for Firewall Policy Insights. | SubResource |


### FirewallPolicyIntrusionDetection

| Name | Description | Value |
|-|-|-|
| configuration | Intrusion detection configuration properties. | FirewallPolicyIntrusionDetectionConfiguration |
| mode | Intrusion detection general state. | 'Alert''Deny''Off' |


### FirewallPolicyIntrusionDetectionConfiguration

| Name | Description | Value |
|-|-|-|
| bypassTrafficSettings | List of rules for traffic to bypass. | FirewallPolicyIntrusionDetectionBypassTrafficSpecifi...[] |
| privateRanges | IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property | string[] |
| signatureOverrides | List of specific signatures states. | FirewallPolicyIntrusionDetectionSignatureSpecificati...[] |


### FirewallPolicyIntrusionDetectionBypassTrafficSpecifi...

| Name | Description | Value |
|-|-|-|
| description | Description of the bypass traffic rule. | string |
| destinationAddresses | List of destination IP addresses or ranges for this rule. | string[] |
| destinationIpGroups | List of destination IpGroups for this rule. | string[] |
| destinationPorts | List of destination ports or ranges. | string[] |
| name | Name of the bypass traffic rule. | string |
| protocol | The rule bypass protocol. | 'ANY''ICMP''TCP''UDP' |
| sourceAddresses | List of source IP addresses or ranges for this rule. | string[] |
| sourceIpGroups | List of source IpGroups for this rule. | string[] |


### FirewallPolicyIntrusionDetectionSignatureSpecificati...

| Name | Description | Value |
|-|-|-|
| id | Signature id. | string |
| mode | The signature state. | 'Alert''Deny''Off' |


### FirewallPolicySku

| Name | Description | Value |
|-|-|-|
| tier | Tier of Firewall Policy. | 'Basic''Premium''Standard' |


### FirewallPolicySnat

| Name | Description | Value |
|-|-|-|
| autoLearnPrivateRanges | The operation mode for automatically learning private ranges to not be SNAT | 'Disabled''Enabled' |
| privateRanges | List of private IP addresses/IP address ranges to not be SNAT. | string[] |


### FirewallPolicySQL

| Name | Description | Value |
|-|-|-|
| allowSqlRedirect | A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999. | bool |


### FirewallPolicyThreatIntelWhitelist

| Name | Description | Value |
|-|-|-|
| fqdns | List of FQDNs for the ThreatIntel Allowlist. | string[] |
| ipAddresses | List of IP addresses for the ThreatIntel Allowlist. | string[] |


### FirewallPolicyTransportSecurity

| Name | Description | Value |
|-|-|-|
| certificateAuthority | The CA used for intermediate CA generation. | FirewallPolicyCertificateAuthority |


### FirewallPolicyCertificateAuthority

| Name | Description | Value |
|-|-|-|
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |
| name | Name of the CA certificate. | string |


