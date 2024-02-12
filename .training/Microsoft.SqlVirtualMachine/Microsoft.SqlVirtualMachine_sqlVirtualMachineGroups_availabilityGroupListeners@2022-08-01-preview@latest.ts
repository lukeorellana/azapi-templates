import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps extends IAzAPIBaseProps {

}

/**
 * SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplisteners resource
 */
export class SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplisteners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2022-08-01-preview";
  }

  protected getResourceBody(props: SqlvirtualmachineSqlvirtualmachinegroupsAvailabilitygrouplistenersProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupConfiguration: {replicas: [{commit: "string", failover: "string", readableSecondary: "string", role: "string", sqlVirtualMachineInstanceId: "string"}]}, availabilityGroupName: "string", createDefaultAvailabilityGroupIfNotExist: "${bool}", loadBalancerConfigurations: [{loadBalancerResourceId: "string", privateIpAddress: {ipAddress: "string", subnetResourceId: "string"}, probePort: "${int}", publicIpAddressResourceId: "string", sqlVirtualMachineInstances: ["string"]}], multiSubnetIpConfigurations: [{privateIpAddress: {ipAddress: "string", subnetResourceId: "string"}, sqlVirtualMachineInstance: "string"}], port: "${int}"}}
    );
  }
}
