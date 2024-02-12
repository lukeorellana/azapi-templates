import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsAgreementsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The agreement type.
   */
readonly agreementType: 'AS2''Edifact''NotSpecified''X12';

/**
   * The agreement content.
   */
readonly content: AgreementContent;

/**
   * The business identity of the guest partner.
   */
readonly guestIdentity: BusinessIdentity;

/**
   * The integration account partner that is set as guest partner for this agreement.
   */
readonly guestPartner: string;

/**
   * The business identity of the host partner.
   */
readonly hostIdentity: BusinessIdentity;

/**
   * The integration account partner that is set as host partner for this agreement.
   */
readonly hostPartner: string;

/**
   * The metadata.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The AS2 agreement content.
   */
readonly aS2?: AS2AgreementContent;

/**
   * The EDIFACT agreement content.
   */
readonly edifact?: EdifactAgreementContent;

/**
   * The X12 agreement content.
   */
readonly x12?: X12AgreementContent;

/**
   * The AS2 one-way receive agreement.
   */
readonly receiveAgreement: AS2OneWayAgreement;

/**
   * The AS2 one-way send agreement.
   */
readonly sendAgreement: AS2OneWayAgreement;

/**
   * The AS2 protocol settings.
   */
readonly protocolSettings: AS2ProtocolSettings;

/**
   * The receiver business identity
   */
readonly receiverBusinessIdentity: BusinessIdentity;

/**
   * The sender business identity
   */
readonly senderBusinessIdentity: BusinessIdentity;

/**
   * The acknowledgement connection settings.
   */
readonly acknowledgementConnectionSettings: AS2AcknowledgementConnectionSettings;

/**
   * The envelope settings.
   */
readonly envelopeSettings: AS2EnvelopeSettings;

/**
   * The error settings.
   */
readonly errorSettings: AS2ErrorSettings;

/**
   * The MDN settings.
   */
readonly mdnSettings: AS2MdnSettings;

/**
   * The message connection settings.
   */
readonly messageConnectionSettings: AS2MessageConnectionSettings;

/**
   * The security settings.
   */
readonly securitySettings: AS2SecuritySettings;

/**
   * The validation settings.
   */
readonly validationSettings: AS2ValidationSettings;

/**
   * Indicates whether to ignore mismatch in certificate name.
   */
readonly ignoreCertificateNameMismatch: bool;

/**
   * Indicates whether to keep the connection alive.
   */
readonly keepHttpConnectionAlive: bool;

/**
   * Indicates whether to support HTTP status code 'CONTINUE'.
   */
readonly supportHttpStatusCodeContinue: bool;

/**
   * Indicates whether to unfold the HTTP headers.
   */
readonly unfoldHttpHeaders: bool;

/**
   * The value indicating whether to auto generate file name.
   */
readonly autogenerateFileName: bool;

/**
   * The template for file name.
   */
readonly fileNameTemplate: string;

/**
   * The message content type.
   */
readonly messageContentType: string;

/**
   * The value indicating whether to suspend message on file name generation error.
   */
readonly suspendMessageOnFileNameGenerationError: bool;

/**
   * The value indicating whether to transmit file name in mime header.
   */
readonly transmitFileNameInMimeHeader: bool;

/**
   * The value indicating whether to resend message If MDN is not received.
   */
readonly resendIfMDNNotReceived: bool;

/**
   * The value indicating whether to suspend duplicate message.
   */
readonly suspendDuplicateMessage: bool;

/**
   * The disposition notification to header value.
   */
readonly dispositionNotificationTo?: string;

/**
   * The MDN text.
   */
readonly mdnText?: string;

/**
   * The signing or hashing algorithm.
   */
readonly micHashingAlgorithm: 'MD5''None''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512';

/**
   * The value indicating whether to send or request a MDN.
   */
readonly needMDN: bool;

/**
   * The receipt delivery URL.
   */
readonly receiptDeliveryUrl?: string;

/**
   * The value indicating whether to send inbound MDN to message box.
   */
readonly sendInboundMDNToMessageBox: bool;

/**
   * The value indicating whether to send the asynchronous MDN.
   */
readonly sendMDNAsynchronously: bool;

/**
   * The value indicating whether the MDN needs to be signed or not.
   */
readonly signMDN: bool;

/**
   * The value indicating whether to sign the outbound MDN if optional.
   */
readonly signOutboundMDNIfOptional: bool;

/**
   * The value indicating whether to ignore mismatch in certificate name.
   */
readonly ignoreCertificateNameMismatch: bool;

/**
   * The value indicating whether to keep the connection alive.
   */
readonly keepHttpConnectionAlive: bool;

/**
   * The value indicating whether to support HTTP status code 'CONTINUE'.
   */
readonly supportHttpStatusCodeContinue: bool;

/**
   * The value indicating whether to unfold the HTTP headers.
   */
readonly unfoldHttpHeaders: bool;

/**
   * The value indicating whether to enable NRR for inbound decoded messages.
   */
readonly enableNRRForInboundDecodedMessages: bool;

/**
   * The value indicating whether to enable NRR for inbound encoded messages.
   */
readonly enableNRRForInboundEncodedMessages: bool;

/**
   * The value indicating whether to enable NRR for inbound MDN.
   */
readonly enableNRRForInboundMDN: bool;

/**
   * The value indicating whether to enable NRR for outbound decoded messages.
   */
readonly enableNRRForOutboundDecodedMessages: bool;

/**
   * The value indicating whether to enable NRR for outbound encoded messages.
   */
readonly enableNRRForOutboundEncodedMessages: bool;

/**
   * The value indicating whether to enable NRR for outbound MDN.
   */
readonly enableNRRForOutboundMDN: bool;

/**
   * The name of the encryption certificate.
   */
readonly encryptionCertificateName?: string;

/**
   * The value indicating whether to send or request a MDN.
   */
readonly overrideGroupSigningCertificate: bool;

/**
   * The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
   */
readonly sha2AlgorithmFormat?: string;

/**
   * The name of the signing certificate.
   */
readonly signingCertificateName?: string;

/**
   * The value indicating whether to check for certificate revocation list on receive.
   */
readonly checkCertificateRevocationListOnReceive: bool;

/**
   * The value indicating whether to check for certificate revocation list on send.
   */
readonly checkCertificateRevocationListOnSend: bool;

/**
   * The value indicating whether to check for duplicate message.
   */
readonly checkDuplicateMessage: bool;

/**
   * The value indicating whether the message has to be compressed.
   */
readonly compressMessage: bool;

/**
   * The encryption algorithm.
   */
readonly encryptionAlgorithm: 'AES128''AES192''AES256''DES3''None''NotSpecified''RC2';

/**
   * The value indicating whether the message has to be encrypted.
   */
readonly encryptMessage: bool;

/**
   * The number of days to look back for duplicate interchange.
   */
readonly interchangeDuplicatesValidityDays: number;

/**
   * The value indicating whether to override incoming message properties with those in agreement.
   */
readonly overrideMessageProperties: bool;

/**
   * The signing algorithm.
   */
readonly signingAlgorithm?: 'Default''NotSpecified''SHA1''SHA2256''SHA2384''SHA2512';

/**
   * The value indicating whether the message has to be signed.
   */
readonly signMessage: bool;

/**
   * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
   */
readonly qualifier: string;

/**
   * The user defined business identity value.
   */
readonly value: string;

/**
   * The EDIFACT one-way receive agreement.
   */
readonly receiveAgreement: EdifactOneWayAgreement;

/**
   * The EDIFACT one-way send agreement.
   */
readonly sendAgreement: EdifactOneWayAgreement;

/**
   * The EDIFACT protocol settings.
   */
readonly protocolSettings: EdifactProtocolSettings;

/**
   * The receiver business identity
   */
readonly receiverBusinessIdentity: BusinessIdentity;

/**
   * The sender business identity
   */
readonly senderBusinessIdentity: BusinessIdentity;

/**
   * The EDIFACT acknowledgement settings.
   */
readonly acknowledgementSettings: EdifactAcknowledgementSettings;

/**
   * The EDIFACT delimiter override settings.
   */
readonly edifactDelimiterOverrides?: EdifactDelimiterOverride[];

/**
   * The EDIFACT envelope override settings.
   */
readonly envelopeOverrides?: EdifactEnvelopeOverride[];

/**
   * The EDIFACT envelope settings.
   */
readonly envelopeSettings: EdifactEnvelopeSettings;

/**
   * The EDIFACT framing settings.
   */
readonly framingSettings: EdifactFramingSettings;

/**
   * The EDIFACT message filter.
   */
readonly messageFilter: EdifactMessageFilter;

/**
   * The EDIFACT message filter list.
   */
readonly messageFilterList?: EdifactMessageIdentifier[];

/**
   * The EDIFACT processing Settings.
   */
readonly processingSettings: EdifactProcessingSettings;

/**
   * The EDIFACT schema references.
   */
readonly schemaReferences: EdifactSchemaReference[];

/**
   * The EDIFACT validation override settings.
   */
readonly validationOverrides?: EdifactValidationOverride[];

/**
   * The EDIFACT validation settings.
   */
readonly validationSettings: EdifactValidationSettings;

/**
   * The acknowledgement control number lower bound.
   */
readonly acknowledgementControlNumberLowerBound: number;

/**
   * The acknowledgement control number prefix.
   */
readonly acknowledgementControlNumberPrefix?: string;

/**
   * The acknowledgement control number suffix.
   */
readonly acknowledgementControlNumberSuffix?: string;

/**
   * The acknowledgement control number upper bound.
   */
readonly acknowledgementControlNumberUpperBound: number;

/**
   * The value indicating whether to batch functional acknowledgements.
   */
readonly batchFunctionalAcknowledgements: bool;

/**
   * The value indicating whether to batch the technical acknowledgements.
   */
readonly batchTechnicalAcknowledgements: bool;

/**
   * The value indicating whether functional acknowledgement is needed.
   */
readonly needFunctionalAcknowledgement: bool;

/**
   * The value indicating whether a loop is needed for valid messages.
   */
readonly needLoopForValidMessages: bool;

/**
   * The value indicating whether technical acknowledgement is needed.
   */
readonly needTechnicalAcknowledgement: bool;

/**
   * The value indicating whether to rollover acknowledgement control number.
   */
readonly rolloverAcknowledgementControlNumber: bool;

/**
   * The value indicating whether to send synchronous acknowledgement.
   */
readonly sendSynchronousAcknowledgement: bool;

/**
   * The component separator.
   */
readonly componentSeparator: number;

/**
   * The data element separator.
   */
readonly dataElementSeparator: number;

/**
   * The decimal point indicator.
   */
readonly decimalPointIndicator: 'Comma''Decimal''NotSpecified';

/**
   * The message association assigned code.
   */
readonly messageAssociationAssignedCode?: string;

/**
   * The message id.
   */
readonly messageId?: string;

/**
   * The message release.
   */
readonly messageRelease?: string;

/**
   * The message version.
   */
readonly messageVersion?: string;

/**
   * The release indicator.
   */
readonly releaseIndicator: number;

/**
   * The repetition separator.
   */
readonly repetitionSeparator: number;

/**
   * The segment terminator.
   */
readonly segmentTerminator: number;

/**
   * The segment terminator suffix.
   */
readonly segmentTerminatorSuffix: 'CR''CRLF''LF''None''NotSpecified';

/**
   * The target namespace on which this delimiter settings has to be applied.
   */
readonly targetNamespace?: string;

/**
   * The application password.
   */
readonly applicationPassword?: string;

/**
   * The association assigned code.
   */
readonly associationAssignedCode?: string;

/**
   * The controlling agency code.
   */
readonly controllingAgencyCode?: string;

/**
   * The functional group id.
   */
readonly functionalGroupId?: string;

/**
   * The group header message release.
   */
readonly groupHeaderMessageRelease?: string;

/**
   * The group header message version.
   */
readonly groupHeaderMessageVersion?: string;

/**
   * The message association assigned code.
   */
readonly messageAssociationAssignedCode?: string;

/**
   * The message id on which this envelope settings has to be applied.
   */
readonly messageId?: string;

/**
   * The message release version on which this envelope settings has to be applied.
   */
readonly messageRelease?: string;

/**
   * The message version on which this envelope settings has to be applied.
   */
readonly messageVersion?: string;

/**
   * The receiver application id.
   */
readonly receiverApplicationId?: string;

/**
   * The receiver application qualifier.
   */
readonly receiverApplicationQualifier?: string;

/**
   * The sender application id.
   */
readonly senderApplicationId?: string;

/**
   * The sender application qualifier.
   */
readonly senderApplicationQualifier?: string;

/**
   * The target namespace on which this envelope settings has to be applied.
   */
readonly targetNamespace?: string;

/**
   * The application reference id.
   */
readonly applicationReferenceId?: string;

/**
   * The value indicating whether to apply delimiter string advice.
   */
readonly applyDelimiterStringAdvice: bool;

/**
   * The communication agreement id.
   */
readonly communicationAgreementId?: string;

/**
   * The value indicating whether to create grouping segments.
   */
readonly createGroupingSegments: bool;

/**
   * The value indicating whether to enable default group headers.
   */
readonly enableDefaultGroupHeaders: bool;

/**
   * The functional group id.
   */
readonly functionalGroupId?: string;

/**
   * The group application password.
   */
readonly groupApplicationPassword?: string;

/**
   * The group application receiver id.
   */
readonly groupApplicationReceiverId?: string;

/**
   * The group application receiver qualifier.
   */
readonly groupApplicationReceiverQualifier?: string;

/**
   * The group application sender id.
   */
readonly groupApplicationSenderId?: string;

/**
   * The group application sender qualifier.
   */
readonly groupApplicationSenderQualifier?: string;

/**
   * The group association assigned code.
   */
readonly groupAssociationAssignedCode?: string;

/**
   * The group controlling agency code.
   */
readonly groupControllingAgencyCode?: string;

/**
   * The group control number lower bound.
   */
readonly groupControlNumberLowerBound: number;

/**
   * The group control number prefix.
   */
readonly groupControlNumberPrefix?: string;

/**
   * The group control number suffix.
   */
readonly groupControlNumberSuffix?: string;

/**
   * The group control number upper bound.
   */
readonly groupControlNumberUpperBound: number;

/**
   * The group message release.
   */
readonly groupMessageRelease?: string;

/**
   * The group message version.
   */
readonly groupMessageVersion?: string;

/**
   * The interchange control number lower bound.
   */
readonly interchangeControlNumberLowerBound: number;

/**
   * The interchange control number prefix.
   */
readonly interchangeControlNumberPrefix?: string;

/**
   * The interchange control number suffix.
   */
readonly interchangeControlNumberSuffix?: string;

/**
   * The interchange control number upper bound.
   */
readonly interchangeControlNumberUpperBound: number;

/**
   * The value indicating whether the message is a test interchange.
   */
readonly isTestInterchange: bool;

/**
   * The value indicating whether to overwrite existing transaction set control number.
   */
readonly overwriteExistingTransactionSetControlNumber: bool;

/**
   * The processing priority code.
   */
readonly processingPriorityCode?: string;

/**
   * The receiver internal identification.
   */
readonly receiverInternalIdentification?: string;

/**
   * The receiver internal sub identification.
   */
readonly receiverInternalSubIdentification?: string;

/**
   * The receiver reverse routing address.
   */
readonly receiverReverseRoutingAddress?: string;

/**
   * The recipient reference password qualifier.
   */
readonly recipientReferencePasswordQualifier?: string;

/**
   * The recipient reference password value.
   */
readonly recipientReferencePasswordValue?: string;

/**
   * The value indicating whether to rollover group control number.
   */
readonly rolloverGroupControlNumber: bool;

/**
   * The value indicating whether to rollover interchange control number.
   */
readonly rolloverInterchangeControlNumber: bool;

/**
   * The value indicating whether to rollover transaction set control number.
   */
readonly rolloverTransactionSetControlNumber: bool;

/**
   * The sender internal identification.
   */
readonly senderInternalIdentification?: string;

/**
   * The sender internal sub identification.
   */
readonly senderInternalSubIdentification?: string;

/**
   * The sender reverse routing address.
   */
readonly senderReverseRoutingAddress?: string;

/**
   * The transaction set control number lower bound.
   */
readonly transactionSetControlNumberLowerBound: number;

/**
   * The transaction set control number prefix.
   */
readonly transactionSetControlNumberPrefix?: string;

/**
   * The transaction set control number suffix.
   */
readonly transactionSetControlNumberSuffix?: string;

/**
   * The transaction set control number upper bound.
   */
readonly transactionSetControlNumberUpperBound: number;

/**
   * The character encoding.
   */
readonly characterEncoding?: string;

/**
   * The EDIFACT frame setting characterSet.
   */
readonly characterSet: 'KECA''NotSpecified''UNOA''UNOB''UNOC''UNOD''UNOE''UNOF''UNOG''UNOH''UNOI''UNOJ''UNOK''UNOX''UNOY';

/**
   * The component separator.
   */
readonly componentSeparator: number;

/**
   * The data element separator.
   */
readonly dataElementSeparator: number;

/**
   * The EDIFACT frame setting decimal indicator.
   */
readonly decimalPointIndicator: 'Comma''Decimal''NotSpecified';

/**
   * The protocol version.
   */
readonly protocolVersion: number;

/**
   * The release indicator.
   */
readonly releaseIndicator: number;

/**
   * The repetition separator.
   */
readonly repetitionSeparator: number;

/**
   * The segment terminator.
   */
readonly segmentTerminator: number;

/**
   * The EDIFACT frame setting segment terminator suffix.
   */
readonly segmentTerminatorSuffix: 'CR''CRLF''LF''None''NotSpecified';

/**
   * The service code list directory version.
   */
readonly serviceCodeListDirectoryVersion?: string;

/**
   * The message filter type.
   */
readonly messageFilterType: 'Exclude''Include''NotSpecified';

/**
   * The message id on which this envelope settings has to be applied.
   */
readonly messageId: string;

/**
   * The value indicating whether to create empty xml tags for trailing separators.
   */
readonly createEmptyXmlTagsForTrailingSeparators: bool;

/**
   * The value indicating whether to mask security information.
   */
readonly maskSecurityInfo: bool;

/**
   * The value indicating whether to preserve interchange.
   */
readonly preserveInterchange: bool;

/**
   * The value indicating whether to suspend interchange on error.
   */
readonly suspendInterchangeOnError: bool;

/**
   * The value indicating whether to use dot as decimal separator.
   */
readonly useDotAsDecimalSeparator: bool;

/**
   * The association assigned code.
   */
readonly associationAssignedCode?: string;

/**
   * The message id.
   */
readonly messageId: string;

/**
   * The message release version.
   */
readonly messageRelease: string;

/**
   * The message version.
   */
readonly messageVersion: string;

/**
   * The schema name.
   */
readonly schemaName: string;

/**
   * The sender application id.
   */
readonly senderApplicationId?: string;

/**
   * The sender application qualifier.
   */
readonly senderApplicationQualifier?: string;

/**
   * The value indicating whether to allow leading and trailing spaces and zeroes.
   */
readonly allowLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to validate character Set.
   */
readonly enforceCharacterSet: bool;

/**
   * The message id on which the validation settings has to be applied.
   */
readonly messageId: string;

/**
   * The trailing separator policy.
   */
readonly trailingSeparatorPolicy: 'Mandatory''NotAllowed''NotSpecified''Optional';

/**
   * The value indicating whether to trim leading and trailing spaces and zeroes.
   */
readonly trimLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to validate EDI types.
   */
readonly validateEDITypes: bool;

/**
   * The value indicating whether to validate XSD types.
   */
readonly validateXSDTypes: bool;

/**
   * The value indicating whether to allow leading and trailing spaces and zeroes.
   */
readonly allowLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to check for duplicate group control number.
   */
readonly checkDuplicateGroupControlNumber: bool;

/**
   * The value indicating whether to check for duplicate interchange control number.
   */
readonly checkDuplicateInterchangeControlNumber: bool;

/**
   * The value indicating whether to check for duplicate transaction set control number.
   */
readonly checkDuplicateTransactionSetControlNumber: bool;

/**
   * The validity period of interchange control number.
   */
readonly interchangeControlNumberValidityDays: number;

/**
   * The trailing separator policy.
   */
readonly trailingSeparatorPolicy: 'Mandatory''NotAllowed''NotSpecified''Optional';

/**
   * The value indicating whether to trim leading and trailing spaces and zeroes.
   */
readonly trimLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to validate character set in the message.
   */
readonly validateCharacterSet: bool;

/**
   * The value indicating whether to Whether to validate EDI types.
   */
readonly validateEDITypes: bool;

/**
   * The value indicating whether to Whether to validate XSD types.
   */
readonly validateXSDTypes: bool;

/**
   * The X12 one-way receive agreement.
   */
readonly receiveAgreement: X12OneWayAgreement;

/**
   * The X12 one-way send agreement.
   */
readonly sendAgreement: X12OneWayAgreement;

/**
   * The X12 protocol settings.
   */
readonly protocolSettings: X12ProtocolSettings;

/**
   * The receiver business identity
   */
readonly receiverBusinessIdentity: BusinessIdentity;

/**
   * The sender business identity
   */
readonly senderBusinessIdentity: BusinessIdentity;

/**
   * The X12 acknowledgment settings.
   */
readonly acknowledgementSettings: X12AcknowledgementSettings;

/**
   * The X12 envelope override settings.
   */
readonly envelopeOverrides?: X12EnvelopeOverride[];

/**
   * The X12 envelope settings.
   */
readonly envelopeSettings: X12EnvelopeSettings;

/**
   * The X12 framing settings.
   */
readonly framingSettings: X12FramingSettings;

/**
   * The X12 message filter.
   */
readonly messageFilter: X12MessageFilter;

/**
   * The X12 message filter list.
   */
readonly messageFilterList?: X12MessageIdentifier[];

/**
   * The X12 processing settings.
   */
readonly processingSettings: X12ProcessingSettings;

/**
   * The X12 schema references.
   */
readonly schemaReferences: X12SchemaReference[];

/**
   * The X12 security settings.
   */
readonly securitySettings: X12SecuritySettings;

/**
   * The X12 validation override settings.
   */
readonly validationOverrides?: X12ValidationOverride[];

/**
   * The X12 validation settings.
   */
readonly validationSettings: X12ValidationSettings;

/**
   * The X12 delimiter override settings.
   */
readonly x12DelimiterOverrides?: X12DelimiterOverrides[];

/**
   * The acknowledgement control number lower bound.
   */
readonly acknowledgementControlNumberLowerBound: number;

/**
   * The acknowledgement control number prefix.
   */
readonly acknowledgementControlNumberPrefix?: string;

/**
   * The acknowledgement control number suffix.
   */
readonly acknowledgementControlNumberSuffix?: string;

/**
   * The acknowledgement control number upper bound.
   */
readonly acknowledgementControlNumberUpperBound: number;

/**
   * The value indicating whether to batch functional acknowledgements.
   */
readonly batchFunctionalAcknowledgements: bool;

/**
   * The value indicating whether to batch implementation acknowledgements.
   */
readonly batchImplementationAcknowledgements: bool;

/**
   * The value indicating whether to batch the technical acknowledgements.
   */
readonly batchTechnicalAcknowledgements: bool;

/**
   * The functional acknowledgement version.
   */
readonly functionalAcknowledgementVersion?: string;

/**
   * The implementation acknowledgement version.
   */
readonly implementationAcknowledgementVersion?: string;

/**
   * The value indicating whether functional acknowledgement is needed.
   */
readonly needFunctionalAcknowledgement: bool;

/**
   * The value indicating whether implementation acknowledgement is needed.
   */
readonly needImplementationAcknowledgement: bool;

/**
   * The value indicating whether a loop is needed for valid messages.
   */
readonly needLoopForValidMessages: bool;

/**
   * The value indicating whether technical acknowledgement is needed.
   */
readonly needTechnicalAcknowledgement: bool;

/**
   * The value indicating whether to rollover acknowledgement control number.
   */
readonly rolloverAcknowledgementControlNumber: bool;

/**
   * The value indicating whether to send synchronous acknowledgement.
   */
readonly sendSynchronousAcknowledgement: bool;

/**
   * The date format.
   */
readonly dateFormat: 'CCYYMMDD''NotSpecified''YYMMDD';

/**
   * The functional identifier code.
   */
readonly functionalIdentifierCode?: string;

/**
   * The header version.
   */
readonly headerVersion: string;

/**
   * The message id on which this envelope settings has to be applied.
   */
readonly messageId: string;

/**
   * The protocol version on which this envelope settings has to be applied.
   */
readonly protocolVersion: string;

/**
   * The receiver application id.
   */
readonly receiverApplicationId: string;

/**
   * The responsible agency code.
   */
readonly responsibleAgencyCode: string;

/**
   * The sender application id.
   */
readonly senderApplicationId: string;

/**
   * The target namespace on which this envelope settings has to be applied.
   */
readonly targetNamespace: string;

/**
   * The time format.
   */
readonly timeFormat: 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified';

/**
   * The controls standards id.
   */
readonly controlStandardsId: number;

/**
   * The control version number.
   */
readonly controlVersionNumber: string;

/**
   * The value indicating whether to enable default group headers.
   */
readonly enableDefaultGroupHeaders: bool;

/**
   * The functional group id.
   */
readonly functionalGroupId?: string;

/**
   * The group control number lower bound.
   */
readonly groupControlNumberLowerBound: number;

/**
   * The group control number upper bound.
   */
readonly groupControlNumberUpperBound: number;

/**
   * The group header agency code.
   */
readonly groupHeaderAgencyCode: string;

/**
   * The group header date format.
   */
readonly groupHeaderDateFormat: 'CCYYMMDD''NotSpecified''YYMMDD';

/**
   * The group header time format.
   */
readonly groupHeaderTimeFormat: 'HHMM''HHMMSS''HHMMSSd''HHMMSSdd''NotSpecified';

/**
   * The group header version.
   */
readonly groupHeaderVersion: string;

/**
   * The interchange  control number lower bound.
   */
readonly interchangeControlNumberLowerBound: number;

/**
   * The interchange  control number upper bound.
   */
readonly interchangeControlNumberUpperBound: number;

/**
   * The value indicating whether to overwrite existing transaction set control number.
   */
readonly overwriteExistingTransactionSetControlNumber: bool;

/**
   * The receiver application id.
   */
readonly receiverApplicationId: string;

/**
   * The value indicating whether to rollover group control number.
   */
readonly rolloverGroupControlNumber: bool;

/**
   * The value indicating whether to rollover interchange control number.
   */
readonly rolloverInterchangeControlNumber: bool;

/**
   * The value indicating whether to rollover transaction set control number.
   */
readonly rolloverTransactionSetControlNumber: bool;

/**
   * The sender application id.
   */
readonly senderApplicationId: string;

/**
   * The transaction set control number lower bound.
   */
readonly transactionSetControlNumberLowerBound: number;

/**
   * The transaction set control number prefix.
   */
readonly transactionSetControlNumberPrefix?: string;

/**
   * The transaction set control number suffix.
   */
readonly transactionSetControlNumberSuffix?: string;

/**
   * The transaction set control number upper bound.
   */
readonly transactionSetControlNumberUpperBound: number;

/**
   * The usage indicator.
   */
readonly usageIndicator: 'Information''NotSpecified''Production''Test';

/**
   * The value indicating whether to use control standards id as repetition character.
   */
readonly useControlStandardsIdAsRepetitionCharacter: bool;

/**
   * The X12 character set.
   */
readonly characterSet: 'Basic''Extended''NotSpecified''UTF8';

/**
   * The component separator.
   */
readonly componentSeparator: number;

/**
   * The data element separator.
   */
readonly dataElementSeparator: number;

/**
   * The replacement character.
   */
readonly replaceCharacter: number;

/**
   * The value indicating whether to replace separators in payload.
   */
readonly replaceSeparatorsInPayload: bool;

/**
   * The segment terminator.
   */
readonly segmentTerminator: number;

/**
   * The segment terminator suffix.
   */
readonly segmentTerminatorSuffix: 'CR''CRLF''LF''None''NotSpecified';

/**
   * The message filter type.
   */
readonly messageFilterType: 'Exclude''Include''NotSpecified';

/**
   * The message id.
   */
readonly messageId: string;

/**
   * The value indicating whether to convert numerical type to implied decimal.
   */
readonly convertImpliedDecimal: bool;

/**
   * The value indicating whether to create empty xml tags for trailing separators.
   */
readonly createEmptyXmlTagsForTrailingSeparators: bool;

/**
   * The value indicating whether to mask security information.
   */
readonly maskSecurityInfo: bool;

/**
   * The value indicating whether to preserve interchange.
   */
readonly preserveInterchange: bool;

/**
   * The value indicating whether to suspend interchange on error.
   */
readonly suspendInterchangeOnError: bool;

/**
   * The value indicating whether to use dot as decimal separator.
   */
readonly useDotAsDecimalSeparator: bool;

/**
   * The message id.
   */
readonly messageId: string;

/**
   * The schema name.
   */
readonly schemaName: string;

/**
   * The schema version.
   */
readonly schemaVersion: string;

/**
   * The sender application id.
   */
readonly senderApplicationId?: string;

/**
   * The authorization qualifier.
   */
readonly authorizationQualifier: string;

/**
   * The authorization value.
   */
readonly authorizationValue?: string;

/**
   * The password value.
   */
readonly passwordValue?: string;

/**
   * The security qualifier.
   */
readonly securityQualifier: string;

/**
   * The value indicating whether to allow leading and trailing spaces and zeroes.
   */
readonly allowLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The message id on which the validation settings has to be applied.
   */
readonly messageId: string;

/**
   * The trailing separator policy.
   */
readonly trailingSeparatorPolicy: 'Mandatory''NotAllowed''NotSpecified''Optional';

/**
   * The value indicating whether to trim leading and trailing spaces and zeroes.
   */
readonly trimLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to validate character Set.
   */
readonly validateCharacterSet: bool;

/**
   * The value indicating whether to validate EDI types.
   */
readonly validateEDITypes: bool;

/**
   * The value indicating whether to validate XSD types.
   */
readonly validateXSDTypes: bool;

/**
   * The value indicating whether to allow leading and trailing spaces and zeroes.
   */
readonly allowLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to check for duplicate group control number.
   */
readonly checkDuplicateGroupControlNumber: bool;

/**
   * The value indicating whether to check for duplicate interchange control number.
   */
readonly checkDuplicateInterchangeControlNumber: bool;

/**
   * The value indicating whether to check for duplicate transaction set control number.
   */
readonly checkDuplicateTransactionSetControlNumber: bool;

/**
   * The validity period of interchange control number.
   */
readonly interchangeControlNumberValidityDays: number;

/**
   * The trailing separator policy.
   */
readonly trailingSeparatorPolicy: 'Mandatory''NotAllowed''NotSpecified''Optional';

/**
   * The value indicating whether to trim leading and trailing spaces and zeroes.
   */
readonly trimLeadingAndTrailingSpacesAndZeroes: bool;

/**
   * The value indicating whether to validate character set in the message.
   */
readonly validateCharacterSet: bool;

/**
   * The value indicating whether to Whether to validate EDI types.
   */
readonly validateEDITypes: bool;

/**
   * The value indicating whether to Whether to validate XSD types.
   */
readonly validateXSDTypes: bool;

/**
   * The component separator.
   */
readonly componentSeparator: number;

/**
   * The data element separator.
   */
readonly dataElementSeparator: number;

/**
   * The message id.
   */
readonly messageId?: string;

/**
   * The protocol version.
   */
readonly protocolVersion?: string;

/**
   * The replacement character.
   */
readonly replaceCharacter: number;

/**
   * The value indicating whether to replace separators in payload.
   */
readonly replaceSeparatorsInPayload: bool;

/**
   * The segment terminator.
   */
readonly segmentTerminator: number;

/**
   * The segment terminator suffix.
   */
readonly segmentTerminatorSuffix: 'CR''CRLF''LF''None''NotSpecified';

/**
   * The target namespace on which this delimiter settings has to be applied.
   */
readonly targetNamespace?: string;
}

/**
 * LogicIntegrationaccountsAgreements resource
 */
export class LogicIntegrationaccountsAgreements extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsAgreementsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/agreements@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsAgreementsProps): string {
    return JSON.stringify(
        {properties: {agreementType: "string", content: {aS2: {receiveAgreement: {protocolSettings: {acknowledgementConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, envelopeSettings: {autogenerateFileName: "${bool}", fileNameTemplate: "string", messageContentType: "string", suspendMessageOnFileNameGenerationError: "${bool}", transmitFileNameInMimeHeader: "${bool}"}, errorSettings: {resendIfMDNNotReceived: "${bool}", suspendDuplicateMessage: "${bool}"}, mdnSettings: {dispositionNotificationTo: "string", mdnText: "string", micHashingAlgorithm: "string", needMDN: "${bool}", receiptDeliveryUrl: "string", sendInboundMDNToMessageBox: "${bool}", sendMDNAsynchronously: "${bool}", signMDN: "${bool}", signOutboundMDNIfOptional: "${bool}"}, messageConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, securitySettings: {enableNRRForInboundDecodedMessages: "${bool}", enableNRRForInboundEncodedMessages: "${bool}", enableNRRForInboundMDN: "${bool}", enableNRRForOutboundDecodedMessages: "${bool}", enableNRRForOutboundEncodedMessages: "${bool}", enableNRRForOutboundMDN: "${bool}", encryptionCertificateName: "string", overrideGroupSigningCertificate: "${bool}", sha2AlgorithmFormat: "string", signingCertificateName: "string"}, validationSettings: {checkCertificateRevocationListOnReceive: "${bool}", checkCertificateRevocationListOnSend: "${bool}", checkDuplicateMessage: "${bool}", compressMessage: "${bool}", encryptionAlgorithm: "string", encryptMessage: "${bool}", interchangeDuplicatesValidityDays: "${int}", overrideMessageProperties: "${bool}", signingAlgorithm: "string", signMessage: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, envelopeSettings: {autogenerateFileName: "${bool}", fileNameTemplate: "string", messageContentType: "string", suspendMessageOnFileNameGenerationError: "${bool}", transmitFileNameInMimeHeader: "${bool}"}, errorSettings: {resendIfMDNNotReceived: "${bool}", suspendDuplicateMessage: "${bool}"}, mdnSettings: {dispositionNotificationTo: "string", mdnText: "string", micHashingAlgorithm: "string", needMDN: "${bool}", receiptDeliveryUrl: "string", sendInboundMDNToMessageBox: "${bool}", sendMDNAsynchronously: "${bool}", signMDN: "${bool}", signOutboundMDNIfOptional: "${bool}"}, messageConnectionSettings: {ignoreCertificateNameMismatch: "${bool}", keepHttpConnectionAlive: "${bool}", supportHttpStatusCodeContinue: "${bool}", unfoldHttpHeaders: "${bool}"}, securitySettings: {enableNRRForInboundDecodedMessages: "${bool}", enableNRRForInboundEncodedMessages: "${bool}", enableNRRForInboundMDN: "${bool}", enableNRRForOutboundDecodedMessages: "${bool}", enableNRRForOutboundEncodedMessages: "${bool}", enableNRRForOutboundMDN: "${bool}", encryptionCertificateName: "string", overrideGroupSigningCertificate: "${bool}", sha2AlgorithmFormat: "string", signingCertificateName: "string"}, validationSettings: {checkCertificateRevocationListOnReceive: "${bool}", checkCertificateRevocationListOnSend: "${bool}", checkDuplicateMessage: "${bool}", compressMessage: "${bool}", encryptionAlgorithm: "string", encryptMessage: "${bool}", interchangeDuplicatesValidityDays: "${int}", overrideMessageProperties: "${bool}", signingAlgorithm: "string", signMessage: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}, edifact: {receiveAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: "${int}", acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: "${int}", batchFunctionalAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", needFunctionalAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, edifactDelimiterOverrides: [{componentSeparator: "${int}", dataElementSeparator: "${int}", decimalPointIndicator: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", releaseIndicator: "${int}", repetitionSeparator: "${int}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", targetNamespace: "string"}], envelopeOverrides: [{applicationPassword: "string", associationAssignedCode: "string", controllingAgencyCode: "string", functionalGroupId: "string", groupHeaderMessageRelease: "string", groupHeaderMessageVersion: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", receiverApplicationId: "string", receiverApplicationQualifier: "string", senderApplicationId: "string", senderApplicationQualifier: "string", targetNamespace: "string"}], envelopeSettings: {applicationReferenceId: "string", applyDelimiterStringAdvice: "${bool}", communicationAgreementId: "string", createGroupingSegments: "${bool}", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupApplicationPassword: "string", groupApplicationReceiverId: "string", groupApplicationReceiverQualifier: "string", groupApplicationSenderId: "string", groupApplicationSenderQualifier: "string", groupAssociationAssignedCode: "string", groupControllingAgencyCode: "string", groupControlNumberLowerBound: "${int}", groupControlNumberPrefix: "string", groupControlNumberSuffix: "string", groupControlNumberUpperBound: "${int}", groupMessageRelease: "string", groupMessageVersion: "string", interchangeControlNumberLowerBound: "${int}", interchangeControlNumberPrefix: "string", interchangeControlNumberSuffix: "string", interchangeControlNumberUpperBound: "${int}", isTestInterchange: "${bool}", overwriteExistingTransactionSetControlNumber: "${bool}", processingPriorityCode: "string", receiverInternalIdentification: "string", receiverInternalSubIdentification: "string", receiverReverseRoutingAddress: "string", recipientReferencePasswordQualifier: "string", recipientReferencePasswordValue: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderInternalIdentification: "string", senderInternalSubIdentification: "string", senderReverseRoutingAddress: "string", transactionSetControlNumberLowerBound: "${int}", transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: "${int}"}, framingSettings: {characterEncoding: "string", characterSet: "string", componentSeparator: "${int}", dataElementSeparator: "${int}", decimalPointIndicator: "string", protocolVersion: "${int}", releaseIndicator: "${int}", repetitionSeparator: "${int}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", serviceCodeListDirectoryVersion: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{associationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", schemaName: "string", senderApplicationId: "string", senderApplicationQualifier: "string"}], validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", enforceCharacterSet: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: "${int}", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: "${int}", acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: "${int}", batchFunctionalAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", needFunctionalAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, edifactDelimiterOverrides: [{componentSeparator: "${int}", dataElementSeparator: "${int}", decimalPointIndicator: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", releaseIndicator: "${int}", repetitionSeparator: "${int}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", targetNamespace: "string"}], envelopeOverrides: [{applicationPassword: "string", associationAssignedCode: "string", controllingAgencyCode: "string", functionalGroupId: "string", groupHeaderMessageRelease: "string", groupHeaderMessageVersion: "string", messageAssociationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", receiverApplicationId: "string", receiverApplicationQualifier: "string", senderApplicationId: "string", senderApplicationQualifier: "string", targetNamespace: "string"}], envelopeSettings: {applicationReferenceId: "string", applyDelimiterStringAdvice: "${bool}", communicationAgreementId: "string", createGroupingSegments: "${bool}", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupApplicationPassword: "string", groupApplicationReceiverId: "string", groupApplicationReceiverQualifier: "string", groupApplicationSenderId: "string", groupApplicationSenderQualifier: "string", groupAssociationAssignedCode: "string", groupControllingAgencyCode: "string", groupControlNumberLowerBound: "${int}", groupControlNumberPrefix: "string", groupControlNumberSuffix: "string", groupControlNumberUpperBound: "${int}", groupMessageRelease: "string", groupMessageVersion: "string", interchangeControlNumberLowerBound: "${int}", interchangeControlNumberPrefix: "string", interchangeControlNumberSuffix: "string", interchangeControlNumberUpperBound: "${int}", isTestInterchange: "${bool}", overwriteExistingTransactionSetControlNumber: "${bool}", processingPriorityCode: "string", receiverInternalIdentification: "string", receiverInternalSubIdentification: "string", receiverReverseRoutingAddress: "string", recipientReferencePasswordQualifier: "string", recipientReferencePasswordValue: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderInternalIdentification: "string", senderInternalSubIdentification: "string", senderReverseRoutingAddress: "string", transactionSetControlNumberLowerBound: "${int}", transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: "${int}"}, framingSettings: {characterEncoding: "string", characterSet: "string", componentSeparator: "${int}", dataElementSeparator: "${int}", decimalPointIndicator: "string", protocolVersion: "${int}", releaseIndicator: "${int}", repetitionSeparator: "${int}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", serviceCodeListDirectoryVersion: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{associationAssignedCode: "string", messageId: "string", messageRelease: "string", messageVersion: "string", schemaName: "string", senderApplicationId: "string", senderApplicationQualifier: "string"}], validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", enforceCharacterSet: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: "${int}", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}, x12: {receiveAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: "${int}", acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: "${int}", batchFunctionalAcknowledgements: "${bool}", batchImplementationAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", functionalAcknowledgementVersion: "string", implementationAcknowledgementVersion: "string", needFunctionalAcknowledgement: "${bool}", needImplementationAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, envelopeOverrides: [{dateFormat: "string", functionalIdentifierCode: "string", headerVersion: "string", messageId: "string", protocolVersion: "string", receiverApplicationId: "string", responsibleAgencyCode: "string", senderApplicationId: "string", targetNamespace: "string", timeFormat: "string"}], envelopeSettings: {controlStandardsId: "${int}", controlVersionNumber: "string", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupControlNumberLowerBound: "${int}", groupControlNumberUpperBound: "${int}", groupHeaderAgencyCode: "string", groupHeaderDateFormat: "string", groupHeaderTimeFormat: "string", groupHeaderVersion: "string", interchangeControlNumberLowerBound: "${int}", interchangeControlNumberUpperBound: "${int}", overwriteExistingTransactionSetControlNumber: "${bool}", receiverApplicationId: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderApplicationId: "string", transactionSetControlNumberLowerBound: "${int}", transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: "${int}", usageIndicator: "string", useControlStandardsIdAsRepetitionCharacter: "${bool}"}, framingSettings: {characterSet: "string", componentSeparator: "${int}", dataElementSeparator: "${int}", replaceCharacter: "${int}", replaceSeparatorsInPayload: "${bool}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {convertImpliedDecimal: "${bool}", createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{messageId: "string", schemaName: "string", schemaVersion: "string", senderApplicationId: "string"}], securitySettings: {authorizationQualifier: "string", authorizationValue: "string", passwordValue: "string", securityQualifier: "string"}, validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: "${int}", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}, x12DelimiterOverrides: [{componentSeparator: "${int}", dataElementSeparator: "${int}", messageId: "string", protocolVersion: "string", replaceCharacter: "${int}", replaceSeparatorsInPayload: "${bool}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", targetNamespace: "string"}]}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}, sendAgreement: {protocolSettings: {acknowledgementSettings: {acknowledgementControlNumberLowerBound: "${int}", acknowledgementControlNumberPrefix: "string", acknowledgementControlNumberSuffix: "string", acknowledgementControlNumberUpperBound: "${int}", batchFunctionalAcknowledgements: "${bool}", batchImplementationAcknowledgements: "${bool}", batchTechnicalAcknowledgements: "${bool}", functionalAcknowledgementVersion: "string", implementationAcknowledgementVersion: "string", needFunctionalAcknowledgement: "${bool}", needImplementationAcknowledgement: "${bool}", needLoopForValidMessages: "${bool}", needTechnicalAcknowledgement: "${bool}", rolloverAcknowledgementControlNumber: "${bool}", sendSynchronousAcknowledgement: "${bool}"}, envelopeOverrides: [{dateFormat: "string", functionalIdentifierCode: "string", headerVersion: "string", messageId: "string", protocolVersion: "string", receiverApplicationId: "string", responsibleAgencyCode: "string", senderApplicationId: "string", targetNamespace: "string", timeFormat: "string"}], envelopeSettings: {controlStandardsId: "${int}", controlVersionNumber: "string", enableDefaultGroupHeaders: "${bool}", functionalGroupId: "string", groupControlNumberLowerBound: "${int}", groupControlNumberUpperBound: "${int}", groupHeaderAgencyCode: "string", groupHeaderDateFormat: "string", groupHeaderTimeFormat: "string", groupHeaderVersion: "string", interchangeControlNumberLowerBound: "${int}", interchangeControlNumberUpperBound: "${int}", overwriteExistingTransactionSetControlNumber: "${bool}", receiverApplicationId: "string", rolloverGroupControlNumber: "${bool}", rolloverInterchangeControlNumber: "${bool}", rolloverTransactionSetControlNumber: "${bool}", senderApplicationId: "string", transactionSetControlNumberLowerBound: "${int}", transactionSetControlNumberPrefix: "string", transactionSetControlNumberSuffix: "string", transactionSetControlNumberUpperBound: "${int}", usageIndicator: "string", useControlStandardsIdAsRepetitionCharacter: "${bool}"}, framingSettings: {characterSet: "string", componentSeparator: "${int}", dataElementSeparator: "${int}", replaceCharacter: "${int}", replaceSeparatorsInPayload: "${bool}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string"}, messageFilter: {messageFilterType: "string"}, messageFilterList: [{messageId: "string"}], processingSettings: {convertImpliedDecimal: "${bool}", createEmptyXmlTagsForTrailingSeparators: "${bool}", maskSecurityInfo: "${bool}", preserveInterchange: "${bool}", suspendInterchangeOnError: "${bool}", useDotAsDecimalSeparator: "${bool}"}, schemaReferences: [{messageId: "string", schemaName: "string", schemaVersion: "string", senderApplicationId: "string"}], securitySettings: {authorizationQualifier: "string", authorizationValue: "string", passwordValue: "string", securityQualifier: "string"}, validationOverrides: [{allowLeadingAndTrailingSpacesAndZeroes: "${bool}", messageId: "string", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}], validationSettings: {allowLeadingAndTrailingSpacesAndZeroes: "${bool}", checkDuplicateGroupControlNumber: "${bool}", checkDuplicateInterchangeControlNumber: "${bool}", checkDuplicateTransactionSetControlNumber: "${bool}", interchangeControlNumberValidityDays: "${int}", trailingSeparatorPolicy: "string", trimLeadingAndTrailingSpacesAndZeroes: "${bool}", validateCharacterSet: "${bool}", validateEDITypes: "${bool}", validateXSDTypes: "${bool}"}, x12DelimiterOverrides: [{componentSeparator: "${int}", dataElementSeparator: "${int}", messageId: "string", protocolVersion: "string", replaceCharacter: "${int}", replaceSeparatorsInPayload: "${bool}", segmentTerminator: "${int}", segmentTerminatorSuffix: "string", targetNamespace: "string"}]}, receiverBusinessIdentity: {qualifier: "string", value: "string"}, senderBusinessIdentity: {qualifier: "string", value: "string"}}}}, guestIdentity: {qualifier: "string", value: "string"}, guestPartner: "string", hostIdentity: {qualifier: "string", value: "string"}, hostPartner: "string"}}
    );
  }
}
