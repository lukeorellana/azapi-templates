import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDtcProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * Active status of managed instance DTC.
   */
readonly dtcEnabled?: bool;

/**
   * External dns suffix search list of managed instance DTC.
   */
readonly externalDnsSuffixSearchList?: string[];

/**
   * Security settings of managed instance DTC.
   */
readonly securitySettings?: ManagedInstanceDtcSecuritySettings;

/**
   * Allow SNA LU 6.2 Transactions to managed instance DTC.
   */
readonly snaLu6point2TransactionsEnabled?: bool;

/**
   * Transaction Manager communication settings of managed instance DTC.
   */
readonly transactionManagerCommunicationSettings?: ManagedInstanceDtcTransactionManagerCommunicationSet...;

/**
   * Default timeout for XA Transactions (in seconds).
   */
readonly xaTransactionsDefaultTimeout?: number;

/**
   * Allow XA Transactions to managed instance DTC.
   */
readonly xaTransactionsEnabled?: bool;

/**
   * Maximum timeout for XA Transactions (in seconds).
   */
readonly xaTransactionsMaximumTimeout?: number;

/**
   * Allow Inbound traffic to managed instance DTC.
   */
readonly allowInboundEnabled?: bool;

/**
   * Allow Outbound traffic of managed instance DTC.
   */
readonly allowOutboundEnabled?: bool;

/**
   * Authentication type of managed instance DTC.
   */
readonly authentication?: string;
}

/**
 * SqlManagedinstancesDtc resource
 */
export class SqlManagedinstancesDtc extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDtcProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/dtc@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDtcProps): string {
    return JSON.stringify(
        {properties: {dtcEnabled: "${bool}", externalDnsSuffixSearchList: ["string"], securitySettings: {snaLu6point2TransactionsEnabled: "${bool}", transactionManagerCommunicationSettings: {allowInboundEnabled: "${bool}", allowOutboundEnabled: "${bool}", authentication: "string"}, xaTransactionsDefaultTimeout: "${int}", xaTransactionsEnabled: "${bool}", xaTransactionsMaximumTimeout: "${int}"}}}
    );
  }
}
