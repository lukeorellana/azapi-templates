import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesImportpipelinesProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesImportpipelines resource
 */
export class ContainerregistryRegistriesImportpipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesImportpipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesImportpipelinesProps): string {
    return JSON.stringify(
        {properties: {options: ["string"], source: {keyVaultUri: "string", type: "AzureStorageBlobContainer", uri: "string"}, trigger: {sourceTrigger: {status: "string"}}}}
    );
  }
}
