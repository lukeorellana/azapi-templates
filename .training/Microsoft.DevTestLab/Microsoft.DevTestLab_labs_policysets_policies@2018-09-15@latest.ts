import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsPolicysetsPoliciesProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsPolicysetsPolicies resource
 */
export class DevtestlabLabsPolicysetsPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsPolicysetsPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/policysets/policies@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsPolicysetsPoliciesProps): string {
    return JSON.stringify(
        {properties: {description: "string", evaluatorType: "string", factData: "string", factName: "string", status: "string", threshold: "string"}}
    );
  }
}
