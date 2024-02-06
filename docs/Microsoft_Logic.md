## Microsoft.Logic/integrationAccounts@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      integrationServiceEnvironment = {
        id = "string"
      }
      state = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### integrationAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku. | IntegrationAccountSku |
| properties | The integration account properties. | IntegrationAccountProperties |


### IntegrationAccountProperties

| Name | Description | Value |
|-|-|-|
| integrationServiceEnvironment | The integration service environment. | ResourceReference |
| state | The workflow state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


### IntegrationAccountSku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Basic''Free''NotSpecified''Standard' (required) |
## Microsoft.Logic/integrationAccounts/agreements@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/agreements@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      agreementType = "string"
      content = {
        aS2 = {
          receiveAgreement = {
            protocolSettings = {
              acknowledgementConnectionSettings = {
                ignoreCertificateNameMismatch = bool
                keepHttpConnectionAlive = bool
                supportHttpStatusCodeContinue = bool
                unfoldHttpHeaders = bool
              }
              envelopeSettings = {
                autogenerateFileName = bool
                fileNameTemplate = "string"
                messageContentType = "string"
                suspendMessageOnFileNameGenerationError = bool
                transmitFileNameInMimeHeader = bool
              }
              errorSettings = {
                resendIfMDNNotReceived = bool
                suspendDuplicateMessage = bool
              }
              mdnSettings = {
                dispositionNotificationTo = "string"
                mdnText = "string"
                micHashingAlgorithm = "string"
                needMDN = bool
                receiptDeliveryUrl = "string"
                sendInboundMDNToMessageBox = bool
                sendMDNAsynchronously = bool
                signMDN = bool
                signOutboundMDNIfOptional = bool
              }
              messageConnectionSettings = {
                ignoreCertificateNameMismatch = bool
                keepHttpConnectionAlive = bool
                supportHttpStatusCodeContinue = bool
                unfoldHttpHeaders = bool
              }
              securitySettings = {
                enableNRRForInboundDecodedMessages = bool
                enableNRRForInboundEncodedMessages = bool
                enableNRRForInboundMDN = bool
                enableNRRForOutboundDecodedMessages = bool
                enableNRRForOutboundEncodedMessages = bool
                enableNRRForOutboundMDN = bool
                encryptionCertificateName = "string"
                overrideGroupSigningCertificate = bool
                sha2AlgorithmFormat = "string"
                signingCertificateName = "string"
              }
              validationSettings = {
                checkCertificateRevocationListOnReceive = bool
                checkCertificateRevocationListOnSend = bool
                checkDuplicateMessage = bool
                compressMessage = bool
                encryptionAlgorithm = "string"
                encryptMessage = bool
                interchangeDuplicatesValidityDays = int
                overrideMessageProperties = bool
                signingAlgorithm = "string"
                signMessage = bool
              }
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
          sendAgreement = {
            protocolSettings = {
              acknowledgementConnectionSettings = {
                ignoreCertificateNameMismatch = bool
                keepHttpConnectionAlive = bool
                supportHttpStatusCodeContinue = bool
                unfoldHttpHeaders = bool
              }
              envelopeSettings = {
                autogenerateFileName = bool
                fileNameTemplate = "string"
                messageContentType = "string"
                suspendMessageOnFileNameGenerationError = bool
                transmitFileNameInMimeHeader = bool
              }
              errorSettings = {
                resendIfMDNNotReceived = bool
                suspendDuplicateMessage = bool
              }
              mdnSettings = {
                dispositionNotificationTo = "string"
                mdnText = "string"
                micHashingAlgorithm = "string"
                needMDN = bool
                receiptDeliveryUrl = "string"
                sendInboundMDNToMessageBox = bool
                sendMDNAsynchronously = bool
                signMDN = bool
                signOutboundMDNIfOptional = bool
              }
              messageConnectionSettings = {
                ignoreCertificateNameMismatch = bool
                keepHttpConnectionAlive = bool
                supportHttpStatusCodeContinue = bool
                unfoldHttpHeaders = bool
              }
              securitySettings = {
                enableNRRForInboundDecodedMessages = bool
                enableNRRForInboundEncodedMessages = bool
                enableNRRForInboundMDN = bool
                enableNRRForOutboundDecodedMessages = bool
                enableNRRForOutboundEncodedMessages = bool
                enableNRRForOutboundMDN = bool
                encryptionCertificateName = "string"
                overrideGroupSigningCertificate = bool
                sha2AlgorithmFormat = "string"
                signingCertificateName = "string"
              }
              validationSettings = {
                checkCertificateRevocationListOnReceive = bool
                checkCertificateRevocationListOnSend = bool
                checkDuplicateMessage = bool
                compressMessage = bool
                encryptionAlgorithm = "string"
                encryptMessage = bool
                interchangeDuplicatesValidityDays = int
                overrideMessageProperties = bool
                signingAlgorithm = "string"
                signMessage = bool
              }
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
        }
        edifact = {
          receiveAgreement = {
            protocolSettings = {
              acknowledgementSettings = {
                acknowledgementControlNumberLowerBound = int
                acknowledgementControlNumberPrefix = "string"
                acknowledgementControlNumberSuffix = "string"
                acknowledgementControlNumberUpperBound = int
                batchFunctionalAcknowledgements = bool
                batchTechnicalAcknowledgements = bool
                needFunctionalAcknowledgement = bool
                needLoopForValidMessages = bool
                needTechnicalAcknowledgement = bool
                rolloverAcknowledgementControlNumber = bool
                sendSynchronousAcknowledgement = bool
              }
              edifactDelimiterOverrides = [
                {
                  componentSeparator = int
                  dataElementSeparator = int
                  decimalPointIndicator = "string"
                  messageAssociationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  releaseIndicator = int
                  repetitionSeparator = int
                  segmentTerminator = int
                  segmentTerminatorSuffix = "string"
                  targetNamespace = "string"
                }
              ]
              envelopeOverrides = [
                {
                  applicationPassword = "string"
                  associationAssignedCode = "string"
                  controllingAgencyCode = "string"
                  functionalGroupId = "string"
                  groupHeaderMessageRelease = "string"
                  groupHeaderMessageVersion = "string"
                  messageAssociationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  receiverApplicationId = "string"
                  receiverApplicationQualifier = "string"
                  senderApplicationId = "string"
                  senderApplicationQualifier = "string"
                  targetNamespace = "string"
                }
              ]
              envelopeSettings = {
                applicationReferenceId = "string"
                applyDelimiterStringAdvice = bool
                communicationAgreementId = "string"
                createGroupingSegments = bool
                enableDefaultGroupHeaders = bool
                functionalGroupId = "string"
                groupApplicationPassword = "string"
                groupApplicationReceiverId = "string"
                groupApplicationReceiverQualifier = "string"
                groupApplicationSenderId = "string"
                groupApplicationSenderQualifier = "string"
                groupAssociationAssignedCode = "string"
                groupControllingAgencyCode = "string"
                groupControlNumberLowerBound = int
                groupControlNumberPrefix = "string"
                groupControlNumberSuffix = "string"
                groupControlNumberUpperBound = int
                groupMessageRelease = "string"
                groupMessageVersion = "string"
                interchangeControlNumberLowerBound = int
                interchangeControlNumberPrefix = "string"
                interchangeControlNumberSuffix = "string"
                interchangeControlNumberUpperBound = int
                isTestInterchange = bool
                overwriteExistingTransactionSetControlNumber = bool
                processingPriorityCode = "string"
                receiverInternalIdentification = "string"
                receiverInternalSubIdentification = "string"
                receiverReverseRoutingAddress = "string"
                recipientReferencePasswordQualifier = "string"
                recipientReferencePasswordValue = "string"
                rolloverGroupControlNumber = bool
                rolloverInterchangeControlNumber = bool
                rolloverTransactionSetControlNumber = bool
                senderInternalIdentification = "string"
                senderInternalSubIdentification = "string"
                senderReverseRoutingAddress = "string"
                transactionSetControlNumberLowerBound = int
                transactionSetControlNumberPrefix = "string"
                transactionSetControlNumberSuffix = "string"
                transactionSetControlNumberUpperBound = int
              }
              framingSettings = {
                characterEncoding = "string"
                characterSet = "string"
                componentSeparator = int
                dataElementSeparator = int
                decimalPointIndicator = "string"
                protocolVersion = int
                releaseIndicator = int
                repetitionSeparator = int
                segmentTerminator = int
                segmentTerminatorSuffix = "string"
                serviceCodeListDirectoryVersion = "string"
              }
              messageFilter = {
                messageFilterType = "string"
              }
              messageFilterList = [
                {
                  messageId = "string"
                }
              ]
              processingSettings = {
                createEmptyXmlTagsForTrailingSeparators = bool
                maskSecurityInfo = bool
                preserveInterchange = bool
                suspendInterchangeOnError = bool
                useDotAsDecimalSeparator = bool
              }
              schemaReferences = [
                {
                  associationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  schemaName = "string"
                  senderApplicationId = "string"
                  senderApplicationQualifier = "string"
                }
              ]
              validationOverrides = [
                {
                  allowLeadingAndTrailingSpacesAndZeroes = bool
                  enforceCharacterSet = bool
                  messageId = "string"
                  trailingSeparatorPolicy = "string"
                  trimLeadingAndTrailingSpacesAndZeroes = bool
                  validateEDITypes = bool
                  validateXSDTypes = bool
                }
              ]
              validationSettings = {
                allowLeadingAndTrailingSpacesAndZeroes = bool
                checkDuplicateGroupControlNumber = bool
                checkDuplicateInterchangeControlNumber = bool
                checkDuplicateTransactionSetControlNumber = bool
                interchangeControlNumberValidityDays = int
                trailingSeparatorPolicy = "string"
                trimLeadingAndTrailingSpacesAndZeroes = bool
                validateCharacterSet = bool
                validateEDITypes = bool
                validateXSDTypes = bool
              }
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
          sendAgreement = {
            protocolSettings = {
              acknowledgementSettings = {
                acknowledgementControlNumberLowerBound = int
                acknowledgementControlNumberPrefix = "string"
                acknowledgementControlNumberSuffix = "string"
                acknowledgementControlNumberUpperBound = int
                batchFunctionalAcknowledgements = bool
                batchTechnicalAcknowledgements = bool
                needFunctionalAcknowledgement = bool
                needLoopForValidMessages = bool
                needTechnicalAcknowledgement = bool
                rolloverAcknowledgementControlNumber = bool
                sendSynchronousAcknowledgement = bool
              }
              edifactDelimiterOverrides = [
                {
                  componentSeparator = int
                  dataElementSeparator = int
                  decimalPointIndicator = "string"
                  messageAssociationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  releaseIndicator = int
                  repetitionSeparator = int
                  segmentTerminator = int
                  segmentTerminatorSuffix = "string"
                  targetNamespace = "string"
                }
              ]
              envelopeOverrides = [
                {
                  applicationPassword = "string"
                  associationAssignedCode = "string"
                  controllingAgencyCode = "string"
                  functionalGroupId = "string"
                  groupHeaderMessageRelease = "string"
                  groupHeaderMessageVersion = "string"
                  messageAssociationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  receiverApplicationId = "string"
                  receiverApplicationQualifier = "string"
                  senderApplicationId = "string"
                  senderApplicationQualifier = "string"
                  targetNamespace = "string"
                }
              ]
              envelopeSettings = {
                applicationReferenceId = "string"
                applyDelimiterStringAdvice = bool
                communicationAgreementId = "string"
                createGroupingSegments = bool
                enableDefaultGroupHeaders = bool
                functionalGroupId = "string"
                groupApplicationPassword = "string"
                groupApplicationReceiverId = "string"
                groupApplicationReceiverQualifier = "string"
                groupApplicationSenderId = "string"
                groupApplicationSenderQualifier = "string"
                groupAssociationAssignedCode = "string"
                groupControllingAgencyCode = "string"
                groupControlNumberLowerBound = int
                groupControlNumberPrefix = "string"
                groupControlNumberSuffix = "string"
                groupControlNumberUpperBound = int
                groupMessageRelease = "string"
                groupMessageVersion = "string"
                interchangeControlNumberLowerBound = int
                interchangeControlNumberPrefix = "string"
                interchangeControlNumberSuffix = "string"
                interchangeControlNumberUpperBound = int
                isTestInterchange = bool
                overwriteExistingTransactionSetControlNumber = bool
                processingPriorityCode = "string"
                receiverInternalIdentification = "string"
                receiverInternalSubIdentification = "string"
                receiverReverseRoutingAddress = "string"
                recipientReferencePasswordQualifier = "string"
                recipientReferencePasswordValue = "string"
                rolloverGroupControlNumber = bool
                rolloverInterchangeControlNumber = bool
                rolloverTransactionSetControlNumber = bool
                senderInternalIdentification = "string"
                senderInternalSubIdentification = "string"
                senderReverseRoutingAddress = "string"
                transactionSetControlNumberLowerBound = int
                transactionSetControlNumberPrefix = "string"
                transactionSetControlNumberSuffix = "string"
                transactionSetControlNumberUpperBound = int
              }
              framingSettings = {
                characterEncoding = "string"
                characterSet = "string"
                componentSeparator = int
                dataElementSeparator = int
                decimalPointIndicator = "string"
                protocolVersion = int
                releaseIndicator = int
                repetitionSeparator = int
                segmentTerminator = int
                segmentTerminatorSuffix = "string"
                serviceCodeListDirectoryVersion = "string"
              }
              messageFilter = {
                messageFilterType = "string"
              }
              messageFilterList = [
                {
                  messageId = "string"
                }
              ]
              processingSettings = {
                createEmptyXmlTagsForTrailingSeparators = bool
                maskSecurityInfo = bool
                preserveInterchange = bool
                suspendInterchangeOnError = bool
                useDotAsDecimalSeparator = bool
              }
              schemaReferences = [
                {
                  associationAssignedCode = "string"
                  messageId = "string"
                  messageRelease = "string"
                  messageVersion = "string"
                  schemaName = "string"
                  senderApplicationId = "string"
                  senderApplicationQualifier = "string"
                }
              ]
              validationOverrides = [
                {
                  allowLeadingAndTrailingSpacesAndZeroes = bool
                  enforceCharacterSet = bool
                  messageId = "string"
                  trailingSeparatorPolicy = "string"
                  trimLeadingAndTrailingSpacesAndZeroes = bool
                  validateEDITypes = bool
                  validateXSDTypes = bool
                }
              ]
              validationSettings = {
                allowLeadingAndTrailingSpacesAndZeroes = bool
                checkDuplicateGroupControlNumber = bool
                checkDuplicateInterchangeControlNumber = bool
                checkDuplicateTransactionSetControlNumber = bool
                interchangeControlNumberValidityDays = int
                trailingSeparatorPolicy = "string"
                trimLeadingAndTrailingSpacesAndZeroes = bool
                validateCharacterSet = bool
                validateEDITypes = bool
                validateXSDTypes = bool
              }
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
        }
        x12 = {
          receiveAgreement = {
            protocolSettings = {
              acknowledgementSettings = {
                acknowledgementControlNumberLowerBound = int
                acknowledgementControlNumberPrefix = "string"
                acknowledgementControlNumberSuffix = "string"
                acknowledgementControlNumberUpperBound = int
                batchFunctionalAcknowledgements = bool
                batchImplementationAcknowledgements = bool
                batchTechnicalAcknowledgements = bool
                functionalAcknowledgementVersion = "string"
                implementationAcknowledgementVersion = "string"
                needFunctionalAcknowledgement = bool
                needImplementationAcknowledgement = bool
                needLoopForValidMessages = bool
                needTechnicalAcknowledgement = bool
                rolloverAcknowledgementControlNumber = bool
                sendSynchronousAcknowledgement = bool
              }
              envelopeOverrides = [
                {
                  dateFormat = "string"
                  functionalIdentifierCode = "string"
                  headerVersion = "string"
                  messageId = "string"
                  protocolVersion = "string"
                  receiverApplicationId = "string"
                  responsibleAgencyCode = "string"
                  senderApplicationId = "string"
                  targetNamespace = "string"
                  timeFormat = "string"
                }
              ]
              envelopeSettings = {
                controlStandardsId = int
                controlVersionNumber = "string"
                enableDefaultGroupHeaders = bool
                functionalGroupId = "string"
                groupControlNumberLowerBound = int
                groupControlNumberUpperBound = int
                groupHeaderAgencyCode = "string"
                groupHeaderDateFormat = "string"
                groupHeaderTimeFormat = "string"
                groupHeaderVersion = "string"
                interchangeControlNumberLowerBound = int
                interchangeControlNumberUpperBound = int
                overwriteExistingTransactionSetControlNumber = bool
                receiverApplicationId = "string"
                rolloverGroupControlNumber = bool
                rolloverInterchangeControlNumber = bool
                rolloverTransactionSetControlNumber = bool
                senderApplicationId = "string"
                transactionSetControlNumberLowerBound = int
                transactionSetControlNumberPrefix = "string"
                transactionSetControlNumberSuffix = "string"
                transactionSetControlNumberUpperBound = int
                usageIndicator = "string"
                useControlStandardsIdAsRepetitionCharacter = bool
              }
              framingSettings = {
                characterSet = "string"
                componentSeparator = int
                dataElementSeparator = int
                replaceCharacter = int
                replaceSeparatorsInPayload = bool
                segmentTerminator = int
                segmentTerminatorSuffix = "string"
              }
              messageFilter = {
                messageFilterType = "string"
              }
              messageFilterList = [
                {
                  messageId = "string"
                }
              ]
              processingSettings = {
                convertImpliedDecimal = bool
                createEmptyXmlTagsForTrailingSeparators = bool
                maskSecurityInfo = bool
                preserveInterchange = bool
                suspendInterchangeOnError = bool
                useDotAsDecimalSeparator = bool
              }
              schemaReferences = [
                {
                  messageId = "string"
                  schemaName = "string"
                  schemaVersion = "string"
                  senderApplicationId = "string"
                }
              ]
              securitySettings = {
                authorizationQualifier = "string"
                authorizationValue = "string"
                passwordValue = "string"
                securityQualifier = "string"
              }
              validationOverrides = [
                {
                  allowLeadingAndTrailingSpacesAndZeroes = bool
                  messageId = "string"
                  trailingSeparatorPolicy = "string"
                  trimLeadingAndTrailingSpacesAndZeroes = bool
                  validateCharacterSet = bool
                  validateEDITypes = bool
                  validateXSDTypes = bool
                }
              ]
              validationSettings = {
                allowLeadingAndTrailingSpacesAndZeroes = bool
                checkDuplicateGroupControlNumber = bool
                checkDuplicateInterchangeControlNumber = bool
                checkDuplicateTransactionSetControlNumber = bool
                interchangeControlNumberValidityDays = int
                trailingSeparatorPolicy = "string"
                trimLeadingAndTrailingSpacesAndZeroes = bool
                validateCharacterSet = bool
                validateEDITypes = bool
                validateXSDTypes = bool
              }
              x12DelimiterOverrides = [
                {
                  componentSeparator = int
                  dataElementSeparator = int
                  messageId = "string"
                  protocolVersion = "string"
                  replaceCharacter = int
                  replaceSeparatorsInPayload = bool
                  segmentTerminator = int
                  segmentTerminatorSuffix = "string"
                  targetNamespace = "string"
                }
              ]
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
          sendAgreement = {
            protocolSettings = {
              acknowledgementSettings = {
                acknowledgementControlNumberLowerBound = int
                acknowledgementControlNumberPrefix = "string"
                acknowledgementControlNumberSuffix = "string"
                acknowledgementControlNumberUpperBound = int
                batchFunctionalAcknowledgements = bool
                batchImplementationAcknowledgements = bool
                batchTechnicalAcknowledgements = bool
                functionalAcknowledgementVersion = "string"
                implementationAcknowledgementVersion = "string"
                needFunctionalAcknowledgement = bool
                needImplementationAcknowledgement = bool
                needLoopForValidMessages = bool
                needTechnicalAcknowledgement = bool
                rolloverAcknowledgementControlNumber = bool
                sendSynchronousAcknowledgement = bool
              }
              envelopeOverrides = [
                {
                  dateFormat = "string"
                  functionalIdentifierCode = "string"
                  headerVersion = "string"
                  messageId = "string"
                  protocolVersion = "string"
                  receiverApplicationId = "string"
                  responsibleAgencyCode = "string"
                  senderApplicationId = "string"
                  targetNamespace = "string"
                  timeFormat = "string"
                }
              ]
              envelopeSettings = {
                controlStandardsId = int
                controlVersionNumber = "string"
                enableDefaultGroupHeaders = bool
                functionalGroupId = "string"
                groupControlNumberLowerBound = int
                groupControlNumberUpperBound = int
                groupHeaderAgencyCode = "string"
                groupHeaderDateFormat = "string"
                groupHeaderTimeFormat = "string"
                groupHeaderVersion = "string"
                interchangeControlNumberLowerBound = int
                interchangeControlNumberUpperBound = int
                overwriteExistingTransactionSetControlNumber = bool
                receiverApplicationId = "string"
                rolloverGroupControlNumber = bool
                rolloverInterchangeControlNumber = bool
                rolloverTransactionSetControlNumber = bool
                senderApplicationId = "string"
                transactionSetControlNumberLowerBound = int
                transactionSetControlNumberPrefix = "string"
                transactionSetControlNumberSuffix = "string"
                transactionSetControlNumberUpperBound = int
                usageIndicator = "string"
                useControlStandardsIdAsRepetitionCharacter = bool
              }
              framingSettings = {
                characterSet = "string"
                componentSeparator = int
                dataElementSeparator = int
                replaceCharacter = int
                replaceSeparatorsInPayload = bool
                segmentTerminator = int
                segmentTerminatorSuffix = "string"
              }
              messageFilter = {
                messageFilterType = "string"
              }
              messageFilterList = [
                {
                  messageId = "string"
                }
              ]
              processingSettings = {
                convertImpliedDecimal = bool
                createEmptyXmlTagsForTrailingSeparators = bool
                maskSecurityInfo = bool
                preserveInterchange = bool
                suspendInterchangeOnError = bool
                useDotAsDecimalSeparator = bool
              }
              schemaReferences = [
                {
                  messageId = "string"
                  schemaName = "string"
                  schemaVersion = "string"
                  senderApplicationId = "string"
                }
              ]
              securitySettings = {
                authorizationQualifier = "string"
                authorizationValue = "string"
                passwordValue = "string"
                securityQualifier = "string"
              }
              validationOverrides = [
                {
                  allowLeadingAndTrailingSpacesAndZeroes = bool
                  messageId = "string"
                  trailingSeparatorPolicy = "string"
                  trimLeadingAndTrailingSpacesAndZeroes = bool
                  validateCharacterSet = bool
                  validateEDITypes = bool
                  validateXSDTypes = bool
                }
              ]
              validationSettings = {
                allowLeadingAndTrailingSpacesAndZeroes = bool
                checkDuplicateGroupControlNumber = bool
                checkDuplicateInterchangeControlNumber = bool
                checkDuplicateTransactionSetControlNumber = bool
                interchangeControlNumberValidityDays = int
                trailingSeparatorPolicy = "string"
                trimLeadingAndTrailingSpacesAndZeroes = bool
                validateCharacterSet = bool
                validateEDITypes = bool
                validateXSDTypes = bool
              }
              x12DelimiterOverrides = [
                {
                  componentSeparator = int
                  dataElementSeparator = int
                  messageId = "string"
                  protocolVersion = "string"
                  replaceCharacter = int
                  replaceSeparatorsInPayload = bool
                  segmentTerminator = int
                  segmentTerminatorSuffix = "string"
                  targetNamespace = "string"
                }
              ]
            }
            receiverBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
            senderBusinessIdentity = {
              qualifier = "string"
              value = "string"
            }
          }
        }
      }
      guestIdentity = {
        qualifier = "string"
        value = "string"
      }
      guestPartner = "string"
      hostIdentity = {
        qualifier = "string"
        value = "string"
      }
      hostPartner = "string"
    }
  })
}

```

### integrationAccounts/agreements

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account agreement properties. | IntegrationAccountAgreementProperties(required) |


### IntegrationAccountAgreementProperties

| Name | Description | Value |
|-|-|-|
| agreementType | The agreement type. | 'AS2''Edifact''NotSpecified''X12' (required) |
| content | The agreement content. | AgreementContent(required) |
| guestIdentity | The business identity of the guest partner. | BusinessIdentity(required) |
| guestPartner | The integration account partner that is set as guest partner for this agreement. | string (required) |
| hostIdentity | The business identity of the host partner. | BusinessIdentity(required) |
| hostPartner | The integration account partner that is set as host partner for this agreement. | string (required) |
| metadata | The metadata. | For Bicep, you can use theany()function. |


### AgreementContent

| Name | Description | Value |
|-|-|-|
| aS2 | The AS2 agreement content. | AS2AgreementContent |
| edifact | The EDIFACT agreement content. | EdifactAgreementContent |
| x12 | The X12 agreement content. | X12AgreementContent |


### AS2AgreementContent

| Name | Description | Value |
|-|-|-|
| receiveAgreement | The AS2 one-way receive agreement. | AS2OneWayAgreement(required) |
| sendAgreement | The AS2 one-way send agreement. | AS2OneWayAgreement(required) |


### AS2OneWayAgreement

| Name | Description | Value |
|-|-|-|
| protocolSettings | The AS2 protocol settings. | AS2ProtocolSettings(required) |
| receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
| senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |


### AS2ProtocolSettings

| Name | Description | Value |
|-|-|-|
| acknowledgementConnectionSettings | The acknowledgement connection settings. | AS2AcknowledgementConnectionSettings(required) |
| envelopeSettings | The envelope settings. | AS2EnvelopeSettings(required) |
| errorSettings | The error settings. | AS2ErrorSettings(required) |
| mdnSettings | The MDN settings. | AS2MdnSettings(required) |
| messageConnectionSettings | The message connection settings. | AS2MessageConnectionSettings(required) |
| securitySettings | The security settings. | AS2SecuritySettings(required) |
| validationSettings | The validation settings. | AS2ValidationSettings(required) |


### AS2AcknowledgementConnectionSettings

| Name | Description | Value |
|-|-|-|
| ignoreCertificateNameMismatch | Indicates whether to ignore mismatch in certificate name. | bool (required) |
| keepHttpConnectionAlive | Indicates whether to keep the connection alive. | bool (required) |
| supportHttpStatusCodeContinue | Indicates whether to support HTTP status code 'CONTINUE'. | bool (required) |
| unfoldHttpHeaders | Indicates whether to unfold the HTTP headers. | bool (required) |


### AS2EnvelopeSettings

| Name | Description | Value |
|-|-|-|
| autogenerateFileName | The value indicating whether to auto generate file name. | bool (required) |
| fileNameTemplate | The template for file name. | string (required) |
| messageContentType | The message content type. | string (required) |
| suspendMessageOnFileNameGenerationError | The value indicating whether to suspend message on file name generation error. | bool (required) |
| transmitFileNameInMimeHeader | The value indicating whether to transmit file name in mime header. | bool (required) |


### AS2ErrorSettings

| Name | Description | Value |
|-|-|-|
| resendIfMDNNotReceived | The value indicating whether to resend message If MDN is not received. | bool (required) |
| suspendDuplicateMessage | The value indicating whether to suspend duplicate message. | bool (required) |


### AS2MdnSettings

| Name | Description | Value |
|-|-|-|
| dispositionNotificationTo | The disposition notification to header value. | string |
| mdnText | The MDN text. | string |
| micHashingAlgorithm | The signing or hashing algorithm. | 'MD5''None''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512' (required) |
| needMDN | The value indicating whether to send or request a MDN. | bool (required) |
| receiptDeliveryUrl | The receipt delivery URL. | string |
| sendInboundMDNToMessageBox | The value indicating whether to send inbound MDN to message box. | bool (required) |
| sendMDNAsynchronously | The value indicating whether to send the asynchronous MDN. | bool (required) |
| signMDN | The value indicating whether the MDN needs to be signed or not. | bool (required) |
| signOutboundMDNIfOptional | The value indicating whether to sign the outbound MDN if optional. | bool (required) |


### AS2MessageConnectionSettings

| Name | Description | Value |
|-|-|-|
| ignoreCertificateNameMismatch | The value indicating whether to ignore mismatch in certificate name. | bool (required) |
| keepHttpConnectionAlive | The value indicating whether to keep the connection alive. | bool (required) |
| supportHttpStatusCodeContinue | The value indicating whether to support HTTP status code 'CONTINUE'. | bool (required) |
| unfoldHttpHeaders | The value indicating whether to unfold the HTTP headers. | bool (required) |


### AS2SecuritySettings

| Name | Description | Value |
|-|-|-|
| enableNRRForInboundDecodedMessages | The value indicating whether to enable NRR for inbound decoded messages. | bool (required) |
| enableNRRForInboundEncodedMessages | The value indicating whether to enable NRR for inbound encoded messages. | bool (required) |
| enableNRRForInboundMDN | The value indicating whether to enable NRR for inbound MDN. | bool (required) |
| enableNRRForOutboundDecodedMessages | The value indicating whether to enable NRR for outbound decoded messages. | bool (required) |
| enableNRRForOutboundEncodedMessages | The value indicating whether to enable NRR for outbound encoded messages. | bool (required) |
| enableNRRForOutboundMDN | The value indicating whether to enable NRR for outbound MDN. | bool (required) |
| encryptionCertificateName | The name of the encryption certificate. | string |
| overrideGroupSigningCertificate | The value indicating whether to send or request a MDN. | bool (required) |
| sha2AlgorithmFormat | The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize. | string |
| signingCertificateName | The name of the signing certificate. | string |


### AS2ValidationSettings

| Name | Description | Value |
|-|-|-|
| checkCertificateRevocationListOnReceive | The value indicating whether to check for certificate revocation list on receive. | bool (required) |
| checkCertificateRevocationListOnSend | The value indicating whether to check for certificate revocation list on send. | bool (required) |
| checkDuplicateMessage | The value indicating whether to check for duplicate message. | bool (required) |
| compressMessage | The value indicating whether the message has to be compressed. | bool (required) |
| encryptionAlgorithm | The encryption algorithm. | 'AES128''AES192''AES256''DES3''None''NotSpecified''RC2' (required) |
| encryptMessage | The value indicating whether the message has to be encrypted. | bool (required) |
| interchangeDuplicatesValidityDays | The number of days to look back for duplicate interchange. | int (required) |
| overrideMessageProperties | The value indicating whether to override incoming message properties with those in agreement. | bool (required) |
| signingAlgorithm | The signing algorithm. | 'Default''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512' |
| signMessage | The value indicating whether the message has to be signed. | bool (required) |


### BusinessIdentity

| Name | Description | Value |
|-|-|-|
| qualifier | The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32 | string (required) |
| value | The user defined business identity value. | string (required) |


### EdifactAgreementContent

| Name | Description | Value |
|-|-|-|
| receiveAgreement | The EDIFACT one-way receive agreement. | EdifactOneWayAgreement(required) |
| sendAgreement | The EDIFACT one-way send agreement. | EdifactOneWayAgreement(required) |


### EdifactOneWayAgreement

| Name | Description | Value |
|-|-|-|
| protocolSettings | The EDIFACT protocol settings. | EdifactProtocolSettings(required) |
| receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
| senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |


### EdifactProtocolSettings

| Name | Description | Value |
|-|-|-|
| acknowledgementSettings | The EDIFACT acknowledgement settings. | EdifactAcknowledgementSettings(required) |
| edifactDelimiterOverrides | The EDIFACT delimiter override settings. | EdifactDelimiterOverride[] |
| envelopeOverrides | The EDIFACT envelope override settings. | EdifactEnvelopeOverride[] |
| envelopeSettings | The EDIFACT envelope settings. | EdifactEnvelopeSettings(required) |
| framingSettings | The EDIFACT framing settings. | EdifactFramingSettings(required) |
| messageFilter | The EDIFACT message filter. | EdifactMessageFilter(required) |
| messageFilterList | The EDIFACT message filter list. | EdifactMessageIdentifier[] |
| processingSettings | The EDIFACT processing Settings. | EdifactProcessingSettings(required) |
| schemaReferences | The EDIFACT schema references. | EdifactSchemaReference[] (required) |
| validationOverrides | The EDIFACT validation override settings. | EdifactValidationOverride[] |
| validationSettings | The EDIFACT validation settings. | EdifactValidationSettings(required) |


### EdifactAcknowledgementSettings

| Name | Description | Value |
|-|-|-|
| acknowledgementControlNumberLowerBound | The acknowledgement control number lower bound. | int (required) |
| acknowledgementControlNumberPrefix | The acknowledgement control number prefix. | string |
| acknowledgementControlNumberSuffix | The acknowledgement control number suffix. | string |
| acknowledgementControlNumberUpperBound | The acknowledgement control number upper bound. | int (required) |
| batchFunctionalAcknowledgements | The value indicating whether to batch functional acknowledgements. | bool (required) |
| batchTechnicalAcknowledgements | The value indicating whether to batch the technical acknowledgements. | bool (required) |
| needFunctionalAcknowledgement | The value indicating whether functional acknowledgement is needed. | bool (required) |
| needLoopForValidMessages | The value indicating whether a loop is needed for valid messages. | bool (required) |
| needTechnicalAcknowledgement | The value indicating whether technical acknowledgement is needed. | bool (required) |
| rolloverAcknowledgementControlNumber | The value indicating whether to rollover acknowledgement control number. | bool (required) |
| sendSynchronousAcknowledgement | The value indicating whether to send synchronous acknowledgement. | bool (required) |


### EdifactDelimiterOverride

| Name | Description | Value |
|-|-|-|
| componentSeparator | The component separator. | int (required) |
| dataElementSeparator | The data element separator. | int (required) |
| decimalPointIndicator | The decimal point indicator. | 'Comma''Decimal''NotSpecified' (required) |
| messageAssociationAssignedCode | The message association assigned code. | string |
| messageId | The message id. | string |
| messageRelease | The message release. | string |
| messageVersion | The message version. | string |
| releaseIndicator | The release indicator. | int (required) |
| repetitionSeparator | The repetition separator. | int (required) |
| segmentTerminator | The segment terminator. | int (required) |
| segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
| targetNamespace | The target namespace on which this delimiter settings has to be applied. | string |


### EdifactEnvelopeOverride

| Name | Description | Value |
|-|-|-|
| applicationPassword | The application password. | string |
| associationAssignedCode | The association assigned code. | string |
| controllingAgencyCode | The controlling agency code. | string |
| functionalGroupId | The functional group id. | string |
| groupHeaderMessageRelease | The group header message release. | string |
| groupHeaderMessageVersion | The group header message version. | string |
| messageAssociationAssignedCode | The message association assigned code. | string |
| messageId | The message id on which this envelope settings has to be applied. | string |
| messageRelease | The message release version on which this envelope settings has to be applied. | string |
| messageVersion | The message version on which this envelope settings has to be applied. | string |
| receiverApplicationId | The receiver application id. | string |
| receiverApplicationQualifier | The receiver application qualifier. | string |
| senderApplicationId | The sender application id. | string |
| senderApplicationQualifier | The sender application qualifier. | string |
| targetNamespace | The target namespace on which this envelope settings has to be applied. | string |


### EdifactEnvelopeSettings

| Name | Description | Value |
|-|-|-|
| applicationReferenceId | The application reference id. | string |
| applyDelimiterStringAdvice | The value indicating whether to apply delimiter string advice. | bool (required) |
| communicationAgreementId | The communication agreement id. | string |
| createGroupingSegments | The value indicating whether to create grouping segments. | bool (required) |
| enableDefaultGroupHeaders | The value indicating whether to enable default group headers. | bool (required) |
| functionalGroupId | The functional group id. | string |
| groupApplicationPassword | The group application password. | string |
| groupApplicationReceiverId | The group application receiver id. | string |
| groupApplicationReceiverQualifier | The group application receiver qualifier. | string |
| groupApplicationSenderId | The group application sender id. | string |
| groupApplicationSenderQualifier | The group application sender qualifier. | string |
| groupAssociationAssignedCode | The group association assigned code. | string |
| groupControllingAgencyCode | The group controlling agency code. | string |
| groupControlNumberLowerBound | The group control number lower bound. | int (required) |
| groupControlNumberPrefix | The group control number prefix. | string |
| groupControlNumberSuffix | The group control number suffix. | string |
| groupControlNumberUpperBound | The group control number upper bound. | int (required) |
| groupMessageRelease | The group message release. | string |
| groupMessageVersion | The group message version. | string |
| interchangeControlNumberLowerBound | The interchange control number lower bound. | int (required) |
| interchangeControlNumberPrefix | The interchange control number prefix. | string |
| interchangeControlNumberSuffix | The interchange control number suffix. | string |
| interchangeControlNumberUpperBound | The interchange control number upper bound. | int (required) |
| isTestInterchange | The value indicating whether the message is a test interchange. | bool (required) |
| overwriteExistingTransactionSetControlNumber | The value indicating whether to overwrite existing transaction set control number. | bool (required) |
| processingPriorityCode | The processing priority code. | string |
| receiverInternalIdentification | The receiver internal identification. | string |
| receiverInternalSubIdentification | The receiver internal sub identification. | string |
| receiverReverseRoutingAddress | The receiver reverse routing address. | string |
| recipientReferencePasswordQualifier | The recipient reference password qualifier. | string |
| recipientReferencePasswordValue | The recipient reference password value. | string |
| rolloverGroupControlNumber | The value indicating whether to rollover group control number. | bool (required) |
| rolloverInterchangeControlNumber | The value indicating whether to rollover interchange control number. | bool (required) |
| rolloverTransactionSetControlNumber | The value indicating whether to rollover transaction set control number. | bool (required) |
| senderInternalIdentification | The sender internal identification. | string |
| senderInternalSubIdentification | The sender internal sub identification. | string |
| senderReverseRoutingAddress | The sender reverse routing address. | string |
| transactionSetControlNumberLowerBound | The transaction set control number lower bound. | int (required) |
| transactionSetControlNumberPrefix | The transaction set control number prefix. | string |
| transactionSetControlNumberSuffix | The transaction set control number suffix. | string |
| transactionSetControlNumberUpperBound | The transaction set control number upper bound. | int (required) |


### EdifactFramingSettings

| Name | Description | Value |
|-|-|-|
| characterEncoding | The character encoding. | string |
| characterSet | The EDIFACT frame setting characterSet. | 'KECA''NotSpecified''UNOA''UNOB''UNOC''UNOD''UNOE''UNOF''UNOG''UNOH''UNOI''UNOJ''UNOK''UNOX''UNOY' (required) |
| componentSeparator | The component separator. | int (required) |
| dataElementSeparator | The data element separator. | int (required) |
| decimalPointIndicator | The EDIFACT frame setting decimal indicator. | 'Comma''Decimal''NotSpecified' (required) |
| protocolVersion | The protocol version. | int (required) |
| releaseIndicator | The release indicator. | int (required) |
| repetitionSeparator | The repetition separator. | int (required) |
| segmentTerminator | The segment terminator. | int (required) |
| segmentTerminatorSuffix | The EDIFACT frame setting segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
| serviceCodeListDirectoryVersion | The service code list directory version. | string |


### EdifactMessageFilter

| Name | Description | Value |
|-|-|-|
| messageFilterType | The message filter type. | 'Exclude''Include''NotSpecified' (required) |


### EdifactMessageIdentifier

| Name | Description | Value |
|-|-|-|
| messageId | The message id on which this envelope settings has to be applied. | string (required) |


### EdifactProcessingSettings

| Name | Description | Value |
|-|-|-|
| createEmptyXmlTagsForTrailingSeparators | The value indicating whether to create empty xml tags for trailing separators. | bool (required) |
| maskSecurityInfo | The value indicating whether to mask security information. | bool (required) |
| preserveInterchange | The value indicating whether to preserve interchange. | bool (required) |
| suspendInterchangeOnError | The value indicating whether to suspend interchange on error. | bool (required) |
| useDotAsDecimalSeparator | The value indicating whether to use dot as decimal separator. | bool (required) |


### EdifactSchemaReference

| Name | Description | Value |
|-|-|-|
| associationAssignedCode | The association assigned code. | string |
| messageId | The message id. | string (required) |
| messageRelease | The message release version. | string (required) |
| messageVersion | The message version. | string (required) |
| schemaName | The schema name. | string (required) |
| senderApplicationId | The sender application id. | string |
| senderApplicationQualifier | The sender application qualifier. | string |


### EdifactValidationOverride

| Name | Description | Value |
|-|-|-|
| allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
| enforceCharacterSet | The value indicating whether to validate character Set. | bool (required) |
| messageId | The message id on which the validation settings has to be applied. | string (required) |
| trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
| trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
| validateEDITypes | The value indicating whether to validate EDI types. | bool (required) |
| validateXSDTypes | The value indicating whether to validate XSD types. | bool (required) |


### EdifactValidationSettings

| Name | Description | Value |
|-|-|-|
| allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
| checkDuplicateGroupControlNumber | The value indicating whether to check for duplicate group control number. | bool (required) |
| checkDuplicateInterchangeControlNumber | The value indicating whether to check for duplicate interchange control number. | bool (required) |
| checkDuplicateTransactionSetControlNumber | The value indicating whether to check for duplicate transaction set control number. | bool (required) |
| interchangeControlNumberValidityDays | The validity period of interchange control number. | int (required) |
| trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
| trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
| validateCharacterSet | The value indicating whether to validate character set in the message. | bool (required) |
| validateEDITypes | The value indicating whether to Whether to validate EDI types. | bool (required) |
| validateXSDTypes | The value indicating whether to Whether to validate XSD types. | bool (required) |


### X12AgreementContent

| Name | Description | Value |
|-|-|-|
| receiveAgreement | The X12 one-way receive agreement. | X12OneWayAgreement(required) |
| sendAgreement | The X12 one-way send agreement. | X12OneWayAgreement(required) |


### X12OneWayAgreement

| Name | Description | Value |
|-|-|-|
| protocolSettings | The X12 protocol settings. | X12ProtocolSettings(required) |
| receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
| senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |


### X12ProtocolSettings

| Name | Description | Value |
|-|-|-|
| acknowledgementSettings | The X12 acknowledgment settings. | X12AcknowledgementSettings(required) |
| envelopeOverrides | The X12 envelope override settings. | X12EnvelopeOverride[] |
| envelopeSettings | The X12 envelope settings. | X12EnvelopeSettings(required) |
| framingSettings | The X12 framing settings. | X12FramingSettings(required) |
| messageFilter | The X12 message filter. | X12MessageFilter(required) |
| messageFilterList | The X12 message filter list. | X12MessageIdentifier[] |
| processingSettings | The X12 processing settings. | X12ProcessingSettings(required) |
| schemaReferences | The X12 schema references. | X12SchemaReference[] (required) |
| securitySettings | The X12 security settings. | X12SecuritySettings(required) |
| validationOverrides | The X12 validation override settings. | X12ValidationOverride[] |
| validationSettings | The X12 validation settings. | X12ValidationSettings(required) |
| x12DelimiterOverrides | The X12 delimiter override settings. | X12DelimiterOverrides[] |


### X12AcknowledgementSettings

| Name | Description | Value |
|-|-|-|
| acknowledgementControlNumberLowerBound | The acknowledgement control number lower bound. | int (required) |
| acknowledgementControlNumberPrefix | The acknowledgement control number prefix. | string |
| acknowledgementControlNumberSuffix | The acknowledgement control number suffix. | string |
| acknowledgementControlNumberUpperBound | The acknowledgement control number upper bound. | int (required) |
| batchFunctionalAcknowledgements | The value indicating whether to batch functional acknowledgements. | bool (required) |
| batchImplementationAcknowledgements | The value indicating whether to batch implementation acknowledgements. | bool (required) |
| batchTechnicalAcknowledgements | The value indicating whether to batch the technical acknowledgements. | bool (required) |
| functionalAcknowledgementVersion | The functional acknowledgement version. | string |
| implementationAcknowledgementVersion | The implementation acknowledgement version. | string |
| needFunctionalAcknowledgement | The value indicating whether functional acknowledgement is needed. | bool (required) |
| needImplementationAcknowledgement | The value indicating whether implementation acknowledgement is needed. | bool (required) |
| needLoopForValidMessages | The value indicating whether a loop is needed for valid messages. | bool (required) |
| needTechnicalAcknowledgement | The value indicating whether technical acknowledgement is needed. | bool (required) |
| rolloverAcknowledgementControlNumber | The value indicating whether to rollover acknowledgement control number. | bool (required) |
| sendSynchronousAcknowledgement | The value indicating whether to send synchronous acknowledgement. | bool (required) |


### X12EnvelopeOverride

| Name | Description | Value |
|-|-|-|
| dateFormat | The date format. | 'CCYYMMDD''NotSpecified''YYMMDD' (required) |
| functionalIdentifierCode | The functional identifier code. | string |
| headerVersion | The header version. | string (required) |
| messageId | The message id on which this envelope settings has to be applied. | string (required) |
| protocolVersion | The protocol version on which this envelope settings has to be applied. | string (required) |
| receiverApplicationId | The receiver application id. | string (required) |
| responsibleAgencyCode | The responsible agency code. | string (required) |
| senderApplicationId | The sender application id. | string (required) |
| targetNamespace | The target namespace on which this envelope settings has to be applied. | string (required) |
| timeFormat | The time format. | 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified' (required) |


### X12EnvelopeSettings

| Name | Description | Value |
|-|-|-|
| controlStandardsId | The controls standards id. | int (required) |
| controlVersionNumber | The control version number. | string (required) |
| enableDefaultGroupHeaders | The value indicating whether to enable default group headers. | bool (required) |
| functionalGroupId | The functional group id. | string |
| groupControlNumberLowerBound | The group control number lower bound. | int (required) |
| groupControlNumberUpperBound | The group control number upper bound. | int (required) |
| groupHeaderAgencyCode | The group header agency code. | string (required) |
| groupHeaderDateFormat | The group header date format. | 'CCYYMMDD''NotSpecified''YYMMDD' (required) |
| groupHeaderTimeFormat | The group header time format. | 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified' (required) |
| groupHeaderVersion | The group header version. | string (required) |
| interchangeControlNumberLowerBound | The interchange  control number lower bound. | int (required) |
| interchangeControlNumberUpperBound | The interchange  control number upper bound. | int (required) |
| overwriteExistingTransactionSetControlNumber | The value indicating whether to overwrite existing transaction set control number. | bool (required) |
| receiverApplicationId | The receiver application id. | string (required) |
| rolloverGroupControlNumber | The value indicating whether to rollover group control number. | bool (required) |
| rolloverInterchangeControlNumber | The value indicating whether to rollover interchange control number. | bool (required) |
| rolloverTransactionSetControlNumber | The value indicating whether to rollover transaction set control number. | bool (required) |
| senderApplicationId | The sender application id. | string (required) |
| transactionSetControlNumberLowerBound | The transaction set control number lower bound. | int (required) |
| transactionSetControlNumberPrefix | The transaction set control number prefix. | string |
| transactionSetControlNumberSuffix | The transaction set control number suffix. | string |
| transactionSetControlNumberUpperBound | The transaction set control number upper bound. | int (required) |
| usageIndicator | The usage indicator. | 'Information''NotSpecified''Production''Test' (required) |
| useControlStandardsIdAsRepetitionCharacter | The value indicating whether to use control standards id as repetition character. | bool (required) |


### X12FramingSettings

| Name | Description | Value |
|-|-|-|
| characterSet | The X12 character set. | 'Basic''Extended''NotSpecified''UTF8' (required) |
| componentSeparator | The component separator. | int (required) |
| dataElementSeparator | The data element separator. | int (required) |
| replaceCharacter | The replacement character. | int (required) |
| replaceSeparatorsInPayload | The value indicating whether to replace separators in payload. | bool (required) |
| segmentTerminator | The segment terminator. | int (required) |
| segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |


### X12MessageFilter

| Name | Description | Value |
|-|-|-|
| messageFilterType | The message filter type. | 'Exclude''Include''NotSpecified' (required) |


### X12MessageIdentifier

| Name | Description | Value |
|-|-|-|
| messageId | The message id. | string (required) |


### X12ProcessingSettings

| Name | Description | Value |
|-|-|-|
| convertImpliedDecimal | The value indicating whether to convert numerical type to implied decimal. | bool (required) |
| createEmptyXmlTagsForTrailingSeparators | The value indicating whether to create empty xml tags for trailing separators. | bool (required) |
| maskSecurityInfo | The value indicating whether to mask security information. | bool (required) |
| preserveInterchange | The value indicating whether to preserve interchange. | bool (required) |
| suspendInterchangeOnError | The value indicating whether to suspend interchange on error. | bool (required) |
| useDotAsDecimalSeparator | The value indicating whether to use dot as decimal separator. | bool (required) |


### X12SchemaReference

| Name | Description | Value |
|-|-|-|
| messageId | The message id. | string (required) |
| schemaName | The schema name. | string (required) |
| schemaVersion | The schema version. | string (required) |
| senderApplicationId | The sender application id. | string |


### X12SecuritySettings

| Name | Description | Value |
|-|-|-|
| authorizationQualifier | The authorization qualifier. | string (required) |
| authorizationValue | The authorization value. | string |
| passwordValue | The password value. | string |
| securityQualifier | The security qualifier. | string (required) |


### X12ValidationOverride

| Name | Description | Value |
|-|-|-|
| allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
| messageId | The message id on which the validation settings has to be applied. | string (required) |
| trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
| trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
| validateCharacterSet | The value indicating whether to validate character Set. | bool (required) |
| validateEDITypes | The value indicating whether to validate EDI types. | bool (required) |
| validateXSDTypes | The value indicating whether to validate XSD types. | bool (required) |


### X12ValidationSettings

| Name | Description | Value |
|-|-|-|
| allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
| checkDuplicateGroupControlNumber | The value indicating whether to check for duplicate group control number. | bool (required) |
| checkDuplicateInterchangeControlNumber | The value indicating whether to check for duplicate interchange control number. | bool (required) |
| checkDuplicateTransactionSetControlNumber | The value indicating whether to check for duplicate transaction set control number. | bool (required) |
| interchangeControlNumberValidityDays | The validity period of interchange control number. | int (required) |
| trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
| trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
| validateCharacterSet | The value indicating whether to validate character set in the message. | bool (required) |
| validateEDITypes | The value indicating whether to Whether to validate EDI types. | bool (required) |
| validateXSDTypes | The value indicating whether to Whether to validate XSD types. | bool (required) |


### X12DelimiterOverrides

| Name | Description | Value |
|-|-|-|
| componentSeparator | The component separator. | int (required) |
| dataElementSeparator | The data element separator. | int (required) |
| messageId | The message id. | string |
| protocolVersion | The protocol version. | string |
| replaceCharacter | The replacement character. | int (required) |
| replaceSeparatorsInPayload | The value indicating whether to replace separators in payload. | bool (required) |
| segmentTerminator | The segment terminator. | int (required) |
| segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
| targetNamespace | The target namespace on which this delimiter settings has to be applied. | string |
## Microsoft.Logic/integrationAccounts/assemblies@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/assemblies@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assemblyCulture = "string"
      assemblyName = "string"
      assemblyPublicKeyToken = "string"
      assemblyVersion = "string"
      changedTime = "string"
      contentLink = {
        uri = "string"
      }
      contentType = "string"
      createdTime = "string"
    }
  })
}

```

### integrationAccounts/assemblies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The assembly properties. | AssemblyProperties(required) |


### AssemblyProperties

| Name | Description | Value |
|-|-|-|
| assemblyCulture | The assembly culture. | string |
| assemblyName | The assembly name. | string (required) |
| assemblyPublicKeyToken | The assembly public key token. | string |
| assemblyVersion | The assembly version. | string |
| changedTime | The artifact changed time. | string |
| content | Anything | For Bicep, you can use theany()function. |
| contentLink | The content link. | ContentLink |
| contentType | The content type. | string |
| createdTime | The artifact creation time. | string |
| metadata | Anything | For Bicep, you can use theany()function. |


### ContentLink

| Name | Description | Value |
|-|-|-|
| uri | The content link URI. | string |
## Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      batchGroupName = "string"
      changedTime = "string"
      createdTime = "string"
      releaseCriteria = {
        batchSize = int
        messageCount = int
        recurrence = {
          endTime = "string"
          frequency = "string"
          interval = int
          schedule = {
            hours = [
              int
            ]
            minutes = [
              int
            ]
            monthDays = [
              int
            ]
            monthlyOccurrences = [
              {
                day = "string"
                occurrence = int
              }
            ]
            weekDays = [
              "string"
            ]
          }
          startTime = "string"
          timeZone = "string"
        }
      }
    }
  })
}

```

### integrationAccounts/batchConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-20Valid characters:Alphanumerics. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The batch configuration properties. | BatchConfigurationProperties(required) |


### BatchConfigurationProperties

| Name | Description | Value |
|-|-|-|
| batchGroupName | The name of the batch group. | string (required) |
| changedTime | The artifact changed time. | string |
| createdTime | The artifact creation time. | string |
| metadata | Anything | For Bicep, you can use theany()function. |
| releaseCriteria | The batch release criteria. | BatchReleaseCriteria(required) |


### BatchReleaseCriteria

| Name | Description | Value |
|-|-|-|
| batchSize | The batch size in bytes. | int |
| messageCount | The message count. | int |
| recurrence | The recurrence. | WorkflowTriggerRecurrence |


### WorkflowTriggerRecurrence

| Name | Description | Value |
|-|-|-|
| endTime | The end time. | string |
| frequency | The frequency. | 'Day''Hour''Minute''Month''NotSpecified''Second''Week''Year' |
| interval | The interval. | int |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | The start time. | string |
| timeZone | The time zone. | string |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | The hours. | int[] |
| minutes | The minutes. | int[] |
| monthDays | The month days. | int[] |
| monthlyOccurrences | The monthly occurrences. | RecurrenceScheduleOccurrence[] |
| weekDays | The days of the week. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### RecurrenceScheduleOccurrence

| Name | Description | Value |
|-|-|-|
| day | The day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | The occurrence. | int |
## Microsoft.Logic/integrationAccounts/certificates@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/certificates@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      key = {
        keyName = "string"
        keyVault = {
          id = "string"
        }
        keyVersion = "string"
      }
      publicCertificate = "string"
    }
  })
}

```

### integrationAccounts/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account certificate properties. | IntegrationAccountCertificateProperties(required) |


### IntegrationAccountCertificateProperties

| Name | Description | Value |
|-|-|-|
| key | The key details in the key vault. | KeyVaultKeyReference |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| publicCertificate | The public certificate. | string |


### KeyVaultKeyReference

| Name | Description | Value |
|-|-|-|
| keyName | The private key name in key vault. | string (required) |
| keyVault | The key vault reference. | KeyVaultKeyReferenceKeyVault(required) |
| keyVersion | The private key version in key vault. | string |


### KeyVaultKeyReferenceKeyVault

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |
## Microsoft.Logic/integrationAccounts/maps@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/maps@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      content = "string"
      contentType = "string"
      mapType = "string"
      parametersSchema = {
        ref = "string"
      }
    }
  })
}

```

### integrationAccounts/maps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account map properties. | IntegrationAccountMapProperties(required) |


### IntegrationAccountMapProperties

| Name | Description | Value |
|-|-|-|
| content | The content. | string |
| contentType | The content type. | string |
| mapType | The map type. | 'Liquid''NotSpecified''Xslt''Xslt20''Xslt30' (required) |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| parametersSchema | The parameters schema of integration account map. | IntegrationAccountMapPropertiesParametersSchema |


### IntegrationAccountMapPropertiesParametersSchema

| Name | Description | Value |
|-|-|-|
| ref | The reference name. | string |
## Microsoft.Logic/integrationAccounts/partners@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/partners@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      content = {
        b2b = {
          businessIdentities = [
            {
              qualifier = "string"
              value = "string"
            }
          ]
        }
      }
      partnerType = "string"
    }
  })
}

```

### integrationAccounts/partners

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account partner properties. | IntegrationAccountPartnerProperties(required) |


### IntegrationAccountPartnerProperties

| Name | Description | Value |
|-|-|-|
| content | The partner content. | PartnerContent(required) |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| partnerType | The partner type. | 'B2B''NotSpecified' (required) |


### PartnerContent

| Name | Description | Value |
|-|-|-|
| b2b | The B2B partner content. | B2BPartnerContent |


### B2BPartnerContent

| Name | Description | Value |
|-|-|-|
| businessIdentities | The list of partner business identities. | BusinessIdentity[] |


### BusinessIdentity

| Name | Description | Value |
|-|-|-|
| qualifier | The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32 | string (required) |
| value | The user defined business identity value. | string (required) |
## Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activitySettings = {
        acknowledgmentOfReceiptSettings = {
          isNonRepudiationRequired = bool
          timeToAcknowledgeInSeconds = int
        }
        activityBehavior = {
          actionType = "string"
          isAuthorizationRequired = bool
          isSecuredTransportRequired = bool
          nonRepudiationOfOriginAndContent = bool
          persistentConfidentialityScope = "string"
          responseType = "string"
          retryCount = int
          timeToPerformInSeconds = int
        }
        activityType = "string"
      }
      description = "string"
      initiatorRoleSettings = {
        action = "string"
        businessDocument = {
          description = "string"
          name = "string"
          version = "string"
        }
        description = "string"
        role = "string"
        roleType = "string"
        service = "string"
        serviceClassification = "string"
      }
      metadata = {}
      processCode = "string"
      processName = "string"
      processVersion = "string"
      responderRoleSettings = {
        action = "string"
        businessDocument = {
          description = "string"
          name = "string"
          version = "string"
        }
        description = "string"
        role = "string"
        roleType = "string"
        service = "string"
        serviceClassification = "string"
      }
    }
  })
}

```

### integrationAccounts/rosettanetprocessconfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account RosettaNet process configuration properties. | IntegrationAccountRosettaNetProcessConfigurationProp...(required) |


### IntegrationAccountRosettaNetProcessConfigurationProp...

| Name | Description | Value |
|-|-|-|
| activitySettings | The RosettaNet process configuration activity settings. | RosettaNetPipActivitySettings(required) |
| description | The integration account RosettaNet ProcessConfiguration properties. | string |
| initiatorRoleSettings | The RosettaNet initiator role settings. | RosettaNetPipRoleSettings(required) |
| metadata | The metadata. | object |
| processCode | The integration account RosettaNet process code. | string (required) |
| processName | The integration account RosettaNet process name. | string (required) |
| processVersion | The integration account RosettaNet process version. | string (required) |
| responderRoleSettings | The RosettaNet responder role settings. | RosettaNetPipRoleSettings(required) |


### RosettaNetPipActivitySettings

| Name | Description | Value |
|-|-|-|
| acknowledgmentOfReceiptSettings | The RosettaNet ProcessConfiguration acknowledgement settings. | RosettaNetPipAcknowledgmentOfReceiptSettings(required) |
| activityBehavior | The RosettaNet ProcessConfiguration activity behavior. | RosettaNetPipActivityBehavior(required) |
| activityType | The RosettaNet ProcessConfiguration activity type. | 'BusinessTransaction''InformationDistribution''NotSpecified''Notification''QueryResponse''RequestConfirm''RequestResponse' (required) |


### RosettaNetPipAcknowledgmentOfReceiptSettings

| Name | Description | Value |
|-|-|-|
| isNonRepudiationRequired | The non-repudiation is required or not. | bool (required) |
| timeToAcknowledgeInSeconds | The time to acknowledge in seconds. | int (required) |


### RosettaNetPipActivityBehavior

| Name | Description | Value |
|-|-|-|
| actionType | The value indicating whether the RosettaNet PIP is used for a single action. | 'DoubleAction''NotSpecified''SingleAction' (required) |
| isAuthorizationRequired | The value indicating whether authorization is required. | bool (required) |
| isSecuredTransportRequired | The value indicating whether secured transport is required. | bool (required) |
| nonRepudiationOfOriginAndContent | The value indicating whether non-repudiation is for origin and content. | bool (required) |
| persistentConfidentialityScope | The persistent confidentiality encryption scope. | 'None''NotSpecified''Payload''PayloadContainer' (required) |
| responseType | The value indicating whether the RosettaNet PIP communication is synchronous. | 'Async''NotSpecified''Sync' (required) |
| retryCount | The value indicating retry count. | int (required) |
| timeToPerformInSeconds | The time to perform in seconds. | int (required) |


### RosettaNetPipRoleSettings

| Name | Description | Value |
|-|-|-|
| action | The action name. | string (required) |
| businessDocument | The RosettaNet ProcessConfiguration business document. | RosettaNetPipBusinessDocument(required) |
| description | The description. | string |
| role | The role name. | string (required) |
| roleType | The RosettaNet ProcessConfiguration role type. | 'Employee''Functional''NotSpecified''Organizational' (required) |
| service | The service name. | string (required) |
| serviceClassification | The service classification name. | string (required) |


### RosettaNetPipBusinessDocument

| Name | Description | Value |
|-|-|-|
| description | The business document description. | string |
| name | The business document name. | string (required) |
| version | The business document version. | string (required) |
## Microsoft.Logic/integrationAccounts/schemas@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/schemas@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      content = "string"
      contentType = "string"
      documentName = "string"
      fileName = "string"
      schemaType = "string"
      targetNamespace = "string"
    }
  })
}

```

### integrationAccounts/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account schema properties. | IntegrationAccountSchemaProperties(required) |


### IntegrationAccountSchemaProperties

| Name | Description | Value |
|-|-|-|
| content | The content. | string |
| contentType | The content type. | string |
| documentName | The document name. | string |
| fileName | The file name. | string |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| schemaType | The schema type. | 'NotSpecified''Xml' (required) |
| targetNamespace | The target namespace of the schema. | string |
## Microsoft.Logic/integrationAccounts/sessions@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/sessions@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### integrationAccounts/sessions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account session properties. | IntegrationAccountSessionProperties(required) |


### IntegrationAccountSessionProperties

| Name | Description | Value |
|-|-|-|
| content | The session content. | For Bicep, you can use theany()function. |
## Microsoft.Logic/integrationServiceEnvironments@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationServiceEnvironments@2019-05-01"
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
      encryptionConfiguration = {
        encryptionKeyReference = {
          keyName = "string"
          keyVault = {
            id = "string"
          }
          keyVersion = "string"
        }
      }
      endpointsConfiguration = {
        connector = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
        workflow = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
      }
      integrationServiceEnvironmentId = "string"
      networkConfiguration = {
        accessEndpoint = {
          type = "string"
        }
        subnets = [
          {
            id = "string"
          }
        ]
        virtualNetworkAddressSpace = "string"
      }
      provisioningState = "string"
      state = "string"
    }
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

### integrationServiceEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku. | IntegrationServiceEnvironmentSku |
| identity | Managed service identity properties. | ManagedServiceIdentity |
| properties | The integration service environment properties. | IntegrationServiceEnvironmentProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### IntegrationServiceEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| encryptionConfiguration | The encryption configuration. | IntegrationServiceEnvironmenEncryptionConfiguration |
| endpointsConfiguration | The endpoints configuration. | FlowEndpointsConfiguration |
| integrationServiceEnvironmentId | Gets the tracking id. | string |
| networkConfiguration | The network configuration. | NetworkConfiguration |
| provisioningState | The provisioning state. | 'Accepted''Canceled''Completed''Created''Creating''Deleted''Deleting''Failed''InProgress''Moving''NotSpecified''Pending''Ready''Registered''Registering''Renewing''Running''Succeeded''Unregistered''Unregistering''Updating''Waiting' |
| state | The integration service environment state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### IntegrationServiceEnvironmenEncryptionConfiguration

| Name | Description | Value |
|-|-|-|
| encryptionKeyReference | The encryption key reference. | IntegrationServiceEnvironmenEncryptionKeyReference |


### IntegrationServiceEnvironmenEncryptionKeyReference

| Name | Description | Value |
|-|-|-|
| keyName | Gets the key name in the Key Vault. | string |
| keyVault | The key vault reference. | ResourceReference |
| keyVersion | Gets the version of the key specified in the keyName property. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


### FlowEndpointsConfiguration

| Name | Description | Value |
|-|-|-|
| connector | The connector endpoints. | FlowEndpoints |
| workflow | The workflow endpoints. | FlowEndpoints |


### FlowEndpoints

| Name | Description | Value |
|-|-|-|
| accessEndpointIpAddresses | The access endpoint ip address. | IpAddress[] |
| outgoingIpAddresses | The outgoing ip address. | IpAddress[] |


### IpAddress

| Name | Description | Value |
|-|-|-|
| address | The address. | string |


### NetworkConfiguration

| Name | Description | Value |
|-|-|-|
| accessEndpoint | The access endpoint. | IntegrationServiceEnvironmentAccessEndpoint |
| subnets | The subnets. | ResourceReference[] |
| virtualNetworkAddressSpace | Gets the virtual network address space. | string |


### IntegrationServiceEnvironmentAccessEndpoint

| Name | Description | Value |
|-|-|-|
| type | The access endpoint type. | 'External''Internal''NotSpecified' |


### IntegrationServiceEnvironmentSku

| Name | Description | Value |
|-|-|-|
| capacity | The sku capacity. | int |
| name | The sku name. | 'Developer''NotSpecified''Premium' |
## Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deploymentParameters = {
        contentLinkDefinition = {
          uri = "string"
        }
      }
      integrationServiceEnvironment = {
        id = "string"
      }
    }
  })
}

```

### integrationServiceEnvironments/managedApis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationServiceEnvironments |
| properties | The integration service environment managed api properties. | IntegrationServiceEnvironmentManagedApiProperties |


### IntegrationServiceEnvironmentManagedApiProperties

| Name | Description | Value |
|-|-|-|
| deploymentParameters | The integration service environment managed api deployment parameters. | IntegrationServiceEnvironmentManagedApiDeploymentPar... |
| integrationServiceEnvironment | The integration service environment reference. | ResourceReference |


### IntegrationServiceEnvironmentManagedApiDeploymentPar...

| Name | Description | Value |
|-|-|-|
| contentLinkDefinition | The integration service environment managed api content link for deployment. | ContentLink |


### ContentLink

| Name | Description | Value |
|-|-|-|
| uri | The content link URI. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |
## Microsoft.Logic/workflows@2019-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/workflows@2019-05-01"
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
      accessControl = {
        actions = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        contents = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        triggers = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
        workflowManagement = {
          allowedCallerIpAddresses = [
            {
              addressRange = "string"
            }
          ]
          openAuthenticationPolicies = {
            policies = {}
        }
      }
      endpointsConfiguration = {
        connector = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
        workflow = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
      }
      integrationAccount = {
        id = "string"
      }
      integrationServiceEnvironment = {
        id = "string"
      }
      parameters = {}
      state = "string"
    }
  })
}

```

### workflows

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-43Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity properties. | ManagedServiceIdentity |
| properties | The workflow properties. | WorkflowProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### WorkflowProperties

| Name | Description | Value |
|-|-|-|
| accessControl | The access control configuration. | FlowAccessControlConfiguration |
| definition | The definition. SeeSchema reference for Workflow Definition Language in Azure Logic Apps. | For Bicep, you can use theany()function. |
| endpointsConfiguration | The endpoints configuration. | FlowEndpointsConfiguration |
| integrationAccount | The integration account. | ResourceReference |
| integrationServiceEnvironment | The integration service environment. | ResourceReference |
| parameters | The parameters. | object |
| state | The state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### FlowAccessControlConfiguration

| Name | Description | Value |
|-|-|-|
| actions | The access control configuration for workflow actions. | FlowAccessControlConfigurationPolicy |
| contents | The access control configuration for accessing workflow run contents. | FlowAccessControlConfigurationPolicy |
| triggers | The access control configuration for invoking workflow triggers. | FlowAccessControlConfigurationPolicy |
| workflowManagement | The access control configuration for workflow management. | FlowAccessControlConfigurationPolicy |


### FlowAccessControlConfigurationPolicy

| Name | Description | Value |
|-|-|-|
| allowedCallerIpAddresses | The allowed caller IP address ranges. | IpAddressRange[] |
| openAuthenticationPolicies | The authentication policies for workflow. | OpenAuthenticationAccessPolicies |


### IpAddressRange

| Name | Description | Value |
|-|-|-|
| addressRange | The IP address range. | string |


### OpenAuthenticationAccessPolicies

| Name | Description | Value |
|-|-|-|
| policies | Open authentication policies. | OpenAuthenticationAccessPolicies |


### FlowEndpointsConfiguration

| Name | Description | Value |
|-|-|-|
| connector | The connector endpoints. | FlowEndpoints |
| workflow | The workflow endpoints. | FlowEndpoints |


### FlowEndpoints

| Name | Description | Value |
|-|-|-|
| accessEndpointIpAddresses | The access endpoint ip address. | IpAddress[] |
| outgoingIpAddresses | The outgoing ip address. | IpAddress[] |


### IpAddress

| Name | Description | Value |
|-|-|-|
| address | The address. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |
## Microsoft.Logic/workflows/accessKeys@2015-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/workflows/accessKeys@2015-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      notAfter = "string"
      notBefore = "string"
    }
  })
}

```

### workflows/accessKeys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workflows |
| properties | Gets or sets the workflow access key properties. | WorkflowAccessKeyProperties |


### WorkflowAccessKeyProperties

| Name | Description | Value |
|-|-|-|
| notAfter | Gets or sets the not-after time. | string |
| notBefore | Gets or sets the not-before time. | string |
