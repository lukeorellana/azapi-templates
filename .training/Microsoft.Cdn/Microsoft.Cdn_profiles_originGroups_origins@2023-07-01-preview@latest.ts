import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesOrigingroupsOriginsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesOrigingroupsOrigins resource
 */
export class CdnProfilesOrigingroupsOrigins extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesOrigingroupsOriginsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesOrigingroupsOriginsProps): string {
    return JSON.stringify(
        {properties: {azureOrigin: {id: "string"}, enabledState: "string", enforceCertificateNameCheck: "${bool}", hostName: "string", httpPort: "${int}", httpsPort: "${int}", originHostHeader: "string", priority: "${int}", sharedPrivateLinkResource: {groupId: "string", privateLink: {id: "string"}, privateLinkLocation: "string", requestMessage: "string", status: "string"}, weight: "${int}"}}
    );
  }
}
