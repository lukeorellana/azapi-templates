import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsDaprcomponentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedEnvironments;

/**
   * Component type
   */
readonly componentType?: string;

/**
   * Boolean describing if the component errors are ignores
   */
readonly ignoreErrors?: bool;

/**
   * Initialization timeout
   */
readonly initTimeout?: string;

/**
   * Component metadata
   */
readonly metadata?: DaprMetadata[];

/**
   * Names of container apps that can use this Dapr component
   */
readonly scopes?: string[];

/**
   * Collection of secrets used by a Dapr component
   */
readonly secrets?: Secret[];

/**
   * Name of a Dapr component to retrieve component secrets from
   */
readonly secretStoreComponent?: string;

/**
   * Component version
   */
readonly version?: string;

/**
   * Name of the Dapr Component secret from which to pull the metadata property value.
   */
readonly secretRef?: string;

/**
   * Metadata property value.
   */
readonly value?: string;

/**
   * Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity.
   */
readonly identity?: string;

/**
   * Azure Key Vault URL pointing to the secret referenced by the container app.
   */
readonly keyVaultUrl?: string;

/**
   * Secret Value.
   */
readonly value?: string;
}

/**
 * AppManagedenvironmentsDaprcomponents resource
 */
export class AppManagedenvironmentsDaprcomponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsDaprcomponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/daprComponents@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsDaprcomponentsProps): string {
    return JSON.stringify(
        {properties: {componentType: "string", ignoreErrors: "${bool}", initTimeout: "string", metadata: [{name: "string", secretRef: "string", value: "string"}], scopes: ["string"], secrets: [{identity: "string", keyVaultUrl: "string", name: "string", value: "string"}], secretStoreComponent: "string", version: "string"}}
    );
  }
}
