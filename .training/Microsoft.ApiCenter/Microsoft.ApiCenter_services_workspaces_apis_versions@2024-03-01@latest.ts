import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisVersionsProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesWorkspacesApisVersions resource
 */
export class ApicenterServicesWorkspacesApisVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesApisVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesApisVersionsProps): string {
    return JSON.stringify(
        {properties: {lifecycleStage: "string", title: "string"}}
    );
  }
}
