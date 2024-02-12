import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedidentityUserassignedidentitiesProps extends IAzAPIBaseProps {

}

/**
 * ManagedidentityUserassignedidentities resource
 */
export class ManagedidentityUserassignedidentities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedidentityUserassignedidentitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31";
  }

  protected getResourceBody(props: ManagedidentityUserassignedidentitiesProps): string {
    return JSON.stringify(
        
    );
  }
}
