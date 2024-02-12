import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesAfdendpointsRoutesProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesAfdendpointsRoutes resource
 */
export class CdnProfilesAfdendpointsRoutes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesAfdendpointsRoutesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/afdEndpoints/routes@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesAfdendpointsRoutesProps): string {
    return JSON.stringify(
        {properties: {cacheConfiguration: {compressionSettings: {contentTypesToCompress: ["string"], isCompressionEnabled: "${bool}"}, queryParameters: "string", queryStringCachingBehavior: "string"}, customDomains: [{id: "string"}], enabledState: "string", forwardingProtocol: "string", httpsRedirect: "string", linkToDefaultDomain: "string", originGroup: {id: "string"}, originPath: "string", patternsToMatch: ["string"], ruleSets: [{id: "string"}], supportedProtocols: ["string"]}}
    );
  }
}
