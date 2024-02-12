import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsPrivatelinkscopesScopedresourcesProps extends IAzAPIBaseProps {

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
