import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The identity of the user.
   */
readonly identity?: UserIdentity;

/**
   * The secret store of the user.
   */
readonly secretStore?: UserSecretStore;

/**
   * Set to the app Id of the client JWT making the request.
   */
readonly appId?: string;

/**
   * Set to the object Id of the client JWT making the request. Not all users have object Id. For CSP (reseller) scenarios for example, object Id is not available.
   */
readonly objectId?: string;

/**
   * Set to the principal Id of the client JWT making the request. Service principal will not have the principal Id.
   */
readonly principalId?: string;

/**
   * Set to the principal name / UPN of the client JWT making the request.
   */
readonly principalName?: string;

/**
   * Set to the tenant ID of the client JWT making the request.
   */
readonly tenantId?: string;

/**
   * The ID of the user's Key vault.
   */
readonly keyVaultId?: string;

/**
   * The URI of the user's Key vault.
   */
readonly keyVaultUri?: string;
}

/**
 * DevtestlabLabsUsers resource
 */
export class DevtestlabLabsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersProps): string {
    return JSON.stringify(
        {properties: {identity: {appId: "string", objectId: "string", principalId: "string", principalName: "string", tenantId: "string"}, secretStore: {keyVaultId: "string", keyVaultUri: "string"}}}
    );
  }
}
