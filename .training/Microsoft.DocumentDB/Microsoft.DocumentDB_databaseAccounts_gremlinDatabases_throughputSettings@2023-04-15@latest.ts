import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsGremlindatabasesThroughputsettingsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsGremlindatabasesThroughputsettings resource
 */
export class DocumentdbDatabaseaccountsGremlindatabasesThroughputsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsGremlindatabasesThroughputsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsGremlindatabasesThroughputsettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {autoscaleSettings: {autoUpgradePolicy: {throughputPolicy: {incrementPercent: "${int}", isEnabled: "${bool}"}}, maxThroughput: "${int}"}, throughput: "${int}"}}}
    );
  }
}
