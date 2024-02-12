import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsFileservicesProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsFileservices resource
 */
export class StorageStorageaccountsFileservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsFileservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/fileServices@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsFileservicesProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAgeInSeconds: "${int}"}]}, protocolSettings: {smb: {authenticationMethods: "string", channelEncryption: "string", kerberosTicketEncryption: "string", multichannel: {enabled: "${bool}"}, versions: "string"}}, shareDeleteRetentionPolicy: {allowPermanentDelete: "${bool}", days: "${int}", enabled: "${bool}"}}}
    );
  }
}
