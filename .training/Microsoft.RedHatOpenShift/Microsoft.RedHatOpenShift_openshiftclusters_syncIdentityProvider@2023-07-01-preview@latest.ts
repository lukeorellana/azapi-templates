import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersSyncidentityproviderProps extends IAzAPIBaseProps {

}

/**
 * RedhatopenshiftOpenshiftclustersSyncidentityprovider resource
 */
export class RedhatopenshiftOpenshiftclustersSyncidentityprovider extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersSyncidentityproviderProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openshiftclusters/syncIdentityProvider@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersSyncidentityproviderProps): string {
    return JSON.stringify(
        {properties: {resources: "string"}}
    );
  }
}
