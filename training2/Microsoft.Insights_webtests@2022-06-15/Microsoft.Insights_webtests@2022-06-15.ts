import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsWebtestsProps extends IAzAPIBaseProps {
/**
   * The kind of WebTest that this web test watches. Choices are ping, multistep and standard.
   */
readonly kind?: 'multistep''ping''standard';

/**
   * An XML configuration specification for a WebTest.
   */
readonly Configuration?: WebTestPropertiesConfiguration;

/**
   * User defined description for this WebTest.
   */
readonly Description?: string;

/**
   * Is the test actively being monitored.
   */
readonly Enabled?: bool;

/**
   * Interval in seconds between test runs for this WebTest. Default value is 300.
   */
readonly Frequency?: number;

/**
   * The kind of web test this is, valid choices are ping, multistep and standard.
   */
readonly Kind: 'multistep''ping''standard';

/**
   * A list of where to physically run the tests from to give global coverage for accessibility of your application.
   */
readonly Locations: WebTestGeolocation[];

/**
   * The collection of request properties
   */
readonly Request?: WebTestPropertiesRequest;

/**
   * Allow for retries should this WebTest fail.
   */
readonly RetryEnabled?: bool;

/**
   * Unique ID of this WebTest. This is typically the same value as the Name field.
   */
readonly SyntheticMonitorId: string;

/**
   * Seconds until this WebTest will timeout and fail. Default value is 30.
   */
readonly Timeout?: number;

/**
   * The collection of validation rule properties
   */
readonly ValidationRules?: WebTestPropertiesValidationRules;

/**
   * The XML specification of a WebTest to run against an application.
   */
readonly WebTest?: string;

/**
   * Location ID for the WebTest to run from.
   */
readonly Id?: string;

/**
   * Follow redirects for this web test.
   */
readonly FollowRedirects?: bool;

/**
   * List of headers and their values to add to the WebTest call.
   */
readonly Headers?: HeaderField[];

/**
   * Http verb to use for this web test.
   */
readonly HttpVerb?: string;

/**
   * Parse Dependent request for this WebTest.
   */
readonly ParseDependentRequests?: bool;

/**
   * Base64 encoded string body to send with this web test.
   */
readonly RequestBody?: string;

/**
   * Url location to test.
   */
readonly RequestUrl?: string;

/**
   * The name of the header.
   */
readonly key?: string;

/**
   * The value of the header.
   */
readonly value?: string;

/**
   * The collection of content validation properties
   */
readonly ContentValidation?: WebTestPropertiesValidationRulesContentValidation;

/**
   * Validate that the WebTest returns the http status code provided.
   */
readonly ExpectedHttpStatusCode?: number;

/**
   * When set, validation will ignore the status code.
   */
readonly IgnoreHttpStatusCode?: bool;

/**
   * A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true.
   */
readonly SSLCertRemainingLifetimeCheck?: number;

/**
   * Checks to see if the SSL cert is still valid.
   */
readonly SSLCheck?: bool;

/**
   * Content to look for in the return of the WebTest.  Must not be null or empty.
   */
readonly ContentMatch?: string;

/**
   * When set, this value makes the ContentMatch validation case insensitive.
   */
readonly IgnoreCase?: bool;

/**
   * When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match
   */
readonly PassIfTextFound?: bool;
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
