import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AttestationAttestationprovidersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * AttestationAttestationprovidersPrivateendpointconnections resource
 */
export class AttestationAttestationprovidersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AttestationAttestationprovidersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01-preview";
  }

  protected getResourceBody(props: AttestationAttestationprovidersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
