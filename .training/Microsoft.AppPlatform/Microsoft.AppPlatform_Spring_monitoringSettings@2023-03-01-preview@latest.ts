import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringMonitoringsettingsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringMonitoringsettings resource
 */
export class AppplatformSpringMonitoringsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringMonitoringsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringMonitoringsettingsProps): string {
    return JSON.stringify(
        {properties: {appInsightsAgentVersions: {}, appInsightsInstrumentationKey: "string", appInsightsSamplingRate: "${int}", error: {code: "string", message: "string"}, traceEnabled: "${bool}"}}
    );
  }
}
