import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlvirtualmachineSqlvirtualmachinegroupsProps extends IAzAPIBaseProps {
/**
   * SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
   */
readonly sqlImageOffer?: string;

/**
   * SQL image sku.
   */
readonly sqlImageSku?: 'Developer''Enterprise';

/**
   * Cluster Active Directory domain profile.
   */
readonly wsfcDomainProfile?: WsfcDomainProfile;

/**
   * Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain).
   */
readonly clusterBootstrapAccount?: string;

/**
   * Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
   */
readonly clusterOperatorAccount?: string;

/**
   * Cluster subnet type.
   */
readonly clusterSubnetType?: 'MultiSubnet''SingleSubnet';

/**
   * Fully qualified name of the domain.
   */
readonly domainFqdn?: string;

/**
   * Optional path for fileshare witness.
   */
readonly fileShareWitnessPath?: string;

/**
   * Organizational Unit path in which the nodes and cluster will be present.
   */
readonly ouPath?: string;

/**
   * Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
   */
readonly sqlServiceAccount?: string;

/**
   * Primary key of the witness storage account.
   */
readonly storageAccountPrimaryKey?: string;

/**
   * Fully qualified ARM resource id of the witness storage account.
   */
readonly storageAccountUrl?: string;
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
