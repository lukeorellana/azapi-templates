import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevopsPipelinesProps extends IAzAPIBaseProps {

}

/**
 * DevopsPipelines resource
 */
export class DevopsPipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevopsPipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevOps/pipelines@2020-07-13-preview";
  }

  protected getResourceBody(props: DevopsPipelinesProps): string {
    return JSON.stringify(
        {properties: {bootstrapConfiguration: {sourceRepository: {authorization: {authorizationType: "personalAccessToken", parameters: {}}, defaultBranch: "string", id: "string", properties: {}, repositoryType: "string"}, template: {id: "string", parameters: {}}}, pipelineType: "string"}}
    );
  }
}
