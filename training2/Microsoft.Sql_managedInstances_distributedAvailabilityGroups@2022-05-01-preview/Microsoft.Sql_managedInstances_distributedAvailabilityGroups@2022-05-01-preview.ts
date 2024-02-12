import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDistributedavailabilitygroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * The primary availability group name
   */
readonly primaryAvailabilityGroupName?: string;

/**
   * The replication mode of a distributed availability group. Parameter will be ignored during link creation.
   */
readonly replicationMode?: 'Async''Sync';

/**
   * The secondary availability group name
   */
readonly secondaryAvailabilityGroupName?: string;

/**
   * The source endpoint
   */
readonly sourceEndpoint?: string;

/**
   * The name of the target database
   */
readonly targetDatabase?: string;
}

/**
 * SqlManagedinstancesDistributedavailabilitygroups resource
 */
export class SqlManagedinstancesDistributedavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDistributedavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDistributedavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {primaryAvailabilityGroupName: "string", replicationMode: "string", secondaryAvailabilityGroupName: "string", sourceEndpoint: "string", targetDatabase: "string"}}
    );
  }
}
