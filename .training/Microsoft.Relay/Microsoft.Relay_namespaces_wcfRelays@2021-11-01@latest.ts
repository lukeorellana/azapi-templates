import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesWcfrelaysProps extends IAzAPIBaseProps {

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
