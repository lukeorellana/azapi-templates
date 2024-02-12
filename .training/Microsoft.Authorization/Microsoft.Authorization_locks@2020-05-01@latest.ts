import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationLocksProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationLocks resource
 */
export class AuthorizationLocks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationLocksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/locks@2020-05-01";
  }

  protected getResourceBody(props: AuthorizationLocksProps): string {
    return JSON.stringify(
        {properties: {level: "string", notes: "string", owners: [{applicationId: "string"}]}}
    );
  }
}
