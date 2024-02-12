import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApiportalsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApiportals resource
 */
export class AppplatformSpringApiportals extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApiportalsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApiportalsProps): string {
    return JSON.stringify(
        {properties: {gatewayIds: ["string"], httpsOnly: "${bool}", public: "${bool}", sourceUrls: ["string"], ssoProperties: {clientId: "string", clientSecret: "string", issuerUri: "string", scope: ["string"]}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
