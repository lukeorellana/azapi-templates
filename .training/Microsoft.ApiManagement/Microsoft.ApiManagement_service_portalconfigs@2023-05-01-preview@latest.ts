import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePortalconfigsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePortalconfigs resource
 */
export class ApimanagementServicePortalconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePortalconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/portalconfigs@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePortalconfigsProps): string {
    return JSON.stringify(
        {properties: {cors: {allowedOrigins: ["string"]}, csp: {allowedSources: ["string"], mode: "string", reportUri: ["string"]}, delegation: {delegateRegistration: "${bool}", delegateSubscription: "${bool}", delegationUrl: "string", validationKey: "string"}, enableBasicAuth: "${bool}", signin: {require: "${bool}"}, signup: {termsOfService: {requireConsent: "${bool}", text: "string"}}}}
    );
  }
}
