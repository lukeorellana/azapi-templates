import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsProps extends IAzAPIBaseProps {

}

/**
 * DevcenterProjects resource
 */
export class DevcenterProjects extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsProps): string {
    return JSON.stringify(
        {properties: {description: "string", devCenterId: "string", maxDevBoxesPerUser: "${int}"}}
    );
  }
}
