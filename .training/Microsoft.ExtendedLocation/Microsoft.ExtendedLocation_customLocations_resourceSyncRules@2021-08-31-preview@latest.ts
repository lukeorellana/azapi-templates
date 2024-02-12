import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ExtendedlocationCustomlocationsResourcesyncrulesProps extends IAzAPIBaseProps {

}

/**
 * ExtendedlocationCustomlocationsResourcesyncrules resource
 */
export class ExtendedlocationCustomlocationsResourcesyncrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ExtendedlocationCustomlocationsResourcesyncrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview";
  }

  protected getResourceBody(props: ExtendedlocationCustomlocationsResourcesyncrulesProps): string {
    return JSON.stringify(
        {properties: {priority: "${int}", selector: {matchExpressions: [{key: "string", operator: "string", values: ["string"]}], matchLabels: {}}, targetResourceGroup: "string"}}
    );
  }
}
