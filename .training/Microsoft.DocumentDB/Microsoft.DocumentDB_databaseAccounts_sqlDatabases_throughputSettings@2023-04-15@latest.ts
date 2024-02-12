import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesThroughputsettingsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabasesThroughputsettings resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesThroughputsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesThroughputsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesThroughputsettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {autoscaleSettings: {autoUpgradePolicy: {throughputPolicy: {incrementPercent: "${int}", isEnabled: "${bool}"}}, maxThroughput: "${int}"}, throughput: "${int}"}}}
    );
  }
}
