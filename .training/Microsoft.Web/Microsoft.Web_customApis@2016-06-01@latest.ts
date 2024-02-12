import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebCustomapisProps extends IAzAPIBaseProps {

}

/**
 * WebCustomapis resource
 */
export class WebCustomapis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebCustomapisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/customApis@2016-06-01";
  }

  protected getResourceBody(props: WebCustomapisProps): string {
    return JSON.stringify(
        {properties: {apiDefinitions: {modifiedSwaggerUrl: "string", originalSwaggerUrl: "string"}, apiType: "string", backendService: {serviceUrl: "string"}, brandColor: "string", capabilities: ["string"], connectionParameters: {}, description: "string", displayName: "string", iconUri: "string", runtimeUrls: ["string"], wsdlDefinition: {content: "string", importMethod: "string", service: {endpointQualifiedNames: ["string"], qualifiedName: "string"}, url: "string"}}, etag: "string"}
    );
  }
}
