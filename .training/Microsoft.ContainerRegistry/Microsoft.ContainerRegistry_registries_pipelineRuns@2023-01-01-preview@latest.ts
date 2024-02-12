import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesPipelinerunsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesPipelineruns resource
 */
export class ContainerregistryRegistriesPipelineruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesPipelinerunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesPipelinerunsProps): string {
    return JSON.stringify(
        {properties: {forceUpdateTag: "string", request: {artifacts: ["string"], catalogDigest: "string", pipelineResourceId: "string", source: {name: "string", type: "AzureStorageBlob"}, target: {name: "string", type: "AzureStorageBlob"}}}}
    );
  }
}
