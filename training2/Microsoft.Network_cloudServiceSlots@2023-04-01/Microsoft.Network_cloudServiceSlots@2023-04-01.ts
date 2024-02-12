import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkCloudserviceslotsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Specifies slot info on a cloud service
   */
readonly slotType?: 'Production''Staging';
}

/**
 * NetworkCloudserviceslots resource
 */
export class NetworkCloudserviceslots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkCloudserviceslotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/cloudServiceSlots@2023-04-01";
  }

  protected getResourceBody(props: NetworkCloudserviceslotsProps): string {
    return JSON.stringify(
        {properties: {slotType: "string"}}
    );
  }
}
