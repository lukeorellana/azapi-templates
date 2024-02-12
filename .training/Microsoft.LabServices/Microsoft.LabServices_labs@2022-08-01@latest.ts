import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsProps extends IAzAPIBaseProps {

}

/**
 * LabservicesLabs resource
 */
export class LabservicesLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsProps): string {
    return JSON.stringify(
        {properties: {autoShutdownProfile: {disconnectDelay: "string", idleDelay: "string", noConnectDelay: "string", shutdownOnDisconnect: "string", shutdownOnIdle: "string", shutdownWhenNotConnected: "string"}, connectionProfile: {clientRdpAccess: "string", clientSshAccess: "string", webRdpAccess: "string", webSshAccess: "string"}, description: "string", labPlanId: "string", networkProfile: {loadBalancerId: "string", publicIpId: "string", subnetId: "string"}, rosterProfile: {activeDirectoryGroupId: "string", lmsInstance: "string", ltiClientId: "string", ltiContextId: "string", ltiRosterEndpoint: "string"}, securityProfile: {openAccess: "string"}, title: "string", virtualMachineProfile: {additionalCapabilities: {installGpuDrivers: "string"}, adminUser: {password: "string", username: "string"}, createOption: "string", imageReference: {id: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, nonAdminUser: {password: "string", username: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, usageQuota: "string", useSharedPassword: "string"}}}
    );
  }
}
