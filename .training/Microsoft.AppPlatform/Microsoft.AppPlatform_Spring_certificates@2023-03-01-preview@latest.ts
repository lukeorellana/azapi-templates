import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringCertificatesProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringCertificates resource
 */
export class AppplatformSpringCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringCertificatesProps): string {
    return JSON.stringify(
        {properties: {type: "string"}}
    );
  }
}
