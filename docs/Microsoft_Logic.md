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

