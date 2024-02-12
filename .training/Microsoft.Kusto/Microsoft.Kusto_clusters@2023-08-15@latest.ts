import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersProps extends IAzAPIBaseProps {

}

/**
 * KustoClusters resource
 */
export class KustoClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersProps): string {
    return JSON.stringify(
        {properties: {acceptedAudiences: [{value: "string"}], allowedFqdnList: ["string"], allowedIpRangeList: ["string"], enableAutoStop: "${bool}", enableDiskEncryption: "${bool}", enableDoubleEncryption: "${bool}", enablePurge: "${bool}", enableStreamingIngest: "${bool}", engineType: "string", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string", userIdentity: "string"}, languageExtensions: {value: [{languageExtensionCustomImageName: "string", languageExtensionImageName: "string", languageExtensionName: "string"}]}, optimizedAutoscale: {isEnabled: "${bool}", maximum: "${int}", minimum: "${int}", version: "${int}"}, publicIPType: "string", publicNetworkAccess: "string", restrictOutboundNetworkAccess: "string", trustedExternalTenants: [{value: "string"}], virtualClusterGraduationProperties: "string", virtualNetworkConfiguration: {dataManagementPublicIpId: "string", enginePublicIpId: "string", state: "string", subnetId: "string"}}, zones: ["string"], sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
