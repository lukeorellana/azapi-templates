import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeCloudservicesProps extends IAzAPIBaseProps {

}

/**
 * ComputeCloudservices resource
 */
export class ComputeCloudservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeCloudservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/cloudServices@2022-09-04";
  }

  protected getResourceBody(props: ComputeCloudservicesProps): string {
    return JSON.stringify(
        {properties: {allowModelOverride: "${bool}", configuration: "string", configurationUrl: "string", extensionProfile: {extensions: [{name: "string", properties: {autoUpgradeMinorVersion: "${bool}", forceUpdateTag: "string", protectedSettingsFromKeyVault: {secretUrl: "string", sourceVault: {id: "string"}}, publisher: "string", rolesAppliedTo: ["string"], type: "string", typeHandlerVersion: "string"}}]}, networkProfile: {loadBalancerConfigurations: [{id: "string", name: "string", properties: {frontendIpConfigurations: [{name: "string", properties: {privateIPAddress: "string", publicIPAddress: {id: "string"}, subnet: {id: "string"}}}]}}], slotType: "string", swappableCloudService: {id: "string"}}, osProfile: {secrets: [{sourceVault: {id: "string"}, vaultCertificates: [{certificateUrl: "string"}]}]}, packageUrl: "string", roleProfile: {roles: [{name: "string", sku: {capacity: "${int}", name: "string", tier: "string"}}]}, startCloudService: "${bool}", upgradeMode: "string"}, systemData: {}, zones: ["string"]}
    );
  }
}
