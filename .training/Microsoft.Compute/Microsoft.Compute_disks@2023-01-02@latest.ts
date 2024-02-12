import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDisksProps extends IAzAPIBaseProps {

}

/**
 * ComputeDisks resource
 */
export class ComputeDisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/disks@2023-01-02";
  }

  protected getResourceBody(props: ComputeDisksProps): string {
    return JSON.stringify(
        {properties: {burstingEnabled: "${bool}", completionPercent: "${int}", creationData: {createOption: "string", galleryImageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, imageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, logicalSectorSize: "${int}", performancePlus: "${bool}", securityDataUri: "string", sourceResourceId: "string", sourceUri: "string", storageAccountId: "string", uploadSizeBytes: "${int}"}, dataAccessAuthMode: "string", diskAccessId: "string", diskIOPSReadWrite: "${int}", diskMBpsReadWrite: "${int}", diskSizeGB: "${int}", encryption: {diskEncryptionSetId: "string", type: "string"}, encryptionSettingsCollection: {enabled: "${bool}", encryptionSettings: [{diskEncryptionKey: {secretUrl: "string", sourceVault: {id: "string"}}, keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}], encryptionSettingsVersion: "string"}, hyperVGeneration: "string", maxShares: "${int}", networkAccessPolicy: "string", optimizedForFrequentAttach: "${bool}", osType: "string", publicNetworkAccess: "string", purchasePlan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}, securityProfile: {secureVMDiskEncryptionSetId: "string", securityType: "string"}, supportedCapabilities: {acceleratedNetwork: "${bool}", architecture: "string", diskControllerTypes: "string"}, supportsHibernation: "${bool}", tier: "string"}, zones: ["string"], sku: {name: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
