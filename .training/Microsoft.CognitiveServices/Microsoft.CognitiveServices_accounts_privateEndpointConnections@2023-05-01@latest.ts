import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesAccountsPrivateendpointconnections resource
 */
export class CognitiveservicesAccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts/privateEndpointConnections@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
