import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsWorkerpoolsProps extends IAzAPIBaseProps {

}

/**
 * WebHostingenvironmentsWorkerpools resource
 */
export class WebHostingenvironmentsWorkerpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsWorkerpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/workerPools@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsWorkerpoolsProps): string {
    return JSON.stringify(
        {properties: {computeMode: "string", workerCount: "${int}", workerSize: "string", workerSizeId: "${int}"}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string"}
    );
  }
}
