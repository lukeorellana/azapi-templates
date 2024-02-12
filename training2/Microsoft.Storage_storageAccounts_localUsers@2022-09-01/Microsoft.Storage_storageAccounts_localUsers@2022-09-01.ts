import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsLocalusersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:storageAccounts;

/**
   * Indicates whether shared key exists. Set it to false to remove existing shared key.
   */
readonly hasSharedKey?: bool;

/**
   * Indicates whether ssh key exists. Set it to false to remove existing SSH key.
   */
readonly hasSshKey?: bool;

/**
   * Indicates whether ssh password exists. Set it to false to remove existing SSH password.
   */
readonly hasSshPassword?: bool;

/**
   * Optional, local user home directory.
   */
readonly homeDirectory?: string;

/**
   * The permission scopes of the local user.
   */
readonly permissionScopes?: PermissionScope[];

/**
   * Optional, local user ssh authorized keys for SFTP.
   */
readonly sshAuthorizedKeys?: SshPublicKey[];

/**
   * The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), and Create (c).
   */
readonly permissions: string;

/**
   * The name of resource, normally the container name or the file share name, used by the local user.
   */
readonly resourceName: string;

/**
   * The service used by the local user, e.g. blob, file.
   */
readonly service: string;

/**
   * Optional. It is used to store the function/usage of the key
   */
readonly description?: string;

/**
   * Ssh public key base64 encoded. The format should be: '{keyType} {keyData}', e.g. ssh-rsa AAAABBBB
   */
readonly key?: string;
}

/**
 * StorageStorageaccountsLocalusers resource
 */
export class StorageStorageaccountsLocalusers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsLocalusersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/localUsers@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsLocalusersProps): string {
    return JSON.stringify(
        {properties: {hasSharedKey: "${bool}", hasSshKey: "${bool}", hasSshPassword: "${bool}", homeDirectory: "string", permissionScopes: [{permissions: "string", resourceName: "string", service: "string"}], sshAuthorizedKeys: [{description: "string", key: "string"}]}}
    );
  }
}
