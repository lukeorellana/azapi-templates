import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysHostnameconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGatewaysHostnameconfigurations resource
 */
export class ApimanagementServiceGatewaysHostnameconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGatewaysHostnameconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGatewaysHostnameconfigurationsProps): string {
    return JSON.stringify(
        {properties: {certificateId: "string", hostname: "string", http2Enabled: "${bool}", negotiateClientCertificate: "${bool}", tls10Enabled: "${bool}", tls11Enabled: "${bool}"}}
    );
  }
}
