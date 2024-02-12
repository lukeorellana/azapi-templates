import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesHybridconnectionsAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespacesHybridconnectionsAuthorizationrules resource
 */
export class RelayNamespacesHybridconnectionsAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesHybridconnectionsAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesHybridconnectionsAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
