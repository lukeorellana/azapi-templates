import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesOrigingroupsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesOrigingroups resource
 */
export class CdnProfilesOrigingroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesOrigingroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/originGroups@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesOrigingroupsProps): string {
    return JSON.stringify(
        {properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, loadBalancingSettings: {additionalLatencyInMilliseconds: "${int}", sampleSize: "${int}", successfulSamplesRequired: "${int}"}, sessionAffinityState: "string", trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}
    );
  }
}
