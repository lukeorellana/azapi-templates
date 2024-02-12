import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringDevtoolportalsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringDevtoolportals resource
 */
export class AppplatformSpringDevtoolportals extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringDevtoolportalsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringDevtoolportalsProps): string {
    return JSON.stringify(
        {properties: {features: {applicationAccelerator: {state: "string"}, applicationLiveView: {state: "string"}}, public: "${bool}", ssoProperties: {clientId: "string", clientSecret: "string", metadataUrl: "string", scopes: ["string"]}}}
    );
  }
}
