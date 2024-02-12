import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespacesAuthorizationrules resource
 */
export class RelayNamespacesAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/authorizationRules@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
