import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CapacityReservationordersProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: SkuName;

/**
   * List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared.
   */
readonly appliedScopes?: string[];

/**
   * Type of the Applied Scope.
   */
readonly appliedScopeType?: 'Shared''Single';

/**
   * Represent the billing plans.
   */
readonly billingPlan?: 'Monthly''Upfront';

/**
   * Subscription that will be charged for purchasing Reservation
   */
readonly billingScopeId?: string;

/**
   * Friendly name of the Reservation
   */
readonly displayName?: string;

/**
   * Quantity of the SKUs that are part of the Reservation.
   */
readonly quantity?: number;

/**
   * Setting this to true will automatically purchase a new reservation on the expiration date time.
   */
readonly renew?: bool;

/**
   * Properties specific to each reserved resource type. Not required if not applicable.
   */
readonly reservedResourceProperties?: PurchaseRequestPropertiesReservedResourceProperties;

/**
   * The type of the resource that is being reserved.
   */
readonly reservedResourceType?: 'AVS''AppService''AzureDataExplorer''AzureFiles''BlockBlob''CosmosDb''DataFactory''Databricks''DedicatedHost''ManagedDisk''MariaDb''MySql''NetAppStorage''PostgreSql''RedHat''RedHatOsa''RedisCache''SapHana''SqlAzureHybridBenefit''SqlDataWarehouse''SqlDatabases''SqlEdge''SuseLinux''VMwareCloudSimple''VirtualMachineSoftware''VirtualMachines';

/**
   * Represent the term of Reservation.
   */
readonly term?: 'P1Y''P3Y''P5Y';

/**
   * Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type.
   */
readonly instanceFlexibility?: 'Off''On';
}

/**
 * CapacityReservationorders resource
 */
export class CapacityReservationorders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CapacityReservationordersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Capacity/reservationOrders@2022-03-01";
  }

  protected getResourceBody(props: CapacityReservationordersProps): string {
    return JSON.stringify(
        {properties: {appliedScopes: ["string"], appliedScopeType: "string", billingPlan: "string", billingScopeId: "string", displayName: "string", quantity: "${int}", renew: "${bool}", reservedResourceProperties: {instanceFlexibility: "string"}, reservedResourceType: "string", term: "string"}, sku: {name: "string"}}
    );
  }
}
