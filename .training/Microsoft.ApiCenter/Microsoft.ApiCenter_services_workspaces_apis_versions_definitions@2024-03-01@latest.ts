import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisVersionsDefinitionsProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesWorkspacesApisVersionsDefinitions resource
 */
export class ApicenterServicesWorkspacesApisVersionsDefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesApisVersionsDefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesApisVersionsDefinitionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", title: "string"}}
    );
  }
}
