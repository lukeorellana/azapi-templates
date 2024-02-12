import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsProps extends IAzAPIBaseProps {
/**
   * The resource model definition representing SKU
   */
readonly sku?: Sku;

/**
   * The Kind of the resource.
   */
readonly kind?: string;

/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
readonly userAssignedIdentities?: object;

/**
   * 
   */
readonly allowedFqdnList?: string[];

/**
   * The api properties for special APIs.
   */
readonly apiProperties?: ApiProperties;

/**
   * Optional subdomain name used for token-based authentication.
   */
readonly customSubDomainName?: string;

/**
   * 
   */
readonly disableLocalAuth?: bool;

/**
   * The flag to enable dynamic throttling.
   */
readonly dynamicThrottlingEnabled?: bool;

/**
   * The encryption properties for this resource.
   */
readonly encryption?: Encryption;

/**
   * The multiregion settings of Cognitive Services account.
   */
readonly locations?: MultiRegionSettings;

/**
   * Resource migration token.
   */
readonly migrationToken?: string;

/**
   * A collection of rules governing the accessibility from specific network locations.
   */
readonly networkAcls?: NetworkRuleSet;

/**
   * Whether or not public endpoint access is allowed for this account.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * 
   */
readonly restore?: bool;

/**
   * 
   */
readonly restrictOutboundNetworkAccess?: bool;

/**
   * The storage accounts for this resource.
   */
readonly userOwnedStorage?: UserOwnedStorage[];

/**
   * (Metrics Advisor Only) The Azure AD Client Id (Application Id).
   */
readonly aadClientId?: string;

/**
   * (Metrics Advisor Only) The Azure AD Tenant Id.
   */
readonly aadTenantId?: string;

/**
   * (Personalization Only) The flag to enable statistics of Bing Search.
   */
readonly eventHubConnectionString?: string;

/**
   * (QnAMaker Only) The Azure Search endpoint id of QnAMaker.
   */
readonly qnaAzureSearchEndpointId?: string;

/**
   * (QnAMaker Only) The Azure Search endpoint key of QnAMaker.
   */
readonly qnaAzureSearchEndpointKey?: string;

/**
   * (QnAMaker Only) The runtime endpoint of QnAMaker.
   */
readonly qnaRuntimeEndpoint?: string;

/**
   * (Bing Search Only) The flag to enable statistics of Bing Search.
   */
readonly statisticsEnabled?: bool;

/**
   * (Personalization Only) The storage account connection string.
   */
readonly storageAccountConnectionString?: string;

/**
   * (Metrics Advisor Only) The super user of Metrics Advisor.
   */
readonly superUser?: string;

/**
   * (Metrics Advisor Only) The website name of Metrics Advisor.
   */
readonly websiteName?: string;

/**
   * Enumerates the possible value of keySource for Encryption
   */
readonly keySource?: 'Microsoft.CognitiveServices''Microsoft.KeyVault';

/**
   * Properties of KeyVault
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * 
   */
readonly identityClientId?: string;

/**
   * Name of the Key from KeyVault
   */
readonly keyName?: string;

/**
   * Uri of KeyVault
   */
readonly keyVaultUri?: string;

/**
   * Version of the Key from KeyVault
   */
readonly keyVersion?: string;

/**
   * 
   */
readonly regions?: RegionSetting[];

/**
   * Multiregion routing methods.
   */
readonly routingMethod?: 'Performance''Priority''Weighted';

/**
   * Maps the region to the regional custom subdomain.
   */
readonly customsubdomain?: string;

/**
   * A value for priority or weighted routing methods.
   */
readonly value?: number;

/**
   * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * The list of IP address rules.
   */
readonly ipRules?: IpRule[];

/**
   * The list of virtual network rules.
   */
readonly virtualNetworkRules?: VirtualNetworkRule[];

/**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
   */
readonly value: string;

/**
   * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   */
readonly id: string;

/**
   * Ignore missing vnet service endpoint or not.
   */
readonly ignoreMissingVnetServiceEndpoint?: bool;

/**
   * Gets the state of virtual network rule.
   */
readonly state?: string;

/**
   * 
   */
readonly identityClientId?: string;

/**
   * Full resource id of a Microsoft.Storage resource.
   */
readonly resourceId?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Enterprise''Free''Premium''Standard';
}

/**
 * CognitiveservicesAccounts resource
 */
export class CognitiveservicesAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsProps): string {
    return JSON.stringify(
        {properties: {allowedFqdnList: ["string"], apiProperties: {aadClientId: "string", aadTenantId: "string", eventHubConnectionString: "string", qnaAzureSearchEndpointId: "string", qnaAzureSearchEndpointKey: "string", qnaRuntimeEndpoint: "string", statisticsEnabled: "${bool}", storageAccountConnectionString: "string", superUser: "string", websiteName: "string"}, customSubDomainName: "string", disableLocalAuth: "${bool}", dynamicThrottlingEnabled: "${bool}", encryption: {keySource: "string", keyVaultProperties: {identityClientId: "string", keyName: "string", keyVaultUri: "string", keyVersion: "string"}}, locations: {regions: [{customsubdomain: "string", name: "string", value: "${int}"}], routingMethod: "string"}, migrationToken: "string", networkAcls: {defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string", ignoreMissingVnetServiceEndpoint: "${bool}", state: "string"}]}, publicNetworkAccess: "string", restore: "${bool}", restrictOutboundNetworkAccess: "${bool}", userOwnedStorage: [{identityClientId: "string", resourceId: "string"}]}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
