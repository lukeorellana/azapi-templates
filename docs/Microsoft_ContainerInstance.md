## Microsoft.ContainerInstance/containerGroups@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerInstance/containerGroups@2023-05-01"
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
      confidentialComputeProperties = {
        ccePolicy = "string"
      }
      containers = [
        {
          name = "string"
          properties = {
            command = [
              "string"
            ]
            environmentVariables = [
              {
                name = "string"
                secureValue = "string"
                value = "string"
              }
            ]
            image = "string"
            livenessProbe = {
              exec = {
                command = [
                  "string"
                ]
              }
              failureThreshold = int
              httpGet = {
                httpHeaders = [
                  {
                    name = "string"
                    value = "string"
                  }
                ]
                path = "string"
                port = int
                scheme = "string"
              }
              initialDelaySeconds = int
              periodSeconds = int
              successThreshold = int
              timeoutSeconds = int
            }
            ports = [
              {
                port = int
                protocol = "string"
              }
            ]
            readinessProbe = {
              exec = {
                command = [
                  "string"
                ]
              }
              failureThreshold = int
              httpGet = {
                httpHeaders = [
                  {
                    name = "string"
                    value = "string"
                  }
                ]
                path = "string"
                port = int
                scheme = "string"
              }
              initialDelaySeconds = int
              periodSeconds = int
              successThreshold = int
              timeoutSeconds = int
            }
            resources = {
              limits = {
                cpu = int
                gpu = {
                  count = int
                  sku = "string"
                }
                memoryInGB = "decimal-as-string"
              }
              requests = {
                cpu = int
                gpu = {
                  count = int
                  sku = "string"
                }
                memoryInGB = "decimal-as-string"
              }
            }
            securityContext = {
              allowPrivilegeEscalation = bool
              capabilities = {
                add = [
                  "string"
                ]
                drop = [
                  "string"
                ]
              }
              privileged = bool
              runAsGroup = int
              runAsUser = int
              seccompProfile = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                name = "string"
                readOnly = bool
              }
            ]
          }
        }
      ]
      diagnostics = {
        logAnalytics = {
          logType = "string"
          metadata = {}
          workspaceId = "string"
          workspaceKey = "string"
          workspaceResourceId = "string"
        }
      }
      dnsConfig = {
        nameServers = [
          "string"
        ]
        options = "string"
        searchDomains = "string"
      }
      encryptionProperties = {
        identity = "string"
        keyName = "string"
        keyVersion = "string"
        vaultBaseUrl = "string"
      }
      extensions = [
        {
          name = "string"
          properties = {
            extensionType = "string"
            version = "string"
          }
        }
      ]
      imageRegistryCredentials = [
        {
          identity = "string"
          identityUrl = "string"
          password = "string"
          server = "string"
          username = "string"
        }
      ]
      initContainers = [
        {
          name = "string"
          properties = {
            command = [
              "string"
            ]
            environmentVariables = [
              {
                name = "string"
                secureValue = "string"
                value = "string"
              }
            ]
            image = "string"
            securityContext = {
              allowPrivilegeEscalation = bool
              capabilities = {
                add = [
                  "string"
                ]
                drop = [
                  "string"
                ]
              }
              privileged = bool
              runAsGroup = int
              runAsUser = int
              seccompProfile = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                name = "string"
                readOnly = bool
              }
            ]
          }
        }
      ]
      ipAddress = {
        autoGeneratedDomainNameLabelScope = "string"
        dnsNameLabel = "string"
        ip = "string"
        ports = [
          {
            port = int
            protocol = "string"
          }
        ]
        type = "string"
      }
      osType = "string"
      priority = "string"
      restartPolicy = "string"
      sku = "string"
      subnetIds = [
        {
          id = "string"
          name = "string"
        }
      ]
      volumes = [
        {
          azureFile = {
            readOnly = bool
            shareName = "string"
            storageAccountKey = "string"
            storageAccountName = "string"
          }
          gitRepo = {
            directory = "string"
            repository = "string"
            revision = "string"
          }
          name = "string"
          secret = {}
        }
      ]
    }
    zones = [
      "string"
    ]
  })
}

```
