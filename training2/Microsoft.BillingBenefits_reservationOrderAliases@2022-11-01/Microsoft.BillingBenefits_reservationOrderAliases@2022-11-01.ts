import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingbenefitsReservationorderaliasesProps extends IAzAPIBaseProps {
/**
   * Reservation order SKU
   */
readonly sku: Sku;

/**
   * Properties specific to applied scope type. Not required if not applicable.
   */
readonly appliedScopeProperties?: AppliedScopeProperties;

/**
   * Type of the Applied Scope.
   */
readonly appliedScopeType?: 'ManagementGroup''Shared''Single';

/**
   * Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
   */
readonly billingPlan?: 'P1M';

/**
   * Subscription that will be charged for purchasing the benefit
   */
readonly billingScopeId?: string;

/**
   * Display name
   */
readonly displayName?: string;

/**
   * Total Quantity of the SKUs purchased in the Reservation.
   */
readonly quantity?: number;

/**
   * Setting this to true will automatically purchase a new benefit on the expiration date time.
   */
readonly renew?: bool;

/**
   * Properties specific to each reserved resource type. Not required if not applicable.
   */
readonly reservedResourceProperties?: ReservationOrderAliasRequestPropertiesReservedResour...;

/**
   * The type of the resource that is being reserved.
   */
readonly reservedResourceType?: 'AVS''AppService''AzureDataExplorer''AzureFiles''BlockBlob''CosmosDb''DataFactory''Databricks''DedicatedHost''ManagedDisk''MariaDb''MySql''NetAppStorage''PostgreSql''RedHat''RedHatOsa''RedisCache''SapHana''SqlAzureHybridBenefit''SqlDataWarehouse''SqlDatabases''SqlEdge''SuseLinux''VMwareCloudSimple''VirtualMachineSoftware''VirtualMachines';

/**
   * This is the date-time when the Azure Hybrid Benefit needs to be reviewed.
   */
readonly reviewDateTime?: string;

/**
   * Represent benefit term in ISO 8601 format.
   */
readonly term?: 'P1Y''P3Y''P5Y';

/**
   * Display name
   */
readonly displayName?: string;

/**
   * Fully-qualified identifier of the management group where the benefit must be applied.
   */
readonly managementGroupId?: string;

/**
   * Fully-qualified identifier of the resource group.
   */
readonly resourceGroupId?: string;

/**
   * Fully-qualified identifier of the subscription.
   */
readonly subscriptionId?: string;

/**
   * Tenant ID where the benefit is applied.
   */
readonly tenantId?: string;

/**
   * Turning this on will apply the reservation discount to other VMs in the same VM size group.
   */
readonly instanceFlexibility?: 'Off''On';
}

/**
 * BillingbenefitsReservationorderaliases resource
 */
export class BillingbenefitsReservationorderaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingbenefitsReservationorderaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01";
  }

  protected getResourceBody(props: BillingbenefitsReservationorderaliasesProps): string {
    return JSON.stringify(
        {properties: {appliedScopeProperties: {displayName: "string", managementGroupId: "string", resourceGroupId: "string", subscriptionId: "string", tenantId: "string"}, appliedScopeType: "string", billingPlan: "P1M", billingScopeId: "string", displayName: "string", quantity: "${int}", renew: "${bool}", reservedResourceProperties: {instanceFlexibility: "string"}, reservedResourceType: "string", reviewDateTime: "string", term: "string"}, sku: {name: "string"}}
    );
  }
}
