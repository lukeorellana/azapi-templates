import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbiWorkspacecollectionsProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: AzureSku;

/**
   * SKU tier
   */
readonly tier: 'Standard';
}

/**
 * PowerbiWorkspacecollections resource
 */
export class PowerbiWorkspacecollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbiWorkspacecollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBI/workspaceCollections@2016-01-29";
  }

  protected getResourceBody(props: PowerbiWorkspacecollectionsProps): string {
    return JSON.stringify(
        {sku: {name: "S1", tier: "Standard"}}
    );
  }
}
