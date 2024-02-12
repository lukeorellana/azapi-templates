import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesCredentialsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of tags that can be used for describing the Credential.
   */
readonly annotations?: any[];

/**
   * Credential description.
   */
readonly description?: string;

/**
   * Type of credential.
   */
readonly type: string;

/**
   * Managed identity credential properties.
   */
readonly typeProperties?: ManagedIdentityTypeProperties;

/**
   * The resource id of user assigned managed identity
   */
readonly resourceId?: string;
}

/**
 * DatafactoryFactoriesCredentials resource
 */
export class DatafactoryFactoriesCredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesCredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/credentials@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesCredentialsProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", type: "string", typeProperties: {resourceId: "string"}}}
    );
  }
}
