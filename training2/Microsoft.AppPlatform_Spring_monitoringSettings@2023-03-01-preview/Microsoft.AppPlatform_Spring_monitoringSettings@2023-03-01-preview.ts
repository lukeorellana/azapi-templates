import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringMonitoringsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Indicates the versions of application insight agent
   */
readonly appInsightsAgentVersions?: ApplicationInsightsAgentVersions;

/**
   * Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings
   */
readonly appInsightsInstrumentationKey?: string;

/**
   * Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0]
   */
readonly appInsightsSamplingRate?: number;

/**
   * Error when apply Monitoring Setting changes.
   */
readonly error?: Error;

/**
   * Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not
   */
readonly traceEnabled?: bool;

/**
   * The code of error.
   */
readonly code?: string;

/**
   * The message of error.
   */
readonly message?: string;
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
