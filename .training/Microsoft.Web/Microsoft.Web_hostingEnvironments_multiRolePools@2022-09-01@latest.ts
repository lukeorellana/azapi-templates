import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsMultirolepoolsProps extends IAzAPIBaseProps {

}

/**
 * WebHostingenvironmentsMultirolepools resource
 */
export class WebHostingenvironmentsMultirolepools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsMultirolepoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/multiRolePools@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsMultirolepoolsProps): string {
    return JSON.stringify(
        {properties: {computeMode: "string", workerCount: "${int}", workerSize: "string", workerSizeId: "${int}"}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string"}
    );
  }
}
