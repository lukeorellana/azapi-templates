import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeSnapshotsProps extends IAzAPIBaseProps {

}

/**
 * ComputeSnapshots resource
 */
export class ComputeSnapshots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeSnapshotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/snapshots@2023-01-02";
  }

  protected getResourceBody(props: ComputeSnapshotsProps): string {
    return JSON.stringify(
        {properties: {completionPercent: "${int}", copyCompletionError: {errorCode: "CopySourceNotFound", errorMessage: "string"}, creationData: {createOption: "string", galleryImageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, imageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, logicalSectorSize: "${int}", performancePlus: "${bool}", securityDataUri: "string", sourceResourceId: "string", sourceUri: "string", storageAccountId: "string", uploadSizeBytes: "${int}"}, dataAccessAuthMode: "string", diskAccessId: "string", diskSizeGB: "${int}", encryption: {diskEncryptionSetId: "string", type: "string"}, encryptionSettingsCollection: {enabled: "${bool}", encryptionSettings: [{diskEncryptionKey: {secretUrl: "string", sourceVault: {id: "string"}}, keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}], encryptionSettingsVersion: "string"}, hyperVGeneration: "string", incremental: "${bool}", networkAccessPolicy: "string", osType: "string", publicNetworkAccess: "string", purchasePlan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}, securityProfile: {secureVMDiskEncryptionSetId: "string", securityType: "string"}, supportedCapabilities: {acceleratedNetwork: "${bool}", architecture: "string", diskControllerTypes: "string"}, supportsHibernation: "${bool}"}, sku: {name: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
