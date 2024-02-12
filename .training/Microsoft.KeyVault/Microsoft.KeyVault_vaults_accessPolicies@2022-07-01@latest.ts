import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsAccesspoliciesProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultVaultsAccesspolicies resource
 */
export class KeyvaultVaultsAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/accessPolicies@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {accessPolicies: [{applicationId: "string", objectId: "string", permissions: {certificates: ["string"], keys: ["string"], secrets: ["string"], storage: ["string"]}, tenantId: "string"}]}}
    );
  }
}
