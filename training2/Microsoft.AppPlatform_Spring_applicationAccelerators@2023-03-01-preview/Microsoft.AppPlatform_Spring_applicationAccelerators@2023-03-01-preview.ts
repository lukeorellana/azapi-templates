import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApplicationacceleratorsProps extends IAzAPIBaseProps {
/**
   * Sku of the application accelerator resource
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
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
