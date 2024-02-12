import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesResourcegroupsProps extends IAzAPIBaseProps {
/**
   * The ID of the resource that manages this resource group.
   */
readonly managedBy?: string;
}

/**
 * ResourcesResourcegroups resource
 */
export class ResourcesResourcegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesResourcegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/resourceGroups@2022-09-01";
  }

  protected getResourceBody(props: ResourcesResourcegroupsProps): string {
    return JSON.stringify(
        {properties: {}, managedBy: "string"}
    );
  }
}
