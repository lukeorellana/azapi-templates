import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultManagedhsmsProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultManagedhsms resource
 */
export class KeyvaultManagedhsms extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultManagedhsmsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/managedHSMs@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultManagedhsmsProps): string {
    return JSON.stringify(
        {properties: {createMode: "string", enablePurgeProtection: "${bool}", enableSoftDelete: "${bool}", initialAdminObjectIds: ["string"], networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string"}]}, publicNetworkAccess: "string", softDeleteRetentionInDays: "${int}", tenantId: "string"}, sku: {family: "B", name: "string"}}
    );
  }
}
