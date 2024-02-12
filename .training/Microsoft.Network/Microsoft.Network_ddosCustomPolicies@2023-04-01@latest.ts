import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDdoscustompoliciesProps extends IAzAPIBaseProps {

}

/**
 * NetworkDdoscustompolicies resource
 */
export class NetworkDdoscustompolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDdoscustompoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ddosCustomPolicies@2023-04-01";
  }

  protected getResourceBody(props: NetworkDdoscustompoliciesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
