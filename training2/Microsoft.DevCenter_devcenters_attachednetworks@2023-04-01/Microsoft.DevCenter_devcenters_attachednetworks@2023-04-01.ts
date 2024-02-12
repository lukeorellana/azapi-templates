import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersAttachednetworksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:devcenters;

/**
   * The resource ID of the NetworkConnection you want to attach.
   */
readonly networkConnectionId: string;
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
