import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqladministratorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Workspace active directory administrator type
   */
readonly administratorType?: string;

/**
   * Login of the workspace active directory administrator
   */
readonly login?: string;

/**
   * Object ID of the workspace active directory administrator
   */
readonly sid?: string;

/**
   * Tenant ID of the workspace active directory administrator
   */
readonly tenantId?: string;
}

/**
 * SynapseWorkspacesSqladministrators resource
 */
export class SynapseWorkspacesSqladministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqladministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlAdministrators@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqladministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "string", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
