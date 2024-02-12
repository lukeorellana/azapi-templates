import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlmanagedinstancesFailovergroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlManagedInstances;

/**
   * The resource ID of the partner SQL managed instance.
   */
readonly partnerManagedInstanceId: string;

/**
   * The specifications of the failover group resource.
   */
readonly spec: FailoverGroupSpec;

/**
   * The status of the failover group custom resource.
   */
readonly status?: For Bicep, you can use theany()function.;

/**
   * The name of the partner SQL managed instance.
   */
readonly partnerMI?: string;

/**
   * The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported.
   */
readonly partnerMirroringCert?: string;

/**
   * The mirroring endpoint URL of the partner SQL managed instance.
   */
readonly partnerMirroringURL?: string;

/**
   * The partner sync mode of the SQL managed instance.
   */
readonly partnerSyncMode?: 'async''sync';

/**
   * The role of the SQL managed instance in this failover group.
   */
readonly role: 'force-primary-allow-data-loss''force-secondary''primary''secondary';

/**
   * The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name.
   */
readonly sharedName?: string;

/**
   * The name of the SQL managed instance with this failover group role.
   */
readonly sourceMI?: string;
}

/**
 * AzurearcdataSqlmanagedinstancesFailovergroups resource
 */
export class AzurearcdataSqlmanagedinstancesFailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlmanagedinstancesFailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlmanagedinstancesFailovergroupsProps): string {
    return JSON.stringify(
        {properties: {partnerManagedInstanceId: "string", spec: {partnerMI: "string", partnerMirroringCert: "string", partnerMirroringURL: "string", partnerSyncMode: "string", role: "string", sharedName: "string", sourceMI: "string"}}}
    );
  }
}
