import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesHybridconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Returns true if client authorization is needed for this hybrid connection; otherwise, false.
   */
readonly requiresClientAuthorization?: bool;

/**
   * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
   */
readonly userMetadata?: string;
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
