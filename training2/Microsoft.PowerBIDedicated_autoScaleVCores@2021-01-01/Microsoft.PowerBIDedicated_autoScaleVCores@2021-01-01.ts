import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbidedicatedAutoscalevcoresProps extends IAzAPIBaseProps {
/**
   * The SKU of the auto scale v-core resource.
   */
readonly sku: AutoScaleVCoreSku;

/**
   * Metadata pertaining to creation and last modification of the resource.
   */
readonly systemData?: SystemData;

/**
   * The maximum capacity of an auto scale v-core resource.
   */
readonly capacityLimit?: number;

/**
   * The object ID of the capacity resource associated with the auto scale v-core resource.
   */
readonly capacityObjectId?: string;

/**
   * The capacity of an auto scale v-core resource.
   */
readonly capacity?: number;

/**
   * The name of the Azure pricing tier to which the SKU applies.
   */
readonly tier?: 'AutoScale';

/**
   * The timestamp of resource creation (UTC)
   */
readonly createdAt?: string;

/**
   * An identifier for the identity that created the resource
   */
readonly createdBy?: string;

/**
   * The type of identity that created the resource
   */
readonly createdByType?: 'Application''Key''ManagedIdentity''User';

/**
   * The timestamp of resource last modification (UTC)
   */
readonly lastModifiedAt?: string;

/**
   * An identifier for the identity that last modified the resource
   */
readonly lastModifiedBy?: string;

/**
   * The type of identity that last modified the resource
   */
readonly lastModifiedByType?: 'Application''Key''ManagedIdentity''User';
}

/**
 * PowerbidedicatedAutoscalevcores resource
 */
export class PowerbidedicatedAutoscalevcores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbidedicatedAutoscalevcoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01";
  }

  protected getResourceBody(props: PowerbidedicatedAutoscalevcoresProps): string {
    return JSON.stringify(
        {properties: {capacityLimit: "${int}", capacityObjectId: "string"}, systemData: {createdAt: "string", createdBy: "string", createdByType: "string", lastModifiedAt: "string", lastModifiedBy: "string", lastModifiedByType: "string"}, sku: {capacity: "${int}", name: "string", tier: "AutoScale"}}
    );
  }
}
