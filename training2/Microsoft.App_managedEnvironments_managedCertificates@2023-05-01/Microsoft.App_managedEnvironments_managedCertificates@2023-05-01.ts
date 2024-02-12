import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppManagedenvironmentsManagedcertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedEnvironments;

/**
   * Selected type of domain control validation for managed certificates.
   */
readonly domainControlValidation?: 'CNAME''HTTP''TXT';

/**
   * Subject name of the certificate.
   */
readonly subjectName?: string;
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
