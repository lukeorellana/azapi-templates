import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesScopemapsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The list of scoped permissions for registry artifacts.E.g. repositories/repository-name/content/read,repositories/repository-name/metadata/write
   */
readonly actions: string[];

/**
   * The user friendly description of the scope map.
   */
readonly description?: string;
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
