import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsSecretsProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultVaultsSecrets resource
 */
export class KeyvaultVaultsSecrets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsSecretsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/secrets@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsSecretsProps): string {
    return JSON.stringify(
        {properties: {attributes: {enabled: "${bool}", exp: "${int}", nbf: "${int}"}, contentType: "string", value: "string"}}
    );
  }
}
