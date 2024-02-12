import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlvirtualmachineSqlvirtualmachinegroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlvirtualmachineSqlvirtualmachinegroups resource
 */
export class SqlvirtualmachineSqlvirtualmachinegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlvirtualmachineSqlvirtualmachinegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2022-08-01-preview";
  }

  protected getResourceBody(props: SqlvirtualmachineSqlvirtualmachinegroupsProps): string {
    return JSON.stringify(
        {properties: {sqlImageOffer: "string", sqlImageSku: "string", wsfcDomainProfile: {clusterBootstrapAccount: "string", clusterOperatorAccount: "string", clusterSubnetType: "string", domainFqdn: "string", fileShareWitnessPath: "string", ouPath: "string", sqlServiceAccount: "string", storageAccountPrimaryKey: "string", storageAccountUrl: "string"}}}
    );
  }
}
