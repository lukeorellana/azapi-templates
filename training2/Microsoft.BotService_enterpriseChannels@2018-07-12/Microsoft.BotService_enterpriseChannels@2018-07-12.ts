import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BotserviceEnterprisechannelsProps extends IAzAPIBaseProps {
/**
   * Gets or sets the SKU of the resource.
   */
readonly sku?: Sku;

/**
   * Required. Gets or sets the Kind of the resource.
   */
readonly kind?: 'bot''designer''function''sdk';

/**
   * Entity Tag
   */
readonly etag?: string;

/**
   * The nodes associated with the Enterprise Channel.
   */
readonly nodes: EnterpriseChannelNode[];

/**
   * The current state of the Enterprise Channel.
   */
readonly state?: 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping';

/**
   * The location of the Enterprise Channel Node.
   */
readonly azureLocation: string;

/**
   * The sku of the Enterprise Channel Node.
   */
readonly azureSku: string;

/**
   * The current state of the Enterprise Channel Node.
   */
readonly state?: 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping';
}

/**
 * BotserviceEnterprisechannels resource
 */
export class BotserviceEnterprisechannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BotserviceEnterprisechannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BotService/enterpriseChannels@2018-07-12";
  }

  protected getResourceBody(props: BotserviceEnterprisechannelsProps): string {
    return JSON.stringify(
        {properties: {nodes: [{azureLocation: "string", azureSku: "string", name: "string", state: "string"}], state: "string"}, sku: {name: "string"}, kind: "string", etag: "string"}
    );
  }
}
