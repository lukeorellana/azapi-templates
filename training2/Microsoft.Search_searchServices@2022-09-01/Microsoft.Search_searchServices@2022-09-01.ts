import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesProps extends IAzAPIBaseProps {
/**
   * The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service.
   */
readonly sku?: Sku;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type: 'None''SystemAssigned';

/**
   * Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
   */
readonly authOptions?: DataPlaneAuthOptions;

/**
   * When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined.
   */
readonly disableLocalAuth?: bool;

/**
   * Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service.
   */
readonly encryptionWithCmk?: EncryptionWithCmk;

/**
   * Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'.
   */
readonly hostingMode?: 'default''highDensity';

/**
   * Network specific rules that determine how the Azure Cognitive Search service may be reached.
   */
readonly networkRuleSet?: NetworkRuleSet;

/**
   * The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
   */
readonly partitionCount?: number;

/**
   * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
   */
readonly publicNetworkAccess?: 'disabled''enabled';

/**
   * The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
   */
readonly replicaCount?: number;

/**
   * Indicates that either the API key or an access token from Azure Active Directory can be used for authentication.
   */
readonly aadOrApiKey?: DataPlaneAadOrApiKeyAuthOption;

/**
   * Indicates that only the API key needs to be used for authentication.
   */
readonly apiKeyOnly?: For Bicep, you can use theany()function.;

/**
   * Describes what response the data plane API of a Search service would send for requests that failed authentication.
   */
readonly aadAuthFailureMode?: 'http401WithBearerChallenge''http403';

/**
   * Describes how a search service should enforce having one or more non customer encrypted resources.
   */
readonly enforcement?: 'Disabled''Enabled''Unspecified';

/**
   * A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method.
   */
readonly ipRules?: IpRule[];

/**
   * Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.
   */
readonly value?: string;
}

/**
 * SearchSearchservices resource
 */
export class SearchSearchservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SearchSearchservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Search/searchServices@2022-09-01";
  }

  protected getResourceBody(props: SearchSearchservicesProps): string {
    return JSON.stringify(
        {properties: {authOptions: {aadOrApiKey: {aadAuthFailureMode: "string"}}, disableLocalAuth: "${bool}", encryptionWithCmk: {enforcement: "string"}, hostingMode: "string", networkRuleSet: {ipRules: [{value: "string"}]}, partitionCount: "${int}", publicNetworkAccess: "string", replicaCount: "${int}"}, sku: {name: "string"}}
    );
  }
}
