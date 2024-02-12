import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesAfdendpointsRoutesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:afdEndponumbers;

/**
   * The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object.
   */
readonly cacheConfiguration?: AfdRouteCacheConfiguration;

/**
   * Domains referenced by this endpoint.
   */
readonly customDomains?: ActivatedResourceReference[];

/**
   * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Protocol this rule will use when forwarding traffic to backends.
   */
readonly forwardingProtocol?: 'HttpOnly''HttpsOnly''MatchRequest';

/**
   * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
   */
readonly httpsRedirect?: 'Disabled''Enabled';

/**
   * whether this route will be linked to the default endpoint domain.
   */
readonly linkToDefaultDomain?: 'Disabled''Enabled';

/**
   * A reference to the origin group.
   */
readonly originGroup?: ResourceReference;

/**
   * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
   */
readonly originPath?: string;

/**
   * The route patterns of the rule.
   */
readonly patternsToMatch?: string[];

/**
   * rule sets referenced by this endpoint.
   */
readonly ruleSets?: ResourceReference[];

/**
   * List of supported protocols for this route.
   */
readonly supportedProtocols?: String array containing any of:'Http''Https';

/**
   * compression settings.
   */
readonly compressionSettings?: CompressionSettings;

/**
   * query parameters to include or exclude (comma separated).
   */
readonly queryParameters?: string;

/**
   * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
   */
readonly queryStringCachingBehavior?: 'IgnoreQueryString''IgnoreSpecifiedQueryStrings''IncludeSpecifiedQueryStrings''UseQueryString';

/**
   * List of content types on which compression applies. The value should be a valid MIME type.
   */
readonly contentTypesToCompress?: string[];

/**
   * Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
   */
readonly isCompressionEnabled?: bool;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;
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
