import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:containers;

/**
   * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
   */
readonly allowProtectedAppendWrites?: bool;

/**
   * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
   */
readonly allowProtectedAppendWritesAll?: bool;

/**
   * The immutability period for the blobs in the container since the policy creation, in days.
   */
readonly immutabilityPeriodSinceCreationInDays?: number;
}

/**
 * StorageStorageaccountsBlobservicesContainersImmutabilitypolicies resource
 */
export class StorageStorageaccountsBlobservicesContainersImmutabilitypolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsBlobservicesContainersImmutabilitypoliciesProps): string {
    return JSON.stringify(
        {properties: {allowProtectedAppendWrites: "${bool}", allowProtectedAppendWritesAll: "${bool}", immutabilityPeriodSinceCreationInDays: "${int}"}}
    );
  }
}
