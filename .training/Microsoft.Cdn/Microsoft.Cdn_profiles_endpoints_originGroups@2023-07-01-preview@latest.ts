import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsOrigingroupsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesEndpointsOrigingroups resource
 */
export class CdnProfilesEndpointsOrigingroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsOrigingroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsOrigingroupsProps): string {
    return JSON.stringify(
        {properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, origins: [{id: "string"}], responseBasedOriginErrorDetectionSettings: {httpErrorRanges: [{begin: "${int}", end: "${int}"}], responseBasedDetectedErrorTypes: "string", responseBasedFailoverThresholdPercentage: "${int}"}, trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}
    );
  }
}
