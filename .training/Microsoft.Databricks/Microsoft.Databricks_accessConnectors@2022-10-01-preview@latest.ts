import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksAccessconnectorsProps extends IAzAPIBaseProps {

}

/**
 * DatabricksAccessconnectors resource
 */
export class DatabricksAccessconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksAccessconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/accessConnectors@2022-10-01-preview";
  }

  protected getResourceBody(props: DatabricksAccessconnectorsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
