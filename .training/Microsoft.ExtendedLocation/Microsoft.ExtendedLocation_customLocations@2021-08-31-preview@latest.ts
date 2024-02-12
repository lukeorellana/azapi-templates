import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ExtendedlocationCustomlocationsProps extends IAzAPIBaseProps {

}

/**
 * ExtendedlocationCustomlocations resource
 */
export class ExtendedlocationCustomlocations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ExtendedlocationCustomlocationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ExtendedLocation/customLocations@2021-08-31-preview";
  }

  protected getResourceBody(props: ExtendedlocationCustomlocationsProps): string {
    return JSON.stringify(
        {properties: {authentication: {type: "string", value: "string"}, clusterExtensionIds: ["string"], displayName: "string", hostResourceId: "string", hostType: "Kubernetes", namespace: "string", provisioningState: "string"}}
    );
  }
}
