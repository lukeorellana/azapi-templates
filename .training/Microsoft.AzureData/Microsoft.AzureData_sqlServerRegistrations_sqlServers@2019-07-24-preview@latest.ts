import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzuredataSqlserverregistrationsSqlserversProps extends IAzAPIBaseProps {

}

/**
 * AzuredataSqlserverregistrationsSqlservers resource
 */
export class AzuredataSqlserverregistrationsSqlservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzuredataSqlserverregistrationsSqlserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview";
  }

  protected getResourceBody(props: AzuredataSqlserverregistrationsSqlserversProps): string {
    return JSON.stringify(
        {properties: {cores: "${int}", edition: "string", propertyBag: "string", registrationID: "string", version: "string"}}
    );
  }
}
