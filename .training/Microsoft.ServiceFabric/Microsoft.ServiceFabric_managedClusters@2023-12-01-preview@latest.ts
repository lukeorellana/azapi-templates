import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicefabricManagedclustersProps extends IAzAPIBaseProps {

}

/**
 * ServicefabricManagedclusters resource
 */
export class ServicefabricManagedclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicefabricManagedclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceFabric/managedClusters@2023-12-01-preview";
  }

  protected getResourceBody(props: ServicefabricManagedclustersProps): string {
    return JSON.stringify(
        {properties: {addonFeatures: ["string"], adminPassword: "string", adminUserName: "string", allowRdpAccess: "${bool}", applicationTypeVersionsCleanupPolicy: {maxUnusedVersionsToKeep: "${int}"}, auxiliarySubnets: [{enableIpv6: "${bool}", name: "string", networkSecurityGroupId: "string", privateEndpointNetworkPolicies: "string", privateLinkServiceNetworkPolicies: "string"}], azureActiveDirectory: {clientApplication: "string", clusterApplication: "string", tenantId: "string"}, clientConnectionPort: "${int}", clients: [{commonName: "string", isAdmin: "${bool}", issuerThumbprint: "string", thumbprint: "string"}], clusterCodeVersion: "string", clusterUpgradeCadence: "string", clusterUpgradeMode: "string", ddosProtectionPlanId: "string", dnsName: "string", enableAutoOSUpgrade: "${bool}", enableHttpGatewayExclusiveAuthMode: "${bool}", enableIpv6: "${bool}", enableServicePublicIP: "${bool}", fabricSettings: [{name: "string", parameters: [{name: "string", value: "string"}]}], httpGatewayConnectionPort: "${int}", httpGatewayTokenAuthConnectionPort: "${int}", ipTags: [{ipTagType: "string", tag: "string"}], loadBalancingRules: [{backendPort: "${int}", frontendPort: "${int}", loadDistribution: "string", probePort: "${int}", probeProtocol: "string", probeRequestPath: "string", protocol: "string"}], networkSecurityRules: [{access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", name: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourcePortRange: "string", sourcePortRanges: ["string"]}], publicIPPrefixId: "string", publicIPv6PrefixId: "string", serviceEndpoints: [{locations: ["string"], service: "string"}], subnetId: "string", upgradeDescription: {deltaHealthPolicy: {maxPercentDeltaUnhealthyApplications: "${int}", maxPercentDeltaUnhealthyNodes: "${int}", maxPercentUpgradeDomainDeltaUnhealthyNodes: "${int}"}, forceRestart: "${bool}", healthPolicy: {maxPercentUnhealthyApplications: "${int}", maxPercentUnhealthyNodes: "${int}"}, monitoringPolicy: {healthCheckRetryTimeout: "string", healthCheckStableDuration: "string", healthCheckWaitDuration: "string", upgradeDomainTimeout: "string", upgradeTimeout: "string"}, upgradeReplicaSetCheckTimeout: "string"}, useCustomVnet: "${bool}", zonalResiliency: "${bool}", zonalUpdateMode: "string"}, sku: {name: "string"}}
    );
  }
}
