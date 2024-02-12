import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeRestorepointcollectionsRestorepointsProps extends IAzAPIBaseProps {

}

/**
 * ComputeRestorepointcollectionsRestorepoints resource
 */
export class ComputeRestorepointcollectionsRestorepoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeRestorepointcollectionsRestorepointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01";
  }

  protected getResourceBody(props: ComputeRestorepointcollectionsRestorepointsProps): string {
    return JSON.stringify(
        {properties: {consistencyMode: "string", excludeDisks: [{id: "string"}], sourceMetadata: {storageProfile: {dataDisks: [{caching: "string", diskRestorePoint: {encryption: {diskEncryptionSet: {id: "string"}, type: "string"}, sourceDiskRestorePoint: {id: "string"}}, managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}}], osDisk: {caching: "string", diskRestorePoint: {encryption: {diskEncryptionSet: {id: "string"}, type: "string"}, sourceDiskRestorePoint: {id: "string"}}, managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}}}}, sourceRestorePoint: {id: "string"}, timeCreated: "string"}}
    );
  }
}
