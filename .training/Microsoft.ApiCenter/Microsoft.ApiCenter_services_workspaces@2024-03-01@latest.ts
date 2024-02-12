import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesWorkspaces resource
 */
export class ApicenterServicesWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesProps): string {
    return JSON.stringify(
        {properties: {description: "string", title: "string"}}
    );
  }
}
