import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsTagrulesProps extends IAzAPIBaseProps {

}

/**
 * LogzMonitorsTagrules resource
 */
export class LogzMonitorsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/tagRules@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendActivityLogs: "${bool}", sendSubscriptionLogs: "${bool}"}}}
    );
  }
}
