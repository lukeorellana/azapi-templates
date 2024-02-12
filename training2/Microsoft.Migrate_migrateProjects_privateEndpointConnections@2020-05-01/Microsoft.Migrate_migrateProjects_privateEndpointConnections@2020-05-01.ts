import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateMigrateprojectsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:migrateProjects;

/**
   * Gets the tag for optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * Private endpoint connection state.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * Action required.
   */
readonly actionsRequired?: string;

/**
   * Description of the object.
   */
readonly description?: string;

/**
   * Private link connection state.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * MigrateMigrateprojectsPrivateendpointconnections resource
 */
export class MigrateMigrateprojectsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateMigrateprojectsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01";
  }

  protected getResourceBody(props: MigrateMigrateprojectsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, eTag: "string"}
    );
  }
}
