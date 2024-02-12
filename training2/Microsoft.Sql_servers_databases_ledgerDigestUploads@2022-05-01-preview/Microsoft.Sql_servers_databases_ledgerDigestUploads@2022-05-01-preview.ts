import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesLedgerdigestuploadsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The digest storage endpoint, which must be either an Azure blob storage endpoint or an URI for Azure Confidential Ledger.
   */
readonly digestStorageEndpoint?: string;
}

/**
 * SqlServersDatabasesLedgerdigestuploads resource
 */
export class SqlServersDatabasesLedgerdigestuploads extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesLedgerdigestuploadsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/ledgerDigestUploads@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesLedgerdigestuploadsProps): string {
    return JSON.stringify(
        {properties: {digestStorageEndpoint: "string"}}
    );
  }
}
