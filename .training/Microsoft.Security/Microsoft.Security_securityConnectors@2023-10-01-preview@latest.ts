import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecurityconnectorsProps extends IAzAPIBaseProps {

}

/**
 * SecuritySecurityconnectors resource
 */
export class SecuritySecurityconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecurityconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityConnectors@2023-10-01-preview";
  }

  protected getResourceBody(props: SecuritySecurityconnectorsProps): string {
    return JSON.stringify(
        {properties: {environmentData: {environmentType: "string"}, environmentName: "string", hierarchyIdentifier: "string", offerings: [{offeringType: "string"}]}, kind: "string", etag: "string"}
    );
  }
}
