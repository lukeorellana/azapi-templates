import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysCertificateauthoritiesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGatewaysCertificateauthorities resource
 */
export class ApimanagementServiceGatewaysCertificateauthorities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGatewaysCertificateauthoritiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/gateways/certificateAuthorities@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGatewaysCertificateauthoritiesProps): string {
    return JSON.stringify(
        {properties: {isTrusted: "${bool}"}}
    );
  }
}
