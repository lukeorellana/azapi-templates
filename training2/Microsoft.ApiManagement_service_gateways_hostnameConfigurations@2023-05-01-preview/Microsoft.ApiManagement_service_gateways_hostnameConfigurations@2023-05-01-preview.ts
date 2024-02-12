import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysHostnameconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:gateways;

/**
   * Identifier of Certificate entity that will be used for TLS connection establishment
   */
readonly certificateId?: string;

/**
   * Hostname value. Supports valid domain name, partial or full wildcard
   */
readonly hostname?: string;

/**
   * Specifies if HTTP/2.0 is supported
   */
readonly http2Enabled?: bool;

/**
   * Determines whether gateway requests client certificate
   */
readonly negotiateClientCertificate?: bool;

/**
   * Specifies if TLS 1.0 is supported
   */
readonly tls10Enabled?: bool;

/**
   * Specifies if TLS 1.1 is supported
   */
readonly tls11Enabled?: bool;
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
