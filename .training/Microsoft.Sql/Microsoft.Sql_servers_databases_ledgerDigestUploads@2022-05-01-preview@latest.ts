import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesLedgerdigestuploadsProps extends IAzAPIBaseProps {

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
