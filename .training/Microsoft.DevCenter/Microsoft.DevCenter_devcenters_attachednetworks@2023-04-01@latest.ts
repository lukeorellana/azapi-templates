import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersAttachednetworksProps extends IAzAPIBaseProps {

}

/**
 * DevcenterDevcentersAttachednetworks resource
 */
export class DevcenterDevcentersAttachednetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersAttachednetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersAttachednetworksProps): string {
    return JSON.stringify(
        {properties: {networkConnectionId: "string"}}
    );
  }
}
