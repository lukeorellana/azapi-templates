import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbidedicatedCapacitiesProps extends IAzAPIBaseProps {
/**
   * The SKU of the PowerBI Dedicated capacity resource.
   */
readonly sku: CapacitySku;

/**
   * Metadata pertaining to creation and last modification of the resource.
   */
readonly systemData?: SystemData;

/**
   * A collection of Dedicated capacity administrators
   */
readonly administration?: DedicatedCapacityAdministrators;

/**
   * Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used.Learn More
   */
readonly mode?: 'Gen1''Gen2';

/**
   * An array of administrator user identities.
   */
readonly members?: string[];

/**
   * The capacity of the SKU.
   */
readonly capacity?: number;

/**
   * The name of the Azure pricing tier to which the SKU applies.
   */
readonly tier?: 'AutoPremiumHost''PBIE_Azure''Premium';

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
 * PowerbidedicatedCapacities resource
 */
export class PowerbidedicatedCapacities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbidedicatedCapacitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBIDedicated/capacities@2021-01-01";
  }

  protected getResourceBody(props: PowerbidedicatedCapacitiesProps): string {
    return JSON.stringify(
        {properties: {administration: {members: ["string"]}, mode: "string"}, systemData: {createdAt: "string", createdBy: "string", createdByType: "string", lastModifiedAt: "string", lastModifiedBy: "string", lastModifiedByType: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
