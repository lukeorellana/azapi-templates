import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LogicIntegrationaccountsAgreementsProps extends IAzAPIBaseProps {

}

export class LogicIntegrationaccountsAgreements extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsAgreementsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/agreements@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsAgreementsProps): string {
    return JSON.stringify(
      {properties: {agreementType: "string", content: {aS2: {receiveAgreement: {protocolSettings: {acknowledgementConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, envelopeSettings: {autogenerateFileName: "${bool}", fileNameTemplate: "string", messageContentType: "string", suspendMessageOnFileNameGenerationError: "${bool}", transmitFileNameInMimeHeader: "${bool}"}, errorSettings: {resendIfMDNNotReceived: "${bool}", suspendDuplicateMessage: "${bool}"}, mdnSettings: {dispositionNotificationTo: "string", mdnText: "string", micHashingAlgorithm: "string", needMDN: "${bool}", receiptDeliveryUrl: "string", sendInboundMDNToMessageBox: "${bool}", sendMDNAsynchronously: "${bool}", signMDN: "${bool}", signOutboundMDNIfOptional: "${bool}"}, messageConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, securitySettings: {enableNRRForInboundDecodedMessages: "${bool}", enableNRRForInboundEncodedMessages: "${bool}", enableNRRForInboundMDN: "${bool}", enableNRRForOutboundDecodedMessages: "${bool}", enableNRRForOutboundEncodedMessages: "${bool}", enableNRRForOutboundMDN: "${bool}", encryptionCertificateName: "string", overrideGroupSigningCertificate: "${bool}", sha2AlgorithmFormat: "string", signingCertificateName: "string"}, validationSettings: {checkCertificateRevocationListOnReceive: "${bool}", checkCertificateRevocationListOnSend: "${bool}", checkDuplicateMessage: "${bool}", compressMessage: "${bool}", encryptionAlgorithm: "string", encryptMessage: "${bool}", interchangeDuplicatesValidityDays: int, overrideMessageProperties: "${bool}", signingAlgorithm: "string", signMessage: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, envelopeSettings: {autogenerateFileName: "${bool}", fileNameTemplate: "string", messageContentType: "string", suspendMessageOnFileNameGenerationError: "${bool}", transmitFileNameInMimeHeader: "${bool}"}, errorSettings: {resendIfMDNNotReceived: "${bool}", suspendDuplicateMessage: "${bool}"}, mdnSettings: {dispositionNotificationTo: "string", mdnText: "string", micHashingAlgorithm: "string", needMDN: "${bool}", receiptDeliveryUrl: "string", sendInboundMDNToMessageBox: "${bool}", sendMDNAsynchronously: "${bool}", signMDN: "${bool}", signOutboundMDNIfOptional: "${bool}"}, messageConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, securitySettings: {enableNRRForInboundDecodedMessages: "${bool}", enableNRRForInboundEncodedMessages: "${bool}", enableNRRForInboundMDN: "${bool}", enableNRRForOutboundDecodedMessages: "${bool}", enableNRRForOutboundEncodedMessages: "${bool}", enableNRRForOutboundMDN: "${bool}", encryptionCertificateName: "string", overrideGroupSigningCertificate: "${bool}", sha2AlgorithmFormat: "string", signingCertificateName: "string"}, validationSettings: {checkCertificateRevocationListOnReceive: "${bool}", checkCertificateRevocationListOnSend: "${bool}", checkDuplicateMessage: "${bool}", compressMessage: "${bool}", encryptionAlgorithm: "string", encryptMessage: "${bool}", interchangeDuplicatesValidityDays: int, overrideMessageProperties: "${bool}", signingAlgorithm: "string", signMessage: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}, edifact: {receiveAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: int, acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: int, batchFunctionalAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", needFunctionalAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, edifactDelimiterOverrides: [{componentSeparator: int, dataElementSeparator: int, decimalPointIndicator: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", releaseIndicator: int, repetitionSeparator: int, segmentTerminator: int, segmentTerminatorSuffix: "string", targetNamespace: "string"}], envelopeOverrides: [{applicationPassword: "string", associationAssignedCode: "string", controllingAgencyCode: "string", functionalGroupId: "string", groupHeaderMessageRelease: "string", groupHeaderMessageVersion: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", receiverApplicationId: "string", receiverApplicationQualifier: "string", senderApplicationId: "string", senderApplicationQualifier: "string", targetNamespace: "string"}], envelopeSettings: {applicationReferenceId: "string", applyDelimiterStringAdvice: "${bool}", communicationAgreementId: "string", createGroupingSegments: "${bool}", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupApplicationPassword: "string", groupApplicationReceiverId: "string", groupApplicationReceiverQualifier: "string", groupApplicationSenderId: "string", groupApplicationSenderQualifier: "string", groupAssociationAssignedCode: "string", groupControllingAgencyCode: "string", groupControlNumberLowerBound: int, groupControlNumberPrefix: "string", groupControlNumberSuffix: "string", groupControlNumberUpperBound: int, groupMessageRelease: "string", groupMessageVersion: "string", interchangeControlNumberLowerBound: int, interchangeControlNumberPrefix: "string", interchangeControlNumberSuffix: "string", interchangeControlNumberUpperBound: int, isTestInterchange: "${bool}", overwriteExistingTransactionSetControlNumber: "${bool}", processingPriorityCode: "string", receiverInternalIdentification: "string", receiverInternalSubIdentification: "string", receiverReverseRoutingAddress: "string", recipientReferencePasswordQualifier: "string", recipientReferencePasswordValue: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderInternalIdentification: "string", senderInternalSubIdentification: "string", senderReverseRoutingAddress: "string", transactionSetControlNumberLowerBound: int, transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: int}, framingSettings: {characterEncoding: "string", characterSet: "string", componentSeparator: int, dataElementSeparator: int, decimalPointIndicator: "string", protocolVersion: int, releaseIndicator: int, repetitionSeparator: int, segmentTerminator: int, segmentTerminatorSuffix: "string", serviceCodeListDirectoryVersion: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{associationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", schemaName: "string", senderApplicationId: "string", senderApplicationQualifier: "string"}], validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", enforceCharacterSet: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: int, trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: int, acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: int, batchFunctionalAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", needFunctionalAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, edifactDelimiterOverrides: [{componentSeparator: int, dataElementSeparator: int, decimalPointIndicator: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", releaseIndicator: int, repetitionSeparator: int, segmentTerminator: int, segmentTerminatorSuffix: "string", targetNamespace: "string"}], envelopeOverrides: [{applicationPassword: "string", associationAssignedCode: "string", controllingAgencyCode: "string", functionalGroupId: "string", groupHeaderMessageRelease: "string", groupHeaderMessageVersion: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", receiverApplicationId: "string", receiverApplicationQualifier: "string", senderApplicationId: "string", senderApplicationQualifier: "string", targetNamespace: "string"}], envelopeSettings: {applicationReferenceId: "string", applyDelimiterStringAdvice: "${bool}", communicationAgreementId: "string", createGroupingSegments: "${bool}", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupApplicationPassword: "string", groupApplicationReceiverId: "string", groupApplicationReceiverQualifier: "string", groupApplicationSenderId: "string", groupApplicationSenderQualifier: "string", groupAssociationAssignedCode: "string", groupControllingAgencyCode: "string", groupControlNumberLowerBound: int, groupControlNumberPrefix: "string", groupControlNumberSuffix: "string", groupControlNumberUpperBound: int, groupMessageRelease: "string", groupMessageVersion: "string", interchangeControlNumberLowerBound: int, interchangeControlNumberPrefix: "string", interchangeControlNumberSuffix: "string", interchangeControlNumberUpperBound: int, isTestInterchange: "${bool}", overwriteExistingTransactionSetControlNumber: "${bool}", processingPriorityCode: "string", receiverInternalIdentification: "string", receiverInternalSubIdentification: "string", receiverReverseRoutingAddress: "string", recipientReferencePasswordQualifier: "string", recipientReferencePasswordValue: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderInternalIdentification: "string", senderInternalSubIdentification: "string", senderReverseRoutingAddress: "string", transactionSetControlNumberLowerBound: int, transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: int}, framingSettings: {characterEncoding: "string", characterSet: "string", componentSeparator: int, dataElementSeparator: int, decimalPointIndicator: "string", protocolVersion: int, releaseIndicator: int, repetitionSeparator: int, segmentTerminator: int, segmentTerminatorSuffix: "string", serviceCodeListDirectoryVersion: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{associationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", schemaName: "string", senderApplicationId: "string", senderApplicationQualifier: "string"}], validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", enforceCharacterSet: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: int, trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}, x12: {receiveAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: int, acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: int, batchFunctionalAcknowledgements: "${bool}", batchImplementationAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", functionalAcknowledgementVersion: "string", implementationAcknowledgementVersion: "string", needFunctionalAcknowledgement: "${bool}", needImplementationAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, envelopeOverrides: [{dateFormat: "string", functionalIdentifierCode: "string", headerVersion: "string", messageId: "string", protocolVersion: "string", receiverApplicationId: "string", responsibleAgencyCode: "string", senderApplicationId: "string", targetNamespace: "string", timeFormat: "string"}], envelopeSettings: {controlStandardsId: int, controlVersionNumber: "string", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupControlNumberLowerBound: int, groupControlNumberUpperBound: int, groupHeaderAgencyCode: "string", groupHeaderDateFormat: "string", groupHeaderTimeFormat: "string", groupHeaderVersion: "string", interchangeControlNumberLowerBound: int, interchangeControlNumberUpperBound: int, overwriteExistingTransactionSetControlNumber: "${bool}", receiverApplicationId: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderApplicationId: "string", transactionSetControlNumberLowerBound: int, transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: int, usageIndicator: "string", useControlStandardsIdAsRepetitionCharacter: "${bool}"}, framingSettings: {characterSet: "string", componentSeparator: int, dataElementSeparator: int, replaceCharacter: int, replaceSeparatorsInPayload: "${bool}", segmentTerminator: int, segmentTerminatorSuffix: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {convertImpliedDecimal: "${bool}", createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{messageId: "string", schemaName: "string", schemaVersion: "string", senderApplicationId: "string"}], securitySettings: {authorizationQualifier: "string", authorizationValue: "string", passwordValue: "string", securityQualifier: "string"}, validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: int, trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}, x12DelimiterOverrides: [{componentSeparator: int, dataElementSeparator: int, messageId: "string", protocolVersion: "string", replaceCharacter: int, replaceSeparatorsInPayload: "${bool}", segmentTerminator: int, segmentTerminatorSuffix: "string", targetNamespace: "string"}]}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: int, acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: int, batchFunctionalAcknowledgements: "${bool}", batchImplementationAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", functionalAcknowledgementVersion: "string", implementationAcknowledgementVersion: "string", needFunctionalAcknowledgement: "${bool}", needImplementationAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, envelopeOverrides: [{dateFormat: "string", functionalIdentifierCode: "string", headerVersion: "string", messageId: "string", protocolVersion: "string", receiverApplicationId: "string", responsibleAgencyCode: "string", senderApplicationId: "string", targetNamespace: "string", timeFormat: "string"}], envelopeSettings: {controlStandardsId: int, controlVersionNumber: "string", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupControlNumberLowerBound: int, groupControlNumberUpperBound: int, groupHeaderAgencyCode: "string", groupHeaderDateFormat: "string", groupHeaderTimeFormat: "string", groupHeaderVersion: "string", interchangeControlNumberLowerBound: int, interchangeControlNumberUpperBound: int, overwriteExistingTransactionSetControlNumber: "${bool}", receiverApplicationId: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderApplicationId: "string", transactionSetControlNumberLowerBound: int, transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: int, usageIndicator: "string", useControlStandardsIdAsRepetitionCharacter: "${bool}"}, framingSettings: {characterSet: "string", componentSeparator: int, dataElementSeparator: int, replaceCharacter: int, replaceSeparatorsInPayload: "${bool}", segmentTerminator: int, segmentTerminatorSuffix: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {convertImpliedDecimal: "${bool}", createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{messageId: "string", schemaName: "string", schemaVersion: "string", senderApplicationId: "string"}], securitySettings: {authorizationQualifier: "string", authorizationValue: "string", passwordValue: "string", securityQualifier: "string"}, validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: int, trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}, x12DelimiterOverrides: [{componentSeparator: int, dataElementSeparator: int, messageId: "string", protocolVersion: "string", replaceCharacter: int, replaceSeparatorsInPayload: "${bool}", segmentTerminator: int, segmentTerminatorSuffix: "string", targetNamespace: "string"}]}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}}, guestIdentity: {qualifier: "string", value: "string"}, guestPartner: "string", hostIdentity: {qualifier: "string", value: "string"}, hostPartner: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | The resource location. | string |
// | tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
// | properties | The integration account agreement properties. | IntegrationAccountAgreementProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | agreementType | The agreement type. | 'AS2''Edifact''NotSpecified''X12' (required) |
// | content | The agreement content. | AgreementContent(required) |
// | guestIdentity | The business identity of the guest partner. | BusinessIdentity(required) |
// | guestPartner | The integration account partner that is set as guest partner for this agreement. | string (required) |
// | hostIdentity | The business identity of the host partner. | BusinessIdentity(required) |
// | hostPartner | The integration account partner that is set as host partner for this agreement. | string (required) |
// | metadata | The metadata. | For Bicep, you can use theany()function. |

// | Name | Description | Value |
// |-|-|-|
// | aS2 | The AS2 agreement content. | AS2AgreementContent |
// | edifact | The EDIFACT agreement content. | EdifactAgreementContent |
// | x12 | The X12 agreement content. | X12AgreementContent |

// | Name | Description | Value |
// |-|-|-|
// | receiveAgreement | The AS2 one-way receive agreement. | AS2OneWayAgreement(required) |
// | sendAgreement | The AS2 one-way send agreement. | AS2OneWayAgreement(required) |

// | Name | Description | Value |
// |-|-|-|
// | protocolSettings | The AS2 protocol settings. | AS2ProtocolSettings(required) |
// | receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
// | senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |

// | Name | Description | Value |
// |-|-|-|
// | acknowledgementConnectionSettings | The acknowledgement connection settings. | AS2AcknowledgementConnectionSettings(required) |
// | envelopeSettings | The envelope settings. | AS2EnvelopeSettings(required) |
// | errorSettings | The error settings. | AS2ErrorSettings(required) |
// | mdnSettings | The MDN settings. | AS2MdnSettings(required) |
// | messageConnectionSettings | The message connection settings. | AS2MessageConnectionSettings(required) |
// | securitySettings | The security settings. | AS2SecuritySettings(required) |
// | validationSettings | The validation settings. | AS2ValidationSettings(required) |

// | Name | Description | Value |
// |-|-|-|
// | ignoreCertificateNameMismatch | Indicates whether to ignore mismatch in certificate name. | bool (required) |
// | keepHttpConnectionAlive | Indicates whether to keep the connection alive. | bool (required) |
// | supportHttpStatusCodeContinue | Indicates whether to support HTTP status code 'CONTINUE'. | bool (required) |
// | unfoldHttpHeaders | Indicates whether to unfold the HTTP headers. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | autogenerateFileName | The value indicating whether to auto generate file name. | bool (required) |
// | fileNameTemplate | The template for file name. | string (required) |
// | messageContentType | The message content type. | string (required) |
// | suspendMessageOnFileNameGenerationError | The value indicating whether to suspend message on file name generation error. | bool (required) |
// | transmitFileNameInMimeHeader | The value indicating whether to transmit file name in mime header. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | resendIfMDNNotReceived | The value indicating whether to resend message If MDN is not received. | bool (required) |
// | suspendDuplicateMessage | The value indicating whether to suspend duplicate message. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | dispositionNotificationTo | The disposition notification to header value. | string |
// | mdnText | The MDN text. | string |
// | micHashingAlgorithm | The signing or hashing algorithm. | 'MD5''None''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512' (required) |
// | needMDN | The value indicating whether to send or request a MDN. | bool (required) |
// | receiptDeliveryUrl | The receipt delivery URL. | string |
// | sendInboundMDNToMessageBox | The value indicating whether to send inbound MDN to message box. | bool (required) |
// | sendMDNAsynchronously | The value indicating whether to send the asynchronous MDN. | bool (required) |
// | signMDN | The value indicating whether the MDN needs to be signed or not. | bool (required) |
// | signOutboundMDNIfOptional | The value indicating whether to sign the outbound MDN if optional. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | ignoreCertificateNameMismatch | The value indicating whether to ignore mismatch in certificate name. | bool (required) |
// | keepHttpConnectionAlive | The value indicating whether to keep the connection alive. | bool (required) |
// | supportHttpStatusCodeContinue | The value indicating whether to support HTTP status code 'CONTINUE'. | bool (required) |
// | unfoldHttpHeaders | The value indicating whether to unfold the HTTP headers. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | enableNRRForInboundDecodedMessages | The value indicating whether to enable NRR for inbound decoded messages. | bool (required) |
// | enableNRRForInboundEncodedMessages | The value indicating whether to enable NRR for inbound encoded messages. | bool (required) |
// | enableNRRForInboundMDN | The value indicating whether to enable NRR for inbound MDN. | bool (required) |
// | enableNRRForOutboundDecodedMessages | The value indicating whether to enable NRR for outbound decoded messages. | bool (required) |
// | enableNRRForOutboundEncodedMessages | The value indicating whether to enable NRR for outbound encoded messages. | bool (required) |
// | enableNRRForOutboundMDN | The value indicating whether to enable NRR for outbound MDN. | bool (required) |
// | encryptionCertificateName | The name of the encryption certificate. | string |
// | overrideGroupSigningCertificate | The value indicating whether to send or request a MDN. | bool (required) |
// | sha2AlgorithmFormat | The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize. | string |
// | signingCertificateName | The name of the signing certificate. | string |

// | Name | Description | Value |
// |-|-|-|
// | checkCertificateRevocationListOnReceive | The value indicating whether to check for certificate revocation list on receive. | bool (required) |
// | checkCertificateRevocationListOnSend | The value indicating whether to check for certificate revocation list on send. | bool (required) |
// | checkDuplicateMessage | The value indicating whether to check for duplicate message. | bool (required) |
// | compressMessage | The value indicating whether the message has to be compressed. | bool (required) |
// | encryptionAlgorithm | The encryption algorithm. | 'AES128''AES192''AES256''DES3''None''NotSpecified''RC2' (required) |
// | encryptMessage | The value indicating whether the message has to be encrypted. | bool (required) |
// | interchangeDuplicatesValidityDays | The number of days to look back for duplicate interchange. | int (required) |
// | overrideMessageProperties | The value indicating whether to override incoming message properties with those in agreement. | bool (required) |
// | signingAlgorithm | The signing algorithm. | 'Default''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512' |
// | signMessage | The value indicating whether the message has to be signed. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | qualifier | The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32 | string (required) |
// | value | The user defined business identity value. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | receiveAgreement | The EDIFACT one-way receive agreement. | EdifactOneWayAgreement(required) |
// | sendAgreement | The EDIFACT one-way send agreement. | EdifactOneWayAgreement(required) |

// | Name | Description | Value |
// |-|-|-|
// | protocolSettings | The EDIFACT protocol settings. | EdifactProtocolSettings(required) |
// | receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
// | senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |

// | Name | Description | Value |
// |-|-|-|
// | acknowledgementSettings | The EDIFACT acknowledgement settings. | EdifactAcknowledgementSettings(required) |
// | edifactDelimiterOverrides | The EDIFACT delimiter override settings. | EdifactDelimiterOverride[] |
// | envelopeOverrides | The EDIFACT envelope override settings. | EdifactEnvelopeOverride[] |
// | envelopeSettings | The EDIFACT envelope settings. | EdifactEnvelopeSettings(required) |
// | framingSettings | The EDIFACT framing settings. | EdifactFramingSettings(required) |
// | messageFilter | The EDIFACT message filter. | EdifactMessageFilter(required) |
// | messageFilterList | The EDIFACT message filter list. | EdifactMessageIdentifier[] |
// | processingSettings | The EDIFACT processing Settings. | EdifactProcessingSettings(required) |
// | schemaReferences | The EDIFACT schema references. | EdifactSchemaReference[] (required) |
// | validationOverrides | The EDIFACT validation override settings. | EdifactValidationOverride[] |
// | validationSettings | The EDIFACT validation settings. | EdifactValidationSettings(required) |

// | Name | Description | Value |
// |-|-|-|
// | acknowledgementControlNumberLowerBound | The acknowledgement control number lower bound. | int (required) |
// | acknowledgementControlNumberPrefix | The acknowledgement control number prefix. | string |
// | acknowledgementControlNumberSuffix | The acknowledgement control number suffix. | string |
// | acknowledgementControlNumberUpperBound | The acknowledgement control number upper bound. | int (required) |
// | batchFunctionalAcknowledgements | The value indicating whether to batch functional acknowledgements. | bool (required) |
// | batchTechnicalAcknowledgements | The value indicating whether to batch the technical acknowledgements. | bool (required) |
// | needFunctionalAcknowledgement | The value indicating whether functional acknowledgement is needed. | bool (required) |
// | needLoopForValidMessages | The value indicating whether a loop is needed for valid messages. | bool (required) |
// | needTechnicalAcknowledgement | The value indicating whether technical acknowledgement is needed. | bool (required) |
// | rolloverAcknowledgementControlNumber | The value indicating whether to rollover acknowledgement control number. | bool (required) |
// | sendSynchronousAcknowledgement | The value indicating whether to send synchronous acknowledgement. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | componentSeparator | The component separator. | int (required) |
// | dataElementSeparator | The data element separator. | int (required) |
// | decimalPointIndicator | The decimal point indicator. | 'Comma''Decimal''NotSpecified' (required) |
// | messageAssociationAssignedCode | The message association assigned code. | string |
// | messageId | The message id. | string |
// | messageRelease | The message release. | string |
// | messageVersion | The message version. | string |
// | releaseIndicator | The release indicator. | int (required) |
// | repetitionSeparator | The repetition separator. | int (required) |
// | segmentTerminator | The segment terminator. | int (required) |
// | segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
// | targetNamespace | The target namespace on which this delimiter settings has to be applied. | string |

// | Name | Description | Value |
// |-|-|-|
// | applicationPassword | The application password. | string |
// | associationAssignedCode | The association assigned code. | string |
// | controllingAgencyCode | The controlling agency code. | string |
// | functionalGroupId | The functional group id. | string |
// | groupHeaderMessageRelease | The group header message release. | string |
// | groupHeaderMessageVersion | The group header message version. | string |
// | messageAssociationAssignedCode | The message association assigned code. | string |
// | messageId | The message id on which this envelope settings has to be applied. | string |
// | messageRelease | The message release version on which this envelope settings has to be applied. | string |
// | messageVersion | The message version on which this envelope settings has to be applied. | string |
// | receiverApplicationId | The receiver application id. | string |
// | receiverApplicationQualifier | The receiver application qualifier. | string |
// | senderApplicationId | The sender application id. | string |
// | senderApplicationQualifier | The sender application qualifier. | string |
// | targetNamespace | The target namespace on which this envelope settings has to be applied. | string |

// | Name | Description | Value |
// |-|-|-|
// | applicationReferenceId | The application reference id. | string |
// | applyDelimiterStringAdvice | The value indicating whether to apply delimiter string advice. | bool (required) |
// | communicationAgreementId | The communication agreement id. | string |
// | createGroupingSegments | The value indicating whether to create grouping segments. | bool (required) |
// | enableDefaultGroupHeaders | The value indicating whether to enable default group headers. | bool (required) |
// | functionalGroupId | The functional group id. | string |
// | groupApplicationPassword | The group application password. | string |
// | groupApplicationReceiverId | The group application receiver id. | string |
// | groupApplicationReceiverQualifier | The group application receiver qualifier. | string |
// | groupApplicationSenderId | The group application sender id. | string |
// | groupApplicationSenderQualifier | The group application sender qualifier. | string |
// | groupAssociationAssignedCode | The group association assigned code. | string |
// | groupControllingAgencyCode | The group controlling agency code. | string |
// | groupControlNumberLowerBound | The group control number lower bound. | int (required) |
// | groupControlNumberPrefix | The group control number prefix. | string |
// | groupControlNumberSuffix | The group control number suffix. | string |
// | groupControlNumberUpperBound | The group control number upper bound. | int (required) |
// | groupMessageRelease | The group message release. | string |
// | groupMessageVersion | The group message version. | string |
// | interchangeControlNumberLowerBound | The interchange control number lower bound. | int (required) |
// | interchangeControlNumberPrefix | The interchange control number prefix. | string |
// | interchangeControlNumberSuffix | The interchange control number suffix. | string |
// | interchangeControlNumberUpperBound | The interchange control number upper bound. | int (required) |
// | isTestInterchange | The value indicating whether the message is a test interchange. | bool (required) |
// | overwriteExistingTransactionSetControlNumber | The value indicating whether to overwrite existing transaction set control number. | bool (required) |
// | processingPriorityCode | The processing priority code. | string |
// | receiverInternalIdentification | The receiver internal identification. | string |
// | receiverInternalSubIdentification | The receiver internal sub identification. | string |
// | receiverReverseRoutingAddress | The receiver reverse routing address. | string |
// | recipientReferencePasswordQualifier | The recipient reference password qualifier. | string |
// | recipientReferencePasswordValue | The recipient reference password value. | string |
// | rolloverGroupControlNumber | The value indicating whether to rollover group control number. | bool (required) |
// | rolloverInterchangeControlNumber | The value indicating whether to rollover interchange control number. | bool (required) |
// | rolloverTransactionSetControlNumber | The value indicating whether to rollover transaction set control number. | bool (required) |
// | senderInternalIdentification | The sender internal identification. | string |
// | senderInternalSubIdentification | The sender internal sub identification. | string |
// | senderReverseRoutingAddress | The sender reverse routing address. | string |
// | transactionSetControlNumberLowerBound | The transaction set control number lower bound. | int (required) |
// | transactionSetControlNumberPrefix | The transaction set control number prefix. | string |
// | transactionSetControlNumberSuffix | The transaction set control number suffix. | string |
// | transactionSetControlNumberUpperBound | The transaction set control number upper bound. | int (required) |

// | Name | Description | Value |
// |-|-|-|
// | characterEncoding | The character encoding. | string |
// | characterSet | The EDIFACT frame setting characterSet. | 'KECA''NotSpecified''UNOA''UNOB''UNOC''UNOD''UNOE''UNOF''UNOG''UNOH''UNOI''UNOJ''UNOK''UNOX''UNOY' (required) |
// | componentSeparator | The component separator. | int (required) |
// | dataElementSeparator | The data element separator. | int (required) |
// | decimalPointIndicator | The EDIFACT frame setting decimal indicator. | 'Comma''Decimal''NotSpecified' (required) |
// | protocolVersion | The protocol version. | int (required) |
// | releaseIndicator | The release indicator. | int (required) |
// | repetitionSeparator | The repetition separator. | int (required) |
// | segmentTerminator | The segment terminator. | int (required) |
// | segmentTerminatorSuffix | The EDIFACT frame setting segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
// | serviceCodeListDirectoryVersion | The service code list directory version. | string |

// | Name | Description | Value |
// |-|-|-|
// | messageFilterType | The message filter type. | 'Exclude''Include''NotSpecified' (required) |

// | Name | Description | Value |
// |-|-|-|
// | messageId | The message id on which this envelope settings has to be applied. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | createEmptyXmlTagsForTrailingSeparators | The value indicating whether to create empty xml tags for trailing separators. | bool (required) |
// | maskSecurityInfo | The value indicating whether to mask security information. | bool (required) |
// | preserveInterchange | The value indicating whether to preserve interchange. | bool (required) |
// | suspendInterchangeOnError | The value indicating whether to suspend interchange on error. | bool (required) |
// | useDotAsDecimalSeparator | The value indicating whether to use dot as decimal separator. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | associationAssignedCode | The association assigned code. | string |
// | messageId | The message id. | string (required) |
// | messageRelease | The message release version. | string (required) |
// | messageVersion | The message version. | string (required) |
// | schemaName | The schema name. | string (required) |
// | senderApplicationId | The sender application id. | string |
// | senderApplicationQualifier | The sender application qualifier. | string |

// | Name | Description | Value |
// |-|-|-|
// | allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
// | enforceCharacterSet | The value indicating whether to validate character Set. | bool (required) |
// | messageId | The message id on which the validation settings has to be applied. | string (required) |
// | trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
// | trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
// | validateEDITypes | The value indicating whether to validate EDI types. | bool (required) |
// | validateXSDTypes | The value indicating whether to validate XSD types. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
// | checkDuplicateGroupControlNumber | The value indicating whether to check for duplicate group control number. | bool (required) |
// | checkDuplicateInterchangeControlNumber | The value indicating whether to check for duplicate interchange control number. | bool (required) |
// | checkDuplicateTransactionSetControlNumber | The value indicating whether to check for duplicate transaction set control number. | bool (required) |
// | interchangeControlNumberValidityDays | The validity period of interchange control number. | int (required) |
// | trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
// | trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
// | validateCharacterSet | The value indicating whether to validate character set in the message. | bool (required) |
// | validateEDITypes | The value indicating whether to Whether to validate EDI types. | bool (required) |
// | validateXSDTypes | The value indicating whether to Whether to validate XSD types. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | receiveAgreement | The X12 one-way receive agreement. | X12OneWayAgreement(required) |
// | sendAgreement | The X12 one-way send agreement. | X12OneWayAgreement(required) |

// | Name | Description | Value |
// |-|-|-|
// | protocolSettings | The X12 protocol settings. | X12ProtocolSettings(required) |
// | receiverBusinessIdentity | The receiver business identity | BusinessIdentity(required) |
// | senderBusinessIdentity | The sender business identity | BusinessIdentity(required) |

// | Name | Description | Value |
// |-|-|-|
// | acknowledgementSettings | The X12 acknowledgment settings. | X12AcknowledgementSettings(required) |
// | envelopeOverrides | The X12 envelope override settings. | X12EnvelopeOverride[] |
// | envelopeSettings | The X12 envelope settings. | X12EnvelopeSettings(required) |
// | framingSettings | The X12 framing settings. | X12FramingSettings(required) |
// | messageFilter | The X12 message filter. | X12MessageFilter(required) |
// | messageFilterList | The X12 message filter list. | X12MessageIdentifier[] |
// | processingSettings | The X12 processing settings. | X12ProcessingSettings(required) |
// | schemaReferences | The X12 schema references. | X12SchemaReference[] (required) |
// | securitySettings | The X12 security settings. | X12SecuritySettings(required) |
// | validationOverrides | The X12 validation override settings. | X12ValidationOverride[] |
// | validationSettings | The X12 validation settings. | X12ValidationSettings(required) |
// | x12DelimiterOverrides | The X12 delimiter override settings. | X12DelimiterOverrides[] |

// | Name | Description | Value |
// |-|-|-|
// | acknowledgementControlNumberLowerBound | The acknowledgement control number lower bound. | int (required) |
// | acknowledgementControlNumberPrefix | The acknowledgement control number prefix. | string |
// | acknowledgementControlNumberSuffix | The acknowledgement control number suffix. | string |
// | acknowledgementControlNumberUpperBound | The acknowledgement control number upper bound. | int (required) |
// | batchFunctionalAcknowledgements | The value indicating whether to batch functional acknowledgements. | bool (required) |
// | batchImplementationAcknowledgements | The value indicating whether to batch implementation acknowledgements. | bool (required) |
// | batchTechnicalAcknowledgements | The value indicating whether to batch the technical acknowledgements. | bool (required) |
// | functionalAcknowledgementVersion | The functional acknowledgement version. | string |
// | implementationAcknowledgementVersion | The implementation acknowledgement version. | string |
// | needFunctionalAcknowledgement | The value indicating whether functional acknowledgement is needed. | bool (required) |
// | needImplementationAcknowledgement | The value indicating whether implementation acknowledgement is needed. | bool (required) |
// | needLoopForValidMessages | The value indicating whether a loop is needed for valid messages. | bool (required) |
// | needTechnicalAcknowledgement | The value indicating whether technical acknowledgement is needed. | bool (required) |
// | rolloverAcknowledgementControlNumber | The value indicating whether to rollover acknowledgement control number. | bool (required) |
// | sendSynchronousAcknowledgement | The value indicating whether to send synchronous acknowledgement. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | dateFormat | The date format. | 'CCYYMMDD''NotSpecified''YYMMDD' (required) |
// | functionalIdentifierCode | The functional identifier code. | string |
// | headerVersion | The header version. | string (required) |
// | messageId | The message id on which this envelope settings has to be applied. | string (required) |
// | protocolVersion | The protocol version on which this envelope settings has to be applied. | string (required) |
// | receiverApplicationId | The receiver application id. | string (required) |
// | responsibleAgencyCode | The responsible agency code. | string (required) |
// | senderApplicationId | The sender application id. | string (required) |
// | targetNamespace | The target namespace on which this envelope settings has to be applied. | string (required) |
// | timeFormat | The time format. | 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified' (required) |

// | Name | Description | Value |
// |-|-|-|
// | controlStandardsId | The controls standards id. | int (required) |
// | controlVersionNumber | The control version number. | string (required) |
// | enableDefaultGroupHeaders | The value indicating whether to enable default group headers. | bool (required) |
// | functionalGroupId | The functional group id. | string |
// | groupControlNumberLowerBound | The group control number lower bound. | int (required) |
// | groupControlNumberUpperBound | The group control number upper bound. | int (required) |
// | groupHeaderAgencyCode | The group header agency code. | string (required) |
// | groupHeaderDateFormat | The group header date format. | 'CCYYMMDD''NotSpecified''YYMMDD' (required) |
// | groupHeaderTimeFormat | The group header time format. | 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified' (required) |
// | groupHeaderVersion | The group header version. | string (required) |
// | interchangeControlNumberLowerBound | The interchange  control number lower bound. | int (required) |
// | interchangeControlNumberUpperBound | The interchange  control number upper bound. | int (required) |
// | overwriteExistingTransactionSetControlNumber | The value indicating whether to overwrite existing transaction set control number. | bool (required) |
// | receiverApplicationId | The receiver application id. | string (required) |
// | rolloverGroupControlNumber | The value indicating whether to rollover group control number. | bool (required) |
// | rolloverInterchangeControlNumber | The value indicating whether to rollover interchange control number. | bool (required) |
// | rolloverTransactionSetControlNumber | The value indicating whether to rollover transaction set control number. | bool (required) |
// | senderApplicationId | The sender application id. | string (required) |
// | transactionSetControlNumberLowerBound | The transaction set control number lower bound. | int (required) |
// | transactionSetControlNumberPrefix | The transaction set control number prefix. | string |
// | transactionSetControlNumberSuffix | The transaction set control number suffix. | string |
// | transactionSetControlNumberUpperBound | The transaction set control number upper bound. | int (required) |
// | usageIndicator | The usage indicator. | 'Information''NotSpecified''Production''Test' (required) |
// | useControlStandardsIdAsRepetitionCharacter | The value indicating whether to use control standards id as repetition character. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | characterSet | The X12 character set. | 'Basic''Extended''NotSpecified''UTF8' (required) |
// | componentSeparator | The component separator. | int (required) |
// | dataElementSeparator | The data element separator. | int (required) |
// | replaceCharacter | The replacement character. | int (required) |
// | replaceSeparatorsInPayload | The value indicating whether to replace separators in payload. | bool (required) |
// | segmentTerminator | The segment terminator. | int (required) |
// | segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |

// | Name | Description | Value |
// |-|-|-|
// | messageFilterType | The message filter type. | 'Exclude''Include''NotSpecified' (required) |

// | Name | Description | Value |
// |-|-|-|
// | messageId | The message id. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | convertImpliedDecimal | The value indicating whether to convert numerical type to implied decimal. | bool (required) |
// | createEmptyXmlTagsForTrailingSeparators | The value indicating whether to create empty xml tags for trailing separators. | bool (required) |
// | maskSecurityInfo | The value indicating whether to mask security information. | bool (required) |
// | preserveInterchange | The value indicating whether to preserve interchange. | bool (required) |
// | suspendInterchangeOnError | The value indicating whether to suspend interchange on error. | bool (required) |
// | useDotAsDecimalSeparator | The value indicating whether to use dot as decimal separator. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | messageId | The message id. | string (required) |
// | schemaName | The schema name. | string (required) |
// | schemaVersion | The schema version. | string (required) |
// | senderApplicationId | The sender application id. | string |

// | Name | Description | Value |
// |-|-|-|
// | authorizationQualifier | The authorization qualifier. | string (required) |
// | authorizationValue | The authorization value. | string |
// | passwordValue | The password value. | string |
// | securityQualifier | The security qualifier. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
// | messageId | The message id on which the validation settings has to be applied. | string (required) |
// | trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
// | trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
// | validateCharacterSet | The value indicating whether to validate character Set. | bool (required) |
// | validateEDITypes | The value indicating whether to validate EDI types. | bool (required) |
// | validateXSDTypes | The value indicating whether to validate XSD types. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | allowLeadingAndTrailingSpacesAndZeroes | The value indicating whether to allow leading and trailing spaces and zeroes. | bool (required) |
// | checkDuplicateGroupControlNumber | The value indicating whether to check for duplicate group control number. | bool (required) |
// | checkDuplicateInterchangeControlNumber | The value indicating whether to check for duplicate interchange control number. | bool (required) |
// | checkDuplicateTransactionSetControlNumber | The value indicating whether to check for duplicate transaction set control number. | bool (required) |
// | interchangeControlNumberValidityDays | The validity period of interchange control number. | int (required) |
// | trailingSeparatorPolicy | The trailing separator policy. | 'Mandatory''NotAllowed''NotSpecified''Optional' (required) |
// | trimLeadingAndTrailingSpacesAndZeroes | The value indicating whether to trim leading and trailing spaces and zeroes. | bool (required) |
// | validateCharacterSet | The value indicating whether to validate character set in the message. | bool (required) |
// | validateEDITypes | The value indicating whether to Whether to validate EDI types. | bool (required) |
// | validateXSDTypes | The value indicating whether to Whether to validate XSD types. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | componentSeparator | The component separator. | int (required) |
// | dataElementSeparator | The data element separator. | int (required) |
// | messageId | The message id. | string |
// | protocolVersion | The protocol version. | string |
// | replaceCharacter | The replacement character. | int (required) |
// | replaceSeparatorsInPayload | The value indicating whether to replace separators in payload. | bool (required) |
// | segmentTerminator | The segment terminator. | int (required) |
// | segmentTerminatorSuffix | The segment terminator suffix. | 'CR''CRLF''LF''None''NotSpecified' (required) |
// | targetNamespace | The target namespace on which this delimiter settings has to be applied. | string |
