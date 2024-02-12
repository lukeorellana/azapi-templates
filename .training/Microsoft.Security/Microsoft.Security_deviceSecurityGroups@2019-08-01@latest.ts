import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityDevicesecuritygroupsProps extends IAzAPIBaseProps {

}

/**
 * SecurityDevicesecuritygroups resource
 */
export class SecurityDevicesecuritygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityDevicesecuritygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/deviceSecurityGroups@2019-08-01";
  }

  protected getResourceBody(props: SecurityDevicesecuritygroupsProps): string {
    return JSON.stringify(
        {properties: {allowlistRules: [{allowlistValues: ["string"], isEnabled: "${bool}", ruleType: "string"}], denylistRules: [{denylistValues: ["string"], isEnabled: "${bool}", ruleType: "string"}], thresholdRules: [{isEnabled: "${bool}", maxThreshold: "${int}", minThreshold: "${int}", ruleType: "string"}], timeWindowRules: [{isEnabled: "${bool}", maxThreshold: "${int}", minThreshold: "${int}", timeWindowSize: "string", ruleType: "string"}]}}
    );
  }
}
