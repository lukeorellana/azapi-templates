import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesImagesVersionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeGalleriesImagesVersions resource
 */
export class ComputeGalleriesImagesVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesImagesVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/images/versions@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesImagesVersionsProps): string {
    return JSON.stringify(
        {properties: {publishingProfile: {endOfLifeDate: "string", excludeFromLatest: "${bool}", replicaCount: "${int}", replicationMode: "string", storageAccountType: "string", targetExtendedLocations: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, extendedLocation: {name: "string", type: "string"}, extendedLocationReplicaCount: "${int}", name: "string", storageAccountType: "string"}], targetRegions: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, excludeFromLatest: "${bool}", name: "string", regionalReplicaCount: "${int}", storageAccountType: "string"}]}, safetyProfile: {allowDeletionOfReplicatedLocations: "${bool}"}, storageProfile: {dataDiskImages: [{hostCaching: "string", lun: "${int}", source: {id: "string", storageAccountId: "string", uri: "string"}}], osDiskImage: {hostCaching: "string", source: {id: "string", storageAccountId: "string", uri: "string"}}, source: {communityGalleryImageId: "string", id: "string"}}}}
    );
  }
}
