import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsKeysProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultVaultsKeys resource
 */
export class KeyvaultVaultsKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/keys@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsKeysProps): string {
    return JSON.stringify(
        {properties: {attributes: {enabled: "${bool}", exp: "${int}", exportable: "${bool}", nbf: "${int}"}, curveName: "string", keyOps: ["string"], keySize: "${int}", kty: "string", release_policy: {contentType: "string", data: "string"}, rotationPolicy: {attributes: {expiryTime: "string"}, lifetimeActions: [{action: {type: "string"}, trigger: {timeAfterCreate: "string", timeBeforeExpiry: "string"}}]}}}
    );
  }
}
