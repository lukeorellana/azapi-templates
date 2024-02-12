import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityConnectorsProps extends IAzAPIBaseProps {

}

/**
 * SecurityConnectors resource
 */
export class SecurityConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/connectors@2020-01-01-preview";
  }

  protected getResourceBody(props: SecurityConnectorsProps): string {
    return JSON.stringify(
        {properties: {authenticationDetails: {grantedPermissions: ["string"], authenticationType: "string"}, hybridComputeSettings: {autoProvision: "string", proxyServer: {ip: "string", port: "string"}, region: "string", resourceGroupName: "string", servicePrincipal: {applicationId: "string", secret: "string"}}}}
    );
  }
}
