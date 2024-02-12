import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeSshpublickeysProps extends IAzAPIBaseProps {
/**
   * SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.
   */
readonly publicKey?: string;
}

/**
 * ComputeSshpublickeys resource
 */
export class ComputeSshpublickeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeSshpublickeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/sshPublicKeys@2023-03-01";
  }

  protected getResourceBody(props: ComputeSshpublickeysProps): string {
    return JSON.stringify(
        {properties: {publicKey: "string"}}
    );
  }
}
