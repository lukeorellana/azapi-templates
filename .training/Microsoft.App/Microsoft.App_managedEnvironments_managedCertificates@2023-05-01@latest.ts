import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsManagedcertificatesProps extends IAzAPIBaseProps {

}

/**
 * AppManagedenvironmentsManagedcertificates resource
 */
export class AppManagedenvironmentsManagedcertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppManagedenvironmentsManagedcertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/managedEnvironments/managedCertificates@2023-05-01";
  }

  protected getResourceBody(props: AppManagedenvironmentsManagedcertificatesProps): string {
    return JSON.stringify(
        {properties: {domainControlValidation: "string", subjectName: "string"}}
    );
  }
}
