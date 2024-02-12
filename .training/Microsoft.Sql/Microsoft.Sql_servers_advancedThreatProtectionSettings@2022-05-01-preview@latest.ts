import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAdvancedthreatprotectionsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersAdvancedthreatprotectionsettings resource
 */
export class SqlServersAdvancedthreatprotectionsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersAdvancedthreatprotectionsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/advancedThreatProtectionSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersAdvancedthreatprotectionsettingsProps): string {
    return JSON.stringify(
        {properties: {state: "string"}}
    );
  }
}
