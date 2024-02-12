import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceCertificatesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceCertificates resource
 */
export class ApimanagementServiceCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/certificates@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceCertificatesProps): string {
    return JSON.stringify(
        {properties: {data: "string", keyVault: {identityClientId: "string", secretIdentifier: "string"}, password: "string"}}
    );
  }
}
