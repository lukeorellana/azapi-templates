import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsPrivatelinkscopesScopedresourcesProps extends IAzAPIBaseProps {
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
 * InsightsPrivatelinkscopesScopedresources resource
 */
export class InsightsPrivatelinkscopesScopedresources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsPrivatelinkscopesScopedresourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview";
  }

  protected getResourceBody(props: InsightsPrivatelinkscopesScopedresourcesProps): string {
    return JSON.stringify(
        {properties: {linkedResourceId: "string"}}
    );
  }
}
