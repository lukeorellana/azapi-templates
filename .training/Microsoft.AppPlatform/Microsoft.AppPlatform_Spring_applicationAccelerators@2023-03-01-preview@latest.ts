import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApplicationacceleratorsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApplicationaccelerators resource
 */
export class AppplatformSpringApplicationaccelerators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApplicationacceleratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApplicationacceleratorsProps): string {
    return JSON.stringify(
        {properties: {}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
