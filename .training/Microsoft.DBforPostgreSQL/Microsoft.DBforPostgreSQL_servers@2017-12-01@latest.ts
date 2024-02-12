import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServers resource
 */
export class DbforpostgresqlServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersProps): string {
    return JSON.stringify(
        {properties: {infrastructureEncryption: "string", minimalTlsVersion: "string", publicNetworkAccess: "string", sslEnforcement: "string", storageProfile: {backupRetentionDays: "${int}", geoRedundantBackup: "string", storageAutogrow: "string", storageMB: "${int}"}, version: "string", createMode: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
