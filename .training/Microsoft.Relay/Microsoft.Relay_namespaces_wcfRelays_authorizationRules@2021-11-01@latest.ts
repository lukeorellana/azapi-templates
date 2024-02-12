import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesWcfrelaysAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespacesWcfrelaysAuthorizationrules resource
 */
export class RelayNamespacesWcfrelaysAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesWcfrelaysAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesWcfrelaysAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
