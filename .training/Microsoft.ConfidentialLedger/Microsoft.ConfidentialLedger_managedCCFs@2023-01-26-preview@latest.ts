import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfidentialledgerManagedccfsProps extends IAzAPIBaseProps {

}

/**
 * ConfidentialledgerManagedccfs resource
 */
export class ConfidentialledgerManagedccfs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConfidentialledgerManagedccfsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConfidentialLedger/managedCCFs@2023-01-26-preview";
  }

  protected getResourceBody(props: ConfidentialledgerManagedccfsProps): string {
    return JSON.stringify(
        {properties: {deploymentType: {appSourceUri: "string", languageRuntime: "string"}, memberIdentityCertificates: [{certificate: "string", encryptionkey: "string"}], nodeCount: "${int}"}}
    );
  }
}
