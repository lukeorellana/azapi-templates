import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeys resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesClientencryptionkeysProps): string {
    return JSON.stringify(
        {properties: {resource: {encryptionAlgorithm: "string", id: "string", keyWrapMetadata: {algorithm: "string", name: "string", type: "string", value: "string"}}}}
    );
  }
}
