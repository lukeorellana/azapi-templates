import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsCertificates resource
 */
export class RecoveryservicesVaultsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/certificates@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsCertificatesProps): string {
    return JSON.stringify(
        {properties: {authType: "string"}}
    );
  }
}
