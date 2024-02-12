import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsHybridconnectionProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsHybridconnection resource
 */
export class WebSitesSlotsHybridconnection extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsHybridconnectionProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/hybridconnection@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsHybridconnectionProps): string {
    return JSON.stringify(
        {properties: {biztalkUri: "string", entityConnectionString: "string", entityName: "string", hostname: "string", port: "${int}", resourceConnectionString: "string", resourceType: "string"}, kind: "string"}
    );
  }
}
