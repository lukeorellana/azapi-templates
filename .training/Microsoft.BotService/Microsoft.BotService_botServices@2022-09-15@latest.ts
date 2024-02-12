import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesProps extends IAzAPIBaseProps {

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
