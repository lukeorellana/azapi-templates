import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesWcfrelaysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * WCF relay type.
   */
readonly relayType?: 'Http''NetTcp';

/**
   * Returns true if client authorization is needed for this relay; otherwise, false.
   */
readonly requiresClientAuthorization?: bool;

/**
   * Returns true if transport security is needed for this relay; otherwise, false.
   */
readonly requiresTransportSecurity?: bool;

/**
   * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
   */
readonly userMetadata?: string;
}

/**
 * RelayNamespacesWcfrelays resource
 */
export class RelayNamespacesWcfrelays extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesWcfrelaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/wcfRelays@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesWcfrelaysProps): string {
    return JSON.stringify(
        {properties: {relayType: "string", requiresClientAuthorization: "${bool}", requiresTransportSecurity: "${bool}", userMetadata: "string"}}
    );
  }
}
