import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlserverinstances resource
 */
export class AzurearcdataSqlserverinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesProps): string {
    return JSON.stringify(
        {properties: {azureDefenderStatus: "string", azureDefenderStatusLastUpdated: "string", collation: "string", containerResourceId: "string", cores: "string", currentVersion: "string", edition: "string", hostType: "string", instanceName: "string", licenseType: "string", patchLevel: "string", productId: "string", status: "string", tcpDynamicPorts: "string", tcpStaticPorts: "string", vCore: "string", version: "string"}}
    );
  }
}
