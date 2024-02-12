import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqladministratorsProps extends IAzAPIBaseProps {

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
