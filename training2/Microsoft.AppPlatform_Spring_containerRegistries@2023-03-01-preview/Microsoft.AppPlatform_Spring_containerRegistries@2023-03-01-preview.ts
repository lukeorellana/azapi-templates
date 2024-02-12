import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringContainerregistriesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * The credentials of the container registry resource.
   */
readonly credentials: ContainerRegistryCredentials;

/**
   * Set the object type
   */
readonly type: BasicAuth;

/**
   * The credential type of the container registry credentials.
   */
readonly type: 'BasicAuth';

/**
   * The password of the Container Registry.
   */
readonly password: string;

/**
   * The login server of the Container Registry.
   */
readonly server: string;

/**
   * The username of the Container Registry.
   */
readonly username: string;
}

/**
 * AppplatformSpringContainerregistries resource
 */
export class AppplatformSpringContainerregistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringContainerregistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringContainerregistriesProps): string {
    return JSON.stringify(
        {properties: {credentials: {type: "string"}}}
    );
  }
}
