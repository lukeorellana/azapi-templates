import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesProps extends IAzAPIBaseProps {

}

/**
 * MediaMediaservices resource
 */
export class MediaMediaservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices@2021-11-01";
  }

  protected getResourceBody(props: MediaMediaservicesProps): string {
    return JSON.stringify(
        {properties: {encryption: {identity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, keyVaultProperties: {keyIdentifier: "string"}, type: "string"}, keyDelivery: {accessControl: {defaultAction: "string", ipAllowList: ["string"]}}, publicNetworkAccess: "string", storageAccounts: [{id: "string", identity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, type: "string"}], storageAuthentication: "string"}}
    );
  }
}
