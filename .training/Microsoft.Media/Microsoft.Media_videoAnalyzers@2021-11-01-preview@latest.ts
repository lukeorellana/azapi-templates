import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersProps extends IAzAPIBaseProps {

}

/**
 * MediaVideoanalyzers resource
 */
export class MediaVideoanalyzers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersProps): string {
    return JSON.stringify(
        {properties: {encryption: {identity: {userAssignedIdentity: "string"}, keyVaultProperties: {keyIdentifier: "string"}, type: "string"}, iotHubs: [{id: "string", identity: {userAssignedIdentity: "string"}}], networkAccessControl: {consumption: {publicNetworkAccess: "string"}, ingestion: {publicNetworkAccess: "string"}, integration: {publicNetworkAccess: "string"}}, publicNetworkAccess: "string", storageAccounts: [{id: "string", identity: {userAssignedIdentity: "string"}}]}}
    );
  }
}
