import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersFailovergroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * List of databases in the failover group.
   */
readonly databases?: string[];

/**
   * List of partner server information for the failover group.
   */
readonly partnerServers: PartnerInfo[];

/**
   * Read-write endpoint of the failover group instance.
   */
readonly readWriteEndpoint: FailoverGroupReadWriteEndponumber;

/**
   * Resource identifier of the partner server.
   */
readonly id: string;

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
 * SqlServersFailovergroups resource
 */
export class SqlServersFailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersFailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/failoverGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersFailovergroupsProps): string {
    return JSON.stringify(
        {properties: {databases: ["string"], partnerServers: [{id: "string"}], readWriteEndpoint: {failoverPolicy: "string", failoverWithDataLossGracePeriodMinutes: "${int}"}}}
    );
  }
}
