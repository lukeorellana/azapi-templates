import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * AppManagedenvironmentsCertificates resource
 */
export class AppManagedenvironmentsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/certificates@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsCertificatesProps): string {
    return JSON.stringify(
        {properties: {password: "string"}}
    );
  }
}
