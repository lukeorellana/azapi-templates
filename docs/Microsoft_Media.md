## Microsoft.Media/videoAnalyzers@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers@2021-11-01-preview"
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
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      iotHubs = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
      networkAccessControl = {
        consumption = {
          publicNetworkAccess = "string"
        }
        ingestion = {
          publicNetworkAccess = "string"
        }
        integration = {
          publicNetworkAccess = "string"
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/accessPolicies@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authentication = {
        @type = "string"
        // For remaining properties, see AuthenticationBase objects
      }
      role = "Reader"
    }
  })
}

```

## Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bitrateKbps = int
      description = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      topologyName = "string"
    }
  })
}

```

## Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      topologyName = "string"
    }
  })
}

```

## Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      parameters = [
        {
          default = "string"
          description = "string"
          name = "string"
          type = "string"
        }
      ]
      processors = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see ProcessorNodeBase objects
        }
      ]
      sinks = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see SinkNodeBase objects
        }
      ]
      sources = [
        {
          name = "string"
          @type = "string"
          // For remaining properties, see SourceNodeBase objects
        }
      ]
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/privateEndpointConnections@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archival = {
        retentionPeriod = "string"
      }
      description = "string"
      mediaInfo = {
        segmentLength = "string"
      }
      title = "string"
    }
  })
}

```

## Microsoft.Media/mediaservices@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices@2021-11-01"
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
      encryption = {
        identity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      keyDelivery = {
        accessControl = {
          defaultAction = "string"
          ipAllowList = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
            useSystemAssignedIdentity = bool
          }
          type = "string"
        }
      ]
      storageAuthentication = "string"
    }
  })
}

```

## Microsoft.Media/mediaServices/accountFilters@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/accountFilters@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firstQuality = {
        bitrate = int
      }
      presentationTimeRange = {
        endTimestamp = int
        forceEndTimestamp = bool
        liveBackoffDuration = int
        presentationWindowDuration = int
        startTimestamp = int
        timescale = int
      }
      tracks = [
        {
          trackSelections = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Media/mediaServices/assets@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateId = "string"
      container = "string"
      description = "string"
      storageAccountName = "string"
    }
  })
}

```

## Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firstQuality = {
        bitrate = int
      }
      presentationTimeRange = {
        endTimestamp = int
        forceEndTimestamp = bool
        liveBackoffDuration = int
        presentationWindowDuration = int
        startTimestamp = int
        timescale = int
      }
      tracks = [
        {
          trackSelections = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Media/mediaServices/assets/tracks@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/tracks@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      track = {
        @odata.type = "string"
        // For remaining properties, see TrackBase objects
      }
    }
  })
}

```

## Microsoft.Media/mediaServices/contentKeyPolicies@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/contentKeyPolicies@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      options = [
        {
          configuration = {
            @odata.type = "string"
            // For remaining properties, see ContentKeyPolicyConfiguration objects
          }
          name = "string"
          restriction = {
            @odata.type = "string"
            // For remaining properties, see ContentKeyPolicyRestriction objects
          }
        }
      ]
    }
  })
}

```

## Microsoft.Media/mediaservices/liveEvents@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      description = "string"
      encoding = {
        encodingType = "string"
        keyFrameInterval = "string"
        presetName = "string"
        stretchMode = "string"
      }
      hostnamePrefix = "string"
      input = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        accessToken = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        keyFrameIntervalDuration = "string"
        streamingProtocol = "string"
      }
      preview = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        alternativeMediaId = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        previewLocator = "string"
        streamingPolicyName = "string"
      }
      streamOptions = [
        "string"
      ]
      transcriptions = [
        {
          inputTrackSelection = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
          language = "string"
          outputTranscriptionTrack = {
            trackName = "string"
          }
        }
      ]
      useStaticHostname = bool
    }
  })
}

```

## Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archiveWindowLength = "string"
      assetName = "string"
      description = "string"
      hls = {
        fragmentsPerTsSegment = int
      }
      manifestName = "string"
      outputSnapTime = int
      rewindWindowLength = "string"
    }
  })
}

```

## Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      sinks = [
        {
          inputs = [
            "string"
          ]
          name = "string"
          @odata.type = "string"
          // For remaining properties, see MediaGraphSink objects
        }
      ]
      sources = [
        {
          name = "string"
          @odata.type = "string"
          // For remaining properties, see MediaGraphSource objects
        }
      ]
    }
  })
}

```

## Microsoft.Media/mediaservices/privateEndpointConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/privateEndpointConnections@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/streamingEndpoints@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessControl = {
        akamai = {
          akamaiSignatureHeaderAuthenticationKeyList = [
            {
              base64Key = "string"
              expiration = "string"
              identifier = "string"
            }
          ]
        }
        ip = {
          allow = [
            {
              address = "string"
              name = "string"
              subnetPrefixLength = int
            }
          ]
        }
      }
      availabilitySetName = "string"
      cdnEnabled = bool
      cdnProfile = "string"
      cdnProvider = "string"
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      customHostNames = [
        "string"
      ]
      description = "string"
      maxCacheAge = int
      scaleUnits = int
    }
    sku = {
      capacity = int
    }
  })
}

```

## Microsoft.Media/mediaServices/streamingLocators@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/streamingLocators@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternativeMediaId = "string"
      assetName = "string"
      contentKeys = [
        {
          id = "string"
          labelReferenceInStreamingPolicy = "string"
          value = "string"
        }
      ]
      defaultContentKeyPolicyName = "string"
      endTime = "string"
      filters = [
        "string"
      ]
      startTime = "string"
      streamingLocatorId = "string"
      streamingPolicyName = "string"
    }
  })
}

```

## Microsoft.Media/mediaServices/streamingPolicies@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/streamingPolicies@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      commonEncryptionCbcs = {
        clearKeyEncryptionConfiguration = {
          customKeysAcquisitionUrlTemplate = "string"
        }
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        drm = {
          fairPlay = {
            allowPersistentLicense = bool
            customLicenseAcquisitionUrlTemplate = "string"
          }
          playReady = {
            customLicenseAcquisitionUrlTemplate = "string"
            playReadyCustomAttributes = "string"
          }
          widevine = {
            customLicenseAcquisitionUrlTemplate = "string"
          }
        }
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      commonEncryptionCenc = {
        clearKeyEncryptionConfiguration = {
          customKeysAcquisitionUrlTemplate = "string"
        }
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        drm = {
          playReady = {
            customLicenseAcquisitionUrlTemplate = "string"
            playReadyCustomAttributes = "string"
          }
          widevine = {
            customLicenseAcquisitionUrlTemplate = "string"
          }
        }
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      defaultContentKeyPolicyName = "string"
      envelopeEncryption = {
        clearTracks = [
          {
            trackSelections = [
              {
                operation = "string"
                property = "string"
                value = "string"
              }
            ]
          }
        ]
        contentKeys = {
          defaultKey = {
            label = "string"
            policyName = "string"
          }
          keyToTrackMappings = [
            {
              label = "string"
              policyName = "string"
              tracks = [
                {
                  trackSelections = [
                    {
                      operation = "string"
                      property = "string"
                      value = "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
        customKeyAcquisitionUrlTemplate = "string"
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
      noEncryption = {
        enabledProtocols = {
          dash = bool
          download = bool
          hls = bool
          smoothStreaming = bool
        }
      }
    }
  })
}

```

## Microsoft.Media/mediaServices/transforms@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/transforms@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      outputs = [
        {
          onError = "string"
          preset = {
            @odata.type = "string"
            // For remaining properties, see Preset objects
          }
          relativePriority = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Media/mediaServices/transforms/jobs@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/transforms/jobs@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      correlationData = {}
      description = "string"
      input = {
        @odata.type = "string"
        // For remaining properties, see JobInput objects
      }
      outputs = [
        {
          label = "string"
          presetOverride = {
            @odata.type = "string"
            // For remaining properties, see Preset objects
          }
          @odata.type = "string"
          // For remaining properties, see JobOutput objects
        }
      ]
      priority = "string"
    }
  })
}

```

