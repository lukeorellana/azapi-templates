import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesStorageaccountcredentials resource
 */
export class DataboxedgeDataboxedgedevicesStorageaccountcredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesStorageaccountcredentialsProps): string {
    return JSON.stringify(
        {properties: {accountKey: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, accountType: "string", alias: "string", blobDomainName: "string", connectionString: "string", sslStatus: "string", storageAccountId: "string", userName: "string"}}
    );
  }
}
