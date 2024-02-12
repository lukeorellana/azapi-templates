import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesEndpoints resource
 */
export class CdnProfilesEndpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsProps): string {
    return JSON.stringify(
        {properties: {contentTypesToCompress: ["string"], defaultOriginGroup: {id: "string"}, deliveryPolicy: {description: "string", rules: [{actions: [{name: "string"}], conditions: [{name: "string"}], name: "string", order: "${int}"}]}, geoFilters: [{action: "string", countryCodes: ["string"], relativePath: "string"}], isCompressionEnabled: "${bool}", isHttpAllowed: "${bool}", isHttpsAllowed: "${bool}", optimizationType: "string", originGroups: [{name: "string", properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, origins: [{id: "string"}], responseBasedOriginErrorDetectionSettings: {httpErrorRanges: [{begin: "${int}", end: "${int}"}], responseBasedDetectedErrorTypes: "string", responseBasedFailoverThresholdPercentage: "${int}"}, trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}], originHostHeader: "string", originPath: "string", origins: [{name: "string", properties: {enabled: "${bool}", hostName: "string", httpPort: "${int}", httpsPort: "${int}", originHostHeader: "string", priority: "${int}", privateLinkAlias: "string", privateLinkApprovalMessage: "string", privateLinkLocation: "string", privateLinkResourceId: "string", weight: "${int}"}}], probePath: "string", queryStringCachingBehavior: "string", urlSigningKeys: [{keyId: "string", keySourceParameters: {resourceGroupName: "string", secretName: "string", secretVersion: "string", subscriptionId: "string", typeName: "KeyVaultSigningKeyParameters", vaultName: "string"}}], webApplicationFirewallPolicyLink: {id: "string"}}}
    );
  }
}
