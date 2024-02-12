import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityDefenderforstoragesettingsProps extends IAzAPIBaseProps {

}

/**
 * SecurityDefenderforstoragesettings resource
 */
export class SecurityDefenderforstoragesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityDefenderforstoragesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/defenderForStorageSettings@2022-12-01-preview";
  }

  protected getResourceBody(props: SecurityDefenderforstoragesettingsProps): string {
    return JSON.stringify(
        {properties: {isEnabled: "${bool}", malwareScanning: {onUpload: {capGBPerMonth: "${int}", isEnabled: "${bool}"}, scanResultsEventGridTopicResourceId: "string"}, overrideSubscriptionLevelSettings: "${bool}", sensitiveDataDiscovery: {isEnabled: "${bool}"}}}
    );
  }
}
