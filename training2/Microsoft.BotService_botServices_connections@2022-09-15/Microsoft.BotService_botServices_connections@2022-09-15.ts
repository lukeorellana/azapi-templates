import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceBotservicesConnectionsProps extends IAzAPIBaseProps {
/**
   * Gets or sets the SKU of the resource.
   */
readonly sku?: Sku;

/**
   * Required. Gets or sets the Kind of the resource.
   */
readonly kind?: 'azurebot''bot''designer''function''sdk';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:botServices;

/**
   * Entity Tag
   */
readonly etag?: string;

/**
   * Client Id associated with the Connection Setting.
   */
readonly clientId?: string;

/**
   * Client Secret associated with the Connection Setting
   */
readonly clientSecret?: string;

/**
   * Service Provider Parameters associated with the Connection Setting
   */
readonly parameters?: ConnectionSettingParameter[];

/**
   * Provisioning state of the resource
   */
readonly provisioningState?: string;

/**
   * Scopes associated with the Connection Setting
   */
readonly scopes?: string;

/**
   * Service Provider Display Name associated with the Connection Setting
   */
readonly serviceProviderDisplayName?: string;

/**
   * Service Provider Id associated with the Connection Setting
   */
readonly serviceProviderId?: string;

/**
   * Key for the Connection Setting Parameter.
   */
readonly key?: string;

/**
   * Value associated with the Connection Setting Parameter.
   */
readonly value?: string;
}

/**
 * BotserviceBotservicesConnections resource
 */
export class BotserviceBotservicesConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceBotservicesConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/botServices/connections@2022-09-15";
  }

  protected getResourceBody(props: BotserviceBotservicesConnectionsProps): string {
    return JSON.stringify(
        {properties: {clientId: "string", clientSecret: "string", parameters: [{key: "string", value: "string"}], provisioningState: "string", scopes: "string", serviceProviderDisplayName: "string", serviceProviderId: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
