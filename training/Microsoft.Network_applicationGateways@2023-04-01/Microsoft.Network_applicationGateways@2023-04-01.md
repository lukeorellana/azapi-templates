```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationGateways@2023-04-01"
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
      authenticationCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      autoscaleConfiguration = {
        maxCapacity = int
        minCapacity = int
      }
      backendAddressPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddresses = [
              {
                fqdn = "string"
                ipAddress = "string"
              }
            ]
          }
        }
      ]
      backendHttpSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            affinityCookieName = "string"
            authenticationCertificates = [
              {
                id = "string"
              }
            ]
            connectionDraining = {
              drainTimeoutInSec = int
              enabled = bool
            }
            cookieBasedAffinity = "string"
            hostName = "string"
            path = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            probeEnabled = bool
            protocol = "string"
            requestTimeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      backendSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            hostName = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            protocol = "string"
            timeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      customErrorConfigurations = [
        {
          customErrorPageUrl = "string"
          statusCode = "string"
        }
      ]
      enableFips = bool
      enableHttp2 = bool
      firewallPolicy = {
        id = "string"
      }
      forceFirewallPolicyAssociation = bool
      frontendIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            privateLinkConfiguration = {
              id = "string"
            }
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      frontendPorts = [
        {
          id = "string"
          name = "string"
          properties = {
            port = int
          }
        }
      ]
      gatewayIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            subnet = {
              id = "string"
            }
          }
        }
      ]
      globalConfiguration = {
        enableRequestBuffering = bool
        enableResponseBuffering = bool
      }
      httpListeners = [
        {
          id = "string"
          name = "string"
          properties = {
            customErrorConfigurations = [
              {
                customErrorPageUrl = "string"
                statusCode = "string"
              }
            ]
            firewallPolicy = {
              id = "string"
            }
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            hostName = "string"
            hostNames = [
              "string"
            ]
            protocol = "string"
            requireServerNameIndication = bool
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      listeners = [
        {
          id = "string"
          name = "string"
          properties = {
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            protocol = "string"
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      loadDistributionPolicies = [
        {
          id = "string"
          name = "string"
          properties = {
            loadDistributionAlgorithm = "string"
            loadDistributionTargets = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  weightPerServer = int
                }
              }
            ]
          }
        }
      ]
      privateLinkConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            ipConfigurations = [
              {
                id = "string"
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
      probes = [
        {
          id = "string"
          name = "string"
          properties = {
            host = "string"
            interval = int
            match = {
              body = "string"
              statusCodes = [
                "string"
              ]
            }
            minServers = int
            path = "string"
            pickHostNameFromBackendHttpSettings = bool
            pickHostNameFromBackendSettings = bool
            port = int
            protocol = "string"
            timeout = int
            unhealthyThreshold = int
          }
        }
      ]
      redirectConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            includePath = bool
            includeQueryString = bool
            pathRules = [
              {
                id = "string"
              }
            ]
            redirectType = "string"
            requestRoutingRules = [
              {
                id = "string"
              }
            ]
            targetListener = {
              id = "string"
            }
            targetUrl = "string"
            urlPathMaps = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      requestRoutingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendHttpSettings = {
              id = "string"
            }
            httpListener = {
              id = "string"
            }
            loadDistributionPolicy = {
              id = "string"
            }
            priority = int
            redirectConfiguration = {
              id = "string"
            }
            rewriteRuleSet = {
              id = "string"
            }
            ruleType = "string"
            urlPathMap = {
              id = "string"
            }
          }
        }
      ]
      rewriteRuleSets = [
        {
          id = "string"
          name = "string"
          properties = {
            rewriteRules = [
              {
                actionSet = {
                  requestHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  responseHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  urlConfiguration = {
                    modifiedPath = "string"
                    modifiedQueryString = "string"
                    reroute = bool
                  }
                }
                conditions = [
                  {
                    ignoreCase = bool
                    negate = bool
                    pattern = "string"
                    variable = "string"
                  }
                ]
                name = "string"
                ruleSequence = int
              }
            ]
          }
        }
      ]
      routingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendSettings = {
              id = "string"
            }
            listener = {
              id = "string"
            }
            priority = int
            ruleType = "string"
          }
        }
      ]
      sku = {
        capacity = int
        name = "string"
        tier = "string"
      }
      sslCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
            password = "string"
          }
        }
      ]
      sslPolicy = {
        cipherSuites = [
          "string"
        ]
        disabledSslProtocols = [
          "string"
        ]
        minProtocolVersion = "string"
        policyName = "string"
        policyType = "string"
      }
      sslProfiles = [
        {
          id = "string"
          name = "string"
          properties = {
            clientAuthConfiguration = {
              verifyClientCertIssuerDN = bool
              verifyClientRevocation = "string"
            }
            sslPolicy = {
              cipherSuites = [
                "string"
              ]
              disabledSslProtocols = [
                "string"
              ]
              minProtocolVersion = "string"
              policyName = "string"
              policyType = "string"
            }
            trustedClientCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      trustedClientCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      trustedRootCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
          }
        }
      ]
      urlPathMaps = [
        {
          id = "string"
          name = "string"
          properties = {
            defaultBackendAddressPool = {
              id = "string"
            }
            defaultBackendHttpSettings = {
              id = "string"
            }
            defaultLoadDistributionPolicy = {
              id = "string"
            }
            defaultRedirectConfiguration = {
              id = "string"
            }
            defaultRewriteRuleSet = {
              id = "string"
            }
            pathRules = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  backendHttpSettings = {
                    id = "string"
                  }
                  firewallPolicy = {
                    id = "string"
                  }
                  loadDistributionPolicy = {
                    id = "string"
                  }
                  paths = [
                    "string"
                  ]
                  redirectConfiguration = {
                    id = "string"
                  }
                  rewriteRuleSet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      webApplicationFirewallConfiguration = {
        disabledRuleGroups = [
          {
            ruleGroupName = "string"
            rules = [
              int
            ]
          }
        ]
        enabled = bool
        exclusions = [
          {
            matchVariable = "string"
            selector = "string"
            selectorMatchOperator = "string"
          }
        ]
        fileUploadLimitInMb = int
        firewallMode = "string"
        maxRequestBodySize = int
        maxRequestBodySizeInKb = int
        requestBodyCheck = bool
        ruleSetType = "string"
        ruleSetVersion = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

### applicationGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the application gateway, if configured. | ManagedServiceIdentity |
| properties | Properties of the application gateway. | ApplicationGatewayPropertiesFormat |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ApplicationGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationCertificates | Authentication certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayAuthenticationCertificate[] |
| autoscaleConfiguration | Autoscale Configuration. | ApplicationGatewayAutoscaleConfiguration |
| backendAddressPools | Backend address pool of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendAddressPool[] |
| backendHttpSettingsCollection | Backend http settings of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendHttpSettings[] |
| backendSettingsCollection | Backend settings of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayBackendSettings[] |
| customErrorConfigurations | Custom error configurations of the application gateway resource. | ApplicationGatewayCustomError[] |
| enableFips | Whether FIPS is enabled on the application gateway resource. | bool |
| enableHttp2 | Whether HTTP2 is enabled on the application gateway resource. | bool |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| forceFirewallPolicyAssociation | If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config. | bool |
| frontendIPConfigurations | Frontend IP addresses of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayFrontendIPConfiguration[] |
| frontendPorts | Frontend ports of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayFrontendPort[] |
| gatewayIPConfigurations | Subnets of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayIPConfiguration[] |
| globalConfiguration | Global Configuration. | ApplicationGatewayGlobalConfiguration |
| httpListeners | Http listeners of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayHttpListener[] |
| listeners | Listeners of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayListener[] |
| loadDistributionPolicies | Load distribution policies of the application gateway resource. | ApplicationGatewayLoadDistributionPolicy[] |
| privateLinkConfigurations | PrivateLink configurations on application gateway. | ApplicationGatewayPrivateLinkConfiguration[] |
| probes | Probes of the application gateway resource. | ApplicationGatewayProbe[] |
| redirectConfigurations | Redirect configurations of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayRedirectConfiguration[] |
| requestRoutingRules | Request routing rules of the application gateway resource. | ApplicationGatewayRequestRoutingRule[] |
| rewriteRuleSets | Rewrite rules for the application gateway resource. | ApplicationGatewayRewriteRuleSet[] |
| routingRules | Routing rules of the application gateway resource. | ApplicationGatewayRoutingRule[] |
| sku | SKU of the application gateway resource. | ApplicationGatewaySku |
| sslCertificates | SSL certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewaySslCertificate[] |
| sslPolicy | SSL policy of the application gateway resource. | ApplicationGatewaySslPolicy |
| sslProfiles | SSL profiles of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewaySslProfile[] |
| trustedClientCertificates | Trusted client certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayTrustedClientCertificate[] |
| trustedRootCertificates | Trusted Root certificates of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayTrustedRootCertificate[] |
| urlPathMaps | URL path map of the application gateway resource. For default limits, seeApplication Gateway limits. | ApplicationGatewayUrlPathMap[] |
| webApplicationFirewallConfiguration | Web application firewall configuration. | ApplicationGatewayWebApplicationFirewallConfiguratio... |


### ApplicationGatewayAuthenticationCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the authentication certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway authentication certificate. | ApplicationGatewayAuthenticationCertificatePropertie... |


### ApplicationGatewayAuthenticationCertificatePropertie...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |


### ApplicationGatewayAutoscaleConfiguration

| Name | Description | Value |
|-|-|-|
| maxCapacity | Upper bound on number of Application Gateway capacity. | int |
| minCapacity | Lower bound on number of Application Gateway capacity. | int (required) |


### ApplicationGatewayBackendAddressPool

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend address pool that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend address pool. | ApplicationGatewayBackendAddressPoolPropertiesFormat |


### ApplicationGatewayBackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddresses | Backend addresses. | ApplicationGatewayBackendAddress[] |


### ApplicationGatewayBackendAddress

| Name | Description | Value |
|-|-|-|
| fqdn | Fully qualified domain name (FQDN). | string |
| ipAddress | IP address. | string |


### ApplicationGatewayBackendHttpSettings

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend http settings that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend HTTP settings. | ApplicationGatewayBackendHttpSettingsPropertiesForma... |


### ApplicationGatewayBackendHttpSettingsPropertiesForma...

| Name | Description | Value |
|-|-|-|
| affinityCookieName | Cookie name to use for the affinity cookie. | string |
| authenticationCertificates | Array of references to application gateway authentication certificates. | SubResource[] |
| connectionDraining | Connection draining of the backend http settings resource. | ApplicationGatewayConnectionDraining |
| cookieBasedAffinity | Cookie based affinity. | 'Disabled''Enabled' |
| hostName | Host header to be sent to the backend servers. | string |
| path | Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null. | string |
| pickHostNameFromBackendAddress | Whether to pick host header should be picked from the host name of the backend server. Default value is false. | bool |
| port | The destination port on the backend. | int |
| probe | Probe resource of an application gateway. | SubResource |
| probeEnabled | Whether the probe is enabled. Default value is false. | bool |
| protocol | The protocol used to communicate with the backend. | 'Http''Https''Tcp''Tls' |
| requestTimeout | Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds. | int |
| trustedRootCertificates | Array of references to application gateway trusted root certificates. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ApplicationGatewayConnectionDraining

| Name | Description | Value |
|-|-|-|
| drainTimeoutInSec | The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds. | int (required) |
| enabled | Whether connection draining is enabled or not. | bool (required) |


### ApplicationGatewayBackendSettings

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the backend settings that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway backend settings. | ApplicationGatewayBackendSettingsPropertiesFormat |


### ApplicationGatewayBackendSettingsPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hostName | Server name indication to be sent to the backend servers for Tls protocol. | string |
| pickHostNameFromBackendAddress | Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false. | bool |
| port | The destination port on the backend. | int |
| probe | Probe resource of an application gateway. | SubResource |
| protocol | The protocol used to communicate with the backend. | 'Http''Https''Tcp''Tls' |
| timeout | Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds. | int |
| trustedRootCertificates | Array of references to application gateway trusted root certificates. | SubResource[] |


### ApplicationGatewayCustomError

| Name | Description | Value |
|-|-|-|
| customErrorPageUrl | Error page URL of the application gateway custom error. | string |
| statusCode | Status code of the application gateway custom error. | 'HttpStatus400''HttpStatus403''HttpStatus404''HttpStatus405''HttpStatus408''HttpStatus500''HttpStatus502''HttpStatus503''HttpStatus504' |


### ApplicationGatewayFrontendIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the frontend IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway frontend IP configuration. | ApplicationGatewayFrontendIPConfigurationPropertiesF... |


### ApplicationGatewayFrontendIPConfigurationPropertiesF...

| Name | Description | Value |
|-|-|-|
| privateIPAddress | PrivateIPAddress of the network interface IP Configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| privateLinkConfiguration | Reference to the application gateway private link configuration. | SubResource |
| publicIPAddress | Reference to the PublicIP resource. | SubResource |
| subnet | Reference to the subnet resource. | SubResource |


### ApplicationGatewayFrontendPort

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the frontend port that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway frontend port. | ApplicationGatewayFrontendPortPropertiesFormat |


### ApplicationGatewayFrontendPortPropertiesFormat

| Name | Description | Value |
|-|-|-|
| port | Frontend port. | int |


### ApplicationGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the IP configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway IP configuration. | ApplicationGatewayIPConfigurationPropertiesFormat |


### ApplicationGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| subnet | Reference to the subnet resource. A subnet from where application gateway gets its private address. | SubResource |


### ApplicationGatewayGlobalConfiguration

| Name | Description | Value |
|-|-|-|
| enableRequestBuffering | Enable request buffering. | bool |
| enableResponseBuffering | Enable response buffering. | bool |


### ApplicationGatewayHttpListener

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the HTTP listener that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway HTTP listener. | ApplicationGatewayHttpListenerPropertiesFormat |


### ApplicationGatewayHttpListenerPropertiesFormat

| Name | Description | Value |
|-|-|-|
| customErrorConfigurations | Custom error configurations of the HTTP listener. | ApplicationGatewayCustomError[] |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| frontendIPConfiguration | Frontend IP configuration resource of an application gateway. | SubResource |
| frontendPort | Frontend port resource of an application gateway. | SubResource |
| hostName | Host name of HTTP listener. | string |
| hostNames | List of Host names for HTTP Listener that allows special wildcard characters as well. | string[] |
| protocol | Protocol of the HTTP listener. | 'Http''Https''Tcp''Tls' |
| requireServerNameIndication | Applicable only if protocol is https. Enables SNI for multi-hosting. | bool |
| sslCertificate | SSL certificate resource of an application gateway. | SubResource |
| sslProfile | SSL profile resource of the application gateway. | SubResource |


### ApplicationGatewayListener

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the listener that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway listener. | ApplicationGatewayListenerPropertiesFormat |


### ApplicationGatewayListenerPropertiesFormat

| Name | Description | Value |
|-|-|-|
| frontendIPConfiguration | Frontend IP configuration resource of an application gateway. | SubResource |
| frontendPort | Frontend port resource of an application gateway. | SubResource |
| protocol | Protocol of the listener. | 'Http''Https''Tcp''Tls' |
| sslCertificate | SSL certificate resource of an application gateway. | SubResource |
| sslProfile | SSL profile resource of the application gateway. | SubResource |


### ApplicationGatewayLoadDistributionPolicy

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the load distribution policy that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway load distribution policy. | ApplicationGatewayLoadDistributionPolicyPropertiesFo... |


### ApplicationGatewayLoadDistributionPolicyPropertiesFo...

| Name | Description | Value |
|-|-|-|
| loadDistributionAlgorithm | Load Distribution Targets resource of an application gateway. | 'IpHash''LeastConnections''RoundRobin' |
| loadDistributionTargets | Load Distribution Targets resource of an application gateway. | ApplicationGatewayLoadDistributionTarget[] |


### ApplicationGatewayLoadDistributionTarget

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the load distribution policy that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway load distribution target. | ApplicationGatewayLoadDistributionTargetPropertiesFo... |


### ApplicationGatewayLoadDistributionTargetPropertiesFo...

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| weightPerServer | Weight per server. Range between 1 and 100. | int |


### ApplicationGatewayPrivateLinkConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the private link configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway private link configuration. | ApplicationGatewayPrivateLinkConfigurationProperties |


### ApplicationGatewayPrivateLinkConfigurationProperties

| Name | Description | Value |
|-|-|-|
| ipConfigurations | An array of application gateway private link ip configurations. | ApplicationGatewayPrivateLinkIpConfiguration[] |


### ApplicationGatewayPrivateLinkIpConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of application gateway private link ip configuration. | string |
| properties | Properties of an application gateway private link ip configuration. | ApplicationGatewayPrivateLinkIpConfigurationProperti... |


### ApplicationGatewayPrivateLinkIpConfigurationProperti...

| Name | Description | Value |
|-|-|-|
| primary | Whether the ip configuration is primary or not. | bool |
| privateIPAddress | The private IP address of the IP configuration. | string |
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| subnet | Reference to the subnet resource. | SubResource |


### ApplicationGatewayProbe

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the probe that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway probe. | ApplicationGatewayProbePropertiesFormat |


### ApplicationGatewayProbePropertiesFormat

| Name | Description | Value |
|-|-|-|
| host | Host name to send the probe to. | string |
| interval | The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds. | int |
| match | Criterion for classifying a healthy probe response. | ApplicationGatewayProbeHealthResponseMatch |
| minServers | Minimum number of servers that are always marked healthy. Default value is 0. | int |
| path | Relative path of probe. Valid path starts from '/'. Probe is sent to {Protocol}://{host}:{port}{path}. | string |
| pickHostNameFromBackendHttpSettings | Whether the host header should be picked from the backend http settings. Default value is false. | bool |
| pickHostNameFromBackendSettings | Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false. | bool |
| port | Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only. | int |
| protocol | The protocol used for the probe. | 'Http''Https''Tcp''Tls' |
| timeout | The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. | int |
| unhealthyThreshold | The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20. | int |


### ApplicationGatewayProbeHealthResponseMatch

| Name | Description | Value |
|-|-|-|
| body | Body that must be contained in the health response. Default value is empty. | string |
| statusCodes | Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399. | string[] |


### ApplicationGatewayRedirectConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the redirect configuration that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway redirect configuration. | ApplicationGatewayRedirectConfigurationPropertiesFor... |


### ApplicationGatewayRedirectConfigurationPropertiesFor...

| Name | Description | Value |
|-|-|-|
| includePath | Include path in the redirected url. | bool |
| includeQueryString | Include query string in the redirected url. | bool |
| pathRules | Path rules specifying redirect configuration. | SubResource[] |
| redirectType | HTTP redirection type. | 'Found''Permanent''SeeOther''Temporary' |
| requestRoutingRules | Request routing specifying redirect configuration. | SubResource[] |
| targetListener | Reference to a listener to redirect the request to. | SubResource |
| targetUrl | Url to redirect the request to. | string |
| urlPathMaps | Url path maps specifying default redirect configuration. | SubResource[] |


### ApplicationGatewayRequestRoutingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the request routing rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway request routing rule. | ApplicationGatewayRequestRoutingRulePropertiesFormat |


### ApplicationGatewayRequestRoutingRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| backendHttpSettings | Backend http settings resource of the application gateway. | SubResource |
| httpListener | Http listener resource of the application gateway. | SubResource |
| loadDistributionPolicy | Load Distribution Policy resource of the application gateway. | SubResource |
| priority | Priority of the request routing rule. | int |
| redirectConfiguration | Redirect configuration resource of the application gateway. | SubResource |
| rewriteRuleSet | Rewrite Rule Set resource in Basic rule of the application gateway. | SubResource |
| ruleType | Rule type. | 'Basic''PathBasedRouting' |
| urlPathMap | URL path map resource of the application gateway. | SubResource |


### ApplicationGatewayRewriteRuleSet

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the rewrite rule set that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway rewrite rule set. | ApplicationGatewayRewriteRuleSetPropertiesFormat |


### ApplicationGatewayRewriteRuleSetPropertiesFormat

| Name | Description | Value |
|-|-|-|
| rewriteRules | Rewrite rules in the rewrite rule set. | ApplicationGatewayRewriteRule[] |


### ApplicationGatewayRewriteRule

| Name | Description | Value |
|-|-|-|
| actionSet | Set of actions to be done as part of the rewrite Rule. | ApplicationGatewayRewriteRuleActionSet |
| conditions | Conditions based on which the action set execution will be evaluated. | ApplicationGatewayRewriteRuleCondition[] |
| name | Name of the rewrite rule that is unique within an Application Gateway. | string |
| ruleSequence | Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet. | int |


### ApplicationGatewayRewriteRuleActionSet

| Name | Description | Value |
|-|-|-|
| requestHeaderConfigurations | Request Header Actions in the Action Set. | ApplicationGatewayHeaderConfiguration[] |
| responseHeaderConfigurations | Response Header Actions in the Action Set. | ApplicationGatewayHeaderConfiguration[] |
| urlConfiguration | Url Configuration Action in the Action Set. | ApplicationGatewayUrlConfiguration |


### ApplicationGatewayHeaderConfiguration

| Name | Description | Value |
|-|-|-|
| headerName | Header name of the header configuration. | string |
| headerValue | Header value of the header configuration. | string |


### ApplicationGatewayUrlConfiguration

| Name | Description | Value |
|-|-|-|
| modifiedPath | Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null. | string |
| modifiedQueryString | Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null. | string |
| reroute | If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false. | bool |


### ApplicationGatewayRewriteRuleCondition

| Name | Description | Value |
|-|-|-|
| ignoreCase | Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison. | bool |
| negate | Setting this value as truth will force to check the negation of the condition given by the user. | bool |
| pattern | The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition. | string |
| variable | The condition parameter of the RewriteRuleCondition. | string |


### ApplicationGatewayRoutingRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the routing rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway routing rule. | ApplicationGatewayRoutingRulePropertiesFormat |


### ApplicationGatewayRoutingRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of the application gateway. | SubResource |
| backendSettings | Backend settings resource of the application gateway. | SubResource |
| listener | Listener resource of the application gateway. | SubResource |
| priority | Priority of the routing rule. | int (required) |
| ruleType | Rule type. | 'Basic''PathBasedRouting' |


### ApplicationGatewaySku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity (instance count) of an application gateway. | int |
| name | Name of an application gateway SKU. | 'Basic''Standard_Large''Standard_Medium''Standard_Small''Standard_v2''WAF_Large''WAF_Medium''WAF_v2' |
| tier | Tier of an application gateway. | 'Basic''Standard''Standard_v2''WAF''WAF_v2' |


### ApplicationGatewaySslCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the SSL certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway SSL certificate. | ApplicationGatewaySslCertificatePropertiesFormat |


### ApplicationGatewaySslCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| data | Base-64 encoded pfx certificate. Only applicable in PUT Request. | string |
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |
| password | Password for the pfx file specified in data. Only applicable in PUT request. | string |


### ApplicationGatewaySslPolicy

| Name | Description | Value |
|-|-|-|
| cipherSuites | Ssl cipher suites to be enabled in the specified order to application gateway. | String array containing any of:'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA256''TLS_DHE_DSS_WITH_AES_256_CBC_SHA''TLS_DHE_DSS_WITH_AES_256_CBC_SHA256''TLS_DHE_RSA_WITH_AES_128_CBC_SHA''TLS_DHE_RSA_WITH_AES_128_GCM_SHA256''TLS_DHE_RSA_WITH_AES_256_CBC_SHA''TLS_DHE_RSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384''TLS_RSA_WITH_3DES_EDE_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA256''TLS_RSA_WITH_AES_128_GCM_SHA256''TLS_RSA_WITH_AES_256_CBC_SHA''TLS_RSA_WITH_AES_256_CBC_SHA256''TLS_RSA_WITH_AES_256_GCM_SHA384' |
| disabledSslProtocols | Ssl protocols to be disabled on application gateway. | String array containing any of:'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3' |
| minProtocolVersion | Minimum version of Ssl protocol to be supported on application gateway. | 'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3' |
| policyName | Name of Ssl predefined policy. | 'AppGwSslPolicy20150501''AppGwSslPolicy20170401''AppGwSslPolicy20170401S''AppGwSslPolicy20220101''AppGwSslPolicy20220101S' |
| policyType | Type of Ssl Policy. | 'Custom''CustomV2''Predefined' |


### ApplicationGatewaySslProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the SSL profile that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway SSL profile. | ApplicationGatewaySslProfilePropertiesFormat |


### ApplicationGatewaySslProfilePropertiesFormat

| Name | Description | Value |
|-|-|-|
| clientAuthConfiguration | Client authentication configuration of the application gateway resource. | ApplicationGatewayClientAuthConfiguration |
| sslPolicy | SSL policy of the application gateway resource. | ApplicationGatewaySslPolicy |
| trustedClientCertificates | Array of references to application gateway trusted client certificates. | SubResource[] |


### ApplicationGatewayClientAuthConfiguration

| Name | Description | Value |
|-|-|-|
| verifyClientCertIssuerDN | Verify client certificate issuer name on the application gateway. | bool |
| verifyClientRevocation | Verify client certificate revocation status. | 'None''OCSP' |


### ApplicationGatewayTrustedClientCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the trusted client certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway trusted client certificate. | ApplicationGatewayTrustedClientCertificateProperties... |


### ApplicationGatewayTrustedClientCertificateProperties...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |


### ApplicationGatewayTrustedRootCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the trusted root certificate that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway trusted root certificate. | ApplicationGatewayTrustedRootCertificatePropertiesFo... |


### ApplicationGatewayTrustedRootCertificatePropertiesFo...

| Name | Description | Value |
|-|-|-|
| data | Certificate public data. | string |
| keyVaultSecretId | Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. | string |


### ApplicationGatewayUrlPathMap

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the URL path map that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway URL path map. | ApplicationGatewayUrlPathMapPropertiesFormat |


### ApplicationGatewayUrlPathMapPropertiesFormat

| Name | Description | Value |
|-|-|-|
| defaultBackendAddressPool | Default backend address pool resource of URL path map. | SubResource |
| defaultBackendHttpSettings | Default backend http settings resource of URL path map. | SubResource |
| defaultLoadDistributionPolicy | Default Load Distribution Policy resource of URL path map. | SubResource |
| defaultRedirectConfiguration | Default redirect configuration resource of URL path map. | SubResource |
| defaultRewriteRuleSet | Default Rewrite rule set resource of URL path map. | SubResource |
| pathRules | Path rule of URL path map resource. | ApplicationGatewayPathRule[] |


### ApplicationGatewayPathRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the path rule that is unique within an Application Gateway. | string |
| properties | Properties of the application gateway path rule. | ApplicationGatewayPathRulePropertiesFormat |


### ApplicationGatewayPathRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | Backend address pool resource of URL path map path rule. | SubResource |
| backendHttpSettings | Backend http settings resource of URL path map path rule. | SubResource |
| firewallPolicy | Reference to the FirewallPolicy resource. | SubResource |
| loadDistributionPolicy | Load Distribution Policy resource of URL path map path rule. | SubResource |
| paths | Path rules of URL path map. | string[] |
| redirectConfiguration | Redirect configuration resource of URL path map path rule. | SubResource |
| rewriteRuleSet | Rewrite rule set resource of URL path map path rule. | SubResource |


### ApplicationGatewayWebApplicationFirewallConfiguratio...

| Name | Description | Value |
|-|-|-|
| disabledRuleGroups | The disabled rule groups. | ApplicationGatewayFirewallDisabledRuleGroup[] |
| enabled | Whether the web application firewall is enabled or not. | bool (required) |
| exclusions | The exclusion list. | ApplicationGatewayFirewallExclusion[] |
| fileUploadLimitInMb | Maximum file upload size in Mb for WAF. | int |
| firewallMode | Web application firewall mode. | 'Detection''Prevention' (required) |
| maxRequestBodySize | Maximum request body size for WAF. | int |
| maxRequestBodySizeInKb | Maximum request body size in Kb for WAF. | int |
| requestBodyCheck | Whether allow WAF to check request Body. | bool |
| ruleSetType | The type of the web application firewall rule set. Possible values are: 'OWASP'. | string (required) |
| ruleSetVersion | The version of the rule set type. | string (required) |


### ApplicationGatewayFirewallDisabledRuleGroup

| Name | Description | Value |
|-|-|-|
| ruleGroupName | The name of the rule group that will be disabled. | string (required) |
| rules | The list of rules that will be disabled. If null, all rules of the rule group will be disabled. | int[] |


### ApplicationGatewayFirewallExclusion

| Name | Description | Value |
|-|-|-|
| matchVariable | The variable to be excluded. | string (required) |
| selector | When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. | string (required) |
| selectorMatchOperator | When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. | string (required) |


