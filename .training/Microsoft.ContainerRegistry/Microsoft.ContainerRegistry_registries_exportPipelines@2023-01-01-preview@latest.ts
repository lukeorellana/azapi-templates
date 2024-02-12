import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesExportpipelinesProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesExportpipelines resource
 */
export class ContainerregistryRegistriesExportpipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesExportpipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesExportpipelinesProps): string {
    return JSON.stringify(
        {properties: {options: ["string"], target: {keyVaultUri: "string", type: "string", uri: "string"}}}
    );
  }
}
