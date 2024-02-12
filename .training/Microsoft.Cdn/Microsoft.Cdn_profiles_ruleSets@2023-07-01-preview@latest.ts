import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesRulesetsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesRulesets resource
 */
export class CdnProfilesRulesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesRulesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/ruleSets@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesRulesetsProps): string {
    return JSON.stringify(
        
    );
  }
}
