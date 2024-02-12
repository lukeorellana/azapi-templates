import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeRestorepointcollectionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeRestorepointcollections resource
 */
export class ComputeRestorepointcollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeRestorepointcollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/restorePointCollections@2023-03-01";
  }

  protected getResourceBody(props: ComputeRestorepointcollectionsProps): string {
    return JSON.stringify(
        {properties: {source: {id: "string"}}}
    );
  }
}
