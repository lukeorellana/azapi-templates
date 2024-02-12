import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsAccountsTagrulesProps extends IAzAPIBaseProps {

}

/**
 * LogzMonitorsAccountsTagrules resource
 */
export class LogzMonitorsAccountsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsAccountsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsAccountsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendActivityLogs: "${bool}", sendSubscriptionLogs: "${bool}"}}}
    );
  }
}
