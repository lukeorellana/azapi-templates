import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesEnvironmentsProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesWorkspacesEnvironments resource
 */
export class ApicenterServicesWorkspacesEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/environments@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesEnvironmentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", kind: "string", onboarding: {developerPortalUri: ["string"], instructions: "string"}, server: {managementPortalUri: ["string"], type: "string"}, title: "string"}}
    );
  }
}
