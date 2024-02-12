import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesCacherulesProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesCacherules resource
 */
export class ContainerregistryRegistriesCacherules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesCacherulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesCacherulesProps): string {
    return JSON.stringify(
        {properties: {credentialSetResourceId: "string", sourceRepository: "string", targetRepository: "string"}}
    );
  }
}
