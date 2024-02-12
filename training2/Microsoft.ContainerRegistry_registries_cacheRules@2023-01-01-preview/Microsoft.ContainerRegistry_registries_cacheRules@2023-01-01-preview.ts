import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesCacherulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The ARM resource ID of the credential store which is associated with the cache rule.
   */
readonly credentialSetResourceId?: string;

/**
   * Source repository pulled from upstream.
   */
readonly sourceRepository?: string;

/**
   * Target repository specified in docker pull command.Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag}
   */
readonly targetRepository?: string;
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
