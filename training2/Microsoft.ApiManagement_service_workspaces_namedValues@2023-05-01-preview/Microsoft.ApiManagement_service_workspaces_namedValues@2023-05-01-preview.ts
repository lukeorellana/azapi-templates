import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesNamedvaluesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
   */
readonly displayName: string;

/**
   * KeyVault location details of the namedValue.
   */
readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractPr...;

/**
   * Determines whether the value is a secret and should be encrypted or not. Default value is false.
   */
readonly secret?: bool;

/**
   * Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
   */
readonly value?: string;

/**
   * Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret.
   */
readonly identityClientId?: string;

/**
   * Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi
   */
readonly secretIdentifier?: string;
}

/**
 * ApimanagementServiceWorkspacesNamedvalues resource
 */
export class ApimanagementServiceWorkspacesNamedvalues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesNamedvaluesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/namedValues@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesNamedvaluesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", keyVault: {identityClientId: "string", secretIdentifier: "string"}, secret: "${bool}", tags: ["string"], value: "string"}}
    );
  }
}
