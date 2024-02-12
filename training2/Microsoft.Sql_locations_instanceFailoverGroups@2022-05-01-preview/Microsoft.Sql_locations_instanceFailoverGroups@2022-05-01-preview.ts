import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlLocationsInstancefailovergroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: locations;

/**
   * List of managed instance pairs in the failover group.
   */
readonly managedInstancePairs: ManagedInstancePairInfo[];

/**
   * Partner region information for the failover group.
   */
readonly partnerRegions: PartnerRegionInfo[];

/**
   * Read-write endpoint of the failover group instance.
   */
readonly readWriteEndpoint: InstanceFailoverGroupReadWriteEndponumber;

/**
   * Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.
   */
readonly secondaryType?: 'Geo''Standby';

/**
   * Id of Partner Managed Instance in pair.
   */
readonly partnerManagedInstanceId?: string;

/**
   * Id of Primary Managed Instance in pair.
   */
readonly primaryManagedInstanceId?: string;

/**
   * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
   */
readonly failoverPolicy: 'Automatic''Manual';

/**
   * Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
   */
readonly failoverWithDataLossGracePeriodMinutes?: number;
}

/**
 * SqlLocationsInstancefailovergroups resource
 */
export class SqlLocationsInstancefailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlLocationsInstancefailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlLocationsInstancefailovergroupsProps): string {
    return JSON.stringify(
        {properties: {managedInstancePairs: [{partnerManagedInstanceId: "string", primaryManagedInstanceId: "string"}], partnerRegions: [{location: "string"}], readWriteEndpoint: {failoverPolicy: "string", failoverWithDataLossGracePeriodMinutes: "${int}"}, secondaryType: "string"}}
    );
  }
}
