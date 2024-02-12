import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDtcProps extends IAzAPIBaseProps {

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
