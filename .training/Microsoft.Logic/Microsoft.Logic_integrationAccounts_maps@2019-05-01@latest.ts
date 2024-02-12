import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsMapsProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsMaps resource
 */
export class LogicIntegrationaccountsMaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsMapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/maps@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsMapsProps): string {
    return JSON.stringify(
        {properties: {content: "string", contentType: "string", mapType: "string", parametersSchema: {ref: "string"}}}
    );
  }
}
