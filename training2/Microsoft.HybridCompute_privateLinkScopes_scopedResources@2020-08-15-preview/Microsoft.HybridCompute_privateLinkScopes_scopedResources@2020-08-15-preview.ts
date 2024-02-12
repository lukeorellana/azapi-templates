import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputePrivatelinkscopesScopedresourcesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateLinkScopes;

/**
   * The resource id of the scoped Azure monitor resource.
   */
readonly linkedResourceId?: string;
}

/**
 * HybridcomputePrivatelinkscopesScopedresources resource
 */
export class HybridcomputePrivatelinkscopesScopedresources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputePrivatelinkscopesScopedresourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview";
  }

  protected getResourceBody(props: HybridcomputePrivatelinkscopesScopedresourcesProps): string {
    return JSON.stringify(
        {properties: {linkedResourceId: "string"}}
    );
  }
}
