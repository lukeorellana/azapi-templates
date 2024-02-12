import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeSshpublickeysProps extends IAzAPIBaseProps {

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
