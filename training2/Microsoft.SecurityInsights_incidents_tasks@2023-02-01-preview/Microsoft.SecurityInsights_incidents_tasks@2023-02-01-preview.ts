import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsIncidentsTasksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:incidents;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * Information on the client (user or application) that made some action
   */
readonly createdBy?: ClientInfo;

/**
   * The description of the task
   */
readonly description?: string;

/**
   * Information on the client (user or application) that made some action
   */
readonly lastModifiedBy?: ClientInfo;

/**
   * 
   */
readonly status: 'Completed''New';

/**
   * The title of the task
   */
readonly title: string;

/**
   * The email of the client.
   */
readonly email?: string;

/**
   * The object id of the client.
   */
readonly objectId?: string;

/**
   * The user principal name of the client.
   */
readonly userPrincipalName?: string;
}

/**
 * SecurityinsightsIncidentsTasks resource
 */
export class SecurityinsightsIncidentsTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsIncidentsTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsIncidentsTasksProps): string {
    return JSON.stringify(
        {properties: {createdBy: {email: "string", name: "string", objectId: "string", userPrincipalName: "string"}, description: "string", lastModifiedBy: {email: "string", name: "string", objectId: "string", userPrincipalName: "string"}, status: "string", title: "string"}, etag: "string"}
    );
  }
}
