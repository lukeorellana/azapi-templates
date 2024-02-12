import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisVersionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Current lifecycle stage of the API.
   */
readonly lifecycleStage: 'deprecated''design''development''preview''production''retired''testing';

/**
   * API version title.
   */
readonly title: string Constranumbers:Min length = 1Max length = 50;
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
