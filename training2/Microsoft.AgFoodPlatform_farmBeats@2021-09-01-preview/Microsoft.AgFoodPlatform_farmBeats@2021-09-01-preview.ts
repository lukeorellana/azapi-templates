import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsProps extends IAzAPIBaseProps {
/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * Property to allow or block public traffic for an Azure FarmBeats resource.
   */
readonly publicNetworkAccess?: 'Enabled''Hybrid';

/**
   * Sensor integration request model.
   */
readonly sensorIntegration?: SensorIntegration;

/**
   * Sensor integration enable state. Allowed values are True, None
   */
readonly enabled?: string;

/**
   * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
   */
readonly provisioningInfo?: ErrorResponse;

/**
   * The error object.
   */
readonly error?: ErrorDetail;
}

/**
 * AgfoodplatformFarmbeats resource
 */
export class AgfoodplatformFarmbeats extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AgfoodplatformFarmbeatsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview";
  }

  protected getResourceBody(props: AgfoodplatformFarmbeatsProps): string {
    return JSON.stringify(
        {properties: {publicNetworkAccess: "string", sensorIntegration: {enabled: "string", provisioningInfo: {error: {}}}}}
    );
  }
}
