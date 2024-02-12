import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managers;

/**
   * Specify the Authentication type
   */
readonly authType?: 'AccessControlService''AzureActiveDirectory''Invalid';

/**
   * Gets or sets the base64 encoded certificate raw data string
   */
readonly certificate: string;
}

/**
 * StorsimpleManagersCertificates resource
 */
export class StorsimpleManagersCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/certificates@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersCertificatesProps): string {
    return JSON.stringify(
        {properties: {authType: "string", certificate: "string"}}
    );
  }
}
