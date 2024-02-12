import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakestoreAccountsProps extends IAzAPIBaseProps {

}

/**
 * DatalakestoreAccounts resource
 */
export class DatalakestoreAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakestoreAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeStore/accounts@2016-11-01";
  }

  protected getResourceBody(props: DatalakestoreAccountsProps): string {
    return JSON.stringify(
        {properties: {defaultGroup: "string", encryptionConfig: {keyVaultMetaInfo: {encryptionKeyName: "string", encryptionKeyVersion: "string", keyVaultResourceId: "string"}, type: "string"}, encryptionState: "string", firewallAllowAzureIps: "string", firewallRules: [{name: "string", properties: {endIpAddress: "string", startIpAddress: "string"}}], firewallState: "string", newTier: "string", trustedIdProviders: [{name: "string", properties: {idProvider: "string"}}], trustedIdProviderState: "string", virtualNetworkRules: [{name: "string", properties: {subnetId: "string"}}]}}
    );
  }
}
