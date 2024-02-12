import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisVersionsDefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:versions;

/**
   * API definition description.
   */
readonly description?: string;

/**
   * API definition title.
   */
readonly title: string Constranumbers:Min length = 1Max length = 50;
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
