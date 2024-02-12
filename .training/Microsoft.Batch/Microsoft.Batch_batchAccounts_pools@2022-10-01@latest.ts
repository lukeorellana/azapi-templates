import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsPoolsProps extends IAzAPIBaseProps {

}

/**
 * BatchBatchaccountsPools resource
 */
export class BatchBatchaccountsPools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsPoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts/pools@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsPoolsProps): string {
    return JSON.stringify(
        {properties: {applicationLicenses: ["string"], applicationPackages: [{id: "string", version: "string"}], certificates: [{id: "string", storeLocation: "string", storeName: "string", visibility: ["string"]}], deploymentConfiguration: {cloudServiceConfiguration: {osFamily: "string", osVersion: "string"}, virtualMachineConfiguration: {containerConfiguration: {containerImageNames: ["string"], containerRegistries: [{identityReference: {resourceId: "string"}, password: "string", registryServer: "string", username: "string"}], type: "DockerCompatible"}, dataDisks: [{caching: "string", diskSizeGB: "${int}", lun: "${int}", storageAccountType: "string"}], diskEncryptionConfiguration: {targets: ["string"]}, extensions: [{autoUpgradeMinorVersion: "${bool}", name: "string", provisionAfterExtensions: ["string"], publisher: "string", type: "string", typeHandlerVersion: "string"}], imageReference: {id: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, licenseType: "string", nodeAgentSkuId: "string", nodePlacementConfiguration: {policy: "string"}, osDisk: {ephemeralOSDiskSettings: {placement: "CacheDisk"}}, windowsConfiguration: {enableAutomaticUpdates: "${bool}"}}}, displayName: "string", interNodeCommunication: "string", metadata: [{name: "string", value: "string"}], mountConfiguration: [{azureBlobFileSystemConfiguration: {accountKey: "string", accountName: "string", blobfuseOptions: "string", containerName: "string", identityReference: {resourceId: "string"}, relativeMountPath: "string", sasKey: "string"}, azureFileShareConfiguration: {accountKey: "string", accountName: "string", azureFileUrl: "string", mountOptions: "string", relativeMountPath: "string"}, cifsMountConfiguration: {mountOptions: "string", password: "string", relativeMountPath: "string", source: "string", userName: "string"}, nfsMountConfiguration: {mountOptions: "string", relativeMountPath: "string", source: "string"}}], networkConfiguration: {dynamicVnetAssignmentScope: "string", endpointConfiguration: {inboundNatPools: [{backendPort: "${int}", frontendPortRangeEnd: "${int}", frontendPortRangeStart: "${int}", name: "string", networkSecurityGroupRules: [{access: "string", priority: "${int}", sourceAddressPrefix: "string", sourcePortRanges: ["string"]}], protocol: "string"}]}, publicIPAddressConfiguration: {ipAddressIds: ["string"], provision: "string"}, subnetId: "string"}, scaleSettings: {autoScale: {evaluationInterval: "string", formula: "string"}, fixedScale: {nodeDeallocationOption: "string", resizeTimeout: "string", targetDedicatedNodes: "${int}", targetLowPriorityNodes: "${int}"}}, startTask: {commandLine: "string", containerSettings: {containerRunOptions: "string", imageName: "string", registry: {identityReference: {resourceId: "string"}, password: "string", registryServer: "string", username: "string"}, workingDirectory: "string"}, environmentSettings: [{name: "string", value: "string"}], maxTaskRetryCount: "${int}", resourceFiles: [{autoStorageContainerName: "string", blobPrefix: "string", fileMode: "string", filePath: "string", httpUrl: "string", identityReference: {resourceId: "string"}, storageContainerUrl: "string"}], userIdentity: {autoUser: {elevationLevel: "string", scope: "string"}, userName: "string"}, waitForSuccess: "${bool}"}, targetNodeCommunicationMode: "string", taskSchedulingPolicy: {nodeFillType: "string"}, taskSlotsPerNode: "${int}", userAccounts: [{elevationLevel: "string", linuxUserConfiguration: {gid: "${int}", sshPrivateKey: "string", uid: "${int}"}, name: "string", password: "string", windowsUserConfiguration: {loginMode: "string"}}], vmSize: "string"}}
    );
  }
}
