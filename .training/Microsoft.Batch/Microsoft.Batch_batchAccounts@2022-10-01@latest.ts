import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsProps extends IAzAPIBaseProps {

}

/**
 * BatchBatchaccounts resource
 */
export class BatchBatchaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsProps): string {
    return JSON.stringify(
        {properties: {allowedAuthenticationModes: ["string"], autoStorage: {authenticationMode: "string", nodeIdentityReference: {resourceId: "string"}, storageAccountId: "string"}, encryption: {keySource: "string", keyVaultProperties: {keyIdentifier: "string"}}, keyVaultReference: {id: "string", url: "string"}, networkProfile: {accountAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}, nodeManagementAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}}, poolAllocationMode: "string", publicNetworkAccess: "string"}}
    );
  }
}
