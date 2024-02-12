import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityPricingsSecurityoperatorsProps extends IAzAPIBaseProps {

}

/**
 * SecurityPricingsSecurityoperators resource
 */
export class SecurityPricingsSecurityoperators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityPricingsSecurityoperatorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/pricings/securityOperators@2023-01-01-preview";
  }

  protected getResourceBody(props: SecurityPricingsSecurityoperatorsProps): string {
    return JSON.stringify(
        
    );
  }
}
