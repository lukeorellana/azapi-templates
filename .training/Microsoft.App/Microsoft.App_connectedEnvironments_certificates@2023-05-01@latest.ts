import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * AppConnectedenvironmentsCertificates resource
 */
export class AppConnectedenvironmentsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppConnectedenvironmentsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/connectedEnvironments/certificates@2023-05-01";
  }

  protected getResourceBody(props: AppConnectedenvironmentsCertificatesProps): string {
    return JSON.stringify(
        {properties: {password: "string"}}
    );
  }
}
