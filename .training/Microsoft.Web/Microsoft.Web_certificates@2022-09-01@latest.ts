import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebCertificatesProps extends IAzAPIBaseProps {

}

/**
 * WebCertificates resource
 */
export class WebCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/certificates@2022-09-01";
  }

  protected getResourceBody(props: WebCertificatesProps): string {
    return JSON.stringify(
        {properties: {canonicalName: "string", domainValidationMethod: "string", hostNames: ["string"], keyVaultId: "string", keyVaultSecretName: "string", password: "string", serverFarmId: "string"}, kind: "string"}
    );
  }
}
