import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesAdministratorsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesAdministrators resource
 */
export class SynapseWorkspacesAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/administrators@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesAdministratorsProps): string {
    return JSON.stringify(
        {properties: {administratorType: "string", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}
