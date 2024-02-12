import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HdinsightClustersApplicationsProps extends IAzAPIBaseProps {

}

/**
 * HdinsightClustersApplications resource
 */
export class HdinsightClustersApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HdinsightClustersApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HDInsight/clusters/applications@2021-06-01";
  }

  protected getResourceBody(props: HdinsightClustersApplicationsProps): string {
    return JSON.stringify(
        {properties: {applicationType: "string", computeProfile: {roles: [{autoscale: {capacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}"}, recurrence: {schedule: [{days: ["string"], timeAndCapacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}", time: "string"}}], timeZone: "string"}}, dataDisksGroups: [{disksPerNode: "${int}"}], encryptDataDisks: "${bool}", hardwareProfile: {vmSize: "string"}, minInstanceCount: "${int}", name: "string", osProfile: {linuxOperatingSystemProfile: {password: "string", sshProfile: {publicKeys: [{certificateData: "string"}]}, username: "string"}}, scriptActions: [{name: "string", parameters: "string", uri: "string"}], targetInstanceCount: "${int}", virtualNetworkProfile: {id: "string", subnet: "string"}, VMGroupName: "string"}]}, errors: [{code: "string", message: "string"}], httpsEndpoints: [{accessModes: ["string"], destinationPort: "${int}", disableGatewayAuth: "${bool}", privateIPAddress: "string", subDomainSuffix: "string"}], installScriptActions: [{name: "string", parameters: "string", roles: ["string"], uri: "string"}], privateLinkConfigurations: [{name: "string", properties: {groupId: "string", ipConfigurations: [{name: "string", properties: {primary: "${bool}", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}]}}], sshEndpoints: [{destinationPort: "${int}", location: "string", privateIPAddress: "string", publicPort: "${int}"}], uninstallScriptActions: [{name: "string", parameters: "string", roles: ["string"], uri: "string"}]}, etag: "string"}
    );
  }
}
