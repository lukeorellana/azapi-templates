import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServers resource
 */
export class DbformariadbServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersProps): string {
    return JSON.stringify(
        {properties: {minimalTlsVersion: "string", publicNetworkAccess: "string", sslEnforcement: "string", storageProfile: {backupRetentionDays: "${int}", geoRedundantBackup: "string", storageAutogrow: "string", storageMB: "${int}"}, version: "string", createMode: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
