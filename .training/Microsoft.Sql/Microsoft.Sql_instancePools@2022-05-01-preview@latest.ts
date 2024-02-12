import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlInstancepoolsProps extends IAzAPIBaseProps {

}

/**
 * SqlInstancepools resource
 */
export class SqlInstancepools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlInstancepoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/instancePools@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlInstancepoolsProps): string {
    return JSON.stringify(
        {properties: {licenseType: "string", subnetId: "string", vCores: "${int}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
