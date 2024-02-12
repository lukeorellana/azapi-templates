import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationPrivatelinkassociationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The rmpl Resource ID.
   */
readonly privateLink?: string;

/**
   * 
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';
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
