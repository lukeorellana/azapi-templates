import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerplatformEnterprisepoliciesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * PowerplatformEnterprisepoliciesPrivateendpointconnections resource
 */
export class PowerplatformEnterprisepoliciesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerplatformEnterprisepoliciesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview";
  }

  protected getResourceBody(props: PowerplatformEnterprisepoliciesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
