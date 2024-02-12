import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesProps extends IAzAPIBaseProps {
/**
   * Gets or sets the SKU of the resource.
   */
readonly sku?: Sku;

/**
   * Required. Gets or sets the Kind of the resource.
   */
readonly kind?: 'azurebot''bot''designer''function''sdk';

/**
   * Entity Tag
   */
readonly etag?: string;

/**
   * Contains resource all settings defined as key/value pairs.
   */
readonly allSettings?: object;

/**
   * The hint (e.g. keyVault secret resourceId) on how to fetch the app secret
   */
readonly appPasswordHint?: string;

/**
   * The CMK Url
   */
readonly cmekKeyVaultUrl?: string;

/**
   * The description of the bot
   */
readonly description?: string;

/**
   * The Application Insights key
   */
readonly developerAppInsightKey?: string;

/**
   * The Application Insights Api Key
   */
readonly developerAppInsightsApiKey?: string;

/**
   * The Application Insights App Id
   */
readonly developerAppInsightsApplicationId?: string;

/**
   * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
   */
readonly disableLocalAuth?: bool;

/**
   * The Name of the bot
   */
readonly displayName: string;

/**
   * The bot's endpoint
   */
readonly endpoint: string;

/**
   * The Icon Url of the bot
   */
readonly iconUrl?: string;

/**
   * Whether Cmek is enabled
   */
readonly isCmekEnabled?: bool;

/**
   * Whether the bot is streaming supported
   */
readonly isStreamingSupported?: bool;

/**
   * Collection of LUIS App Ids
   */
readonly luisAppIds?: string[];

/**
   * The LUIS Key
   */
readonly luisKey?: string;

/**
   * The bot's manifest url
   */
readonly manifestUrl?: string;

/**
   * Microsoft App Id for the bot
   */
readonly msaAppId: string;

/**
   * Microsoft App Managed Identity Resource Id for the bot
   */
readonly msaAppMSIResourceId?: string;

/**
   * Microsoft App Tenant Id for the bot
   */
readonly msaAppTenantId?: string;

/**
   * Microsoft App Type for the bot
   */
readonly msaAppType?: 'MultiTenant''SingleTenant''UserAssignedMSI';

/**
   * The hint to browser (e.g. protocol handler) on how to open the bot for authoring
   */
readonly openWithHint?: string;

/**
   * Contains resource parameters defined as key/value pairs.
   */
readonly parameters?: object;

/**
   * Whether the bot is in an isolated network
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Publishing credentials of the resource
   */
readonly publishingCredentials?: string;

/**
   * The channel schema transformation version for the bot
   */
readonly schemaTransformationVersion?: string;

/**
   * The storage resourceId for the bot
   */
readonly storageResourceId?: string;

/**
   * The Tenant Id for the bot
   */
readonly tenantId?: string;
}

/**
 * BotserviceBotservices resource
 */
export class BotserviceBotservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesProps): string {
    return JSON.stringify(
        {properties: {allSettings: {}, appPasswordHint: "string", cmekKeyVaultUrl: "string", description: "string", developerAppInsightKey: "string", developerAppInsightsApiKey: "string", developerAppInsightsApplicationId: "string", disableLocalAuth: "${bool}", displayName: "string", endpoint: "string", iconUrl: "string", isCmekEnabled: "${bool}", isStreamingSupported: "${bool}", luisAppIds: ["string"], luisKey: "string", manifestUrl: "string", msaAppId: "string", msaAppMSIResourceId: "string", msaAppTenantId: "string", msaAppType: "string", openWithHint: "string", parameters: {}, publicNetworkAccess: "string", publishingCredentials: "string", schemaTransformationVersion: "string", storageResourceId: "string", tenantId: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
