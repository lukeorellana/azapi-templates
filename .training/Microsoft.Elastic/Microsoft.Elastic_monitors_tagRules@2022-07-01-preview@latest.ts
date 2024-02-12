import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticMonitorsTagrulesProps extends IAzAPIBaseProps {

}

/**
 * ElasticMonitorsTagrules resource
 */
export class ElasticMonitorsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticMonitorsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Elastic/monitors/tagRules@2022-07-01-preview";
  }

  protected getResourceBody(props: ElasticMonitorsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendActivityLogs: "${bool}", sendSubscriptionLogs: "${bool}"}, provisioningState: "string"}}
    );
  }
}
