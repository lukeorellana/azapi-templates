import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesContainersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:blobServices;

/**
   * Default the container to use specified encryption scope for all writes.
   */
readonly defaultEncryptionScope?: string;

/**
   * Block override of encryption scope from the container default.
   */
readonly denyEncryptionScopeOverride?: bool;

/**
   * Enable NFSv3 all squash on blob container.
   */
readonly enableNfsV3AllSquash?: bool;

/**
   * Enable NFSv3 root squash on blob container.
   */
readonly enableNfsV3RootSquash?: bool;

/**
   * The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process.
   */
readonly immutableStorageWithVersioning?: ImmutableStorageWithVersioning;

/**
   * A name-value pair to associate with the container as metadata.
   */
readonly metadata?: object;

/**
   * Specifies whether data in the container may be accessed publicly and the level of access.
   */
readonly publicAccess?: 'Blob''Container''None';

/**
   * This is an immutable property, when set to true it enables object level immutability at the container level.
   */
readonly enabled?: bool;
}

/**
 * StorageStorageaccountsBlobservicesContainers resource
 */
export class StorageStorageaccountsBlobservicesContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsBlobservicesContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsBlobservicesContainersProps): string {
    return JSON.stringify(
        {properties: {defaultEncryptionScope: "string", denyEncryptionScopeOverride: "${bool}", enableNfsV3AllSquash: "${bool}", enableNfsV3RootSquash: "${bool}", immutableStorageWithVersioning: {enabled: "${bool}"}, metadata: {}, publicAccess: "string"}}
    );
  }
}
