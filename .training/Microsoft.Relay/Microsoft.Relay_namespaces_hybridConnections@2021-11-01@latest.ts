import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesHybridconnectionsProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespacesHybridconnections resource
 */
export class RelayNamespacesHybridconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesHybridconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/hybridConnections@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesHybridconnectionsProps): string {
    return JSON.stringify(
        {properties: {requiresClientAuthorization: "${bool}", userMetadata: "string"}}
    );
  }
}
