import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assessmentprojects;

/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * State of the private endpoint connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * Actions required on the private endpoint connection.
   */
readonly actionsRequired?: string;

/**
   * Description of the private endpoint connection.
   */
readonly description?: string;

/**
   * Connection status of the private endpoint connection.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * MigrateAssessmentprojectsPrivateendpointconnections resource
 */
export class MigrateAssessmentprojectsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, eTag: "string"}
    );
  }
}
