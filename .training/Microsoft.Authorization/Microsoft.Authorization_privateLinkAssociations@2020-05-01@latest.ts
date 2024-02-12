import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPrivatelinkassociationsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationPrivatelinkassociations resource
 */
export class AuthorizationPrivatelinkassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationPrivatelinkassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/privateLinkAssociations@2020-05-01";
  }

  protected getResourceBody(props: AuthorizationPrivatelinkassociationsProps): string {
    return JSON.stringify(
        {properties: {privateLink: "string", publicNetworkAccess: "string"}}
    );
  }
}
