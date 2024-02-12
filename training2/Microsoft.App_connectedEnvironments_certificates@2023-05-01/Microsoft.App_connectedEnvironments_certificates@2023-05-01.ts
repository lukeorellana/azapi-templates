import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppConnectedenvironmentsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:connectedEnvironments;

/**
   * Certificate password.
   */
readonly password?: string;

/**
   * PFX or PEM blob
   */
readonly value?: For Bicep, you can use theany()function.;
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
