import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesScopemapsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesScopemaps resource
 */
export class ContainerregistryRegistriesScopemaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesScopemapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesScopemapsProps): string {
    return JSON.stringify(
        {properties: {actions: ["string"], description: "string"}}
    );
  }
}
