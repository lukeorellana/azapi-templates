import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWebtestsProps extends IAzAPIBaseProps {

}

/**
 * InsightsWebtests resource
 */
export class InsightsWebtests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsWebtestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/webtests@2022-06-15";
  }

  protected getResourceBody(props: InsightsWebtestsProps): string {
    return JSON.stringify(
        {properties: {Configuration: {WebTest: "string"}, Description: "string", Enabled: "${bool}", Frequency: "${int}", Kind: "string", Locations: [{Id: "string"}], Name: "string", Request: {FollowRedirects: "${bool}", Headers: [{key: "string", value: "string"}], HttpVerb: "string", ParseDependentRequests: "${bool}", RequestBody: "string", RequestUrl: "string"}, RetryEnabled: "${bool}", SyntheticMonitorId: "string", Timeout: "${int}", ValidationRules: {ContentValidation: {ContentMatch: "string", IgnoreCase: "${bool}", PassIfTextFound: "${bool}"}, ExpectedHttpStatusCode: "${int}", IgnoreHttpStatusCode: "${bool}", SSLCertRemainingLifetimeCheck: "${int}", SSLCheck: "${bool}"}}, kind: "string"}
    );
  }
}
