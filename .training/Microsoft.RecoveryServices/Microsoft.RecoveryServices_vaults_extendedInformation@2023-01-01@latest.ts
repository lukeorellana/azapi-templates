import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsExtendedinformationProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsExtendedinformation resource
 */
export class RecoveryservicesVaultsExtendedinformation extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsExtendedinformationProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsExtendedinformationProps): string {
    return JSON.stringify(
        {properties: {algorithm: "string", encryptionKey: "string", encryptionKeyThumbprint: "string", integrityKey: "string"}, etag: "string"}
    );
  }
}
