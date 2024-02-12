import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsPolicysetsPoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: policysets;

/**
   * The description of the policy.
   */
readonly description?: string;

/**
   * The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
   */
readonly evaluatorType?: 'AllowedValuesPolicy''MaxValuePolicy';

/**
   * The fact data of the policy.
   */
readonly factData?: string;

/**
   * The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
   */
readonly factName?: 'EnvironmentTemplate''GalleryImage''LabPremiumVmCount''LabTargetCost''LabVmCount''LabVmSize''ScheduleEditPermission''UserOwnedLabPremiumVmCount''UserOwnedLabVmCount''UserOwnedLabVmCountInSubnet';

/**
   * The status of the policy.
   */
readonly status?: 'Disabled''Enabled';

/**
   * The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
   */
readonly threshold?: string;
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
