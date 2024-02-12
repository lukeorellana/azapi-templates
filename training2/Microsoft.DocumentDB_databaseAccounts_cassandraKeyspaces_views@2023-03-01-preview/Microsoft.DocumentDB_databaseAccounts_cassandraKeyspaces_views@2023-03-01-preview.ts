import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:cassandraKeyspaces;

/**
   * Identity for the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options?: CreateUpdateOptionsOrCassandraViewGetPropertiesOptio...;

/**
   * The standard JSON format of a Cassandra view
   */
readonly resource: CassandraViewResourceOrCassandraViewGetPropertiesRes...;

/**
   * Specifies the Autoscale settings.
   */
readonly autoscaleSettings?: AutoscaleSettings;

/**
   * Request Units per second. For example, "throughput": 10000.
   */
readonly throughput?: number;

/**
   * Represents maximum throughput, the resource can scale up to.
   */
readonly maxThroughput?: number;

/**
   * Name of the Cosmos DB Cassandra view
   */
readonly id: string;

/**
   * View Definition of the Cosmos DB Cassandra view
   */
readonly viewDefinition: string;
}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspacesViews resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspacesViews extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string", viewDefinition: "string"}}}
    );
  }
}
