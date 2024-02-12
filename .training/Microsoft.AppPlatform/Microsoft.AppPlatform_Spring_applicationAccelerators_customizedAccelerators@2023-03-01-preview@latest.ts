import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApplicationacceleratorsCustomizedaccelerators resource
 */
export class AppplatformSpringApplicationacceleratorsCustomizedaccelerators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps): string {
    return JSON.stringify(
        {properties: {acceleratorTags: ["string"], description: "string", displayName: "string", gitRepository: {authSetting: {authType: "string"}, branch: "string", commit: "string", gitTag: "string", intervalInSeconds: "${int}", url: "string"}, iconUrl: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
