import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityAutomationsProps extends IAzAPIBaseProps {

}

/**
 * SecurityAutomations resource
 */
export class SecurityAutomations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityAutomationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/automations@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityAutomationsProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionType: "string"}], description: "string", isEnabled: "${bool}", scopes: [{description: "string", scopePath: "string"}], sources: [{eventSource: "string", ruleSets: [{rules: [{expectedValue: "string", operator: "string", propertyJPath: "string", propertyType: "string"}]}]}]}, kind: "string", etag: "string"}
    );
  }
}
