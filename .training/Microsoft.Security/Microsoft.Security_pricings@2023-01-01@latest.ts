import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityPricingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityPricings resource
 */
export class SecurityPricings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityPricingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/pricings@2023-01-01";
  }

  protected getResourceBody(props: SecurityPricingsProps): string {
    return JSON.stringify(
        {properties: {extensions: [{additionalExtensionProperties: {}, isEnabled: "string", name: "string"}], pricingTier: "string", subPlan: "string"}}
    );
  }
}
