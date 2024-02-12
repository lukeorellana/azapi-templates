import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsTablesThroughputsettingsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsTablesThroughputsettings resource
 */
export class DocumentdbDatabaseaccountsTablesThroughputsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsTablesThroughputsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsTablesThroughputsettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {autoscaleSettings: {autoUpgradePolicy: {throughputPolicy: {incrementPercent: "${int}", isEnabled: "${bool}"}}, maxThroughput: "${int}"}, throughput: "${int}"}}}
    );
  }
}
