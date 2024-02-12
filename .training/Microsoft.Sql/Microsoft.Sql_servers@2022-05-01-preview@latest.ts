import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersProps extends IAzAPIBaseProps {

}

/**
 * SqlServers resource
 */
export class SqlServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", administrators: {administratorType: "ActiveDirectory", azureADOnlyAuthentication: "${bool}", login: "string", principalType: "string", sid: "string", tenantId: "string"}, federatedClientId: "string", keyId: "string", minimalTlsVersion: "string", primaryUserAssignedIdentityId: "string", publicNetworkAccess: "string", restrictOutboundNetworkAccess: "string", version: "string"}}
    );
  }
}
