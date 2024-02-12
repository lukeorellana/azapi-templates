import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxJobsProps extends IAzAPIBaseProps {

}

/**
 * DataboxJobs resource
 */
export class DataboxJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBox/jobs@2022-09-01";
  }

  protected getResourceBody(props: DataboxJobsProps): string {
    return JSON.stringify(
        {properties: {deliveryInfo: {scheduledDateTime: "string"}, deliveryType: "string", details: {contactDetails: {contactName: "string", emailList: ["string"], mobile: "string", notificationPreference: [{sendNotification: "${bool}", stageName: "string"}], phone: "string", phoneExtension: "string"}, dataExportDetails: [{accountDetails: {sharePassword: "string", dataAccountType: "string"}, logCollectionLevel: "string", transferConfiguration: {transferAllDetails: {include: {dataAccountType: "string", transferAllBlobs: "${bool}", transferAllFiles: "${bool}"}}, transferConfigurationType: "string", transferFilterDetails: {include: {azureFileFilterDetails: {filePathList: ["string"], filePrefixList: ["string"], fileShareList: ["string"]}, blobFilterDetails: {blobPathList: ["string"], blobPrefixList: ["string"], containerList: ["string"]}, dataAccountType: "string", filterFileDetails: [{filterFilePath: "string", filterFileType: "string"}]}}}}], dataImportDetails: [{accountDetails: {sharePassword: "string", dataAccountType: "string"}, logCollectionLevel: "string"}], expectedDataSizeInTeraBytes: "${int}", keyEncryptionKey: {identityProperties: {type: "string", userAssigned: {resourceId: "string"}}, kekType: "string", kekUrl: "string", kekVaultResourceID: "string"}, preferences: {encryptionPreferences: {doubleEncryption: "string"}, preferredDataCenterRegion: ["string"], reverseTransportPreferences: {preferredShipmentType: "string"}, storageAccountAccessTierPreferences: "string", transportPreferences: {preferredShipmentType: "string"}}, reverseShippingDetails: {contactDetails: {contactName: "string", mobile: "string", phone: "string", phoneExtension: "string"}, shippingAddress: {addressType: "string", city: "string", companyName: "string", country: "string", postalCode: "string", stateOrProvince: "string", streetAddress1: "string", streetAddress2: "string", streetAddress3: "string", zipExtendedCode: "string"}}, shippingAddress: {addressType: "string", city: "string", companyName: "string", country: "string", postalCode: "string", stateOrProvince: "string", streetAddress1: "string", streetAddress2: "string", streetAddress3: "string", zipExtendedCode: "string"}, jobDetailsType: "string"}, transferType: "string"}, sku: {displayName: "string", family: "string", name: "string"}}
    );
  }
}
