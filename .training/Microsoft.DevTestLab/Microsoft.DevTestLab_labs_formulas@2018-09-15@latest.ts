import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsFormulasProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsFormulas resource
 */
export class DevtestlabLabsFormulas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsFormulasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/formulas@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsFormulasProps): string {
    return JSON.stringify(
        {properties: {description: "string", formulaContent: {location: "string", name: "string", properties: {allowClaim: "${bool}", artifacts: [{artifactId: "string", artifactTitle: "string", deploymentStatusMessage: "string", installTime: "string", parameters: [{name: "string", value: "string"}], status: "string", vmExtensionStatusMessage: "string"}], bulkCreationParameters: {instanceCount: "${int}"}, createdDate: "string", customImageId: "string", dataDiskParameters: [{attachNewDataDiskOptions: {diskName: "string", diskSizeGiB: "${int}", diskType: "string"}, existingLabDiskId: "string", hostCaching: "string"}], disallowPublicIpAddress: "${bool}", environmentId: "string", expirationDate: "string", galleryImageReference: {offer: "string", osType: "string", publisher: "string", sku: "string", version: "string"}, isAuthenticationWithSshKey: "${bool}", labSubnetName: "string", labVirtualNetworkId: "string", networkInterface: {dnsName: "string", privateIpAddress: "string", publicIpAddress: "string", publicIpAddressId: "string", rdpAuthority: "string", sharedPublicIpAddressConfiguration: {inboundNatRules: [{backendPort: "${int}", frontendPort: "${int}", transportProtocol: "string"}]}, sshAuthority: "string", subnetId: "string", virtualNetworkId: "string"}, notes: "string", ownerObjectId: "string", ownerUserPrincipalName: "string", password: "string", planId: "string", scheduleParameters: [{name: "string", properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: "${int}"}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: "${int}", webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}, tags: {}}], size: "string", sshKey: "string", storageType: "string", userName: "string"}, tags: {}}, osType: "string", vm: {labVmId: "string"}}}
    );
  }
}
