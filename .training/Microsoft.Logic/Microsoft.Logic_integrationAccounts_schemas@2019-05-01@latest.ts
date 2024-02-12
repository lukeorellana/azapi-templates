import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsSchemasProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsSchemas resource
 */
export class LogicIntegrationaccountsSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/schemas@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsSchemasProps): string {
    return JSON.stringify(
        {properties: {content: "string", contentType: "string", documentName: "string", fileName: "string", schemaType: "string", targetNamespace: "string"}}
    );
  }
}
