import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersProps extends IAzAPIBaseProps {

}

/**
 * RedhatopenshiftOpenshiftclusters resource
 */
export class RedhatopenshiftOpenshiftclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openShiftClusters@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersProps): string {
    return JSON.stringify(
        {properties: {apiserverProfile: {ip: "string", url: "string", visibility: "string"}, clusterProfile: {domain: "string", fipsValidatedModules: "string", pullSecret: "string", resourceGroupId: "string", version: "string"}, consoleProfile: {url: "string"}, ingressProfiles: [{ip: "string", name: "string", visibility: "string"}], masterProfile: {diskEncryptionSetId: "string", encryptionAtHost: "string", subnetId: "string", vmSize: "string"}, networkProfile: {loadBalancerProfile: {allocatedOutboundPorts: "${int}", managedOutboundIps: {count: "${int}"}, outboundIpPrefixes: [{id: "string"}], outboundIps: [{id: "string"}]}, outboundType: "string", podCidr: "string", serviceCidr: "string"}, provisioningState: "string", servicePrincipalProfile: {clientId: "string", clientSecret: "string"}, workerProfiles: [{count: "${int}", diskEncryptionSetId: "string", diskSizeGB: "${int}", encryptionAtHost: "string", name: "string", subnetId: "string", vmSize: "string"}]}}
    );
  }
}
