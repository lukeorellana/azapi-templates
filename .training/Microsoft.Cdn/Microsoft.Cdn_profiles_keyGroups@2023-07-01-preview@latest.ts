import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesKeygroupsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesKeygroups resource
 */
export class CdnProfilesKeygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesKeygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesKeygroupsProps): string {
    return JSON.stringify(
        {properties: {keyReferences: [{id: "string"}]}}
    );
  }
}
