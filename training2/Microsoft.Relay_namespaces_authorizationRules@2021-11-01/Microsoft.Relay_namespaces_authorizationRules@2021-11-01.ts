import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesAuthorizationrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The rights associated with the rule.
   */
readonly rights: String array containing any of:'Listen''Manage''Send';
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
