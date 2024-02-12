import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesApplicationsProps extends IAzAPIBaseProps {

}

/**
 * ComputeGalleriesApplications resource
 */
export class ComputeGalleriesApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/applications@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesApplicationsProps): string {
    return JSON.stringify(
        {properties: {customActions: [{description: "string", name: "string", parameters: [{defaultValue: "string", description: "string", name: "string", required: "${bool}", type: "string"}], script: "string"}], description: "string", endOfLifeDate: "string", eula: "string", privacyStatementUri: "string", releaseNoteUri: "string", supportedOSType: "string"}}
    );
  }
}
