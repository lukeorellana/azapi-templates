import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesApplicationsVersionsProps extends IAzAPIBaseProps {

}

/**
 * ComputeGalleriesApplicationsVersions resource
 */
export class ComputeGalleriesApplicationsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesApplicationsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/applications/versions@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesApplicationsVersionsProps): string {
    return JSON.stringify(
        {properties: {publishingProfile: {advancedSettings: {}, customActions: [{description: "string", name: "string", parameters: [{defaultValue: "string", description: "string", name: "string", required: "${bool}", type: "string"}], script: "string"}], enableHealthCheck: "${bool}", endOfLifeDate: "string", excludeFromLatest: "${bool}", manageActions: {install: "string", remove: "string", update: "string"}, replicaCount: "${int}", replicationMode: "string", settings: {configFileName: "string", packageFileName: "string"}, source: {defaultConfigurationLink: "string", mediaLink: "string"}, storageAccountType: "string", targetExtendedLocations: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, extendedLocation: {name: "string", type: "string"}, extendedLocationReplicaCount: "${int}", name: "string", storageAccountType: "string"}], targetRegions: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, excludeFromLatest: "${bool}", name: "string", regionalReplicaCount: "${int}", storageAccountType: "string"}]}, safetyProfile: {allowDeletionOfReplicatedLocations: "${bool}"}}}
    );
  }
}
