import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsProps extends IAzAPIBaseProps {
/**
   * The complex type of the extended location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Custom domain configuration for the environment
   */
readonly customDomainConfiguration?: CustomDomainConfiguration;

/**
   * Application Insights connection string used by Dapr to export Service to Service communication telemetry
   */
readonly daprAIConnectionString?: string;

/**
   * Static IP of the connectedEnvironment
   */
readonly staticIp?: string;

/**
   * Certificate password
   */
readonly certificatePassword?: string;

/**
   * PFX or PEM blob
   */
readonly certificateValue?: For Bicep, you can use theany()function.;

/**
   * Dns suffix for the environment domain
   */
readonly dnsSuffix?: string;
}

/**
 * AppConnectedenvironments resource
 */
export class AppConnectedenvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppConnectedenvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/connectedEnvironments@2023-05-01";
  }

  protected getResourceBody(props: AppConnectedenvironmentsProps): string {
    return JSON.stringify(
        {properties: {customDomainConfiguration: {certificatePassword: "string", dnsSuffix: "string"}, daprAIConnectionString: "string", staticIp: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
