import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsProps extends IAzAPIBaseProps {

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
