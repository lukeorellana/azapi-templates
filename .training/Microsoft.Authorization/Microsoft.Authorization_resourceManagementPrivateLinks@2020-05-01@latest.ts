import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationResourcemanagementprivatelinksProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationResourcemanagementprivatelinks resource
 */
export class AuthorizationResourcemanagementprivatelinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationResourcemanagementprivatelinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01";
  }

  protected getResourceBody(props: AuthorizationResourcemanagementprivatelinksProps): string {
    return JSON.stringify(
        
    );
  }
}
