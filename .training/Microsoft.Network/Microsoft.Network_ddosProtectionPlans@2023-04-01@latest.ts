import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDdosprotectionplansProps extends IAzAPIBaseProps {

}

/**
 * NetworkDdosprotectionplans resource
 */
export class NetworkDdosprotectionplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDdosprotectionplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ddosProtectionPlans@2023-04-01";
  }

  protected getResourceBody(props: NetworkDdosprotectionplansProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
