import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringGateways resource
 */
export class AppplatformSpringGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringGatewaysProps): string {
    return JSON.stringify(
        {properties: {apiMetadataProperties: {description: "string", documentation: "string", serverUrl: "string", title: "string", version: "string"}, apmTypes: ["string"], clientAuth: {certificates: ["string"], certificateVerification: "string"}, corsProperties: {allowCredentials: "${bool}", allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAge: "${int}"}, environmentVariables: {properties: {}, secrets: {}}, httpsOnly: "${bool}", public: "${bool}", resourceRequests: {cpu: "string", memory: "string"}, ssoProperties: {clientId: "string", clientSecret: "string", issuerUri: "string", scope: ["string"]}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
