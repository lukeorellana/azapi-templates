import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesHybridconnectionProps extends IAzAPIBaseProps {

}

/**
 * WebSitesHybridconnection resource
 */
export class WebSitesHybridconnection extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesHybridconnectionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/hybridconnection@2022-09-01";
  }

  protected getResourceBody(props: WebSitesHybridconnectionProps): string {
    return JSON.stringify(
        {properties: {biztalkUri: "string", entityConnectionString: "string", entityName: "string", hostname: "string", port: "${int}", resourceConnectionString: "string", resourceType: "string"}, kind: "string"}
    );
  }
}
