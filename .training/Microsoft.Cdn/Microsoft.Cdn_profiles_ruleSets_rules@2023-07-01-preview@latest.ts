import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesRulesetsRulesProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesRulesetsRules resource
 */
export class CdnProfilesRulesetsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesRulesetsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/ruleSets/rules@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesRulesetsRulesProps): string {
    return JSON.stringify(
        {properties: {actions: [{name: "string"}], conditions: [{name: "string"}], matchProcessingBehavior: "string", order: "${int}"}}
    );
  }
}
